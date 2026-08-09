param(
  [int]$Port = 4190,
  [switch]$NoBrowser
)

$ErrorActionPreference = 'Stop'
$presentationRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)

function Get-ContentType([string]$Path) {
  switch ([System.IO.Path]::GetExtension($Path).ToLowerInvariant()) {
    '.html' { 'text/html; charset=utf-8' }
    '.js'   { 'text/javascript; charset=utf-8' }
    '.css'  { 'text/css; charset=utf-8' }
    '.json' { 'application/json; charset=utf-8' }
    '.svg'  { 'image/svg+xml' }
    '.png'  { 'image/png' }
    '.jpg'  { 'image/jpeg' }
    '.jpeg' { 'image/jpeg' }
    '.webp' { 'image/webp' }
    '.woff' { 'font/woff' }
    '.woff2'{ 'font/woff2' }
    '.ttf'  { 'font/ttf' }
    '.pdf'  { 'application/pdf' }
    '.md'   { 'text/markdown; charset=utf-8' }
    default { 'application/octet-stream' }
  }
}

function Send-Response($Client, [int]$Status, [string]$ContentType, [byte[]]$Body) {
  $reason = if ($Status -eq 200) { 'OK' } elseif ($Status -eq 404) { 'Not Found' } else { 'Bad Request' }
  $header = "HTTP/1.1 $Status $reason`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
  $stream = $Client.GetStream()
  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
  $stream.Write($headerBytes, 0, $headerBytes.Length)
  if ($Body.Length -gt 0) { $stream.Write($Body, 0, $Body.Length) }
  $stream.Flush()
}

try {
  $listener.Start()
} catch {
  Write-Host "Port $Port is already in use. Opening the existing local website..." -ForegroundColor Yellow
  if (-not $NoBrowser) { Start-Process "http://127.0.0.1:$Port/education/" }
  exit 0
}

$url = "http://127.0.0.1:$Port/education/"
Write-Host ''
Write-Host 'Reza Saadi — local website preview' -ForegroundColor Cyan
Write-Host "Website: $url"
Write-Host 'Keep this window open while previewing. Press Ctrl+C to stop.' -ForegroundColor DarkGray
Write-Host ''
if (-not $NoBrowser) { Start-Process $url }

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    try {
      $reader = [System.IO.StreamReader]::new($client.GetStream(), [System.Text.Encoding]::ASCII, $false, 4096, $true)
      $requestLine = $reader.ReadLine()
      while (($line = $reader.ReadLine()) -ne $null -and $line -ne '') { }

      if (-not $requestLine -or $requestLine -notmatch '^GET\s+([^\s]+)\s+HTTP/') {
        Send-Response $client 400 'text/plain; charset=utf-8' ([System.Text.Encoding]::UTF8.GetBytes('Bad request'))
        continue
      }

      $requestPath = [System.Uri]::UnescapeDataString(($matches[1] -split '\?')[0])
      if ($requestPath.EndsWith('/')) { $requestPath += 'index.html' }
      $relativePath = $requestPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
      $candidate = [System.IO.Path]::GetFullPath((Join-Path $presentationRoot $relativePath))
      $rootWithSeparator = [System.IO.Path]::GetFullPath($presentationRoot).TrimEnd('\') + '\'

      if (-not $candidate.StartsWith($rootWithSeparator, [System.StringComparison]::OrdinalIgnoreCase)) {
        Send-Response $client 400 'text/plain; charset=utf-8' ([System.Text.Encoding]::UTF8.GetBytes('Invalid path'))
      } elseif (Test-Path -LiteralPath $candidate -PathType Leaf) {
        Send-Response $client 200 (Get-ContentType $candidate) ([System.IO.File]::ReadAllBytes($candidate))
      } else {
        Send-Response $client 404 'text/plain; charset=utf-8' ([System.Text.Encoding]::UTF8.GetBytes('Not found'))
      }
    } catch {
      Write-Warning $_.Exception.Message
    } finally {
      $client.Close()
    }
  }
} finally {
  $listener.Stop()
}

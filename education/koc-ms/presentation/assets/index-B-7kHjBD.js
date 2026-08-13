(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/*!
 * reveal.js 5.2.0
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
 */const kt=(n,e)=>{for(let t in e)n[t]=e[t];return n},q=(n,e)=>Array.from(n.querySelectorAll(e)),fn=(n,e,t)=>{t?n.classList.add(e):n.classList.remove(e)},wt=n=>{if(typeof n=="string"){if(n==="null")return null;if(n==="true")return!0;if(n==="false")return!1;if(n.match(/^-?[\d\.]+$/))return parseFloat(n)}return n},Ge=(n,e)=>{n.style.transform=e},Ns=(n,e)=>{let t=n.matches||n.matchesSelector||n.msMatchesSelector;return!(!t||!t.call(n,e))},oe=(n,e)=>{if(typeof n.closest=="function")return n.closest(e);for(;n;){if(Ns(n,e))return n;n=n.parentNode}return null},ka=n=>{let e=(n=n||document.documentElement).requestFullscreen||n.webkitRequestFullscreen||n.webkitRequestFullScreen||n.mozRequestFullScreen||n.msRequestFullscreen;e&&e.apply(n)},Ln=n=>{let e=document.createElement("style");return e.type="text/css",n&&n.length>0&&(e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))),document.head.appendChild(e),e},Di=()=>{let n={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,(e=>{n[e.split("=").shift()]=e.split("=").pop()}));for(let e in n){let t=n[e];n[e]=wt(unescape(t))}return n.dependencies!==void 0&&delete n.dependencies,n},Br={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},Aa=navigator.userAgent,Ut=/(iphone|ipod|ipad|android)/gi.test(Aa)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Pa=/android/gi.test(Aa);var Dr=(function(n){if(n){var e=function(b){return[].slice.call(b)},t=3,s=[],i=null,a="requestAnimationFrame"in n?function(){n.cancelAnimationFrame(i),i=n.requestAnimationFrame((function(){return o(s.filter((function(b){return b.dirty&&b.active})))}))}:function(){},r=function(b){return function(){s.forEach((function(O){return O.dirty=b})),a()}},o=function(b){b.filter((function(N){return!N.styleComputed})).forEach((function(N){N.styleComputed=d(N)})),b.filter(u).forEach(g);var O=b.filter(h);O.forEach(c),O.forEach((function(N){g(N),l(N)})),O.forEach(S)},l=function(b){return b.dirty=0},c=function(b){b.availableWidth=b.element.parentNode.clientWidth,b.currentWidth=b.element.scrollWidth,b.previousFontSize=b.currentFontSize,b.currentFontSize=Math.min(Math.max(b.minSize,b.availableWidth/b.currentWidth*b.previousFontSize),b.maxSize),b.whiteSpace=b.multiLine&&b.currentFontSize===b.minSize?"normal":"nowrap"},h=function(b){return b.dirty!==2||b.dirty===2&&b.element.parentNode.clientWidth!==b.availableWidth},d=function(b){var O=n.getComputedStyle(b.element,null);return b.currentFontSize=parseFloat(O.getPropertyValue("font-size")),b.display=O.getPropertyValue("display"),b.whiteSpace=O.getPropertyValue("white-space"),!0},u=function(b){var O=!1;return!b.preStyleTestCompleted&&(/inline-/.test(b.display)||(O=!0,b.display="inline-block"),b.whiteSpace!=="nowrap"&&(O=!0,b.whiteSpace="nowrap"),b.preStyleTestCompleted=!0,O)},g=function(b){b.element.style.whiteSpace=b.whiteSpace,b.element.style.display=b.display,b.element.style.fontSize=b.currentFontSize+"px"},S=function(b){b.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:b.previousFontSize,newValue:b.currentFontSize,scaleFactor:b.currentFontSize/b.previousFontSize}}))},p=function(b,O){return function(){b.dirty=O,b.active&&a()}},w=function(b){return function(){s=s.filter((function(O){return O.element!==b.element})),b.observeMutations&&b.observer.disconnect(),b.element.style.whiteSpace=b.originalStyle.whiteSpace,b.element.style.display=b.originalStyle.display,b.element.style.fontSize=b.originalStyle.fontSize}},y=function(b){return function(){b.active||(b.active=!0,a())}},P=function(b){return function(){return b.active=!1}},L=function(b){b.observeMutations&&(b.observer=new MutationObserver(p(b,1)),b.observer.observe(b.element,b.observeMutations))},T={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in n&&{subtree:!0,childList:!0,characterData:!0}},A=null,k=function(){n.clearTimeout(A),A=n.setTimeout(r(2),C.observeWindowDelay)},E=["resize","orientationchange"];return Object.defineProperty(C,"observeWindow",{set:function(b){var O="".concat(b?"add":"remove","EventListener");E.forEach((function(N){n[O](N,k)}))}}),C.observeWindow=!0,C.observeWindowDelay=100,C.fitAll=r(t),C}function _(b,O){var N=Object.assign({},T,O),D=b.map((function(J){var te=Object.assign({},N,{element:J,active:!0});return(function(ne){ne.originalStyle={whiteSpace:ne.element.style.whiteSpace,display:ne.element.style.display,fontSize:ne.element.style.fontSize},L(ne),ne.newbie=!0,ne.dirty=!0,s.push(ne)})(te),{element:J,fit:p(te,t),unfreeze:y(te),freeze:P(te),unsubscribe:w(te)}}));return a(),D}function C(b){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof b=="string"?_(e(document.querySelectorAll(b)),O):_([b],O)[0]}})(typeof window>"u"?null:window);let zr=class{constructor(e){this.Reveal=e,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(e){if(this.Reveal.isScrollView())return!0;let t=this.Reveal.getConfig().preloadIframes;return typeof t!="boolean"&&(t=e.hasAttribute("data-preload")),t}load(e,t={}){e.style.display=this.Reveal.getConfig().display,q(e,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((i=>{(i.tagName!=="IFRAME"||this.shouldPreload(i))&&(i.setAttribute("src",i.getAttribute("data-src")),i.setAttribute("data-lazy-loaded",""),i.removeAttribute("data-src"))})),q(e,"video, audio").forEach((i=>{let a=0;q(i,"source[data-src]").forEach((r=>{r.setAttribute("src",r.getAttribute("data-src")),r.removeAttribute("data-src"),r.setAttribute("data-lazy-loaded",""),a+=1})),Ut&&i.tagName==="VIDEO"&&i.setAttribute("playsinline",""),a>0&&i.load()}));let s=e.slideBackgroundElement;if(s){s.style.display="block";let i=e.slideBackgroundContentElement,a=e.getAttribute("data-background-iframe");if(s.hasAttribute("data-loaded")===!1){s.setAttribute("data-loaded","true");let o=e.getAttribute("data-background-image"),l=e.getAttribute("data-background-video"),c=e.hasAttribute("data-background-video-loop"),h=e.hasAttribute("data-background-video-muted");if(o)/^data:/.test(o.trim())?i.style.backgroundImage=`url(${o.trim()})`:i.style.backgroundImage=o.split(",").map((d=>`url(${((u="")=>encodeURI(u).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,(g=>`%${g.charCodeAt(0).toString(16).toUpperCase()}`)))(decodeURI(d.trim()))})`)).join(",");else if(l){let d=document.createElement("video");c&&d.setAttribute("loop",""),(h||this.Reveal.isSpeakerNotes())&&(d.muted=!0),Ut&&(d.muted=!0,d.setAttribute("playsinline","")),l.split(",").forEach((u=>{const g=document.createElement("source");g.setAttribute("src",u);let S=((p="")=>Br[p.split(".").pop()])(u);S&&g.setAttribute("type",S),d.appendChild(g)})),i.appendChild(d)}else if(a&&t.excludeIframes!==!0){let d=document.createElement("iframe");d.setAttribute("allowfullscreen",""),d.setAttribute("mozallowfullscreen",""),d.setAttribute("webkitallowfullscreen",""),d.setAttribute("allow","autoplay"),d.setAttribute("data-src",a),d.style.width="100%",d.style.height="100%",d.style.maxHeight="100%",d.style.maxWidth="100%",i.appendChild(d)}}let r=i.querySelector("iframe[data-src]");r&&this.shouldPreload(s)&&!/autoplay=(1|true|yes)/gi.test(a)&&r.getAttribute("src")!==a&&r.setAttribute("src",a)}this.layout(e)}layout(e){Array.from(e.querySelectorAll(".r-fit-text")).forEach((t=>{Dr(t,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})}))}unload(e){e.style.display="none";let t=this.Reveal.getSlideBackground(e);t&&(t.style.display="none",q(t,"iframe[src]").forEach((s=>{s.removeAttribute("src")}))),q(e,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((s=>{s.setAttribute("data-src",s.getAttribute("src")),s.removeAttribute("src")})),q(e,"video[data-lazy-loaded] source[src], audio source[src]").forEach((s=>{s.setAttribute("data-src",s.getAttribute("src")),s.removeAttribute("src")}))}formatEmbeddedContent(){let e=(t,s,i)=>{q(this.Reveal.getSlidesElement(),"iframe["+t+'*="'+s+'"]').forEach((a=>{let r=a.getAttribute(t);r&&r.indexOf(i)===-1&&a.setAttribute(t,r+(/\?/.test(r)?"&":"?")+i)}))};e("src","youtube.com/embed/","enablejsapi=1"),e("data-src","youtube.com/embed/","enablejsapi=1"),e("src","player.vimeo.com/","api=1"),e("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(e){if(e){const t=this.Reveal.isSpeakerNotes();q(e,'img[src$=".gif"]').forEach((s=>{s.setAttribute("src",s.getAttribute("src"))})),q(e,"video, audio").forEach((s=>{if(oe(s,".fragment")&&!oe(s,".fragment.visible"))return;let i=this.Reveal.getConfig().autoPlayMedia;if(typeof i!="boolean"&&(i=s.hasAttribute("data-autoplay")||!!oe(s,".slide-background")),i&&typeof s.play=="function"){if(t&&!s.muted)return;if(s.readyState>1)this.startEmbeddedMedia({target:s});else if(Ut){let a=s.play();a&&typeof a.catch=="function"&&s.controls===!1&&a.catch((()=>{s.controls=!0,s.addEventListener("play",(()=>{s.controls=!1}))}))}else s.removeEventListener("loadeddata",this.startEmbeddedMedia),s.addEventListener("loadeddata",this.startEmbeddedMedia)}})),t||(q(e,"iframe[src]").forEach((s=>{oe(s,".fragment")&&!oe(s,".fragment.visible")||this.startEmbeddedIframe({target:s})})),q(e,"iframe[data-src]").forEach((s=>{oe(s,".fragment")&&!oe(s,".fragment.visible")||s.getAttribute("src")!==s.getAttribute("data-src")&&(s.removeEventListener("load",this.startEmbeddedIframe),s.addEventListener("load",this.startEmbeddedIframe),s.setAttribute("src",s.getAttribute("data-src")))})))}}startEmbeddedMedia(e){let t=!!oe(e.target,"html"),s=!!oe(e.target,".present");t&&s&&(e.target.paused||e.target.ended)&&(e.target.currentTime=0,e.target.play()),e.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(e){let t=e.target;if(t&&t.contentWindow){let s=!!oe(e.target,"html"),i=!!oe(e.target,".present");if(s&&i){let a=this.Reveal.getConfig().autoPlayMedia;typeof a!="boolean"&&(a=t.hasAttribute("data-autoplay")||!!oe(t,".slide-background")),/youtube\.com\/embed\//.test(t.getAttribute("src"))&&a?t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(t.getAttribute("src"))&&a?t.contentWindow.postMessage('{"method":"play"}',"*"):t.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(e,t={}){t=kt({unloadIframes:!0},t),e&&e.parentNode&&(q(e,"video, audio").forEach((s=>{s.hasAttribute("data-ignore")||typeof s.pause!="function"||(s.setAttribute("data-paused-by-reveal",""),s.pause())})),q(e,"iframe").forEach((s=>{s.contentWindow&&s.contentWindow.postMessage("slide:stop","*"),s.removeEventListener("load",this.startEmbeddedIframe)})),q(e,'iframe[src*="youtube.com/embed/"]').forEach((s=>{!s.hasAttribute("data-ignore")&&s.contentWindow&&typeof s.contentWindow.postMessage=="function"&&s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})),q(e,'iframe[src*="player.vimeo.com/"]').forEach((s=>{!s.hasAttribute("data-ignore")&&s.contentWindow&&typeof s.contentWindow.postMessage=="function"&&s.contentWindow.postMessage('{"method":"pause"}',"*")})),t.unloadIframes===!0&&q(e,"iframe[data-src]").forEach((s=>{s.setAttribute("src","about:blank"),s.removeAttribute("src")})))}};const at=".slides section",We=".slides>section",zi=".slides>section.present>section",Hr=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/;let Wr=class{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){let s="none";e.slideNumber&&!this.Reveal.isPrintView()&&(e.showSlideNumber==="all"||e.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(s="block"),this.element.style.display=s}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(e=this.Reveal.getCurrentSlide()){let t,s=this.Reveal.getConfig(),i="h.v";if(typeof s.slideNumber=="function")t=s.slideNumber(e);else{typeof s.slideNumber=="string"&&(i=s.slideNumber),/c/.test(i)||this.Reveal.getHorizontalSlides().length!==1||(i="c");let r=e&&e.dataset.visibility==="uncounted"?0:1;switch(t=[],i){case"c":t.push(this.Reveal.getSlidePastCount(e)+r);break;case"c/t":t.push(this.Reveal.getSlidePastCount(e)+r,"/",this.Reveal.getTotalSlides());break;default:let o=this.Reveal.getIndices(e);t.push(o.h+r);let l=i==="h/v"?"/":".";this.Reveal.isVerticalSlide(e)&&t.push(l,o.v+1)}}let a="#"+this.Reveal.location.getHash(e);return this.formatNumber(t[0],t[1],t[2],a)}formatNumber(e,t,s,i="#"+this.Reveal.location.getHash()){return typeof s!="number"||isNaN(s)?`<a href="${i}">
					<span class="slide-number-a">${e}</span>
					</a>`:`<a href="${i}">
					<span class="slide-number-a">${e}</span>
					<span class="slide-number-delimiter">${t}</span>
					<span class="slide-number-b">${s}</span>
					</a>`}destroy(){this.element.remove()}},Vr=class{constructor(e){this.Reveal=e,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;let e,t=this.jumpInput.value.trim("");if(/^\d+$/.test(t)){const s=this.Reveal.getConfig().slideNumber;if(s==="c"||s==="c/t"){const i=this.Reveal.getSlides()[parseInt(t,10)-1];i&&(e=this.Reveal.getIndices(i))}}return e||(/^\d+\.\d+$/.test(t)&&(t=t.replace(".","/")),e=this.Reveal.location.getIndicesFromHash(t,{oneBasedIndex:!0})),!e&&/\S+/i.test(t)&&t.length>1&&(e=this.search(t)),e&&t!==""?(this.Reveal.slide(e.h,e.v,e.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(e){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout((()=>this.jump()),e)}search(e){const t=new RegExp("\\b"+e.trim()+"\\b","i"),s=this.Reveal.getSlides().find((i=>t.test(i.innerText)));return s?this.Reveal.getIndices(s):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(e){e.keyCode===13?this.confirm():e.keyCode===27&&(this.cancel(),e.stopImmediatePropagation())}onInput(e){this.jumpAfter(200)}onBlur(){setTimeout((()=>this.hide()),1)}};const vn=n=>{let e=n.match(/^#([0-9a-f]{3})$/i);if(e&&e[1])return e=e[1],{r:17*parseInt(e.charAt(0),16),g:17*parseInt(e.charAt(1),16),b:17*parseInt(e.charAt(2),16)};let t=n.match(/^#([0-9a-f]{6})$/i);if(t&&t[1])return t=t[1],{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)};let s=n.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(s)return{r:parseInt(s[1],10),g:parseInt(s[2],10),b:parseInt(s[3],10)};let i=n.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10),a:parseFloat(i[4])}:null};let Gr=class{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach((e=>{let t=this.createBackground(e,this.element);q(e,"section").forEach((s=>{this.createBackground(s,t),t.classList.add("stack")}))})),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout((()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")}),1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(e,t){let s=document.createElement("div");s.className="slide-background "+e.className.replace(/present|past|future/,"");let i=document.createElement("div");return i.className="slide-background-content",s.appendChild(i),t.appendChild(s),e.slideBackgroundElement=s,e.slideBackgroundContentElement=i,this.sync(e),s}sync(e){const t=e.slideBackgroundElement,s=e.slideBackgroundContentElement,i={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundImage:e.getAttribute("data-background-image"),backgroundVideo:e.getAttribute("data-background-video"),backgroundIframe:e.getAttribute("data-background-iframe"),backgroundColor:e.getAttribute("data-background-color"),backgroundGradient:e.getAttribute("data-background-gradient"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition"),backgroundOpacity:e.getAttribute("data-background-opacity")},a=e.hasAttribute("data-preload");e.classList.remove("has-dark-background"),e.classList.remove("has-light-background"),t.removeAttribute("data-loaded"),t.removeAttribute("data-background-hash"),t.removeAttribute("data-background-size"),t.removeAttribute("data-background-transition"),t.style.backgroundColor="",s.style.backgroundSize="",s.style.backgroundRepeat="",s.style.backgroundPosition="",s.style.backgroundImage="",s.style.opacity="",s.innerHTML="",i.background&&(/^(http|file|\/\/)/gi.test(i.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(i.background)?e.setAttribute("data-background-image",i.background):t.style.background=i.background),(i.background||i.backgroundColor||i.backgroundGradient||i.backgroundImage||i.backgroundVideo||i.backgroundIframe)&&t.setAttribute("data-background-hash",i.background+i.backgroundSize+i.backgroundImage+i.backgroundVideo+i.backgroundIframe+i.backgroundColor+i.backgroundGradient+i.backgroundRepeat+i.backgroundPosition+i.backgroundTransition+i.backgroundOpacity),i.backgroundSize&&t.setAttribute("data-background-size",i.backgroundSize),i.backgroundColor&&(t.style.backgroundColor=i.backgroundColor),i.backgroundGradient&&(t.style.backgroundImage=i.backgroundGradient),i.backgroundTransition&&t.setAttribute("data-background-transition",i.backgroundTransition),a&&t.setAttribute("data-preload",""),i.backgroundSize&&(s.style.backgroundSize=i.backgroundSize),i.backgroundRepeat&&(s.style.backgroundRepeat=i.backgroundRepeat),i.backgroundPosition&&(s.style.backgroundPosition=i.backgroundPosition),i.backgroundOpacity&&(s.style.opacity=i.backgroundOpacity);const r=this.getContrastClass(e);typeof r=="string"&&e.classList.add(r)}getContrastClass(e){const t=e.slideBackgroundElement;let s=e.getAttribute("data-background-color");if(!s||!vn(s)){let a=window.getComputedStyle(t);a&&a.backgroundColor&&(s=a.backgroundColor)}if(s){const a=vn(s);if(a&&a.a!==0)return typeof(i=s)=="string"&&(i=vn(i)),(i?(299*i.r+587*i.g+114*i.b)/1e3:null)<128?"has-dark-background":"has-light-background"}var i;return null}bubbleSlideContrastClassToElement(e,t){["has-light-background","has-dark-background"].forEach((s=>{e.classList.contains(s)?t.classList.add(s):t.classList.remove(s)}),this)}update(e=!1){let t=this.Reveal.getConfig(),s=this.Reveal.getCurrentSlide(),i=this.Reveal.getIndices(),a=null,r=t.rtl?"future":"past",o=t.rtl?"past":"future";if(Array.from(this.element.childNodes).forEach(((c,h)=>{c.classList.remove("past","present","future"),h<i.h?c.classList.add(r):h>i.h?c.classList.add(o):(c.classList.add("present"),a=c),(e||h===i.h)&&q(c,".slide-background").forEach(((d,u)=>{d.classList.remove("past","present","future");const g=typeof i.v=="number"?i.v:0;u<g?d.classList.add("past"):u>g?d.classList.add("future"):(d.classList.add("present"),h===i.h&&(a=d))}))})),this.previousBackground&&!this.previousBackground.closest("body")&&(this.previousBackground=null),a&&this.previousBackground){let c=this.previousBackground.getAttribute("data-background-hash"),h=a.getAttribute("data-background-hash");if(h&&h===c&&a!==this.previousBackground){this.element.classList.add("no-transition");const d=a.querySelector("video"),u=this.previousBackground.querySelector("video");if(d&&u){const g=d.parentNode;u.parentNode.appendChild(d),g.appendChild(u)}}}const l=a!==this.previousBackground;if(l&&this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),l&&a){this.Reveal.slideContent.startEmbeddedContent(a);let c=a.querySelector(".slide-background-content");if(c){let h=c.style.backgroundImage||"";/\.gif/i.test(h)&&(c.style.backgroundImage="",window.getComputedStyle(c).opacity,c.style.backgroundImage=h)}this.previousBackground=a}s&&this.bubbleSlideContrastClassToElement(s,this.Reveal.getRevealElement()),setTimeout((()=>{this.element.classList.remove("no-transition")}),10)}updateParallax(){let e=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let t,s,i=this.Reveal.getHorizontalSlides(),a=this.Reveal.getVerticalSlides(),r=this.element.style.backgroundSize.split(" ");r.length===1?t=s=parseInt(r[0],10):(t=parseInt(r[0],10),s=parseInt(r[1],10));let o,l,c=this.element.offsetWidth,h=i.length;o=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:h>1?(t-c)/(h-1):0,l=o*e.h*-1;let d,u,g=this.element.offsetHeight,S=a.length;d=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(s-g)/(S-1),u=S>0?d*e.v:0,this.element.style.backgroundPosition=l+"px "+-u+"px"}}destroy(){this.element.remove()}},Hi=0,Qr=class{constructor(e){this.Reveal=e}run(e,t){this.reset();let s=this.Reveal.getSlides(),i=s.indexOf(t),a=s.indexOf(e);if(e&&t&&e.hasAttribute("data-auto-animate")&&t.hasAttribute("data-auto-animate")&&e.getAttribute("data-auto-animate-id")===t.getAttribute("data-auto-animate-id")&&!(i>a?t:e).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||Ln();let r=this.getAutoAnimateOptions(t);e.dataset.autoAnimate="pending",t.dataset.autoAnimate="pending",r.slideDirection=i>a?"forward":"backward";let o=e.style.display==="none";o&&(e.style.display=this.Reveal.getConfig().display);let l=this.getAutoAnimatableElements(e,t).map((c=>this.autoAnimateElements(c.from,c.to,c.options||{},r,Hi++)));if(o&&(e.style.display="none"),t.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let c=.8*r.duration,h=.2*r.duration;this.getUnmatchedAutoAnimateElements(t).forEach((d=>{let u=this.getAutoAnimateOptions(d,r),g="unmatched";u.duration===r.duration&&u.delay===r.delay||(g="unmatched-"+Hi++,l.push(`[data-auto-animate="running"] [data-auto-animate-target="${g}"] { transition: opacity ${u.duration}s ease ${u.delay}s; }`)),d.dataset.autoAnimateTarget=g}),this),l.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${c}s ease ${h}s; }`)}this.autoAnimateStyleSheet.innerHTML=l.join(""),requestAnimationFrame((()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,t.dataset.autoAnimate="running")})),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:e,toSlide:t,sheet:this.autoAnimateStyleSheet}})}}reset(){q(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach((e=>{e.dataset.autoAnimate=""})),q(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach((e=>{delete e.dataset.autoAnimateTarget})),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(e,t,s,i,a){e.dataset.autoAnimateTarget="",t.dataset.autoAnimateTarget=a;let r=this.getAutoAnimateOptions(t,i);s.delay!==void 0&&(r.delay=s.delay),s.duration!==void 0&&(r.duration=s.duration),s.easing!==void 0&&(r.easing=s.easing);let o=this.getAutoAnimatableProperties("from",e,s),l=this.getAutoAnimatableProperties("to",t,s);if(t.classList.contains("fragment")&&delete l.styles.opacity,s.translate!==!1||s.scale!==!1){let d=this.Reveal.getScale(),u={x:(o.x-l.x)/d,y:(o.y-l.y)/d,scaleX:o.width/l.width,scaleY:o.height/l.height};u.x=Math.round(1e3*u.x)/1e3,u.y=Math.round(1e3*u.y)/1e3,u.scaleX=Math.round(1e3*u.scaleX)/1e3,u.scaleX=Math.round(1e3*u.scaleX)/1e3;let g=s.translate!==!1&&(u.x!==0||u.y!==0),S=s.scale!==!1&&(u.scaleX!==0||u.scaleY!==0);if(g||S){let p=[];g&&p.push(`translate(${u.x}px, ${u.y}px)`),S&&p.push(`scale(${u.scaleX}, ${u.scaleY})`),o.styles.transform=p.join(" "),o.styles["transform-origin"]="top left",l.styles.transform="none"}}for(let d in l.styles){const u=l.styles[d],g=o.styles[d];u===g?delete l.styles[d]:(u.explicitValue===!0&&(l.styles[d]=u.value),g.explicitValue===!0&&(o.styles[d]=g.value))}let c="",h=Object.keys(l.styles);return h.length>0&&(o.styles.transition="none",l.styles.transition=`all ${r.duration}s ${r.easing} ${r.delay}s`,l.styles["transition-property"]=h.join(", "),l.styles["will-change"]=h.join(", "),c='[data-auto-animate-target="'+a+'"] {'+Object.keys(o.styles).map((d=>d+": "+o.styles[d]+" !important;")).join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+a+'"] {'+Object.keys(l.styles).map((d=>d+": "+l.styles[d]+" !important;")).join("")+"}"),c}getAutoAnimateOptions(e,t){let s={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(s=kt(s,t),e.parentNode){let i=oe(e.parentNode,"[data-auto-animate-target]");i&&(s=this.getAutoAnimateOptions(i,s))}return e.dataset.autoAnimateEasing&&(s.easing=e.dataset.autoAnimateEasing),e.dataset.autoAnimateDuration&&(s.duration=parseFloat(e.dataset.autoAnimateDuration)),e.dataset.autoAnimateDelay&&(s.delay=parseFloat(e.dataset.autoAnimateDelay)),s}getAutoAnimatableProperties(e,t,s){let i=this.Reveal.getConfig(),a={styles:[]};if(s.translate!==!1||s.scale!==!1){let o;if(typeof s.measure=="function")o=s.measure(t);else if(i.center)o=t.getBoundingClientRect();else{let l=this.Reveal.getScale();o={x:t.offsetLeft*l,y:t.offsetTop*l,width:t.offsetWidth*l,height:t.offsetHeight*l}}a.x=o.x,a.y=o.y,a.width=o.width,a.height=o.height}const r=getComputedStyle(t);return(s.styles||i.autoAnimateStyles).forEach((o=>{let l;typeof o=="string"&&(o={property:o}),o.from!==void 0&&e==="from"?l={value:o.from,explicitValue:!0}:o.to!==void 0&&e==="to"?l={value:o.to,explicitValue:!0}:(o.property==="line-height"&&(l=parseFloat(r["line-height"])/parseFloat(r["font-size"])),isNaN(l)&&(l=r[o.property])),l!==""&&(a.styles[o.property]=l)})),a}getAutoAnimatableElements(e,t){let s=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,e,t),i=[];return s.filter(((a,r)=>{if(i.indexOf(a.to)===-1)return i.push(a.to),!0}))}getAutoAnimatePairs(e,t){let s=[];const i="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(s,e,t,"[data-id]",(a=>a.nodeName+":::"+a.getAttribute("data-id"))),this.findAutoAnimateMatches(s,e,t,i,(a=>a.nodeName+":::"+a.textContent.trim())),this.findAutoAnimateMatches(s,e,t,"img, video, iframe",(a=>a.nodeName+":::"+(a.getAttribute("src")||a.getAttribute("data-src")))),this.findAutoAnimateMatches(s,e,t,"pre",(a=>a.nodeName+":::"+a.textContent.trim())),s.forEach((a=>{Ns(a.from,i)?a.options={scale:!1}:Ns(a.from,"pre")&&(a.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(s,a.from,a.to,".hljs .hljs-ln-code",(r=>r.textContent),{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(s,a.from,a.to,".hljs .hljs-ln-numbers[data-line-number]",(r=>r.getAttribute("data-line-number")),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))}),this),s}getLocalBoundingBox(e){const t=this.Reveal.getScale();return{x:Math.round(e.offsetLeft*t*100)/100,y:Math.round(e.offsetTop*t*100)/100,width:Math.round(e.offsetWidth*t*100)/100,height:Math.round(e.offsetHeight*t*100)/100}}findAutoAnimateMatches(e,t,s,i,a,r){let o={},l={};[].slice.call(t.querySelectorAll(i)).forEach(((c,h)=>{const d=a(c);typeof d=="string"&&d.length&&(o[d]=o[d]||[],o[d].push(c))})),[].slice.call(s.querySelectorAll(i)).forEach(((c,h)=>{const d=a(c);let u;if(l[d]=l[d]||[],l[d].push(c),o[d]){const g=l[d].length-1,S=o[d].length-1;o[d][g]?(u=o[d][g],o[d][g]=null):o[d][S]&&(u=o[d][S],o[d][S]=null)}u&&e.push({from:u,to:c,options:r})}))}getUnmatchedAutoAnimateElements(e){return[].slice.call(e.children).reduce(((t,s)=>{const i=s.querySelector("[data-auto-animate-target]");return s.hasAttribute("data-auto-animate-target")||i||t.push(s),s.querySelector("[data-auto-animate-target]")&&(t=t.concat(this.getUnmatchedAutoAnimateElements(s))),t}),[])}},Yr=class{constructor(e){this.Reveal=e,this.active=!1,this.activatedCallbacks=[],this.onScroll=this.onScroll.bind(this)}activate(){if(this.active)return;const e=this.Reveal.getState();this.active=!0,this.slideHTMLBeforeActivation=this.Reveal.getSlidesElement().innerHTML;const t=q(this.Reveal.getRevealElement(),We),s=q(this.Reveal.getRevealElement(),".backgrounds>.slide-background");let i;this.viewportElement.classList.add("loading-scroll-mode","reveal-scroll");const a=window.getComputedStyle(this.viewportElement);a&&a.background&&(i=a.background);const r=[],o=t[0].parentNode;let l;const c=(h,d,u,g)=>{let S;if(l&&this.Reveal.shouldAutoAnimateBetween(l,h))S=document.createElement("div"),S.className="scroll-page-content scroll-auto-animate-page",S.style.display="none",l.closest(".scroll-page-content").parentNode.appendChild(S);else{const p=document.createElement("div");if(p.className="scroll-page",r.push(p),g&&s.length>d){const y=s[d],P=window.getComputedStyle(y);P&&P.background?p.style.background=P.background:i&&(p.style.background=i)}else i&&(p.style.background=i);const w=document.createElement("div");w.className="scroll-page-sticky",p.appendChild(w),S=document.createElement("div"),S.className="scroll-page-content",w.appendChild(S)}S.appendChild(h),h.classList.remove("past","future"),h.setAttribute("data-index-h",d),h.setAttribute("data-index-v",u),h.slideBackgroundElement&&(h.slideBackgroundElement.remove("past","future"),S.insertBefore(h.slideBackgroundElement,h)),l=h};t.forEach(((h,d)=>{this.Reveal.isVerticalStack(h)?h.querySelectorAll("section").forEach(((u,g)=>{c(u,d,g,!0)})):c(h,d,0)}),this),this.createProgressBar(),q(this.Reveal.getRevealElement(),".stack").forEach((h=>h.remove())),r.forEach((h=>o.appendChild(h))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.layout(),this.Reveal.setState(e),this.activatedCallbacks.forEach((h=>h())),this.activatedCallbacks=[],this.restoreScrollPosition(),this.viewportElement.classList.remove("loading-scroll-mode"),this.viewportElement.addEventListener("scroll",this.onScroll,{passive:!0})}deactivate(){if(!this.active)return;const e=this.Reveal.getState();this.active=!1,this.viewportElement.removeEventListener("scroll",this.onScroll),this.viewportElement.classList.remove("reveal-scroll"),this.removeProgressBar(),this.Reveal.getSlidesElement().innerHTML=this.slideHTMLBeforeActivation,this.Reveal.sync(),this.Reveal.setState(e),this.slideHTMLBeforeActivation=null}toggle(e){typeof e=="boolean"?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}createProgressBar(){this.progressBar=document.createElement("div"),this.progressBar.className="scrollbar",this.progressBarInner=document.createElement("div"),this.progressBarInner.className="scrollbar-inner",this.progressBar.appendChild(this.progressBarInner),this.progressBarPlayhead=document.createElement("div"),this.progressBarPlayhead.className="scrollbar-playhead",this.progressBarInner.appendChild(this.progressBarPlayhead),this.viewportElement.insertBefore(this.progressBar,this.viewportElement.firstChild);const e=s=>{let i=(s.clientY-this.progressBarInner.getBoundingClientRect().top)/this.progressBarHeight;i=Math.max(Math.min(i,1),0),this.viewportElement.scrollTop=i*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight)},t=s=>{this.draggingProgressBar=!1,this.showProgressBar(),document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)};this.progressBarInner.addEventListener("mousedown",(s=>{s.preventDefault(),this.draggingProgressBar=!0,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t),e(s)}))}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}layout(){this.isActive()&&(this.syncPages(),this.syncScrollPosition())}syncPages(){const e=this.Reveal.getConfig(),t=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),s=this.Reveal.getScale(),i=e.scrollLayout==="compact",a=this.viewportElement.offsetHeight,r=t.height*s,o=i?r:a;this.scrollTriggerHeight=i?r:a,this.viewportElement.style.setProperty("--page-height",o+"px"),this.viewportElement.style.scrollSnapType=typeof e.scrollSnap=="string"?`y ${e.scrollSnap}`:"",this.slideTriggers=[];const l=Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));this.pages=l.map((c=>{const h=this.createPage({pageElement:c,slideElement:c.querySelector("section"),stickyElement:c.querySelector(".scroll-page-sticky"),contentElement:c.querySelector(".scroll-page-content"),backgroundElement:c.querySelector(".slide-background"),autoAnimateElements:c.querySelectorAll(".scroll-auto-animate-page"),autoAnimatePages:[]});h.pageElement.style.setProperty("--slide-height",e.center===!0?"auto":t.height+"px"),this.slideTriggers.push({page:h,activate:()=>this.activatePage(h),deactivate:()=>this.deactivatePage(h)}),this.createFragmentTriggersForPage(h),h.autoAnimateElements.length>0&&this.createAutoAnimateTriggersForPage(h);let d=Math.max(h.scrollTriggers.length-1,0);d+=h.autoAnimatePages.reduce(((u,g)=>u+Math.max(g.scrollTriggers.length-1,0)),h.autoAnimatePages.length),h.pageElement.querySelectorAll(".scroll-snap-point").forEach((u=>u.remove()));for(let u=0;u<d+1;u++){const g=document.createElement("div");g.className="scroll-snap-point",g.style.height=this.scrollTriggerHeight+"px",g.style.scrollSnapAlign=i?"center":"start",h.pageElement.appendChild(g),u===0&&(g.style.marginTop=-this.scrollTriggerHeight+"px")}return i&&h.scrollTriggers.length>0?(h.pageHeight=a,h.pageElement.style.setProperty("--page-height",a+"px")):(h.pageHeight=o,h.pageElement.style.removeProperty("--page-height")),h.scrollPadding=this.scrollTriggerHeight*d,h.totalHeight=h.pageHeight+h.scrollPadding,h.pageElement.style.setProperty("--page-scroll-padding",h.scrollPadding+"px"),d>0?(h.stickyElement.style.position="sticky",h.stickyElement.style.top=Math.max((a-h.pageHeight)/2,0)+"px"):(h.stickyElement.style.position="relative",h.pageElement.style.scrollSnapAlign=h.pageHeight<a?"center":"start"),h})),this.setTriggerRanges(),this.viewportElement.setAttribute("data-scrollbar",e.scrollProgress),e.scrollProgress&&this.totalScrollTriggerCount>1?(this.progressBar||this.createProgressBar(),this.syncProgressBar()):this.removeProgressBar()}setTriggerRanges(){this.totalScrollTriggerCount=this.slideTriggers.reduce(((t,s)=>t+Math.max(s.page.scrollTriggers.length,1)),0);let e=0;this.slideTriggers.forEach(((t,s)=>{t.range=[e,e+Math.max(t.page.scrollTriggers.length,1)/this.totalScrollTriggerCount];const i=(t.range[1]-t.range[0])/t.page.scrollTriggers.length;t.page.scrollTriggers.forEach(((a,r)=>{a.range=[e+r*i,e+(r+1)*i]})),e=t.range[1]})),this.slideTriggers[this.slideTriggers.length-1].range[1]=1}createFragmentTriggersForPage(e,t){t=t||e.slideElement;const s=this.Reveal.fragments.sort(t.querySelectorAll(".fragment"),!0);return s.length&&(e.fragments=this.Reveal.fragments.sort(t.querySelectorAll(".fragment:not(.disabled)")),e.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(-1,e.fragments,t)}}),s.forEach(((i,a)=>{e.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(a,e.fragments,t)}})}))),e.scrollTriggers.length}createAutoAnimateTriggersForPage(e){e.autoAnimateElements.length>0&&this.slideTriggers.push(...Array.from(e.autoAnimateElements).map(((t,s)=>{let i=this.createPage({slideElement:t.querySelector("section"),contentElement:t,backgroundElement:t.querySelector(".slide-background")});return this.createFragmentTriggersForPage(i,i.slideElement),e.autoAnimatePages.push(i),{page:i,activate:()=>this.activatePage(i),deactivate:()=>this.deactivatePage(i)}})))}createPage(e){return e.scrollTriggers=[],e.indexh=parseInt(e.slideElement.getAttribute("data-index-h"),10),e.indexv=parseInt(e.slideElement.getAttribute("data-index-v"),10),e}syncProgressBar(){this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach((r=>r.remove()));const e=this.viewportElement.scrollHeight,t=this.viewportElement.offsetHeight,s=t/e;this.progressBarHeight=this.progressBarInner.offsetHeight,this.playheadHeight=Math.max(s*this.progressBarHeight,8),this.progressBarScrollableHeight=this.progressBarHeight-this.playheadHeight;const i=t/e*this.progressBarHeight,a=Math.min(i/8,4);this.progressBarPlayhead.style.height=this.playheadHeight-a+"px",i>6?this.slideTriggers.forEach((r=>{const{page:o}=r;o.progressBarSlide=document.createElement("div"),o.progressBarSlide.className="scrollbar-slide",o.progressBarSlide.style.top=r.range[0]*this.progressBarHeight+"px",o.progressBarSlide.style.height=(r.range[1]-r.range[0])*this.progressBarHeight-a+"px",o.progressBarSlide.classList.toggle("has-triggers",o.scrollTriggers.length>0),this.progressBarInner.appendChild(o.progressBarSlide),o.scrollTriggerElements=o.scrollTriggers.map(((l,c)=>{const h=document.createElement("div");return h.className="scrollbar-trigger",h.style.top=(l.range[0]-r.range[0])*this.progressBarHeight+"px",h.style.height=(l.range[1]-l.range[0])*this.progressBarHeight-a+"px",o.progressBarSlide.appendChild(h),c===0&&(h.style.display="none"),h}))})):this.pages.forEach((r=>r.progressBarSlide=null))}syncScrollPosition(){const e=this.viewportElement.offsetHeight,t=e/this.viewportElement.scrollHeight,s=this.viewportElement.scrollTop,i=this.viewportElement.scrollHeight-e,a=Math.max(Math.min(s/i,1),0),r=Math.max(Math.min((s+e/2)/this.viewportElement.scrollHeight,1),0);let o;this.slideTriggers.forEach((l=>{const{page:c}=l;a>=l.range[0]-2*t&&a<=l.range[1]+2*t&&!c.loaded?(c.loaded=!0,this.Reveal.slideContent.load(c.slideElement)):c.loaded&&(c.loaded=!1,this.Reveal.slideContent.unload(c.slideElement)),a>=l.range[0]&&a<=l.range[1]?(this.activateTrigger(l),o=l.page):l.active&&this.deactivateTrigger(l)})),o&&o.scrollTriggers.forEach((l=>{r>=l.range[0]&&r<=l.range[1]?this.activateTrigger(l):l.active&&this.deactivateTrigger(l)})),this.setProgressBarValue(s/(this.viewportElement.scrollHeight-e))}setProgressBarValue(e){this.progressBar&&(this.progressBarPlayhead.style.transform=`translateY(${e*this.progressBarScrollableHeight}px)`,this.getAllPages().filter((t=>t.progressBarSlide)).forEach((t=>{t.progressBarSlide.classList.toggle("active",t.active===!0),t.scrollTriggers.forEach(((s,i)=>{t.scrollTriggerElements[i].classList.toggle("active",t.active===!0&&s.active===!0)}))})),this.showProgressBar())}showProgressBar(){this.progressBar.classList.add("visible"),clearTimeout(this.hideProgressBarTimeout),this.Reveal.getConfig().scrollProgress!=="auto"||this.draggingProgressBar||(this.hideProgressBarTimeout=setTimeout((()=>{this.progressBar&&this.progressBar.classList.remove("visible")}),500))}prev(){this.viewportElement.scrollTop-=this.scrollTriggerHeight}next(){this.viewportElement.scrollTop+=this.scrollTriggerHeight}scrollToSlide(e){if(this.active){const t=this.getScrollTriggerBySlide(e);t&&(this.viewportElement.scrollTop=t.range[0]*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight))}else this.activatedCallbacks.push((()=>this.scrollToSlide(e)))}storeScrollPosition(){clearTimeout(this.storeScrollPositionTimeout),this.storeScrollPositionTimeout=setTimeout((()=>{sessionStorage.setItem("reveal-scroll-top",this.viewportElement.scrollTop),sessionStorage.setItem("reveal-scroll-origin",location.origin+location.pathname),this.storeScrollPositionTimeout=null}),50)}restoreScrollPosition(){const e=sessionStorage.getItem("reveal-scroll-top"),t=sessionStorage.getItem("reveal-scroll-origin");e&&t===location.origin+location.pathname&&(this.viewportElement.scrollTop=parseInt(e,10))}activatePage(e){if(!e.active){e.active=!0;const{slideElement:t,backgroundElement:s,contentElement:i,indexh:a,indexv:r}=e;i.style.display="block",t.classList.add("present"),s&&s.classList.add("present"),this.Reveal.setCurrentScrollPage(t,a,r),this.Reveal.backgrounds.bubbleSlideContrastClassToElement(t,this.viewportElement),Array.from(i.parentNode.querySelectorAll(".scroll-page-content")).forEach((o=>{o!==i&&(o.style.display="none")}))}}deactivatePage(e){e.active&&(e.active=!1,e.slideElement&&e.slideElement.classList.remove("present"),e.backgroundElement&&e.backgroundElement.classList.remove("present"))}activateTrigger(e){e.active||(e.active=!0,e.activate())}deactivateTrigger(e){e.active&&(e.active=!1,e.deactivate&&e.deactivate())}getSlideByIndices(e,t){const s=this.getAllPages().find((i=>i.indexh===e&&i.indexv===t));return s?s.slideElement:null}getScrollTriggerBySlide(e){return this.slideTriggers.find((t=>t.page.slideElement===e))}getAllPages(){return this.pages.flatMap((e=>[e,...e.autoAnimatePages||[]]))}onScroll(){this.syncScrollPosition(),this.storeScrollPosition()}get viewportElement(){return this.Reveal.getViewportElement()}},Jr=class{constructor(e){this.Reveal=e}async activate(){const e=this.Reveal.getConfig(),t=q(this.Reveal.getRevealElement(),at),s=e.slideNumber&&/all|print/i.test(e.showSlideNumber),i=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),a=Math.floor(i.width*(1+e.margin)),r=Math.floor(i.height*(1+e.margin)),o=i.width,l=i.height;await new Promise(requestAnimationFrame),Ln("@page{size:"+a+"px "+r+"px; margin: 0px;}"),Ln(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+o+"px; max-height:"+l+"px}"),document.documentElement.classList.add("reveal-print","print-pdf"),document.body.style.width=a+"px",document.body.style.height=r+"px";const c=this.Reveal.getViewportElement();let h;if(c){const p=window.getComputedStyle(c);p&&p.background&&(h=p.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(o,l),await new Promise(requestAnimationFrame);const d=t.map((p=>p.scrollHeight)),u=[],g=t[0].parentNode;let S=1;t.forEach((function(p,w){if(p.classList.contains("stack")===!1){let y=(a-o)/2,P=(r-l)/2;const L=d[w];let T=Math.max(Math.ceil(L/r),1);T=Math.min(T,e.pdfMaxPagesPerSlide),(T===1&&e.center||p.classList.contains("center"))&&(P=Math.max((r-L)/2,0));const A=document.createElement("div");if(u.push(A),A.className="pdf-page",A.style.height=(r+e.pdfPageHeightOffset)*T+"px",h&&(A.style.background=h),A.appendChild(p),p.style.left=y+"px",p.style.top=P+"px",p.style.width=o+"px",this.Reveal.slideContent.layout(p),p.slideBackgroundElement&&A.insertBefore(p.slideBackgroundElement,p),e.showNotes){const k=this.Reveal.getSlideNotes(p);if(k){const _=typeof e.showNotes=="string"?e.showNotes:"inline",C=document.createElement("div");C.classList.add("speaker-notes"),C.classList.add("speaker-notes-pdf"),C.setAttribute("data-layout",_),C.innerHTML=k,_==="separate-page"?u.push(C):(C.style.left="8px",C.style.bottom="8px",C.style.width=a-16+"px",A.appendChild(C))}}if(s){const k=document.createElement("div");k.classList.add("slide-number"),k.classList.add("slide-number-pdf"),k.innerHTML=S++,A.appendChild(k)}if(e.pdfSeparateFragments){const k=this.Reveal.fragments.sort(A.querySelectorAll(".fragment"),!0);let E;k.forEach((function(_,C){E&&E.forEach((function(O){O.classList.remove("current-fragment")})),_.forEach((function(O){O.classList.add("visible","current-fragment")}),this);const b=A.cloneNode(!0);if(s){const O=C+1;b.querySelector(".slide-number-pdf").innerHTML+="."+O}u.push(b),E=_}),this),k.forEach((function(_){_.forEach((function(C){C.classList.remove("visible","current-fragment")}))}))}else q(A,".fragment:not(.fade-out)").forEach((function(k){k.classList.add("visible")}))}}),this),await new Promise(requestAnimationFrame),u.forEach((p=>g.appendChild(p))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"}),c.classList.remove("loading-scroll-mode")}isActive(){return this.Reveal.getConfig().view==="print"}},Xr=class{constructor(e){this.Reveal=e}configure(e,t){e.fragments===!1?this.disable():t.fragments===!1&&this.enable()}disable(){q(this.Reveal.getSlidesElement(),".fragment").forEach((e=>{e.classList.add("visible"),e.classList.remove("current-fragment")}))}enable(){q(this.Reveal.getSlidesElement(),".fragment").forEach((e=>{e.classList.remove("visible"),e.classList.remove("current-fragment")}))}availableRoutes(){let e=this.Reveal.getCurrentSlide();if(e&&this.Reveal.getConfig().fragments){let t=e.querySelectorAll(".fragment:not(.disabled)"),s=e.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:t.length-s.length>0,next:!!s.length}}return{prev:!1,next:!1}}sort(e,t=!1){e=Array.from(e);let s=[],i=[],a=[];e.forEach((o=>{if(o.hasAttribute("data-fragment-index")){let l=parseInt(o.getAttribute("data-fragment-index"),10);s[l]||(s[l]=[]),s[l].push(o)}else i.push([o])})),s=s.concat(i);let r=0;return s.forEach((o=>{o.forEach((l=>{a.push(l),l.setAttribute("data-fragment-index",r)})),r++})),t===!0?s:a}sortAll(){this.Reveal.getHorizontalSlides().forEach((e=>{let t=q(e,"section");t.forEach(((s,i)=>{this.sort(s.querySelectorAll(".fragment"))}),this),t.length===0&&this.sort(e.querySelectorAll(".fragment"))}))}update(e,t,s=this.Reveal.getCurrentSlide()){let i={shown:[],hidden:[]};if(s&&this.Reveal.getConfig().fragments&&(t=t||this.sort(s.querySelectorAll(".fragment"))).length){let a=0;if(typeof e!="number"){let r=this.sort(s.querySelectorAll(".fragment.visible")).pop();r&&(e=parseInt(r.getAttribute("data-fragment-index")||0,10))}Array.from(t).forEach(((r,o)=>{if(r.hasAttribute("data-fragment-index")&&(o=parseInt(r.getAttribute("data-fragment-index"),10)),a=Math.max(a,o),o<=e){let l=r.classList.contains("visible");r.classList.add("visible"),r.classList.remove("current-fragment"),o===e&&(this.Reveal.announceStatus(this.Reveal.getStatusText(r)),r.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(r)),l||(i.shown.push(r),this.Reveal.dispatchEvent({target:r,type:"visible",bubbles:!1}))}else{let l=r.classList.contains("visible");r.classList.remove("visible"),r.classList.remove("current-fragment"),l&&(this.Reveal.slideContent.stopEmbeddedContent(r),i.hidden.push(r),this.Reveal.dispatchEvent({target:r,type:"hidden",bubbles:!1}))}})),e=typeof e=="number"?e:-1,e=Math.max(Math.min(e,a),-1),s.setAttribute("data-fragment",e)}return i.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:i.hidden[0],fragments:i.hidden}}),i.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:i.shown[0],fragments:i.shown}}),i}sync(e=this.Reveal.getCurrentSlide()){return this.sort(e.querySelectorAll(".fragment"))}goto(e,t=0){let s=this.Reveal.getCurrentSlide();if(s&&this.Reveal.getConfig().fragments){let i=this.sort(s.querySelectorAll(".fragment:not(.disabled)"));if(i.length){if(typeof e!="number"){let r=this.sort(s.querySelectorAll(".fragment:not(.disabled).visible")).pop();e=r?parseInt(r.getAttribute("data-fragment-index")||0,10):-1}e+=t;let a=this.update(e,i);return this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!a.shown.length&&!a.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}},Zr=class{constructor(e){this.Reveal=e,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.Reveal.isScrollView()&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),q(this.Reveal.getRevealElement(),at).forEach((i=>{i.classList.contains("stack")||i.addEventListener("click",this.onSlideClicked,!0)}));const e=70,t=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=t.width+e,this.overviewSlideHeight=t.height+e,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const s=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:s.h,indexv:s.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach(((e,t)=>{e.setAttribute("data-index-h",t),Ge(e,"translate3d("+t*this.overviewSlideWidth+"px, 0, 0)"),e.classList.contains("stack")&&q(e,"section").forEach(((s,i)=>{s.setAttribute("data-index-h",t),s.setAttribute("data-index-v",i),Ge(s,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")}))})),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(((e,t)=>{Ge(e,"translate3d("+t*this.overviewSlideWidth+"px, 0, 0)"),q(e,".slide-background").forEach(((s,i)=>{Ge(s,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")}))}))}update(){const e=Math.min(window.innerWidth,window.innerHeight),t=Math.max(e/5,150)/e,s=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+t+")","translateX("+-s.h*this.overviewSlideWidth+"px)","translateY("+-s.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout((()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")}),1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),q(this.Reveal.getRevealElement(),at).forEach((t=>{Ge(t,""),t.removeEventListener("click",this.onSlideClicked,!0)})),q(this.Reveal.getBackgroundsElement(),".slide-background").forEach((t=>{Ge(t,"")})),this.Reveal.transformSlides({overview:""});const e=this.Reveal.getIndices();this.Reveal.slide(e.h,e.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:e.h,indexv:e.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(e){typeof e=="boolean"?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(e){if(this.isActive()){e.preventDefault();let t=e.target;for(;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(this.deactivate(),t.nodeName.match(/section/gi))){let s=parseInt(t.getAttribute("data-index-h"),10),i=parseInt(t.getAttribute("data-index-v"),10);this.Reveal.slide(s,i)}}}},eo=class{constructor(e){this.Reveal=e,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this)}configure(e,t){e.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1)}addKeyBinding(e,t){typeof e=="object"&&e.keyCode?this.bindings[e.keyCode]={callback:t,key:e.key,description:e.description}:this.bindings[e]={callback:t,key:null,description:null}}removeKeyBinding(e){delete this.bindings[e]}triggerKey(e){this.onDocumentKeyDown({keyCode:e})}registerKeyboardShortcut(e,t){this.shortcuts[e]=t}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyDown(e){let t=this.Reveal.getConfig();if(typeof t.keyboardCondition=="function"&&t.keyboardCondition(e)===!1||t.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let s=e.keyCode,i=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(e);let a=document.activeElement&&document.activeElement.isContentEditable===!0,r=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),o=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),l=!([32,37,38,39,40,63,78,80,191].indexOf(e.keyCode)!==-1&&e.shiftKey||e.altKey)&&(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey);if(a||r||o||l)return;let c,h=[66,86,190,191,112];if(typeof t.keyboard=="object")for(c in t.keyboard)t.keyboard[c]==="togglePause"&&h.push(parseInt(c,10));if(this.Reveal.isOverlayOpen()&&!["Escape","f","c","b","."].includes(e.key)||this.Reveal.isPaused()&&h.indexOf(s)===-1)return!1;let d=t.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),u=!1;if(typeof t.keyboard=="object"){for(c in t.keyboard)if(parseInt(c,10)===s){let g=t.keyboard[c];typeof g=="function"?g.apply(null,[e]):typeof g=="string"&&typeof this.Reveal[g]=="function"&&this.Reveal[g].call(),u=!0}}if(u===!1){for(c in this.bindings)if(parseInt(c,10)===s){let g=this.bindings[c].callback;typeof g=="function"?g.apply(null,[e]):typeof g=="string"&&typeof this.Reveal[g]=="function"&&this.Reveal[g].call(),u=!0}}u===!1&&(u=!0,s===80||s===33?this.Reveal.prev({skipFragments:e.altKey}):s===78||s===34?this.Reveal.next({skipFragments:e.altKey}):s===72||s===37?e.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&d?t.rtl?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.left({skipFragments:e.altKey}):s===76||s===39?e.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&d?t.rtl?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey}):this.Reveal.right({skipFragments:e.altKey}):s===75||s===38?e.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&d?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.up({skipFragments:e.altKey}):s===74||s===40?e.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&d?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.down({skipFragments:e.altKey}):s===36?this.Reveal.slide(0):s===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):s===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),e.shiftKey?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey})):[58,59,66,86,190].includes(s)||s===191&&!e.shiftKey?this.Reveal.togglePause():s===70?ka(t.embedded?this.Reveal.getViewportElement():document.documentElement):s===65?t.autoSlideStoppable&&this.Reveal.toggleAutoSlide(i):s===71?t.jumpToSlide&&this.Reveal.toggleJumpToSlide():s===67&&this.Reveal.isOverlayOpen()?this.Reveal.closeOverlay():s!==63&&s!==191||!e.shiftKey?s===112?this.Reveal.toggleHelp():u=!1:this.Reveal.toggleHelp()),u?e.preventDefault&&e.preventDefault():s!==27&&s!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),e.preventDefault&&e.preventDefault()),this.Reveal.cueAutoSlide()}},to=class{MAX_REPLACE_STATE_FREQUENCY=1e3;constructor(e){this.Reveal=e,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(e=window.location.hash,t={}){let s=e.replace(/^#\/?/,""),i=s.split("/");if(/^[0-9]*$/.test(i[0])||!s.length){const a=this.Reveal.getConfig();let r,o=a.hashOneBasedIndex||t.oneBasedIndex?1:0,l=parseInt(i[0],10)-o||0,c=parseInt(i[1],10)-o||0;return a.fragmentInURL&&(r=parseInt(i[2],10),isNaN(r)&&(r=void 0)),{h:l,v:c,f:r}}{let a,r;/\/[-\d]+$/g.test(s)&&(r=parseInt(s.split("/").pop(),10),r=isNaN(r)?void 0:r,s=s.split("/").shift());try{a=document.getElementById(decodeURIComponent(s)).closest(".slides section")}catch{}if(a)return{...this.Reveal.getIndices(a),f:r}}return null}readURL(){const e=this.Reveal.getIndices(),t=this.getIndicesFromHash();t?t.h===e.h&&t.v===e.v&&t.f===void 0||this.Reveal.slide(t.h,t.v,t.f):this.Reveal.slide(e.h||0,e.v||0)}writeURL(e){let t=this.Reveal.getConfig(),s=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof e=="number")this.writeURLTimeout=setTimeout(this.writeURL,e);else if(s){let i=this.getHash();t.history?window.location.hash=i:t.hash&&(i==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+i))}}replaceState(e){window.history.replaceState(null,null,e),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(e){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(e):this.replaceStateTimeout=setTimeout((()=>this.replaceState(e)),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(e){let t="/",s=e||this.Reveal.getCurrentSlide(),i=s?s.getAttribute("id"):null;i&&(i=encodeURIComponent(i));let a=this.Reveal.getIndices(e);if(this.Reveal.getConfig().fragmentInURL||(a.f=void 0),typeof i=="string"&&i.length)t="/"+i,a.f>=0&&(t+="/"+a.f);else{let r=this.Reveal.getConfig().hashOneBasedIndex?1:0;(a.h>0||a.v>0||a.f>=0)&&(t+=a.h+r),(a.v>0||a.f>=0)&&(t+="/"+(a.v+r)),a.f>=0&&(t+="/"+a.f)}return t}onWindowHashChange(e){this.readURL()}},so=class{constructor(e){this.Reveal=e,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this),this.onEnterFullscreen=this.onEnterFullscreen.bind(this)}render(){const e=this.Reveal.getConfig().rtl,t=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${e?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${e?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=q(t,".navigate-left"),this.controlsRight=q(t,".navigate-right"),this.controlsUp=q(t,".navigate-up"),this.controlsDown=q(t,".navigate-down"),this.controlsPrev=q(t,".navigate-prev"),this.controlsNext=q(t,".navigate-next"),this.controlsFullscreen=q(t,".enter-fullscreen"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(e,t){this.element.style.display=e.controls&&(e.controls!=="speaker-only"||this.Reveal.isSpeakerNotes())?"block":"none",this.element.setAttribute("data-controls-layout",e.controlsLayout),this.element.setAttribute("data-controls-back-arrows",e.controlsBackArrows)}bind(){let e=["touchstart","click"];Pa&&(e=["touchstart"]),e.forEach((t=>{this.controlsLeft.forEach((s=>s.addEventListener(t,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((s=>s.addEventListener(t,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((s=>s.addEventListener(t,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((s=>s.addEventListener(t,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((s=>s.addEventListener(t,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((s=>s.addEventListener(t,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((s=>s.addEventListener(t,this.onEnterFullscreen,!1)))}))}unbind(){["touchstart","click"].forEach((e=>{this.controlsLeft.forEach((t=>t.removeEventListener(e,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((t=>t.removeEventListener(e,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((t=>t.removeEventListener(e,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((t=>t.removeEventListener(e,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((t=>t.removeEventListener(e,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((t=>t.removeEventListener(e,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((t=>t.removeEventListener(e,this.onEnterFullscreen,!1)))}))}update(){let e=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach((s=>{s.classList.remove("enabled","fragmented"),s.setAttribute("disabled","disabled")})),e.left&&this.controlsLeft.forEach((s=>{s.classList.add("enabled"),s.removeAttribute("disabled")})),e.right&&this.controlsRight.forEach((s=>{s.classList.add("enabled"),s.removeAttribute("disabled")})),e.up&&this.controlsUp.forEach((s=>{s.classList.add("enabled"),s.removeAttribute("disabled")})),e.down&&this.controlsDown.forEach((s=>{s.classList.add("enabled"),s.removeAttribute("disabled")})),(e.left||e.up)&&this.controlsPrev.forEach((s=>{s.classList.add("enabled"),s.removeAttribute("disabled")})),(e.right||e.down)&&this.controlsNext.forEach((s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}));let t=this.Reveal.getCurrentSlide();if(t){let s=this.Reveal.fragments.availableRoutes();s.prev&&this.controlsPrev.forEach((r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")})),s.next&&this.controlsNext.forEach((r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}));const i=this.Reveal.isVerticalSlide(t),a=i&&t.parentElement&&t.parentElement.querySelectorAll(":scope > section").length>1;i&&a?(s.prev&&this.controlsUp.forEach((r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")})),s.next&&this.controlsDown.forEach((r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}))):(s.prev&&this.controlsLeft.forEach((r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")})),s.next&&this.controlsRight.forEach((r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")})))}if(this.Reveal.getConfig().controlsTutorial){let s=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&e.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&e.left&&s.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&e.right&&s.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}onEnterFullscreen(e){const t=this.Reveal.getConfig(),s=this.Reveal.getViewportElement();ka(t.embedded?s:s.parentElement)}},no=class{constructor(e){this.Reveal=e,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(e,t){this.element.style.display=e.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let e=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(e=0),this.bar.style.transform="scaleX("+e+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(e){this.Reveal.onUserInput(e),e.preventDefault();let t=this.Reveal.getSlides(),s=t.length,i=Math.floor(e.clientX/this.getMaxWidth()*s);this.Reveal.getConfig().rtl&&(i=s-i);let a=this.Reveal.getIndices(t[i]);this.Reveal.slide(a.h,a.v)}destroy(){this.element.remove()}};class io{constructor(e){this.Reveal=e,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(e,t){e.mouseWheel?document.addEventListener("wheel",this.onDocumentMouseScroll,!1):document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),e.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(e){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(e){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let t=e.detail||-e.wheelDelta;t>0?this.Reveal.next():t<0&&this.Reveal.prev()}}}const Wi=(n,e)=>{const t=document.createElement("script");t.type="text/javascript",t.async=!1,t.defer=!1,t.src=n,typeof e=="function"&&(t.onload=t.onreadystatechange=i=>{(i.type==="load"||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=t.onerror=null,e())},t.onerror=i=>{t.onload=t.onreadystatechange=t.onerror=null,e(new Error("Failed loading script: "+t.src+`
`+i))});const s=document.querySelector("head");s.insertBefore(t,s.lastChild)};class ao{constructor(e){this.Reveal=e,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(e,t){return this.state="loading",e.forEach(this.registerPlugin.bind(this)),new Promise((s=>{let i=[],a=0;if(t.forEach((r=>{r.condition&&!r.condition()||(r.async?this.asyncDependencies.push(r):i.push(r))})),i.length){a=i.length;const r=o=>{o&&typeof o.callback=="function"&&o.callback(),--a==0&&this.initPlugins().then(s)};i.forEach((o=>{typeof o.id=="string"?(this.registerPlugin(o),r(o)):typeof o.src=="string"?Wi(o.src,(()=>r(o))):(console.warn("Unrecognized plugin format",o),r())}))}else this.initPlugins().then(s)}))}initPlugins(){return new Promise((e=>{let t=Object.values(this.registeredPlugins),s=t.length;if(s===0)this.loadAsync().then(e);else{let i,a=()=>{--s==0?this.loadAsync().then(e):i()},r=0;i=()=>{let o=t[r++];if(typeof o.init=="function"){let l=o.init(this.Reveal);l&&typeof l.then=="function"?l.then(a):a()}else a()},i()}}))}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach((e=>{Wi(e.src,e.callback)})),Promise.resolve()}registerPlugin(e){arguments.length===2&&typeof arguments[0]=="string"?(e=arguments[1]).id=arguments[0]:typeof e=="function"&&(e=e());let t=e.id;typeof t!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",e):this.registeredPlugins[t]===void 0?(this.registeredPlugins[t]=e,this.state==="loaded"&&typeof e.init=="function"&&e.init(this.Reveal)):console.warn('reveal.js: "'+t+'" plugin has already been registered')}hasPlugin(e){return!!this.registeredPlugins[e]}getPlugin(e){return this.registeredPlugins[e]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach((e=>{typeof e.destroy=="function"&&e.destroy()})),this.registeredPlugins={},this.asyncDependencies=[]}}class ro{constructor(e){this.Reveal=e,this.onSlidesClicked=this.onSlidesClicked.bind(this),this.iframeTriggerSelector=null,this.mediaTriggerSelector="[data-preview-image], [data-preview-video]",this.stateProps=["previewIframe","previewImage","previewVideo","previewFit"],this.state={}}update(){this.Reveal.getConfig().previewLinks?this.iframeTriggerSelector="a[href]:not([data-preview-link=false]), [data-preview-link]:not(a):not([data-preview-link=false])":this.iframeTriggerSelector="[data-preview-link]:not([data-preview-link=false])";const e=this.Reveal.getSlidesElement().querySelectorAll(this.iframeTriggerSelector).length>0,t=this.Reveal.getSlidesElement().querySelectorAll(this.mediaTriggerSelector).length>0;e||t?this.Reveal.getSlidesElement().addEventListener("click",this.onSlidesClicked,!1):this.Reveal.getSlidesElement().removeEventListener("click",this.onSlidesClicked,!1)}createOverlay(e){this.dom=document.createElement("div"),this.dom.classList.add("r-overlay"),this.dom.classList.add(e),this.viewport=document.createElement("div"),this.viewport.classList.add("r-overlay-viewport"),this.dom.appendChild(this.viewport),this.Reveal.getRevealElement().appendChild(this.dom)}previewIframe(e){this.close(),this.state={previewIframe:e},this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.viewport.innerHTML=`<header class="r-overlay-header">
				<a class="r-overlay-button r-overlay-external" href="${e}" target="_blank"><span class="icon"></span></a>
				<button class="r-overlay-button r-overlay-close"><span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content">
				<iframe src="${e}"></iframe>
				<small class="r-overlay-content-inner">
					<span class="r-overlay-error x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,this.dom.querySelector("iframe").addEventListener("load",(t=>{this.dom.dataset.state="loaded"}),!1),this.dom.querySelector(".r-overlay-close").addEventListener("click",(t=>{this.close(),t.preventDefault()}),!1),this.dom.querySelector(".r-overlay-external").addEventListener("click",(t=>{this.close()}),!1),this.Reveal.dispatchEvent({type:"previewiframe",data:{url:e}})}previewMedia(e,t,s){if(t!=="image"&&t!=="video")return void console.warn("Please specify a valid media type to preview (image|video)");this.close(),s=s||"scale-down",this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.dom.dataset.previewFit=s,this.viewport.innerHTML=`<header class="r-overlay-header">
				<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content"></div>`;const i=this.dom.querySelector(".r-overlay-content");if(t==="image"){this.state={previewImage:e,previewFit:s};const a=document.createElement("img",{});a.src=e,i.appendChild(a),a.addEventListener("load",(()=>{this.dom.dataset.state="loaded"}),!1),a.addEventListener("error",(()=>{this.dom.dataset.state="error",i.innerHTML='<span class="r-overlay-error">Unable to load image.</span>'}),!1),this.dom.style.cursor="zoom-out",this.dom.addEventListener("click",(r=>{this.close()}),!1),this.Reveal.dispatchEvent({type:"previewimage",data:{url:e}})}else{if(t!=="video")throw new Error("Please specify a valid media type to preview");{this.state={previewVideo:e,previewFit:s};const a=document.createElement("video");a.autoplay=this.dom.dataset.previewAutoplay!=="false",a.controls=this.dom.dataset.previewControls!=="false",a.loop=this.dom.dataset.previewLoop==="true",a.muted=this.dom.dataset.previewMuted==="true",a.playsInline=!0,a.src=e,i.appendChild(a),a.addEventListener("loadeddata",(()=>{this.dom.dataset.state="loaded"}),!1),a.addEventListener("error",(()=>{this.dom.dataset.state="error",i.innerHTML='<span class="r-overlay-error">Unable to load video.</span>'}),!1),this.Reveal.dispatchEvent({type:"previewvideo",data:{url:e}})}}this.dom.querySelector(".r-overlay-close").addEventListener("click",(a=>{this.close(),a.preventDefault()}),!1)}previewImage(e,t){this.previewMedia(e,"image",t)}previewVideo(e,t){this.previewMedia(e,"video",t)}toggleHelp(e){typeof e=="boolean"?e?this.showHelp():this.close():this.dom?this.close():this.showHelp()}showHelp(){if(this.Reveal.getConfig().help){this.close(),this.createOverlay("r-overlay-help");let e='<p class="title">Keyboard Shortcuts</p>',t=this.Reveal.keyboard.getShortcuts(),s=this.Reveal.keyboard.getBindings();e+="<table><th>KEY</th><th>ACTION</th>";for(let i in t)e+=`<tr><td>${i}</td><td>${t[i]}</td></tr>`;for(let i in s)s[i].key&&s[i].description&&(e+=`<tr><td>${s[i].key}</td><td>${s[i].description}</td></tr>`);e+="</table>",this.viewport.innerHTML=`
				<header class="r-overlay-header">
					<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
				</header>
				<div class="r-overlay-content">
					<div class="r-overlay-help-content">${e}</div>
				</div>
			`,this.dom.querySelector(".r-overlay-close").addEventListener("click",(i=>{this.close(),i.preventDefault()}),!1),this.Reveal.dispatchEvent({type:"showhelp"})}}isOpen(){return!!this.dom}close(){return!!this.dom&&(this.dom.remove(),this.dom=null,this.state={},this.Reveal.dispatchEvent({type:"closeoverlay"}),!0)}getState(){return this.state}setState(e){this.stateProps.every((t=>this.state[t]===e[t]))||(e.previewIframe?this.previewIframe(e.previewIframe):e.previewImage?this.previewImage(e.previewImage,e.previewFit):e.previewVideo?this.previewVideo(e.previewVideo,e.previewFit):this.close())}onSlidesClicked(e){const t=e.target,s=t.closest(this.iframeTriggerSelector),i=t.closest(this.mediaTriggerSelector);if(s){if(e.metaKey||e.shiftKey||e.altKey)return;let a=s.getAttribute("href")||s.getAttribute("data-preview-link");a&&(this.previewIframe(a),e.preventDefault())}else if(i){if(i.hasAttribute("data-preview-image")){let a=i.dataset.previewImage||i.getAttribute("src");a&&(this.previewImage(a,i.dataset.previewFit),e.preventDefault())}else if(i.hasAttribute("data-preview-video")){let a=i.dataset.previewVideo||i.getAttribute("src");if(!a){let r=i.querySelector("source");r&&(a=r.getAttribute("src"))}a&&(this.previewVideo(a,i.dataset.previewFit),e.preventDefault())}}}destroy(){this.close()}}let oo=class{constructor(e){this.Reveal=e,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let e=this.Reveal.getRevealElement();"onpointerdown"in window?(e.addEventListener("pointerdown",this.onPointerDown,!1),e.addEventListener("pointermove",this.onPointerMove,!1),e.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(e.addEventListener("MSPointerDown",this.onPointerDown,!1),e.addEventListener("MSPointerMove",this.onPointerMove,!1),e.addEventListener("MSPointerUp",this.onPointerUp,!1)):(e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let e=this.Reveal.getRevealElement();e.removeEventListener("pointerdown",this.onPointerDown,!1),e.removeEventListener("pointermove",this.onPointerMove,!1),e.removeEventListener("pointerup",this.onPointerUp,!1),e.removeEventListener("MSPointerDown",this.onPointerDown,!1),e.removeEventListener("MSPointerMove",this.onPointerMove,!1),e.removeEventListener("MSPointerUp",this.onPointerUp,!1),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(e){if(Ns(e,"video[controls], audio[controls]"))return!0;for(;e&&typeof e.hasAttribute=="function";){if(e.hasAttribute("data-prevent-swipe"))return!0;e=e.parentNode}return!1}onTouchStart(e){if(this.touchCaptured=!1,this.isSwipePrevented(e.target))return!0;this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.touchStartCount=e.touches.length}onTouchMove(e){if(this.isSwipePrevented(e.target))return!0;let t=this.Reveal.getConfig();if(this.touchCaptured)Pa&&e.preventDefault();else{this.Reveal.onUserInput(e);let s=e.touches[0].clientX,i=e.touches[0].clientY;if(e.touches.length===1&&this.touchStartCount!==2){let a=this.Reveal.availableRoutes({includeFragments:!0}),r=s-this.touchStartX,o=i-this.touchStartY;r>40&&Math.abs(r)>Math.abs(o)?(this.touchCaptured=!0,t.navigationMode==="linear"?t.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):r<-40&&Math.abs(r)>Math.abs(o)?(this.touchCaptured=!0,t.navigationMode==="linear"?t.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):o>40&&a.up?(this.touchCaptured=!0,t.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):o<-40&&a.down&&(this.touchCaptured=!0,t.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),t.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&e.preventDefault():e.preventDefault()}}}onTouchEnd(e){this.touchCaptured=!1}onPointerDown(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchStart(e))}onPointerMove(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchMove(e))}onPointerUp(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchEnd(e))}};const bn="focus",Vi="blur";class lo{constructor(e){this.Reveal=e,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(e,t){e.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==bn&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=bn}blur(){this.state!==Vi&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=Vi}isFocused(){return this.state===bn}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(e){this.focus()}onDocumentPointerDown(e){let t=oe(e.target,".reveal");t&&t===this.Reveal.getRevealElement()||this.blur()}}class co{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){e.showNotes&&this.element.setAttribute("data-layout",typeof e.showNotes=="string"?e.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(e=this.Reveal.getCurrentSlide()){if(e.hasAttribute("data-notes"))return e.getAttribute("data-notes");let t=e.querySelectorAll("aside.notes");return t?Array.from(t).map((s=>s.innerHTML)).join(`
`):null}destroy(){this.element.remove()}}class po{constructor(e,t){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=t,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(e){const t=this.playing;this.playing=e,!t&&this.playing?this.animate():this.render()}animate(){const e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let e=this.playing?this.progress:0,t=this.diameter2-this.thickness,s=this.diameter2,i=this.diameter2,a=28;this.progressOffset+=.1*(1-this.progressOffset);const r=-Math.PI/2+e*(2*Math.PI),o=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(s,i,t+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(s,i,t,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(s,i,t,o,r,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(s-14,i-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,a),this.context.fillRect(18,0,10,a)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,a),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(e,t){this.canvas.addEventListener(e,t,!1)}off(e,t){this.canvas.removeEventListener(e,t,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var uo={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,view:null,scrollLayout:"full",scrollSnap:"mandatory",scrollProgress:"auto",scrollActivationWidth:435,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const xa="5.2.1";function Ra(n,e){arguments.length<2&&(e=arguments[0],n=document.querySelector(".reveal"));const t={};let s,i,a,r,o,l={},c=!1,h=!1,d={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},u=[],g=1,S={layout:"",overview:""},p={},w="idle",y=0,P=0,L=-1,T=!1,A=new zr(t),k=new Wr(t),E=new Vr(t),_=new Qr(t),C=new Gr(t),b=new Yr(t),O=new Jr(t),N=new Xr(t),D=new Zr(t),J=new eo(t),te=new to(t),ne=new so(t),Ae=new no(t),ps=new io(t),be=new ao(t),$=new ro(t),Q=new lo(t),st=new oo(t),re=new co(t);function De(){c!==!1&&(h=!0,l.showHiddenSlides||q(p.wrapper,'section[data-visibility="hidden"]').forEach((m=>{const v=m.parentNode;v.childElementCount===1&&/section/i.test(v.nodeName)?v.remove():m.remove()})),(function(){p.slides.classList.add("no-transition"),Ut?p.wrapper.classList.add("no-hover"):p.wrapper.classList.remove("no-hover"),C.render(),k.render(),E.render(),ne.render(),Ae.render(),re.render(),p.pauseOverlay=((m,v,x,R="")=>{let U=m.querySelectorAll("."+x);for(let H=0;H<U.length;H++){let G=U[H];if(G.parentNode===m)return G}let B=document.createElement(v);return B.className=x,B.innerHTML=R,m.appendChild(B),B})(p.wrapper,"div","pause-overlay",l.controls?'<button class="resume-button">Resume presentation</button>':null),p.statusElement=(function(){let m=p.wrapper.querySelector(".aria-status");return m||(m=document.createElement("div"),m.style.position="absolute",m.style.height="1px",m.style.width="1px",m.style.overflow="hidden",m.style.clip="rect( 1px, 1px, 1px, 1px )",m.classList.add("aria-status"),m.setAttribute("aria-live","polite"),m.setAttribute("aria-atomic","true"),p.wrapper.appendChild(m)),m})(),p.wrapper.setAttribute("role","application")})(),l.postMessage&&window.addEventListener("message",Oi,!1),setInterval((()=>{(!b.isActive()&&p.wrapper.scrollTop!==0||p.wrapper.scrollLeft!==0)&&(p.wrapper.scrollTop=0,p.wrapper.scrollLeft=0)}),1e3),document.addEventListener("fullscreenchange",ws),document.addEventListener("webkitfullscreenchange",ws),He().forEach((m=>{q(m,"section").forEach(((v,x)=>{x>0&&(v.classList.remove("present"),v.classList.remove("past"),v.classList.add("future"),v.setAttribute("aria-hidden","true"))}))})),pi(),C.update(!0),(function(){const m=l.view==="print",v=l.view==="scroll"||l.view==="reader";(m||v)&&(m?hs():st.unbind(),p.viewport.classList.add("loading-scroll-mode"),m?document.readyState==="complete"?O.activate():window.addEventListener("load",(()=>O.activate())):b.activate())})(),te.readURL(),setTimeout((()=>{p.slides.classList.remove("no-transition"),p.wrapper.classList.add("ready"),ye({type:"ready",data:{indexh:s,indexv:i,currentSlide:r}})}),1))}function ze(m){p.statusElement.textContent=m}function us(m){let v="";if(m.nodeType===3)v+=m.textContent;else if(m.nodeType===1){let x=m.getAttribute("aria-hidden"),R=window.getComputedStyle(m).display==="none";x==="true"||R||Array.from(m.childNodes).forEach((U=>{v+=us(U)}))}return v=v.trim(),v===""?"":v+" "}function pi(m){const v={...l};if(typeof m=="object"&&kt(l,m),t.isReady()===!1)return;const x=p.wrapper.querySelectorAll(at).length;p.wrapper.classList.remove(v.transition),p.wrapper.classList.add(l.transition),p.wrapper.setAttribute("data-transition-speed",l.transitionSpeed),p.wrapper.setAttribute("data-background-transition",l.backgroundTransition),p.viewport.style.setProperty("--slide-width",typeof l.width=="string"?l.width:l.width+"px"),p.viewport.style.setProperty("--slide-height",typeof l.height=="string"?l.height:l.height+"px"),l.shuffle&&dn(),fn(p.wrapper,"embedded",l.embedded),fn(p.wrapper,"rtl",l.rtl),fn(p.wrapper,"center",l.center),l.pause===!1&&Qt(),_.reset(),o&&(o.destroy(),o=null),x>1&&l.autoSlide&&l.autoSlideStoppable&&(o=new po(p.wrapper,(()=>Math.min(Math.max((Date.now()-L)/y,0),1))),o.on("click",Mr),T=!1),l.navigationMode!=="default"?p.wrapper.setAttribute("data-navigation-mode",l.navigationMode):p.wrapper.removeAttribute("data-navigation-mode"),re.configure(l,v),Q.configure(l,v),ps.configure(l,v),ne.configure(l,v),Ae.configure(l,v),J.configure(l,v),N.configure(l,v),k.configure(l,v),Pi()}function ui(){window.addEventListener("resize",Mi,!1),l.touch&&st.bind(),l.keyboard&&J.bind(),l.progress&&Ae.bind(),l.respondToHashChanges&&te.bind(),ne.bind(),Q.bind(),p.slides.addEventListener("click",Fi,!1),p.slides.addEventListener("transitionend",ji,!1),p.pauseOverlay.addEventListener("click",Qt,!1),l.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Ki,!1)}function hs(){st.unbind(),Q.unbind(),J.unbind(),ne.unbind(),Ae.unbind(),te.unbind(),window.removeEventListener("resize",Mi,!1),p.slides.removeEventListener("click",Fi,!1),p.slides.removeEventListener("transitionend",ji,!1),p.pauseOverlay.removeEventListener("click",Qt,!1)}function hi(m,v,x){n.addEventListener(m,v,x)}function mi(m,v,x){n.removeEventListener(m,v,x)}function on(m){typeof m.layout=="string"&&(S.layout=m.layout),typeof m.overview=="string"&&(S.overview=m.overview),S.layout?Ge(p.slides,S.layout+" "+S.overview):Ge(p.slides,S.overview)}function ye({target:m=p.wrapper,type:v,data:x,bubbles:R=!0}){let U=document.createEvent("HTMLEvents",1,2);return U.initEvent(v,R,!0),kt(U,x),m.dispatchEvent(U),m===p.wrapper&&fi(v),U}function gi(m){ye({type:"slidechanged",data:{indexh:s,indexv:i,previousSlide:a,currentSlide:r,origin:m}})}function fi(m,v){if(l.postMessageEvents&&window.parent!==window.self){let x={namespace:"reveal",eventName:m,state:$i()};kt(x,v),window.parent.postMessage(JSON.stringify(x),"*")}}function ft(){if(p.wrapper&&!O.isActive()){const m=p.viewport.offsetWidth,v=p.viewport.offsetHeight;if(!l.disableLayout){Ut&&!l.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const x=b.isActive()?ms(m,v):ms(),R=g;vi(l.width,l.height),p.slides.style.width=x.width+"px",p.slides.style.height=x.height+"px",g=Math.min(x.presentationWidth/x.width,x.presentationHeight/x.height),g=Math.max(g,l.minScale),g=Math.min(g,l.maxScale),g===1||b.isActive()?(p.slides.style.zoom="",p.slides.style.left="",p.slides.style.top="",p.slides.style.bottom="",p.slides.style.right="",on({layout:""})):(p.slides.style.zoom="",p.slides.style.left="50%",p.slides.style.top="50%",p.slides.style.bottom="auto",p.slides.style.right="auto",on({layout:"translate(-50%, -50%) scale("+g+")"}));const U=Array.from(p.wrapper.querySelectorAll(at));for(let B=0,H=U.length;B<H;B++){const G=U[B];G.style.display!=="none"&&(l.center||G.classList.contains("center")?G.classList.contains("stack")?G.style.top=0:G.style.top=Math.max((x.height-G.scrollHeight)/2,0)+"px":G.style.top="")}R!==g&&ye({type:"resize",data:{oldScale:R,scale:g,size:x}})}(function(){if(p.wrapper&&!l.disableLayout&&!O.isActive()&&typeof l.scrollActivationWidth=="number"&&l.view!=="scroll"){const x=ms();x.presentationWidth>0&&x.presentationWidth<=l.scrollActivationWidth?b.isActive()||(C.create(),b.activate()):b.isActive()&&b.deactivate()}})(),p.viewport.style.setProperty("--slide-scale",g),p.viewport.style.setProperty("--viewport-width",m+"px"),p.viewport.style.setProperty("--viewport-height",v+"px"),b.layout(),Ae.update(),C.updateParallax(),D.isActive()&&D.update()}}function vi(m,v){q(p.slides,"section > .stretch, section > .r-stretch").forEach((x=>{let R=((U,B=0)=>{if(U){let H,G=U.style.height;return U.style.height="0px",U.parentNode.style.height="auto",H=B-U.parentNode.offsetHeight,U.style.height=G+"px",U.parentNode.style.removeProperty("height"),H}return B})(x,v);if(/(img|video)/gi.test(x.nodeName)){const U=x.naturalWidth||x.videoWidth,B=x.naturalHeight||x.videoHeight,H=Math.min(m/U,R/B);x.style.width=U*H+"px",x.style.height=B*H+"px"}else x.style.width=m+"px",x.style.height=R+"px"}))}function ms(m,v){let x=l.width,R=l.height;l.disableLayout&&(x=p.slides.offsetWidth,R=p.slides.offsetHeight);const U={width:x,height:R,presentationWidth:m||p.wrapper.offsetWidth,presentationHeight:v||p.wrapper.offsetHeight};return U.presentationWidth-=U.presentationWidth*l.margin,U.presentationHeight-=U.presentationHeight*l.margin,typeof U.width=="string"&&/%$/.test(U.width)&&(U.width=parseInt(U.width,10)/100*U.presentationWidth),typeof U.height=="string"&&/%$/.test(U.height)&&(U.height=parseInt(U.height,10)/100*U.presentationHeight),U}function bi(m,v){typeof m=="object"&&typeof m.setAttribute=="function"&&m.setAttribute("data-previous-indexv",v||0)}function yi(m){if(typeof m=="object"&&typeof m.setAttribute=="function"&&m.classList.contains("stack")){const v=m.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(m.getAttribute(v)||0,10)}return 0}function Gt(m=r){return m&&m.parentNode&&!!m.parentNode.nodeName.match(/section/i)}function wi(){return!(!r||!Gt(r))&&!r.nextElementSibling}function Si(){return s===0&&i===0}function ln(){return!!r&&!r.nextElementSibling&&(!Gt(r)||!r.parentNode.nextElementSibling)}function ki(){if(l.pause){const m=p.wrapper.classList.contains("paused");gs(),p.wrapper.classList.add("paused"),m===!1&&ye({type:"paused"})}}function Qt(){const m=p.wrapper.classList.contains("paused");p.wrapper.classList.remove("paused"),vt(),m&&ye({type:"resumed"})}function Ai(m){typeof m=="boolean"?m?ki():Qt():Yt()?Qt():ki()}function Yt(){return p.wrapper.classList.contains("paused")}function Le(m,v,x,R){if(ye({type:"beforeslidechange",data:{indexh:m===void 0?s:m,indexv:v===void 0?i:v,origin:R}}).defaultPrevented)return;a=r;const U=p.wrapper.querySelectorAll(We);if(b.isActive()){const fe=b.getSlideByIndices(m,v);return void(fe&&b.scrollToSlide(fe))}if(U.length===0)return;v!==void 0||D.isActive()||(v=yi(U[m])),a&&a.parentNode&&a.parentNode.classList.contains("stack")&&bi(a.parentNode,i);const B=u.concat();u.length=0;let H=s||0,G=i||0;s=xi(We,m===void 0?s:m),i=xi(zi,v===void 0?i:v);let qe=s!==H||i!==G;qe||(a=null);let nt=U[s],ue=nt.querySelectorAll("section");n.classList.toggle("is-vertical-slide",ue.length>1),r=ue[i]||nt;let ee=!1;qe&&a&&r&&!D.isActive()&&(w="running",ee=cn(a,r,H,G),ee&&p.slides.classList.add("disable-slide-transitions")),pn(),ft(),D.isActive()&&D.update(),x!==void 0&&N.goto(x),a&&a!==r&&(a.classList.remove("present"),a.setAttribute("aria-hidden","true"),Si()&&setTimeout((()=>{q(p.wrapper,We+".stack").forEach((fe=>{bi(fe,0)}))}),0));e:for(let fe=0,Kr=u.length;fe<Kr;fe++){for(let Ss=0;Ss<B.length;Ss++)if(B[Ss]===u[fe]){B.splice(Ss,1);continue e}p.viewport.classList.add(u[fe]),ye({type:u[fe]})}for(;B.length;)p.viewport.classList.remove(B.pop());qe&&gi(R),!qe&&a||(A.stopEmbeddedContent(a),A.startEmbeddedContent(r)),requestAnimationFrame((()=>{ze(us(r))})),Ae.update(),ne.update(),re.update(),C.update(),C.updateParallax(),k.update(),N.update(),te.writeURL(),vt(),ee&&(setTimeout((()=>{p.slides.classList.remove("disable-slide-transitions")}),0),l.autoAnimate&&_.run(a,r))}function cn(m,v,x,R){return m.hasAttribute("data-auto-animate")&&v.hasAttribute("data-auto-animate")&&m.getAttribute("data-auto-animate-id")===v.getAttribute("data-auto-animate-id")&&!(s>x||i>R?v:m).hasAttribute("data-auto-animate-restart")}function Pi(){hs(),ui(),ft(),y=l.autoSlide,vt(),C.create(),te.writeURL(),l.sortFragmentsOnSync===!0&&N.sortAll(),ne.update(),Ae.update(),pn(),re.update(),re.updateVisibility(),$.update(),C.update(!0),k.update(),A.formatEmbeddedContent(),l.autoPlayMedia===!1?A.stopEmbeddedContent(r,{unloadIframes:!1}):A.startEmbeddedContent(r),D.isActive()&&D.layout()}function dn(m=He()){m.forEach(((v,x)=>{let R=m[Math.floor(Math.random()*m.length)];R.parentNode===v.parentNode&&v.parentNode.insertBefore(v,R);let U=v.querySelectorAll("section");U.length&&dn(U)}))}function xi(m,v){let x=q(p.wrapper,m),R=x.length,U=b.isActive()||O.isActive(),B=!1,H=!1;if(R){l.loop&&(v>=R&&(B=!0),(v%=R)<0&&(v=R+v,H=!0)),v=Math.max(Math.min(v,R-1),0);for(let ue=0;ue<R;ue++){let ee=x[ue],fe=l.rtl&&!Gt(ee);ee.classList.remove("past"),ee.classList.remove("present"),ee.classList.remove("future"),ee.setAttribute("hidden",""),ee.setAttribute("aria-hidden","true"),ee.querySelector("section")&&ee.classList.add("stack"),U?ee.classList.add("present"):ue<v?(ee.classList.add(fe?"future":"past"),l.fragments&&Ri(ee)):ue>v?(ee.classList.add(fe?"past":"future"),l.fragments&&_i(ee)):ue===v&&l.fragments&&(B?_i(ee):H&&Ri(ee))}let G=x[v],qe=G.classList.contains("present");G.classList.add("present"),G.removeAttribute("hidden"),G.removeAttribute("aria-hidden"),qe||ye({target:G,type:"visible",bubbles:!1});let nt=G.getAttribute("data-state");nt&&(u=u.concat(nt.split(" ")))}else v=0;return v}function Ri(m){q(m,".fragment").forEach((v=>{v.classList.add("visible"),v.classList.remove("current-fragment")}))}function _i(m){q(m,".fragment.visible").forEach((v=>{v.classList.remove("visible","current-fragment")}))}function pn(){let m,v,x=He(),R=x.length;if(R&&s!==void 0){let U=D.isActive()?10:l.viewDistance;Ut&&(U=D.isActive()?6:l.mobileViewDistance),O.isActive()&&(U=Number.MAX_VALUE);for(let B=0;B<R;B++){let H=x[B],G=q(H,"section"),qe=G.length;if(m=Math.abs((s||0)-B)||0,l.loop&&(m=Math.abs(((s||0)-B)%(R-U))||0),m<U?A.load(H):A.unload(H),qe){let nt=yi(H);for(let ue=0;ue<qe;ue++){let ee=G[ue];v=Math.abs(B===(s||0)?(i||0)-ue:ue-nt),m+v<U?A.load(ee):A.unload(ee)}}}Ci()?p.wrapper.classList.add("has-vertical-slides"):p.wrapper.classList.remove("has-vertical-slides"),Ei()?p.wrapper.classList.add("has-horizontal-slides"):p.wrapper.classList.remove("has-horizontal-slides")}}function $e({includeFragments:m=!1}={}){let v=p.wrapper.querySelectorAll(We),x=p.wrapper.querySelectorAll(zi),R={left:s>0,right:s<v.length-1,up:i>0,down:i<x.length-1};if(l.loop&&(v.length>1&&(R.left=!0,R.right=!0),x.length>1&&(R.up=!0,R.down=!0)),v.length>1&&l.navigationMode==="linear"&&(R.right=R.right||R.down,R.left=R.left||R.up),m===!0){let U=N.availableRoutes();R.left=R.left||U.prev,R.up=R.up||U.prev,R.down=R.down||U.next,R.right=R.right||U.next}if(l.rtl){let U=R.left;R.left=R.right,R.right=U}return R}function Ti(m=r){let v=He(),x=0;e:for(let R=0;R<v.length;R++){let U=v[R],B=U.querySelectorAll("section");for(let H=0;H<B.length;H++){if(B[H]===m)break e;B[H].dataset.visibility!=="uncounted"&&x++}if(U===m)break;U.classList.contains("stack")===!1&&U.dataset.visibility!=="uncounted"&&x++}return x}function Ui(m){let v,x=s,R=i;if(m)if(b.isActive())x=parseInt(m.getAttribute("data-index-h"),10),m.getAttribute("data-index-v")&&(R=parseInt(m.getAttribute("data-index-v"),10));else{let U=Gt(m),B=U?m.parentNode:m,H=He();x=Math.max(H.indexOf(B),0),R=void 0,U&&(R=Math.max(q(m.parentNode,"section").indexOf(m),0))}if(!m&&r&&r.querySelectorAll(".fragment").length>0){let U=r.querySelector(".current-fragment");v=U&&U.hasAttribute("data-fragment-index")?parseInt(U.getAttribute("data-fragment-index"),10):r.querySelectorAll(".fragment.visible").length-1}return{h:x,v:R,f:v}}function un(){return q(p.wrapper,at+':not(.stack):not([data-visibility="uncounted"])')}function He(){return q(p.wrapper,We)}function Li(){return q(p.wrapper,".slides>section>section")}function Ei(){return He().length>1}function Ci(){return Li().length>1}function Ii(){return un().length}function Ni(m,v){let x=He()[m],R=x&&x.querySelectorAll("section");return R&&R.length&&typeof v=="number"?R?R[v]:void 0:x}function $i(){let m=Ui();return{indexh:m.h,indexv:m.v,indexf:m.f,paused:Yt(),overview:D.isActive(),...$.getState()}}function vt(){if(gs(),r&&l.autoSlide!==!1){let m=r.querySelector(".current-fragment[data-autoslide]"),v=m?m.getAttribute("data-autoslide"):null,x=r.parentNode?r.parentNode.getAttribute("data-autoslide"):null,R=r.getAttribute("data-autoslide");v?y=parseInt(v,10):R?y=parseInt(R,10):x?y=parseInt(x,10):(y=l.autoSlide,r.querySelectorAll(".fragment").length===0&&q(r,"video, audio").forEach((U=>{U.hasAttribute("data-autoplay")&&y&&1e3*U.duration/U.playbackRate>y&&(y=1e3*U.duration/U.playbackRate+1e3)}))),!y||T||Yt()||D.isActive()||ln()&&!N.availableRoutes().next&&l.loop!==!0||(P=setTimeout((()=>{typeof l.autoSlideMethod=="function"?l.autoSlideMethod():gn(),vt()}),y),L=Date.now()),o&&o.setPlaying(P!==-1)}}function gs(){clearTimeout(P),P=-1}function fs(){y&&!T&&(T=!0,ye({type:"autoslidepaused"}),clearTimeout(P),o&&o.setPlaying(!1))}function vs(){y&&T&&(T=!1,ye({type:"autoslideresumed"}),vt())}function bs({skipFragments:m=!1}={}){if(d.hasNavigatedHorizontally=!0,b.isActive())return b.prev();l.rtl?(D.isActive()||m||N.next()===!1)&&$e().left&&Le(s+1,l.navigationMode==="grid"?i:void 0):(D.isActive()||m||N.prev()===!1)&&$e().left&&Le(s-1,l.navigationMode==="grid"?i:void 0)}function ys({skipFragments:m=!1}={}){if(d.hasNavigatedHorizontally=!0,b.isActive())return b.next();l.rtl?(D.isActive()||m||N.prev()===!1)&&$e().right&&Le(s-1,l.navigationMode==="grid"?i:void 0):(D.isActive()||m||N.next()===!1)&&$e().right&&Le(s+1,l.navigationMode==="grid"?i:void 0)}function hn({skipFragments:m=!1}={}){if(b.isActive())return b.prev();(D.isActive()||m||N.prev()===!1)&&$e().up&&Le(s,i-1)}function mn({skipFragments:m=!1}={}){if(d.hasNavigatedVertically=!0,b.isActive())return b.next();(D.isActive()||m||N.next()===!1)&&$e().down&&Le(s,i+1)}function qi({skipFragments:m=!1}={}){if(b.isActive())return b.prev();if(m||N.prev()===!1)if($e().up)hn({skipFragments:m});else{let v;if(v=l.rtl?q(p.wrapper,We+".future").pop():q(p.wrapper,We+".past").pop(),v&&v.classList.contains("stack")){let x=v.querySelectorAll("section").length-1||void 0;Le(s-1,x)}else l.rtl?ys({skipFragments:m}):bs({skipFragments:m})}}function gn({skipFragments:m=!1}={}){if(d.hasNavigatedHorizontally=!0,d.hasNavigatedVertically=!0,b.isActive())return b.next();if(m||N.next()===!1){let v=$e();v.down&&v.right&&l.loop&&wi()&&(v.down=!1),v.down?mn({skipFragments:m}):l.rtl?bs({skipFragments:m}):ys({skipFragments:m})}}function Oi(m){let v=m.data;if(typeof v=="string"&&v.charAt(0)==="{"&&v.charAt(v.length-1)==="}"&&(v=JSON.parse(v),v.method&&typeof t[v.method]=="function"))if(Hr.test(v.method)===!1){const x=t[v.method].apply(t,v.args);fi("callback",{method:v.method,result:x})}else console.warn('reveal.js: "'+v.method+'" is is blacklisted from the postMessage API')}function ji(m){w==="running"&&/section/gi.test(m.target.nodeName)&&(w="idle",ye({type:"slidetransitionend",data:{indexh:s,indexv:i,previousSlide:a,currentSlide:r}}))}function Fi(m){const v=oe(m.target,'a[href^="#"]');if(v){const x=v.getAttribute("href"),R=te.getIndicesFromHash(x);R&&(t.slide(R.h,R.v,R.f),m.preventDefault())}}function Mi(m){ft()}function Ki(m){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function ws(m){(document.fullscreenElement||document.webkitFullscreenElement)===p.wrapper&&(m.stopImmediatePropagation(),setTimeout((()=>{t.layout(),t.focus.focus()}),1))}function Mr(m){ln()&&l.loop===!1?(Le(0,0),vs()):T?vs():fs()}const Bi={VERSION:xa,initialize:function(m){if(!n)throw'Unable to find presentation root (<div class="reveal">).';if(c)throw"Reveal.js has already been initialized.";if(c=!0,p.wrapper=n,p.slides=n.querySelector(".slides"),!p.slides)throw'Unable to find slides container (<div class="slides">).';return l={...uo,...l,...e,...m,...Di()},/print-pdf/gi.test(window.location.search)&&(l.view="print"),(function(){l.embedded===!0?p.viewport=oe(n,".reveal-viewport")||n:(p.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),p.viewport.classList.add("reveal-viewport")})(),window.addEventListener("load",ft,!1),be.load(l.plugins,l.dependencies).then(De),new Promise((v=>t.on("ready",v)))},configure:pi,destroy:function(){c=!1,h!==!1&&(hs(),gs(),re.destroy(),Q.destroy(),$.destroy(),be.destroy(),ps.destroy(),ne.destroy(),Ae.destroy(),C.destroy(),k.destroy(),E.destroy(),document.removeEventListener("fullscreenchange",ws),document.removeEventListener("webkitfullscreenchange",ws),document.removeEventListener("visibilitychange",Ki,!1),window.removeEventListener("message",Oi,!1),window.removeEventListener("load",ft,!1),p.pauseOverlay&&p.pauseOverlay.remove(),p.statusElement&&p.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),p.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),p.wrapper.removeAttribute("data-transition-speed"),p.wrapper.removeAttribute("data-background-transition"),p.viewport.classList.remove("reveal-viewport"),p.viewport.style.removeProperty("--slide-width"),p.viewport.style.removeProperty("--slide-height"),p.slides.style.removeProperty("width"),p.slides.style.removeProperty("height"),p.slides.style.removeProperty("zoom"),p.slides.style.removeProperty("left"),p.slides.style.removeProperty("top"),p.slides.style.removeProperty("bottom"),p.slides.style.removeProperty("right"),p.slides.style.removeProperty("transform"),Array.from(p.wrapper.querySelectorAll(at)).forEach((m=>{m.style.removeProperty("display"),m.style.removeProperty("top"),m.removeAttribute("hidden"),m.removeAttribute("aria-hidden")})))},sync:Pi,syncSlide:function(m=r){C.sync(m),N.sync(m),A.load(m),C.update(),re.update()},syncFragments:N.sync.bind(N),slide:Le,left:bs,right:ys,up:hn,down:mn,prev:qi,next:gn,navigateLeft:bs,navigateRight:ys,navigateUp:hn,navigateDown:mn,navigatePrev:qi,navigateNext:gn,navigateFragment:N.goto.bind(N),prevFragment:N.prev.bind(N),nextFragment:N.next.bind(N),on:hi,off:mi,addEventListener:hi,removeEventListener:mi,layout:ft,shuffle:dn,availableRoutes:$e,availableFragments:N.availableRoutes.bind(N),toggleHelp:$.toggleHelp.bind($),toggleOverview:D.toggle.bind(D),toggleScrollView:b.toggle.bind(b),togglePause:Ai,toggleAutoSlide:function(m){typeof m=="boolean"?m?vs():fs():T?vs():fs()},toggleJumpToSlide:function(m){typeof m=="boolean"?m?E.show():E.hide():E.isVisible()?E.hide():E.show()},isFirstSlide:Si,isLastSlide:ln,isLastVerticalSlide:wi,isVerticalSlide:Gt,isVerticalStack:function(m=r){return m.classList.contains(".stack")||m.querySelector("section")!==null},isPaused:Yt,isAutoSliding:function(){return!(!y||T)},isSpeakerNotes:re.isSpeakerNotesWindow.bind(re),isOverview:D.isActive.bind(D),isFocused:Q.isFocused.bind(Q),isOverlayOpen:$.isOpen.bind($),isScrollView:b.isActive.bind(b),isPrintView:O.isActive.bind(O),isReady:()=>h,loadSlide:A.load.bind(A),unloadSlide:A.unload.bind(A),startEmbeddedContent:()=>A.startEmbeddedContent(r),stopEmbeddedContent:()=>A.stopEmbeddedContent(r,{unloadIframes:!1}),previewIframe:$.previewIframe.bind($),previewImage:$.previewImage.bind($),previewVideo:$.previewVideo.bind($),showPreview:$.previewIframe.bind($),hidePreview:$.close.bind($),addEventListeners:ui,removeEventListeners:hs,dispatchEvent:ye,getState:$i,setState:function(m){if(typeof m=="object"){Le(wt(m.indexh),wt(m.indexv),wt(m.indexf));let v=wt(m.paused),x=wt(m.overview);typeof v=="boolean"&&v!==Yt()&&Ai(v),typeof x=="boolean"&&x!==D.isActive()&&D.toggle(x),$.setState(m)}},getProgress:function(){let m=Ii(),v=Ti();if(r){let x=r.querySelectorAll(".fragment");x.length>0&&(v+=r.querySelectorAll(".fragment.visible").length/x.length*.9)}return Math.min(v/(m-1),1)},getIndices:Ui,getSlidesAttributes:function(){return un().map((m=>{let v={};for(let x=0;x<m.attributes.length;x++){let R=m.attributes[x];v[R.name]=R.value}return v}))},getSlidePastCount:Ti,getTotalSlides:Ii,getSlide:Ni,getPreviousSlide:()=>a,getCurrentSlide:()=>r,getSlideBackground:function(m,v){let x=typeof m=="number"?Ni(m,v):m;if(x)return x.slideBackgroundElement},getSlideNotes:re.getSlideNotes.bind(re),getSlides:un,getHorizontalSlides:He,getVerticalSlides:Li,hasHorizontalSlides:Ei,hasVerticalSlides:Ci,hasNavigatedHorizontally:()=>d.hasNavigatedHorizontally,hasNavigatedVertically:()=>d.hasNavigatedVertically,shouldAutoAnimateBetween:cn,addKeyBinding:J.addKeyBinding.bind(J),removeKeyBinding:J.removeKeyBinding.bind(J),triggerKey:J.triggerKey.bind(J),registerKeyboardShortcut:J.registerKeyboardShortcut.bind(J),getComputedSlideSize:ms,setCurrentScrollPage:function(m,v,x){let R=s||0;s=v,i=x;const U=r!==m;a=r,r=m,r&&a&&l.autoAnimate&&cn(a,r,R,i)&&_.run(a,r),U&&(a&&(A.stopEmbeddedContent(a),A.stopEmbeddedContent(a.slideBackgroundElement)),A.startEmbeddedContent(r),A.startEmbeddedContent(r.slideBackgroundElement)),requestAnimationFrame((()=>{ze(us(r))})),gi()},getScale:()=>g,getConfig:()=>l,getQueryHash:Di,getSlidePath:te.getHash.bind(te),getRevealElement:()=>n,getSlidesElement:()=>p.slides,getViewportElement:()=>p.viewport,getBackgroundsElement:()=>C.element,registerPlugin:be.registerPlugin.bind(be),hasPlugin:be.hasPlugin.bind(be),getPlugin:be.getPlugin.bind(be),getPlugins:be.getRegisteredPlugins.bind(be)};return kt(t,{...Bi,announceStatus:ze,getStatusText:us,focus:Q,scroll:b,progress:Ae,controls:ne,location:te,overview:D,keyboard:J,fragments:N,backgrounds:C,slideContent:A,slideNumber:k,onUserInput:function(m){l.autoSlideStoppable&&fs()},closeOverlay:$.close.bind($),updateSlidesVisibility:pn,layoutSlideContents:vi,transformSlides:on,cueAutoSlide:vt,cancelAutoSlide:gs}),Bi}let Ve=Ra,Gi=[];Ve.initialize=n=>(Object.assign(Ve,new Ra(document.querySelector(".reveal"),n)),Gi.map((e=>e(Ve))),Ve.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach((n=>{Ve[n]=(...e)=>{Gi.push((t=>t[n].call(null,...e)))}})),Ve.isReady=()=>!1,Ve.VERSION=xa;function ho(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let ct={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const _a=/[&<>"']/,mo=new RegExp(_a.source,"g"),Ta=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,go=new RegExp(Ta.source,"g"),fo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qi=n=>fo[n];function le(n,e){if(e){if(_a.test(n))return n.replace(mo,Qi)}else if(Ta.test(n))return n.replace(go,Qi);return n}const vo=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Ua(n){return n.replace(vo,((e,t)=>(t=t.toLowerCase())==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const bo=/(^|[^\[])\^/g;function W(n,e){n=typeof n=="string"?n:n.source,e=e||"";const t={replace:(s,i)=>(i=(i=i.source||i).replace(bo,"$1"),n=n.replace(s,i),t),getRegex:()=>new RegExp(n,e)};return t}const yo=/[^\w:]/g,wo=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Yi(n,e,t){if(n){let s;try{s=decodeURIComponent(Ua(t)).replace(yo,"").toLowerCase()}catch{return null}if(s.indexOf("javascript:")===0||s.indexOf("vbscript:")===0||s.indexOf("data:")===0)return null}e&&!wo.test(t)&&(t=(function(s,i){ks[" "+s]||(So.test(s)?ks[" "+s]=s+"/":ks[" "+s]=Ts(s,"/",!0)),s=ks[" "+s];const a=s.indexOf(":")===-1;return i.substring(0,2)==="//"?a?i:s.replace(ko,"$1")+i:i.charAt(0)==="/"?a?i:s.replace(Ao,"$1")+i:s+i})(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ks={},So=/^[^:]+:\/*[^/]*$/,ko=/^([^:]+:)[\s\S]*$/,Ao=/^([^:]+:\/*[^/]*)[\s\S]*$/,$s={exec:function(){}};function Ji(n,e){const t=n.replace(/\|/g,((i,a,r)=>{let o=!1,l=a;for(;--l>=0&&r[l]==="\\";)o=!o;return o?"|":" |"})).split(/ \|/);let s=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;s<t.length;s++)t[s]=t[s].trim().replace(/\\\|/g,"|");return t}function Ts(n,e,t){const s=n.length;if(s===0)return"";let i=0;for(;i<s;){const a=n.charAt(s-i-1);if(a!==e||t){if(a===e||!t)break;i++}else i++}return n.slice(0,s-i)}function Xi(n,e){if(e<1)return"";let t="";for(;e>1;)1&e&&(t+=n),e>>=1,n+=n;return t+n}function Zi(n,e,t,s){const i=e.href,a=e.title?le(e.title):null,r=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){s.state.inLink=!0;const o={type:"link",raw:t,href:i,title:a,text:r,tokens:s.inlineTokens(r)};return s.state.inLink=!1,o}return{type:"image",raw:t,href:i,title:a,text:le(r)}}class En{constructor(e){this.options=e||ct}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:Ts(s,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const s=t[0],i=(function(a,r){const o=a.match(/^(\s+)(?:```)/);if(o===null)return r;const l=o[1];return r.split(`
`).map((c=>{const h=c.match(/^\s+/);if(h===null)return c;const[d]=h;return d.length>=l.length?c.slice(l.length):c})).join(`
`)})(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let s=t[2].trim();if(/#$/.test(s)){const i=Ts(s,"#");this.options.pedantic?s=i.trim():i&&!/ $/.test(i)||(s=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const s=t[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const a=this.lexer.blockTokens(s);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:a,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let s,i,a,r,o,l,c,h,d,u,g,S,p=t[1].trim();const w=p.length>1,y={type:"list",raw:"",ordered:w,start:w?+p.slice(0,-1):"",loose:!1,items:[]};p=w?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=w?p:"[*+-]");const P=new RegExp(`^( {0,3}${p})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(S=!1,t=P.exec(e))&&!this.rules.block.hr.test(e);){if(s=t[0],e=e.substring(s.length),h=t[2].split(`
`,1)[0].replace(/^\t+/,(T=>" ".repeat(3*T.length))),d=e.split(`
`,1)[0],this.options.pedantic?(r=2,g=h.trimLeft()):(r=t[2].search(/[^ ]/),r=r>4?1:r,g=h.slice(r),r+=t[1].length),l=!1,!h&&/^ *$/.test(d)&&(s+=d+`
`,e=e.substring(d.length+1),S=!0),!S){const T=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),k=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),E=new RegExp(`^ {0,${Math.min(3,r-1)}}#`);for(;e&&(u=e.split(`
`,1)[0],d=u,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!k.test(d))&&!E.test(d)&&!T.test(d)&&!A.test(e);){if(d.search(/[^ ]/)>=r||!d.trim())g+=`
`+d.slice(r);else{if(l||h.search(/[^ ]/)>=4||k.test(h)||E.test(h)||A.test(h))break;g+=`
`+d}l||d.trim()||(l=!0),s+=u+`
`,e=e.substring(u.length+1),h=d.slice(r)}}y.loose||(c?y.loose=!0:/\n *\n *$/.test(s)&&(c=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(g),i&&(a=i[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),y.items.push({type:"list_item",raw:s,task:!!i,checked:a,loose:!1,text:g}),y.raw+=s}y.items[y.items.length-1].raw=s.trimRight(),y.items[y.items.length-1].text=g.trimRight(),y.raw=y.raw.trimRight();const L=y.items.length;for(o=0;o<L;o++)if(this.lexer.state.top=!1,y.items[o].tokens=this.lexer.blockTokens(y.items[o].text,[]),!y.loose){const T=y.items[o].tokens.filter((k=>k.type==="space")),A=T.length>0&&T.some((k=>/\n.*\n/.test(k.raw)));y.loose=A}if(y.loose)for(o=0;o<L;o++)y.items[o].loose=!0;return y}}html(e){const t=this.rules.block.html.exec(e);if(t){const s={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(t[0]):le(t[0]);s.type="paragraph",s.text=i,s.tokens=this.lexer.inline(i)}return s}}def(e){const t=this.rules.block.def.exec(e);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:i,title:a}}}table(e){const t=this.rules.block.table.exec(e);if(t){const s={type:"table",header:Ji(t[1]).map((i=>({text:i}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){s.raw=t[0];let i,a,r,o,l=s.align.length;for(i=0;i<l;i++)/^ *-+: *$/.test(s.align[i])?s.align[i]="right":/^ *:-+: *$/.test(s.align[i])?s.align[i]="center":/^ *:-+ *$/.test(s.align[i])?s.align[i]="left":s.align[i]=null;for(l=s.rows.length,i=0;i<l;i++)s.rows[i]=Ji(s.rows[i],s.header.length).map((c=>({text:c})));for(l=s.header.length,a=0;a<l;a++)s.header[a].tokens=this.lexer.inline(s.header[a].text);for(l=s.rows.length,a=0;a<l;a++)for(o=s.rows[a],r=0;r<o.length;r++)o[r].tokens=this.lexer.inline(o[r].text);return s}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:le(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):le(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const r=Ts(s.slice(0,-1),"\\");if((s.length-r.length)%2==0)return}else{const r=(function(o,l){if(o.indexOf(l[1])===-1)return-1;const c=o.length;let h=0,d=0;for(;d<c;d++)if(o[d]==="\\")d++;else if(o[d]===l[0])h++;else if(o[d]===l[1]&&(h--,h<0))return d;return-1})(t[2],"()");if(r>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let i=t[2],a="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],a=r[3])}else a=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(i=this.options.pedantic&&!/>$/.test(s)?i.slice(1):i.slice(1,-1)),Zi(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let s;if((s=this.rules.inline.reflink.exec(e))||(s=this.rules.inline.nolink.exec(e))){let i=(s[2]||s[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){const a=s[0].charAt(0);return{type:"text",raw:a,text:a}}return Zi(s,i,s[0],this.lexer)}}emStrong(e,t,s=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&s.match(/[\p{L}\p{N}]/u))return;const a=i[1]||i[2]||"";if(!a||a&&(s===""||this.rules.inline.punctuation.exec(s))){const r=i[0].length-1;let o,l,c=r,h=0;const d=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+r);(i=d.exec(t))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=o.length,i[3]||i[4]){c+=l;continue}if((i[5]||i[6])&&r%3&&!((r+l)%3)){h+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+h);const u=e.slice(0,r+i.index+(i[0].length-o.length)+l);if(Math.min(r,l)%2){const S=u.slice(1,-1);return{type:"em",raw:u,text:S,tokens:this.lexer.inlineTokens(S)}}const g=u.slice(2,-2);return{type:"strong",raw:u,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let s=t[2].replace(/\n/g," ");const i=/[^ ]/.test(s),a=/^ /.test(s)&&/ $/.test(s);return i&&a&&(s=s.substring(1,s.length-1)),s=le(s,!0),{type:"codespan",raw:t[0],text:s}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const s=this.rules.inline.autolink.exec(e);if(s){let i,a;return s[2]==="@"?(i=le(this.options.mangle?t(s[1]):s[1]),a="mailto:"+i):(i=le(s[1]),a=i),{type:"link",raw:s[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}url(e,t){let s;if(s=this.rules.inline.url.exec(e)){let i,a;if(s[2]==="@")i=le(this.options.mangle?t(s[0]):s[0]),a="mailto:"+i;else{let r;do r=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0];while(r!==s[0]);i=le(s[0]),a=s[1]==="www."?"http://"+s[0]:s[0]}return{type:"link",raw:s[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,t){const s=this.rules.inline.text.exec(e);if(s){let i;return i=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):le(s[0]):s[0]:le(this.options.smartypants?t(s[0]):s[0]),{type:"text",raw:s[0],text:i}}}}const F={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:$s,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};F.def=W(F.def).replace("label",F._label).replace("title",F._title).getRegex(),F.bullet=/(?:[*+-]|\d{1,9}[.)])/,F.listItemStart=W(/^( *)(bull) */).replace("bull",F.bullet).getRegex(),F.list=W(F.list).replace(/bull/g,F.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+F.def.source+")").getRegex(),F._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",F._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,F.html=W(F.html,"i").replace("comment",F._comment).replace("tag",F._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),F.paragraph=W(F._paragraph).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex(),F.blockquote=W(F.blockquote).replace("paragraph",F.paragraph).getRegex(),F.normal={...F},F.gfm={...F.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},F.gfm.table=W(F.gfm.table).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex(),F.gfm.paragraph=W(F._paragraph).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",F.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex(),F.pedantic={...F.normal,html:W(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",F._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$s,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:W(F.normal._paragraph).replace("hr",F.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",F.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const I={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:$s,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:$s,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Po(n){return n.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ea(n){let e,t,s="";const i=n.length;for(e=0;e<i;e++)t=n.charCodeAt(e),Math.random()>.5&&(t="x"+t.toString(16)),s+="&#"+t+";";return s}I._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",I.punctuation=W(I.punctuation).replace(/punctuation/g,I._punctuation).getRegex(),I.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,I.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,I._comment=W(F._comment).replace("(?:-->|$)","-->").getRegex(),I.emStrong.lDelim=W(I.emStrong.lDelim).replace(/punct/g,I._punctuation).getRegex(),I.emStrong.rDelimAst=W(I.emStrong.rDelimAst,"g").replace(/punct/g,I._punctuation).getRegex(),I.emStrong.rDelimUnd=W(I.emStrong.rDelimUnd,"g").replace(/punct/g,I._punctuation).getRegex(),I._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,I._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,I._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,I.autolink=W(I.autolink).replace("scheme",I._scheme).replace("email",I._email).getRegex(),I._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,I.tag=W(I.tag).replace("comment",I._comment).replace("attribute",I._attribute).getRegex(),I._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,I._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,I._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,I.link=W(I.link).replace("label",I._label).replace("href",I._href).replace("title",I._title).getRegex(),I.reflink=W(I.reflink).replace("label",I._label).replace("ref",F._label).getRegex(),I.nolink=W(I.nolink).replace("ref",F._label).getRegex(),I.reflinkSearch=W(I.reflinkSearch,"g").replace("reflink",I.reflink).replace("nolink",I.nolink).getRegex(),I.normal={...I},I.pedantic={...I.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:W(/^!?\[(label)\]\((.*?)\)/).replace("label",I._label).getRegex(),reflink:W(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",I._label).getRegex()},I.gfm={...I.normal,escape:W(I.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},I.gfm.url=W(I.gfm.url,"i").replace("email",I.gfm._extended_email).getRegex(),I.breaks={...I.gfm,br:W(I.br).replace("{2,}","*").getRegex(),text:W(I.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class Ye{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ct,this.options.tokenizer=this.options.tokenizer||new En,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:F.normal,inline:I.normal};this.options.pedantic?(t.block=F.pedantic,t.inline=I.pedantic):this.options.gfm&&(t.block=F.gfm,this.options.breaks?t.inline=I.breaks:t.inline=I.gfm),this.tokenizer.rules=t}static get rules(){return{block:F,inline:I}}static lex(e,t){return new Ye(t).lex(e)}static lexInline(e,t){return new Ye(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let s,i,a,r;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,((o,l,c)=>l+"    ".repeat(c.length)));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((o=>!!(s=o.call({lexer:this},e,t))&&(e=e.substring(s.raw.length),t.push(s),!0)))))if(s=this.tokenizer.space(e))e=e.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);else if(s=this.tokenizer.code(e))e=e.substring(s.raw.length),i=t[t.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?t.push(s):(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(s=this.tokenizer.fences(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.heading(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.hr(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.blockquote(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.list(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.html(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.def(e))e=e.substring(s.raw.length),i=t[t.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title}):(i.raw+=`
`+s.raw,i.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(s=this.tokenizer.table(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.lheading(e))e=e.substring(s.raw.length),t.push(s);else{if(a=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach((function(h){c=h.call({lexer:this},l),typeof c=="number"&&c>=0&&(o=Math.min(o,c))})),o<1/0&&o>=0&&(a=e.substring(0,o+1))}if(this.state.top&&(s=this.tokenizer.paragraph(a)))i=t[t.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(s),r=a.length!==e.length,e=e.substring(s.raw.length);else if(s=this.tokenizer.text(e))e=e.substring(s.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(s);else if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let s,i,a,r,o,l,c=e;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)h.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,r.index)+"["+Xi("a",r[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,r.index)+"["+Xi("a",r[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(r=this.tokenizer.rules.inline.escapedEmSt.exec(c))!=null;)c=c.slice(0,r.index+r[0].length-2)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(o||(l=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((h=>!!(s=h.call({lexer:this},e,t))&&(e=e.substring(s.raw.length),t.push(s),!0)))))if(s=this.tokenizer.escape(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.tag(e))e=e.substring(s.raw.length),i=t[t.length-1],i&&s.type==="text"&&i.type==="text"?(i.raw+=s.raw,i.text+=s.text):t.push(s);else if(s=this.tokenizer.link(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(s.raw.length),i=t[t.length-1],i&&s.type==="text"&&i.type==="text"?(i.raw+=s.raw,i.text+=s.text):t.push(s);else if(s=this.tokenizer.emStrong(e,c,l))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.codespan(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.br(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.del(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.autolink(e,ea))e=e.substring(s.raw.length),t.push(s);else if(this.state.inLink||!(s=this.tokenizer.url(e,ea))){if(a=e,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const d=e.slice(1);let u;this.options.extensions.startInline.forEach((function(g){u=g.call({lexer:this},d),typeof u=="number"&&u>=0&&(h=Math.min(h,u))})),h<1/0&&h>=0&&(a=e.substring(0,h+1))}if(s=this.tokenizer.inlineText(a,Po))e=e.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(l=s.raw.slice(-1)),o=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=s.raw,i.text+=s.text):t.push(s);else if(e){const h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}else e=e.substring(s.raw.length),t.push(s);return t}}class Cn{constructor(e){this.options=e||ct}code(e,t,s){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const a=this.options.highlight(e,i);a!=null&&a!==e&&(s=!0,e=a)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+le(i)+'">'+(s?e:le(e,!0))+`</code></pre>
`:"<pre><code>"+(s?e:le(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,s,i){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+i.slug(s)}">${e}</h${t}>
`:`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,s){const i=t?"ol":"ul";return"<"+i+(t&&s!==1?' start="'+s+'"':"")+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+e+`</${s}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,s){if((e=Yi(this.options.sanitize,this.options.baseUrl,e))===null)return s;let i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+s+"</a>",i}image(e,t,s){if((e=Yi(this.options.sanitize,this.options.baseUrl,e))===null)return s;let i=`<img src="${e}" alt="${s}"`;return t&&(i+=` title="${t}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class La{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,s){return""+s}image(e,t,s){return""+s}br(){return""}}class Ea{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let s=e,i=0;if(this.seen.hasOwnProperty(s)){i=this.seen[e];do i++,s=e+"-"+i;while(this.seen.hasOwnProperty(s))}return t||(this.seen[e]=i,this.seen[s]=0),s}slug(e,t={}){const s=this.serialize(e);return this.getNextSafeSlug(s,t.dryrun)}}class Je{constructor(e){this.options=e||ct,this.options.renderer=this.options.renderer||new Cn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new La,this.slugger=new Ea}static parse(e,t){return new Je(t).parse(e)}static parseInline(e,t){return new Je(t).parseInline(e)}parse(e,t=!0){let s,i,a,r,o,l,c,h,d,u,g,S,p,w,y,P,L,T,A,k="";const E=e.length;for(s=0;s<E;s++)if(u=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(A=this.options.extensions.renderers[u.type].call({parser:this},u),A!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))k+=A||"";else switch(u.type){case"space":continue;case"hr":k+=this.renderer.hr();continue;case"heading":k+=this.renderer.heading(this.parseInline(u.tokens),u.depth,Ua(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":k+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(h="",c="",r=u.header.length,i=0;i<r;i++)c+=this.renderer.tablecell(this.parseInline(u.header[i].tokens),{header:!0,align:u.align[i]});for(h+=this.renderer.tablerow(c),d="",r=u.rows.length,i=0;i<r;i++){for(l=u.rows[i],c="",o=l.length,a=0;a<o;a++)c+=this.renderer.tablecell(this.parseInline(l[a].tokens),{header:!1,align:u.align[a]});d+=this.renderer.tablerow(c)}k+=this.renderer.table(h,d);continue;case"blockquote":d=this.parse(u.tokens),k+=this.renderer.blockquote(d);continue;case"list":for(g=u.ordered,S=u.start,p=u.loose,r=u.items.length,d="",i=0;i<r;i++)y=u.items[i],P=y.checked,L=y.task,w="",y.task&&(T=this.renderer.checkbox(P),p?y.tokens.length>0&&y.tokens[0].type==="paragraph"?(y.tokens[0].text=T+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&y.tokens[0].tokens[0].type==="text"&&(y.tokens[0].tokens[0].text=T+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:T}):w+=T),w+=this.parse(y.tokens,p),d+=this.renderer.listitem(w,L,P);k+=this.renderer.list(d,g,S);continue;case"html":k+=this.renderer.html(u.text);continue;case"paragraph":k+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(d=u.tokens?this.parseInline(u.tokens):u.text;s+1<E&&e[s+1].type==="text";)u=e[++s],d+=`
`+(u.tokens?this.parseInline(u.tokens):u.text);k+=t?this.renderer.paragraph(d):d;continue;default:{const _='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(_);throw new Error(_)}}return k}parseInline(e,t){t=t||this.renderer;let s,i,a,r="";const o=e.length;for(s=0;s<o;s++)if(i=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(a=this.options.extensions.renderers[i.type].call({parser:this},i),a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)))r+=a||"";else switch(i.type){case"escape":case"text":r+=t.text(i.text);break;case"html":r+=t.html(i.text);break;case"link":r+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break;case"image":r+=t.image(i.href,i.title,i.text);break;case"strong":r+=t.strong(this.parseInline(i.tokens,t));break;case"em":r+=t.em(this.parseInline(i.tokens,t));break;case"codespan":r+=t.codespan(i.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(i.tokens,t));break;default:{const l='Token with "'+i.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}}return r}}class yn{constructor(e){this.options=e||ct}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(e){return e}postprocess(e){return e}}function Ca(n,e){return(t,s,i)=>{typeof s=="function"&&(i=s,s=null);const a={...s},r=(function(o,l,c){return h=>{if(h.message+=`
Please report this to https://github.com/markedjs/marked.`,o){const d="<p>An error occurred:</p><pre>"+le(h.message+"",!0)+"</pre>";return l?Promise.resolve(d):c?void c(null,d):d}if(l)return Promise.reject(h);if(!c)throw h;c(h)}})((s={...j.defaults,...a}).silent,s.async,i);if(t==null)return r(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if((function(o){o&&o.sanitize&&!o.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")})(s),s.hooks&&(s.hooks.options=s),i){const o=s.highlight;let l;try{s.hooks&&(t=s.hooks.preprocess(t)),l=n(t,s)}catch(d){return r(d)}const c=function(d){let u;if(!d)try{s.walkTokens&&j.walkTokens(l,s.walkTokens),u=e(l,s),s.hooks&&(u=s.hooks.postprocess(u))}catch(g){d=g}return s.highlight=o,d?r(d):i(null,u)};if(!o||o.length<3||(delete s.highlight,!l.length))return c();let h=0;return j.walkTokens(l,(function(d){d.type==="code"&&(h++,setTimeout((()=>{o(d.text,d.lang,(function(u,g){if(u)return c(u);g!=null&&g!==d.text&&(d.text=g,d.escaped=!0),h--,h===0&&c()}))}),0))})),void(h===0&&c())}if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(t):t).then((o=>n(o,s))).then((o=>s.walkTokens?Promise.all(j.walkTokens(o,s.walkTokens)).then((()=>o)):o)).then((o=>e(o,s))).then((o=>s.hooks?s.hooks.postprocess(o):o)).catch(r);try{s.hooks&&(t=s.hooks.preprocess(t));const o=n(t,s);s.walkTokens&&j.walkTokens(o,s.walkTokens);let l=e(o,s);return s.hooks&&(l=s.hooks.postprocess(l)),l}catch(o){return r(o)}}}function j(n,e,t){return Ca(Ye.lex,Je.parse)(n,e,t)}j.options=j.setOptions=function(n){var e;return j.defaults={...j.defaults,...n},e=j.defaults,ct=e,j},j.getDefaults=ho,j.defaults=ct,j.use=function(...n){const e=j.defaults.extensions||{renderers:{},childTokens:{}};n.forEach((t=>{const s={...t};if(s.async=j.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach((i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const a=e.renderers[i.name];e.renderers[i.name]=a?function(...r){let o=i.renderer.apply(this,r);return o===!1&&(o=a.apply(this,r)),o}:i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[i.level]?e[i.level].unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}i.childTokens&&(e.childTokens[i.name]=i.childTokens)})),s.extensions=e),t.renderer){const i=j.defaults.renderer||new Cn;for(const a in t.renderer){const r=i[a];i[a]=(...o)=>{let l=t.renderer[a].apply(i,o);return l===!1&&(l=r.apply(i,o)),l}}s.renderer=i}if(t.tokenizer){const i=j.defaults.tokenizer||new En;for(const a in t.tokenizer){const r=i[a];i[a]=(...o)=>{let l=t.tokenizer[a].apply(i,o);return l===!1&&(l=r.apply(i,o)),l}}s.tokenizer=i}if(t.hooks){const i=j.defaults.hooks||new yn;for(const a in t.hooks){const r=i[a];yn.passThroughHooks.has(a)?i[a]=o=>{if(j.defaults.async)return Promise.resolve(t.hooks[a].call(i,o)).then((c=>r.call(i,c)));const l=t.hooks[a].call(i,o);return r.call(i,l)}:i[a]=(...o)=>{let l=t.hooks[a].apply(i,o);return l===!1&&(l=r.apply(i,o)),l}}s.hooks=i}if(t.walkTokens){const i=j.defaults.walkTokens;s.walkTokens=function(a){let r=[];return r.push(t.walkTokens.call(this,a)),i&&(r=r.concat(i.call(this,a))),r}}j.setOptions(s)}))},j.walkTokens=function(n,e){let t=[];for(const s of n)switch(t=t.concat(e.call(j,s)),s.type){case"table":for(const i of s.header)t=t.concat(j.walkTokens(i.tokens,e));for(const i of s.rows)for(const a of i)t=t.concat(j.walkTokens(a.tokens,e));break;case"list":t=t.concat(j.walkTokens(s.items,e));break;default:j.defaults.extensions&&j.defaults.extensions.childTokens&&j.defaults.extensions.childTokens[s.type]?j.defaults.extensions.childTokens[s.type].forEach((function(i){t=t.concat(j.walkTokens(s[i],e))})):s.tokens&&(t=t.concat(j.walkTokens(s.tokens,e)))}return t},j.parseInline=Ca(Ye.lexInline,Je.parseInline),j.Parser=Je,j.parser=Je.parse,j.Renderer=Cn,j.TextRenderer=La,j.Lexer=Ye,j.lexer=Ye.lex,j.Tokenizer=En,j.Slugger=Ea,j.Hooks=yn,j.parse=j,j.options,j.setOptions,j.use,j.walkTokens,j.parseInline,Je.parse,Ye.lex;const xo=()=>{let n,e,t=null;function s(){if(t&&!t.closed)t.focus();else{if(t=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),t.marked=j,t.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					// Validate the origin of all messages to avoid parsing messages
					// that aren't meant for us. Ignore when running off file:// so
					// that the speaker view continues to work without a web server.
					if( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {
						return
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						const supportedEvents = [
							'slidechanged',
							'fragmentshown',
							'fragmenthidden',
							'paused',
							'resumed',
							'previewiframe',
							'previewimage',
							'previewvideo',
							'closeoverlay'
						];

						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( supportedEvents.includes( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {
							dispatchStateToMainWindow( data.state );
						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Don't show lightboxes in the upcoming slide
					const { previewVideo, previewImage, previewIframe, ...upcomingState } = data.state;

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ upcomingState ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!t)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const o=e.getConfig().url,l=typeof o=="string"?o:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;n=setInterval((function(){t.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:e.getState(),url:l}),"*")}),500),window.addEventListener("message",a)})()}}function i(o){let l=e.getCurrentSlide(),c=l.querySelectorAll("aside.notes"),h=l.querySelector(".current-fragment"),d={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:e.getState()};if(l.hasAttribute("data-notes")&&(d.notes=l.getAttribute("data-notes"),d.whitespace="pre-wrap"),h){let u=h.querySelector("aside.notes");u?(d.notes=u.innerHTML,d.markdown=typeof u.getAttribute("data-markdown")=="string",c=null):h.hasAttribute("data-notes")&&(d.notes=h.getAttribute("data-notes"),d.whitespace="pre-wrap",c=null)}c&&c.length&&(c=Array.from(c).filter((u=>u.closest(".fragment")===null)),d.notes=c.map((u=>u.innerHTML)).join(`
`),d.markdown=c[0]&&typeof c[0].getAttribute("data-markdown")=="string"),t.postMessage(JSON.stringify(d),"*")}function a(o){if((function(l){try{return window.location.origin===l.source.location.origin}catch{return!1}})(o))try{let l=JSON.parse(o.data);l&&l.namespace==="reveal-notes"&&l.type==="connected"?(clearInterval(n),r()):l&&l.namespace==="reveal-notes"&&l.type==="call"&&(function(c,h,d){let u=e[c].apply(e,h);t.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:u,callId:d}),"*")})(l.methodName,l.arguments,l.callId)}catch{}}function r(){e.on("slidechanged",i),e.on("fragmentshown",i),e.on("fragmenthidden",i),e.on("overviewhidden",i),e.on("overviewshown",i),e.on("paused",i),e.on("resumed",i),e.on("previewiframe",i),e.on("previewimage",i),e.on("previewvideo",i),e.on("closeoverlay",i),i()}return{id:"notes",init:function(o){e=o,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?s():window.addEventListener("message",(l=>{if(!t&&typeof l.data=="string"){let h;try{h=JSON.parse(l.data)}catch{}h&&h.namespace==="reveal-notes"&&h.type==="heartbeat"&&(c=l.source,t&&!t.closed?t.focus():(t=c,window.addEventListener("message",a),r()))}var c})),e.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},(function(){s()})))},open:s}};/*!
 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
 * by navigatating to that slide and highlighting it.
 *
 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
 */const Ro=()=>{let n,e,t,s,i,a,r;function o(){e=document.createElement("div"),e.classList.add("searchbox"),e.style.position="absolute",e.style.top="10px",e.style.right="10px",e.style.zIndex=10,e.innerHTML=`<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>
		</span>`,t=e.querySelector(".searchinput"),t.style.width="240px",t.style.fontSize="14px",t.style.padding="4px 6px",t.style.color="#000",t.style.background="#fff",t.style.borderRadius="2px",t.style.border="0",t.style.outline="0",t.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",t.style["-webkit-appearance"]="none",n.getRevealElement().appendChild(e),t.addEventListener("keyup",(function(u){u.keyCode===13?(u.preventDefault(),(function(){if(a){var g=t.value;g===""?(r&&r.remove(),s=null):(r=new d("slidecontent"),s=r.apply(g),i=0)}s&&(s.length&&s.length<=i&&(i=0),s.length>i&&(n.slide(s[i].h,s[i].v),i++))})(),a=!1):a=!0}),!1),c()}function l(){e||o(),e.style.display="inline",t.focus(),t.select()}function c(){e||o(),e.style.display="none",r&&r.remove()}function h(){e||o(),e.style.display!=="inline"?l():c()}function d(u,g){var S=document.getElementById(u)||document.body,p=g||"EM",w=new RegExp("^(?:"+p+"|SCRIPT|FORM)$"),y=["#ff6","#a0ffff","#9f9","#f99","#f6f"],P=[],L=0,T="",A=[];this.setRegex=function(k){k=k.trim(),T=new RegExp("("+k+")","i")},this.getRegex=function(){return T.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(k){if(k!=null&&k&&T&&!w.test(k.nodeName)){if(k.hasChildNodes())for(var E=0;E<k.childNodes.length;E++)this.hiliteWords(k.childNodes[E]);var _,C;if(k.nodeType==3&&(_=k.nodeValue)&&(C=T.exec(_))){for(var b=k;b!=null&&b.nodeName!="SECTION";)b=b.parentNode;var O=n.getIndices(b),N=A.length,D=!1;for(E=0;E<N;E++)A[E].h===O.h&&A[E].v===O.v&&(D=!0);D||A.push(O),P[C[0].toLowerCase()]||(P[C[0].toLowerCase()]=y[L++%y.length]);var J=document.createElement(p);J.appendChild(document.createTextNode(C[0])),J.style.backgroundColor=P[C[0].toLowerCase()],J.style.fontStyle="inherit",J.style.color="#000";var te=k.splitText(C.index);te.nodeValue=te.nodeValue.substring(C[0].length),k.parentNode.insertBefore(J,te)}}},this.remove=function(){for(var k,E=document.getElementsByTagName(p);E.length&&(k=E[0]);)k.parentNode.replaceChild(k.firstChild,k)},this.apply=function(k){if(k!=null&&k)return this.remove(),this.setRegex(k),this.hiliteWords(S),A}}return{id:"search",init:u=>{n=u,n.registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",(function(g){g.key=="F"&&(g.ctrlKey||g.metaKey)&&(g.preventDefault(),h())}),!1)},open:l,close:c,toggle:h}},Ia=()=>{let n,e={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre","code"]},skipStartupTypeset:!0};return{id:"mathjax2",init:function(t){n=t;let s=n.getConfig().mathjax2||n.getConfig().math||{},i={...e,...s},a=(i.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js")+"?config="+(i.config||"TeX-AMS_HTML-full");i.tex2jax={...e.tex2jax,...s.tex2jax},i.mathjax=i.config=null,(function(r,o){let l=document.querySelector("head"),c=document.createElement("script");c.type="text/javascript",c.src=r;let h=()=>{typeof o=="function"&&(o.call(),o=null)};c.onload=h,c.onreadystatechange=()=>{this.readyState==="loaded"&&h()},l.appendChild(c)})(a,(function(){MathJax.Hub.Config(i),MathJax.Hub.Queue(["Typeset",MathJax.Hub,n.getRevealElement()]),MathJax.Hub.Queue(n.layout),n.on("slidechanged",(function(r){MathJax.Hub.Queue(["Typeset",MathJax.Hub,r.currentSlide])}))}))}}},_o=Ia;/*!
 * This plugin is a wrapper for the MathJax2,
 * MathJax3 and KaTeX typesetter plugins.
 */var To=Plugin=Object.assign(_o(),{KaTeX:()=>{let n,e={version:"latest",delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],ignoredTags:["script","noscript","style","textarea","pre","code"]};const t=s=>new Promise(((i,a)=>{const r=document.createElement("script");r.type="text/javascript",r.onload=i,r.onerror=a,r.src=s,document.head.append(r)}));return{id:"katex",init:function(s){n=s;let i=n.getConfig().katex||{},a={...e,...i};const{local:r,version:o,extensions:l,...c}=a;let h=a.local||"https://cdn.jsdelivr.net/npm/katex",d=a.local?"":"@"+a.version,u=h+d+"/dist/katex.min.css",g=h+d+"/dist/contrib/mhchem.min.js",S=h+d+"/dist/contrib/auto-render.min.js",p=[h+d+"/dist/katex.min.js"];a.extensions&&a.extensions.includes("mhchem")&&p.push(g),p.push(S);const w=()=>{renderMathInElement(s.getSlidesElement(),c),n.layout()};(y=>{let P=document.createElement("link");P.rel="stylesheet",P.href=y,document.head.appendChild(P)})(u),(async function(y){for(const P of y)await t(P)})(p).then((()=>{n.isReady()?w():n.on("ready",w.bind(this))}))}}},MathJax2:Ia,MathJax3:()=>{let n,e={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre","code"]},startup:{ready:()=>{MathJax.startup.defaultReady(),MathJax.startup.promise.then((()=>{n.layout()}))}}};return{id:"mathjax3",init:function(t){n=t;let s=n.getConfig().mathjax3||{},i={...e,...s};i.tex={...e.tex,...s.tex},i.options={...e.options,...s.options},i.startup={...e.startup,...s.startup};let a=i.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";i.mathjax=null,window.MathJax=i,(function(r,o){let l=document.createElement("script");l.type="text/javascript",l.id="MathJax-script",l.src=r,l.async=!0,l.onload=()=>{typeof o=="function"&&(o.call(),o=null)},document.head.appendChild(l)})(a,(function(){n.addEventListener("slidechanged",(function(r){MathJax.typeset()}))}))}}}});const Dn=Symbol.for("yaml.alias"),In=Symbol.for("yaml.document"),Ze=Symbol.for("yaml.map"),Na=Symbol.for("yaml.pair"),Ne=Symbol.for("yaml.scalar"),Kt=Symbol.for("yaml.seq"),ke=Symbol.for("yaml.node.type"),tt=n=>!!n&&typeof n=="object"&&n[ke]===Dn,pt=n=>!!n&&typeof n=="object"&&n[ke]===In,Bt=n=>!!n&&typeof n=="object"&&n[ke]===Ze,Y=n=>!!n&&typeof n=="object"&&n[ke]===Na,V=n=>!!n&&typeof n=="object"&&n[ke]===Ne,Dt=n=>!!n&&typeof n=="object"&&n[ke]===Kt;function X(n){if(n&&typeof n=="object")switch(n[ke]){case Ze:case Kt:return!0}return!1}function Z(n){if(n&&typeof n=="object")switch(n[ke]){case Dn:case Ze:case Ne:case Kt:return!0}return!1}const $a=n=>(V(n)||X(n))&&!!n.anchor,ge=Symbol("break visit"),qa=Symbol("skip children"),Ie=Symbol("remove node");function ut(n,e){const t=Oa(e);pt(n)?At(null,n.contents,t,Object.freeze([n]))===Ie&&(n.contents=null):At(null,n,t,Object.freeze([]))}ut.BREAK=ge;ut.SKIP=qa;ut.REMOVE=Ie;function At(n,e,t,s){const i=ja(n,e,t,s);if(Z(i)||Y(i))return Fa(n,s,i),At(n,i,t,s);if(typeof i!="symbol"){if(X(e)){s=Object.freeze(s.concat(e));for(let a=0;a<e.items.length;++a){const r=At(a,e.items[a],t,s);if(typeof r=="number")a=r-1;else{if(r===ge)return ge;r===Ie&&(e.items.splice(a,1),a-=1)}}}else if(Y(e)){s=Object.freeze(s.concat(e));const a=At("key",e.key,t,s);if(a===ge)return ge;a===Ie&&(e.key=null);const r=At("value",e.value,t,s);if(r===ge)return ge;r===Ie&&(e.value=null)}}return i}async function Ms(n,e){const t=Oa(e);pt(n)?await Pt(null,n.contents,t,Object.freeze([n]))===Ie&&(n.contents=null):await Pt(null,n,t,Object.freeze([]))}Ms.BREAK=ge;Ms.SKIP=qa;Ms.REMOVE=Ie;async function Pt(n,e,t,s){const i=await ja(n,e,t,s);if(Z(i)||Y(i))return Fa(n,s,i),Pt(n,i,t,s);if(typeof i!="symbol"){if(X(e)){s=Object.freeze(s.concat(e));for(let a=0;a<e.items.length;++a){const r=await Pt(a,e.items[a],t,s);if(typeof r=="number")a=r-1;else{if(r===ge)return ge;r===Ie&&(e.items.splice(a,1),a-=1)}}}else if(Y(e)){s=Object.freeze(s.concat(e));const a=await Pt("key",e.key,t,s);if(a===ge)return ge;a===Ie&&(e.key=null);const r=await Pt("value",e.value,t,s);if(r===ge)return ge;r===Ie&&(e.value=null)}}return i}function Oa(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function ja(n,e,t,s){if(typeof t=="function")return t(n,e,s);if(Bt(e))return t.Map?.(n,e,s);if(Dt(e))return t.Seq?.(n,e,s);if(Y(e))return t.Pair?.(n,e,s);if(V(e))return t.Scalar?.(n,e,s);if(tt(e))return t.Alias?.(n,e,s)}function Fa(n,e,t){const s=e[e.length-1];if(X(s))s.items[n]=t;else if(Y(s))n==="key"?s.key=t:s.value=t;else if(pt(s))s.contents=t;else{const i=tt(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const Uo={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Lo=n=>n.replace(/[!,[\]{}]/g,e=>Uo[e]);class he{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},he.defaultYaml,e),this.tags=Object.assign({},he.defaultTags,t)}clone(){const e=new he(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new he(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:he.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},he.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:he.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},he.defaultTags),this.atNextDocument=!1);const s=e.trim().split(/[ \t]+/),i=s.shift();switch(i){case"%TAG":{if(s.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),s.length<2))return!1;const[a,r]=s;return this.tags[a]=r,!0}case"%YAML":{if(this.yaml.explicit=!0,s.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[a]=s;if(a==="1.1"||a==="1.2")return this.yaml.version=a,!0;{const r=/^\d+\.\d+$/.test(a);return t(6,`Unsupported YAML version ${a}`,r),!1}}default:return t(0,`Unknown directive ${i}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const r=e.slice(2,-1);return r==="!"||r==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),r)}const[,s,i]=e.match(/^(.*!)([^!]*)$/s);i||t(`The ${e} tag has no suffix`);const a=this.tags[s];if(a)try{return a+decodeURIComponent(i)}catch(r){return t(String(r)),null}return s==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,s]of Object.entries(this.tags))if(e.startsWith(s))return t+Lo(e.substring(s.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],s=Object.entries(this.tags);let i;if(e&&s.length>0&&Z(e.contents)){const a={};ut(e.contents,(r,o)=>{Z(o)&&o.tag&&(a[o.tag]=!0)}),i=Object.keys(a)}else i=[];for(const[a,r]of s)a==="!!"&&r==="tag:yaml.org,2002:"||(!e||i.some(o=>o.startsWith(r)))&&t.push(`%TAG ${a} ${r}`);return t.join(`
`)}}he.defaultYaml={explicit:!1,version:"1.2"};he.defaultTags={"!!":"tag:yaml.org,2002:"};function Ma(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function Ka(n){const e=new Set;return ut(n,{Value(t,s){s.anchor&&e.add(s.anchor)}}),e}function Ba(n,e){for(let t=1;;++t){const s=`${n}${t}`;if(!e.has(s))return s}}function Eo(n,e){const t=[],s=new Map;let i=null;return{onAnchor:a=>{t.push(a),i??(i=Ka(n));const r=Ba(e,i);return i.add(r),r},setAnchors:()=>{for(const a of t){const r=s.get(a);if(typeof r=="object"&&r.anchor&&(V(r.node)||X(r.node)))r.node.anchor=r.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=a,o}}},sourceObjects:s}}function xt(n,e,t,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let i=0,a=s.length;i<a;++i){const r=s[i],o=xt(n,s,String(i),r);o===void 0?delete s[i]:o!==r&&(s[i]=o)}else if(s instanceof Map)for(const i of Array.from(s.keys())){const a=s.get(i),r=xt(n,s,i,a);r===void 0?s.delete(i):r!==a&&s.set(i,r)}else if(s instanceof Set)for(const i of Array.from(s)){const a=xt(n,s,i,i);a===void 0?s.delete(i):a!==i&&(s.delete(i),s.add(a))}else for(const[i,a]of Object.entries(s)){const r=xt(n,s,i,a);r===void 0?delete s[i]:r!==a&&(s[i]=r)}return n.call(e,t,s)}function Se(n,e,t){if(Array.isArray(n))return n.map((s,i)=>Se(s,String(i),t));if(n&&typeof n.toJSON=="function"){if(!t||!$a(n))return n.toJSON(e,t);const s={aliasCount:0,count:1,res:void 0};t.anchors.set(n,s),t.onCreate=a=>{s.res=a,delete t.onCreate};const i=n.toJSON(e,t);return t.onCreate&&t.onCreate(i),i}return typeof n=="bigint"&&!t?.keep?Number(n):n}class zn{constructor(e){Object.defineProperty(this,ke,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:s,onAnchor:i,reviver:a}={}){if(!pt(e))throw new TypeError("A document argument is required");const r={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},o=Se(this,"",r);if(typeof i=="function")for(const{count:l,res:c}of r.anchors.values())i(c,l);return typeof a=="function"?xt(a,{"":o},"",o):o}}class Ks extends zn{constructor(e){super(Dn),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){let s;t?.aliasResolveCache?s=t.aliasResolveCache:(s=[],ut(e,{Node:(a,r)=>{(tt(r)||$a(r))&&s.push(r)}}),t&&(t.aliasResolveCache=s));let i;for(const a of s){if(a===this)break;a.anchor===this.source&&(i=a)}return i}toJSON(e,t){if(!t)return{source:this.source};const{anchors:s,doc:i,maxAliasCount:a}=t,r=this.resolve(i,t);if(!r){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let o=s.get(r);if(o||(Se(r,null,t),o=s.get(r)),!o||o.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(a>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=Us(i,r,s)),o.count*o.aliasCount>a)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return o.res}toString(e,t,s){const i=`*${this.source}`;if(e){if(Ma(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const a=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(a)}if(e.implicitKey)return`${i} `}return i}}function Us(n,e,t){if(tt(e)){const s=e.resolve(n),i=t&&s&&t.get(s);return i?i.count*i.aliasCount:0}else if(X(e)){let s=0;for(const i of e.items){const a=Us(n,i,t);a>s&&(s=a)}return s}else if(Y(e)){const s=Us(n,e.key,t),i=Us(n,e.value,t);return Math.max(s,i)}return 1}const Da=n=>!n||typeof n!="function"&&typeof n!="object";class M extends zn{constructor(e){super(Ne),this.value=e}toJSON(e,t){return t?.keep?this.value:Se(this.value,e,t)}toString(){return String(this.value)}}M.BLOCK_FOLDED="BLOCK_FOLDED";M.BLOCK_LITERAL="BLOCK_LITERAL";M.PLAIN="PLAIN";M.QUOTE_DOUBLE="QUOTE_DOUBLE";M.QUOTE_SINGLE="QUOTE_SINGLE";const Co="tag:yaml.org,2002:";function Io(n,e,t){if(e){const s=t.filter(a=>a.tag===e),i=s.find(a=>!a.format)??s[0];if(!i)throw new Error(`Tag ${e} not found`);return i}return t.find(s=>s.identify?.(n)&&!s.format)}function ts(n,e,t){if(pt(n)&&(n=n.contents),Z(n))return n;if(Y(n)){const d=t.schema[Ze].createNode?.(t.schema,null,t);return d.items.push(n),d}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:s,onAnchor:i,onTagObj:a,schema:r,sourceObjects:o}=t;let l;if(s&&n&&typeof n=="object"){if(l=o.get(n),l)return l.anchor??(l.anchor=i(n)),new Ks(l.anchor);l={anchor:null,node:null},o.set(n,l)}e?.startsWith("!!")&&(e=Co+e.slice(2));let c=Io(n,e,r.tags);if(!c){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const d=new M(n);return l&&(l.node=d),d}c=n instanceof Map?r[Ze]:Symbol.iterator in Object(n)?r[Kt]:r[Ze]}a&&(a(c),delete t.onTagObj);const h=c?.createNode?c.createNode(t.schema,n,t):typeof c?.nodeClass?.from=="function"?c.nodeClass.from(t.schema,n,t):new M(n);return e?h.tag=e:c.default||(h.tag=c.tag),l&&(l.node=h),h}function qs(n,e,t){let s=t;for(let i=e.length-1;i>=0;--i){const a=e[i];if(typeof a=="number"&&Number.isInteger(a)&&a>=0){const r=[];r[a]=s,s=r}else s=new Map([[a,s]])}return ts(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const Zt=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class za extends zn{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(s=>Z(s)||Y(s)?s.clone(e):s),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Zt(e))this.add(t);else{const[s,...i]=e,a=this.get(s,!0);if(X(a))a.addIn(i,t);else if(a===void 0&&this.schema)this.set(s,qs(this.schema,i,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}deleteIn(e){const[t,...s]=e;if(s.length===0)return this.delete(t);const i=this.get(t,!0);if(X(i))return i.deleteIn(s);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${s}`)}getIn(e,t){const[s,...i]=e,a=this.get(s,!0);return i.length===0?!t&&V(a)?a.value:a:X(a)?a.getIn(i,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!Y(t))return!1;const s=t.value;return s==null||e&&V(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(e){const[t,...s]=e;if(s.length===0)return this.has(t);const i=this.get(t,!0);return X(i)?i.hasIn(s):!1}setIn(e,t){const[s,...i]=e;if(i.length===0)this.set(s,t);else{const a=this.get(s,!0);if(X(a))a.setIn(i,t);else if(a===void 0&&this.schema)this.set(s,qs(this.schema,i,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}}const No=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function Fe(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const rt=(n,e,t)=>n.endsWith(`
`)?Fe(t,e):t.includes(`
`)?`
`+Fe(t,e):(n.endsWith(" ")?"":" ")+t,Ha="flow",Nn="block",Ls="quoted";function Bs(n,e,t="flow",{indentAtStart:s,lineWidth:i=80,minContentWidth:a=20,onFold:r,onOverflow:o}={}){if(!i||i<0)return n;i<a&&(a=0);const l=Math.max(1+a,1+i-e.length);if(n.length<=l)return n;const c=[],h={};let d=i-e.length;typeof s=="number"&&(s>i-Math.max(2,a)?c.push(0):d=i-s);let u,g,S=!1,p=-1,w=-1,y=-1;t===Nn&&(p=ta(n,p,e.length),p!==-1&&(d=p+l));for(let L;L=n[p+=1];){if(t===Ls&&L==="\\"){switch(w=p,n[p+1]){case"x":p+=3;break;case"u":p+=5;break;case"U":p+=9;break;default:p+=1}y=p}if(L===`
`)t===Nn&&(p=ta(n,p,e.length)),d=p+e.length+l,u=void 0;else{if(L===" "&&g&&g!==" "&&g!==`
`&&g!=="	"){const T=n[p+1];T&&T!==" "&&T!==`
`&&T!=="	"&&(u=p)}if(p>=d)if(u)c.push(u),d=u+l,u=void 0;else if(t===Ls){for(;g===" "||g==="	";)g=L,L=n[p+=1],S=!0;const T=p>y+1?p-2:w-1;if(h[T])return n;c.push(T),h[T]=!0,d=T+l,u=void 0}else S=!0}g=L}if(S&&o&&o(),c.length===0)return n;r&&r();let P=n.slice(0,c[0]);for(let L=0;L<c.length;++L){const T=c[L],A=c[L+1]||n.length;T===0?P=`
${e}${n.slice(0,A)}`:(t===Ls&&h[T]&&(P+=`${n[T]}\\`),P+=`
${e}${n.slice(T+1,A)}`)}return P}function ta(n,e,t){let s=e,i=e+1,a=n[i];for(;a===" "||a==="	";)if(e<i+t)a=n[++e];else{do a=n[++e];while(a&&a!==`
`);s=e,i=e+1,a=n[i]}return s}const Ds=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),zs=n=>/^(%|---|\.\.\.)/m.test(n);function $o(n,e,t){if(!e||e<0)return!1;const s=e-t,i=n.length;if(i<=s)return!1;for(let a=0,r=0;a<i;++a)if(n[a]===`
`){if(a-r>s)return!0;if(r=a+1,i-r<=s)return!1}return!0}function es(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:s}=e,i=e.options.doubleQuotedMinMultiLineLength,a=e.indent||(zs(n)?"  ":"");let r="",o=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(r+=t.slice(o,l)+"\\ ",l+=1,o=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{r+=t.slice(o,l);const h=t.substr(l+2,4);switch(h){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:h.substr(0,2)==="00"?r+="\\x"+h.substr(2):r+=t.substr(l,6)}l+=5,o=l+1}break;case"n":if(s||t[l+2]==='"'||t.length<i)l+=1;else{for(r+=t.slice(o,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)r+=`
`,l+=2;r+=a,t[l+2]===" "&&(r+="\\"),l+=1,o=l+1}break;default:l+=1}return r=o?r+t.slice(o):t,s?r:Bs(r,a,Ls,Ds(e,!1))}function $n(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return es(n,e);const t=e.indent||(zs(n)?"  ":""),s="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?s:Bs(s,t,Ha,Ds(e,!1))}function Rt(n,e){const{singleQuote:t}=e.options;let s;if(t===!1)s=es;else{const i=n.includes('"'),a=n.includes("'");i&&!a?s=$n:a&&!i?s=es:s=t?$n:es}return s(n,e)}let qn;try{qn=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{qn=/\n+(?!\n|$)/g}function Es({comment:n,type:e,value:t},s,i,a){const{blockQuote:r,commentString:o,lineWidth:l}=s.options;if(!r||/\n[\t ]+$/.test(t))return Rt(t,s);const c=s.indent||(s.forceBlockIndent||zs(t)?"  ":""),h=r==="literal"?!0:r==="folded"||e===M.BLOCK_FOLDED?!1:e===M.BLOCK_LITERAL?!0:!$o(t,l,c.length);if(!t)return h?`|
`:`>
`;let d,u;for(u=t.length;u>0;--u){const A=t[u-1];if(A!==`
`&&A!=="	"&&A!==" ")break}let g=t.substring(u);const S=g.indexOf(`
`);S===-1?d="-":t===g||S!==g.length-1?(d="+",a&&a()):d="",g&&(t=t.slice(0,-g.length),g[g.length-1]===`
`&&(g=g.slice(0,-1)),g=g.replace(qn,`$&${c}`));let p=!1,w,y=-1;for(w=0;w<t.length;++w){const A=t[w];if(A===" ")p=!0;else if(A===`
`)y=w;else break}let P=t.substring(0,y<w?y+1:w);P&&(t=t.substring(P.length),P=P.replace(/\n+/g,`$&${c}`));let T=(p?c?"2":"1":"")+d;if(n&&(T+=" "+o(n.replace(/ ?[\r\n]+/g," ")),i&&i()),!h){const A=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let k=!1;const E=Ds(s,!0);r!=="folded"&&e!==M.BLOCK_FOLDED&&(E.onOverflow=()=>{k=!0});const _=Bs(`${P}${A}${g}`,c,Nn,E);if(!k)return`>${T}
${c}${_}`}return t=t.replace(/\n+/g,`$&${c}`),`|${T}
${c}${P}${t}${g}`}function qo(n,e,t,s){const{type:i,value:a}=n,{actualString:r,implicitKey:o,indent:l,indentStep:c,inFlow:h}=e;if(o&&a.includes(`
`)||h&&/[[\]{},]/.test(a))return Rt(a,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return o||h||!a.includes(`
`)?Rt(a,e):Es(n,e,t,s);if(!o&&!h&&i!==M.PLAIN&&a.includes(`
`))return Es(n,e,t,s);if(zs(a)){if(l==="")return e.forceBlockIndent=!0,Es(n,e,t,s);if(o&&l===c)return Rt(a,e)}const d=a.replace(/\n+/g,`$&
${l}`);if(r){const u=p=>p.default&&p.tag!=="tag:yaml.org,2002:str"&&p.test?.test(d),{compat:g,tags:S}=e.doc.schema;if(S.some(u)||g?.some(u))return Rt(a,e)}return o?d:Bs(d,l,Ha,Ds(e,!1))}function as(n,e,t,s){const{implicitKey:i,inFlow:a}=e,r=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:o}=n;o!==M.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(o=M.QUOTE_DOUBLE);const l=h=>{switch(h){case M.BLOCK_FOLDED:case M.BLOCK_LITERAL:return i||a?Rt(r.value,e):Es(r,e,t,s);case M.QUOTE_DOUBLE:return es(r.value,e);case M.QUOTE_SINGLE:return $n(r.value,e);case M.PLAIN:return qo(r,e,t,s);default:return null}};let c=l(o);if(c===null){const{defaultKeyType:h,defaultStringType:d}=e.options,u=i&&h||d;if(c=l(u),c===null)throw new Error(`Unsupported default string type ${u}`)}return c}function Wa(n,e){const t=Object.assign({blockQuote:!0,commentString:No,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let s;switch(t.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:s,options:t}}function Oo(n,e){if(e.tag){const i=n.filter(a=>a.tag===e.tag);if(i.length>0)return i.find(a=>a.format===e.format)??i[0]}let t,s;if(V(e)){s=e.value;let i=n.filter(a=>a.identify?.(s));if(i.length>1){const a=i.filter(r=>r.test);a.length>0&&(i=a)}t=i.find(a=>a.format===e.format)??i.find(a=>!a.format)}else s=e,t=n.find(i=>i.nodeClass&&s instanceof i.nodeClass);if(!t){const i=s?.constructor?.name??(s===null?"null":typeof s);throw new Error(`Tag not resolved for ${i} value`)}return t}function jo(n,e,{anchors:t,doc:s}){if(!s.directives)return"";const i=[],a=(V(n)||X(n))&&n.anchor;a&&Ma(a)&&(t.add(a),i.push(`&${a}`));const r=n.tag??(e.default?null:e.tag);return r&&i.push(s.directives.tagString(r)),i.join(" ")}function $t(n,e,t,s){if(Y(n))return n.toString(e,t,s);if(tt(n)){if(e.doc.directives)return n.toString(e);if(e.resolvedAliases?.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let i;const a=Z(n)?n:e.doc.createNode(n,{onTagObj:l=>i=l});i??(i=Oo(e.doc.schema.tags,a));const r=jo(a,i,e);r.length>0&&(e.indentAtStart=(e.indentAtStart??0)+r.length+1);const o=typeof i.stringify=="function"?i.stringify(a,e,t,s):V(a)?as(a,e,t,s):a.toString(e,t,s);return r?V(a)||o[0]==="{"||o[0]==="["?`${r} ${o}`:`${r}
${e.indent}${o}`:o}function Fo({key:n,value:e},t,s,i){const{allNullValues:a,doc:r,indent:o,indentStep:l,options:{commentString:c,indentSeq:h,simpleKeys:d}}=t;let u=Z(n)&&n.comment||null;if(d){if(u)throw new Error("With simple keys, key nodes cannot have comments");if(X(n)||!Z(n)&&typeof n=="object"){const E="With simple keys, collection cannot be used as a key value";throw new Error(E)}}let g=!d&&(!n||u&&e==null&&!t.inFlow||X(n)||(V(n)?n.type===M.BLOCK_FOLDED||n.type===M.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!g&&(d||!a),indent:o+l});let S=!1,p=!1,w=$t(n,t,()=>S=!0,()=>p=!0);if(!g&&!t.inFlow&&w.length>1024){if(d)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");g=!0}if(t.inFlow){if(a||e==null)return S&&s&&s(),w===""?"?":g?`? ${w}`:w}else if(a&&!d||e==null&&g)return w=`? ${w}`,u&&!S?w+=rt(w,t.indent,c(u)):p&&i&&i(),w;S&&(u=null),g?(u&&(w+=rt(w,t.indent,c(u))),w=`? ${w}
${o}:`):(w=`${w}:`,u&&(w+=rt(w,t.indent,c(u))));let y,P,L;Z(e)?(y=!!e.spaceBefore,P=e.commentBefore,L=e.comment):(y=!1,P=null,L=null,e&&typeof e=="object"&&(e=r.createNode(e))),t.implicitKey=!1,!g&&!u&&V(e)&&(t.indentAtStart=w.length+1),p=!1,!h&&l.length>=2&&!t.inFlow&&!g&&Dt(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let T=!1;const A=$t(e,t,()=>T=!0,()=>p=!0);let k=" ";if(u||y||P){if(k=y?`
`:"",P){const E=c(P);k+=`
${Fe(E,t.indent)}`}A===""&&!t.inFlow?k===`
`&&(k=`

`):k+=`
${t.indent}`}else if(!g&&X(e)){const E=A[0],_=A.indexOf(`
`),C=_!==-1,b=t.inFlow??e.flow??e.items.length===0;if(C||!b){let O=!1;if(C&&(E==="&"||E==="!")){let N=A.indexOf(" ");E==="&"&&N!==-1&&N<_&&A[N+1]==="!"&&(N=A.indexOf(" ",N+1)),(N===-1||_<N)&&(O=!0)}O||(k=`
${t.indent}`)}}else(A===""||A[0]===`
`)&&(k="");return w+=k+A,t.inFlow?T&&s&&s():L&&!T?w+=rt(w,t.indent,c(L)):p&&i&&i(),w}function Va(n,e){(n==="debug"||n==="warn")&&console.warn(e)}const As="<<",Me={identify:n=>n===As||typeof n=="symbol"&&n.description===As,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new M(Symbol(As)),{addToJSMap:Ga}),stringify:()=>As},Mo=(n,e)=>(Me.identify(e)||V(e)&&(!e.type||e.type===M.PLAIN)&&Me.identify(e.value))&&n?.doc.schema.tags.some(t=>t.tag===Me.tag&&t.default);function Ga(n,e,t){if(t=n&&tt(t)?t.resolve(n.doc):t,Dt(t))for(const s of t.items)wn(n,e,s);else if(Array.isArray(t))for(const s of t)wn(n,e,s);else wn(n,e,t)}function wn(n,e,t){const s=n&&tt(t)?t.resolve(n.doc):t;if(!Bt(s))throw new Error("Merge sources must be maps or map aliases");const i=s.toJSON(null,n,Map);for(const[a,r]of i)e instanceof Map?e.has(a)||e.set(a,r):e instanceof Set?e.add(a):Object.prototype.hasOwnProperty.call(e,a)||Object.defineProperty(e,a,{value:r,writable:!0,enumerable:!0,configurable:!0});return e}function Qa(n,e,{key:t,value:s}){if(Z(t)&&t.addToJSMap)t.addToJSMap(n,e,s);else if(Mo(n,t))Ga(n,e,s);else{const i=Se(t,"",n);if(e instanceof Map)e.set(i,Se(s,i,n));else if(e instanceof Set)e.add(i);else{const a=Ko(t,i,n),r=Se(s,a,n);a in e?Object.defineProperty(e,a,{value:r,writable:!0,enumerable:!0,configurable:!0}):e[a]=r}}return e}function Ko(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(Z(n)&&t?.doc){const s=Wa(t.doc,{});s.anchors=new Set;for(const a of t.anchors.keys())s.anchors.add(a.anchor);s.inFlow=!0,s.inStringifyKey=!0;const i=n.toString(s);if(!t.mapKeyWarned){let a=JSON.stringify(i);a.length>40&&(a=a.substring(0,36)+'..."'),Va(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${a}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return i}return JSON.stringify(e)}function Hn(n,e,t){const s=ts(n,void 0,t),i=ts(e,void 0,t);return new pe(s,i)}class pe{constructor(e,t=null){Object.defineProperty(this,ke,{value:Na}),this.key=e,this.value=t}clone(e){let{key:t,value:s}=this;return Z(t)&&(t=t.clone(e)),Z(s)&&(s=s.clone(e)),new pe(t,s)}toJSON(e,t){const s=t?.mapAsMap?new Map:{};return Qa(t,s,this)}toString(e,t,s){return e?.doc?Fo(this,e,t,s):JSON.stringify(this)}}function Ya(n,e,t){return(e.inFlow??n.flow?Do:Bo)(n,e,t)}function Bo({comment:n,items:e},t,{blockItemPrefix:s,flowChars:i,itemIndent:a,onChompKeep:r,onComment:o}){const{indent:l,options:{commentString:c}}=t,h=Object.assign({},t,{indent:a,type:null});let d=!1;const u=[];for(let S=0;S<e.length;++S){const p=e[S];let w=null;if(Z(p))!d&&p.spaceBefore&&u.push(""),Os(t,u,p.commentBefore,d),p.comment&&(w=p.comment);else if(Y(p)){const P=Z(p.key)?p.key:null;P&&(!d&&P.spaceBefore&&u.push(""),Os(t,u,P.commentBefore,d))}d=!1;let y=$t(p,h,()=>w=null,()=>d=!0);w&&(y+=rt(y,a,c(w))),d&&w&&(d=!1),u.push(s+y)}let g;if(u.length===0)g=i.start+i.end;else{g=u[0];for(let S=1;S<u.length;++S){const p=u[S];g+=p?`
${l}${p}`:`
`}}return n?(g+=`
`+Fe(c(n),l),o&&o()):d&&r&&r(),g}function Do({items:n},e,{flowChars:t,itemIndent:s}){const{indent:i,indentStep:a,flowCollectionPadding:r,options:{commentString:o}}=e;s+=a;const l=Object.assign({},e,{indent:s,inFlow:!0,type:null});let c=!1,h=0;const d=[];for(let S=0;S<n.length;++S){const p=n[S];let w=null;if(Z(p))p.spaceBefore&&d.push(""),Os(e,d,p.commentBefore,!1),p.comment&&(w=p.comment);else if(Y(p)){const P=Z(p.key)?p.key:null;P&&(P.spaceBefore&&d.push(""),Os(e,d,P.commentBefore,!1),P.comment&&(c=!0));const L=Z(p.value)?p.value:null;L?(L.comment&&(w=L.comment),L.commentBefore&&(c=!0)):p.value==null&&P?.comment&&(w=P.comment)}w&&(c=!0);let y=$t(p,l,()=>w=null);S<n.length-1&&(y+=","),w&&(y+=rt(y,s,o(w))),!c&&(d.length>h||y.includes(`
`))&&(c=!0),d.push(y),h=d.length}const{start:u,end:g}=t;if(d.length===0)return u+g;if(!c){const S=d.reduce((p,w)=>p+w.length+2,2);c=e.options.lineWidth>0&&S>e.options.lineWidth}if(c){let S=u;for(const p of d)S+=p?`
${a}${i}${p}`:`
`;return`${S}
${i}${g}`}else return`${u}${r}${d.join(" ")}${r}${g}`}function Os({indent:n,options:{commentString:e}},t,s,i){if(s&&i&&(s=s.replace(/^\n+/,"")),s){const a=Fe(e(s),n);t.push(a.trimStart())}}function ot(n,e){const t=V(e)?e.value:e;for(const s of n)if(Y(s)&&(s.key===e||s.key===t||V(s.key)&&s.key.value===t))return s}class ve extends za{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Ze,e),this.items=[]}static from(e,t,s){const{keepUndefined:i,replacer:a}=s,r=new this(e),o=(l,c)=>{if(typeof a=="function")c=a.call(t,l,c);else if(Array.isArray(a)&&!a.includes(l))return;(c!==void 0||i)&&r.items.push(Hn(l,c,s))};if(t instanceof Map)for(const[l,c]of t)o(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))o(l,t[l]);return typeof e.sortMapEntries=="function"&&r.items.sort(e.sortMapEntries),r}add(e,t){let s;Y(e)?s=e:!e||typeof e!="object"||!("key"in e)?s=new pe(e,e?.value):s=new pe(e.key,e.value);const i=ot(this.items,s.key),a=this.schema?.sortMapEntries;if(i){if(!t)throw new Error(`Key ${s.key} already set`);V(i.value)&&Da(s.value)?i.value.value=s.value:i.value=s.value}else if(a){const r=this.items.findIndex(o=>a(s,o)<0);r===-1?this.items.push(s):this.items.splice(r,0,s)}else this.items.push(s)}delete(e){const t=ot(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const i=ot(this.items,e)?.value;return(!t&&V(i)?i.value:i)??void 0}has(e){return!!ot(this.items,e)}set(e,t){this.add(new pe(e,t),!0)}toJSON(e,t,s){const i=s?new s:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(i);for(const a of this.items)Qa(t,i,a);return i}toString(e,t,s){if(!e)return JSON.stringify(this);for(const i of this.items)if(!Y(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Ya(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:t})}}const zt={collection:"map",default:!0,nodeClass:ve,tag:"tag:yaml.org,2002:map",resolve(n,e){return Bt(n)||e("Expected a mapping for this tag"),n},createNode:(n,e,t)=>ve.from(n,e,t)};class et extends za{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(Kt,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Ps(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const s=Ps(e);if(typeof s!="number")return;const i=this.items[s];return!t&&V(i)?i.value:i}has(e){const t=Ps(e);return typeof t=="number"&&t<this.items.length}set(e,t){const s=Ps(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);const i=this.items[s];V(i)&&Da(t)?i.value=t:this.items[s]=t}toJSON(e,t){const s=[];t?.onCreate&&t.onCreate(s);let i=0;for(const a of this.items)s.push(Se(a,String(i++),t));return s}toString(e,t,s){return e?Ya(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:t}):JSON.stringify(this)}static from(e,t,s){const{replacer:i}=s,a=new this(e);if(t&&Symbol.iterator in Object(t)){let r=0;for(let o of t){if(typeof i=="function"){const l=t instanceof Set?o:String(r++);o=i.call(t,l,o)}a.items.push(ts(o,void 0,s))}}return a}}function Ps(n){let e=V(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const Ht={collection:"seq",default:!0,nodeClass:et,tag:"tag:yaml.org,2002:seq",resolve(n,e){return Dt(n)||e("Expected a sequence for this tag"),n},createNode:(n,e,t)=>et.from(n,e,t)},Hs={identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify(n,e,t,s){return e=Object.assign({actualString:!0},e),as(n,e,t,s)}},Ws={identify:n=>n==null,createNode:()=>new M(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new M(null),stringify:({source:n},e)=>typeof n=="string"&&Ws.test.test(n)?n:e.options.nullStr},Wn={identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:n=>new M(n[0]==="t"||n[0]==="T"),stringify({source:n,value:e},t){if(n&&Wn.test.test(n)){const s=n[0]==="t"||n[0]==="T";if(e===s)return n}return e?t.options.trueStr:t.options.falseStr}};function _e({format:n,minFractionDigits:e,tag:t,value:s}){if(typeof s=="bigint")return String(s);const i=typeof s=="number"?s:Number(s);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let a=JSON.stringify(s);if(!n&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^\d/.test(a)){let r=a.indexOf(".");r<0&&(r=a.length,a+=".");let o=e-(a.length-r-1);for(;o-- >0;)a+="0"}return a}const Ja={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:_e},Xa={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():_e(n)}},Za={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(n){const e=new M(parseFloat(n)),t=n.indexOf(".");return t!==-1&&n[n.length-1]==="0"&&(e.minFractionDigits=n.length-t-1),e},stringify:_e},Vs=n=>typeof n=="bigint"||Number.isInteger(n),Vn=(n,e,t,{intAsBigInt:s})=>s?BigInt(n):parseInt(n.substring(e),t);function er(n,e,t){const{value:s}=n;return Vs(s)&&s>=0?t+s.toString(e):_e(n)}const tr={identify:n=>Vs(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(n,e,t)=>Vn(n,2,8,t),stringify:n=>er(n,8,"0o")},sr={identify:Vs,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(n,e,t)=>Vn(n,0,10,t),stringify:_e},nr={identify:n=>Vs(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(n,e,t)=>Vn(n,2,16,t),stringify:n=>er(n,16,"0x")},zo=[zt,Ht,Hs,Ws,Wn,tr,sr,nr,Ja,Xa,Za];function sa(n){return typeof n=="bigint"||Number.isInteger(n)}const xs=({value:n})=>JSON.stringify(n),Ho=[{identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify:xs},{identify:n=>n==null,createNode:()=>new M(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:xs},{identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:n=>n==="true",stringify:xs},{identify:sa,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(n,e,{intAsBigInt:t})=>t?BigInt(n):parseInt(n,10),stringify:({value:n})=>sa(n)?n.toString():JSON.stringify(n)},{identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:n=>parseFloat(n),stringify:xs}],Wo={default:!0,tag:"",test:/^/,resolve(n,e){return e(`Unresolved plain scalar ${JSON.stringify(n)}`),n}},Vo=[zt,Ht].concat(Ho,Wo),Gn={identify:n=>n instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(n,e){if(typeof atob=="function"){const t=atob(n.replace(/[\n\r]/g,"")),s=new Uint8Array(t.length);for(let i=0;i<t.length;++i)s[i]=t.charCodeAt(i);return s}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),n},stringify({comment:n,type:e,value:t},s,i,a){if(!t)return"";const r=t;let o;if(typeof btoa=="function"){let l="";for(let c=0;c<r.length;++c)l+=String.fromCharCode(r[c]);o=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=M.BLOCK_LITERAL),e!==M.QUOTE_DOUBLE){const l=Math.max(s.options.lineWidth-s.indent.length,s.options.minContentWidth),c=Math.ceil(o.length/l),h=new Array(c);for(let d=0,u=0;d<c;++d,u+=l)h[d]=o.substr(u,l);o=h.join(e===M.BLOCK_LITERAL?`
`:" ")}return as({comment:n,type:e,value:o},s,i,a)}};function ir(n,e){if(Dt(n))for(let t=0;t<n.items.length;++t){let s=n.items[t];if(!Y(s)){if(Bt(s)){s.items.length>1&&e("Each pair must have its own sequence indicator");const i=s.items[0]||new pe(new M(null));if(s.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${s.commentBefore}
${i.key.commentBefore}`:s.commentBefore),s.comment){const a=i.value??i.key;a.comment=a.comment?`${s.comment}
${a.comment}`:s.comment}s=i}n.items[t]=Y(s)?s:new pe(s)}}else e("Expected a sequence for this tag");return n}function ar(n,e,t){const{replacer:s}=t,i=new et(n);i.tag="tag:yaml.org,2002:pairs";let a=0;if(e&&Symbol.iterator in Object(e))for(let r of e){typeof s=="function"&&(r=s.call(e,String(a++),r));let o,l;if(Array.isArray(r))if(r.length===2)o=r[0],l=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){const c=Object.keys(r);if(c.length===1)o=c[0],l=r[o];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else o=r;i.items.push(Hn(o,l,t))}return i}const Qn={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:ir,createNode:ar};class Lt extends et{constructor(){super(),this.add=ve.prototype.add.bind(this),this.delete=ve.prototype.delete.bind(this),this.get=ve.prototype.get.bind(this),this.has=ve.prototype.has.bind(this),this.set=ve.prototype.set.bind(this),this.tag=Lt.tag}toJSON(e,t){if(!t)return super.toJSON(e);const s=new Map;t?.onCreate&&t.onCreate(s);for(const i of this.items){let a,r;if(Y(i)?(a=Se(i.key,"",t),r=Se(i.value,a,t)):a=Se(i,"",t),s.has(a))throw new Error("Ordered maps must not include duplicate keys");s.set(a,r)}return s}static from(e,t,s){const i=ar(e,t,s),a=new this;return a.items=i.items,a}}Lt.tag="tag:yaml.org,2002:omap";const Yn={collection:"seq",identify:n=>n instanceof Map,nodeClass:Lt,default:!1,tag:"tag:yaml.org,2002:omap",resolve(n,e){const t=ir(n,e),s=[];for(const{key:i}of t.items)V(i)&&(s.includes(i.value)?e(`Ordered maps must not include duplicate keys: ${i.value}`):s.push(i.value));return Object.assign(new Lt,t)},createNode:(n,e,t)=>Lt.from(n,e,t)};function rr({value:n,source:e},t){return e&&(n?or:lr).test.test(e)?e:n?t.options.trueStr:t.options.falseStr}const or={identify:n=>n===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new M(!0),stringify:rr},lr={identify:n=>n===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new M(!1),stringify:rr},Go={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:_e},Qo={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n.replace(/_/g,"")),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():_e(n)}},Yo={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(n){const e=new M(parseFloat(n.replace(/_/g,""))),t=n.indexOf(".");if(t!==-1){const s=n.substring(t+1).replace(/_/g,"");s[s.length-1]==="0"&&(e.minFractionDigits=s.length)}return e},stringify:_e},rs=n=>typeof n=="bigint"||Number.isInteger(n);function Gs(n,e,t,{intAsBigInt:s}){const i=n[0];if((i==="-"||i==="+")&&(e+=1),n=n.substring(e).replace(/_/g,""),s){switch(t){case 2:n=`0b${n}`;break;case 8:n=`0o${n}`;break;case 16:n=`0x${n}`;break}const r=BigInt(n);return i==="-"?BigInt(-1)*r:r}const a=parseInt(n,t);return i==="-"?-1*a:a}function Jn(n,e,t){const{value:s}=n;if(rs(s)){const i=s.toString(e);return s<0?"-"+t+i.substr(1):t+i}return _e(n)}const Jo={identify:rs,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(n,e,t)=>Gs(n,2,2,t),stringify:n=>Jn(n,2,"0b")},Xo={identify:rs,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(n,e,t)=>Gs(n,1,8,t),stringify:n=>Jn(n,8,"0")},Zo={identify:rs,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(n,e,t)=>Gs(n,0,10,t),stringify:_e},el={identify:rs,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(n,e,t)=>Gs(n,2,16,t),stringify:n=>Jn(n,16,"0x")};class Et extends ve{constructor(e){super(e),this.tag=Et.tag}add(e){let t;Y(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new pe(e.key,null):t=new pe(e,null),ot(this.items,t.key)||this.items.push(t)}get(e,t){const s=ot(this.items,e);return!t&&Y(s)?V(s.key)?s.key.value:s.key:s}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const s=ot(this.items,e);s&&!t?this.items.splice(this.items.indexOf(s),1):!s&&t&&this.items.push(new pe(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,s);throw new Error("Set items must all have null values")}static from(e,t,s){const{replacer:i}=s,a=new this(e);if(t&&Symbol.iterator in Object(t))for(let r of t)typeof i=="function"&&(r=i.call(t,r,r)),a.items.push(Hn(r,null,s));return a}}Et.tag="tag:yaml.org,2002:set";const Xn={collection:"map",identify:n=>n instanceof Set,nodeClass:Et,default:!1,tag:"tag:yaml.org,2002:set",createNode:(n,e,t)=>Et.from(n,e,t),resolve(n,e){if(Bt(n)){if(n.hasAllNullValues(!0))return Object.assign(new Et,n);e("Set items must all have null values")}else e("Expected a mapping for this tag");return n}};function Zn(n,e){const t=n[0],s=t==="-"||t==="+"?n.substring(1):n,i=r=>e?BigInt(r):Number(r),a=s.replace(/_/g,"").split(":").reduce((r,o)=>r*i(60)+i(o),i(0));return t==="-"?i(-1)*a:a}function cr(n){let{value:e}=n,t=r=>r;if(typeof e=="bigint")t=r=>BigInt(r);else if(isNaN(e)||!isFinite(e))return _e(n);let s="";e<0&&(s="-",e*=t(-1));const i=t(60),a=[e%i];return e<60?a.unshift(0):(e=(e-a[0])/i,a.unshift(e%i),e>=60&&(e=(e-a[0])/i,a.unshift(e))),s+a.map(r=>String(r).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const dr={identify:n=>typeof n=="bigint"||Number.isInteger(n),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(n,e,{intAsBigInt:t})=>Zn(n,t),stringify:cr},pr={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:n=>Zn(n,!1),stringify:cr},Qs={identify:n=>n instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(n){const e=n.match(Qs.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,s,i,a,r,o]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(t,s-1,i,a||0,r||0,o||0,l);const h=e[8];if(h&&h!=="Z"){let d=Zn(h,!1);Math.abs(d)<30&&(d*=60),c-=6e4*d}return new Date(c)},stringify:({value:n})=>n?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""},na=[zt,Ht,Hs,Ws,or,lr,Jo,Xo,Zo,el,Go,Qo,Yo,Gn,Me,Yn,Qn,Xn,dr,pr,Qs],ia=new Map([["core",zo],["failsafe",[zt,Ht,Hs]],["json",Vo],["yaml11",na],["yaml-1.1",na]]),aa={binary:Gn,bool:Wn,float:Za,floatExp:Xa,floatNaN:Ja,floatTime:pr,int:sr,intHex:nr,intOct:tr,intTime:dr,map:zt,merge:Me,null:Ws,omap:Yn,pairs:Qn,seq:Ht,set:Xn,timestamp:Qs},tl={"tag:yaml.org,2002:binary":Gn,"tag:yaml.org,2002:merge":Me,"tag:yaml.org,2002:omap":Yn,"tag:yaml.org,2002:pairs":Qn,"tag:yaml.org,2002:set":Xn,"tag:yaml.org,2002:timestamp":Qs};function Sn(n,e,t){const s=ia.get(e);if(s&&!n)return t&&!s.includes(Me)?s.concat(Me):s.slice();let i=s;if(!i)if(Array.isArray(n))i=[];else{const a=Array.from(ia.keys()).filter(r=>r!=="yaml11").map(r=>JSON.stringify(r)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${a} or define customTags array`)}if(Array.isArray(n))for(const a of n)i=i.concat(a);else typeof n=="function"&&(i=n(i.slice()));return t&&(i=i.concat(Me)),i.reduce((a,r)=>{const o=typeof r=="string"?aa[r]:r;if(!o){const l=JSON.stringify(r),c=Object.keys(aa).map(h=>JSON.stringify(h)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return a.includes(o)||a.push(o),a},[])}const sl=(n,e)=>n.key<e.key?-1:n.key>e.key?1:0;class Ys{constructor({compat:e,customTags:t,merge:s,resolveKnownTags:i,schema:a,sortMapEntries:r,toStringDefaults:o}){this.compat=Array.isArray(e)?Sn(e,"compat"):e?Sn(null,e):null,this.name=typeof a=="string"&&a||"core",this.knownTags=i?tl:{},this.tags=Sn(t,this.name,s),this.toStringOptions=o??null,Object.defineProperty(this,Ze,{value:zt}),Object.defineProperty(this,Ne,{value:Hs}),Object.defineProperty(this,Kt,{value:Ht}),this.sortMapEntries=typeof r=="function"?r:r===!0?sl:null}clone(){const e=Object.create(Ys.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function nl(n,e){const t=[];let s=e.directives===!0;if(e.directives!==!1&&n.directives){const l=n.directives.toString(n);l?(t.push(l),s=!0):n.directives.docStart&&(s=!0)}s&&t.push("---");const i=Wa(n,e),{commentString:a}=i.options;if(n.commentBefore){t.length!==1&&t.unshift("");const l=a(n.commentBefore);t.unshift(Fe(l,""))}let r=!1,o=null;if(n.contents){if(Z(n.contents)){if(n.contents.spaceBefore&&s&&t.push(""),n.contents.commentBefore){const h=a(n.contents.commentBefore);t.push(Fe(h,""))}i.forceBlockIndent=!!n.comment,o=n.contents.comment}const l=o?void 0:()=>r=!0;let c=$t(n.contents,i,()=>o=null,l);o&&(c+=rt(c,"",a(o))),(c[0]==="|"||c[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${c}`:t.push(c)}else t.push($t(n.contents,i));if(n.directives?.docEnd)if(n.comment){const l=a(n.comment);l.includes(`
`)?(t.push("..."),t.push(Fe(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=n.comment;l&&r&&(l=l.replace(/^\n+/,"")),l&&((!r||o)&&t[t.length-1]!==""&&t.push(""),t.push(Fe(a(l),"")))}return t.join(`
`)+`
`}class Wt{constructor(e,t,s){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,ke,{value:In});let i=null;typeof t=="function"||Array.isArray(t)?i=t:s===void 0&&t&&(s=t,t=void 0);const a=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},s);this.options=a;let{version:r}=a;s?._directives?(this.directives=s._directives.atDocument(),this.directives.yaml.explicit&&(r=this.directives.yaml.version)):this.directives=new he({version:r}),this.setSchema(r,s),this.contents=e===void 0?null:this.createNode(e,i,s)}clone(){const e=Object.create(Wt.prototype,{[ke]:{value:In}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=Z(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){bt(this.contents)&&this.contents.add(e)}addIn(e,t){bt(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const s=Ka(this);e.anchor=!t||s.has(t)?Ba(t||"a",s):t}return new Ks(e.anchor)}createNode(e,t,s){let i;if(typeof t=="function")e=t.call({"":e},"",e),i=t;else if(Array.isArray(t)){const w=P=>typeof P=="number"||P instanceof String||P instanceof Number,y=t.filter(w).map(String);y.length>0&&(t=t.concat(y)),i=t}else s===void 0&&t&&(s=t,t=void 0);const{aliasDuplicateObjects:a,anchorPrefix:r,flow:o,keepUndefined:l,onTagObj:c,tag:h}=s??{},{onAnchor:d,setAnchors:u,sourceObjects:g}=Eo(this,r||"a"),S={aliasDuplicateObjects:a??!0,keepUndefined:l??!1,onAnchor:d,onTagObj:c,replacer:i,schema:this.schema,sourceObjects:g},p=ts(e,h,S);return o&&X(p)&&(p.flow=!0),u(),p}createPair(e,t,s={}){const i=this.createNode(e,null,s),a=this.createNode(t,null,s);return new pe(i,a)}delete(e){return bt(this.contents)?this.contents.delete(e):!1}deleteIn(e){return Zt(e)?this.contents==null?!1:(this.contents=null,!0):bt(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return X(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return Zt(e)?!t&&V(this.contents)?this.contents.value:this.contents:X(this.contents)?this.contents.getIn(e,t):void 0}has(e){return X(this.contents)?this.contents.has(e):!1}hasIn(e){return Zt(e)?this.contents!==void 0:X(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=qs(this.schema,[e],t):bt(this.contents)&&this.contents.set(e,t)}setIn(e,t){Zt(e)?this.contents=t:this.contents==null?this.contents=qs(this.schema,Array.from(e),t):bt(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let s;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new he({version:"1.1"}),s={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new he({version:e}),s={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,s=null;break;default:{const i=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(s)this.schema=new Ys(Object.assign(s,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:s,maxAliasCount:i,onAnchor:a,reviver:r}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:s===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},l=Se(this.contents,t??"",o);if(typeof a=="function")for(const{count:c,res:h}of o.anchors.values())a(h,c);return typeof r=="function"?xt(r,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return nl(this,e)}}function bt(n){if(X(n))return!0;throw new Error("Expected a YAML collection as document contents")}class ei extends Error{constructor(e,t,s,i){super(),this.name=e,this.code=s,this.message=i,this.pos=t}}class lt extends ei{constructor(e,t,s){super("YAMLParseError",e,t,s)}}class ur extends ei{constructor(e,t,s){super("YAMLWarning",e,t,s)}}const js=(n,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(o=>e.linePos(o));const{line:s,col:i}=t.linePos[0];t.message+=` at line ${s}, column ${i}`;let a=i-1,r=n.substring(e.lineStarts[s-1],e.lineStarts[s]).replace(/[\n\r]+$/,"");if(a>=60&&r.length>80){const o=Math.min(a-39,r.length-79);r="…"+r.substring(o),a-=o-1}if(r.length>80&&(r=r.substring(0,79)+"…"),s>1&&/^ *$/.test(r.substring(0,a))){let o=n.substring(e.lineStarts[s-2],e.lineStarts[s-1]);o.length>80&&(o=o.substring(0,79)+`…
`),r=o+r}if(/[^ ]/.test(r)){let o=1;const l=t.linePos[1];l&&l.line===s&&l.col>i&&(o=Math.max(1,Math.min(l.col-i,80-a)));const c=" ".repeat(a)+"^".repeat(o);t.message+=`:

${r}
${c}
`}};function qt(n,{flow:e,indicator:t,next:s,offset:i,onError:a,parentIndent:r,startOnNewline:o}){let l=!1,c=o,h=o,d="",u="",g=!1,S=!1,p=null,w=null,y=null,P=null,L=null,T=null,A=null;for(const _ of n)switch(S&&(_.type!=="space"&&_.type!=="newline"&&_.type!=="comma"&&a(_.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),S=!1),p&&(c&&_.type!=="comment"&&_.type!=="newline"&&a(p,"TAB_AS_INDENT","Tabs are not allowed as indentation"),p=null),_.type){case"space":!e&&(t!=="doc-start"||s?.type!=="flow-collection")&&_.source.includes("	")&&(p=_),h=!0;break;case"comment":{h||a(_,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const C=_.source.substring(1)||" ";d?d+=u+C:d=C,u="",c=!1;break}case"newline":c?d?d+=_.source:(!T||t!=="seq-item-ind")&&(l=!0):u+=_.source,c=!0,g=!0,(w||y)&&(P=_),h=!0;break;case"anchor":w&&a(_,"MULTIPLE_ANCHORS","A node can have at most one anchor"),_.source.endsWith(":")&&a(_.offset+_.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),w=_,A??(A=_.offset),c=!1,h=!1,S=!0;break;case"tag":{y&&a(_,"MULTIPLE_TAGS","A node can have at most one tag"),y=_,A??(A=_.offset),c=!1,h=!1,S=!0;break}case t:(w||y)&&a(_,"BAD_PROP_ORDER",`Anchors and tags must be after the ${_.source} indicator`),T&&a(_,"UNEXPECTED_TOKEN",`Unexpected ${_.source} in ${e??"collection"}`),T=_,c=t==="seq-item-ind"||t==="explicit-key-ind",h=!1;break;case"comma":if(e){L&&a(_,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),L=_,c=!1,h=!1;break}default:a(_,"UNEXPECTED_TOKEN",`Unexpected ${_.type} token`),c=!1,h=!1}const k=n[n.length-1],E=k?k.offset+k.source.length:i;return S&&s&&s.type!=="space"&&s.type!=="newline"&&s.type!=="comma"&&(s.type!=="scalar"||s.source!=="")&&a(s.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),p&&(c&&p.indent<=r||s?.type==="block-map"||s?.type==="block-seq")&&a(p,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:L,found:T,spaceBefore:l,comment:d,hasNewline:g,anchor:w,tag:y,newlineAfterProp:P,end:E,start:A??E}}function ss(n){if(!n)return null;switch(n.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(n.source.includes(`
`))return!0;if(n.end){for(const e of n.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of n.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(ss(e.key)||ss(e.value))return!0}return!1;default:return!0}}function On(n,e,t){if(e?.type==="flow-collection"){const s=e.end[0];s.indent===n&&(s.source==="]"||s.source==="}")&&ss(e)&&t(s,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function hr(n,e,t){const{uniqueKeys:s}=n.options;if(s===!1)return!1;const i=typeof s=="function"?s:(a,r)=>a===r||V(a)&&V(r)&&a.value===r.value;return e.some(a=>i(a.key,t))}const ra="All mapping items must start at the same column";function il({composeNode:n,composeEmptyNode:e},t,s,i,a){const r=a?.nodeClass??ve,o=new r(t.schema);t.atRoot&&(t.atRoot=!1);let l=s.offset,c=null;for(const h of s.items){const{start:d,key:u,sep:g,value:S}=h,p=qt(d,{indicator:"explicit-key-ind",next:u??g?.[0],offset:l,onError:i,parentIndent:s.indent,startOnNewline:!0}),w=!p.found;if(w){if(u&&(u.type==="block-seq"?i(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in u&&u.indent!==s.indent&&i(l,"BAD_INDENT",ra)),!p.anchor&&!p.tag&&!g){c=p.end,p.comment&&(o.comment?o.comment+=`
`+p.comment:o.comment=p.comment);continue}(p.newlineAfterProp||ss(u))&&i(u??d[d.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else p.found?.indent!==s.indent&&i(l,"BAD_INDENT",ra);t.atKey=!0;const y=p.end,P=u?n(t,u,p,i):e(t,y,d,null,p,i);t.schema.compat&&On(s.indent,u,i),t.atKey=!1,hr(t,o.items,P)&&i(y,"DUPLICATE_KEY","Map keys must be unique");const L=qt(g??[],{indicator:"map-value-ind",next:S,offset:P.range[2],onError:i,parentIndent:s.indent,startOnNewline:!u||u.type==="block-scalar"});if(l=L.end,L.found){w&&(S?.type==="block-map"&&!L.hasNewline&&i(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&p.start<L.found.offset-1024&&i(P.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const T=S?n(t,S,L,i):e(t,l,g,null,L,i);t.schema.compat&&On(s.indent,S,i),l=T.range[2];const A=new pe(P,T);t.options.keepSourceTokens&&(A.srcToken=h),o.items.push(A)}else{w&&i(P.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),L.comment&&(P.comment?P.comment+=`
`+L.comment:P.comment=L.comment);const T=new pe(P);t.options.keepSourceTokens&&(T.srcToken=h),o.items.push(T)}}return c&&c<l&&i(c,"IMPOSSIBLE","Map comment with trailing content"),o.range=[s.offset,l,c??l],o}function al({composeNode:n,composeEmptyNode:e},t,s,i,a){const r=a?.nodeClass??et,o=new r(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=s.offset,c=null;for(const{start:h,value:d}of s.items){const u=qt(h,{indicator:"seq-item-ind",next:d,offset:l,onError:i,parentIndent:s.indent,startOnNewline:!0});if(!u.found)if(u.anchor||u.tag||d)d&&d.type==="block-seq"?i(u.end,"BAD_INDENT","All sequence items must start at the same column"):i(l,"MISSING_CHAR","Sequence item without - indicator");else{c=u.end,u.comment&&(o.comment=u.comment);continue}const g=d?n(t,d,u,i):e(t,u.end,h,null,u,i);t.schema.compat&&On(s.indent,d,i),l=g.range[2],o.items.push(g)}return o.range=[s.offset,l,c??l],o}function os(n,e,t,s){let i="";if(n){let a=!1,r="";for(const o of n){const{source:l,type:c}=o;switch(c){case"space":a=!0;break;case"comment":{t&&!a&&s(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const h=l.substring(1)||" ";i?i+=r+h:i=h,r="";break}case"newline":i&&(r+=l),a=!0;break;default:s(o,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:i,offset:e}}const kn="Block collections are not allowed within flow collections",An=n=>n&&(n.type==="block-map"||n.type==="block-seq");function rl({composeNode:n,composeEmptyNode:e},t,s,i,a){const r=s.start.source==="{",o=r?"flow map":"flow sequence",l=a?.nodeClass??(r?ve:et),c=new l(t.schema);c.flow=!0;const h=t.atRoot;h&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let d=s.offset+s.start.source.length;for(let w=0;w<s.items.length;++w){const y=s.items[w],{start:P,key:L,sep:T,value:A}=y,k=qt(P,{flow:o,indicator:"explicit-key-ind",next:L??T?.[0],offset:d,onError:i,parentIndent:s.indent,startOnNewline:!1});if(!k.found){if(!k.anchor&&!k.tag&&!T&&!A){w===0&&k.comma?i(k.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):w<s.items.length-1&&i(k.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),k.comment&&(c.comment?c.comment+=`
`+k.comment:c.comment=k.comment),d=k.end;continue}!r&&t.options.strict&&ss(L)&&i(L,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(w===0)k.comma&&i(k.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(k.comma||i(k.start,"MISSING_CHAR",`Missing , between ${o} items`),k.comment){let E="";e:for(const _ of P)switch(_.type){case"comma":case"space":break;case"comment":E=_.source.substring(1);break e;default:break e}if(E){let _=c.items[c.items.length-1];Y(_)&&(_=_.value??_.key),_.comment?_.comment+=`
`+E:_.comment=E,k.comment=k.comment.substring(E.length+1)}}if(!r&&!T&&!k.found){const E=A?n(t,A,k,i):e(t,k.end,T,null,k,i);c.items.push(E),d=E.range[2],An(A)&&i(E.range,"BLOCK_IN_FLOW",kn)}else{t.atKey=!0;const E=k.end,_=L?n(t,L,k,i):e(t,E,P,null,k,i);An(L)&&i(_.range,"BLOCK_IN_FLOW",kn),t.atKey=!1;const C=qt(T??[],{flow:o,indicator:"map-value-ind",next:A,offset:_.range[2],onError:i,parentIndent:s.indent,startOnNewline:!1});if(C.found){if(!r&&!k.found&&t.options.strict){if(T)for(const N of T){if(N===C.found)break;if(N.type==="newline"){i(N,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}k.start<C.found.offset-1024&&i(C.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else A&&("source"in A&&A.source&&A.source[0]===":"?i(A,"MISSING_CHAR",`Missing space after : in ${o}`):i(C.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const b=A?n(t,A,C,i):C.found?e(t,C.end,T,null,C,i):null;b?An(A)&&i(b.range,"BLOCK_IN_FLOW",kn):C.comment&&(_.comment?_.comment+=`
`+C.comment:_.comment=C.comment);const O=new pe(_,b);if(t.options.keepSourceTokens&&(O.srcToken=y),r){const N=c;hr(t,N.items,_)&&i(E,"DUPLICATE_KEY","Map keys must be unique"),N.items.push(O)}else{const N=new ve(t.schema);N.flow=!0,N.items.push(O);const D=(b??_).range;N.range=[_.range[0],D[1],D[2]],c.items.push(N)}d=b?b.range[2]:C.end}}const u=r?"}":"]",[g,...S]=s.end;let p=d;if(g&&g.source===u)p=g.offset+g.source.length;else{const w=o[0].toUpperCase()+o.substring(1),y=h?`${w} must end with a ${u}`:`${w} in block collection must be sufficiently indented and end with a ${u}`;i(d,h?"MISSING_CHAR":"BAD_INDENT",y),g&&g.source.length!==1&&S.unshift(g)}if(S.length>0){const w=os(S,p,t.options.strict,i);w.comment&&(c.comment?c.comment+=`
`+w.comment:c.comment=w.comment),c.range=[s.offset,p,w.offset]}else c.range=[s.offset,p,p];return c}function Pn(n,e,t,s,i,a){const r=t.type==="block-map"?il(n,e,t,s,a):t.type==="block-seq"?al(n,e,t,s,a):rl(n,e,t,s,a),o=r.constructor;return i==="!"||i===o.tagName?(r.tag=o.tagName,r):(i&&(r.tag=i),r)}function ol(n,e,t,s,i){const a=s.tag,r=a?e.directives.tagName(a.source,u=>i(a,"TAG_RESOLVE_FAILED",u)):null;if(t.type==="block-seq"){const{anchor:u,newlineAfterProp:g}=s,S=u&&a?u.offset>a.offset?u:a:u??a;S&&(!g||g.offset<S.offset)&&i(S,"MISSING_CHAR","Missing newline after block sequence props")}const o=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!a||!r||r==="!"||r===ve.tagName&&o==="map"||r===et.tagName&&o==="seq")return Pn(n,e,t,i,r);let l=e.schema.tags.find(u=>u.tag===r&&u.collection===o);if(!l){const u=e.schema.knownTags[r];if(u&&u.collection===o)e.schema.tags.push(Object.assign({},u,{default:!1})),l=u;else return u?i(a,"BAD_COLLECTION_TYPE",`${u.tag} used for ${o} collection, but expects ${u.collection??"scalar"}`,!0):i(a,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),Pn(n,e,t,i,r)}const c=Pn(n,e,t,i,r,l),h=l.resolve?.(c,u=>i(a,"TAG_RESOLVE_FAILED",u),e.options)??c,d=Z(h)?h:new M(h);return d.range=c.range,d.tag=r,l?.format&&(d.format=l.format),d}function mr(n,e,t){const s=e.offset,i=ll(e,n.options.strict,t);if(!i)return{value:"",type:null,comment:"",range:[s,s,s]};const a=i.mode===">"?M.BLOCK_FOLDED:M.BLOCK_LITERAL,r=e.source?cl(e.source):[];let o=r.length;for(let p=r.length-1;p>=0;--p){const w=r[p][1];if(w===""||w==="\r")o=p;else break}if(o===0){const p=i.chomp==="+"&&r.length>0?`
`.repeat(Math.max(1,r.length-1)):"";let w=s+i.length;return e.source&&(w+=e.source.length),{value:p,type:a,comment:i.comment,range:[s,w,w]}}let l=e.indent+i.indent,c=e.offset+i.length,h=0;for(let p=0;p<o;++p){const[w,y]=r[p];if(y===""||y==="\r")i.indent===0&&w.length>l&&(l=w.length);else{w.length<l&&t(c+w.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(l=w.length),h=p,l===0&&!n.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=w.length+y.length+1}for(let p=r.length-1;p>=o;--p)r[p][0].length>l&&(o=p+1);let d="",u="",g=!1;for(let p=0;p<h;++p)d+=r[p][0].slice(l)+`
`;for(let p=h;p<o;++p){let[w,y]=r[p];c+=w.length+y.length+1;const P=y[y.length-1]==="\r";if(P&&(y=y.slice(0,-1)),y&&w.length<l){const T=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;t(c-y.length-(P?2:1),"BAD_INDENT",T),w=""}a===M.BLOCK_LITERAL?(d+=u+w.slice(l)+y,u=`
`):w.length>l||y[0]==="	"?(u===" "?u=`
`:!g&&u===`
`&&(u=`

`),d+=u+w.slice(l)+y,u=`
`,g=!0):y===""?u===`
`?d+=`
`:u=`
`:(d+=u+y,u=" ",g=!1)}switch(i.chomp){case"-":break;case"+":for(let p=o;p<r.length;++p)d+=`
`+r[p][0].slice(l);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}const S=s+i.length+e.source.length;return{value:d,type:a,comment:i.comment,range:[s,S,S]}}function ll({offset:n,props:e},t,s){if(e[0].type!=="block-scalar-header")return s(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=e[0],a=i[0];let r=0,o="",l=-1;for(let u=1;u<i.length;++u){const g=i[u];if(!o&&(g==="-"||g==="+"))o=g;else{const S=Number(g);!r&&S?r=S:l===-1&&(l=n+u)}}l!==-1&&s(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let c=!1,h="",d=i.length;for(let u=1;u<e.length;++u){const g=e[u];switch(g.type){case"space":c=!0;case"newline":d+=g.source.length;break;case"comment":t&&!c&&s(g,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),d+=g.source.length,h=g.source.substring(1);break;case"error":s(g,"UNEXPECTED_TOKEN",g.message),d+=g.source.length;break;default:{const S=`Unexpected token in block scalar header: ${g.type}`;s(g,"UNEXPECTED_TOKEN",S);const p=g.source;p&&typeof p=="string"&&(d+=p.length)}}}return{mode:a,indent:r,chomp:o,comment:h,length:d}}function cl(n){const e=n.split(/\n( *)/),t=e[0],s=t.match(/^( *)/),a=[s?.[1]?[s[1],t.slice(s[1].length)]:["",t]];for(let r=1;r<e.length;r+=2)a.push([e[r],e[r+1]]);return a}function gr(n,e,t){const{offset:s,type:i,source:a,end:r}=n;let o,l;const c=(u,g,S)=>t(s+u,g,S);switch(i){case"scalar":o=M.PLAIN,l=dl(a,c);break;case"single-quoted-scalar":o=M.QUOTE_SINGLE,l=pl(a,c);break;case"double-quoted-scalar":o=M.QUOTE_DOUBLE,l=ul(a,c);break;default:return t(n,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[s,s+a.length,s+a.length]}}const h=s+a.length,d=os(r,h,e,t);return{value:l,type:o,comment:d.comment,range:[s,h,d.offset]}}function dl(n,e){let t="";switch(n[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${n[0]}`;break}case"@":case"`":{t=`reserved character ${n[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),fr(n)}function pl(n,e){return(n[n.length-1]!=="'"||n.length===1)&&e(n.length,"MISSING_CHAR","Missing closing 'quote"),fr(n.slice(1,-1)).replace(/''/g,"'")}function fr(n){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let s=e.exec(n);if(!s)return n;let i=s[1],a=" ",r=e.lastIndex;for(t.lastIndex=r;s=t.exec(n);)s[1]===""?a===`
`?i+=a:a=`
`:(i+=a+s[1],a=" "),r=t.lastIndex;const o=/[ \t]*(.*)/sy;return o.lastIndex=r,s=o.exec(n),i+a+(s?.[1]??"")}function ul(n,e){let t="";for(let s=1;s<n.length-1;++s){const i=n[s];if(!(i==="\r"&&n[s+1]===`
`))if(i===`
`){const{fold:a,offset:r}=hl(n,s);t+=a,s=r}else if(i==="\\"){let a=n[++s];const r=ml[a];if(r)t+=r;else if(a===`
`)for(a=n[s+1];a===" "||a==="	";)a=n[++s+1];else if(a==="\r"&&n[s+1]===`
`)for(a=n[++s+1];a===" "||a==="	";)a=n[++s+1];else if(a==="x"||a==="u"||a==="U"){const o={x:2,u:4,U:8}[a];t+=gl(n,s+1,o,e),s+=o}else{const o=n.substr(s-1,2);e(s-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),t+=o}}else if(i===" "||i==="	"){const a=s;let r=n[s+1];for(;r===" "||r==="	";)r=n[++s+1];r!==`
`&&!(r==="\r"&&n[s+2]===`
`)&&(t+=s>a?n.slice(a,s+1):i)}else t+=i}return(n[n.length-1]!=='"'||n.length===1)&&e(n.length,"MISSING_CHAR",'Missing closing "quote'),t}function hl(n,e){let t="",s=n[e+1];for(;(s===" "||s==="	"||s===`
`||s==="\r")&&!(s==="\r"&&n[e+2]!==`
`);)s===`
`&&(t+=`
`),e+=1,s=n[e+1];return t||(t=" "),{fold:t,offset:e}}const ml={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function gl(n,e,t,s){const i=n.substr(e,t),r=i.length===t&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(r)){const o=n.substr(e-2,t+2);return s(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(r)}function vr(n,e,t,s){const{value:i,type:a,comment:r,range:o}=e.type==="block-scalar"?mr(n,e,s):gr(e,n.options.strict,s),l=t?n.directives.tagName(t.source,d=>s(t,"TAG_RESOLVE_FAILED",d)):null;let c;n.options.stringKeys&&n.atKey?c=n.schema[Ne]:l?c=fl(n.schema,i,l,t,s):e.type==="scalar"?c=vl(n,i,e,s):c=n.schema[Ne];let h;try{const d=c.resolve(i,u=>s(t??e,"TAG_RESOLVE_FAILED",u),n.options);h=V(d)?d:new M(d)}catch(d){const u=d instanceof Error?d.message:String(d);s(t??e,"TAG_RESOLVE_FAILED",u),h=new M(i)}return h.range=o,h.source=i,a&&(h.type=a),l&&(h.tag=l),c.format&&(h.format=c.format),r&&(h.comment=r),h}function fl(n,e,t,s,i){if(t==="!")return n[Ne];const a=[];for(const o of n.tags)if(!o.collection&&o.tag===t)if(o.default&&o.test)a.push(o);else return o;for(const o of a)if(o.test?.test(e))return o;const r=n.knownTags[t];return r&&!r.collection?(n.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(i(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),n[Ne])}function vl({atKey:n,directives:e,schema:t},s,i,a){const r=t.tags.find(o=>(o.default===!0||n&&o.default==="key")&&o.test?.test(s))||t[Ne];if(t.compat){const o=t.compat.find(l=>l.default&&l.test?.test(s))??t[Ne];if(r.tag!==o.tag){const l=e.tagString(r.tag),c=e.tagString(o.tag),h=`Value may be parsed as either ${l} or ${c}`;a(i,"TAG_RESOLVE_FAILED",h,!0)}}return r}function bl(n,e,t){if(e){t??(t=e.length);for(let s=t-1;s>=0;--s){let i=e[s];switch(i.type){case"space":case"comment":case"newline":n-=i.source.length;continue}for(i=e[++s];i?.type==="space";)n+=i.source.length,i=e[++s];break}}return n}const yl={composeNode:br,composeEmptyNode:ti};function br(n,e,t,s){const i=n.atKey,{spaceBefore:a,comment:r,anchor:o,tag:l}=t;let c,h=!0;switch(e.type){case"alias":c=wl(n,e,s),(o||l)&&s(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=vr(n,e,l,s),o&&(c.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=ol(yl,n,e,t,s),o&&(c.anchor=o.source.substring(1));break;default:{const d=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;s(e,"UNEXPECTED_TOKEN",d),c=ti(n,e.offset,void 0,null,t,s),h=!1}}return o&&c.anchor===""&&s(o,"BAD_ALIAS","Anchor cannot be an empty string"),i&&n.options.stringKeys&&(!V(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&s(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),a&&(c.spaceBefore=!0),r&&(e.type==="scalar"&&e.source===""?c.comment=r:c.commentBefore=r),n.options.keepSourceTokens&&h&&(c.srcToken=e),c}function ti(n,e,t,s,{spaceBefore:i,comment:a,anchor:r,tag:o,end:l},c){const h={type:"scalar",offset:bl(e,t,s),indent:-1,source:""},d=vr(n,h,o,c);return r&&(d.anchor=r.source.substring(1),d.anchor===""&&c(r,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(d.spaceBefore=!0),a&&(d.comment=a,d.range[2]=l),d}function wl({options:n},{offset:e,source:t,end:s},i){const a=new Ks(t.substring(1));a.source===""&&i(e,"BAD_ALIAS","Alias cannot be an empty string"),a.source.endsWith(":")&&i(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const r=e+t.length,o=os(s,r,n.strict,i);return a.range=[e,r,o.offset],o.comment&&(a.comment=o.comment),a}function Sl(n,e,{offset:t,start:s,value:i,end:a},r){const o=Object.assign({_directives:e},n),l=new Wt(void 0,o),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},h=qt(s,{indicator:"doc-start",next:i??a?.[0],offset:t,onError:r,parentIndent:0,startOnNewline:!0});h.found&&(l.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!h.hasNewline&&r(h.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=i?br(c,i,h,r):ti(c,h.end,s,null,h,r);const d=l.contents.range[2],u=os(a,d,!1,r);return u.comment&&(l.comment=u.comment),l.range=[t,d,u.offset],l}function Jt(n){if(typeof n=="number")return[n,n+1];if(Array.isArray(n))return n.length===2?n:[n[0],n[1]];const{offset:e,source:t}=n;return[e,e+(typeof t=="string"?t.length:1)]}function oa(n){let e="",t=!1,s=!1;for(let i=0;i<n.length;++i){const a=n[i];switch(a[0]){case"#":e+=(e===""?"":s?`

`:`
`)+(a.substring(1)||" "),t=!0,s=!1;break;case"%":n[i+1]?.[0]!=="#"&&(i+=1),t=!1;break;default:t||(s=!0),t=!1}}return{comment:e,afterEmptyLine:s}}class si{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,s,i,a)=>{const r=Jt(t);a?this.warnings.push(new ur(r,s,i)):this.errors.push(new lt(r,s,i))},this.directives=new he({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:s,afterEmptyLine:i}=oa(this.prelude);if(s){const a=e.contents;if(t)e.comment=e.comment?`${e.comment}
${s}`:s;else if(i||e.directives.docStart||!a)e.commentBefore=s;else if(X(a)&&!a.flow&&a.items.length>0){let r=a.items[0];Y(r)&&(r=r.key);const o=r.commentBefore;r.commentBefore=o?`${s}
${o}`:s}else{const r=a.commentBefore;a.commentBefore=r?`${s}
${r}`:s}}t?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:oa(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,s=-1){for(const i of e)yield*this.next(i);yield*this.end(t,s)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,s,i)=>{const a=Jt(e);a[0]+=t,this.onError(a,"BAD_DIRECTIVE",s,i)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=Sl(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,s=new lt(Jt(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(s):this.doc.errors.push(s);break}case"doc-end":{if(!this.doc){const s="Unexpected doc-end without preceding document";this.errors.push(new lt(Jt(e),"UNEXPECTED_TOKEN",s));break}this.doc.directives.docEnd=!0;const t=os(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const s=this.doc.comment;this.doc.comment=s?`${s}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new lt(Jt(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const s=Object.assign({_directives:this.directives},this.options),i=new Wt(void 0,s);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,t,t],this.decorate(i,!1),yield i}}}function kl(n,e=!0,t){if(n){const s=(i,a,r)=>{const o=typeof i=="number"?i:Array.isArray(i)?i[0]:i.offset;if(t)t(o,a,r);else throw new lt([o,o+1],a,r)};switch(n.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return gr(n,e,s);case"block-scalar":return mr({options:{strict:e}},n,s)}}return null}function Al(n,e){const{implicitKey:t=!1,indent:s,inFlow:i=!1,offset:a=-1,type:r="PLAIN"}=e,o=as({type:r,value:n},{implicitKey:t,indent:s>0?" ".repeat(s):"",inFlow:i,options:{blockQuote:!0,lineWidth:-1}}),l=e.end??[{type:"newline",offset:-1,indent:s,source:`
`}];switch(o[0]){case"|":case">":{const c=o.indexOf(`
`),h=o.substring(0,c),d=o.substring(c+1)+`
`,u=[{type:"block-scalar-header",offset:a,indent:s,source:h}];return yr(u,l)||u.push({type:"newline",offset:-1,indent:s,source:`
`}),{type:"block-scalar",offset:a,indent:s,props:u,source:d}}case'"':return{type:"double-quoted-scalar",offset:a,indent:s,source:o,end:l};case"'":return{type:"single-quoted-scalar",offset:a,indent:s,source:o,end:l};default:return{type:"scalar",offset:a,indent:s,source:o,end:l}}}function Pl(n,e,t={}){let{afterKey:s=!1,implicitKey:i=!1,inFlow:a=!1,type:r}=t,o="indent"in n?n.indent:null;if(s&&typeof o=="number"&&(o+=2),!r)switch(n.type){case"single-quoted-scalar":r="QUOTE_SINGLE";break;case"double-quoted-scalar":r="QUOTE_DOUBLE";break;case"block-scalar":{const c=n.props[0];if(c.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r=c.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:r="PLAIN"}const l=as({type:r,value:e},{implicitKey:i||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:a,options:{blockQuote:!0,lineWidth:-1}});switch(l[0]){case"|":case">":xl(n,l);break;case'"':xn(n,l,"double-quoted-scalar");break;case"'":xn(n,l,"single-quoted-scalar");break;default:xn(n,l,"scalar")}}function xl(n,e){const t=e.indexOf(`
`),s=e.substring(0,t),i=e.substring(t+1)+`
`;if(n.type==="block-scalar"){const a=n.props[0];if(a.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a.source=s,n.source=i}else{const{offset:a}=n,r="indent"in n?n.indent:-1,o=[{type:"block-scalar-header",offset:a,indent:r,source:s}];yr(o,"end"in n?n.end:void 0)||o.push({type:"newline",offset:-1,indent:r,source:`
`});for(const l of Object.keys(n))l!=="type"&&l!=="offset"&&delete n[l];Object.assign(n,{type:"block-scalar",indent:r,props:o,source:i})}}function yr(n,e){if(e)for(const t of e)switch(t.type){case"space":case"comment":n.push(t);break;case"newline":return n.push(t),!0}return!1}function xn(n,e,t){switch(n.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":n.type=t,n.source=e;break;case"block-scalar":{const s=n.props.slice(1);let i=e.length;n.props[0].type==="block-scalar-header"&&(i-=n.props[0].source.length);for(const a of s)a.offset+=i;delete n.props,Object.assign(n,{type:t,source:e,end:s});break}case"block-map":case"block-seq":{const i={type:"newline",offset:n.offset+e.length,indent:n.indent,source:`
`};delete n.items,Object.assign(n,{type:t,source:e,end:[i]});break}default:{const s="indent"in n?n.indent:-1,i="end"in n&&Array.isArray(n.end)?n.end.filter(a=>a.type==="space"||a.type==="comment"||a.type==="newline"):[];for(const a of Object.keys(n))a!=="type"&&a!=="offset"&&delete n[a];Object.assign(n,{type:t,indent:s,source:e,end:i})}}}const Rl=n=>"type"in n?Fs(n):Cs(n);function Fs(n){switch(n.type){case"block-scalar":{let e="";for(const t of n.props)e+=Fs(t);return e+n.source}case"block-map":case"block-seq":{let e="";for(const t of n.items)e+=Cs(t);return e}case"flow-collection":{let e=n.start.source;for(const t of n.items)e+=Cs(t);for(const t of n.end)e+=t.source;return e}case"document":{let e=Cs(n);if(n.end)for(const t of n.end)e+=t.source;return e}default:{let e=n.source;if("end"in n&&n.end)for(const t of n.end)e+=t.source;return e}}}function Cs({start:n,key:e,sep:t,value:s}){let i="";for(const a of n)i+=a.source;if(e&&(i+=Fs(e)),t)for(const a of t)i+=a.source;return s&&(i+=Fs(s)),i}const jn=Symbol("break visit"),_l=Symbol("skip children"),wr=Symbol("remove item");function dt(n,e){"type"in n&&n.type==="document"&&(n={start:n.start,value:n.value}),Sr(Object.freeze([]),n,e)}dt.BREAK=jn;dt.SKIP=_l;dt.REMOVE=wr;dt.itemAtPath=(n,e)=>{let t=n;for(const[s,i]of e){const a=t?.[s];if(a&&"items"in a)t=a.items[i];else return}return t};dt.parentCollection=(n,e)=>{const t=dt.itemAtPath(n,e.slice(0,-1)),s=e[e.length-1][0],i=t?.[s];if(i&&"items"in i)return i;throw new Error("Parent collection not found")};function Sr(n,e,t){let s=t(e,n);if(typeof s=="symbol")return s;for(const i of["key","value"]){const a=e[i];if(a&&"items"in a){for(let r=0;r<a.items.length;++r){const o=Sr(Object.freeze(n.concat([[i,r]])),a.items[r],t);if(typeof o=="number")r=o-1;else{if(o===jn)return jn;o===wr&&(a.items.splice(r,1),r-=1)}}typeof s=="function"&&i==="key"&&(s=s(e,n))}}return typeof s=="function"?s(e,n):s}const Js="\uFEFF",Xs="",Zs="",ns="",Tl=n=>!!n&&"items"in n,Ul=n=>!!n&&(n.type==="scalar"||n.type==="single-quoted-scalar"||n.type==="double-quoted-scalar"||n.type==="block-scalar");function Ll(n){switch(n){case Js:return"<BOM>";case Xs:return"<DOC>";case Zs:return"<FLOW_END>";case ns:return"<SCALAR>";default:return JSON.stringify(n)}}function kr(n){switch(n){case Js:return"byte-order-mark";case Xs:return"doc-mode";case Zs:return"flow-error-end";case ns:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(n[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const El=Object.freeze(Object.defineProperty({__proto__:null,BOM:Js,DOCUMENT:Xs,FLOW_END:Zs,SCALAR:ns,createScalarToken:Al,isCollection:Tl,isScalar:Ul,prettyToken:Ll,resolveAsScalar:kl,setScalarValue:Pl,stringify:Rl,tokenType:kr,visit:dt},Symbol.toStringTag,{value:"Module"}));function Pe(n){switch(n){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const la=new Set("0123456789ABCDEFabcdef"),Cl=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Rs=new Set(",[]{}"),Il=new Set(` ,[]{}
\r	`),Rn=n=>!n||Il.has(n);class Ar{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let s=this.next??"stream";for(;s&&(t||this.hasChars(1));)s=yield*this.parseNext(s)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let s=0;for(;t===" ";)t=this.buffer[++s+e];if(t==="\r"){const i=this.buffer[s+e+1];if(i===`
`||!i&&!this.atEnd)return e+s+1}return t===`
`||s>=this.indentNext||!t&&!this.atEnd?e+s:-1}if(t==="-"||t==="."){const s=this.buffer.substr(e,3);if((s==="---"||s==="...")&&Pe(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Js&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,s=e.indexOf("#");for(;s!==-1;){const a=e[s-1];if(a===" "||a==="	"){t=s-1;break}else s=e.indexOf("#",s+1)}for(;;){const a=e[t-1];if(a===" "||a==="	")t-=1;else break}const i=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Xs,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Pe(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Pe(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Pe(t)){const s=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=s,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Rn),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,s=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=s=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((s!==-1&&s<this.indentNext&&i[0]!=="#"||s===0&&(i.startsWith("---")||i.startsWith("..."))&&Pe(i[3]))&&!(s===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield Zs,yield*this.parseLineStart();let a=0;for(;i[a]===",";)a+=yield*this.pushCount(1),a+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(a+=yield*this.pushIndicators(),i[a]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-a),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Rn),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const r=this.charAt(1);if(this.flowKey||Pe(r)||r===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let a=0;for(;this.buffer[t-1-a]==="\\";)a+=1;if(a%2===0)break;t=this.buffer.indexOf('"',t+1)}const s=this.buffer.substring(0,t);let i=s.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const a=this.continueScalar(i+1);if(a===-1)break;i=s.indexOf(`
`,a)}i!==-1&&(t=i-(s[i-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Pe(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,s;e:for(let a=this.pos;s=this.buffer[a];++a)switch(s){case" ":t+=1;break;case`
`:e=a,t=0;break;case"\r":{const r=this.buffer[a+1];if(!r&&!this.atEnd)return this.setNext("block-scalar");if(r===`
`)break}default:break e}if(!s&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const a=this.continueScalar(e+1);if(a===-1)break;e=this.buffer.indexOf(`
`,a)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let i=e+1;for(s=this.buffer[i];s===" ";)s=this.buffer[++i];if(s==="	"){for(;s==="	"||s===" "||s==="\r"||s===`
`;)s=this.buffer[++i];e=i-1}else if(!this.blockScalarKeep)do{let a=e-1,r=this.buffer[a];r==="\r"&&(r=this.buffer[--a]);const o=a;for(;r===" ";)r=this.buffer[--a];if(r===`
`&&a>=this.pos&&a+1+t>o)e=a;else break}while(!0);return yield ns,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,s=this.pos-1,i;for(;i=this.buffer[++s];)if(i===":"){const a=this.buffer[s+1];if(Pe(a)||e&&Rs.has(a))break;t=s}else if(Pe(i)){let a=this.buffer[s+1];if(i==="\r"&&(a===`
`?(s+=1,i=`
`,a=this.buffer[s+1]):t=s),a==="#"||e&&Rs.has(a))break;if(i===`
`){const r=this.continueScalar(s+1);if(r===-1)break;s=Math.max(s,r-2)}}else{if(e&&Rs.has(i))break;t=s}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield ns,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const s=this.buffer.slice(this.pos,e);return s?(yield s,this.pos+=s.length,s.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Rn))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,t=this.charAt(1);if(Pe(t)||e&&Rs.has(t))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!Pe(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(Cl.has(t))t=this.buffer[++e];else if(t==="%"&&la.has(this.buffer[e+1])&&la.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,s;do s=this.buffer[++t];while(s===" "||e&&s==="	");const i=t-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=t),i}*pushUntil(e){let t=this.pos,s=this.buffer[t];for(;!e(s);)s=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class Pr{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,s=this.lineStarts.length;for(;t<s;){const a=t+s>>1;this.lineStarts[a]<e?t=a+1:s=a}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const i=this.lineStarts[t-1];return{line:t,col:e-i+1}}}}function Qe(n,e){for(let t=0;t<n.length;++t)if(n[t].type===e)return!0;return!1}function ca(n){for(let e=0;e<n.length;++e)switch(n[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function xr(n){switch(n?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function _s(n){switch(n.type){case"document":return n.start;case"block-map":{const e=n.items[n.items.length-1];return e.sep??e.start}case"block-seq":return n.items[n.items.length-1].start;default:return[]}}function yt(n){if(n.length===0)return[];let e=n.length;e:for(;--e>=0;)switch(n[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;n[++e]?.type==="space";);return n.splice(e,n.length)}function da(n){if(n.start.type==="flow-seq-start")for(const e of n.items)e.sep&&!e.value&&!Qe(e.start,"explicit-key-ind")&&!Qe(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,xr(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class ni{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Ar,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const s of this.lexer.lex(e,t))yield*this.next(s);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=kr(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const s=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:s,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(!e||e.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const s=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in s?s.indent:0:t.type==="flow-collection"&&s.type==="document"&&(t.indent=0),t.type==="flow-collection"&&da(t),s.type){case"document":s.value=t;break;case"block-scalar":s.props.push(t);break;case"block-map":{const i=s.items[s.items.length-1];if(i.value){s.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=t;else{Object.assign(i,{key:t,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=s.items[s.items.length-1];i.value?s.items.push({start:[],value:t}):i.value=t;break}case"flow-collection":{const i=s.items[s.items.length-1];!i||i.value?s.items.push({start:[],key:t,sep:[]}):i.sep?i.value=t:Object.assign(i,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((s.type==="document"||s.type==="block-map"||s.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const i=t.items[t.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&ca(i.start)===-1&&(t.indent===0||i.start.every(a=>a.type!=="comment"||a.indent<t.indent))&&(s.type==="document"?s.end=i.start:s.items.push({start:i.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{ca(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=_s(this.peek(2)),s=yt(t);let i;e.end?(i=e.end,i.push(this.sourceToken),delete e.end):i=[this.sourceToken];const a={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:s,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0;(Array.isArray(s)?s[s.length-1]:void 0)?.type==="comment"?s?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2]?.value?.end;if(Array.isArray(i)){Array.prototype.push.apply(i,t.start),i.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,i=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let a=[];if(i&&t.sep&&!t.value){const r=[];for(let o=0;o<t.sep.length;++o){const l=t.sep[o];switch(l.type){case"newline":r.push(o);break;case"space":break;case"comment":l.indent>e.indent&&(r.length=0);break;default:r.length=0}}r.length>=2&&(a=t.sep.splice(r[1]))}switch(this.type){case"anchor":case"tag":i||t.value?(a.push(this.sourceToken),e.items.push({start:a}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):i||t.value?(a.push(this.sourceToken),e.items.push({start:a,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Qe(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]});else if(xr(t.key)&&!Qe(t.sep,"newline")){const r=yt(t.start),o=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:o,sep:l}]})}else a.length>0?t.sep=t.sep.concat(a,this.sourceToken):t.sep.push(this.sourceToken);else if(Qe(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const r=yt(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||i?e.items.push({start:a,key:null,sep:[this.sourceToken]}):Qe(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const r=this.flowScalar(this.type);i||t.value?(e.items.push({start:a,key:r,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(r):(Object.assign(t,{key:r,sep:[]}),this.onKeyLine=!0);return}default:{const r=this.startBlockValue(e);if(r){if(r.type==="block-seq"){if(!t.explicitKey&&t.sep&&!Qe(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&e.items.push({start:a});this.stack.push(r);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0;(Array.isArray(s)?s[s.length-1]:void 0)?.type==="comment"?s?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2]?.value?.end;if(Array.isArray(i)){Array.prototype.push.apply(i,t.start),i.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||Qe(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let s;do yield*this.pop(),s=this.peek(1);while(s&&s.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:i,sep:[]}):t.sep?this.stack.push(i):Object.assign(t,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const s=this.startBlockValue(e);s?this.stack.push(s):(yield*this.pop(),yield*this.step())}else{const s=this.peek(2);if(s.type==="block-map"&&(this.type==="map-value-ind"&&s.indent===e.indent||this.type==="newline"&&!s.items[s.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&s.type!=="flow-collection"){const i=_s(s),a=yt(i);da(e);const r=e.end.splice(1,e.end.length);r.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:a,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=_s(e),s=yt(t);return s.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=_s(e),s=yt(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(s=>s.type==="newline"||s.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Rr(n){const e=n.prettyErrors!==!1;return{lineCounter:n.lineCounter||e&&new Pr||null,prettyErrors:e}}function Nl(n,e={}){const{lineCounter:t,prettyErrors:s}=Rr(e),i=new ni(t?.addNewLine),a=new si(e),r=Array.from(a.compose(i.parse(n)));if(s&&t)for(const o of r)o.errors.forEach(js(n,t)),o.warnings.forEach(js(n,t));return r.length>0?r:Object.assign([],{empty:!0},a.streamInfo())}function _r(n,e={}){const{lineCounter:t,prettyErrors:s}=Rr(e),i=new ni(t?.addNewLine),a=new si(e);let r=null;for(const o of a.compose(i.parse(n),!0,n.length))if(!r)r=o;else if(r.options.logLevel!=="silent"){r.errors.push(new lt(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return s&&t&&(r.errors.forEach(js(n,t)),r.warnings.forEach(js(n,t))),r}function $l(n,e,t){let s;typeof e=="function"?s=e:t===void 0&&e&&typeof e=="object"&&(t=e);const i=_r(n,t);if(!i)return null;if(i.warnings.forEach(a=>Va(i.options.logLevel,a)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:s},t))}function ql(n,e,t){let s=null;if(typeof e=="function"||Array.isArray(e)?s=e:t===void 0&&e&&(t=e),typeof t=="string"&&(t=t.length),typeof t=="number"){const i=Math.round(t);t=i<1?void 0:i>8?{indent:8}:{indent:i}}if(n===void 0){const{keepUndefined:i}=t??e??{};if(!i)return}return pt(n)&&!s?n.toString(t):new Wt(n,s,t).toString(t)}const en=Object.freeze(Object.defineProperty({__proto__:null,Alias:Ks,CST:El,Composer:si,Document:Wt,Lexer:Ar,LineCounter:Pr,Pair:pe,Parser:ni,Scalar:M,Schema:Ys,YAMLError:ei,YAMLMap:ve,YAMLParseError:lt,YAMLSeq:et,YAMLWarning:ur,isAlias:tt,isCollection:X,isDocument:pt,isMap:Bt,isNode:Z,isPair:Y,isScalar:V,isSeq:Dt,parse:$l,parseAllDocuments:Nl,parseDocument:_r,stringify:ql,visit:ut,visitAsync:Ms},Symbol.toStringTag,{value:"Module"})),Ol=`version: 1
coreCount: 41
backupCount: 59
coreTotalSeconds: 2370
backupTotalSeconds: 0
slides:
  - id: title
    section: title
    title: "Secure Single Password Authentication Protocols in Distributed Systems"
    route: core
    estimatedSeconds: 30
    sourceRefs:
      - "presentation.config.yaml#lines-1-17"
      - "source-material/thesis/MSc.tex#lines-54-63"
    formulas: []
    visual: "Minimal title composition with the supplied Koç University logo and a restrained user-provider-service network motif."
    citation: "Presentation configuration; thesis title page."
    speakerNotes:
      main: "This thesis asks how one remembered password can support many independent services while the supporting state remains updateable and available."
      cues:
        - "Introduce the thesis as a progression from password separation to threshold storage, updates, and resilience."
        - "State that every security claim will retain its corruption, endpoint, channel, and availability assumptions."
      transition: "I will begin with the ordinary authentication problem that motivates this line of work."
      skip: "No; this is the formal opening."
      jury: "What is the thesis's single central contribution?"
      pointer: "backup-references"

  - id: problem-daily-authentication
    section: password-problem
    title: "Authentication is a daily activity"
    route: core
    estimatedSeconds: 45
    sourceRefs:
      - "BUILD_REVEAL_DEFENSE.md#lines-13-17"
      - "source-material/thesis/Prelude/Relatedworks.tex#prelude:related-work/lines-3-7"
    formulas: []
    visual: "A centered user surrounded by generic service cards revealed in small groups; no commercial logos or usage statistics."
    citation: "Defense narrative; Thesis, Related Work."
    speakerNotes:
      main: "A single person repeatedly authenticates to many independent services, so credential handling is a routine systems problem."
      cues:
        - "Use familiar service categories without implying a measured account count."
        - "Keep the opening qualitative; the deck intentionally avoids unreliable password-use statistics."
        - "Visuals: Font Awesome Free 6.x solid icons (CC BY 4.0), https://github.com/FortAwesome/Font-Awesome."
      transition: "That repeated task creates a simple but uncomfortable choice: reuse one password, or maintain many."
      skip: "Yes; combine with problem-two-strategies if time is tight."
      jury: "Why avoid numerical password-use statistics here?"
      pointer: "backup-references"

  - id: problem-two-strategies
    section: password-problem
    title: "One password or many passwords?"
    route: core
    estimatedSeconds: 40
    sourceRefs:
      - "BUILD_REVEAL_DEFENSE.md#lines-229-238"
      - "source-material/thesis/Prelude/Relatedworks.tex#rw:spa-family/lines-7-11"
    formulas: []
    visual: "A two-branch path from many accounts: password reuse versus a distinct password per service, with burden and compromise propagation shown visually."
    citation: "Thesis, Related Work §rw:spa-family."
    speakerNotes:
      main: "Password reuse reduces memory burden, while distinct credentials better isolate compromise but increase maintenance and recovery work."
      cues:
        - "Do not imply that every user follows either extreme."
        - "Frame both branches as understandable responses to the same usability pressure."
      transition: "The trade-off is therefore not convenience versus security in the abstract, but daily effort versus compromise isolation."
      skip: "Yes; retain problem-strategy-comparison as the synthesis."
      jury: "Does the thesis model human password choice?"
      pointer: "backup-references"

  - id: problem-strategy-comparison
    section: password-problem
    title: "The tension is convenience versus isolation"
    route: core
    estimatedSeconds: 40
    sourceRefs:
      - "BUILD_REVEAL_DEFENSE.md#lines-240-253"
      - "source-material/thesis/Prelude/Relatedworks.tex#rw:spa-family/lines-7-17"
    formulas: []
    visual: "A balanced two-column comparison of reuse and distinct-password strategies, ending in the need for a management layer."
    citation: "Defense narrative; Thesis, Related Work §rw:spa-family."
    speakerNotes:
      main: "Neither extreme removes the need to manage credentials; it only moves the burden or the compromise boundary."
      cues:
        - "Reuse is easy but can propagate one disclosure."
        - "Distinct passwords isolate better but increase reset, recovery, and memory work."
        - "This tension motivates a credential-management layer rather than a moral judgment about users."
      transition: "The strongest practical answer today is the password manager."
      skip: "No; this slide states the motivating trade-off."
      jury: "Is password reuse itself part of the formal adversarial model?"
      pointer: "backup-references"

  - id: problem-password-manager
    section: password-problem
    title: "The practical answer is a password manager"
    route: core
    estimatedSeconds: 45
    sourceRefs:
      - "BUILD_REVEAL_DEFENSE.md#lines-255-265"
      - "source-material/thesis/Prelude/Relatedworks.tex#rw:spa-family/lines-11-13"
    formulas: []
    visual: "Many site-specific credentials converge on an encrypted vault protected by one master secret."
    citation: "Defense narrative; Thesis, Related Work §rw:spa-family."
    speakerNotes:
      main: "Password managers are a strong usability solution that place site credentials behind one managed vault."
      cues:
        - "Acknowledge them positively and explicitly."
        - "The thesis explores a different storage and trust design point; it does not argue that password managers are generally insecure."
        - "Visuals: Font Awesome Free 6.x solid icons (CC BY 4.0), https://github.com/FortAwesome/Font-Awesome."
      transition: "Password managers themselves commonly choose between a local vault and cloud-synchronized encrypted state."
      skip: "No; this prevents a false comparison premise."
      jury: "Why develop SPA if password managers already work well?"
      pointer: "backup-references"

  - id: problem-local-cloud-managers
    section: password-problem
    title: "Password managers commonly use two storage models"
    route: backup
    estimatedSeconds: 0
    returnTarget: "problem-password-manager"
    sourceRefs:
      - "BUILD_REVEAL_DEFENSE.md#lines-267-285"
      - "source-material/thesis/Prelude/Relatedworks.tex#rw:spa-family/lines-11-13"
    formulas: []
    visual: "Balanced local-vault and cloud-synchronized-vault panels with portability, backup, availability, and metadata boundaries."
    citation: "Defense narrative; Thesis, Related Work §rw:spa-family."
    speakerNotes:
      main: "Local and cloud-synchronized vaults make different portability, availability, backup, and metadata trade-offs."
      cues:
        - "Neither panel is labeled insecure."
        - "The comparison establishes a design space, not a winner."
      transition: "SPA asks whether the remembered password can sit at yet another point in that design space."
      skip: "Yes; summarize both models on the password-manager slide if needed."
      jury: "Is UpSPA intended to replace every password manager deployment?"
      pointer: "backup-references"

  - id: problem-research-question
    section: password-problem
    title: "A different design point"
    route: core
    estimatedSeconds: 45
    sourceRefs:
      - "BUILD_REVEAL_DEFENSE.md#lines-287-301"
      - "source-material/thesis/Prelude/Relatedworks.tex#rw:spa-family/lines-7-19"
    formulas: []
    visual: "One large research question followed by a restrained reveal of Single Password Authentication (SPA)."
    citation: "Thesis, Related Work §rw:spa-family."
    speakerNotes:
      main: "SPA preserves one memorable password while keeping that password and reusable deterministic derivatives away from login servers."
      cues:
        - "Emphasize the ordinary login-server interface."
        - "The password-protected helper state is the architectural change."
      transition: "The research line then adds threshold distribution, updates, and finally resilient state recovery."
      skip: "No; this is the bridge into the thesis lineage."
      jury: "What exactly does a login server receive instead of the password?"
      pointer: "backup-notation"

  - id: lineage-overview
    section: spa-lineage
    title: "The research line adds one missing capability at a time"
    route: core
    estimatedSeconds: 55
    sourceRefs:
      - "source-material/thesis/Prelude/Relatedworks.tex#rw:spa-family/lines-9-19"
      - "source-material/thesis/references.bib#entries-acar2013single-icsler2017threshold-Isler2018DiSPP-UpSPA"
      - "source-material/thesis/Prelude/Introduction/Publications.tex#lines-7-23"
    formulas: []
    visual: "Timeline: SPA → TSPA → UpSPA → RoUpSPA, with one capability phrase and verified author-year/status citation per node."
    citation: "Acar, Belenkiy & Küpçü, 2013; İşler & Küpçü, 2017; UpSPA ePrint 2026/784; RoUpSPA manuscript submitted to ACM TOPS."
    speakerNotes:
      main: "The lineage moves from one helper, to a threshold helper set, to an update lifecycle, and then to quorum completion and stale-replica recovery."
      cues:
        - "SPA separates the password from login servers."
        - "TSPA distributes the helper role."
        - "UpSPA adds secret and password update; RoUpSPA adds resilience."
      transition: "First, SPA establishes the basic separation between a login server and a helper."
      skip: "No; this is the roadmap for both technical chapters."
      jury: "What publication status can be claimed for UpSPA and RoUpSPA?"
      pointer: "backup-references"

  - id: lineage-spa
    section: spa-lineage
    title: "SPA separates the password from the login server"
    route: core
    estimatedSeconds: 50
    sourceRefs:
      - "source-material/thesis/Prelude/Relatedworks.tex#rw:spa-family/lines-7-13"
      - "source-material/thesis/references.bib#entry-acar2013single"
    formulas: []
    visual: "User, one helper storage provider, and one login server; arrows distinguish secret recovery from login-server authentication."
    citation: "Acar, Belenkiy & Küpçü, Computer Networks, 2013; Thesis §rw:spa-family."
    speakerNotes:
      main: "SPA gives each service high-entropy authentication material while a separate helper protects the corresponding secret under the one remembered password."
      cues:
        - "The login server never receives the user's password."
        - "The single-helper collusion boundary remains important."
        - "SPA did not define the distributed update lifecycle developed in this thesis."
      transition: "TSPA strengthens the helper boundary by distributing it across multiple providers."
      skip: "No; this establishes the baseline architecture."
      jury: "Why is collusion between the helper and login server dangerous?"
      pointer: "backup-references"

  - id: lineage-tspa
    section: spa-lineage
    title: "TSPA distributes the helper role"
    route: core
    estimatedSeconds: 50
    sourceRefs:
      - "source-material/thesis/Prelude/Relatedworks.tex#rw:spa-family/lines-15-17"
      - "source-material/thesis/references.bib#entry-icsler2017threshold"
    formulas:
      - '\\text{authentication requires at least } t_{\\mathrm{sp}} \\text{ valid providers}'
    visual: "Replace the single helper with SP₁…SPₙ and highlight an active threshold t_sp; keep the login server outside the TOPRF interaction."
    citation: "İşler & Küpçü, Threshold Single Password Authentication, 2017; Thesis §rw:spa-family."
    speakerNotes:
      main: "TSPA makes secret recovery depend on threshold-many provider contributions, moving the offline-test boundary to the login server plus at least t_sp providers."
      cues:
        - "Provider-specific OPRF outputs protect the secret shares."
        - "Fewer than t_sp providers cannot reconstruct the authentication secret."
        - "TSPA still concentrates on registration and authentication."
      transition: "The remaining gap is not another login mechanism; it is the lifecycle of changing passwords and account secrets safely."
      skip: "No; the threshold distinction is used throughout the thesis."
      jury: "Why is ordinary secret sharing without an OPRF insufficient?"
      pointer: "backup-references"

  - id: lineage-gap-and-thesis
    section: spa-lineage
    title: "The missing piece is a credential lifecycle"
    route: core
    estimatedSeconds: 45
    sourceRefs:
      - "source-material/thesis/Prelude/Relatedworks.tex#rw:spa-family/lines-17-19"
      - "source-material/thesis/Prelude/Introduction/Outline.tex#lines-1-45"
    formulas: []
    visual: "Contrast SPA/TSPA's registration-authentication path with Setup, Registration, Authentication, Secret Update, and Password Update; reveal RoUpSPA as the resilience layer."
    citation: "Thesis, Related Work §rw:spa-family; Thesis Outline and Contributions."
    speakerNotes:
      main: "UpSPA adds an explicit five-phase credential lifecycle, and RoUpSPA then changes the availability and recovery rules around that same cryptographic core."
      cues:
        - "Secret update rotates one service's authentication secret."
        - "Password update re-protects compact root state."
        - "RoUpSPA addresses providers that are temporarily unavailable or stale."
      transition: "We can now examine the first main contribution: the UpSPA construction."
      skip: "No; this slide states the thesis gap and contribution split."
      jury: "Why are secret update and password update separate phases?"
      pointer: "backup-upspa-challenges-full"

  - id: upspa-overview
    section: upspa
    title: "UpSPA turns threshold SPA into a five-phase framework"
    route: core
    estimatedSeconds: 45
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Threat model.tex#sec:upspa-system-and-threat-model/lines-19-88"
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#sec:upspa-construction/lines-1-24"
    formulas: []
    visual: "Three anchors - one remembered password, service-specific high-entropy state, and native updates - over a subtle five-phase lifecycle."
    citation: "Thesis, UpSPA system design and construction."
    speakerNotes:
      main: "UpSPA preserves the threshold password boundary while adding first-class account-secret and password updates."
      cues:
        - "It retains ordinary login-server deployment."
        - "The construction separates a compact root from per-service account state."
        - "State-changing phases use a fully available provider baseline."
      transition: "The architecture is easiest to understand by separating what the client, login server, and storage providers can see."
      skip: "No; this opens the main technical contribution."
      jury: "What does 'fully available baseline' mean precisely?"
      pointer: "backup-upspa-threat-model-full"

  - id: upspa-parties
    section: upspa
    title: "Three roles separate password recovery from service authentication"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-overview"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Threat model.tex#subsec:upspa-system-model/lines-20-58"
      - "source-material/thesis/UpSPA variation/Full available version/Threat model.tex#subsec:upspa-system-design/lines-60-89"
    formulas:
      - '1 \\le t_{\\mathrm{sp}} \\le n_{\\mathrm{sp}}'
    visual: "Trust-boundary diagram with User U, storage providers SP_i, and independent login servers LS_j; color password-derived traffic separately from service login traffic."
    citation: "Thesis, UpSPA system model and design."
    speakerNotes:
      main: "The client remembers one password, the storage providers help recover protected state, and each login server verifies a high-entropy service credential rather than the password."
      cues:
        - "Storage providers hold encrypted records and TOPRF shares."
        - "A login server is not a storage provider and never receives the password."
        - "Security depends on fewer than t_sp storage providers colluding with the login server."
      transition: "The cleanest way to see what these parties store is to split the client state into root and account layers."
      skip: "No; the trust boundaries define every later security claim."
      jury: "Which parties must collude to mount an offline password test?"
      pointer: "backup-upspa-threat-model-full"

  - id: upspa-two-layer-state
    section: upspa
    title: "A compact root unlocks independent per-service account records"
    route: core
    estimatedSeconds: 50
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Threat model.tex#subsec:upspa-system-design/lines-60-89"
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#sec:upspa-construction/lines-25-113"
    formulas:
      - 'cid=\\operatorname{Enc}_{F_K(pwd)}(ssk\\parallel R^{sp}\\parallel K_0)'
      - 'SUid_{l,i,j}=H(R^{sp}\\parallel ls_j\\parallel i)'
      - 'c_j=\\operatorname{Enc}_{K_0}(R^{ls_j}\\parallel ctr_{ac}),\\quad vInfo_j=H(R^{ls_j}\\parallel ls_j)'
    visual: "Nested state diagram: password-derived TOPRF output opens cid; K_0 then opens each service-specific c_j, while vInfo_j authenticates the login-server binding."
    citation: "Thesis, UpSPA construction and state definitions."
    speakerNotes:
      main: "The password protects only a compact root, while K_0 protects independently addressable service records whose identifiers do not reveal the login-server name."
      cues:
        - "R^sp derives unlinkable provider-side identifiers."
        - "R^{ls_j} is the high-entropy service secret material."
        - "ctr_ac orders account versions for updates."
      transition: "This two-layer organization supports the same five lifecycle phases without exposing the service map to providers."
      skip: "No; these exact objects recur in every protocol phase."
      jury: "Why is the login-server identity hashed into both SUid and vInfo?"
      pointer: "backup-upspa-setup-full"

  - id: upspa-setup
    section: upspa
    title: "Setup creates the threshold root at every provider"
    route: core
    estimatedSeconds: 50
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#fig:upspa-setup"
    formulas:
      - 'c_{id}\\leftarrow Enc_{F_K(pwd)}(ssk\\parallel R_{sp}\\parallel K_0)'
    visual: "Seven-step editable setup lane ending in all-provider success."
    citation: "Thesis, UpSPA Setup figure."
    speakerNotes:
      main: "Setup creates one signing key, one hidden routing secret, one account key, and provider-specific TOPRF shares, then installs the master record at every provider."
      cues:
        - "Keep the exact generation and encryption order visible."
        - "The fully available baseline declares success only after all n_sp providers accept."
        - "There is no Store/Discard subphase in Setup."
      transition: "The only password-dependent primitive used to reopen this record is the threshold OPRF."
      skip: "Do not skip; this slide defines every root-state symbol."
      jury: "Why does Setup require all providers when later authentication needs only t_sp?"
      pointer: "backup-upspa-setup-full"

  - id: upspa-toprf-interaction
    section: upspa
    title: "Threshold OPRF opens the master record without revealing the password"
    route: core
    estimatedSeconds: 45
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#toprf"
      - "source-material/thesis/UpSPA variation/Full available version/security analysis.tex#toprf"
    formulas:
      - 'F_K(pwd)\\leftarrow TOPRF(pwd,\\{k_i\\}_{i\\in[t_{sp}]})'
    visual: "Four-step blind, evaluate, combine, derive interaction."
    citation: "Thesis, UpSPA preliminaries/construction and security analysis."
    speakerNotes:
      main: "The user combines threshold contributions to obtain F_K(pwd); providers learn neither the password nor the final output."
      cues:
        - "This is an explanatory abstraction, not a substitute for the formal TOPRF definition."
        - "Fewer than t_sp contributions are insufficient."
        - "Later phase slides refer back to this interaction instead of repeating it."
      transition: "With that primitive fixed, every operational phase begins with the same identification step."
      skip: "May compress the four arrows, but retain all three privacy/threshold properties."
      jury: "What does one provider see during a TOPRF session?"
      pointer: "backup-upspa-threat-model-full"

  - id: upspa-identification
    section: upspa
    title: "Identification recovers the compact root—or fails safely"
    route: core
    estimatedSeconds: 45
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#identification"
    formulas:
      - 'Dec_{F_K(pwd)}(c_{id})=(ssk,R_{sp},K_0)'
    visual: "Reusable four-step root-opening flow with a separate fail-closed panel."
    citation: "Thesis, UpSPA phase preambles and identification/root opening."
    speakerNotes:
      main: "Identification is the shared preamble: read the root, run TOPRF, and decrypt c_id before any account or login-server action."
      cues:
        - "Wrong password or too few valid responses stops the phase."
        - "Authenticated-decryption failure is terminal."
        - "No partial account write or login-server request occurs on failure."
      transition: "Registration uses the recovered root to create one hidden account family."
      skip: "No; this removes repetition from every following phase."
      jury: "What prevents a wrong password from reaching a login server as a verification attempt?"
      pointer: "backup-upspa-authentication-full"

  - id: upspa-lifecycle
    section: upspa
    title: "The lifecycle has two read paths and three state-changing paths"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-setup"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#sec:upspa-construction/lines-25-620"
    formulas: []
    visual: "Five-node lifecycle: Setup → Registration → Authentication, with Secret Update looping on one account and Password Update rotating the root; mark Setup, Registration, and both updates as all-provider writes."
    citation: "Thesis, UpSPA construction, Figures fig:upspa-setup through fig:upspa-password-update."
    speakerNotes:
      main: "Setup creates the root, registration adds an account, authentication reads it, secret update rotates one service secret, and password update rekeys the root."
      cues:
        - "Authentication needs threshold-many valid provider responses."
        - "In the baseline, every state-changing phase waits for all n_sp providers."
        - "The phase boundary includes the final Store acknowledgements in the thesis construction."
      transition: "I will now show the four phase mechanics that matter for correctness, starting with registration."
      skip: "If time is short, keep this overview and skip directly to the two update slides."
      jury: "Which phases change root state, and which change only one account record?"
      pointer: "backup-upspa-setup-full"

  - id: upspa-registration
    section: upspa
    title: "Registration binds a fresh service secret to one hidden account family"
    route: core
    estimatedSeconds: 50
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#fig:upspa-registration/lines-178-258"
    formulas:
      - 'SUid_{l,i,j}=H(R^{sp}\\parallel ls_j\\parallel i)'
      - 'c_j=\\operatorname{Enc}_{K_0}(R^{ls_j}\\parallel ctr_{ac})'
    visual: "Four-lane message flow: client recovers root via TOPRF, creates service state, stores provider-indexed encrypted records, then registers the derived high-entropy credential at LS_j."
    citation: "Thesis, UpSPA Registration, Figure fig:upspa-registration."
    speakerNotes:
      main: "After threshold recovery of the compact root, the client creates fresh service randomness, encrypts the account record under K_0, and stores provider-specific records before completing login-server registration."
      cues:
        - "Provider index i prevents cross-provider record linking."
        - "The storage provider sees a pseudonymous key and ciphertext, not ls_j."
        - "Completion includes all required Store acknowledgements in the authoritative thesis flow."
      transition: "Authentication reuses that structure but is read-only and therefore needs only a threshold of valid responses."
      skip: "May compress to the creation, storage, and login-server binding steps."
      jury: "What prevents a storage provider from learning which service is being registered?"
      pointer: "backup-upspa-registration-full"

  - id: upspa-authentication
    section: upspa
    title: "Authentication reconstructs the credential without sending the password"
    route: core
    estimatedSeconds: 50
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#fig:upspa-authentication/lines-260-362"
    formulas:
      - 'y=F_K(pwd)\\quad\\text{from }t_{\\mathrm{sp}}\\text{ valid TOPRF responses}'
    visual: "Read-only sequence: blind password input → threshold TOPRF responses → decrypt cid → fetch/decrypt account record → challenge-response with LS_j."
    citation: "Thesis, UpSPA Authentication, Figure fig:upspa-authentication."
    speakerNotes:
      main: "The client blinds the password for the TOPRF, reconstructs the password-dependent key from t_sp valid responses, opens the root and account records, and authenticates with the recovered high-entropy secret."
      cues:
        - "No provider learns the clear password or TOPRF output."
        - "The login server verifies the derived service credential, not the password."
        - "Authentication is read-only; no provider repair occurs in UpSPA."
      transition: "The novelty becomes clearest when either the service secret or the remembered password must change."
      skip: "No; this is the principal user-facing operation."
      jury: "Why can authentication tolerate unavailable providers while registration cannot?"
      pointer: "backup-upspa-authentication-full"

  - id: upspa-secret-update
    section: upspa
    title: "Secret update rotates one login-server credential"
    route: core
    estimatedSeconds: 50
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#fig:upspa-secret-update"
    formulas:
      - 'ctr_{ac,new}=ctr_{ac,max}+1'
      - 'vInfo_{j,new}=H(R^{ls_j}_{new}\\parallel ls_j)'
    visual: "Identification, current-account read, replacement, LS authorization, and provider finalization."
    citation: "Thesis, UpSPA Secret Update figure."
    speakerNotes:
      main: "Secret Update replaces exactly one service secret and account ciphertext while preserving the root, password, and every other account."
      cues:
        - "Select the maximum valid current account counter before incrementing it."
        - "The login server validates the old-to-new verifier transition."
        - "Providers map the LS result to Store/Discard after all pending acknowledgements."
      transition: "Password Update changes the opposite layer: root protection without touching account ciphertexts."
      skip: "May summarize the read preamble as Identification, but retain update scope and finalization."
      jury: "Which values remain unchanged during Secret Update?"
      pointer: "backup-upspa-secret-update-full"

  - id: upspa-password-update
    section: upspa
    title: "Password update rewraps the compact root—not every account"
    route: core
    estimatedSeconds: 50
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#fig:upspa-password-update"
    formulas:
      - 'c_{id,new}=Enc_{F_{K_{new}}(pwd_{new})}(ssk\\parallel R_{sp}\\parallel K_0)'
      - '\\sigma_i=Sign_{ssk}(uid\\parallel c_{id,new}\\parallel k_{i,new}\\parallel time\\parallel i)'
    visual: "Identification followed by fresh TOPRF material, exact signed provider replacements, and all-provider finalization."
    citation: "Thesis, UpSPA Password Update figure."
    speakerNotes:
      main: "Password Update generates fresh TOPRF material and re-encrypts only c_id; K_0, account ciphertexts, and login-server verifiers are unchanged."
      cues:
        - "Use the exact signed field order from the final construction figure."
        - "The provider index i is included in the signature."
        - "No login server participates."
      transition: "The two update phases therefore have deliberately disjoint scopes."
      skip: "Do not skip the exact replacement tuple."
      jury: "Why can every account ciphertext remain unchanged after the password changes?"
      pointer: "backup-upspa-password-update-full"

  - id: upspa-two-updates
    section: upspa
    title: "Secret update and password update rotate different layers"
    route: core
    estimatedSeconds: 40
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#fig:upspa-secret-update/lines-364-498"
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#fig:upspa-password-update/lines-500-606"
    formulas:
      - '\\mathrm{SecretUpdate}: R^{ls_j}\\leftarrow R^{ls_j}_{new}'
      - '\\mathrm{PasswordUpdate}: (K,\\{k_i\\},cid)\\leftarrow(K_{new},\\{k_{i,new}\\},cid_{new})'
    visual: "Side-by-side layer diagram: Secret Update replaces one account leaf; Password Update replaces the TOPRF key/shares and root ciphertext while preserving service records."
    citation: "Thesis, UpSPA Secret Update and Password Update."
    speakerNotes:
      main: "A secret update rotates exactly one service credential, whereas a password update creates a fresh TOPRF key and shares and re-encrypts the compact root under the new password."
      cues:
        - "The other service records do not change during secret update."
        - "Password update does not require re-registering every login server."
        - "Both are all-provider state changes in the UpSPA availability model."
      transition: "Those mechanics are meaningful only relative to the corruption and collusion model."
      skip: "No; native update support is the main distinction from TSPA."
      jury: "Does password update merely re-encrypt cid, or does it also rotate TOPRF material?"
      pointer: "backup-upspa-secret-update-full"

  - id: upspa-threat-model
    section: upspa
    title: "Security tolerates fewer than t_sp corrupted providers"
    route: core
    estimatedSeconds: 45
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Threat model.tex#subsec:upspa-threat-model/lines-91-132"
    formulas:
      - '|\\mathcal{C}_{SP}|<t_{\\mathrm{sp}}'
    visual: "Corruption matrix across client, login server, and storage providers; emphasize the prohibited login-server-plus-threshold-provider coalition and distinguish online guessing from offline testing."
    citation: "Thesis, UpSPA threat model."
    speakerNotes:
      main: "The security target is resistance to offline password testing when the adversary controls a login server and fewer than t_sp storage providers; online attempts remain rate-limitable."
      cues:
        - "Network control is modeled, so authenticity cannot rely on the channel alone."
        - "Threshold corruption is the decisive boundary for reconstructing password-dependent state."
        - "Denial of service is outside the confidentiality guarantee."
      transition: "Meeting this model while supporting mutable state creates four concrete design challenges."
      skip: "No; all theorem claims are conditional on this boundary."
      jury: "What changes if t_sp or more providers collude with the login server?"
      pointer: "backup-upspa-threat-model-full"

  - id: upspa-design-challenges
    section: upspa
    title: "Updates add consistency and binding obligations to password hardening"
    route: core
    estimatedSeconds: 45
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Threat model.tex#subsec:upspa-design-challenges/lines-134-177"
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#fig:upspa-password-update/lines-500-606"
    formulas:
      - '\\sigma_i=\\operatorname{Sign}_{ssk}(Uid\\parallel cid_{new}\\parallel k_{i,new}\\parallel time\\parallel i)'
    visual: "Four challenge cards: password privacy, hidden service mapping, authenticated mutable state, and replay/version control; annotate provider index i inside the signed password-update tuple."
    citation: "Thesis, UpSPA design challenges and Password Update figure."
    speakerNotes:
      main: "The construction must hide the password and account map while also ensuring that each provider accepts only authenticated, fresh state intended for that provider."
      cues:
        - "The formal password-update figure signs Uid, cid_new, k_i,new, time, and i in that order."
        - "The surrounding prose omits i, so the figure is the exact protocol authority."
        - "Fresh TOPRF material prevents a password change from inheriting the old root key."
      transition: "The proof isolates these obligations as bad events and then replaces the remaining secrets game by game."
      skip: "May abbreviate the four cards, but retain the signed tuple."
      jury: "Why must provider index i be signed?"
      pointer: "backup-upspa-challenges-full"

  - id: upspa-security
    section: upspa
    title: "The UpSPA proof reduces privacy to standard primitives"
    route: core
    estimatedSeconds: 50
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/security analysis.tex#thm:upspa-security/lines-55-87"
      - "source-material/thesis/UpSPA variation/Full available version/security analysis.tex#bad-events/lines-741-827"
      - "source-material/thesis/UpSPA variation/Full available version/security analysis.tex#final-bound/lines-1213-1251"
    formulas:
      - '\\epsilon_{bad}=q_{dec}\\operatorname{Adv}_{AE}^{int-ctxt}+q_{kb}\\operatorname{Adv}_{AE}^{kb}+q_{vk}\\operatorname{Adv}_{Sign}^{euf-cma}+\\operatorname{Adv}_{H}^{cr}'
      - '\\operatorname{Adv}_{real/ideal}\\le 2\\epsilon_{bad}+\\operatorname{Adv}_{TOPRF}^{prf}+q_{id}\\operatorname{Adv}_{AE}^{ind-cpa}+q_{sp}\\operatorname{Adv}_{AE}^{ind-cpa}'
    visual: "Hybrid ladder from real to ideal: exclude forgery/collision/decryption bad events, replace TOPRF output, then hide root and account plaintexts; end on the displayed advantage bound."
    citation: "Thesis, UpSPA Security Theorem thm:upspa-security and final hybrid bound."
    speakerNotes:
      main: "Conditioned on no integrity, key-binding, signature, or collision bad event, the proof replaces the TOPRF and encrypted plaintexts until the adversary's view is ideal."
      cues:
        - "Assumptions are TOPRF PRF and receiver-input-obliviousness, AE confidentiality/integrity/key-binding, EUF-CMA signatures, and collision-resistant hashing."
        - "The displayed final bound contains the PRF and two AE confidentiality terms."
        - "The source theorem discusses receiver-input obliviousness, but the final displayed bound has no explicit RIO term; I do not add one."
      transition: "UpSPA gives the desired cryptographic lifecycle, but its all-provider writes create the availability problem addressed by RoUpSPA."
      skip: "No; state the proof shape and bound, not every game hop."
      jury: "Why does the theorem mention RIO when the final displayed bound omits an explicit RIO term?"
      pointer: "backup-upspa-advantage-bound"

  - id: roupspa-motivation
    section: roupspa
    title: "All-provider writes turn one outage into a blocked update"
    route: core
    estimatedSeconds: 60
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Threat model.tex#subsec:roupspa-system-model/lines-15-92"
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#sec:upspa-construction/lines-25-620"
    formulas: []
    visual: "Before/after availability strip: UpSPA write waits for every SP_i; RoUpSPA write completes at a quorum while unavailable replicas become explicitly stale."
    citation: "Thesis, RoUpSPA system model; UpSPA construction."
    speakerNotes:
      main: "UpSPA's confidentiality threshold survives provider outages, but its state-changing phases do not; RoUpSPA makes replica freshness explicit and lets durable writes complete at a quorum."
      cues:
        - "The objective is availability under temporary omission, not weaker authentication."
        - "A provider that misses a completed write is stale for that record family."
        - "Synchronization is a separate storage-maintenance operation."
      transition: "The cryptographic core stays recognizable; counters, shared identifiers, and quorum rules are the decisive changes."
      skip: "No; this is the reason the resilient construction exists."
      jury: "Why is threshold authentication alone insufficient for update availability?"
      pointer: "backup-roupspa-setup-full"

  - id: roupspa-what-changes
    section: roupspa
    title: "RoUpSPA adds versioned replicated records, not a new password primitive"
    route: core
    estimatedSeconds: 60
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Threat model.tex#subsec:roupspa-system-design/lines-94-129"
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#sec:roupspa-construction-thesis/lines-1-45"
    formulas:
      - 'SUid_{l,j}=H(R^{sp}\\parallel ls_j)'
      - 'root:\\ ctr_{id},\\qquad account:\\ ctr_{ac}'
    visual: "Delta diagram over UpSPA: remove provider index from the shared account-family handle, add signed root/account counters, active-versus-stale replica status, and q_sp write/sync quorums."
    citation: "Thesis, RoUpSPA system design and construction."
    speakerNotes:
      main: "RoUpSPA keeps the TOPRF and two-layer encryption design, but gives replicas a common family handle and signed counters so a quorum can identify one freshest valid version."
      cues:
        - "ctr_id versions the identification root; ctr_ac versions an account."
        - "The shared SUid enables repair across providers without revealing ls_j."
        - "Signatures authorize every record replacement."
      transition: "These changes work only under a stronger numerical relation between read and write quorums."
      skip: "No; this slide is the compact UpSPA-to-RoUpSPA delta."
      jury: "Does a shared SUid let providers identify the underlying login server?"
      pointer: "backup-roupspa-setup-full"

  - id: roupspa-threshold-quorum
    section: roupspa
    title: "Authentication threshold and storage quorum serve different purposes"
    route: core
    estimatedSeconds: 75
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#eq:roupspa-quorum-condition/lines-8-22"
      - "source-material/thesis/UpSPA variation/Resilient Version/Threat model.tex#subsec:roupspa-system-model/lines-15-92"
    formulas:
      - '1\\le t_{\\mathrm{sp}}\\le q_{\\mathrm{sp}}\\le n_{\\mathrm{sp}}'
      - 't_{\\mathrm{sp}}>\\frac{n_{\\mathrm{sp}}}{2}'
      - '2q_{\\mathrm{sp}}-n_{\\mathrm{sp}}>t_{\\mathrm{sp}}-1'
    visual: "Two concentric gauges: t_sp is the active cryptographic threshold for reads; q_sp is the durable write/synchronization quorum; place the three inequalities between them."
    citation: "Thesis, RoUpSPA quorum condition eq:roupspa-quorum-condition."
    speakerNotes:
      main: "t_sp controls how many valid active shares authentication needs, while q_sp controls how many durable replicas complete a write or synchronization."
      cues:
        - "The majority condition on t_sp preserves the corruption boundary."
        - "The last inequality guarantees more than t_sp minus one replicas in any write-read quorum intersection."
        - "Choosing q_sp equal to t_sp is not automatically sufficient."
      transition: "The intersection inequality is the bridge from these parameters to freshness."
      skip: "No; retain all three inequalities exactly."
      jury: "For a given n_sp and t_sp, what is the smallest admissible q_sp?"
      pointer: "backup-roupspa-active-threshold"

  - id: roupspa-quorum-intersection
    section: roupspa
    title: "Every completed write meets a later quorum in an honest holder"
    route: core
    estimatedSeconds: 75
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#thm:quorum-consistency/lines-436-468"
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#cor:no-rollback/lines-470-480"
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#cor:no-divergent-commits/lines-482-495"
    formulas:
      - '|W\\cap R|\\ge 2q_{\\mathrm{sp}}-n_{\\mathrm{sp}}>t_{\\mathrm{sp}}-1'
    visual: "Overlapping W and R quorum circles with an intersection containing at least t_sp nodes; color at most t_sp-1 corrupt nodes and leave one necessarily honest latest-record holder."
    citation: "Thesis, Theorem thm:quorum-consistency and its no-rollback/no-divergence corollaries."
    speakerNotes:
      main: "Because the intersection has more nodes than the adversary may corrupt, at least one honest response carries the latest completed signed record into every later synchronization quorum."
      cues:
        - "Counters order valid records within one serialized record family."
        - "Signatures prevent the adversary from fabricating a higher valid version."
        - "The theorem concerns completed operations under the construction's serialization assumptions."
      transition: "That theorem supports completed-state safety, but the phase boundary still needs to be stated precisely."
      skip: "No; this is the central RoUpSPA consistency argument."
      jury: "Where exactly does the honest-holder conclusion use the corruption threshold?"
      pointer: "backup-roupspa-quorum-proof"

  - id: roupspa-phase-semantics
    section: roupspa
    title: "Quorum completion is precise; interrupted writes remain an explicit boundary"
    route: core
    estimatedSeconds: 75
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#record-binding-and-completion-semantics/lines-684-732"
      - "source-material/roupspa-paper/sections/4_Protocol.tex#completion-semantics"
      - "presentation/SOURCE_CONFLICTS.md#RoUpSPA-partial-write-semantics"
    formulas: []
    visual: "Three-step commit lane: LS Prepare → q_sp durable provider writes → terminal LS Store; below it, an interrupted branch marks partial provider state as unresolved rather than silently rolled back."
    citation: "Thesis, RoUpSPA record binding and completion semantics; source conflict register."
    speakerNotes:
      main: "The successful path is Prepare, then q_sp durable signed writes, then terminal Store; the safety theorem is for completed phases, while the sources disagree on what fully resolves a failed partial direct write."
      cues:
        - "The thesis phase bodies say Discard/Fail when a quorum is not obtained."
        - "The paper/preamble instead requires retrying the exact write after any provider accepts."
        - "There is no demonstrated automatic rollback mechanism, so I do not claim crash atomicity."
      transition: "With that boundary explicit, we can separate the normal read path from the repair path."
      skip: "No; this prevents overclaiming the resilience result."
      jury: "Can a client safely abandon an update after only one provider durably accepts it?"
      pointer: "backup-roupspa-authorized-writes"

  - id: roupspa-registration
    section: roupspa
    title: "RoUpSPA registration authorizes the account before quorum storage"
    route: core
    estimatedSeconds: 50
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#fig:roupspa-registration"
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#record-binding-and-completion-semantics"
    formulas:
      - '\\sigma_{ac}=Sign_{ssk}(uid\\parallel SUid_{l,j}\\parallel c_{sp}\\parallel ctr_{ac})'
    visual: "Active identification, candidate construction, LS Prepare, q_sp durable writes, and terminal Store/Discard."
    citation: "Thesis, RoUpSPA Registration and completion semantics."
    speakerNotes:
      main: "The final RoUpSPA order is login-server Prepare first, then the signed provider record is durably written at q_sp providers, then the terminal decision is sent."
      cues:
        - "Do not describe this as UpSPA with a quorum badge."
        - "Every counted provider acknowledgement follows a durable matching write."
        - "A provider that misses the completed account write becomes STALE for that family."
      transition: "Secret Update keeps the same Prepare-before-write discipline but advances an existing account counter."
      skip: "No; this is the first concrete resilient write phase."
      jury: "Why is LS Prepare ordered before provider mutation?"
      pointer: "backup-roupspa-registration-full"

  - id: roupspa-secret-update
    section: roupspa
    title: "RoUpSPA secret update uses LS Prepare before quorum mutation"
    route: core
    estimatedSeconds: 50
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#fig:roupspa-secret-update"
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#record-binding-and-completion-semantics"
    formulas:
      - '\\sigma_{ac,new}=Sign_{ssk}(uid\\parallel SUid_{l,j}\\parallel c_{sp,new}\\parallel ctr_{ac,new})'
    visual: "Current-state read, signed counter increment, LS Prepare, q_sp durable write, terminal Store/Discard."
    citation: "Thesis, RoUpSPA Secret Update and completion semantics."
    speakerNotes:
      main: "RoUpSPA Secret Update first validates the old/new verifier transition, then obtains q_sp durable account replacements, then sends the matching terminal decision."
      cues:
        - "The replacement counter is exactly the current maximum plus one."
        - "The exact signed tuple binds uid, shared account family, ciphertext, and counter."
        - "There is no invented final login-server acknowledgement."
      transition: "These phase mechanics require an explicit threat and liveness boundary."
      skip: "May compress the shared identification preamble, but not the Prepare/write/terminal order."
      jury: "What makes a lagging replica stale after a completed update?"
      pointer: "backup-roupspa-secret-update-full"

  - id: roupspa-threat-challenges
    section: roupspa
    title: "Resilience adds stale-state and authorization obligations"
    route: core
    estimatedSeconds: 50
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Threat model.tex#subsec:roupspa-threat-model"
      - "source-material/thesis/UpSPA variation/Resilient Version/Threat model.tex#subsec:roupspa-design-challenges"
    formulas:
      - '|\\mathcal C_{SP}|\\le t_{sp}-1'
    visual: "Two columns separating inherited threat assumptions from new resilience challenges."
    citation: "Thesis, RoUpSPA threat model and design challenges."
    speakerNotes:
      main: "The resilience layer must authorize shared-namespace writes, distinguish valid from current state, and repair stale replicas without plaintext."
      cues:
        - "The adversary remains static and malicious."
        - "Signatures authorize; counters and ACTIVE/STALE rules establish freshness."
        - "Repair uses signed ciphertext evidence, not passwords or TOPRF outputs."
      transition: "The resulting guarantee is completed-phase safety plus conditional liveness."
      skip: "No; it prevents interpreting RoUpSPA as general consensus."
      jury: "Why is a shared account handle not itself write authorization?"
      pointer: "backup-roupspa-challenges-full"

  - id: roupspa-read-and-authentication
    section: roupspa
    title: "Authentication reads only active replicas and performs no repair"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-threshold-quorum"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#fig:roupspa-authentication/lines-323-406"
      - "source-material/thesis/UpSPA variation/Resilient Version/Threat model.tex#completion-and-synchronization/lines-65-92"
    formulas:
      - '\\#\\{\\text{valid active responses}\\}\\ge t_{\\mathrm{sp}}'
    visual: "Authentication sequence with stale replicas visibly filtered out; t_sp active root responses and t_sp active account responses feed the existing TOPRF/decryption path, with no write-back arrow."
    citation: "Thesis, RoUpSPA Authentication, Figure fig:roupspa-authentication."
    speakerNotes:
      main: "A normal login selects valid active replicas for each required family, reconstructs at threshold, and never attempts repair inside the authentication phase."
      cues:
        - "A stale but correctly signed record is not an active response."
        - "Root and account families may have different active provider sets."
        - "Keeping repair separate preserves a simple read-only login path."
      transition: "Repair is instead handled by synchronization over signed ciphertext records."
      skip: "May compress after the UpSPA authentication slide, but retain the no-repair point."
      jury: "Can an old but validly signed record contribute to t_sp?"
      pointer: "backup-roupspa-authentication-full"

  - id: roupspa-synchronization
    section: roupspa
    title: "Synchronization copies the unique freshest signed ciphertext"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-phase-semantics"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#storage-provider-synchronization-and-repair/lines-163-191"
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#synchronization-and-counter-consistency/lines-367-495"
    formulas:
      - '\\#R=q_{\\mathrm{sp}},\\qquad record^*=\\operatorname*{arg\\,max}_{record\\in R} ctr(record)'
    visual: "Repair flow: collect q_sp signed candidates → reject invalid or tied-distinct maxima → choose the unique largest counter → copy ciphertext/signature to stale providers; retain each provider's own TOPRF share."
    citation: "Thesis, RoUpSPA storage-provider synchronization and consistency proof."
    speakerNotes:
      main: "Synchronization is storage-layer maintenance: it obtains a quorum of valid records, selects the unique largest counter, and propagates that signed ciphertext without learning the password or plaintext."
      cues:
        - "It performs no TOPRF evaluation and no decryption."
        - "A provider keeps its own TOPRF share; shares are never copied."
        - "Distinct valid records at the same largest counter are rejected."
      transition: "The threat model now includes stale-state manipulation as well as the original password attacks."
      skip: "No; synchronization is the mechanism that turns quorum completion into later availability."
      jury: "Why is copying another provider's TOPRF share forbidden even during repair?"
      pointer: "backup-roupspa-synchronization-full"

  - id: roupspa-threat-and-boundary
    section: roupspa
    title: "RoUpSPA adds stale-state adversaries without promising universal liveness"
    route: core
    estimatedSeconds: 60
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Threat model.tex#subsec:roupspa-threat-model/lines-131-191"
      - "source-material/thesis/UpSPA variation/Resilient Version/Threat model.tex#subsec:roupspa-design-challenges/lines-193-222"
    formulas:
      - '|\\mathcal{C}_{SP}|<t_{\\mathrm{sp}}'
    visual: "Boundary matrix: confidentiality/offline resistance, signed freshness, and completed-state consistency are in scope; denial of service, insufficient active replicas, and unresolved interrupted writes are outside guaranteed liveness."
    citation: "Thesis, RoUpSPA threat model and design challenges."
    speakerNotes:
      main: "The adversary may delay, replay, omit, or corrupt replica traffic, but cannot forge higher signed counters; progress still requires enough reachable active providers and correctly completed phase boundaries."
      cues:
        - "Fewer than t_sp providers may be corrupted."
        - "A write or synchronization may fail when q_sp is unavailable."
        - "The construction gives safety for completed phases, not asynchronous consensus or guaranteed termination."
      transition: "The proof combines the original password-privacy hybrids with deterministic quorum consistency."
      skip: "No; this is the safe interpretation of the theorem."
      jury: "Is RoUpSPA a Byzantine consensus protocol?"
      pointer: "backup-roupspa-challenges-full"

  - id: roupspa-security
    section: roupspa
    title: "The resilient proof adds TOPRF RIO and quorum consistency terms"
    route: core
    estimatedSeconds: 60
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#thm:roupspa-security/lines-101-128"
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#bad-events/lines-169-240"
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#final-bound/lines-535-582"
    formulas:
      - '\\epsilon_{bad}^{Ro}=q_{dec}\\operatorname{Adv}_{AE}^{int-ctxt}+q_{kb}\\operatorname{Adv}_{AE}^{kb}+q_{vk}\\operatorname{Adv}_{Sign}^{euf-cma}+\\operatorname{Adv}_{H}^{cr}'
      - '\\operatorname{Adv}_{real/ideal}\\le 2\\epsilon_{bad}^{Ro}+q_K\\operatorname{Adv}_{TOPRF}^{prf}+q_T\\operatorname{Adv}_{TOPRF}^{rio}+q_{id}\\operatorname{Adv}_{AE}^{ind-cpa}+q_{ac}\\operatorname{Adv}_{AE}^{ind-cpa}'
    visual: "Five-game proof ladder G0-G5: rule out bad events, randomize TOPRF evaluations, simulate RIO transcripts, hide identification plaintexts, hide account plaintexts, then attach the quorum theorem."
    citation: "Thesis, RoUpSPA Security Theorem thm:roupspa-security and final bound."
    speakerNotes:
      main: "The RoUpSPA proof makes both TOPRF PRF and receiver-input-obliviousness costs explicit, then hides identification and account plaintexts while quorum lemmas preserve completed-state freshness."
      cues:
        - "G1 replaces full TOPRF evaluations; G2 simulates receiver-input-oblivious transcripts."
        - "G3 and G4 hide identification and account plaintexts; G5 is ideal."
        - "The final account term is q_ac; a reducer suffix in the source is a typographical inconsistency, not a different primitive."
      transition: "Quorums are the thesis's main resilience choice, but the design space includes public synchronization layers."
      skip: "No; state the complete displayed bound once."
      jury: "Why does RoUpSPA have an explicit RIO term when the UpSPA displayed bound does not?"
      pointer: "backup-roupspa-advantage-bound"

  - id: alternatives-pbb
    section: alternatives
    title: "A public bulletin board trades private quorum repair for public history"
    route: core
    estimatedSeconds: 75
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/alternative.tex#sec:alternative_synchronization/lines-1-137"
    formulas: []
    visual: "Two-column PBB design: signed/untrusted board accepts any correctly signed entry; DKG-authorized board filters writers through distributed authorization. Show encrypted recovery bundles off board."
    citation: "Thesis, Alternative State-Synchronization Mechanisms, PBB-based synchronization."
    speakerNotes:
      main: "A bulletin board can provide append-only public discovery and recovery, with a signed board minimizing trust and a DKG-authorized board adding admission control at higher complexity."
      cues:
        - "The board stores opaque authenticated metadata, not passwords or decrypted account secrets."
        - "Encrypted recovery bundles remain off board and still require an availability mechanism."
        - "Untrusted admission permits flooding; authorization-enforcing admission introduces distributed setup and key-management cost."
      transition: "A blockchain can instantiate a public log autonomously, but it adds platform-level costs and leakage."
      skip: "May present only the signed-versus-DKG admission tradeoff."
      jury: "Does a public bulletin board replace encrypted off-chain recovery storage?"
      pointer: "backup-backend-charts"

  - id: alternatives-blockchain-and-choice
    section: alternatives
    title: "No synchronization backend dominates every deployment objective"
    route: core
    estimatedSeconds: 75
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/alternative.tex#blockchain-based-synchronization/lines-138-190"
      - "source-material/thesis/Implementation/ch5_impl.tex#resilient-synchronization-backend-evaluation/lines-530-635"
    formulas: []
    visual: "Decision matrix across quorum, signed PBB, DKG PBB, and blockchain: private/local, autonomous recovery, write filtering, public auditability, metadata exposure, finality, and fees."
    citation: "Thesis, alternative synchronization mechanisms and resilient backend evaluation."
    speakerNotes:
      main: "Blockchains can publish commitments, counters, phases, and bundle pointers with public ordering, but finality, fees, metadata exposure, smart-contract risk, and censorship become part of the system model."
      cues:
        - "Encrypted bundles remain off chain even when commitments are on chain."
        - "Quorums keep the main construction private and direct."
        - "The preferred backend depends on recovery, auditability, filtering, latency, and infrastructure priorities."
      transition: "The implementation evaluates these choices through one shared architecture while keeping native costs separate."
      skip: "No; this is the design-choice conclusion, not a blockchain advocacy claim."
      jury: "Under what objective would you choose a public log over quorum synchronization?"
      pointer: "backup-evm-gas"

  - id: implementation-architecture-method
    section: implementation-results
    title: "One architecture, traceable measurements, and explicit timing boundaries"
    route: core
    estimatedSeconds: 60
    sourceRefs:
      - "source-material/thesis/Implementation/ch5_impl.tex#chapter:spa_engineering/lines-80-115"
      - "source-material/thesis/Implementation/ch5_impl.tex#testing-benchmarking-validation/lines-364-403"
    formulas:
      - 'T_{stage}^{P}(I)=T_{client,pre}^{P}+\\max_{i\\in I}\\{L_i+T_{SP_i}^{P}\\}+T_{client,post}^{P}'
    visual: "Architecture pipeline: client engine, LS adapter, provider service, threshold module, state codec, pluggable sync adapter, recorder; below, a parallel-within-stage timing bracket."
    citation: "Thesis, Implementation Chapter, shared architecture and measurement validation."
    speakerNotes:
      main: "The prototype maps each formal phase to typed modules, executes provider requests in parallel within a stage, and records raw intervals and backend-native evidence before aggregation."
      cues:
        - "Rust latency series use 50 warm-ups and 200 measured samples; plotted points are p50."
        - "LAN and WAN values are composed models, not geographically deployed measurements."
        - "Modeled stages are not formal protocol rounds, and independent p50 targets must not be algebraically added."
      transition: "With that measurement contract fixed, the first comparison isolates UpSPA against its TSPA baseline."
      skip: "No; these caveats are necessary to interpret every result slide."
      jury: "Why is max provider latency used inside one modeled stage?"
      pointer: "backup-experiment-configuration"

  - id: results-upspa-tspa
    section: implementation-results
    title: "Network stages dominate the UpSPA-TSPA deployment grid"
    route: core
    estimatedSeconds: 54
    sourceRefs:
      - "source-material/thesis/Implementation/ch5_impl.tex#tab:thesis-upspa-tspa-summary/lines-405-461"
      - "source-material/thesis/Implementation/upspa_tspa_fixed_nsp30.tex#fig:client-reg-auth-nsp30"
      - "source-material/thesis/Implementation/upspa_tspa_proportional.tex#fig:client-reg-auth-nsptsp60"
    formulas:
      - '\\mathrm{WAN}_{1\\ stage}\\approx63\\text{--}67\\,ms,\\quad \\mathrm{WAN}_{2}\\approx125\\text{--}134\\,ms,\\quad \\mathrm{WAN}_{3}\\approx188\\text{--}195\\,ms'
    visual: "Slopegraph pairing local p50 ranges with modeled WAN ranges for Registration, Authentication, Secret Update, and Password Update; label stage count rather than implying crypto cost."
    citation: "Thesis, Table tab:thesis-upspa-tspa-summary and UpSPA-TSPA scaling figures."
    speakerNotes:
      main: "Across the deployment grid, local work stays below one millisecond, while WAN ordering follows one, two, or three sequential modeled stages."
      cues:
        - "UpSPA registration and authentication use two modeled stages versus one for TSPA."
        - "Secret update is about 188-195 ms in WAN because it has three stages."
        - "Password update is locally heavier yet about 126-134 ms in WAN because it has two stages."
      transition: "Against update-enabled threshold SSO systems, computation per threshold response becomes the differentiator as n_sp grows."
      skip: "No; deliver the stage-count takeaway and one numerical range."
      jury: "Why can password update be faster than secret update over WAN?"
      pointer: "backup-upspa-tspa-charts"

  - id: results-threshold-sso-comparison
    section: implementation-results
    title: "At scale, threshold-response work separates the SSO constructions"
    route: core
    estimatedSeconds: 54
    sourceRefs:
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#fig:full-grid-registration/lines-41-137"
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#fig:auth-tsp60-row/lines-530-675"
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#fig:pwdupd-tsp60-row/lines-678-825"
    formulas:
      - 't_{\\mathrm{sp}}=0.6n_{\\mathrm{sp}}'
    visual: "Log-aware three-line comparison for UpSPA, PASTA-U, and AugSSO at proportional threshold; emphasize authentication endpoints at n_sp=100 and retain functional-scope warning."
    citation: "Thesis, threshold SSO comparison figures fig:full-grid-registration, fig:auth-tsp60-row, and fig:pwdupd-tsp60-row."
    speakerNotes:
      main: "On the same Rust platform, proportional-threshold authentication at n_sp=100 is 1.075 ms for UpSPA, 20.523 ms for PASTA-U, and 221.759 ms for AugSSO on the client."
      cues:
        - "The slope reflects different per-response cryptographic work."
        - "WAN ranking can differ because stage schedules and RTT dominate local computation."
        - "These systems do not expose identical relying-party, recovery, or liveness semantics."
      transition: "The next comparison isolates the cost of adding quorum resilience to UpSPA itself."
      skip: "May omit registration and password-update details; keep the authentication endpoints and scope caveat."
      jury: "Is this a feature-equivalent end-to-end comparison?"
      pointer: "aux-sso-low-registration"

  - id: results-upspa-roupspa
    section: implementation-results
    title: "RoUpSPA's local quorum increment stays sub-millisecond in the paired grid"
    route: core
    estimatedSeconds: 54
    sourceRefs:
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#subsec:upspa-abd-comparison/lines-830-1110"
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#fig:UpSPA-abd-password"
    formulas:
      - '\\Delta^{P}_{Q,p50}=T^{P}_{RoUpSPA,full-no-net,p50}-T^{P}_{UpSPA,full-no-net,p50}'
    visual: "Paired dumbbells for five (n_sp,t_sp,q_sp) settings across registration, secret update, and password update; separate local increments from composed-LAN gaps."
    citation: "Thesis, UpSPA and RoUpSPA comparison, Figures fig:UpSPA-abd-registration through fig:UpSPA-abd-password."
    speakerNotes:
      main: "Across the five paired settings, RoUpSPA password update remains below 0.73 ms locally and its isolated quorum overhead is 0.058-0.147 ms."
      cues:
        - "Registration rises from 0.197 to 0.445 ms across RoUpSPA settings."
        - "Composed-LAN gaps are roughly two milliseconds because of additional sequential stages."
        - "WAN is not plotted: fixed RTT and schedule would dominate, so it is not used to rank local cryptography."
      transition: "The resilient backend suite then shows that the synchronization mechanism can dominate the update cost."
      skip: "No; state one local range and the WAN non-ranking caveat."
      jury: "What portion of the gap is cryptographic work versus the modeled schedule?"
      pointer: "backup-upspa-roupspa-charts"

  - id: results-backends
    section: implementation-results
    title: "Backend cost depends strongly on phase and scale"
    route: core
    estimatedSeconds: 54
    sourceRefs:
      - "source-material/thesis/Implementation/ch5_impl.tex#tab:resilient-q080-endpoints/lines-530-606"
      - "source-material/thesis/Implementation/ch5_impl.tex#fig:res-fig01-q080-registration/lines-587-610"
      - "source-material/thesis/Implementation/ch5_impl.tex#tab:evm-direct-receipts/lines-639-669"
    formulas:
      - 'q_{\\mathrm{sp}}=\\lceil0.8n_{\\mathrm{sp}}\\rceil'
    visual: "Small-multiple endpoint chart from n_sp=10 to 100 for quorum/ABD, signed PBB, DKG PBB, and chain modes; add a separate evidence badge for local EVM receipts."
    citation: "Thesis, resilient backend endpoint table and receipt-level EVM gas tables."
    speakerNotes:
      main: "At n_sp=100, quorum registration is 3.723 ms and close to signed PBB at 3.869 ms, but quorum secret update reaches 11.241 ms versus 3.852 ms for signed PBB."
      cues:
        - "The q_sp parameter is a quorum only for quorum/ABD; elsewhere it matches an availability scenario."
        - "Chain-mode local timings do not include public-network finality or fees."
        - "The EVM receipt dataset is a successful local Anvil regression, not production-chain evidence."
      transition: "Across all experiments, three interpretation rules are more stable than any single winning curve."
      skip: "May show registration and secret update only; preserve the backend-semantics caveat."
      jury: "Why should q_sp not be interpreted as a ledger quorum in the chain rows?"
      pointer: "backup-backend-charts"

  - id: results-key-takeaways
    section: implementation-results
    title: "The evidence supports three bounded engineering conclusions"
    route: core
    estimatedSeconds: 54
    sourceRefs:
      - "source-material/thesis/Implementation/ch5_impl.tex#testing-benchmarking-validation/lines-364-403"
      - "source-material/thesis/Implementation/ch5_impl.tex#evm-receipt-evidence/lines-639-707"
      - "source-material/thesis/Implementation/ch5_impl.tex#tron-status/lines-783-796"
    formulas: []
    visual: "Three large numbered claims: communication stages dominate WAN; resilience has modest local cost but nonuniform backend cost; evidence classes must remain separate. Add a small 'not claimed' rail."
    citation: "Thesis, implementation methodology, backend evaluation, EVM receipts, and TRON status."
    speakerNotes:
      main: "First, sequential communication stages dominate modeled WAN totals; second, RoUpSPA's local increment is modest but backend scaling is phase-dependent; third, measured, modeled, and implementation-only evidence must not be mixed."
      cues:
        - "The GPU is metadata and was unused for protocol operations."
        - "Foundry provides an independent contract regression, while Anvil receipts provide the reported EVM dataset."
        - "TRON has an implementation and schema but no complete native receipt matrix, so no TRON number or chart is claimed."
      transition: "I will close by separating the thesis contributions from its remaining research boundaries."
      skip: "No; this is the evidence-calibrated result summary."
      jury: "Which result is directly measured, and which is produced by a network composition model?"
      pointer: "backup-experiment-configuration"

  - id: conclusion-contributions
    section: conclusion
    title: "The thesis contributes a lifecycle, a resilience layer, and evidence"
    route: core
    estimatedSeconds: 35
    sourceRefs:
      - "source-material/thesis/Prelude/Introduction/Outline.tex#Contributions/lines-22-162"
      - "source-material/thesis/Conclusion_Limitations_Future_Work.tex#chapter:conclusion/lines-1-68"
    formulas: []
    visual: "Three-column synthesis: UpSPA - two-layer updateable credentials; RoUpSPA - separate threshold/quorum with synchronization; Engineering - shared implementation and traceable comparative evidence."
    citation: "Thesis, Contributions and Conclusion."
    speakerNotes:
      main: "The central result is a complete single-password credential lifecycle, extended with quorum-based replica recovery and evaluated through a common, evidence-traceable implementation."
      cues:
        - "UpSPA separates password rotation from service-secret rotation."
        - "RoUpSPA separates cryptographic threshold from availability quorum."
        - "The evaluation identifies communication structure as the main WAN lever."
      transition: "These contributions are deliberately bounded by the model and prototype scope."
      skip: "No; this is the answer to 'what did the thesis add?'"
      jury: "Which contribution would remain if the resilient extension were removed?"
      pointer: "backup-notation"

  - id: conclusion-limitations-future
    section: conclusion
    title: "The next work is adaptive, deployable, and failure-aware"
    route: core
    estimatedSeconds: 35
    sourceRefs:
      - "source-material/thesis/Conclusion_Limitations_Future_Work.tex#chapter:conclusion/lines-70-157"
    formulas: []
    visual: "Two-row boundary roadmap: current limits - static corruption, trusted endpoint, DoS, serialized state machine, research prototype; next - proactive refresh, dynamic providers, crash testing, deployment hardening, post-quantum and hybrid recovery."
    citation: "Thesis, Conclusion, Limitations, and Future Work."
    speakerNotes:
      main: "The proofs assume static corruption and a trusted endpoint, while the prototype omits production crash recovery and dynamic provider management; these are the most important next steps."
      cues:
        - "Cryptography cannot force unavailable parties to respond."
        - "Adaptive corruption and composable concurrency require stronger formal treatment."
        - "Deployment needs audited orchestration, durable retry-safe storage, and independent failure testing."
      transition: "The work has produced three manuscripts, each with a precisely stated status."
      skip: "No; state one model limit and one engineering limit."
      jury: "What is the largest gap between the formal construction and a production deployment?"
      pointer: "backup-references"

  - id: conclusion-publications
    section: conclusion
    title: "Three manuscripts carry the work forward"
    route: core
    estimatedSeconds: 35
    sourceRefs:
      - "source-material/thesis/Prelude/Introduction/Publications.tex#Publications/lines-1-25"
      - "presentation.config.yaml#links"
    formulas: []
    visual: "Three publication cards with status badges: public ePrint 2026/784; UpSPA workshop manuscript - submitted to WPES 2026; Robust Updatable SPA - submitted to ACM TOPS."
    citation: "Thesis, Publications; Cryptology ePrint Report 2026/784."
    speakerNotes:
      main: "The UpSPA manuscript is publicly available as ePrint 2026/784; its workshop version is submitted to WPES 2026, and the RoUpSPA manuscript is submitted to ACM TOPS."
      cues:
        - "Use 'submitted' exactly; no acceptance or publication claim is made for WPES or TOPS."
        - "The ePrint link and implementation repository remain available for inspection."
      transition: "That concludes the defense; I welcome your questions."
      skip: "Yes, if the committee prefers to move directly to questions."
      jury: "Which artifacts are publicly accessible today?"
      pointer: "backup-references"

  - id: academic-genealogy
    section: conclusion
    title: "Candidate → advisor → advisor's advisor"
    route: core
    estimatedSeconds: 20
    sourceRefs:
      - "presentation.config.yaml#genealogy"
    formulas: []
    visual: "Three-node academic genealogy chain rendered from configuration, with a dashed TODO state for missing data."
    citation: "presentation.config.yaml genealogy fields."
    speakerNotes:
      main: "The academic genealogy is rendered from configuration; the advisor's advisor remains an explicit TODO because the supplied materials do not identify that person."
      cues:
        - "Do not guess the missing identity."
        - "Update presentation.config.yaml when authoritative information and photos are supplied."
      transition: "Thank you; I welcome your questions."
      skip: "May skip verbally while still displaying the honest placeholder."
      jury: "Why is the third node incomplete?"
      pointer: "presentation.config.yaml"

  - id: thank-you
    section: conclusion
    title: "Thank you"
    route: core
    estimatedSeconds: 15
    sourceRefs:
      - "presentation.config.yaml#title-and-presenter"
    formulas: []
    visual: "Minimal closing slide: thesis title shortened to UpSPA and RoUpSPA, presenter, advisor, Koç University, and compact ePrint/GitHub links."
    citation: "Defense configuration, 12 August 2026."
    speakerNotes:
      main: "Thank you for your attention. I welcome your questions."
      cues:
        - "Pause and make eye contact with the committee."
        - "Use the backup index only in response to a specific question."
      transition: "Questions."
      skip: "No; this is the closing frame."
      jury: "Open floor."
      pointer: "backup-notation"

  - id: backup-upspa-setup-full
    section: backup-upspa
    title: "Aux - UpSPA setup, full protocol"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-setup"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#fig:upspa-setup/lines-25-134"
    formulas:
      - 'cid=\\operatorname{Enc}_{F_K(pwd)}(ssk\\parallel R^{sp}\\parallel K_0)'
    visual: "Full four-lane reconstruction of Figure fig:upspa-setup, redrawn as native vectors with message labels preserved."
    citation: "Thesis, Figure fig:upspa-setup."
    speakerNotes:
      main: "Use this only to trace root creation, TOPRF sharing, and provider storage step by step."
      cues:
        - "Identify which values remain client-side and which are stored per provider."
        - "End on the all-provider Store acknowledgements."
      transition: "Return to #upspa-two-layer-state."
      skip: "Aux only."
      jury: "Where is the TOPRF key generated and how are its shares distributed?"
      pointer: "upspa-two-layer-state"

  - id: backup-upspa-registration-full
    section: backup-upspa
    title: "Aux - UpSPA registration, full protocol"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-registration"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#fig:upspa-registration/lines-178-258"
    formulas:
      - 'SUid_{l,i,j}=H(R^{sp}\\parallel ls_j\\parallel i)'
    visual: "Complete registration message sequence with TOPRF recovery, account-record construction, provider Store acknowledgements, and login-server verifier installation."
    citation: "Thesis, Figure fig:upspa-registration."
    speakerNotes:
      main: "Trace the exact ordering when asked how storage completion and login-server registration are bound."
      cues:
        - "Point out provider-specific SUid values."
        - "Do not omit the final Store acknowledgements."
      transition: "Return to #upspa-registration."
      skip: "Aux only."
      jury: "What is the last event that makes registration successful?"
      pointer: "upspa-registration"

  - id: backup-upspa-authentication-full
    section: backup-upspa
    title: "Aux - UpSPA authentication, full protocol"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-authentication"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#fig:upspa-authentication/lines-260-362"
    formulas:
      - '\\operatorname{Combine}(t_{\\mathrm{sp}}\\text{ valid TOPRF responses})=F_K(pwd)'
    visual: "Full authentication sequence with validation gates at provider response, root decryption, account binding, and login-server challenge."
    citation: "Thesis, Figure fig:upspa-authentication."
    speakerNotes:
      main: "Use the full sequence to locate every rejection condition in the read-only path."
      cues:
        - "Threshold reconstruction precedes both ciphertext decryptions."
        - "No repair or persistent write occurs."
      transition: "Return to #upspa-authentication."
      skip: "Aux only."
      jury: "Which checks fail before any service credential is used?"
      pointer: "upspa-authentication"

  - id: backup-upspa-secret-update-full
    section: backup-upspa
    title: "Aux - UpSPA secret update, full protocol"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-secret-update"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#fig:upspa-secret-update/lines-364-498"
    formulas:
      - 'c_{j,new}=\\operatorname{Enc}_{K_0}(R^{ls_j}_{new}\\parallel ctr_{ac,new})'
    visual: "Complete Secret Update message diagram, emphasizing the one-account replacement and unchanged root."
    citation: "Thesis, Figure fig:upspa-secret-update."
    speakerNotes:
      main: "Use this to show that rotation is account-local and does not rebuild unrelated service state."
      cues:
        - "The login server changes its verifier for the same account."
        - "All required provider writes complete in baseline UpSPA."
      transition: "Return to #upspa-two-updates."
      skip: "Aux only."
      jury: "Which persistent objects change during a service-secret rotation?"
      pointer: "upspa-two-updates"

  - id: backup-upspa-password-update-full
    section: backup-upspa
    title: "Aux - UpSPA password update, full protocol"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-password-update"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Construction.tex#fig:upspa-password-update/lines-500-606"
    formulas:
      - '\\sigma_i=\\operatorname{Sign}_{ssk}(Uid\\parallel cid_{new}\\parallel k_{i,new}\\parallel time\\parallel i)'
    visual: "Full Password Update sequence with old-root recovery, fresh TOPRF key/share generation, exact signed tuple, freshness check, and provider acknowledgements."
    citation: "Thesis, Figure fig:upspa-password-update."
    speakerNotes:
      main: "Use the figure as authority for the exact signed field order and fresh TOPRF material."
      cues:
        - "The surrounding prose omits i; the formal figure includes it."
        - "Existing service records need not be re-encrypted."
      transition: "Return to #upspa-two-updates."
      skip: "Aux only."
      jury: "Why does each provider receive a differently bound authorization?"
      pointer: "upspa-two-updates"

  - id: backup-upspa-challenges-full
    section: backup-upspa
    title: "Aux - UpSPA design challenges"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-design-challenges"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Threat model.tex#subsec:upspa-design-challenges/lines-134-177"
    formulas: []
    visual: "Expanded challenge-to-mechanism matrix covering record preemption, service privacy, replay/rollback, authorization, update isolation, and password guessing."
    citation: "Thesis, UpSPA design challenges."
    speakerNotes:
      main: "Use the matrix to map a challenged threat directly to its construction mechanism."
      cues:
        - "Separate unpredictable addressing from ciphertext confidentiality."
        - "Separate update authorization from version freshness."
      transition: "Return to #upspa-design-challenges."
      skip: "Aux only."
      jury: "Which mechanism stops storage-record preemption?"
      pointer: "upspa-design-challenges"

  - id: backup-upspa-threat-model-full
    section: backup-upspa
    title: "Aux - UpSPA corruption and availability model"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-threat-model"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Threat model.tex#subsec:upspa-threat-model/lines-91-132"
    formulas:
      - '|\\mathcal{C}_{SP}|<t_{\\mathrm{sp}}'
    visual: "Full assumption table for honest target user, honest target login server, bounded storage-provider corruption, controlled network, and phase-specific availability."
    citation: "Thesis, UpSPA threat model."
    speakerNotes:
      main: "Use this to answer exactly which party combinations and failures the theorem covers."
      cues:
        - "Static corruption is assumed."
        - "State-changing availability is stronger than authentication availability."
      transition: "Return to #upspa-threat-model."
      skip: "Aux only."
      jury: "Does the model protect a user whose endpoint is compromised?"
      pointer: "upspa-threat-model"

  - id: backup-upspa-simulator-map
    section: backup-upspa
    title: "Aux - UpSPA simulator map"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-security"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/security analysis.tex#thm:upspa-security/lines-55-167"
    formulas: []
    visual: "Phase-by-phase map from Setup, Registration, Authentication, Secret Update, and Password Update transcripts to simulator-maintained ideal state."
    citation: "Thesis, UpSPA security theorem and simulator construction."
    speakerNotes:
      main: "Use this only when asked how the simulator handles a particular lifecycle phase."
      cues:
        - "Separate ideal state transitions from transcript simulation."
        - "Identify where bad events force an abort."
      transition: "Return to #upspa-security."
      skip: "Aux only."
      jury: "How is password update represented in the ideal execution?"
      pointer: "upspa-security"

  - id: backup-upspa-advantage-bound
    section: backup-upspa
    title: "Aux - UpSPA final advantage bound"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-security"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/security analysis.tex#final-bound/lines-1213-1251"
    formulas:
      - '\\operatorname{Adv}_{real/ideal}\\le \\operatorname{Adv}_{TOPRF}^{prf}+q_{id}\\operatorname{Adv}_{AE}^{ind-cpa}+q_{sp}\\operatorname{Adv}_{AE}^{ind-cpa}'
    visual: "Large bound with terms for TOPRF PRF, root confidentiality, and service-record confidentiality."
    citation: "Thesis, UpSPA final hybrid bound."
    speakerNotes:
      main: "Read the bound exactly as printed and distinguish theorem assumptions from terms explicitly displayed here."
      cues:
        - "Do not insert an explicit RIO term into this formula."
        - "The second AE multiplier is q_sp in the source."
      transition: "Return to #upspa-security."
      skip: "Aux only."
      jury: "Is receiver-input obliviousness absent as an assumption or only absent as an explicit displayed term?"
      pointer: "upspa-security"

  - id: backup-roupspa-setup-full
    section: backup-roupspa
    title: "Aux - RoUpSPA setup, full protocol"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-what-changes"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#fig:roupspa-setup/lines-46-157"
    formulas:
      - '1\\le t_{\\mathrm{sp}}\\le q_{\\mathrm{sp}}\\le n_{\\mathrm{sp}}'
    visual: "Full RoUpSPA setup sequence with initial signed identification record, ctr_id, active replica state, and all-provider initial distribution."
    citation: "Thesis, Figure fig:roupspa-setup."
    speakerNotes:
      main: "Use this to trace how the initial active replica family and root counter are established."
      cues:
        - "Setup still requires all n_sp providers."
        - "Later mutable operations use q_sp."
      transition: "Return to #roupspa-what-changes."
      skip: "Aux only."
      jury: "Why is initial setup not quorum-based?"
      pointer: "roupspa-what-changes"

  - id: backup-roupspa-registration-full
    section: backup-roupspa
    title: "Aux - RoUpSPA registration, full protocol"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-registration"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#fig:roupspa-registration/lines-192-322"
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#record-binding-and-completion-semantics/lines-684-732"
    formulas:
      - '\\sigma_{ac}=\\operatorname{Sign}_{ssk}(Uid\\parallel SUid_{l,j}\\parallel c_{sp}\\parallel ctr_{ac})'
    visual: "Complete Prepare → q_sp durable account writes → terminal Store registration flow, with Discard branch shown separately."
    citation: "Thesis, Figure fig:roupspa-registration and completion semantics."
    speakerNotes:
      main: "Use this to distinguish login-server tentative state from signed provider state and the terminal Store."
      cues:
        - "Each counted provider acknowledgement follows durable storage."
        - "The partial-write disagreement across sources remains explicit."
      transition: "Return to #roupspa-phase-semantics."
      skip: "Aux only."
      jury: "When does the login server make its tentative verifier current?"
      pointer: "roupspa-phase-semantics"

  - id: backup-roupspa-authentication-full
    section: backup-roupspa
    title: "Aux - RoUpSPA authentication, full protocol"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-threshold-quorum"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#fig:roupspa-authentication/lines-323-406"
    formulas:
      - '\\#active(root)\\ge t_{\\mathrm{sp}},\\qquad \\#active(account)\\ge t_{\\mathrm{sp}}'
    visual: "Full read-only sequence with separate validation and active-state filters for root and account response families."
    citation: "Thesis, Figure fig:roupspa-authentication."
    speakerNotes:
      main: "Use this to show exactly where stale signed records are rejected during login."
      cues:
        - "Root and account thresholds are evaluated independently."
        - "Authentication never launches synchronization."
      transition: "Return to #roupspa-read-and-authentication."
      skip: "Aux only."
      jury: "Can the two t_sp response sets contain different providers?"
      pointer: "roupspa-read-and-authentication"

  - id: backup-roupspa-secret-update-full
    section: backup-roupspa
    title: "Aux - RoUpSPA secret update, full protocol"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-secret-update"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#fig:roupspa-secret-update/lines-408-547"
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#record-binding-and-completion-semantics/lines-684-732"
    formulas:
      - '\\sigma_{ac,new}=\\operatorname{Sign}_{ssk}(Uid\\parallel SUid_{l,j}\\parallel c_{sp,new}\\parallel ctr_{ac,new})'
    visual: "Full Secret Update with login-server Prepare, signed counter increment, q_sp durable replacements, and terminal Store/Discard."
    citation: "Thesis, Figure fig:roupspa-secret-update."
    speakerNotes:
      main: "Use this to trace the exact signed account replacement and tentative login-server verifier."
      cues:
        - "Only one account family changes."
        - "Providers missing a completed write become stale."
      transition: "Return to #roupspa-phase-semantics."
      skip: "Aux only."
      jury: "What binds the new ciphertext to its account family and version?"
      pointer: "roupspa-phase-semantics"

  - id: backup-roupspa-password-update-full
    section: backup-roupspa
    title: "Aux - RoUpSPA password update, full protocol"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-phase-semantics"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#fig:roupspa-password-update/lines-549-683"
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#record-binding-and-completion-semantics/lines-684-732"
    formulas:
      - '\\sigma_{id,new}=\\operatorname{Sign}_{ssk}(Uid\\parallel cid_{new}\\parallel ctr_{id,new})'
    visual: "Full Password Update showing old-state recovery, fresh password protection, signed identification replacement, and q_sp durable provider writes."
    citation: "Thesis, Figure fig:roupspa-password-update."
    speakerNotes:
      main: "Use this to distinguish identification-record quorum completion from account records that remain unchanged."
      cues:
        - "The exact signed replacement binds Uid, new root ciphertext, and new root counter."
        - "The source has no final acknowledgement after the provider Store boundary."
      transition: "Return to #roupspa-phase-semantics."
      skip: "Aux only."
      jury: "Does RoUpSPA password update atomically repair every stale provider?"
      pointer: "roupspa-phase-semantics"

  - id: backup-roupspa-synchronization-full
    section: backup-roupspa
    title: "Aux - RoUpSPA synchronization, full procedure"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-phase-semantics"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#storage-provider-synchronization-and-repair/lines-163-191"
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#synchronization-and-counter-consistency/lines-367-495"
    formulas:
      - 'record^*=\\operatorname*{arg\\,max}_{valid\\ record}ctr(record)'
    visual: "Detailed synchronization state machine with q_sp collection, signature checks, unique-maximum rule, copy/install, and active-state promotion."
    citation: "Thesis, storage-provider synchronization and counter consistency."
    speakerNotes:
      main: "Use this to walk through repair without invoking password or decryption operations."
      cues:
        - "Reject two distinct valid maxima at one counter."
        - "Keep the recipient provider's own TOPRF share."
      transition: "Return to #roupspa-synchronization."
      skip: "Aux only."
      jury: "What happens if the quorum contains two different records with the same largest counter?"
      pointer: "roupspa-synchronization"

  - id: backup-roupspa-challenges-full
    section: backup-roupspa
    title: "Aux - RoUpSPA resilience challenges"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-threat-challenges"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Threat model.tex#subsec:roupspa-design-challenges/lines-193-222"
    formulas: []
    visual: "Expanded challenge map: shared-but-private routing, signed freshness, active/stale classification, quorum completion, repair, and incomplete-operation boundaries."
    citation: "Thesis, RoUpSPA design challenges."
    speakerNotes:
      main: "Use this to connect each resilience threat to a record field or quorum rule."
      cues:
        - "A shared handle enables routing but is not write authorization."
        - "Counters require signatures and serialized record families."
      transition: "Return to #roupspa-threat-and-boundary."
      skip: "Aux only."
      jury: "Why is a counter without a signature insufficient?"
      pointer: "roupspa-threat-and-boundary"

  - id: backup-roupspa-bad-events
    section: backup-roupspa
    title: "Aux - RoUpSPA bad-event accounting"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-security"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#bad-events/lines-169-240"
    formulas:
      - '\\epsilon_{bad}^{Ro}=q_{dec}\\operatorname{Adv}_{AE}^{int-ctxt}+q_{kb}\\operatorname{Adv}_{AE}^{kb}+q_{vk}\\operatorname{Adv}_{Sign}^{euf-cma}+\\operatorname{Adv}_{H}^{cr}'
    visual: "Four-event reduction table matching each accepting invalid record or ambiguity to AE integrity, key binding, signature unforgeability, or hash collision resistance."
    citation: "Thesis, RoUpSPA bad-event bound."
    speakerNotes:
      main: "Use this to isolate cryptographic bad events from deterministic quorum arguments."
      cues:
        - "Replication and synchronization add no new encryption calls."
        - "The expression is quoted exactly."
      transition: "Return to #roupspa-security."
      skip: "Aux only."
      jury: "Why is there no separate synchronization-forgery term?"
      pointer: "roupspa-security"

  - id: backup-roupspa-authorized-writes
    section: backup-roupspa
    title: "Aux - RoUpSPA authorized records and terminal messages"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-phase-semantics"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#record-binding-and-completion-semantics/lines-684-732"
      - "presentation/SOURCE_CONFLICTS.md#RoUpSPA-partial-write-semantics"
    formulas:
      - '\\operatorname{Sign}_{ssk}(Uid\\parallel SUid_{l,j}\\parallel c_{sp}\\parallel ctr_{ac})'
      - '\\operatorname{Sign}_{ssk}(Uid\\parallel cid_{new}\\parallel ctr_{id,new})'
    visual: "Exact field-order table for account and identification records, plus terminal-message table for Registration, Secret Update, and Password Update."
    citation: "Thesis, RoUpSPA record binding and completion semantics; source conflict register."
    speakerNotes:
      main: "Use this for exact authorization tuples and to avoid claiming a completion acknowledgement absent from the construction."
      cues:
        - "Store or Discard is terminal at the login server."
        - "Partial direct-write handling remains inconsistent across sources."
      transition: "Return to #roupspa-phase-semantics."
      skip: "Aux only."
      jury: "Which exact fields authorize an account replacement?"
      pointer: "roupspa-phase-semantics"

  - id: backup-roupspa-active-threshold
    section: backup-roupspa
    title: "Aux - Feasible threshold and quorum region"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-threshold-quorum"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#eq:roupspa-quorum-condition/lines-8-22"
    formulas:
      - 'q_{\\mathrm{sp}}>\\frac{n_{\\mathrm{sp}}+t_{\\mathrm{sp}}-1}{2}'
    visual: "Discrete feasible-region plot over integer (t_sp,q_sp) for selectable n_sp, shading majority threshold and strict intersection constraints."
    citation: "Thesis, RoUpSPA quorum condition."
    speakerNotes:
      main: "Use this to calculate admissible integer quorums for a committee question."
      cues:
        - "Apply the strict inequality before rounding to the next integer."
        - "Also enforce t_sp ≤ q_sp ≤ n_sp."
      transition: "Return to #roupspa-threshold-quorum."
      skip: "Aux only."
      jury: "For n_sp=10 and t_sp=6, what q_sp values are admissible?"
      pointer: "roupspa-threshold-quorum"

  - id: backup-roupspa-quorum-proof
    section: backup-roupspa
    title: "Aux - Quorum consistency proof"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-quorum-intersection"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#thm:quorum-consistency/lines-436-468"
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#cor:no-rollback/lines-470-480"
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#cor:no-divergent-commits/lines-482-495"
    formulas:
      - '|W\\cap R|\\ge |W|+|R|-n_{\\mathrm{sp}}\\ge2q_{\\mathrm{sp}}-n_{\\mathrm{sp}}>t_{\\mathrm{sp}}-1'
    visual: "Three-line proof: set intersection lower bound, corruption-cap contradiction, then signed-counter uniqueness; conclude no rollback and no divergent completed commits."
    citation: "Thesis, Theorem thm:quorum-consistency and corollaries."
    speakerNotes:
      main: "Use the inequalities to prove one honest latest-record holder exists in the later quorum."
      cues:
        - "At most t_sp-1 storage providers are corrupt."
        - "The theorem assumes a completed serialized write."
      transition: "Return to #roupspa-quorum-intersection."
      skip: "Aux only."
      jury: "Which step fails if equality replaces the strict final inequality?"
      pointer: "roupspa-quorum-intersection"

  - id: backup-roupspa-advantage-bound
    section: backup-roupspa
    title: "Aux - RoUpSPA final advantage bound"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-security"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#final-bound/lines-535-582"
    formulas:
      - '\\operatorname{Adv}_{real/ideal}\\le2\\epsilon_{bad}^{Ro}+q_K\\operatorname{Adv}_{TOPRF}^{prf}+q_T\\operatorname{Adv}_{TOPRF}^{rio}+q_{id}\\operatorname{Adv}_{AE}^{ind-cpa}+q_{ac}\\operatorname{Adv}_{AE}^{ind-cpa}'
    visual: "Exact final bound with arrows back to games G1-G4 and a separate deterministic quorum-consistency badge."
    citation: "Thesis, RoUpSPA final hybrid bound."
    speakerNotes:
      main: "Use this to map each advantage term to the corresponding game transition."
      cues:
        - "q_ac is the account-encryption multiplier."
        - "The source reducer suffix has a typographical inconsistency; the primitive is AE IND-CPA."
      transition: "Return to #roupspa-security."
      skip: "Aux only."
      jury: "Which game contributes the q_T receiver-input-obliviousness term?"
      pointer: "roupspa-security"

  - id: backup-experiment-configuration
    section: backup-results
    title: "Aux - Experimental configuration and measurement boundary"
    route: backup
    estimatedSeconds: 0
    returnTarget: "implementation-architecture-method"
    sourceRefs:
      - "source-material/thesis/Implementation/ch5_impl.tex#testing-benchmarking-validation/lines-364-403"
      - "source-material/thesis/Implementation/ch5_impl.tex#shared-software-architecture/lines-80-115"
    formulas:
      - 'T_{stage}^{P}(I)=T_{client,pre}^{P}+\\max_{i\\in I}\\{L_i+T_{SP_i}^{P}\\}+T_{client,post}^{P}'
    visual: "Audit table of hardware, software, warm-ups, measured samples, p50 aggregation, LAN/WAN profile, RNG boundary, and stage-composition rule."
    citation: "Thesis, implementation architecture and measurement validation."
    speakerNotes:
      main: "Use this to answer reproducibility or measurement-boundary questions."
      cues:
        - "50 warm-ups, 200 measured samples, median reporting."
        - "LAN/WAN are composed estimates; GPU is unused."
      transition: "Return to #implementation-architecture-method."
      skip: "Aux only."
      jury: "Are the WAN figures direct geographic measurements?"
      pointer: "implementation-architecture-method"

  - id: backup-upspa-tspa-charts
    section: backup-results
    title: "Aux - UpSPA versus TSPA scaling charts"
    route: backup
    estimatedSeconds: 0
    returnTarget: "results-upspa-tspa"
    sourceRefs:
      - "source-material/thesis/Implementation/upspa_tspa_fixed_nsp30.tex#fig:client-reg-auth-nsp30"
      - "source-material/thesis/Implementation/upspa_tspa_fixed_nsp30.tex#fig:client-setup-updates-nsp30"
      - "source-material/thesis/Implementation/upspa_tspa_proportional.tex#fig:client-reg-auth-nsptsp60"
      - "source-material/thesis/Implementation/upspa_tspa_proportional.tex#fig:lan-setup-updates-nsptsp60"
    formulas:
      - 't_{\\mathrm{sp}}=0.6n_{\\mathrm{sp}}\\quad\\text{in the proportional sweep}'
    visual: "Four-panel source-faithful redraw: fixed n_sp=30 client and LAN; proportional-threshold client and LAN, with exact p50 axes and no interpolated points."
    citation: "Thesis, UpSPA-TSPA fixed and proportional scaling figures."
    speakerNotes:
      main: "Use these panels when the committee asks about threshold sensitivity beyond the summary ranges."
      cues:
        - "Distinguish fixed-provider from joint provider/threshold scaling."
        - "Treat isolated median reversals as sampling variation, not path changes."
      transition: "Return to #results-upspa-tspa."
      skip: "Aux only."
      jury: "At what proportional scale does LAN registration cross?"
      pointer: "results-upspa-tspa"

  - id: aux-pastau-threshold-token-generation
    section: backup-results
    title: "Aux · PAS-TA-U — Threshold Token Generation"
    route: backup
    estimatedSeconds: 0
    returnTarget: "results-threshold-sso-comparison"
    sourceRefs:
      - "presentation/public/assets/protocols/pastau/threshold-token-generation.jpg#user-supplied-source-figure"
    formulas: []
    visual: "Image-only 16:9 source-figure slide using the supplied PAS-TA-U threshold token generation figure."
    citation: "User-supplied PAS-TA-U threshold token generation source figure."
    speakerNotes:
      main: "The source figure shows threshold token generation as an interaction with the PAS-TA-U identity servers."
      cues:
        - "Preserve the source figure exactly; do not reinterpret its actors, arrows, formulas, or message order."
        - "Use this only to explain the threshold-SSO comparison context."
      transition: "Continue to the PAS-TA-U registration source figure."
      skip: "Aux only."
      jury: "How does PAS-TA-U's token architecture differ from SPA's login-server-specific secret architecture?"
      pointer: "results-threshold-sso-comparison"

  - id: aux-pastau-registration
    section: backup-results
    title: "Aux · PAS-TA-U — Registration"
    route: backup
    estimatedSeconds: 0
    returnTarget: "results-threshold-sso-comparison"
    sourceRefs:
      - "presentation/public/assets/protocols/pastau/registration.png#user-supplied-source-figure"
    formulas: []
    visual: "Image-only 16:9 source-figure slide using the supplied PAS-TA-U registration diagram."
    citation: "User-supplied PAS-TA-U registration source figure."
    speakerNotes:
      main: "The supplied source figure presents PAS-TA-U registration without altering its protocol semantics."
      cues:
        - "Preserve the source figure exactly."
        - "Keep the identity-provider and identity-server roles distinct from UpSPA storage providers."
      transition: "Continue to PAS-TA-U authentication and token generation."
      skip: "Aux only."
      jury: "Which PAS-TA-U parties receive registration material?"
      pointer: "results-threshold-sso-comparison"

  - id: aux-pastau-authentication-token-generation
    section: backup-results
    title: "Aux · PAS-TA-U — Authentication and Token Generation"
    route: backup
    estimatedSeconds: 0
    returnTarget: "results-threshold-sso-comparison"
    sourceRefs:
      - "presentation/public/assets/protocols/pastau/authentication-token-generation.png#user-supplied-source-figure"
    formulas: []
    visual: "Image-only 16:9 source-figure slide using the supplied PAS-TA-U authentication and token generation diagram."
    citation: "User-supplied PAS-TA-U authentication and token generation source figure."
    speakerNotes:
      main: "The supplied source figure shows PAS-TA-U threshold authentication and token generation."
      cues:
        - "Preserve every source actor, message, and formula."
        - "The application server verifies a threshold-issued token rather than an SPA login-server secret."
      transition: "Continue to PAS-TA-U password update."
      skip: "Aux only."
      jury: "What object does the PAS-TA-U application server verify?"
      pointer: "results-threshold-sso-comparison"

  - id: aux-pastau-password-update
    section: backup-results
    title: "Aux · PAS-TA-U — Password Update"
    route: backup
    estimatedSeconds: 0
    returnTarget: "results-threshold-sso-comparison"
    sourceRefs:
      - "presentation/public/assets/protocols/pastau/password-update.png#user-supplied-source-figure"
    formulas: []
    visual: "Image-only 16:9 source-figure slide using the supplied PAS-TA-U password-update diagram."
    citation: "User-supplied PAS-TA-U password-update source figure."
    speakerNotes:
      main: "The supplied source figure shows PAS-TA-U password update in its own threshold-SSO architecture."
      cues:
        - "Preserve the source figure exactly."
        - "Do not describe this as an UpSPA identification-record replacement."
      transition: "Continue to the AugSSO registration source figure."
      skip: "Aux only."
      jury: "What state does PAS-TA-U replace during password update?"
      pointer: "results-threshold-sso-comparison"

  - id: aux-augsso-registration
    section: backup-results
    title: "Aux · AugSSO — Registration"
    route: backup
    estimatedSeconds: 0
    returnTarget: "results-threshold-sso-comparison"
    sourceRefs:
      - "presentation/public/assets/protocols/augsso/registration.png#user-supplied-source-figure"
    formulas: []
    visual: "Image-only 16:9 source-figure slide using the supplied AugSSO registration diagram."
    citation: "User-supplied AugSSO registration source figure."
    speakerNotes:
      main: "The source figure shows AugSSO credential provisioning, password hardening, and popular-password registration."
      cues:
        - "Preserve the source figure exactly."
        - "Keep the aggregation server outside the UpSPA/RoUpSPA storage-provider model."
      transition: "Continue to AugSSO authentication and token issuance."
      skip: "Aux only."
      jury: "Why is AugSSO's aggregation server not an UpSPA storage provider?"
      pointer: "results-threshold-sso-comparison"

  - id: aux-augsso-authentication-token-issuance
    section: backup-results
    title: "Aux · AugSSO — Authentication and Token Issuance"
    route: backup
    estimatedSeconds: 0
    returnTarget: "results-threshold-sso-comparison"
    sourceRefs:
      - "presentation/public/assets/protocols/augsso/authentication-token-issuance.png#user-supplied-source-figure"
    formulas: []
    visual: "Image-only 16:9 source-figure slide using the wider supplied AugSSO authentication and token-issuance diagram."
    citation: "User-supplied AugSSO authentication and token issuance source figure."
    speakerNotes:
      main: "The supplied source figure shows AugSSO authentication, challenge response, and threshold token issuance."
      cues:
        - "Preserve all source messages and formulas."
        - "The application server verifies the reconstructed master token."
      transition: "Continue to AugSSO password update."
      skip: "Aux only."
      jury: "Where is the threshold token reconstructed in AugSSO?"
      pointer: "results-threshold-sso-comparison"

  - id: aux-augsso-password-update
    section: backup-results
    title: "Aux · AugSSO — Password Update"
    route: backup
    estimatedSeconds: 0
    returnTarget: "results-threshold-sso-comparison"
    sourceRefs:
      - "presentation/public/assets/protocols/augsso/password-update.png#user-supplied-source-figure"
    formulas: []
    visual: "Image-only 16:9 source-figure slide using the supplied AugSSO password-update diagram."
    citation: "User-supplied AugSSO password-update source figure."
    speakerNotes:
      main: "The source figure shows AugSSO old-credential verification, credential replacement, and aggregation update."
      cues:
        - "Preserve the source figure exactly."
        - "Return to the comparison before resuming the main evaluation route."
      transition: "Return to the threshold-SSO comparison."
      skip: "Aux only."
      jury: "How does AugSSO update the popular-password collection after a password change?"
      pointer: "results-threshold-sso-comparison"

  - id: aux-sso-low-registration
    section: backup-results
    title: "AUX · Registration — Low-Threshold Comparison"
    route: backup
    estimatedSeconds: 0
    sourceRefs:
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#fig:full-grid-registration/lines-69-125"
    formulas:
      - '(n_{sp},t_{sp})\\in\\{(3,2),(5,2),(5,4),(7,2),(7,3),(7,5),(7,7)\\}'
    visual: "Four exact-data panels: Client, Storage Provider, LAN, and WAN; UpSPA, PAS-TA-U, and AugSSO."
    speakerNotes:
      main: "Exact registration deployment-grid medians from the active thesis PGFPlots source."
      cues: ["No screenshot-derived values.", "Keep all seven source configurations."]
      transition: "Continue vertically to Authentication."
      skip: "Aux only."
      jury: "Why does WAN ordering differ from local ordering?"
      pointer: "results-threshold-sso-comparison"

  - id: aux-sso-low-authentication
    section: backup-results
    title: "AUX · Authentication — Low-Threshold Comparison"
    route: backup
    estimatedSeconds: 0
    sourceRefs:
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#fig:full-grid-authentication/lines-169-225"
    formulas:
      - '(n_{sp},t_{sp})\\in\\{(3,2),(5,2),(5,4),(7,2),(7,3),(7,5),(7,7)\\}'
    visual: "Four exact-data panels: Client, Storage Provider, LAN, and WAN; UpSPA, PAS-TA-U, and AugSSO."
    speakerNotes:
      main: "Exact authentication deployment-grid medians from the active thesis PGFPlots source."
      cues: ["No screenshot-derived values.", "Keep the source system order and line identities."]
      transition: "Continue vertically to Password Update."
      skip: "Aux only."
      jury: "Which threshold operations drive the client separation?"
      pointer: "results-threshold-sso-comparison"

  - id: aux-sso-low-password-update
    section: backup-results
    title: "AUX · Password Update — Low-Threshold Comparison"
    route: backup
    estimatedSeconds: 0
    sourceRefs:
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#fig:full-grid-password/lines-268-324"
    formulas:
      - '(n_{sp},t_{sp})\\in\\{(3,2),(5,2),(5,4),(7,2),(7,3),(7,5),(7,7)\\}'
    visual: "Four exact-data panels: Client, Storage Provider, LAN, and WAN; UpSPA, PAS-TA-U, and AugSSO."
    speakerNotes:
      main: "Exact password-update deployment-grid medians from the active thesis PGFPlots source."
      cues: ["No screenshot-derived values.", "Do not add configurations outside the source grid."]
      transition: "Continue vertically to proportional Registration."
      skip: "Aux only."
      jury: "Why is PAS-TA-U provider work higher during password update?"
      pointer: "results-threshold-sso-comparison"

  - id: aux-sso-asymptotic-registration
    section: backup-results
    title: "AUX · Registration — Asymptotic Comparison"
    route: backup
    estimatedSeconds: 0
    sourceRefs:
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#fig:reg-tsp60-row/lines-408-519"
    formulas: ['t_{sp}=0.6n_{sp}']
    visual: "Three exact-data panels: Client, LAN, and WAN for n_sp=10 through 100."
    speakerNotes:
      main: "Registration proportional-scaling medians at the source policy t_sp=0.6n_sp."
      cues: ["Client, LAN, and WAN only.", "All ten source points remain present."]
      transition: "Continue vertically to proportional Authentication."
      skip: "Aux only."
      jury: "Where do the local registration curves cross?"
      pointer: "results-threshold-sso-comparison"

  - id: aux-sso-asymptotic-authentication
    section: backup-results
    title: "AUX · Authentication — Asymptotic Comparison"
    route: backup
    estimatedSeconds: 0
    sourceRefs:
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#fig:auth-tsp60-row/lines-557-668"
    formulas: ['t_{sp}=0.6n_{sp}']
    visual: "Three exact-data panels: Client, LAN, and WAN for n_sp=10 through 100."
    speakerNotes:
      main: "Authentication proportional-scaling medians at the source policy t_sp=0.6n_sp."
      cues: ["Client, LAN, and WAN only.", "All ten source points remain present."]
      transition: "Continue vertically to proportional Password Update."
      skip: "Aux only."
      jury: "Why does AugSSO grow faster on the client?"
      pointer: "results-threshold-sso-comparison"

  - id: aux-sso-asymptotic-password-update
    section: backup-results
    title: "AUX · Password Update — Asymptotic Comparison"
    route: backup
    estimatedSeconds: 0
    sourceRefs:
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#fig:pwdupd-tsp60-row/lines-707-818"
    formulas: ['t_{sp}=0.6n_{sp}']
    visual: "Three exact-data panels: Client, LAN, and WAN for n_sp=10 through 100."
    speakerNotes:
      main: "Password-update proportional-scaling medians at the source policy t_sp=0.6n_sp."
      cues: ["Client, LAN, and WAN only.", "All ten source points remain present."]
      transition: "Continue vertically to the PAS-TA-U source figures."
      skip: "Aux only."
      jury: "Where do the PAS-TA-U and AugSSO WAN curves cross?"
      pointer: "results-threshold-sso-comparison"

  - id: aux-resilient-registration
    section: backup-results
    title: "AUX · Registration — UpSPA vs RoUpSPA"
    route: backup
    estimatedSeconds: 0
    sourceRefs:
      - "source-material/thesis/resilient_backend_charts/curated/scaling_q080.tex#fig:res-fig01-q080-registration/lines-37-52"
      - "C:/Users/Reza/Documents/thesis 2/scripts/generate_resilient_comparison_charts.py#prop_keys/lines-209-215"
    formulas: ['t_{sp}=\\lceil0.6n_{sp}\\rceil', 'q_{sp}=\\lceil0.8n_{sp}\\rceil']
    visual: "Log-scale Complete local and Composed LAN panels preserving all source backend series."
    speakerNotes:
      main: "The active proportional source is the broader resilient-backend comparison with the exact pipeline thresholds."
      cues: ["Four local and six LAN series.", "n_sp=10 through 100; t_sp=ceil(0.6n_sp); q_sp=ceil(0.8n_sp)."]
      transition: "Continue vertically to Secret Update."
      skip: "Aux only."
      jury: "Why are these panels logarithmic?"
      pointer: "results-backend-scaling"

  - id: aux-resilient-secret-update
    section: backup-results
    title: "AUX · Secret Update — UpSPA vs RoUpSPA"
    route: backup
    estimatedSeconds: 0
    sourceRefs:
      - "source-material/thesis/resilient_backend_charts/curated/scaling_q080.tex#fig:res-fig01-q080-secret-update/lines-97-112"
      - "C:/Users/Reza/Documents/thesis 2/scripts/generate_resilient_comparison_charts.py#prop_keys/lines-209-215"
    formulas: ['t_{sp}=\\lceil0.6n_{sp}\\rceil', 'q_{sp}=\\lceil0.8n_{sp}\\rceil']
    visual: "Log-scale Complete local and Composed LAN panels preserving all source backend series."
    speakerNotes:
      main: "Exact secret-update proportional backend medians from the active curated figure."
      cues: ["Four local and six LAN series.", "No resilient Authentication slide exists."]
      transition: "Continue vertically to Password Update."
      skip: "Aux only."
      jury: "Which source backend dominates secret-update LAN latency?"
      pointer: "results-backend-scaling"

  - id: aux-resilient-password-update
    section: backup-results
    title: "AUX · Password Update — UpSPA vs RoUpSPA"
    route: backup
    estimatedSeconds: 0
    sourceRefs:
      - "source-material/thesis/resilient_backend_charts/curated/scaling_q080.tex#fig:res-fig01-q080-password-update/lines-157-172"
      - "C:/Users/Reza/Documents/thesis 2/scripts/generate_resilient_comparison_charts.py#prop_keys/lines-209-215"
    formulas: ['t_{sp}=\\lceil0.6n_{sp}\\rceil', 'q_{sp}=\\lceil0.8n_{sp}\\rceil']
    visual: "Log-scale Complete local and Composed LAN panels preserving all source backend series."
    speakerNotes:
      main: "Exact password-update proportional backend medians from the active curated figure."
      cues: ["Four local and six LAN series.", "The pipeline uses t_sp=ceil(0.6n_sp) and q_sp=ceil(0.8n_sp)."]
      transition: "Return horizontally to the next main evaluation slide."
      skip: "Aux only."
      jury: "Why is quorum/ABD password update steeper locally?"
      pointer: "results-backend-scaling"

  - id: backup-upspa-roupspa-charts
    section: backup-results
    title: "Aux - UpSPA versus RoUpSPA paired charts"
    route: backup
    estimatedSeconds: 0
    returnTarget: "results-upspa-roupspa"
    sourceRefs:
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#fig:UpSPA-abd-registration/lines-840-920"
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#fig:UpSPA-abd-secret/lines-920-1000"
      - "source-material/thesis/Implementation/upspa_sso_and_quorum_results.tex#fig:UpSPA-abd-password/lines-1000-1105"
    formulas:
      - '\\Delta^{P}_{Q,N,p50}=T^{P}_{RoUpSPA,full-net,p50}-T^{P}_{UpSPA,full,p50}'
    visual: "All three paired client/LAN charts with exact (n_sp,t_sp,q_sp) labels and explicit absence of a WAN ranking panel."
    citation: "Thesis, UpSPA and RoUpSPA comparison figures."
    speakerNotes:
      main: "Use this to distinguish the local robust increment from the extra staged network cost."
      cues:
        - "All differences are paired on phase, threshold, provider count, and profile."
        - "WAN totals are intentionally not used to rank the constructions."
      transition: "Return to #results-upspa-roupspa."
      skip: "Aux only."
      jury: "How were the isolated quorum overheads calculated?"
      pointer: "results-upspa-roupspa"

  - id: backup-backend-charts
    section: backup-results
    title: "Aux - Resilient synchronization backend charts"
    route: backup
    estimatedSeconds: 0
    returnTarget: "results-backends"
    sourceRefs:
      - "source-material/thesis/Implementation/ch5_impl.tex#tab:resilient-q080-endpoints/lines-530-582"
      - "source-material/thesis/Implementation/ch5_impl.tex#fig:res-fig01-q080-registration/lines-587-610"
      - "source-material/thesis/Implementation/ch5_impl.tex#fig:res-fig07-overhead-q080/lines-600-635"
    formulas:
      - 'q_{\\mathrm{sp}}=\\lceil0.8n_{\\mathrm{sp}}\\rceil'
    visual: "Full local/LAN backend small multiples for registration, secret update, password update, and isolated synchronization overhead."
    citation: "Thesis, resilient synchronization backend evaluation."
    speakerNotes:
      main: "Use this to compare phase-specific scaling without declaring one universally best backend."
      cues:
        - "Public-state q_sp labels match availability scenarios, not ledger consensus."
        - "Complete-local and backend-overhead targets answer different questions."
      transition: "Return to #results-backends."
      skip: "Aux only."
      jury: "Why does quorum/ABD password update grow faster than signed PBB locally?"
      pointer: "aux-resilient-registration"

  - id: backup-evm-gas
    section: backup-results
    title: "Aux - Receipt-level EVM gas"
    route: backup
    estimatedSeconds: 0
    returnTarget: "results-backends"
    sourceRefs:
      - "source-material/thesis/Implementation/ch5_impl.tex#tab:evm-direct-receipts/lines-639-669"
      - "source-material/thesis/Implementation/ch5_impl.tex#tab:evm-merkle-receipts/lines-672-707"
      - "source-material/thesis/Implementation/ch5_impl.tex#fig:evm-receipt-gas/lines-710-752"
    formulas:
      - '\\mathrm{medianGas}_{direct-reg}=123\\,619'
      - '\\mathrm{medianGas}_{direct-update}\\approx51\\,17x'
      - '\\mathrm{publicationGas}/record: 11\\,704.625\\rightarrow731.727\\ (B:8\\rightarrow128)'
    visual: "Two exact tables plus compact log-scale bars for direct registration/update and Merkle publication/proof verification; badge '91/91 successful local Anvil receipts'."
    citation: "Thesis, receipt-level EVM gas tables and figure."
    speakerNotes:
      main: "Use this for exact local-regression gas values, not public-chain fee or confirmation claims."
      cues:
        - "All 91 archived receipts succeeded on local Anvil."
        - "Deployer, publisher, relayer, and controller share one EOA in this dataset."
      transition: "Return to #results-backends."
      skip: "Aux only."
      jury: "Can these gas rows predict a production transaction fee?"
      pointer: "results-backends"

  - id: backup-foundry-cross-check
    section: backup-results
    title: "Aux - Foundry representative gas cross-check"
    route: backup
    estimatedSeconds: 0
    returnTarget: "results-backend-scaling"
    sourceRefs:
      - "source-material/thesis/Implementation/upspa_foundry_gas_snapshot.tex#tab:upspa-foundry-direct-snapshot/lines-1-25"
      - "source-material/thesis/Implementation/upspa_foundry_gas_snapshot.tex#tab:upspa-foundry-merkle-snapshot/lines-27-56"
    formulas: []
    visual: "Side-by-side Foundry snapshots for direct and Merkle contract calls with a banner separating regression evidence from receipt-distribution evidence."
    citation: "Thesis, Foundry gas snapshot tables."
    speakerNotes:
      main: "Use this as an independent contract-level regression check, not as a substitute for the receipt dataset."
      cues:
        - "Contract and timed boundaries differ from the Anvil manifest."
        - "Do not pool the two distributions."
      transition: "Return to #results-backend-scaling."
      skip: "Aux only."
      jury: "Why do the Foundry and receipt values not need to match exactly?"
      pointer: "results-backend-scaling"

  - id: backup-tron-status
    section: backup-results
    title: "Aux - TRON implementation status"
    route: backup
    estimatedSeconds: 0
    returnTarget: "results-key-takeaways"
    sourceRefs:
      - "source-material/thesis/Implementation/ch5_impl.tex#TRON-implementation-and-pending-native-measurements/lines-783-796"
    formulas: []
    visual: "Evidence checklist: TVM-compatible contract - complete; runner/schema - complete; live solidified receipt matrix - missing; numerical chart - intentionally absent."
    citation: "Thesis, TRON Implementation and Pending Native Measurements."
    speakerNotes:
      main: "Use this to state the TRON boundary plainly: implementation exists, numerical native-resource evidence does not."
      cues:
        - "No synthetic Energy or Bandwidth numbers are reported."
        - "EVM gas is not used as a TRON proxy."
      transition: "Return to #results-key-takeaways."
      skip: "Aux only."
      jury: "Why is there no TRON chart?"
      pointer: "results-key-takeaways"

  - id: backup-references
    section: backup-reference
    title: "Aux - References used by the defense deck"
    route: backup
    estimatedSeconds: 0
    returnTarget: "conclusion-publications"
    sourceRefs:
      - "source-material/thesis/references.bib#selected-SPA-TSPA-UpSPA-and-comparison-entries"
      - "source-material/thesis/Prelude/Introduction/Publications.tex#Publications/lines-1-25"
      - "presentation.config.yaml#links"
    formulas: []
    visual: "Readable two-column reference list grouped by SPA lineage, password/threshold systems, distributed storage, and thesis artifacts; include ePrint and repository QR codes."
    citation: "Thesis bibliography and Publications section."
    speakerNotes:
      main: "Use this to provide a precise citation or artifact link without interrupting the core narrative."
      cues:
        - "Differentiate public ePrint availability from submitted venue status."
        - "Use bibliography metadata exactly as recorded."
      transition: "Return to #conclusion-publications."
      skip: "Aux only."
      jury: "Where can the UpSPA manuscript and code be inspected?"
      pointer: "conclusion-publications"

  - id: backup-notation
    section: backup-reference
    title: "Aux - Notation and state vocabulary"
    route: backup
    estimatedSeconds: 0
    returnTarget: "conclusion-contributions"
    sourceRefs:
      - "source-material/thesis/Prelude/Preliminaries/Notations.tex#protocol-notation"
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#eq:roupspa-quorum-condition/lines-8-22"
    formulas:
      - 'n_{\\mathrm{sp}}:\\ \\text{providers},\\quad t_{\\mathrm{sp}}:\\ \\text{cryptographic threshold},\\quad q_{\\mathrm{sp}}:\\ \\text{write/sync quorum}'
      - 'ctr_{id}:\\ \\text{root version},\\quad ctr_{ac}:\\ \\text{account version}'
    visual: "Compact symbol dictionary grouped by parties, thresholds, root state, account state, and protocol phases."
    citation: "Thesis, Preliminaries notation and RoUpSPA construction."
    speakerNotes:
      main: "Use this to resolve symbols quickly during questions."
      cues:
        - "Keep t_sp and q_sp conceptually separate."
        - "Use provider count n_sp consistently across both constructions."
      transition: "Return to #conclusion-contributions."
      skip: "Aux only."
      jury: "What is the difference between ctr_id and ctr_ac?"
      pointer: "conclusion-contributions"

  - id: backup-upspa-proof-g0-g1
    section: backup-upspa
    title: "UpSPA proof: G0 to G1"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-security"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/security analysis.tex#games-g0-g1"
    formulas: []
    visual: "Two-column transition from the stopped real game to TOPRF replacement."
    citation: "Thesis, UpSPA Security Analysis, games G0-G1."
    speakerNotes: { main: "Use this to explain the bad-event conditioning and TOPRF hop.", cues: [], transition: "Return to UpSPA security.", skip: "Aux only.", jury: "What changes between G0 and G1?", pointer: "upspa-security" }

  - id: backup-upspa-proof-g2-g3
    section: backup-upspa
    title: "UpSPA proof: G2 to G3"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-security"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/security analysis.tex#games-g2-g3"
    formulas: []
    visual: "Paired AE IND-CPA hybrids for identification and account ciphertexts."
    citation: "Thesis, UpSPA Security Analysis, games G2-G3."
    speakerNotes: { main: "Use this to separate identification-record and account confidentiality hybrids.", cues: [], transition: "Return to UpSPA security.", skip: "Aux only.", jury: "Why are two AE hybrids needed?", pointer: "upspa-security" }

  - id: backup-upspa-proof-g4-terminal
    section: backup-upspa
    title: "UpSPA proof: G4 and terminal equivalence"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-security"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/security analysis.tex#game-g4"
    formulas: []
    visual: "Simulator state, local pending state, and ideal completed outcome."
    citation: "Thesis, UpSPA Security Analysis, terminal game."
    speakerNotes: { main: "Use this to explain why partial protocol state is simulator-local.", cues: [], transition: "Return to UpSPA security.", skip: "Aux only.", jury: "What state enters the ideal functionality?", pointer: "upspa-security" }

  - id: backup-upspa-password-scope
    section: backup-upspa
    title: "UpSPA password-security scope"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-security"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Full available version/Threat model.tex#password-security"
    formulas: []
    visual: "Claimed versus not-claimed password-security boundary."
    citation: "Thesis, UpSPA threat model and security statement."
    speakerNotes: { main: "Use this to avoid describing a human password as uniformly random.", cues: [], transition: "Return to UpSPA security.", skip: "Aux only.", jury: "Does the theorem make weak passwords unguessable?", pointer: "upspa-security" }

  - id: backup-roupspa-proof-g0-g2
    section: backup-roupspa
    title: "RoUpSPA proof: G0 to G2"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-security"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#games-g0-g2"
    formulas: []
    visual: "Bad-event conditioning followed by TOPRF PRF and RIO hybrids."
    citation: "Thesis, RoUpSPA Security Analysis, games G0-G2."
    speakerNotes: { main: "Use this to show why RoUpSPA exposes separate PRF and RIO terms.", cues: [], transition: "Return to RoUpSPA security.", skip: "Aux only.", jury: "Where does the RIO term enter?", pointer: "roupspa-security" }

  - id: backup-roupspa-proof-g3-g5
    section: backup-roupspa
    title: "RoUpSPA proof: G3 to G5"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-security"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#games-g3-g5"
    formulas: []
    visual: "Identification and account AE hybrids ending in the ideal game."
    citation: "Thesis, RoUpSPA Security Analysis, games G3-G5."
    speakerNotes: { main: "Use this to separate encrypted-root and encrypted-account replacements.", cues: [], transition: "Return to RoUpSPA security.", skip: "Aux only.", jury: "Which game hides account plaintexts?", pointer: "roupspa-security" }

  - id: backup-roupspa-terminal-equivalence
    section: backup-roupspa
    title: "RoUpSPA terminal equivalence"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-security"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/security analysis.tex#terminal-equivalence"
      - "source-material/thesis/UpSPA variation/Resilient Version/Construction.tex#record-binding-and-completion-semantics"
    formulas: []
    visual: "Exact retransmission, Store, Discard, stale marking, and ideal-success map."
    citation: "Thesis, RoUpSPA completion semantics and security analysis."
    speakerNotes: { main: "Use this to distinguish local replica state from ideal completed state.", cues: [], transition: "Return to RoUpSPA security.", skip: "Aux only.", jury: "How is a missed terminal decision represented?", pointer: "roupspa-security" }

  - id: backup-roupspa-liveness-scope
    section: backup-roupspa
    title: "RoUpSPA liveness scope"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-threat-and-boundary"
    sourceRefs:
      - "source-material/thesis/UpSPA variation/Resilient Version/Threat model.tex#availability-and-liveness"
    formulas: []
    visual: "Progress requirements versus conditions outside the guarantee."
    citation: "Thesis, RoUpSPA threat model."
    speakerNotes: { main: "Use this to state conditional progress without implying consensus liveness.", cues: [], transition: "Return to safety and liveness.", skip: "Aux only.", jury: "Under which failures can progress stop?", pointer: "roupspa-threat-and-boundary" }

  - id: backup-upspa-source-figures
    section: backup-upspa
    title: "UpSPA supplied source figures"
    route: backup
    estimatedSeconds: 0
    returnTarget: "upspa-setup"
    sourceRefs:
      - "setup upspa.png"
      - "registration upspa.png"
      - "authentication upspa.png"
      - "secret update upspa.png"
      - "password update upspa.png"
    formulas: []
    visual: "Five labeled source-figure thumbnails."
    citation: "User-supplied UpSPA protocol figures."
    speakerNotes: { main: "Use these only as source-reference figures; the main route remains editable HTML.", cues: [], transition: "Return to UpSPA setup.", skip: "Aux only.", jury: "How does the vector summary map to the numbered source?", pointer: "upspa-setup" }

  - id: backup-roupspa-source-figures
    section: backup-roupspa
    title: "RoUpSPA supplied source figures"
    route: backup
    estimatedSeconds: 0
    returnTarget: "roupspa-registration"
    sourceRefs:
      - "setup RoUpSPA.png"
      - "registration RoUpSPA.png"
      - "authentication RoUpSPA.png"
      - "secret update RoUpSPA.png"
      - "password update RoUpSPA.png"
    formulas: []
    visual: "Five labeled source-figure thumbnails."
    citation: "User-supplied RoUpSPA protocol figures."
    speakerNotes: { main: "Use these only as source-reference figures; the main route remains editable HTML.", cues: [], transition: "Return to RoUpSPA registration.", skip: "Aux only.", jury: "Where is LS Prepare in the numbered source?", pointer: "roupspa-registration" }

  - id: backup-spa-paper-figure
    section: backup-lineage
    title: "Aux · SPA — Original registration and authentication"
    route: backup
    estimatedSeconds: 0
    returnTarget: "lineage-spa"
    sourceRefs:
      - "presentation/public/assets/spa-paper-figure.png#best-clean-crop-available"
    formulas: []
    visual: "One landscape source-figure slide; aspect ratio preserved without redrawing."
    citation: "Clean SPA paper-figure crop available in the supplied presentation workspace."
    speakerNotes: { main: "Use the original SPA registration/authentication diagram as historical source context.", cues: ["Do not reinterpret the actors or messages inside the figure."], transition: "Return to SPA, then continue to TSPA.", skip: "Aux only.", jury: "How does the helper remain separate from the login server?", pointer: "lineage-spa" }

  - id: aux-tspa-registration
    section: backup-lineage
    title: "Aux · TSPA — Registration"
    route: backup
    estimatedSeconds: 0
    returnTarget: "lineage-tspa"
    sourceRefs:
      - "presentation/public/assets/tspa-registration-figure.png#best-clean-crop-available"
    formulas: []
    visual: "One landscape TSPA registration source-figure slide; aspect ratio preserved without redrawing."
    citation: "Clean TSPA registration figure crop available in the supplied presentation workspace."
    speakerNotes: { main: "Use the TSPA registration figure to show provider-specific OPRF protection and threshold sharing.", cues: ["Keep OPRF terminology distinct from UpSPA's TOPRF construction."], transition: "Continue down to TSPA authentication.", skip: "Aux only.", jury: "Why does registration touch all provider-specific shares?", pointer: "lineage-tspa" }

  - id: aux-tspa-authentication
    section: backup-lineage
    title: "Aux · TSPA — Authentication"
    route: backup
    estimatedSeconds: 0
    returnTarget: "lineage-tspa"
    sourceRefs:
      - "presentation/public/assets/tspa-authentication-figure.png#best-clean-crop-available"
    formulas: []
    visual: "One landscape TSPA authentication source-figure slide; aspect ratio preserved without redrawing."
    citation: "Clean TSPA authentication figure crop available in the supplied presentation workspace."
    speakerNotes: { main: "Use the TSPA authentication figure to show threshold recovery before login-server verification.", cues: ["The source shows OPRF-based provider-specific protection, not UpSPA TOPRF-protected shares."], transition: "Return to TSPA, then continue to the lifecycle gap.", skip: "Aux only.", jury: "What does the user reconstruct from threshold contributions?", pointer: "lineage-tspa" }
`,jl=`# Authoritative Reveal.js route rebuilt from the final annotated PDF.
# Only entries in this file are rendered; instruction-only and removed pages stay out of the DOM.
slides:
  # Horizontal main story — exactly 41 slides.
  - { id: title, route: core }
  - { id: problem-daily-authentication, route: core }
  - { id: problem-two-strategies, route: core }
  - { id: problem-password-manager, route: core }
  - { id: problem-research-question, route: core }
  - { id: lineage-overview, route: core }
  - { id: lineage-spa, route: core }
  - { id: lineage-tspa, route: core }
  - { id: lineage-gap-and-thesis, route: core }
  - { id: upspa-primitives, sourceId: upspa-toprf-interaction, route: core }
  - { id: upspa-two-layer-state, route: core }
  - { id: upspa-toprf, sourceId: upspa-toprf-interaction, route: core }
  - { id: upspa-challenge-mechanisms, sourceId: upspa-toprf-interaction, route: core }
  - { id: upspa-setup, route: core }
  - { id: upspa-identification, route: core }
  - { id: upspa-registration, route: core }
  - { id: upspa-authentication, route: core }
  - { id: upspa-rq2-updateability, sourceId: upspa-two-updates, route: core }
  - { id: upspa-secret-update, route: core }
  - { id: upspa-password-update, route: core }
  - { id: upspa-security-theorem, sourceId: upspa-security, route: core }
  - { id: roupspa-motivation, route: core }
  - { id: roupspa-threshold-quorum, route: core }
  - { id: roupspa-setup, sourceId: backup-roupspa-setup-full, route: core }
  - { id: roupspa-recovery-overview, sourceId: backup-roupspa-synchronization-full, route: core, estimatedSeconds: 55 }
  - { id: roupspa-registration, route: core }
  - { id: roupspa-phase-semantics, route: core }
  - { id: roupspa-secret-update, route: core }
  - { id: roupspa-password-update, sourceId: backup-roupspa-password-update-full, route: core }
  - { id: roupspa-liveness, sourceId: backup-roupspa-liveness-scope, route: core, estimatedSeconds: 60 }
  - { id: alternatives-pbb, route: core }
  - { id: alternatives-pbb-visual, sourceId: alternatives-pbb, route: core }
  - { id: implementation-architecture-method, route: core }
  - { id: results-upspa-tspa, route: core }
  - { id: results-threshold-sso-comparison, route: core }
  - { id: results-upspa-roupspa-charts, sourceId: backup-upspa-roupspa-charts, route: core }
  - { id: results-backend-scaling, sourceId: backup-backend-charts, route: core }
  - { id: conclusion-contributions, route: core }
  - { id: conclusion-limitations-future, route: core }
  - { id: conclusion-publications, route: core }
  - { id: thank-you, route: core }

  # Vertical technical depth — exactly 59 slides, reached through Down/Up only.
  - { id: backup-spa-paper-figure, route: backup, originId: lineage-spa, suppressAuxTitlePrefix: true }
  - { id: aux-tspa-registration, route: backup, originId: lineage-tspa, suppressAuxTitlePrefix: true }
  - { id: aux-tspa-authentication, route: backup, originId: lineage-tspa, suppressAuxTitlePrefix: true }
  - { id: backup-notation, route: backup, originId: upspa-two-layer-state }
  - { id: aux-toprf-concrete, sourceId: upspa-toprf-interaction, route: backup, originId: upspa-toprf }
  - { id: backup-upspa-registration-full, route: backup, originId: upspa-registration }
  - { id: backup-upspa-authentication-full, route: backup, originId: upspa-authentication }
  - { id: upspa-two-updates, route: backup, originId: upspa-rq2-updateability }
  - { id: backup-upspa-secret-update-full, route: backup, originId: upspa-secret-update }
  - { id: backup-upspa-password-update-full, route: backup, originId: upspa-password-update }
  - { id: aux-upspa-ideal-functionality, sourceId: upspa-security, route: backup, originId: upspa-security-theorem }
  - { id: upspa-ideal-functionality-continuation, sourceId: upspa-security, route: backup, originId: upspa-security-theorem }
  - { id: upspa-threat-model, route: backup, originId: upspa-security-theorem }
  - { id: upspa-design-challenges, route: backup, originId: upspa-security-theorem }
  - { id: upspa-proof-waterfall, sourceId: upspa-security, route: backup, originId: upspa-security-theorem }
  - { id: aux-upspa-hybrid-g1, sourceId: backup-upspa-proof-g0-g1, route: backup, originId: upspa-security-theorem }
  - { id: aux-upspa-hybrid-g2-g3, sourceId: backup-upspa-proof-g2-g3, route: backup, originId: upspa-security-theorem }
  - { id: backup-upspa-advantage-bound, route: backup, originId: upspa-security-theorem }
  - { id: roupspa-quorum-intersection, route: backup, originId: roupspa-threshold-quorum }
  - { id: roupspa-what-changes, route: backup, originId: roupspa-threshold-quorum }
  - { id: aux-roupspa-quorum-consistency, sourceId: roupspa-security, route: backup, originId: roupspa-threshold-quorum }
  - { id: aux-roupspa-quorum-proof, sourceId: backup-roupspa-proof-g0-g2, route: backup, originId: roupspa-threshold-quorum }
  - { id: aux-roupspa-no-rollback, sourceId: backup-roupspa-proof-g3-g5, route: backup, originId: roupspa-threshold-quorum }
  - { id: aux-roupspa-authorization-checks, sourceId: backup-roupspa-terminal-equivalence, route: backup, originId: roupspa-threshold-quorum }
  - { id: backup-roupspa-registration-full, route: backup, originId: roupspa-registration }
  - { id: roupspa-quorum-recovery, sourceId: backup-roupspa-synchronization-full, route: backup, originId: roupspa-recovery-overview }
  - { id: roupspa-recovery-stage-1, sourceId: backup-roupspa-synchronization-full, route: backup, originId: roupspa-recovery-overview }
  - { id: roupspa-recovery-stage-2, sourceId: backup-roupspa-synchronization-full, route: backup, originId: roupspa-recovery-overview }
  - { id: roupspa-recovery-stage-3, sourceId: backup-roupspa-synchronization-full, route: backup, originId: roupspa-recovery-overview }
  - { id: roupspa-recovery-stage-4, sourceId: backup-roupspa-synchronization-full, route: backup, originId: roupspa-recovery-overview }
  - { id: backup-roupspa-secret-update-full, route: backup, originId: roupspa-secret-update }
  - { id: backup-roupspa-password-update-full, route: backup, originId: roupspa-password-update }
  - { id: roupspa-authorized-records, sourceId: backup-roupspa-authorized-writes, route: backup, originId: roupspa-password-update }
  - { id: roupspa-threat-challenges, route: backup, originId: roupspa-password-update }
  - { id: roupspa-threat-and-boundary, route: backup, originId: roupspa-password-update }
  - { id: alternatives-blockchain-and-choice, route: backup, originId: alternatives-pbb-visual }
  - { id: backup-experiment-configuration, route: backup, originId: implementation-architecture-method }
  - { id: backup-upspa-tspa-charts, route: backup, originId: results-upspa-tspa }
  - { id: aux-sso-low-registration, route: backup, originId: results-threshold-sso-comparison }
  - { id: aux-sso-low-authentication, route: backup, originId: results-threshold-sso-comparison }
  - { id: aux-sso-low-password-update, route: backup, originId: results-threshold-sso-comparison }
  - { id: aux-sso-asymptotic-registration, route: backup, originId: results-threshold-sso-comparison }
  - { id: aux-sso-asymptotic-authentication, route: backup, originId: results-threshold-sso-comparison }
  - { id: aux-sso-asymptotic-password-update, route: backup, originId: results-threshold-sso-comparison }
  - { id: aux-pastau-threshold-token-generation, route: backup, originId: results-threshold-sso-comparison }
  - { id: aux-pastau-registration, route: backup, originId: results-threshold-sso-comparison }
  - { id: aux-pastau-authentication-token-generation, route: backup, originId: results-threshold-sso-comparison }
  - { id: aux-pastau-password-update, route: backup, originId: results-threshold-sso-comparison }
  - { id: aux-augsso-registration, route: backup, originId: results-threshold-sso-comparison }
  - { id: aux-augsso-authentication-token-issuance, route: backup, originId: results-threshold-sso-comparison }
  - { id: aux-augsso-password-update, route: backup, originId: results-threshold-sso-comparison }
  - { id: results-upspa-roupspa, route: backup, originId: results-upspa-roupspa-charts }
  - { id: results-backends, route: backup, originId: results-upspa-roupspa-charts }
  - { id: aux-resilient-registration, route: backup, originId: results-backend-scaling }
  - { id: aux-resilient-secret-update, route: backup, originId: results-backend-scaling }
  - { id: aux-resilient-password-update, route: backup, originId: results-backend-scaling }
  - { id: results-evm-gas, sourceId: backup-evm-gas, route: backup, originId: results-backend-scaling }
  - { id: backup-foundry-cross-check, route: backup, originId: results-backend-scaling }
  - { id: backup-references, route: backup, originId: conclusion-publications }
`,Fl=`# Visible core-route copy lives here. Renderer JavaScript supplies layout behavior only.
# Math uses Reveal/MathJax delimiters. HTML is intentional so diagrams remain editable.
slides:
  title:
    navLabel: Title
    sectionKey: title
    sectionLabel: Title
    layout: raw
    body: |
      <div class="slide-shell title-stage">
        <div class="title-copy">
          <div class="section-kicker">MSc thesis defense</div>
          <h1>{{config.title}}</h1>
          <p class="program">Master of Science in {{config.program}}</p>
          <div class="identity"><strong>{{config.presenterFormalName}}</strong><span>Candidate</span><strong>{{config.advisor}}</strong><span>Advisor</span></div>
          <div class="title-date">{{config.institution}} · {{config.defenseDate}}</div>
        </div>
        <div class="title-visual" aria-label="Institutional affiliations">
          <div class="title-rings"><i></i><i></i><i></i><strong>SPA</strong></div>
          <div class="title-logos"><img src="assets/koc-logo.png" alt="Koç University logo"><img src="assets/ku-crypto.png" alt="Koç University Cryptography, Security, and Privacy Research Group logo"></div>
        </div>
      </div>

  problem-daily-authentication:
    navLabel: Daily authentication
    sectionKey: problem
    sectionLabel: Problem
    kicker: The password problem
    title: Authentication is a daily activity
    body: |
      <div class="split-40 editable-split">
        <div><p class="lead">One person returns to many independent accounts—often from more than one device.</p><div class="claim">The repeated task is not creating a password once. It is reliably recovering the right credential, for the right service, every day.</div></div>
        <div class="service-scene" aria-label="Generic account categories"><span>Email</span><span>Banking</span><span>University</span><span>Cloud</span><span>Developer</span><span>Health</span><span>Travel</span><span>Shopping</span><strong>User</strong></div>
      </div>

  problem-two-strategies:
    navLabel: One or many?
    sectionKey: problem
    sectionLabel: Problem
    kicker: The password problem
    title: One password or many passwords?
    body: |
      <div class="choice-grid"><article class="danger-card"><span>01</span><h3>Reuse one password</h3><p>Low memory burden and low daily effort.</p><strong>One disclosure can propagate across independent accounts.</strong></article><div class="choice-or">or</div><article class="safe-card"><span>02</span><h3>Different password for every service</h3><p>Better compromise isolation.</p><strong>Remembering, maintaining, and recovering credentials becomes harder.</strong></article></div>

  problem-strategy-comparison:
    navLabel: Convenience vs isolation
    sectionKey: problem
    sectionLabel: Problem
    kicker: The password problem
    title: The tension is convenience versus isolation
    body: |
      <table class="comparison-table"><thead><tr><th>Reuse one password</th><th>Use different passwords</th></tr></thead><tbody><tr><td>Easy to remember</td><td>Better compromise isolation</td></tr><tr><td>Low daily effort</td><td>Higher maintenance and recovery burden</td></tr><tr><td>One disclosure may affect several accounts</td><td>May encourage predictable variations</td></tr></tbody></table><p class="small" style="margin-top:22px">The design opportunity is to keep one memorable secret while deriving independent service credentials.</p>

  problem-password-manager:
    navLabel: Password managers
    sectionKey: problem
    sectionLabel: Problem
    kicker: The password problem
    title: Password managers solve usability by introducing a vault
    body: |
      <div class="manager-layout"><div class="vault-stack"><strong>Master secret</strong><i></i><div>Encrypted credential vault</div><i></i><span>site A</span><span>site B</span><span>site C</span></div><div class="manager-models"><article><h3>Local vault</h3><p>Credential state remains on a device.</p><small>Portability, backup, synchronization, and device loss need a plan.</small></article><article><h3>Cloud-synchronized vault</h3><p>Encrypted state supports multi-device access.</p><small>Cloud availability, storage, and metadata become part of the trust boundary.</small></article><div class="claim">A strong practical answer—yet still a storage design centered on reusable website credentials.</div></div></div>

  problem-local-cloud-managers:
    navLabel: Vault models
    sectionKey: problem
    sectionLabel: Problem
    kicker: Detail · Password managers
    title: Local and cloud vaults move the operational boundary
    body: |
      <div class="split"><article class="detail-card"><h3>Local</h3><p>Device-held state; explicit backup and migration.</p></article><article class="detail-card"><h3>Cloud</h3><p>Remote encrypted state; explicit availability and metadata boundary.</p></article></div>

  problem-research-question:
    navLabel: Research question
    sectionKey: problem
    sectionLabel: Problem
    kicker: Research question
    title: A different design point
    body: |
      <div class="question-stage"><p>Can one memorable password support many services without giving every login server the password—or keeping reusable website passwords as the user’s primary local credential state?</p><strong>Single Password Authentication <span>(SPA)</span></strong></div>

  lineage-overview:
    navLabel: Research lineage
    sectionKey: lineage
    sectionLabel: SPA lineage
    kicker: Evolution of SPA
    title: The research line adds one missing capability at a time
    body: |
      <div class="lineage-cards"><article><div class="portrait-row"><img src="assets/tolga-acar.jpg" alt="Tolga Acar"><img src="assets/mira-belenkiy.jpg" alt="Mira Belenkiy"><img src="assets/alptekin-kupcu.jpg" alt="Alptekin Küpçü"></div><b>2013 · Computer Networks</b><h3>SPA</h3><p>Acar¹ · Belenkiy¹ · Küpçü²</p><small>One password, separate helper</small></article><article><div class="portrait-row"><img src="assets/devris-isler.jpg" alt="Devriş İşler"><img src="assets/alptekin-kupcu.jpg" alt="Alptekin Küpçü"></div><b>2017 · DPM</b><h3>TSPA</h3><p>İşler² · Küpçü²</p><small>Threshold-distributed helper</small></article><article><div class="portrait-row"><img src="assets/devris-isler.jpg" alt="Devriş İşler"><img src="assets/reza-saadi.jpg" alt="Reza Saadi"><img src="assets/alptekin-kupcu.jpg" alt="Alptekin Küpçü"></div><b>2026 · ePrint 2026/784; WPES submitted</b><h3>UpSPA</h3><p>İşler³ · Saadi² · Küpçü²</p><small>Native secret and password updates</small></article><article><div class="portrait-row"><img src="assets/reza-saadi.jpg" alt="Reza Saadi"><img src="assets/devris-isler.jpg" alt="Devriş İşler"><img src="assets/alptekin-kupcu.jpg" alt="Alptekin Küpçü"></div><b>2026 · TOPS submitted manuscript</b><h3>RoUpSPA</h3><p>Saadi² · İşler³ · Küpçü²</p><small>Quorum completion and stale repair</small></article></div><div class="affiliation-footnote">(1) Microsoft, (2) Koç University, (3) IMDEA Institute.</div>

  lineage-spa:
    navLabel: SPA
    sectionKey: lineage
    sectionLabel: SPA lineage
    kicker: Evolution of SPA
    title: SPA separates the password from the login server
    body: |
      <div class="protocol-columns"><article><b>Register</b><span>User</span><i>password-protected helper state</i><span>Storage provider</span><i>high-entropy verifier</i><span>Login server</span></article><article class="center-principle"><strong>pwd</strong><p>recovers</p><strong>high-entropy service material</strong></article><article><b>Authenticate</b><span>User</span><i>recover service secret</i><span>Storage provider</span><i>authenticate without pwd</i><span>Login server</span></article></div><div class="claim danger">Trust boundary: the intended offline-guessing protection assumes the login server and helper do not collude.</div>

  lineage-tspa:
    navLabel: TSPA
    sectionKey: lineage
    sectionLabel: SPA lineage
    kicker: Evolution of SPA
    title: TSPA distributes the helper role
    body: |
      <div class="protocol-columns"><article><b>Register</b><span>User</span><i>split secret + provider-specific OPRF protection</i><span>Storage providers</span><i>service verifier</i><span>Login server</span></article><article class="center-principle"><strong>t<sub>sp</sub> of n<sub>sp</sub></strong><p>threshold recovery</p><strong>OPRF-based protection</strong></article><article><b>Authenticate</b><span>User</span><i>collect threshold contributions</i><span>Storage providers</span><i>reconstruct service credential</i><span>Login server</span></article></div><div class="claim">TSPA covers registration and authentication—not the native update lifecycle developed in this thesis.</div>

  lineage-gap-and-thesis:
    navLabel: Thesis gap
    sectionKey: lineage
    sectionLabel: SPA lineage
    kicker: Evolution of SPA
    title: The missing piece is a credential lifecycle
    body: |
      <div class="evolution-grid"><article><b>SPA / TSPA</b><div><span>Registration</span><i></i><span>Authentication</span></div><p>Credential creation and use</p></article><article><b>UpSPA</b><div><span>Setup</span><i></i><span>Registration</span><i></i><span>Authentication</span></div><div><span>Secret update</span><i></i><span>Password update</span></div><p>Native secret and password updateability</p></article><article><b>RoUpSPA</b><div><span>Quorum completion</span><i></i><span>Versioned replicas</span><i></i><span>Repair</span></div><p>Partial availability and recovery</p></article></div>

  upspa-overview:
    navLabel: UpSPA overview
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: UpSPA
    title: UpSPA turns threshold SPA into a five-phase framework
    body: |
      <div class="phase-ribbon"><span>Setup</span><i></i><span>Registration</span><i></i><span>Authentication</span><i></i><span>Secret update</span><i></i><span>Password update</span></div><div class="three-col feature-cards"><article><b>One remembered password</b><p>Threshold providers help derive a root-opening key.</p></article><article><b>Independent accounts</b><p>Each login server receives only a domain-bound high-entropy verifier.</p></article><article><b>Two update scopes</b><p>Rotate one service secret or replace the master password without rewriting every account.</p></article></div><div class="equation-box center">Verifier at \\(LS_j\\): \\(vInfo_j = H(R_{ls_j} \\mathbin{\\|} ls_j)\\)</div>

  upspa-parties:
    navLabel: Roles
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: Detail · UpSPA
    title: Three roles separate recovery from service authentication
    body: |
      <div class="three-col feature-cards"><article><b>User</b><p>Knows \\(pwd\\), opens encrypted state, and authorizes updates.</p></article><article><b>Storage providers</b><p>Hold TOPRF shares and encrypted identification/account records.</p></article><article><b>Login server</b><p>Stores only the service verifier and validates the recovered service secret.</p></article></div>

  upspa-two-layer-state:
    navLabel: Two-layer state
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: UpSPA · State design
    title: A compact master record unlocks independent account records
    body: |
      <div class="state-tree"><article><b>Identification / master record</b><strong>\\(c_{id} \\leftarrow Enc_{F_K(pwd)}(ssk \\mathbin{\\|} R_{sp} \\mathbin{\\|} K_0)\\)</strong><small>Password-dependent opening; the UpSPA identification record has no counter.</small></article><i></i><div><article><b>Account \\(LS_1\\)</b><strong>\\(c_1 \\leftarrow Enc_{K_0}(R_{ls_1} \\mathbin{\\|} ctr_{ac})\\)</strong></article><article><b>Account \\(LS_2\\)</b><strong>\\(c_2 \\leftarrow Enc_{K_0}(R_{ls_2} \\mathbin{\\|} ctr_{ac})\\)</strong></article><article><b>Account \\(LS_j\\)</b><strong>\\(c_j \\leftarrow Enc_{K_0}(R_{ls_j} \\mathbin{\\|} ctr_{ac})\\)</strong></article></div></div>

  upspa-lifecycle:
    navLabel: Lifecycle map
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: Detail · UpSPA
    title: Read and update phases share one identification step
    body: |
      <div class="phase-ribbon compact"><span>Identification</span><i></i><span>Register</span><span>Authenticate</span><span>Secret update</span><span>Password update</span></div>

  upspa-setup:
    navLabel: Setup
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: UpSPA · Setup
    title: Setup creates the threshold root at every provider
    body: |
      <div class="numbered-flow seven"><article><b>1</b><span>Sample \\(R_{sp}\\)</span></article><article><b>2</b><span>\\((K,\\{k_i\\}) \\leftarrow TOPRFGen\\)</span></article><article><b>3</b><span>\\((ssk,svk) \\leftarrow SignKeyGen\\)</span></article><article><b>4</b><span>\\(K_0 \\leftarrow KeyGen\\)</span></article><article><b>5</b><span>\\(c_{id} \\leftarrow Enc_{F_K(pwd)}(ssk\\|R_{sp}\\|K_0)\\)</span></article><article><b>6</b><span>Send \\(\\langle uid,svk,c_{id},k_i\\rangle\\) to \\(SP_i\\)</span></article><article><b>7</b><span>Accept only after \\(OK\\) from all \\(n_{sp}\\)</span></article></div><div class="notation-strip"><span>\\(R_{sp}\\) hidden routing secret</span><span>\\(ssk/svk\\) update authorization</span><span>\\(K_0\\) account key</span><span>\\(k_i\\) TOPRF share</span></div>

  upspa-toprf-interaction:
    navLabel: TOPRF interaction
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: UpSPA · Reusable primitive
    title: Threshold OPRF opens the master record without revealing the password
    body: |
      <div class="toprf-flow"><article><b>1 · Blind</b><p>User blinds \\(pwd\\) for each selected provider.</p></article><i></i><article><b>2 · Evaluate</b><p>Each \\(SP_i\\) evaluates with share \\(k_i\\).</p></article><i></i><article><b>3 · Combine</b><p>User combines at least \\(t_{sp}\\) valid contributions.</p></article><i></i><article><b>4 · Derive</b><p>User obtains \\(F_K(pwd)\\) and opens \\(c_{id}\\).</p></article></div><div class="three-col feature-cards compact"><article><b>Password privacy</b><p>Providers do not learn \\(pwd\\).</p></article><article><b>Output privacy</b><p>No individual provider learns the final output.</p></article><article><b>Threshold</b><p>Fewer than \\(t_{sp}\\) contributions are insufficient.</p></article></div><p class="small center">Explanatory abstraction; the security proof uses the TOPRF PRF and receiver-input-obliviousness properties.</p>

  upspa-identification:
    navLabel: Identification
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: UpSPA · Reusable opening step
    title: Identification recovers the compact root—or fails safely
    body: |
      <div class="split-60"><div class="numbered-flow vertical"><article><b>1</b><span>Request the \\(uid\\)-indexed setup record.</span></article><article><b>2</b><span>Collect at least \\(t_{sp}\\) valid provider responses.</span></article><article><b>3</b><span>Run TOPRF on \\(pwd\\) to derive \\(F_K(pwd)\\).</span></article><article><b>4</b><span>Decrypt \\(c_{id}\\) to recover \\(ssk,R_{sp},K_0\\).</span></article></div><div class="failure-panel"><h3>Safe failure</h3><p>Wrong password, fewer than \\(t_{sp}\\) valid responses, or failed authenticated decryption stops the phase.</p><strong>No account write · no login-server request · no partial success</strong></div></div>

  upspa-registration:
    navLabel: Registration
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: UpSPA · Registration
    title: Registration binds one fresh service secret to a hidden account family
    body: |
      <div class="phase-blueprint"><header><b>Identification</b><span>Recover \\(ssk,R_{sp},K_0\\)</span></header><div><article><b>Account derivation</b><p>\\(SUid_{l,i,j}=H(R_{sp}\\|ls_j\\|i)\\); sample \\(R_{ls_j}\\); set \\(ctr_{ac}=0\\); encrypt the account record.</p></article><article><b>Provider staging</b><p>All \\(n_{sp}\\) providers accept the new account record as pending.</p></article><article><b>Login-server authorization</b><p>Register \\(vInfo_j=H(R_{ls_j}\\|ls_j)\\) at \\(LS_j\\).</p></article><article><b>Terminal decision</b><p>Map the login-server result to provider \\(Store/Discard\\).</p></article></div></div>

  upspa-authentication:
    navLabel: Authentication
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: UpSPA · Authentication
    title: Authentication reconstructs the service credential without sending the
      password
    body: |
      <div class="phase-blueprint"><header><b>Identification</b><span>Open \\(c_{id}\\) with \\(t_{sp}\\) valid TOPRF responses</span></header><div><article><b>Derive</b><p>Compute provider-specific \\(SUid_{l,i,j}\\).</p></article><article><b>Read</b><p>Fetch committed \\(c_j\\) values and select the valid maximum \\(ctr_{ac}\\).</p></article><article><b>Verify locally</b><p>Decrypt \\(R_{ls_j}\\) and compute \\(vInfo'_j=H(R_{ls_j}\\|ls_j)\\).</p></article><article><b>Authenticate</b><p>Send \\(\\langle uid,vInfo'_j\\rangle\\) to \\(LS_j\\).</p></article></div></div><div class="claim">Read-only path: no provider write, no \\(Store/Discard\\), and no synchronization.</div>

  upspa-secret-update:
    navLabel: Secret update
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: UpSPA · Secret update
    title: Secret update rotates one login-server credential
    body: |
      <div class="phase-blueprint"><header><b>Identification</b><span>Recover the current master state</span></header><div><article><b>Read current account</b><p>Derive account identifiers, decrypt committed records, and select maximum \\(ctr_{ac}\\).</p></article><article><b>Create replacement</b><p>Sample \\(R_{ls_j,new}\\), increment the counter, and encrypt \\(c'_j\\).</p></article><article><b>Authorize at \\(LS_j\\)</b><p>Present old and new verifiers so the login server can validate the transition.</p></article><article><b>Finalize providers</b><p>After all \\(n_{sp}\\) pending acknowledgements, map the LS result to \\(Store/Discard\\).</p></article></div></div><div class="claim">Only account \\(j\\) changes; the password and other account records remain unchanged.</div>

  upspa-password-update:
    navLabel: Password update
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: UpSPA · Password update
    title: Password update rewraps the compact root—not every account
    body: |
      <div class="phase-blueprint"><header><b>Identification</b><span>Recover current \\(ssk,R_{sp},K_0\\)</span></header><div><article><b>Fresh threshold material</b><p>Generate \\((K_{new},\\{k_{i,new}\\})\\).</p></article><article><b>Re-encrypt root</b><p>\\(c_{id,new}=Enc_{F_{K_{new}}(pwd_{new})}(ssk\\|R_{sp}\\|K_0)\\).</p></article><article><b>Authorize per provider</b><p>Sign the exact replacement tuple containing \\(uid,c_{id,new},k_{i,new},time,i\\).</p></article><article><b>Finalize</b><p>All \\(n_{sp}\\) providers validate freshness/signature, then receive \\(Store/Discard\\).</p></article></div></div><div class="claim">No login server participates; \\(K_0\\), all account ciphertexts, and all login-server verifiers remain unchanged.</div>

  upspa-two-updates:
    navLabel: Two update scopes
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: UpSPA · Update scope
    title: Secret update and password update rotate different layers
    body: |
      <table class="status-table update-table"><thead><tr><th></th><th>Secret update</th><th>Password update</th></tr></thead><tbody><tr><td>Changes</td><td>One \\(R_{ls_j}\\), \\(vInfo_j\\), \\(c_j\\), \\(ctr_{ac}\\)</td><td>TOPRF key/shares and \\(c_{id}\\)</td></tr><tr><td>Unchanged</td><td>\\(pwd\\), \\(c_{id}\\), \\(R_{sp}\\), \\(K_0\\); all other account records</td><td>\\(R_{sp}\\), \\(K_0\\), every \\(c_j\\), every \\(vInfo_j\\)</td></tr><tr><td>Login server</td><td>One \\(LS_j\\)</td><td>None</td></tr><tr><td>Provider completion</td><td>All \\(n_{sp}\\)</td><td>All \\(n_{sp}\\)</td></tr></tbody></table>

  upspa-threat-model:
    navLabel: Threat model
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: UpSPA · Security boundary
    title: Security tolerates fewer than \\(t_{sp}\\) corrupted providers
    body: |
      <div class="boundary-grid"><article><b>Adversary</b><p>Static, non-uniform PPT malicious adversary.</p></article><article><b>Corruption</b><p>At most \\(t_{sp}-1\\) storage providers, \\(n_{ls}-1\\) login servers, and \\(n_{user}-1\\) users.</p></article><article><b>Channels and time</b><p>Authenticated server channels, synchronous bounded delay, and password-update timestamp assumptions.</p></article><article><b>Availability</b><p>Authentication needs \\(t_{sp}\\) valid responses; state-changing phases require all \\(n_{sp}\\).</p></article><article><b>Password claim</b><p>The view adds no new offline-verification predicate; it does not make a human password guess negligible.</p></article><article><b>Excluded</b><p>Compromised endpoints, anonymity, traffic-analysis resistance, recovery, and adaptive/mobile corruption.</p></article></div>

  upspa-design-challenges:
    navLabel: Design challenges
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: UpSPA · Design obligations
    title: Updates add binding and consistency obligations
    body: |
      <div class="challenge-grid"><article><b>Hide password-dependent values</b><p>TOPRF plus authenticated encryption</p></article><article><b>Separate service accounts</b><p>Hidden \\(R_{sp}\\) routing and domain binding</p></article><article><b>Authorize replacements</b><p>Signatures, authenticated encryption, and freshness checks</p></article><article><b>Preserve one committed outcome</b><p>Pending/committed state and explicit terminal decisions</p></article></div><div class="warning-box"><strong>Scope precision.</strong> Collision resistance supplies binding; hidden-namespace prediction requires hidden-input output unpredictability.</div>

  upspa-security:
    navLabel: Security proof
    sectionKey: upspa
    sectionLabel: UpSPA
    kicker: UpSPA · Real/ideal proof
    title: The UpSPA proof replaces protected values one layer at a time
    body: |
      <div class="game-track"><article><b>G₀</b><span>Stopped real execution</span></article><i></i><article><b>G₁</b><span>Replace TOPRF outputs/transcripts</span></article><i></i><article><b>G₂</b><span>Replace identification plaintexts</span></article><i></i><article><b>G₃</b><span>Replace account plaintexts</span></article><i></i><article><b>G₄</b><span>Ideal \\(\\mathcal F_{UpSPA}\\) + simulator</span></article></div><div class="proof-pillars"><span>TOPRF PRF + RIO</span><span>AE IND-CPA + integrity + key binding</span><span>EUF-CMA signatures</span><span>Collision-resistant hash</span></div><p class="small center">Bad events are bounded first; complete hybrids and the final advantage bound are attached below this slide.</p>

  roupspa-motivation:
    navLabel: Why resilience?
    sectionKey: roupspa
    sectionLabel: RoUpSPA
    kicker: RoUpSPA · Motivation
    title: One unavailable provider blocks every UpSPA update
    body: |
      <div class="failure-to-resilience"><article><b>UpSPA baseline</b><p>State-changing phases wait for all \\(n_{sp}\\) providers.</p><strong>one outage → blocked update</strong></article><i></i><article><b>RoUpSPA objective</b><p>Complete with a durable quorum, identify stale replicas, and repair them before they serve ordinary requests.</p><strong>partial availability → bounded progress</strong></article></div>

  roupspa-what-changes:
    navLabel: What changes
    sectionKey: roupspa
    sectionLabel: RoUpSPA
    kicker: RoUpSPA · State layer
    title: RoUpSPA adds versioned replicas—not a new password primitive
    body: |
      <div class="delta-grid"><article><b>Shared account family</b><p>\\(SUid_{l,j}=H(R_{sp}\\|ls_j)\\)</p></article><article><b>Signed records</b><p>Account and identification writes bind ciphertexts to exact counters.</p></article><article><b>Version counters</b><p>\\(ctr_{ac}\\) and \\(ctr_{id}\\) order accepted state.</p></article><article><b>Replica state</b><p>CURRENT/TENTATIVE and ACTIVE/STALE distinguish readable from repair-required state.</p></article><article><b>Quorum completion</b><p>Durable writes require \\(q_{sp}\\), not all \\(n_{sp}\\).</p></article><article><b>Synchronization</b><p>Stale providers recover the unique freshest signed ciphertext.</p></article></div>

  roupspa-threshold-quorum:
    navLabel: Threshold vs quorum
    sectionKey: roupspa
    sectionLabel: RoUpSPA
    kicker: RoUpSPA · Parameters
    title: Authentication threshold and storage quorum serve different purposes
    body: |
      <div class="thresholds"><article class="threshold crypto"><span class="symbol">\\(t_{sp}\\)</span><h3>Cryptographic threshold</h3><p>Enough valid TOPRF/read responses; bounds provider corruption.</p></article><article class="threshold quorum"><span class="symbol">\\(q_{sp}\\)</span><h3>Availability quorum</h3><p>Enough durable writes or synchronization responses.</p></article></div><div class="equation-box center">\\[n_{sp}\\ge q_{sp}\\ge t_{sp}>\\frac{n_{sp}}2,\\qquad 2q_{sp}-n_{sp}>t_{sp}-1\\]</div>

  roupspa-quorum-intersection:
    navLabel: Quorum intersection
    sectionKey: roupspa
    sectionLabel: RoUpSPA
    kicker: RoUpSPA · Safety
    title: A completed write meets a later quorum in an honest holder
    body: |
      <div class="intersection-layout"><div class="venn"><span>W</span><span>R</span><strong>honest<br>witness</strong></div><div><div class="equation-box">\\[|W\\cap R|\\ge 2q_{sp}-n_{sp}>t_{sp}-1\\]</div><ol><li>\\(W\\): providers holding the latest completed record.</li><li>\\(R\\): a later valid read/synchronization quorum.</li><li>The intersection contains an honest provider.</li><li>Signatures, counters, and maximum selection preserve the newest acceptable record.</li></ol></div></div><div class="warning-box"><strong>Completion caveat.</strong> The proof requires the completed record to be durably processed by \\(q_{sp}\\) providers—not merely a terminal message being sent.</div>

  roupspa-phase-semantics:
    navLabel: Phase semantics
    sectionKey: roupspa
    sectionLabel: RoUpSPA
    kicker: RoUpSPA · Completion contract
    title: Prepare, durable quorum, then a terminal decision
    body: |
      <div class="semantics-track"><article><b>1 · LS Prepare</b><p>Validate the old/new verifier transition before provider writes.</p></article><i></i><article><b>2 · Tentative write</b><p>Providers validate authorization and retain current state.</p></article><i></i><article><b>3 · \\(q_{sp}\\) durable acknowledgements</b><p>Enough matching records are installed.</p></article><i></i><article><b>4 · Store / Discard</b><p>Terminal message; no invented login-server acknowledgement.</p></article></div><div class="warning-box"><strong>Interrupted boundary.</strong> Withholding, timeout, or partial delivery may stop progress and leave replicas stale; RoUpSPA is not a general distributed transaction system.</div>

  roupspa-read-and-authentication:
    navLabel: Active reads
    sectionKey: roupspa
    sectionLabel: RoUpSPA
    kicker: Detail · RoUpSPA
    title: Authentication reads active replicas and performs no repair
    body: |
      <div class="three-col feature-cards"><article><b>ACTIVE only</b><p>Collect at least \\(t_{sp}\\) valid responses.</p></article><article><b>Validate maximum</b><p>Check authenticated encryption and bound counters.</p></article><article><b>Fail closed</b><p>Ties, malformed records, or too few active responses stop authentication.</p></article></div>

  roupspa-synchronization:
    navLabel: Synchronization
    sectionKey: roupspa
    sectionLabel: RoUpSPA
    kicker: Detail · RoUpSPA
    title: Synchronization copies the unique freshest signed ciphertext
    body: |
      <div class="split-60"><img class="recovery-figure" src="assets/roupspa-quorum-recovery.png" alt="Four-panel RoUpSPA quorum recovery illustration"><div><ol><li>Request one record family from a valid quorum.</li><li>Verify signatures and counter bindings.</li><li>Reject lower counters or distinct tied maxima.</li><li>Install the unique valid maximum and mark the family ACTIVE.</li></ol><div class="claim">No password, TOPRF output, plaintext account state, or another provider’s share is copied.</div></div></div>

  roupspa-registration:
    navLabel: Registration
    sectionKey: roupspa
    sectionLabel: RoUpSPA
    kicker: RoUpSPA · Registration
    title: RoUpSPA registration authorizes the account before quorum storage
    body: |
      <div class="phase-blueprint resilient"><header><b>Active identification</b><span>Recover the current root from valid \\(t_{sp}\\) responses</span></header><div><article><b>Create candidate</b><p>Derive shared \\(SUid_{l,j}\\), sample the service secret, set \\(ctr_{ac}=0\\), and sign the exact account record.</p></article><article><b>LS Prepare first</b><p>Ask \\(LS_j\\) to validate the new verifier transition before provider mutation.</p></article><article><b>Durable quorum write</b><p>Collect \\(q_{sp}\\) matching acknowledgements for the signed record.</p></article><article><b>Terminal Store/Discard</b><p>Send the matching decision; no login-server acknowledgement is invented.</p></article></div></div><div class="claim">Providers missing a completed write become STALE for that account family until repair.</div>

  roupspa-secret-update:
    navLabel: Secret update
    sectionKey: roupspa
    sectionLabel: RoUpSPA
    kicker: RoUpSPA · Secret update
    title: RoUpSPA secret update uses LS Prepare before quorum mutation
    body: |
      <div class="phase-blueprint resilient"><header><b>Read current state</b><span>Recover identification and select maximum \\(ctr_{ac}\\)</span></header><div><article><b>Build replacement</b><p>Compute old verifier, sample the new secret, increment \\(ctr_{ac}\\), encrypt and sign the exact account tuple.</p></article><article><b>LS Prepare first</b><p>Validate the old/new verifier transition.</p></article><article><b>Write to quorum</b><p>Obtain \\(q_{sp}\\) durable matching acknowledgements while current state remains readable.</p></article><article><b>Terminal decision</b><p>Send matching \\(Store/Discard\\); lagging providers become STALE.</p></article></div></div>

  roupspa-threat-challenges:
    navLabel: Threat & challenges
    sectionKey: roupspa
    sectionLabel: RoUpSPA
    kicker: RoUpSPA · Threat and design
    title: Resilience adds stale-state and authorization obligations
    body: |
      <div class="split"><div class="boundary-column"><h3>Inherited / extended threat model</h3><ul><li>Static malicious adversary.</li><li>At most \\(t_{sp}-1\\) corrupted providers.</li><li>Unavailable, delayed, or stale honest replicas.</li><li>Authenticated channels and bounded-delay assumptions.</li><li>Honest user and an honest target login server.</li></ul></div><div class="boundary-column"><h3>New design challenges</h3><ul><li>Separate \\(t_{sp}\\) security from \\(q_{sp}\\) availability.</li><li>Authorize shared-namespace writes with signatures.</li><li>Distinguish valid from current using counters/state.</li><li>Repair without plaintext or TOPRF participation.</li><li>State completed-phase safety and conditional liveness precisely.</li></ul></div></div>

  roupspa-threat-and-boundary:
    navLabel: Safety & liveness
    sectionKey: roupspa
    sectionLabel: RoUpSPA
    kicker: RoUpSPA · Claim boundary
    title: Completed-phase safety does not imply unconditional liveness
    body: |
      <div class="safety-liveness"><div class="safety"><h3>Safety</h3><ul><li>Exact signed records and counters authorize changes.</li><li>Quorum intersection preserves an honest witness.</li><li>ACTIVE/STALE state prevents ordinary use of unrepaired families.</li></ul></div><div class="liveness"><h3>Conditional liveness</h3><ul><li>Enough valid \\(t_{sp}\\)/\\(q_{sp}\\) responses.</li><li>Bounded honest-login-server availability when required.</li><li>Withholding, timeout, and excessive failures can stop progress.</li></ul></div></div><div class="claim danger">Not claimed: general BFT consensus, universal crash recovery, or a distributed transaction system.</div>

  roupspa-security:
    navLabel: Security proof
    sectionKey: roupspa
    sectionLabel: RoUpSPA
    kicker: RoUpSPA · Real/ideal proof
    title: The resilient proof separates cryptographic hybrids from quorum lemmas
    body: |
      <div class="game-track"><article><b>G₀</b><span>Stopped real execution</span></article><i></i><article><b>G₁</b><span>TOPRF PRF</span></article><i></i><article><b>G₂</b><span>TOPRF RIO</span></article><i></i><article><b>G₃</b><span>Identification privacy</span></article><i></i><article><b>G₄</b><span>Account privacy</span></article><i></i><article><b>G₅</b><span>Ideal functionality</span></article></div><div class="proof-pillars"><span>BadSig / BadHash / BadCtxt</span><span>Authorized-write lemma</span><span>Active-threshold lemma</span><span>Quorum consistency and recovery</span></div><p class="small center">Quorum intersection, counters, ACTIVE/STALE bookkeeping, and terminal decisions are deterministic obligations; they add no computational advantage term.</p>

  alternatives-pbb:
    navLabel: Public bulletin boards
    sectionKey: alternatives
    sectionLabel: Synchronization alternatives
    kicker: Synchronization alternatives
    title: A public bulletin board trades private quorum repair for public history
    body: |
      <div class="split"><article class="detail-card"><h3>Signed PBB</h3><p>Append signed commitments to a publicly readable history.</p><ul><li>Simple authorization</li><li>Public metadata/history</li><li>No private quorum repair</li></ul></article><article class="detail-card"><h3>DKG-authorized PBB</h3><p>Threshold authorization changes who may append.</p><ul><li>Distributed write authority</li><li>More setup/cryptography</li><li>Same public-history tradeoff</li></ul></article></div>

  alternatives-blockchain-and-choice:
    navLabel: Backend choice
    sectionKey: alternatives
    sectionLabel: Synchronization alternatives
    kicker: Synchronization alternatives
    title: No synchronization backend dominates every deployment objective
    body: |
      <table class="status-table choice-table"><thead><tr><th>Backend</th><th>State visibility</th><th>Write authority</th><th>Recovery model</th></tr></thead><tbody><tr><td>Quorum / ABD-style</td><td>Private replicas</td><td>User-signed record</td><td>Quorum read + repair</td></tr><tr><td>Signed PBB</td><td>Public append history</td><td>User signature</td><td>Read public history</td></tr><tr><td>DKG PBB</td><td>Public append history</td><td>Threshold authorization</td><td>Read public history</td></tr><tr><td>Blockchain</td><td>Ledger-visible commitments</td><td>Contract policy</td><td>Ledger history/finality</td></tr></tbody></table><div class="claim">Selection depends on privacy, availability, governance, persistence, and latency—not only local execution time.</div>

  implementation-architecture-method:
    navLabel: Implementation
    sectionKey: results
    sectionLabel: Implementation & results
    kicker: Implementation and evaluation
    title: One benchmark harness keeps timing boundaries explicit
    body: |
      <div class="architecture"><div class="module client"><strong>Client</strong><span>TOPRF, encryption, signatures, validation</span></div><div class="module"><strong>Storage provider</strong><span>Shares, replicated records, state checks</span></div><div class="module login"><strong>Login server</strong><span>Verifier registration and transitions</span></div><div class="module sync"><strong>Synchronization backend</strong><span>Quorum, PBB, or blockchain mode</span></div></div><div class="method-strip"><span>50 warm-up + 200 measured successful samples</span><span>Rust 1.93 · --locked --release</span><span>medians reported</span><span>LAN/WAN are composed estimates</span></div><div class="warning-box">Provider requests within a stage run in parallel; stages remain sequential. “Modeled stages” are a benchmark schedule, not formal protocol rounds.</div>

  results-upspa-tspa:
    navLabel: UpSPA vs TSPA
    sectionKey: results
    sectionLabel: Implementation & results
    kicker: Results · UpSPA and TSPA
    title: Network stages dominate the deployment grid
    body: |
      <div class="result-story"><div class="stage-bars"><span style="--w:18%">Local cryptography</span><span style="--w:78%">Composed LAN/WAN stages</span></div><div><h3>What the retained figures show</h3><ul><li>At fixed \\(n_{sp}=30\\), all retained client series remain below 1 ms.</li><li>End-to-end modeled latency is driven primarily by sequential network stages.</li><li>Client, provider, and full medians are independently sampled and are not algebraically added.</li></ul></div></div>

  results-threshold-sso-comparison:
    navLabel: Threshold SSO
    sectionKey: results
    sectionLabel: Implementation & results
    kicker: Results · Threshold SSO comparison
    title: Executable cost differs across constructions with different semantics
    body: |
      <div class="scheme-grid"><article><b>UpSPA</b><p>Independent service credentials and explicit secret/password updates.</p></article><article><b>PASTA-U</b><p>Password-based threshold authentication with password update.</p></article><article><b>AugSSO</b><p>Threshold single sign-on with a different functionality and trust architecture.</p></article></div><div class="warning-box"><strong>Comparison boundary.</strong> These are executable-cost comparisons—not claims of identical relying-party, recovery, or liveness semantics.</div>

  results-upspa-roupspa:
    navLabel: UpSPA vs RoUpSPA
    sectionKey: results
    sectionLabel: Implementation & results
    kicker: Results · Availability cost
    title: RoUpSPA adds coordination stages for quorum completion
    body: |
      <table class="status-table stage-table"><thead><tr><th>Phase</th><th>UpSPA benchmark schedule</th><th>RoUpSPA addition</th><th>Expected RTT effect</th></tr></thead><tbody><tr><td>Registration</td><td>Identification → provider stage → LS → finalize</td><td>LS Prepare before quorum write</td><td>Additional sequential coordination</td></tr><tr><td>Secret update</td><td>Read → pending write → LS → finalize</td><td>Prepare + durable \\(q_{sp}\\) write</td><td>More visible under composed LAN</td></tr><tr><td>Password update</td><td>Root read → replacement → finalize</td><td>Version/counter checks + quorum completion</td><td>Coordination dominates local increment</td></tr></tbody></table><p class="small center">Qualitative stage accounting from the benchmark harness; not a statement of formal protocol rounds.</p>

  results-backends:
    navLabel: Backend endpoints
    sectionKey: results
    sectionLabel: Implementation & results
    kicker: Results · Resilient backends
    title: Backend cost depends strongly on phase at \\(n_{sp}=100\\)
    body: |
      <div class="endpoint-chart" aria-label="Complete local median latency in milliseconds"><div class="endpoint-legend"><span>Quorum</span><span>Signed PBB</span><span>DKG PBB</span><span>Chain</span></div><article><b>Registration</b><i style="--v:12.8%">3.723</i><i style="--v:13.3%">3.869</i><i style="--v:16.3%">4.750</i><i style="--v:23.1%">6.737</i></article><article><b>Secret update</b><i style="--v:38.5%">11.241</i><i style="--v:13.2%">3.852</i><i style="--v:16.6%">4.852</i><i style="--v:23.5%">6.855</i></article><article><b>Password update</b><i style="--v:100%">29.176</i><i style="--v:28.3%">8.254</i><i style="--v:28.2%">8.220</i><i style="--v:29.5%">8.610</i></article></div><p class="small center">Complete local p50, ms · \\(q_{sp}=\\lceil0.8n_{sp}\\rceil\\). “Chain” is the shared local execution series; public/L2/permissioned differ outside this local boundary.</p>

  results-key-takeaways:
    navLabel: Engineering takeaways
    sectionKey: results
    sectionLabel: Implementation & results
    kicker: Results · Bounded conclusions
    title: The evidence supports three engineering conclusions
    body: |
      <div class="takeaway-list"><div class="takeaway-item"><p><strong>Local cryptography is small</strong> across the retained UpSPA/TSPA client grid.</p></div><div class="takeaway-item"><p><strong>Sequential coordination is visible</strong> once LAN/WAN schedules are composed.</p></div><div class="takeaway-item"><p><strong>Backend choice is phase-sensitive</strong>; quorum password update diverges most at \\(n_{sp}=100\\).</p></div><div class="takeaway-item"><p><strong>Evidence classes stay separate</strong>: Rust latency, EVM receipts, Foundry snapshots, and pending TRON measurements are not pooled.</p></div></div>

  conclusion-contributions:
    navLabel: Contributions
    sectionKey: conclusion
    sectionLabel: Conclusions
    kicker: Conclusions
    title: The thesis contributes a lifecycle, a resilience layer, and evidence
    body: |
      <div class="contribution-path"><div class="contribution" data-n="01"><strong>Two-layer state</strong><span>Compact password-protected identification state plus independent accounts</span></div><div class="contribution" data-n="02"><strong>Native updates</strong><span>Rotate one service secret or the password</span></div><div class="contribution" data-n="03"><strong>Quorum resilience</strong><span>Versioned signed replicas and stale repair</span></div><div class="contribution" data-n="04"><strong>Formal analysis</strong><span>Real/ideal hybrids plus quorum lemmas</span></div><div class="contribution" data-n="05"><strong>Implementation</strong><span>Traceable, bounded comparisons</span></div></div>

  conclusion-limitations-future:
    navLabel: Limits & future work
    sectionKey: conclusion
    sectionLabel: Conclusions
    kicker: Conclusions
    title: The next work is adaptive, deployable, and failure-aware
    body: |
      <div class="limit-future"><div class="limits"><h3>Current boundary</h3><ul><li>Static corruption and trusted endpoints</li><li>Conditional synchrony and availability</li><li>Interrupted finalization remains explicit</li><li>In-memory provider persistence in Rust benchmarks</li></ul></div><div class="future"><h3>Next work</h3><ul><li>Adaptive/mobile corruption</li><li>Crash-safe durable implementation</li><li>Provider replacement and recovery</li><li>Deployed multi-region measurement</li></ul></div></div>

  conclusion-publications:
    navLabel: Publications
    sectionKey: conclusion
    sectionLabel: Conclusions
    kicker: Research outputs
    title: The thesis is represented by public and submitted manuscripts
    body: |
      <div class="publication-list"><div class="publication"><span class="pub-num">1</span><div><strong>Secure and Updatable Single Password Authentication</strong><span>Devriş İşler, Reza Saadi, Alptekin Küpçü</span></div><em>Cryptology ePrint 2026/784 · public preprint</em></div><div class="publication"><span class="pub-num">2</span><div><strong>Secure and Updatable Single Password Authentication</strong><span>Workshop version</span></div><em>ACM WPES 2026 · submitted</em></div><div class="publication"><span class="pub-num">3</span><div><strong>Robust Updatable Single Password Authentication</strong><span>Reza Saadi, Devriş İşler, Alptekin Küpçü</span></div><em>ACM TOPS · submitted manuscript</em></div></div>

  academic-genealogy:
    navLabel: Academic genealogy
    sectionKey: genealogy
    sectionLabel: Genealogy
    layout: genealogy
    kicker: Academic genealogy
    title: Candidate → advisor → advisor’s advisor
    lead: Rendered from presentation.config.yaml; incomplete fields remain visibly
      marked rather than guessed.

  thank-you:
    navLabel: Q&A
    sectionKey: questions
    sectionLabel: Q&A
    layout: raw
    body: |
      <div class="slide-shell closing-stage"><div><div class="section-kicker">MSc thesis defense</div><p>Secure Single Password Authentication Protocols in Distributed Systems</p><h2>Questions?</h2><strong>{{config.presenterDisplayName}}</strong><span>{{config.institution}} · {{config.defenseDate}}</span></div></div>

  backup-upspa-proof-g0-g1:
    navLabel: G0 → G1
    kicker: Aux · UpSPA proof
    title: "G₀ to G₁: stop on bad events, then replace TOPRF views"
    body: |
      <div class="split"><div><h3>G₀</h3><p>Real execution stopped on BadSig, BadHash, BadCtxt, or key-binding failure.</p><div class="claim">Stopping changes the view by at most the explicit bad-event bound.</div></div><div><h3>G₁</h3><p>Replace honest TOPRF outputs with random-function values and simulate honest-receiver transcripts.</p><div class="equation-box">Transition: TOPRF PRF + receiver-input obliviousness.</div></div></div>

  backup-upspa-proof-g2-g3:
    navLabel: G2 → G3
    kicker: Aux · UpSPA proof
    title: "G₂ and G₃: hide identification, then account plaintexts"
    body: |
      <div class="split"><article class="detail-card"><h3>G₂ · Identification</h3><p>Replace \\(ssk\\|R_{sp}\\|K_0\\) inside honest \\(c_{id}\\) encryptions with fixed-length dummy plaintexts.</p><strong>AE IND-CPA transition</strong></article><article class="detail-card"><h3>G₃ · Accounts</h3><p>Replace \\(R_{ls_j}\\|ctr_{ac}\\) inside honest account ciphertexts with fixed-length dummy plaintexts.</p><strong>AE IND-CPA transition</strong></article></div>

  backup-upspa-proof-g4-terminal:
    navLabel: G4 & equivalence
    kicker: Aux · UpSPA proof
    title: G₄ is the simulator’s ideal view
    body: |
      <div class="three-col feature-cards"><article><b>Logical tables</b><p>Simulator tracks root/account records and completed phase outputs.</p></article><article><b>Local protocol state</b><p>Pending/committed mechanics remain inside the simulator.</p></article><article><b>Terminal equivalence</b><p>After bad events are excluded, the environment sees the same completed outcomes as \\(\\mathcal F_{UpSPA}\\).</p></article></div><div class="claim">The ideal functionality records only the logical result of a completed phase—not partial provider state.</div>

  backup-upspa-password-scope:
    navLabel: Password-security scope
    kicker: Aux · UpSPA proof
    title: What the password-security claim does—and does not—say
    body: |
      <div class="split"><article class="detail-card"><h3>Claimed</h3><p>The adversarial view adds no new offline verification predicate beyond the allowed corruption boundary and ideal leakage.</p></article><article class="detail-card"><h3>Not claimed</h3><p>A low-entropy human password does not become uniformly random or negligible to guess; endpoint compromise is excluded.</p></article></div>

  backup-roupspa-proof-g0-g2:
    navLabel: G0 → G2
    kicker: Aux · RoUpSPA proof
    title: "G₀ to G₂: bad events, TOPRF PRF, and RIO"
    body: |
      <div class="game-track"><article><b>G₀</b><span>Stop on BadSig, BadHash, BadCtxt</span></article><i></i><article><b>G₁</b><span>Replace TOPRF function outputs</span></article><i></i><article><b>G₂</b><span>Simulate honest-receiver transcripts</span></article></div><div class="proof-pillars"><span>EUF-CMA</span><span>hash collision resistance</span><span>AE integrity/key binding</span><span>TOPRF PRF + RIO</span></div>

  backup-roupspa-proof-g3-g5:
    navLabel: G3 → G5
    kicker: Aux · RoUpSPA proof
    title: "G₃ to G₅: encryptions become dummy state, then ideal state"
    body: |
      <div class="three-col feature-cards"><article><b>G₃</b><p>Replace honest identification plaintexts under AE IND-CPA.</p></article><article><b>G₄</b><p>Replace honest account plaintexts under AE IND-CPA.</p></article><article><b>G₅</b><p>Run the ideal functionality plus simulator over logical completed state.</p></article></div>

  backup-roupspa-terminal-equivalence:
    navLabel: Terminal equivalence
    kicker: Aux · RoUpSPA proof
    title: Terminal decisions and stale bookkeeping remain simulator-local
    body: |
      <div class="boundary-grid"><article><b>Exact retransmission</b><p>Idempotent for the same signed tuple.</p></article><article><b>Store</b><p>Promotes the matching tentative record.</p></article><article><b>Discard</b><p>Removes only the matching tentative state.</p></article><article><b>Missed completion</b><p>Replica becomes STALE for that record family.</p></article><article><b>Ordinary read</b><p>Never returns tentative or stale state.</p></article><article><b>Ideal success</b><p>Only the protocol-defined completed logical outcome is exposed.</p></article></div>

  backup-roupspa-liveness-scope:
    navLabel: Liveness scope
    kicker: Aux · RoUpSPA proof
    title: RoUpSPA liveness is conditional—not consensus liveness
    body: |
      <div class="split"><article class="detail-card"><h3>Needed for progress</h3><ul><li>\\(t_{sp}\\) valid active reads</li><li>\\(q_{sp}\\) durable write responses</li><li>bounded honest-LS response where required</li><li>eventual delivery for terminal decisions/repair</li></ul></article><article class="detail-card"><h3>Outside the claim</h3><ul><li>arbitrary network partitions</li><li>unbounded provider failure</li><li>general BFT consensus</li><li>cross-family distributed transactions</li></ul></article></div>

  backup-upspa-source-figures:
    navLabel: Source figures
    kicker: Aux · UpSPA source figures
    title: Numbered UpSPA protocol figures from the supplied source set
    body: |
      <div class="source-figure-grid"><figure><img src="assets/upspa-setup-source.png" alt="Source figure for UpSPA setup"><figcaption>Setup</figcaption></figure><figure><img src="assets/upspa-registration-source.png" alt="Source figure for UpSPA registration"><figcaption>Registration</figcaption></figure><figure><img src="assets/upspa-authentication-source.png" alt="Source figure for UpSPA authentication"><figcaption>Authentication</figcaption></figure><figure><img src="assets/upspa-secret-update-source.png" alt="Source figure for UpSPA secret update"><figcaption>Secret update</figcaption></figure><figure><img src="assets/upspa-password-update-source.png" alt="Source figure for UpSPA password update"><figcaption>Password update</figcaption></figure></div>

  backup-roupspa-source-figures:
    navLabel: Source figures
    kicker: Aux · RoUpSPA source figures
    title: Numbered RoUpSPA protocol figures from the supplied source set
    body: |
      <div class="source-figure-grid"><figure><img src="assets/roupspa-setup-source.png" alt="Source figure for RoUpSPA setup"><figcaption>Setup</figcaption></figure><figure><img src="assets/roupspa-registration-source.png" alt="Source figure for RoUpSPA registration"><figcaption>Registration</figcaption></figure><figure><img src="assets/roupspa-authentication-source.png" alt="Source figure for RoUpSPA authentication"><figcaption>Authentication</figcaption></figure><figure><img src="assets/roupspa-secret-update-source.png" alt="Source figure for RoUpSPA secret update"><figcaption>Secret update</figcaption></figure><figure><img src="assets/roupspa-password-update-source.png" alt="Source figure for RoUpSPA password update"><figcaption>Password update</figcaption></figure></div>
`,Ml=`title: "Secure Single Password Authentication Protocols in Distributed Systems"
presenterFormalName: "Reza Saadi"
presenterDisplayName: "Reza Saadi"
advisor: "Prof. Alptekin Küpçü"
institution: "Koç University"
program: "Computer Science and Engineering"
defenseDate: "12 August 2026"
durationMinutes: 40
logoPath: "source-material/thesis/logo.png"
showPublicationsSlide: true
showEvmGasInCoreRoute: true
showJuryOnTitle: false

genealogy:
  - name: "Reza Saadi"
    role: "MSc Candidate"
    institution: "Koç University"
    photo: "assets/reza-saadi.jpg"
  - name: "Prof. Alptekin Küpçü"
    role: "Advisor"
    institution: "Koç University"
    photo: "assets/alptekin-kupcu.jpg"

links:
  thesis: null
  eprint: "https://eprint.iacr.org/2026/784"
  sourceCode: "https://github.com/rezasaadi/UpSpa_benchmark"
  contact: null
`,Kl={protocol:"\\mathsf{UpSPA}",RoUpSPA:"\\mathsf{RoUpSPA}",U:"\\mathsf{U}",SP:"\\mathsf{SP}",SPi:"\\mathsf{SP}_i",LS:"\\mathsf{LS}",LSj:"\\mathsf{LS}_j",uid:"\\mathsf{Uid}",pwd:"\\mathsf{pwd}",newpwd:"\\mathsf{pwd}_{\\mathrm{new}}",nsp:"n_{\\mathrm{sp}}",tsp:"t_{\\mathrm{sp}}",qsp:"q_{\\mathrm{sp}}",Rsp:"R_{\\mathrm{sp}}",Rlsj:"R_{\\mathsf{ls}_j}",newRls:"R_{\\mathsf{ls}_j}^{\\prime}",FK:"K_0",ssk:"\\mathsf{ssk}",svk:"\\mathsf{svk}",cipherid:"c_{\\mathrm{id}}",newcipherid:"c_{\\mathrm{id}}^{\\prime}",ciphersp:"c_j",newciphersp:"c_j^{\\prime}",ctrid:"\\mathsf{ctr}_{\\mathrm{id}}",ctrac:"\\mathsf{ctr}_{\\mathrm{ac}}",suidlj:"\\mathsf{SUid}_{l,j}",suidlij:"\\mathsf{SUid}_{l,i,j}",vinfo:"\\mathsf{vInfo}_j",newvinfo:"\\mathsf{vInfo}_j^{\\prime}",hash:"H",Enc:"\\operatorname{Enc}",Dec:"\\operatorname{Dec}",Sign:"\\operatorname{Sign}",SignVerify:"\\operatorname{SignVerify}",TOPRF:"\\mathsf{TOPRF}",REAL:"\\operatorname{REAL}",IDEAL:"\\operatorname{IDEAL}",Sim:"\\mathsf{Sim}",FUpSPA:"\\mathcal{F}_{\\mathsf{UpSPA}}",initok:"\\mathsf{success}",fail:"\\mathsf{fail}"},xe=(n="")=>String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");function ht(){return""}function tn(n){return`<div class="section-kicker">${n}</div>`}function is(n,e=""){const t={user:'<circle cx="32" cy="23" r="12"/><path d="M11 58c3-15 11-22 21-22s18 7 21 22"/>',lock:'<rect x="13" y="28" width="38" height="29" rx="5"/><path d="M22 28v-8a10 10 0 0 1 20 0v8"/><circle cx="32" cy="42" r="3"/><path d="M32 45v6"/>',server:'<rect x="8" y="10" width="48" height="14" rx="3"/><rect x="8" y="27" width="48" height="14" rx="3"/><rect x="8" y="44" width="48" height="14" rx="3"/><circle cx="17" cy="17" r="2"/><circle cx="17" cy="34" r="2"/><circle cx="17" cy="51" r="2"/>',vault:'<path d="M10 8h44v48H10z"/><circle cx="32" cy="32" r="12"/><path d="M32 20v24M20 32h24"/><path d="M54 20h5v24h-5"/>',cloud:'<path d="M17 50h31a11 11 0 0 0 2-22 17 17 0 0 0-32-3A13 13 0 0 0 17 50z"/>',key:'<circle cx="20" cy="30" r="11"/><path d="M29 30h29M45 30v9M53 30v6"/>',sync:'<path d="M13 25a21 21 0 0 1 35-8l7 7"/><path d="M55 12v12H43"/><path d="M51 39a21 21 0 0 1-35 8l-7-7"/><path d="M9 52V40h12"/>',shield:'<path d="M32 6 53 14v16c0 14-8 23-21 29C19 53 11 44 11 30V14z"/><path d="m22 32 7 7 14-16"/>',browser:'<rect x="6" y="10" width="52" height="44" rx="5"/><path d="M6 22h52"/><circle cx="14" cy="16" r="2"/><circle cx="21" cy="16" r="2"/><circle cx="28" cy="16" r="2"/>',ledger:'<path d="M9 12h46v40H9z"/><path d="M17 21h30M17 30h30M17 39h22"/><path d="M23 8v8M41 8v8"/>'};return`<svg class="icon icon-${n}" viewBox="0 0 64 64" role="img" aria-label="${xe(e||n)}"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${t[n]||t.shield}</g></svg>`}function Bl(){const n=[[110,80],[210,35],[330,70],[390,170],[330,270],[205,310],[95,250],[55,165]];return`<svg class="network-motif" viewBox="0 0 450 350" role="img" aria-label="One user connected to independent services through distributed storage providers">
    <defs><filter id="soft"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-opacity=".12"/></filter></defs>
    <g class="motif-links">${n.map(([e,t])=>`<path d="M225 175 L${e} ${t}"/>`).join("")}</g>
    <g class="motif-services">${n.map(([e,t],s)=>`<g transform="translate(${e-25} ${t-19})"><rect width="50" height="38" rx="9"/><circle cx="12" cy="11" r="3"/><path d="M8 23h34M8 29h25"/></g>`).join("")}</g>
    <g class="motif-providers"><circle cx="178" cy="175" r="13"/><circle cx="272" cy="175" r="13"/><path d="M191 175h68"/></g>
    <g class="motif-user" filter="url(#soft)"><circle cx="225" cy="175" r="36"/><circle cx="225" cy="166" r="10"/><path d="M207 194c3-11 9-16 18-16s15 5 18 16"/></g>
  </svg>`}function ii({resilient:n=!1}={}){return`<svg class="party-diagram" viewBox="0 0 960 420" role="img" aria-label="User, login servers, and storage providers">
    <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 8 4 0 8z"/></marker></defs>
    <g class="links"><path d="M480 120 L270 205"/><path d="M480 120 L690 205"/><path d="M480 145 L151 280"/><path d="M480 145 L256 280"/><path d="M480 145 L361 280"/><path d="M480 145 L466 280"/><path d="M480 145 L571 280"/><path d="M480 145 L676 280"/><path d="M480 145 L781 280"/></g>
    <g class="party user"><circle cx="480" cy="80" r="48"/><text x="480" y="76">User</text><text x="480" y="98" class="state-label">trusted client</text></g>
    <g class="party ls" transform="translate(195,190)"><rect width="150" height="66" rx="15"/><text x="75" y="29">Login server 1</text><text x="75" y="51" class="state-label">verifier only</text></g>
    <g class="party ls" transform="translate(615,190)"><rect width="150" height="66" rx="15"/><text x="75" y="29">Login server j</text><text x="75" y="51" class="state-label">verifier only</text></g>
    ${[0,1,2,3,4,5,6].map(t=>`<g transform="translate(${110+t*105},280)" class="party sp ${t===5?"stale":""}"><rect width="82" height="64" rx="13"/><text x="41" y="28">SP<tspan baseline-shift="sub" font-size="13">${t+1}</tspan></text><text x="41" y="49" class="state-label">${t===5&&n?"STALE":"active"}</text></g>`).join("")}
    <text x="480" y="388" class="diagram-note">${n?"tₛₚ recovers • qₛₚ commits and repairs":"tₛₚ shares recover • state changes require all nₛₚ providers"}</text>
  </svg>`}function Dl({resilient:n=!1}={}){return`<div class="record-system">
    <div class="root-record"><div class="record-label">${n?"Identification record":"Root record"}</div><div class="record-formula">\\(c_{\\mathrm{id}}\\)</div><div class="record-fields">\\(\\mathsf{ssk}\\) · \\(R_{\\mathrm{sp}}\\) · \\(K_0\\)${n?" · \\(\\mathsf{ctr}_{\\mathrm{id}}\\)":""}</div><div class="record-key">protected by \\(F_K(\\mathsf{pwd})\\)</div></div>
    <div class="branch-lines" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="account-row">
      ${[1,2,3].map(e=>`<div class="account-record"><div class="record-label">Account ${e}</div><div class="record-formula">\\(c_${e}\\)</div><div class="record-fields">\\(R_{\\mathsf{ls}_${e}}\\) · \\(\\mathsf{ctr}_{\\mathrm{ac}}\\)</div><div class="record-key">protected by \\(K_0\\)</div></div>`).join("")}
    </div>
  </div>`}function zl(){return`<div class="lifecycle">${[["Setup","root state + shares","backup-upspa-setup-full"],["Registration","one service record","backup-upspa-registration-full"],["Authentication","threshold read","backup-upspa-authentication-full"],["Secret update","rotate one account","backup-upspa-secret-update-full"],["Password update","re-protect root","backup-upspa-password-update-full"]].map(([e,t,s],i)=>`<div class="phase phase-${i}"><a href="#/${s}"><span>${e}</span><small>${t}</small></a></div>${i<2?'<div class="phase-arrow">→</div>':""}`).join("")}<svg viewBox="0 0 700 180" aria-hidden="true"><path d="M515 72 C505 145 320 150 305 84"/><path d="M675 72 C660 170 355 180 345 84"/></svg></div>`}function mt({actors:n,steps:e,dense:t=!1,finalLabel:s=""}){const i=n.map(c=>c.id),a=i.map(()=>"1fr").join(" "),r=n.map((c,h)=>`<div class="sequence-actor ${c.kind||""}" style="grid-column:${h+1}">${c.label}</div>`).join(""),o=n.map((c,h)=>`<div class="sequence-lane" style="grid-column:${h+1};grid-row:2 / ${e.length+3}"></div>`).join(""),l=e.map((c,h)=>{const d=i.indexOf(c.from)+1,u=i.indexOf(c.to)+1,g=Math.min(d,u),S=Math.max(d,u),p=d<u?"right":"left",w=c.state?` ${c.state}`:"",y=c.fragment!=null?" fragment":"",P=c.fragment!=null?` data-fragment-index="${c.fragment}"`:"";return c.interaction?`<div class="sequence-interaction${y}${w}"${P} data-from="${c.from}" data-to="${c.to}" style="grid-column:${g} / ${S+1};grid-row:${h+3}"><b class="sequence-interaction-number">${c.number}</b>${c.interaction}</div>`:c.local?`<div class="sequence-local${y}${w}"${P} style="grid-column:${d};grid-row:${h+3}"><b>${c.number}</b> ${c.label}</div>`:`<div class="sequence-message ${p}${y}${w}"${P} style="grid-column:${g} / ${S+1};grid-row:${h+3}"><span class="seq-label"><b>${c.number}</b> ${c.label}</span><i></i></div>`}).join("");return`<div class="sequence ${t?"dense":""}" style="--actor-columns:${a};grid-template-columns:${a}">${r}${o}${l}${s?`<div class="sequence-final">${s}</div>`:""}</div>`}function Tr(){return`<svg class="quorum-diagram" viewBox="0 0 720 380" role="img" aria-label="Two provider quorums intersect in honest evidence">
    <ellipse cx="255" cy="180" rx="205" ry="135" class="q1"/><ellipse cx="330" cy="205" rx="205" ry="135" class="q2"/>
    <text x="82" y="60" class="set-label q1-label">Q₁ · 5 providers</text><text x="430" y="330" class="set-label q2-label">Q₂ · 5 providers</text>
    ${[[110,190,"SP₁","both"],[200,105,"SP₂","q1"],[315,85,"SP₃","q1"],[390,190,"SP₄","both honest"],[315,295,"SP₅","q2"],[200,275,"SP₆","q2"],[500,85,"SP₇","corrupt"]].map(([e,t,s,i])=>`<g transform="translate(${e} ${t})" class="qnode ${i.includes("corrupt")?"corrupt":""} ${i.includes("honest")?"honest":""}"><circle r="29"/><text y="5">${s}</text>${i==="both honest"?'<path d="m-9 0 7 7 13-16"/>':""}</g>`).join("")}
    <g class="intersection-callout"><path d="M430 165h220"/><text x="660" y="155">|Q₁ ∩ Q₂| ≥ 3</text><text x="660" y="181">one honest witness survives</text></g>
  </svg>`}function ie({labels:n,series:e,yMax:t,yMin:s,yLabel:i="Time (ms)",xLabel:a="",title:r="",width:o=920,height:l=390,baseline:c=0,yScale:h="linear",xTickIndices:d,legendColumns:u,showLegend:g=!0,dataKey:S=""}){const p=Math.max(1,Math.min(e.length,u||Math.min(e.length,3))),w=g?Math.ceil(e.length/p):0,y={l:105,r:30,t:62,b:g?110+w*38:82},P=o-y.l-y.r,L=l-y.t-y.b,T=e.flatMap($=>$.values),A=T.filter($=>$>0),k=t??Math.max(...T)*(h==="log"?1.16:1.08),E=s??(h==="log"?Math.min(...A)*.82:c);if(!(k>E)||h==="log"&&E<=0)throw new Error(`Invalid ${h} chart domain for ${r}`);const _=$=>y.l+(n.length===1?P/2:$*P/(n.length-1)),C=Math.log10(E),b=Math.log10(k),O=$=>y.t+L-(h==="log"?(Math.log10($)-C)/(b-C)*L:($-E)/(k-E)*L),N=h==="log"?Array.from({length:Math.max(0,Math.floor(b)-Math.ceil(C)+1)},($,Q)=>10**(Math.ceil(C)+Q)):Array.from({length:5},($,Q)=>E+(k-E)*Q/4),D=$=>$>=1e3?`${Number(($/1e3).toPrecision(3))}k`:$>=10?$.toFixed(0):$>=1?Number($.toPrecision(3)).toString():Number($.toPrecision(2)).toString(),J=N.map($=>{const Q=O($);return`<path d="M${y.l} ${Q}H${y.l+P}"/><text x="${y.l-12}" y="${Q+5}">${D($)}</text>`}).join(""),te=e.map($=>{const Q=$.values.map((De,ze)=>`${ze?"L":"M"}${_(ze)} ${O(De)}`).join(" "),st=$.values.map((De,ze)=>`<circle cx="${_(ze)}" cy="${O(De)}" r="4"/>`).join(""),re=$.dashArray||($.dash?"10 8":"");return`<g class="plot" data-series="${xe($.name)}" data-point-count="${$.values.length}" style="--series:${$.color}"><path d="${Q}" ${re?`stroke-dasharray="${re}"`:""}/>${st}</g>`}).join(""),ne=new Set(d||n.map(($,Q)=>Q)),Ae=n.map(($,Q)=>ne.has(Q)?`<text x="${_(Q)}" y="${y.t+L+32}">${xe($)}</text>`:"").join(""),ps=l-w*38+8,be=g?e.map(($,Q)=>{const st=Math.floor(Q/p),re=Q%p,De=$.dashArray||($.dash?"10 8":"");return`<g transform="translate(${y.l+re*(P/p)} ${ps+st*38})"><path d="M0 0h36" style="stroke:${$.color}" ${De?`stroke-dasharray="${De}"`:""}/><circle cx="18" cy="0" r="4" style="fill:${$.color}"/><text x="48" y="8">${xe($.name)}</text></g>`}).join(""):"";return`<svg class="line-chart" data-chart-key="${xe(S)}" data-y-scale="${xe(h)}" data-series-count="${e.length}" data-label-count="${n.length}" viewBox="0 0 ${o} ${l}" role="img" aria-label="${xe(r||i)}"><title>${xe(r||i)}</title><text class="chart-title" x="${o/2}" y="34">${xe(r)}</text><g class="grid">${J}</g><g class="axis"><path d="M${y.l} ${y.t}V${y.t+L}H${y.l+P}"/>${Ae}<text class="axis-label" transform="translate(30 ${y.t+L/2}) rotate(-90)">${xe(i)}</text><text class="axis-label" x="${y.l+P/2}" y="${y.t+L+68}">${xe(a)}</text></g>${te}<g class="legend">${be}</g></svg>`}function Hl({groups:n,labels:e,max:t,unit:s="ms"}){return`<div class="comparison-bars">${n.map(i=>`<div class="bar-group"><div class="bar-label">${i.label}</div>${e.map((a,r)=>`<div class="bar-row"><span>${a}</span><i class="bar upspa" style="--w:${i.upspa[r]/t*100}%"></i><em>${i.upspa[r].toFixed(2)}</em><i class="bar roupspa" style="--w:${i.roupspa[r]/t*100}%"></i><em>${i.roupspa[r].toFixed(2)}</em></div>`).join("")}</div>`).join("")}<div class="bar-legend"><span class="upspa-dot"></span>UpSPA <span class="roupspa-dot"></span>RoUpSPA <small>${s}</small></div></div>`}function Wl(n){return""}function Is(n,e=""){return`<span class="tag ${e}">${n}</span>`}const Ce=[1,5,10,15,20,25,30],Ot=[{name:"UpSPA registration",color:"#164a7b",values:[.070868,.135315,.219034,.307113,.384857,.475739,.563759]},{name:"TSPA registration",color:"#d17722",dash:!0,values:[.563855,.556366,.581004,.58592,.603402,.605909,.611794]},{name:"UpSPA authentication",color:"#0b8f8c",values:[.070078,.137128,.227909,.311959,.400661,.494861,.574206]},{name:"TSPA authentication",color:"#7b61a8",dash:!0,values:[.041645,.113107,.22472,.30411,.392813,.500362,.582673]}],jt=[{name:"Setup",color:"#68788a",values:[.032282,.045255,.061797,.078456,.09446,.112803,.127961]},{name:"Secret update",color:"#0b8f8c",values:[.071267,.137119,.230062,.319257,.402747,.490115,.577284]},{name:"Password update",color:"#7b61a8",values:[.373621,.448011,.548712,.667033,.74147,.865661,.945052]}],pa=[{name:"UpSPA registration",color:"#164a7b",values:[1.205534,1.314694,1.410225,1.511801,1.584882,1.689721,1.769325]},{name:"TSPA registration",color:"#d17722",dash:!0,values:[1.186568,1.161638,1.194402,1.200806,1.197394,1.215982,1.221872]},{name:"UpSPA authentication",color:"#0b8f8c",values:[1.19794,1.28858,1.397065,1.494925,1.593694,1.708542,1.782607]},{name:"TSPA authentication",color:"#7b61a8",dash:!0,values:[.565015,.687553,.805962,.906497,1.001973,1.118334,1.199139]}],ua=[{name:"Setup",color:"#68788a",values:[.664901,.677575,.692669,.71131,.727035,.745585,.760319]},{name:"Secret update",color:"#0b8f8c",values:[1.820854,1.877829,2.010028,2.037987,2.141463,2.230809,2.284703]},{name:"Password update",color:"#7b61a8",values:[1.575924,1.708333,1.84321,1.944816,2.042866,2.156971,2.241427]}],Vl=["3/2","5/2","5/4","7/2","7/3","7/5","7/7"],Gl=[{name:"UpSPA",color:"#164a7b",values:[.1548,.156648,.19022,.17545,.195555,.227818,.266122]},{name:"PAS-TA-U",color:"#d17722",dash:!0,values:[3.113067,3.193201,3.9276,3.143283,3.601192,4.219914,4.698315]},{name:"AugSSO",color:"#4b8458",dash:!0,values:[15.09335,22.166009,26.91324,28.04735,31.22592,35.935381,38.731422]}],Fn=["3/2/3","5/3/4","7/4/6","7/5/6","10/6/8"],Ee={registration:{upspa:[.084,.101,.112,.127,.147],roupspa:[.197,.247,.33,.368,.445]},secret:{upspa:[.088,.101,.116,.133,.151],roupspa:[.2,.263,.348,.396,.46]},password:{upspa:[.14,.17,.205,.219,.263],roupspa:[.317,.411,.536,.616,.726]}},je={registration:{upspa:[1.189,1.204,1.25,1.271,1.298],roupspa:[3.304,3.339,3.457,3.485,3.583]},secret:{upspa:[1.706,1.736,1.782,1.807,1.825],roupspa:[3.826,3.887,4.036,4.066,4.155]},password:{upspa:[1.267,1.326,1.388,1.406,1.462],roupspa:[3.452,3.539,3.722,3.798,3.925]}},sn=[10,20,30,40,50,60,70,80,90,100],nn=[{name:"Quorum/ABD",color:"#164a7b",values:[1.0183,1.9043,6.9312,12.3324,15.5459,17.5592,21.9401,22.3659,24.5655,29.1757]},{name:"Signed PBB",color:"#0b8f8c",values:[.903637,1.661521,2.396007,3.327339,4.138306,5.45822,6.12808,6.364321,7.376414,8.254218]},{name:"Authorized PBB",color:"#d17722",dash:!0,values:[.894433,1.684284,2.495876,3.469696,4.093315,5.953122,6.445747,6.533122,7.630808,8.220148]},{name:"Shared local blockchain",color:"#7b61a8",dash:!0,values:[1.014246,1.847189,2.761906,3.857059,4.347346,5.114755,5.874095,7.012413,7.824678,8.609863]}],Ct=[{id:"sp",label:"Storage providers",kind:"sp"},{id:"user",label:"User / client",kind:"user"},{id:"ls",label:"Login server",kind:"ls"}];function K(n,e,t,s=""){return`<div class="slide-shell ${s}">${tn(n)}<h2>${e}</h2>${t}</div>`}function Ur(n){return`<div class="game-chain">${n.map(([e,t],s)=>`${s?'<div class="game-arrow">↓</div>':""}<div class="game-step"><strong>${e}</strong><span>${t}</span></div>`).join("")}</div>`}function Ql(n){return`<div class="slide-shell">
    <div class="title-copy">
      ${tn("MSc thesis defense")}
      <h1>${n.title}</h1>
      <p class="program">Master of Science in ${n.program}</p>
      <div class="identity"><strong>${n.presenterFormalName}</strong><span>Candidate</span><strong>${n.advisor}</strong><span>Advisor</span></div>
      <div class="institution-row"><img src="assets/koc-logo.png" alt="Koç University logo"><div><strong>${n.institution}</strong><br>${n.defenseDate}</div></div>
    </div>
    <div>${Bl()}</div>
  </div>`}function Yl(){const n=[["Email","browser"],["Banking","lock"],["University","browser"],["Shopping","browser"],["Cloud storage","cloud"],["Developer tools","key"],["Healthcare","shield"],["Travel","browser"]];return K("The password problem","Authentication is a daily activity",`
    <div class="split-40">
      <div><p class="lead">One user maintains accounts across many independent services.</p><p class="lead" style="margin-top:26px">Creating accounts - and returning to old ones - makes password use a daily practice.</p></div>
      <div class="auth-orbit"><div class="center-user">${is("user","user")}</div>${n.map(([e,t],s)=>`<div class="service-card fragment" data-fragment-index="${Math.floor(s/2)}">${is(t,e)}<span>${e}</span></div>`).join("")}</div>
    </div>${ht()}`)}function Jl(){return K("The password problem","One password or many passwords?",`
    <div class="fork">
      <div class="fork-path left"><h3>Reuse one password</h3><p>Low memory burden and low daily effort.</p><p class="impact">One disclosure can propagate across independent accounts.</p></div>
      <div class="origin">Many<br>accounts</div>
      <div class="fork-path right"><h3>Different password for every service</h3><p>Compromise stays better isolated.</p><p class="impact">Remembering, maintaining, and recovering credentials becomes harder.</p></div>
    </div>`)}function Xl(){return K("The password problem","The tension is convenience versus isolation",`
    <table class="comparison-table"><thead><tr><th>Reuse one password</th><th>Use different passwords</th></tr></thead><tbody>
      <tr><td>Easy to remember</td><td>Better compromise isolation</td></tr>
      <tr><td>Low daily effort</td><td>Harder to remember and maintain</td></tr>
      <tr><td>One disclosure may affect several accounts</td><td>Reset and recovery burden</td></tr>
      <tr><td>Attractive for honeypot or cross-site misuse</td><td>May encourage predictable variations</td></tr>
    </tbody></table>
    <p class="small" style="margin-top:20px">People do not always sit at either extreme. The tension creates the need for a credential-management layer.</p>`)}function Zl(){return K("The password problem","The practical answer is a password manager",`
    <div class="split-60"><div><p class="lead">Password managers store or generate site-specific credentials, then put the management burden behind one master secret.</p><div class="claim">A fast, reliable usability solution - with a credential vault as its storage and trust design point.</div></div>
    <div class="vault-visual"><div class="vault-core">${is("vault","encrypted password vault")}</div><div class="credential-chip">email ·••••</div><div class="credential-chip">bank ·••••</div><div class="credential-chip">cloud ·••••</div><div class="credential-chip">travel ·••••</div></div></div>`)}function ec(){return K("The password problem","Password managers commonly use two storage models",`
    <div class="split">
      <div class="storage-model local">${is("vault","local vault")}<h3>Local vault</h3><ul><li>Credential state remains on a device.</li><li>No mandatory cloud service.</li><li>Portability, backup, synchronization, and device loss need a plan.</li></ul></div>
      <div class="storage-model cloud">${is("cloud","cloud synchronized vault")}<h3>Cloud-synchronized vault</h3><ul><li>Multi-device access and synchronization.</li><li>Remote encrypted credential state.</li><li>Adds cloud availability, storage, and metadata boundaries.</li></ul></div>
    </div>`)}function tc(){return K("The password problem","A different design point",`
    <div style="padding-top:70px"><p class="big-question">Can one memorable password support many services without giving every login server the password - or keeping reusable website passwords as the user’s primary local credential state?</p>
    <div class="answer-reveal fragment">Single Password Authentication <span class="muted">(SPA)</span></div></div>`)}function sc(){return K("Evolution of SPA","The research line adds one missing capability at a time",`<div class="timeline">${[["SPA","one password, separate helper","Acar¹ · Belenkiy¹ · Küpçü²"],["TSPA","threshold-distributed helper","İşler² · Küpçü²"],["UpSPA","password and account-secret updates","İşler³ · Saadi² · Küpçü²"],["RoUpSPA","quorum completion and stale repair","Saadi² · İşler³ · Küpçü²"]].map(([e,t,s])=>`<div class="timeline-node"><div class="disc">${e}</div><strong>${t}</strong><small>${s}</small></div>`).join("")}</div>${ht()}`)}function nc(){return K("Evolution of SPA","SPA separates the password from the login server",`
    <div class="split-60">
      ${mt({actors:[Ct[0],Ct[1],Ct[2]],steps:[{number:"1",from:"user",to:"sp",label:"Use the password to recover a random-looking authentication secret"},{number:"2",from:"sp",to:"user",label:"Password-protected helper state"},{number:"3",from:"user",to:"ls",label:"Authenticate with high-entropy service material"}]})}
      <div><div class="stack"><div><h3>Login server</h3><p class="small">Stores high-entropy verification material - not the password.</p></div><div><h3>Storage provider</h3><p class="small">Helps recover the random-looking secret protected through the password.</p></div></div><div class="claim danger">Trust boundary: the login server and helper must not collude for the intended offline-guessing protection.</div></div>
    </div>`)}function ic(){return K("Evolution of SPA","TSPA distributes the helper role",`
    <div class="split-60"><div>${ii()}</div><div><div class="formula-callout"><div>\\[\\text{authentication requires at least } t_{\\mathrm{sp}} \\text{ providers}\\]</div><p class="meaning">A random secret is shared; each share is protected with a provider-specific TOPRF output on the password.</p></div><div class="claim">Offline testing now requires the login server together with threshold-many storage providers.</div><p class="small" style="margin-top:20px">TSPA covers registration and authentication - not the complete update lifecycle developed here.</p></div></div>`)}function ac(){return K("Evolution of SPA","The missing piece is a credential lifecycle",`
    <div class="split" style="margin-top:40px">
      <div><h3>SPA / TSPA</h3><div class="phase-semantics"><div class="flow-line"><span>Registration</span><i></i><span>Authentication</span></div></div></div>
      <div><h3>This thesis</h3><div class="phase-semantics"><div class="flow-line"><span>Setup</span><i></i><span>Registration</span><i></i><span>Authentication</span></div><div class="flow-line"><span style="border-color:var(--changed)">Secret update</span><i></i><span style="border-color:var(--changed)">Password update</span></div></div></div>
    </div>
    <div class="split" style="margin-top:60px"><div class="claim"><strong>UpSPA</strong> adds updateability under a fully available provider baseline.</div><div class="claim" style="--section-color:var(--changed)"><strong>RoUpSPA</strong> adds partial availability and stale-provider recovery.</div></div>`)}function rc(){return K("UpSPA","UpSPA turns threshold SPA into a five-phase framework",`
    <p class="lead">The same remembered password supports independent services while updates stay explicit and isolated.</p>
    <div class="three-col" style="margin-top:62px"><div class="delta"><strong>One remembered password</strong><span>TOPRF-protected root state distributes the helper role.</span></div><div class="delta"><strong>Service-specific secrets</strong><span>Each login server receives only high-entropy verification state.</span></div><div class="delta"><strong>Native updates</strong><span>Rotate one account secret - or re-protect the compact root.</span></div></div>${ht()}`)}function oc(){return K("UpSPA","The architecture keeps the password-dependent work on the client",`
    <div class="split-60"><div>${ii()}</div><div><p>${Is("User/client","user")} transient password, TOPRF output, decrypted root and account secrets</p><p style="margin-top:20px">${Is("Login server","login")} \\(\\mathsf{Uid}\\) and a service-specific \\(\\mathsf{vInfo}_j\\)</p><p style="margin-top:20px">${Is("Storage provider")} encrypted root/account records and one TOPRF share</p><div class="claim">Login servers neither evaluate the TOPRF nor communicate with storage providers.</div></div></div>`)}function lc(){return K("UpSPA","Two protected layers make the updates independent",`
    ${Dl()}
    <div class="formula-band"><div class="formula-callout">\\[c_{\\mathrm{id}}\\leftarrow \\operatorname{Enc}_{F_K(\\mathsf{pwd})}(\\mathsf{ssk}\\parallel R_{\\mathrm{sp}}\\parallel K_0)\\]<div class="meaning">Password update changes this compact layer.</div></div><div class="formula-callout">\\[c_j\\leftarrow\\operatorname{Enc}_{K_0}(R_{\\mathsf{ls}_j}\\parallel\\mathsf{ctr}_{\\mathrm{ac}})\\]<div class="meaning">Secret update changes one account record.</div></div></div>`)}function cc(){return K("UpSPA","Five phases define the whole credential lifecycle",`${zl()}`)}function dc(){return K("UpSPA","Registration creates one service-specific account",`${mt({actors:Ct,steps:[{number:"1",from:"user",to:"sp",label:"Read setup state from all providers",fragment:0},{number:"2",from:"sp",to:"user",label:"tₛₚ TOPRF shares + root ciphertext",fragment:1},{number:"3",from:"user",to:"user",label:"Recover root; derive provider-specific identifiers; create cⱼ and vInfoⱼ",local:!0,fragment:2},{number:"4",from:"user",to:"sp",label:"Pending account records",state:"pending",fragment:3},{number:"5",from:"user",to:"ls",label:"Register ⟨Uid, vInfoⱼ⟩",fragment:4},{number:"6",from:"user",to:"sp",label:"Store / Discard → final acknowledgements from all nₛₚ",state:"committed",fragment:5}],finalLabel:"Fully available baseline: all nₛₚ providers at state-changing boundaries"})}<a class="detail-link" href="#/backup-upspa-registration-full">Full numbered registration flow →</a>`)}function pc(){return K("UpSPA","Authentication is a threshold read",`${mt({actors:Ct,steps:[{number:"1",from:"user",to:"sp",label:"Request committed root state",fragment:0},{number:"2",from:"sp",to:"user",label:"At least tₛₚ valid setup responses",fragment:1},{number:"3",from:"user",to:"user",label:"Evaluate TOPRF; recover Rₛₚ and K₀",local:!0,fragment:2},{number:"4",from:"user",to:"sp",label:"Read committed account records; select maximum valid counter",fragment:3},{number:"5",from:"user",to:"ls",label:"⟨Uid, H(Rₗₛⱼ ∥ lsⱼ)⟩",fragment:4}],finalLabel:"No provider write · no Store/Discard · no synchronization"})}<a class="detail-link" href="#/backup-upspa-authentication-full">Full numbered authentication flow →</a>`)}function uc(){return K("UpSPA","Secret update and password update solve different problems",`
    <div class="update-split"><div class="secret"><h3>Secret update</h3><ul><li>Rotates \\(R_{\\mathsf{ls}_j}\\) for one login server.</li><li>Increments the account counter.</li><li>Changes one account record and its verifier.</li><li>Leaves the password and unrelated accounts unchanged.</li></ul></div><div class="password"><h3>Password update</h3><ul><li>Replaces \\(\\mathsf{pwd}\\) with \\(\\mathsf{pwd}_{\\mathrm{new}}\\).</li><li>Re-protects the root and updates source-defined TOPRF material.</li><li>Preserves \\(R_{\\mathrm{sp}}\\), \\(K_0\\), and account ciphertexts.</li><li>No login server participates.</li></ul></div></div>`)}function hc(){return K("UpSPA","The security claim has a precise boundary",`
    <div class="boundary"><div class="boundary-main"><div class="boundary-ring"><div class="inside">Static malicious corruption<br>\\(|\\mathcal C_{\\mathrm{SP}}|\\le t_{\\mathrm{sp}}-1\\)<br>one honest target user<br>one honest target login server<br>trusted endpoint + secure authenticated channels</div></div></div>
    <div class="outside-panel"><h3>Outside the theorem</h3><ul><li>Endpoint compromise</li><li>Corruption at or above the provider threshold</li><li>Denial of service / missing availability</li><li>Forgotten-password recovery</li><li>Permanent provider replacement</li><li>Interrupted finalization and crash recovery</li></ul></div></div>`)}function mc(){return K("UpSPA","The construction combines cryptography with state discipline",`<div class="challenge-grid">${[["Password separation","No deterministic password information at login servers.","TOPRF"],["Subthreshold hiding","No offline test for fewer than \\(t_{\\mathrm{sp}}\\) providers.","TOPRF + AE"],["Independent updates","Rotate one account or the compact root.","Two-layer state"],["Hidden naming","Prevent predictable records and cross-domain reuse.","\\(R_{\\mathrm{sp}}\\)-derived IDs"],["Authorized freshness","Accept one fresh committed transition.","signatures + counters + state"]].map(([e,t,s],i)=>`<div class="challenge"><div class="num">CHALLENGE ${i+1}</div><h3>${e}</h3><p>${t}</p><div class="mechanism">${s}</div></div>`).join("")}</div>`)}function gc(){return K("UpSPA","The proof separates cryptographic hiding from state integrity",`
    <div class="proof-map"><div class="bad-events"><div class="bad-event"><strong>BadSig</strong><span>accepted signature not produced by the honest user</span></div><div class="bad-event"><strong>BadHash</strong><span>collision changes an identifier or verifier binding</span></div><div class="bad-event"><strong>BadCtxt</strong><span>fresh or cross-key ciphertext acceptance changes a result</span></div></div>
    ${Ur([["G₀","real execution"],["G₁","replace TOPRF values consistently"],["G₂","replace root plaintexts"],["G₃","replace account plaintexts"],["G₄","ideal execution"]])}</div>
    <div class="claim">Within the corruption and endpoint assumptions, the protocol view adds no efficient offline password-verification predicate beyond the online guessing behavior represented in the ideal execution.</div>`)}function fc(){return K("RoUpSPA","Updateability is not yet resilience",`
    <div class="split-60"><div>${ii({resilient:!0})}</div><div><p class="lead">UpSPA authentication already tolerates a threshold of responses - but its state-changing phases need the full provider set.</p><div class="claim danger">One delayed, offline, or stale provider can block progress or miss current state.</div><div class="claim" style="--section-color:var(--changed)"><strong>RoUpSPA</strong> adds a resilient record lifecycle around the same cryptographic core.</div></div></div>${ht()}`)}function vc(){return K("RoUpSPA","The protected values stay; the completion rules change",`<p class="lead">RoUpSPA is not a separate authentication architecture. It adds six state-lifecycle mechanisms.</p><div class="delta-list">${[["Two thresholds","\\(t_{\\mathrm{sp}}\\) for cryptography; \\(q_{\\mathrm{sp}}\\) for replicated writes."],["Shared family ID","All providers use \\(H(R_{\\mathrm{sp}}\\parallel\\mathsf{ls}_j)\\)."],["Signed records","Exact replacement records carry explicit authorization."],["Two counters","Identification and account freshness advance separately."],["Replica status","Providers are active or stale per record family."],["Synchronization","A stale provider repairs from authenticated public evidence."]].map(([e,t])=>`<div class="delta"><strong>${e}</strong><span>${t}</span></div>`).join("")}</div>`)}function bc(){return K("RoUpSPA","Cryptographic security and availability use different parameters",`
    <div class="thresholds"><div class="threshold crypto"><div class="symbol">\\(t_{\\mathrm{sp}}\\)</div><h3>Cryptographic threshold</h3><p>Enough valid provider contributions to evaluate the TOPRF and read protected state.</p></div><div class="threshold quorum"><div class="symbol">\\(q_{\\mathrm{sp}}\\)</div><h3>Availability quorum</h3><p>Enough matching durable acknowledgements to complete a replicated write or synchronization.</p></div></div>
    <div class="formula-callout" style="margin-top:28px;text-align:center">\\[n_{\\mathrm{sp}}\\ge q_{\\mathrm{sp}}\\ge t_{\\mathrm{sp}}>\\frac{n_{\\mathrm{sp}}}{2},\\qquad 2q_{\\mathrm{sp}}-n_{\\mathrm{sp}}>t_{\\mathrm{sp}}-1\\]<div class="meaning">Increasing \\(q_{\\mathrm{sp}}\\) does not by itself strengthen password cryptography.</div></div>`)}function yc(){return K("RoUpSPA","Quorum intersection preserves honest evidence of completed state",`
    <div class="split-60"><div>${Tr()}</div><div><div class="formula-callout">\\[|Q_1\\cap Q_2|\\ge 2q_{\\mathrm{sp}}-n_{\\mathrm{sp}}>t_{\\mathrm{sp}}-1\\]<div class="meaning">With at most \\(t_{\\mathrm{sp}}-1\\) corrupt providers, the intersection contains honest evidence.</div></div><div class="claim">A completed write and a later recovery quorum share honest evidence of that state.</div><div class="claim danger">Signatures authorize records; counters and selection rules establish freshness. Intersection alone does neither.</div></div></div>`)}function wc(){return K("RoUpSPA","Each state-changing phase has one provider boundary",`<div class="phase-semantics">${[["Registration",["Prepare at LS","qₛₚ durable account writes","Store / Discard at LS"]],["Secret update",["Prepare old/new verifier","qₛₚ durable replacements","Store / Discard at LS"]],["Password update",["qₛₚ tentative identification writes","Store / Discard to providers"]],["Authentication",["tₛₚ valid active reads","no write"]],["Setup",["all nₛₚ providers receive long-term shares"]]].map(([e,t])=>`<div class="phase-flow"><strong>${e}</strong><div class="flow-line">${t.map((s,i)=>`${i?"<i></i>":""}<span>${s}</span>`).join("")}</div></div>`).join("")}</div><div class="claim pending">Store or Discard is terminal where the source says it is - there is no invented extra acknowledgement. Partial post-write failure remains an unresolved availability state.</div>`)}function Sc(){return K("RoUpSPA","Authentication remains a threshold read",`${mt({actors:Ct,steps:[{number:"1",from:"user",to:"sp",label:"Request active identification records"},{number:"2",from:"sp",to:"user",label:"At least tₛₚ valid responses + TOPRF shares"},{number:"3",from:"user",to:"user",label:"Recover root; derive shared account-family ID",local:!0},{number:"4",from:"user",to:"sp",label:"At least tₛₚ active account responses; choose maximum valid counter"},{number:"5",from:"user",to:"ls",label:"Authenticate with H(Rₗₛⱼ ∥ lsⱼ)"}],finalLabel:"No quorum write · no automatic repair"})}<a class="detail-link" href="#/backup-roupspa-authentication-full">Full numbered authentication flow →</a>`)}function kc(){return K("RoUpSPA","A stale provider can repair without seeing the password",`
    <div class="repair-scene"><div><h3 class="center">Before</h3><div class="replica-set"><div class="replica">SP₁<br>ctr 8</div><div class="replica">SP₂<br>ctr 8</div><div class="replica">SP₃<br>ctr 8</div><div class="replica stale">SPₖ<br>STALE</div></div></div><div class="repair-arrow">→</div><div><h3 class="center">After</h3><div class="replica-set"><div class="replica">SP₁<br>ctr 8</div><div class="replica">SP₂<br>ctr 8</div><div class="replica">SP₃<br>ctr 8</div><div class="replica fresh">SPₖ<br>ctr 8</div></div></div></div>
    <div class="repair-steps"><span>collect ≥ qₛₚ responses</span><span>verify signatures and bindings</span><span>reject counter conflicts</span><span>install unique maximum</span></div>
    <div class="claim">Only signed ciphertext and public metadata move. Identification repair retains the provider’s own TOPRF share.</div>`)}function Ac(){return K("RoUpSPA","Completed-state safety does not imply unconditional liveness",`
    <div class="safety-liveness"><div class="safety"><h3>Safety for completed phases</h3><ul><li>Exact signed records and exact-next counters</li><li>Active/stale selection</li><li>Honest quorum intersection</li><li>Synchronization without rollback</li><li>No divergent completed records outside bad events</li></ul></div><div class="liveness"><h3>Conditional liveness</h3><ul><li>Enough valid \\(t_{\\mathrm{sp}}\\) or \\(q_{\\mathrm{sp}}\\) participation</li><li>Bounded login-server availability where required</li><li>Withholding, timeout, or excessive failure may stop progress</li><li>Not a general Byzantine transaction or consensus protocol</li></ul></div></div>`)}function Pc(){return K("RoUpSPA","RoUpSPA inherits hiding and proves deterministic consistency",`
    <div class="proof-map"><div>${Ur([["G₀","real RoUpSPA"],["G₁","replace full TOPRF evaluations"],["G₂","simulate honest-receiver TOPRF transcripts"],["G₃","replace identification plaintexts"],["G₄","replace account plaintexts"],["G₅","ideal execution"]])}</div><div><h3 style="margin-bottom:14px">Deterministic obligations</h3><div class="proof-obligations"><div class="proof-obligation"><strong>Authorized writes</strong><span>exact records and terminal decisions</span></div><div class="proof-obligation"><strong>Active threshold</strong><span>only current replicas contribute</span></div><div class="proof-obligation"><strong>Quorum consistency</strong><span>completed state remains recoverable</span></div><div class="proof-obligation"><strong>No rollback</strong><span>maximum valid counters win</span></div><div class="proof-obligation"><strong>No divergence</strong><span>ties at a maximum are rejected</span></div></div><div class="equation-box" style="margin-top:18px">\\[\\operatorname{REAL}_{\\mathsf{RoUpSPA},\\mathcal A}\\approx_c\\operatorname{IDEAL}_{\\mathcal F_{\\mathsf{UpSPA}},\\mathsf{Sim}}\\]</div></div></div>`)}function xc(){return K("Synchronization alternatives","A public bulletin board enables autonomous catch-up",`
    <div class="pbb-variants"><div class="pbb-variant untrusted"><h3>End-to-end authenticated PBB</h3><ul><li>The board may accept arbitrary entries.</li><li>User signatures and counters determine acceptance.</li><li>Strong end-to-end trust separation.</li><li>Flooding and scanning remain availability costs.</li></ul><div class="append-history"><i></i><i></i><i></i><i></i><i></i></div></div><div class="pbb-variant authorized"><h3>Authorization-enforcing PBB</h3><ul><li>The board filters unauthorized writes.</li><li>Lower junk-scanning burden.</li><li>Adds committee and admission-control assumptions.</li><li>Conservative deployments still verify user signatures.</li></ul><div class="append-history"><i></i><i></i><i></i><i></i><i></i></div></div></div><div class="claim">A provider can catch up from append-only history without waiting for the user.</div>${ht()}`)}function Rc(){return K("Synchronization alternatives","Blockchain adds public ordering - and a larger systems boundary",`
    <div class="ledger-flow"><div>Signed update record</div><div>Encrypted recovery bundle<br><span class="small">off chain</span></div><div>Commitment, counter, phase<br><span class="small">or Merkle root on chain</span></div><div>Provider verifies proof<br>and local signature</div></div>
    <table class="mechanism-table"><thead><tr><th>Mechanism</th><th>Global component</th><th>Autonomous catch-up</th><th>Main added boundary</th></tr></thead><tbody><tr><td>Quorum</td><td>No</td><td>Provider synchronization</td><td>Provider participation</td></tr><tr><td>Signed PBB</td><td>Yes</td><td>Yes</td><td>Scanning, flooding, board availability</td></tr><tr><td>Authorized PBB</td><td>Yes</td><td>Yes</td><td>Admission committee and trust</td></tr><tr><td>Blockchain</td><td>Yes</td><td>Yes</td><td>Finality, fees, metadata, contract assumptions</td></tr></tbody></table>`)}function _c(){return K("Implementation and results","The prototype maps formal phases to measurable stages",`
    <div class="architecture">${[["Client engine","orchestrates phases","client"],["Login-server adapter","verifier prepare / commit","login"],["Storage-provider service","records + durable writes",""],["Threshold crypto","TOPRF and sharing","client"],["State codec","authenticated records",""],["Synchronization adapter","quorum / PBB / ledger","sync"]].map(([e,t,s])=>`<div class="module ${s}"><strong>${e}</strong><span>${t}</span></div>`).join("")}</div>
    <div class="stage-equation">\\[T_{\\mathrm{stage}}^P(I)=T_{\\mathrm{client,pre}}^P+\\max_{i\\in I}\\{L_i+T_{\\mathrm{SP}_i}^P\\}+T_{\\mathrm{client,post}}^P\\]</div>
    <div class="method-strip"><span>provider requests parallel inside a stage</span><span>successive stages remain sequential</span><span>50 warm-ups + 200 measured samples</span><span>median (p50)</span><span>LAN/WAN are controlled compositions</span></div>${ht()}`)}function Tc(){const n=Ot.map(t=>({...t,name:t.name.replace("registration","Reg.").replace("authentication","Auth.")})),e=jt.map(t=>({...t,name:t.name.replace("Secret update","Secret upd.").replace("Password update","Password upd.")}));return K("Implementation and results","UpSPA adds updates with sub-millisecond local client work",`
    <div class="split" style="gap:20px"><div class="chart-wrap">${ie({labels:Ce,series:n,yMax:.7,xLabel:"Threshold tₛₚ · nₛₚ = 30",title:"Registration and authentication",width:560,height:350})}</div><div class="chart-wrap">${ie({labels:Ce,series:e,yMax:1,xLabel:"Threshold tₛₚ · nₛₚ = 30",title:"Setup and updates",width:560,height:350})}</div></div>
    <div class="chart-takeaway">Local cryptography stays small; the extra modeled network stage matters more in LAN/WAN composition.</div>`)}function Uc(){return K("Implementation and results","Password update is the clearest measured UpSPA advantage",`
    <div class="split-60"><div class="chart-wrap">${ie({labels:Vl,series:Gl,yMax:41,xLabel:"(nₛₚ / tₛₚ)",title:"Client password-update latency",width:760,height:430})}</div><div><div class="warning-box"><strong>Different functionality and trust architecture.</strong><br>The comparison normalizes executable cost - not semantics.</div><p class="small" style="margin-top:24px">UpSPA remains below 0.27 ms on the client in this grid. PAS-TA-U and AugSSO pay for different threshold-SSO paths.</p><div class="claim">No across-the-board winner: authentication rounds, provider work, and relying-party roles differ.</div></div></div>`)}function Lc(){const n=s=>s[s.length-1],e={label:"Complete local · 10/6/8",upspa:[n(Ee.registration.upspa),n(Ee.secret.upspa),n(Ee.password.upspa)],roupspa:[n(Ee.registration.roupspa),n(Ee.secret.roupspa),n(Ee.password.roupspa)]},t={label:"Composed LAN · 10/6/8",upspa:[n(je.registration.upspa),n(je.secret.upspa),n(je.password.upspa)],roupspa:[n(je.registration.roupspa),n(je.secret.roupspa),n(je.password.roupspa)]};return K("Implementation and results","Resilience costs more in communication stages than in local checks",`
    ${Hl({groups:[e,t],labels:["Registration","Secret update","Password update"],max:4.2})}
    <div class="chart-takeaway" style="margin-top:26px">RoUpSPA’s extra local checks are modest; the resilient communication schedule drives the larger end-to-end gap.</div>
    <p class="small center" style="margin-top:12px">WAN totals are not used to rank the constructions because fixed RTT and extra stages dominate the composed values.</p>`)}function Ec(){return K("Implementation and results","Synchronization backends move the dominant cost",`
    <div class="chart-wrap">${ie({labels:sn,series:nn,yMax:32,xLabel:"Storage providers nₛₚ · qₛₚ = 0.8nₛₚ",title:"Password-update local backend overhead",width:1050,height:430})}</div>
    <div class="chart-takeaway">Quorum coordination grows fastest here; the public-state options trade local cost for a global board or ledger boundary.</div>`)}function Cc(){return K("Implementation and results","The engineering lesson is to optimize the schedule, not only the primitives",`<div class="takeaway-list">${["Cryptographic work is generally small beside sequential distributed communication.","Password update remains independent of the number of login-server accounts.","Resilience shifts cost into quorum coordination, board processing, finality, or proof handling.","No backend is universally best: latency, autonomous recovery, filtering, auditability, metadata, and infrastructure all matter."].map(e=>`<div class="takeaway-item"><p>${e}</p></div>`).join("")}</div>`)}function Ic(){return K("Conclusions","The thesis extends SPA from authentication to resilient credential management",`<div class="contribution-path">${[["Lifecycle","five explicit phases"],["State design","isolated secret and password updates"],["Security","static-malicious lifecycle proof"],["Resilience","separate threshold, quorum, and repair"],["Evaluation","unified family and backend prototype"]].map(([e,t],s)=>`<div class="contribution" data-n="${s+1}"><strong>${e}</strong><span>${t}</span></div>`).join("")}</div>${ht()}`)}function Nc(){return K("Conclusions","The present guarantees are strong - but deliberately scoped",`
    <div class="limit-future"><div class="limits"><h3>Current limitations</h3><ul><li>Static corruption and phase-oriented, non-UC proofs</li><li>Trusted user endpoint</li><li>Availability only within threshold and quorum bounds</li><li>No dynamic membership or proactive refresh</li><li>Research prototype and controlled network models</li></ul></div><div class="future"><h3>Future directions</h3><ul><li>Adaptive/mobile corruption and proactive refresh</li><li>Provider join, leave, replacement, and threshold changes</li><li>Verified concurrent state machines</li><li>Hardened browser deployment and user study</li><li>Post-quantum instantiations and passkey recovery</li></ul></div></div>
    <div class="claim">A password is most useful when it is not itself the long-term verifier - and no single supporting party can test it offline.</div>`)}function $c(){return K("Conclusions","Three manuscripts carry the thesis contributions forward",`<div class="publication-list">${[["Secure and Updatable Single Password Authentication","Cryptology ePrint Archive, Report 2026/784","public manuscript"],["Secure and Updatable Single Password Authentication","ACM WPES 2026","workshop version submitted"],["Robust Updatable Single Password Authentication","ACM Transactions on Privacy and Security","manuscript submitted"]].map(([e,t,s],i)=>`<div class="publication"><div class="pub-num">${i+1}</div><div><strong>${e}</strong><span>${t}</span></div><em>${s}</em></div>`).join("")}</div><p class="small" style="margin-top:22px">Status is reported exactly as stated in the active thesis source.</p>`)}function qc(n){return`<div class="slide-shell"><div><h2>Thank you</h2><div class="questions">Questions?</div><div class="final-meta">${n.presenterDisplayName||n.presenterFormalName} · ${n.institution}${n.links?.eprint?` · <a href="${n.links.eprint}">ePrint 2026/784</a>`:""}</div></div></div>`}function Oc(n,e,t){const s={title:()=>Ql(t),"problem-daily-authentication":Yl,"problem-two-strategies":Jl,"problem-strategy-comparison":Xl,"problem-password-manager":Zl,"problem-local-cloud-managers":ec,"problem-research-question":tc,"lineage-overview":sc,"lineage-spa":nc,"lineage-tspa":ic,"lineage-gap-and-thesis":ac,"upspa-overview":rc,"upspa-parties":oc,"upspa-two-layer-state":lc,"upspa-lifecycle":cc,"upspa-registration":dc,"upspa-authentication":pc,"upspa-two-updates":uc,"upspa-threat-model":hc,"upspa-design-challenges":mc,"upspa-security":gc,"roupspa-motivation":fc,"roupspa-what-changes":vc,"roupspa-threshold-quorum":bc,"roupspa-quorum-intersection":yc,"roupspa-phase-semantics":wc,"roupspa-read-and-authentication":Sc,"roupspa-synchronization":kc,"roupspa-threat-and-boundary":Ac,"roupspa-security":Pc,"alternatives-pbb":xc,"alternatives-blockchain-and-choice":Rc,"implementation-architecture-method":_c,"results-upspa-tspa":Tc,"results-threshold-sso-comparison":Uc,"results-upspa-roupspa":Lc,"results-backends":Ec,"results-key-takeaways":Cc,"conclusion-contributions":Ic,"conclusion-limitations-future":Nc,"conclusion-publications":$c,"thank-you":()=>qc(t)};return s[n]?s[n]():K(e.section||"Slide",e.title,'<p class="lead">Slide content unavailable.</p>')}const Lr={"aux-pastau-threshold-token-generation":{title:"AUX · PAS-TA-U — Threshold Token Generation",src:"assets/protocols/pastau/threshold-token-generation.jpg",alt:"Original PAS-TA-U threshold token generation source figure"},"aux-pastau-registration":{title:"AUX · PAS-TA-U — Registration",src:"assets/protocols/pastau/registration.png",alt:"Original PAS-TA-U registration protocol source figure"},"aux-pastau-authentication-token-generation":{title:"AUX · PAS-TA-U — Authentication and Token Generation",src:"assets/protocols/pastau/authentication-token-generation.png",alt:"Original PAS-TA-U authentication and token generation protocol source figure"},"aux-pastau-password-update":{title:"AUX · PAS-TA-U — Password Update",src:"assets/protocols/pastau/password-update.png",alt:"Original PAS-TA-U password-update protocol source figure"},"aux-augsso-registration":{title:"AUX · AugSSO — Registration",src:"assets/protocols/augsso/registration.png",alt:"Original AugSSO registration protocol source figure"},"aux-augsso-authentication-token-issuance":{title:"AUX · AugSSO — Authentication and Token Issuance",src:"assets/protocols/augsso/authentication-token-issuance.png",alt:"Original AugSSO authentication and token issuance protocol source figure"},"aux-augsso-password-update":{title:"AUX · AugSSO — Password Update",src:"assets/protocols/augsso/password-update.png",alt:"Original AugSSO password-update protocol source figure"}};function _n(n=""){return String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function jc(n,e={}){const t=Lr[n];return t?`<div class="slide-shell comparison-source-slide" style="display:grid;grid-template-rows:auto minmax(0,1fr);gap:4px;min-height:0;padding-bottom:30px;box-sizing:border-box">
    <h2 style="font-size:36px;line-height:1.04;margin:0;max-width:none">${_n(t.title)}</h2>
    <figure style="margin:0;min-height:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden">
      <img src="${_n(t.src)}" alt="${_n(t.alt)}" loading="eager" decoding="sync" style="display:block;max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;object-position:center">
    </figure>
  </div>`:null}Object.freeze(Object.keys(Lr));const Fc={registration:{labels:["3/2","5/2","5/4","7/2","7/3","7/5","7/7"],panels:{client:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[.08996,.085067,.117697,.088509,.104755,.137181,.170153]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[.068574,.099377,.071868,.069564,.075533,.075766,.068399]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[.422095,.389136,.417541,.412505,.392217,.440211,.443365]}],domain:[0,.48]},provider:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[.04175,.042034,.083841,.041862,.062762,.104273,.145985]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[108e-6,185e-6,17e-5,245e-6,245e-6,231e-6,21e-5]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[1.671588,2.7716,2.647775,4.004861,4.02157,4.058999,3.816141]}],domain:[0,4.35]},lan:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[1.181643,1.195091,1.257402,1.200886,1.226481,1.272635,1.3123]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[1.216913,1.15817,1.159649,1.152032,1.152315,1.162638,1.157453]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[1.488102,1.547075,1.591575,1.49724,1.58262,1.577219,1.578448]}],domain:[1.1,1.66]},wan:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[126.281834,127.062291,129.503568,127.741484,129.2791,130.067954,131.472101]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[125.345552,127.485101,127.186883,128.477529,127.700338,127.758297,128.416649]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[64.589267,65.904037,65.925191,66.746836,66.979199,66.637311,66.885875]}],domain:[58,136]}}},authentication:{labels:["3/2","5/2","5/4","7/2","7/3","7/5","7/7"],panels:{client:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[.089631,.084599,.117876,.086577,.102821,.135467,.168596]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[2.928482,2.914716,3.488008,2.964994,3.204068,3.738179,4.053239]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[8.08843,8.450052,16.018096,7.959815,11.951477,19.234848,26.990815]}],domain:[0,29]},provider:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[.04172,.041974,.083756,.041772,.062637,.104132,.145842]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[1.215238,1.031944,1.966452,1.004128,1.47885,2.451805,3.123022]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[1.473516,1.4301,2.743244,1.492222,2.244408,3.45501,5.034463]}],domain:[0,5.5]},lan:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[1.165775,1.177431,1.224585,1.185298,1.195978,1.238804,1.26318]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[4.201208,3.78263,4.501911,3.882219,4.259086,4.753304,5.410801]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[11.330637,11.934826,18.827203,11.76652,15.845659,22.471753,30.229332]}],domain:[0,32]},wan:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[125.254954,126.004686,127.37095,126.966253,126.711983,127.008765,125.978316]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[66.094906,65.928172,68.261177,65.553981,67.103605,69.041339,71.01604]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[135.759423,135.769169,148.357991,135.687729,141.91371,152.225707,160.972559]}],domain:[60,166]}}},passwordUpdate:{labels:["3/2","5/2","5/4","7/2","7/3","7/5","7/7"],panels:{client:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[.1548,.156648,.19022,.17545,.195555,.227818,.266122]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[3.113067,3.193201,3.9276,3.143283,3.601192,4.219914,4.698315]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[15.09335,22.166009,26.91324,28.04735,31.22592,35.935381,38.731422]}],domain:[0,41]},provider:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[.096077,.135499,.176591,.173336,.205338,.234767,.275884]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[10.02206,13.005261,16.72654,17.771036,20.038869,21.896659,23.092762]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[1.769822,1.754718,3.271156,1.780712,2.553684,4.161195,6.048203]}],domain:[0,25]},lan:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[1.268727,1.303081,1.367868,1.33593,1.371311,1.416287,1.45972]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[8.791105,8.512206,9.47052,9.002216,9.32431,9.51654,10.062077]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[17.407253,24.523837,29.350642,30.482188,33.044249,38.067611,42.394521]}],domain:[0,45]},wan:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[125.880908,127.578728,129.187599,127.870013,130.029483,131.213184,132.026715]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[229.241115,228.943014,235.068759,228.428543,232.210092,237.212998,239.833963]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[143.444679,154.067028,157.327582,161.762104,164.443383,167.962048,174.514319]}],domain:[118,246]}}}},Mc={registration:{labels:["10","20","30","40","50","60","70","80","90","100"],panels:{client:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[.150464,.248797,.346698,.449716,.55075,.65588,.752471,.855776,.922057,1.070652]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[.074416,.130077,.13232,.171232,.276005,.296248,.399938,.47753,.586807,.69762]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[.482488,.43239,.4408,.470178,.486899,.502649,.52375,.559294,.595441,.635526]}]},lan:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[1.304561,1.460341,1.567722,1.681471,1.815636,1.940632,2.064153,2.174175,2.255203,2.439236]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[1.171848,1.212942,1.277732,1.342849,1.43981,1.514936,1.608953,1.744066,1.867164,2.006318]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[1.560552,1.584888,1.620319,1.652572,1.670581,1.713253,1.748197,1.780812,1.845546,1.892553]}]},wan:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[131.503365,134.214364,135.731185,136.998522,137.742416,138.600228,139.036797,139.66664,140.240173,140.866343]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[127.867577,129.689447,130.33866,130.383557,130.553496,131.461518,131.581205,132.520405,133.321183,133.618638]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[67.642496,68.497877,69.267213,69.780233,70.124374,70.424628,70.741083,71.09159,71.344007,71.665549]}]}}},authentication:{labels:["10","20","30","40","50","60","70","80","90","100"],panels:{client:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[.149072,.248114,.349492,.44337,.551062,.65666,.767934,.857875,.921224,1.07542]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[4.070745,6.179417,8.269483,10.225707,12.537493,13.100085,15.125139,17.214673,18.67109,20.522861]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[22.655983,45.384012,65.932117,88.61457,110.012316,131.004532,153.040378,172.959069,196.942237,221.758631]}]},lan:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[1.252173,1.406723,1.487519,1.583509,1.697189,1.805276,1.92697,2.043497,2.100507,2.247784]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[5.741749,7.068794,9.24164,11.508435,13.406552,14.276681,16.445892,17.925933,20.256802,21.64856]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[26.777547,47.946852,71.827816,92.549481,113.920767,136.299882,155.755064,177.941083,203.008085,224.879353]}]},wan:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[128.397353,129.649804,129.606317,130.506604,131.05423,131.417203,131.736722,132.377456,132.432254,132.611935]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[70.472128,73.530497,76.544668,81.107462,80.654816,82.321099,84.202031,86.483077,88.538331,91.071884]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[156.529651,180.568875,205.151438,226.204574,248.005869,272.720598,294.624159,314.630498,339.801328,362.215979]}]}}},passwordUpdate:{labels:["10","20","30","40","50","60","70","80","90","100"],panels:{client:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[.275447,.493564,.720356,.962575,1.217049,1.50112,1.786403,2.103837,2.306297,2.762335]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[4.611094,7.03326,9.363889,12.363321,14.414505,15.168695,17.577865,20.707924,22.977932,24.409475]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[47.246091,91.510477,137.77644,181.589119,226.733893,270.532074,314.552364,361.91908,409.744498,457.130307]}]},lan:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[1.47661,1.738314,2.004192,2.292079,2.58434,2.889312,3.216327,3.574202,3.809009,4.39923]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[10.625056,12.803482,16.205956,20.421336,22.566143,25.705872,29.964487,33.813212,38.964457,43.227006]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[50.066252,93.545017,141.584969,183.268341,228.558245,272.015457,320.523141,361.535248,407.8349,456.526161]}]},wan:{series:[{name:"UpSPA",color:"#164a7b",dashArray:"",values:[132.106869,135.309405,136.756162,138.485194,139.413303,140.395209,141.457665,142.64245,143.532753,144.753528]},{name:"PAS-TA-U",color:"#d17722",dashArray:"11 7",values:[241.245921,253.213819,270.184482,292.397469,317.090528,349.08259,385.68186,429.021124,476.964763,530.487304]},{name:"AugSSO",color:"#4b8458",dashArray:"3 6",values:[180.515448,228.228157,274.246884,324.78107,367.634007,412.314884,455.995468,506.937729,556.150051,597.398606]}]}}}},Kc={registration:{labels:["10","20","30","40","50","60","70","80","90","100"],panels:{local:{series:[{name:"Quorum/ABD",color:"#164a7b",dashArray:"",values:[.4358,.8288,1.0118,1.3908,1.9034,2.1563,2.4791,3.0339,3.179,3.7227]},{name:"Signed PBB",color:"#7b61a8",dashArray:"11 6",values:[.381248,.738695,1.313871,1.562625,1.849927,2.262291,2.550794,3.091769,3.462963,3.868796]},{name:"DKG PBB",color:"#0b8f8c",dashArray:"3 5",values:[.514963,.953678,1.415335,2.032783,2.745686,2.985749,4.249278,3.763583,4.415139,4.750087]},{name:"Blockchain · shared local",color:"#d17722",dashArray:"12 5 3 5",values:[.922893,1.457822,2.153572,2.840635,3.376361,4.337644,4.668524,5.607912,5.994522,6.736542]}]},lan:{series:[{name:"Quorum/ABD",color:"#164a7b",dashArray:"",values:[3.594114,3.970045,4.261176,4.713546,5.096217,5.339952,5.789535,6.235852,6.514241,7.068231]},{name:"Signed PBB",color:"#7b61a8",dashArray:"11 6",values:[3.523979,3.883149,4.262349,4.769845,5.093068,5.531644,5.85987,6.344053,6.799581,7.204865]},{name:"DKG PBB",color:"#0b8f8c",dashArray:"3 5",values:[4.649846,5.134839,5.654684,6.312757,6.67933,7.387504,7.824333,8.215974,9.00281,9.330863]},{name:"Public chain",color:"#b84d4d",dashArray:"12 5 3 5",values:[12354.162025,12354.837798,12354.604166,12355.6153,12356.44843,12357.429686,12359.568032,12358.312247,12359.573982,12359.196326]},{name:"L2 chain",color:"#d17722",dashArray:"7 5",values:[2133.852689,2135.258207,2134.90471,2134.997114,2136.424641,2137.629885,2137.626899,2138.273149,2138.70159,2139.663208]},{name:"Permissioned chain",color:"#4b8458",dashArray:"2 4",values:[60.396864,61.22213,61.788318,62.565947,62.857662,63.976759,64.396033,65.519846,65.74957,66.749311]}]}}},secretUpdate:{labels:["10","20","30","40","50","60","70","80","90","100"],panels:{local:{series:[{name:"Quorum/ABD",color:"#164a7b",dashArray:"",values:[.4467,.8547,1.2006,1.5059,1.773,2.2364,6.9729,9.0048,8.3609,11.2413]},{name:"Signed PBB",color:"#7b61a8",dashArray:"11 6",values:[.412395,.796834,1.099658,1.5769,1.936329,2.362771,2.779755,3.085528,3.433529,3.852159]},{name:"DKG PBB",color:"#0b8f8c",dashArray:"3 5",values:[.549647,.990656,1.449301,1.982633,2.437678,3.032207,3.755287,3.833092,4.493569,4.85219]},{name:"Blockchain · shared local",color:"#d17722",dashArray:"12 5 3 5",values:[.811,1.507674,2.212363,3.015792,3.405217,4.123879,4.714374,5.53239,6.148016,6.854568]}]},lan:{series:[{name:"Quorum/ABD",color:"#164a7b",dashArray:"",values:[4.181999,4.512377,4.839213,5.300109,9.129537,10.504749,11.392014,12.986258,12.25443,14.921573]},{name:"Signed PBB",color:"#7b61a8",dashArray:"11 6",values:[4.074837,4.464454,5.034385,5.328842,5.719983,6.155702,6.683465,6.857082,7.345752,7.876117]},{name:"DKG PBB",color:"#0b8f8c",dashArray:"3 5",values:[5.203578,5.70597,6.203228,6.819466,7.264999,7.906377,8.731271,8.832862,9.742236,9.924158]},{name:"Public chain",color:"#b84d4d",dashArray:"12 5 3 5",values:[12355.255039,12353.608256,12356.006084,12357.180735,12357.332602,12357.561408,12359.123777,12359.101789,12361.265803,12359.527899]},{name:"L2 chain",color:"#d17722",dashArray:"7 5",values:[2134.000582,2135.459104,2136.63468,2137.025666,2137.295661,2137.030418,2136.891998,2139.201833,2139.518644,2140.880755]},{name:"Permissioned chain",color:"#4b8458",dashArray:"2 4",values:[60.967745,61.636152,62.416104,63.206561,63.732476,64.357146,65.130285,66.002932,66.495948,67.164976]}]}}},passwordUpdate:{labels:["10","20","30","40","50","60","70","80","90","100"],panels:{local:{series:[{name:"Quorum/ABD",color:"#164a7b",dashArray:"",values:[1.0183,1.9043,6.9312,12.3324,15.5459,17.5592,21.9401,22.3659,24.5655,29.1757]},{name:"Signed PBB",color:"#7b61a8",dashArray:"11 6",values:[.903637,1.661521,2.396007,3.327339,4.138306,5.45822,6.12808,6.364321,7.376414,8.254218]},{name:"DKG PBB",color:"#0b8f8c",dashArray:"3 5",values:[.894433,1.684284,2.495876,3.469696,4.093315,5.953122,6.445747,6.533122,7.630808,8.220148]},{name:"Blockchain · shared local",color:"#d17722",dashArray:"12 5 3 5",values:[1.014246,1.847189,2.761906,3.857059,4.347346,5.114755,5.874095,7.012413,7.824678,8.609863]}]},lan:{series:[{name:"Quorum/ABD",color:"#164a7b",dashArray:"",values:[4.146824,5.333895,11.653187,15.770468,17.654607,20.225849,24.861616,25.497684,31.01354,34.706568]},{name:"Signed PBB",color:"#7b61a8",dashArray:"11 6",values:[3.975705,4.835975,5.736515,6.461613,7.376457,8.751642,9.522768,9.820156,10.758494,11.659799]},{name:"DKG PBB",color:"#0b8f8c",dashArray:"3 5",values:[5.016997,5.857932,6.90765,7.678986,8.322455,10.143683,10.706458,11.027112,12.091226,12.68977]},{name:"Public chain",color:"#b84d4d",dashArray:"12 5 3 5",values:[12352.949392,12354.268787,12355.975709,12355.837465,12356.724226,12359.755963,12358.769983,12359.974084,12362.855912,12361.63929]},{name:"L2 chain",color:"#d17722",dashArray:"7 5",values:[2133.489311,2135.112682,2135.076372,2136.351845,2137.029429,2137.508101,2138.481742,2139.005838,2139.544095,2140.942889]},{name:"Permissioned chain",color:"#4b8458",dashArray:"2 4",values:[60.707813,61.550175,62.431433,63.466164,64.271797,65.017648,66.097599,66.8757,67.673392,68.649473]}]}}}},Ke={registration:{title:"Registration",key:"registration"},authentication:{title:"Authentication",key:"authentication"},"password-update":{title:"Password Update",key:"passwordUpdate"},"secret-update":{title:"Secret Update",key:"secretUpdate"}},Er={"aux-sso-low-registration":Ke.registration,"aux-sso-low-authentication":Ke.authentication,"aux-sso-low-password-update":Ke["password-update"]},Cr={"aux-sso-asymptotic-registration":Ke.registration,"aux-sso-asymptotic-authentication":Ke.authentication,"aux-sso-asymptotic-password-update":Ke["password-update"]},Ir={"aux-resilient-registration":Ke.registration,"aux-resilient-secret-update":Ke["secret-update"],"aux-resilient-password-update":Ke["password-update"]},Bc={client:"Client",provider:"Storage Provider",lan:"LAN",wan:"WAN",local:"Complete local"};function ai(n,e,t){return`<div class="slide-shell evaluation-aux-slide" data-evaluation-kind="${e}">
    <h2>${n}</h2>
    ${e==="resilient"?"":'<div class="eval-shared-legend"><span class="upspa">UpSPA</span><span class="pastau">PAS-TA-U</span><span class="augsso">AugSSO</span></div>'}
    <div class="evaluation-chart-grid ${e}">${t}</div>
  </div>`}function ri({dataset:n,panelKey:e,phaseTitle:t,kind:s,index:i}){const a=n.panels[e],[r,o]=a.domain||[],l=s==="asymptotic",c=s==="resilient";return`<article data-panel="${e}">${ie({labels:n.labels,series:a.series,yMin:r,yMax:o,yScale:c?"log":"linear",yLabel:"Median latency (ms)",xLabel:l?"nₛₚ · tₛₚ = 0.6nₛₚ":c?"nₛₚ · tₛₚ=⌈0.6nₛₚ⌉ · qₛₚ=⌈0.8nₛₚ⌉":"(nₛₚ/tₛₚ)",title:`${c&&e==="lan"?"Composed LAN":Bc[e]} · ${t}`,width:s==="low"?700:s==="asymptotic"?465:700,height:s==="low"?320:s==="asymptotic"?585:610,xTickIndices:l||c?[0,3,6,9]:void 0,legendColumns:c&&e==="local"?2:3,showLegend:c,dataKey:`${s}-${t.toLowerCase().replaceAll(" ","-")}-${e}-${i}`})}</article>`}function Dc(n){const e=Er[n];if(!e)return null;const t=Fc[e.key],s=["client","provider","lan","wan"];return ai(`AUX · ${e.title} — Low-Threshold Comparison`,"low",s.map((i,a)=>ri({dataset:t,panelKey:i,phaseTitle:e.title,kind:"low",index:a})).join(""))}function zc(n){const e=Cr[n];if(!e)return null;const t=Mc[e.key],s=["client","lan","wan"];return ai(`AUX · ${e.title} — Asymptotic Comparison`,"asymptotic",s.map((i,a)=>ri({dataset:t,panelKey:i,phaseTitle:e.title,kind:"asymptotic",index:a})).join(""))}function Hc(n){const e=Ir[n];if(!e)return null;const t=Kc[e.key],s=["local","lan"];return ai(`AUX · ${e.title} — UpSPA vs RoUpSPA`,"resilient",s.map((i,a)=>ri({dataset:t,panelKey:i,phaseTitle:e.title,kind:"resilient",index:a})).join(""))}function Wc(n){return Dc(n)||zc(n)||Hc(n)}Object.freeze([...Object.keys(Er),...Object.keys(Cr),...Object.keys(Ir)]);const f=String.raw,Vc=(n="")=>String(n).replace(/\bAUX\b|\bAux\b/g,"Aux"),ls=[{id:"sp",label:"Storage providers · SPᵢ",kind:""},{id:"user",label:"User · U(uid, pwd)",kind:"user"},{id:"ls",label:"Login server · LSⱼ",kind:"ls"}],cs=[{id:"sp",label:"Active providers · SPᵢ",kind:""},{id:"user",label:"User · U(uid, pwd)",kind:"user"},{id:"ls",label:"Login server · LSⱼ",kind:"ls"}];function z(n,e,t,s,i,a){const r=Vc(n?.title||t),o=n?.citation?"":Wl();return f`<div class="slide-shell">
    <h2>${r}</h2>
    ${a}
    ${o}
  </div>`}function Te(n,e=405){return mt({...n,dense:!0}).replace('style="--actor-columns:',`style="min-height:${e}px;--actor-columns:`)}function Ft(n,e,t=[]){const s=n.map((a,r)=>f`<th style="padding:5px 7px;font-size:12px;line-height:1.1;${t[r]?`width:${t[r]}`:""}">${a}</th>`).join(""),i=e.map(a=>f`<tr>${a.map((r,o)=>f`<td style="padding:5px 7px;font-size:12.5px;line-height:1.16;${t[o]?`width:${t[o]}`:""}">${r}</td>`).join("")}</tr>`).join("");return f`<table class="status-table" style="margin-top:8px;table-layout:fixed"><thead><tr>${s}</tr></thead><tbody>${i}</tbody></table>`}function Gc(n){return f`<div class="game-chain">${n.map(([e,t],s)=>f`
    <div class="game-step"><strong>${e}</strong><span>${t}</span></div>${s<n.length-1?'<div class="game-arrow">↓</div>':""}
  `).join("")}</div>`}function gt(n,e=3){return f`<div style="display:grid;grid-template-columns:repeat(${e},1fr);gap:12px;margin-top:10px">${n.map(([t,s,i="var(--provider)"])=>f`
    <div style="padding:12px 14px;border-top:4px solid ${i};background:rgba(255,255,255,.62);min-height:92px">
      <strong style="display:block;font-size:16px">${t}</strong>
      <span style="display:block;margin-top:5px;font-size:13.5px;line-height:1.22;color:var(--ink-soft)">${s}</span>
    </div>`).join("")}</div>`}function Ue(n){return f`<div style="position:absolute;right:0;top:48px;text-align:right">${n.map(([e,t])=>Is(e,t)).join("")}</div>`}function Qc(n){const e=f`${Ue([["all nₛₚ providers",""],["no Store/Discard","user"]])}${Te({actors:ls.slice(0,2).reverse(),steps:[{number:"1-5",from:"user",to:"user",local:!0,label:f`\(R_{sp}\leftarrow\{0,1\}^{\lambda}\); \((K,\{k_i\})\leftarrow\mathsf{TOPRFGen}\); \((ssk,svk)\leftarrow\mathsf{SignKeyGen}\); \(K_0\leftarrow\mathsf{KeyGen}\); \(c_{id}\leftarrow\mathsf{Enc}_{F_K(pwd)}(ssk\|R_{sp}\|K_0)\)`},{number:6,from:"user",to:"sp",label:f`\(\langle uid,svk,c_{id},k_i\rangle\)`},{number:7,from:"sp",to:"user",label:f`\(\mathsf{OK}/\mathsf{FAIL}\); accept only if no setup record exists`,state:"committed"}]},420)}
  <div class="claim" style="margin-top:2px;padding:10px 14px;font-size:15px">Success requires \(\mathsf{OK}\) from every provider. The public \(uid\)-indexed setup record remains subject to deployment-side onboarding protection.</div>`;return z(n,"Aux · UpSPA protocol","UpSPA Setup - complete phase","upspa-lifecycle","Thesis, UpSPA Construction, Fig. “UpSPA setup phase”.",e)}function Yc(n){const e=[{number:1,from:"user",to:"sp",label:f`\(uid\) to every provider`},{number:2,from:"sp",to:"user",label:f`\(\mathsf{OK}/\mathsf{FAIL}\) from all \(n_{sp}\)`},{number:3,from:"user",to:"sp",label:f`\(\mathsf{TOPRF}(pwd,\{k_i\}_{i\in[t_{sp}]})\rightarrow F_K(pwd)\)`},{number:4,from:"sp",to:"user",label:f`committed \(c_{id}\)`},{number:"5-8",from:"user",to:"user",local:!0,label:f`\(ssk\|R_{sp}\|K_0\leftarrow\mathsf{Dec}(c_{id})\); \(SUid_{l,i,j}=H(R_{sp}\|ls_j\|i)\); sample \(R^{ls_j}\), set \(ctr_{ac}=0\); \(c_{sp}=\mathsf{Enc}_{K_0}(R^{ls_j}\|ctr_{ac})\), \(vInfo=H(R^{ls_j}\|ls_j)\)`},{number:9,from:"user",to:"sp",label:f`\(\langle SUid_{l,i,j},c_{sp}\rangle\)`,state:"pending"},{number:10,from:"sp",to:"user",label:f`pending \(\mathsf{OK}/\mathsf{FAIL}\) from all \(n_{sp}\)`},{number:11,from:"user",to:"ls",label:f`\(\langle uid,vInfo\rangle\)`},{number:12,from:"ls",to:"user",label:f`\(\mathsf{OK}/\mathsf{FAIL}\)`},{number:13,from:"user",to:"sp",label:f`\(\mathsf{Store}/\mathsf{Discard}\)`},{number:14,from:"sp",to:"user",label:f`final \(\mathsf{OK}/\mathsf{FAIL}\) from all \(n_{sp}\)`,state:"committed"}],t=f`${Ue([["all nₛₚ writes",""],["pending → committed","pending"]])}${Te({actors:ls,steps:e},418)}`;return z(n,"Aux · UpSPA protocol","UpSPA Registration - complete phase","upspa-registration","Thesis, UpSPA Construction, Fig. “UpSPA registration phase”.",t)}function Jc(n){const e=[{number:1,from:"user",to:"sp",label:f`\(uid\)`},{number:2,from:"sp",to:"user",label:f`valid setup response; at least \(t_{sp}\)`},{number:3,from:"user",to:"sp",label:f`\(\mathsf{TOPRF}(pwd,\{k_i\}_{i\in[t_{sp}]})\rightarrow F_K(pwd)\)`},{number:4,from:"sp",to:"user",label:f`committed \(c_{id}\)`},{number:"5-6",from:"user",to:"user",local:!0,label:f`decrypt \(c_{id}\rightarrow ssk\|R_{sp}\|K_0\); derive \(SUid_{l,i,j}=H(R_{sp}\|ls_j\|i)\)`},{number:7,from:"user",to:"sp",label:f`\(SUid_{l,i,j}\)`},{number:8,from:"sp",to:"user",label:f`committed \(c_{sp}\) or \(\mathsf{FAIL}\)`},{number:"9-11",from:"user",to:"user",local:!0,label:f`decrypt \(R^{ls_j}\|ctr_{ac}\); select valid maximum counter; \(vInfo'=H(R^{ls_j}\|ls_j)\)`},{number:12,from:"user",to:"ls",label:f`\(\langle uid,vInfo'\rangle\)`},{number:13,from:"ls",to:"user",label:f`\(\mathsf{OK}/\mathsf{FAIL}\)`,state:"committed"}],t=f`${Ue([["tₛₚ valid reads","user"],["committed only",""]])}${Te({actors:ls,steps:e},430)}
  <div class="claim" style="margin-top:2px;padding:9px 13px;font-size:15px">Authentication is read-only: no pending state and no \(\mathsf{Store}/\mathsf{Discard}\).</div>`;return z(n,"Aux · UpSPA protocol","UpSPA Authentication - complete phase","upspa-authentication","Thesis, UpSPA Construction, Fig. “UpSPA authentication phase”.",t)}function Xc(n){const e=[{number:1,from:"user",to:"sp",label:f`\(uid\) to all providers`},{number:2,from:"sp",to:"user",label:f`setup response from all \(n_{sp}\)`},{number:3,from:"user",to:"sp",label:f`TOPRF on current \(pwd\) with any \(t_{sp}\) valid shares`},{number:4,from:"sp",to:"user",label:f`committed \(c_{id}\)`},{number:"5-6",from:"user",to:"user",local:!0,label:f`decrypt \(c_{id}\); derive each \(SUid_{l,i,j}\)`},{number:7,from:"user",to:"sp",label:f`\(SUid_{l,i,j}\)`},{number:8,from:"sp",to:"user",label:f`committed \(c_{sp}\) or \(\mathsf{FAIL}\)`},{number:"9-13",from:"user",to:"user",local:!0,label:f`decrypt/select max \(ctr_{ac}\); compute current \(vInfo'\); sample \(R^{ls_j}_{new}\); \(vInfo_{new}=H(R^{ls_j}_{new}\|ls_j)\); \(ctr'_{ac}=ctr_{max}+1\), \(c'_{sp}=\mathsf{Enc}_{K_0}(R^{ls_j}_{new}\|ctr'_{ac})\)`},{number:14,from:"user",to:"sp",label:f`\(\langle SUid_{l,i,j},c'_{sp}\rangle\) replacement`,state:"pending"},{number:15,from:"sp",to:"user",label:f`pending \(\mathsf{OK}/\mathsf{FAIL}\) from all \(n_{sp}\)`},{number:16,from:"user",to:"ls",label:f`\(\langle uid,vInfo',vInfo_{new}\rangle\)`},{number:17,from:"ls",to:"user",label:f`\(\mathsf{OK}/\mathsf{FAIL}\)`},{number:18,from:"user",to:"sp",label:f`\(\mathsf{Store}/\mathsf{Discard}\)`},{number:19,from:"sp",to:"user",label:f`final acknowledgements from all \(n_{sp}\)`,state:"committed"}],t=f`${Ue([["one account only","user"],["old committed remains readable","pending"]])}${Te({actors:ls,steps:e},390)}`;return z(n,"Aux · UpSPA protocol","UpSPA Secret Update - complete phase","upspa-two-updates","Thesis, UpSPA Construction, Fig. “UpSPA secret-update phase”.",t)}function Zc(n){const e=ls.slice(0,2).reverse(),t=[{number:1,from:"user",to:"sp",label:f`\(uid\) to all providers`},{number:2,from:"sp",to:"user",label:f`setup response from all \(n_{sp}\)`},{number:3,from:"user",to:"sp",label:f`TOPRF on current \(pwd\)`},{number:4,from:"sp",to:"user",label:f`committed \(c_{id}\)`},{number:"5-8",from:"user",to:"user",local:!0,label:f`decrypt \(ssk\|R_{sp}\|K_0\); generate fresh \((K_{new},\{k_{i,new}\})\); \(c_{id,new}=\mathsf{Enc}_{F_{K_{new}}(pwd_{new})}(ssk\|R_{sp}\|K_0)\); \(\sigma_i=\mathsf{Sign}_{ssk}(uid\|c_{id,new}\|k_{i,new}\|time\|i)\)`},{number:9,from:"user",to:"sp",label:f`\(\langle uid,\sigma_i,c_{id,new},k_{i,new},time,i\rangle\)`,state:"pending"},{number:10,from:"sp",to:"user",label:f`signature + freshness check; \(\mathsf{OK}/\mathsf{FAIL}\) from all \(n_{sp}\)`},{number:11,from:"user",to:"sp",label:f`\(\mathsf{Store}/\mathsf{Discard}\)`},{number:12,from:"sp",to:"user",label:f`final acknowledgements from all \(n_{sp}\)`,state:"committed"}],s=f`${Ue([["O(nₛₚ), independent of nₗₛ","changed"],["no login server","user"]])}${Te({actors:e,steps:t},425)}
  <div class="claim" style="margin-top:2px;padding:9px 13px;font-size:15px">\(K_0\), every account ciphertext, and every login-server verifier remain unchanged.</div>`;return z(n,"Aux · UpSPA protocol","UpSPA Password Update - complete phase","upspa-two-updates","Thesis, UpSPA Construction, Fig. “UpSPA password-update phase”.",s)}function ed(n){const t=f`<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:11px;margin-top:8px">${[["1 · Login-server boundary","Keep pwd and deterministic password-derived values away from login servers.","Domain-specific high-entropy account secret"],["2 · Subthreshold privacy","Prevent fewer than tₛₚ providers from testing password guesses offline.","Threshold OPRF output protects cᵢd"],["3 · Independent updates","Rotate one account secret without coupling every account; change pwd without rewriting them.","Compact root + per-site layer"],["4 · Namespace/domain separation","Avoid public-only account names and cross-domain reuse after setup.","Hidden Rₛₚ routing + domain binding"],["5 · Authorization/freshness","A lookup value alone must not authorize replacement; old valid ciphertexts must not become current.","AE, signatures, counters, timestamp"],["6 · One committed outcome","Intermediate state must not become an accepted completed phase.","Pending/committed + all-provider finalization"],["7 · Ordinary deployment","Keep LS outside threshold crypto while stating the all-provider liveness cost.","Verifier-only LS; explicit DoS boundary"]].map(([s,i,a])=>f`
    <div style="padding:11px 12px;border-top:4px solid var(--user);background:rgba(255,255,255,.62);min-height:150px">
      <strong style="display:block;font-size:15px">${s}</strong>
      <span style="display:block;margin-top:7px;font-size:13px;line-height:1.2;color:var(--ink-soft)">${i}</span>
      <em style="display:block;margin-top:10px;font-style:normal;font-size:12px;font-weight:800;color:var(--login)">${a}</em>
    </div>`).join("")}</div>
    <div class="warning-box" style="margin-top:12px;padding:10px 14px;font-size:14px"><strong>Scope:</strong> the hidden-namespace prediction claim needs hidden-input output unpredictability; collision resistance alone supplies binding, not unpredictability.</div>`;return z(n,"Aux · UpSPA design","UpSPA design challenges - full map","upspa-design-challenges","Thesis, UpSPA Threat Model, “Design Challenges of UpSPA”.",t)}function td(n){const e=[["Adversary","Static, non-uniform PPT malicious adversary; the corruption set is fixed for the complete execution."],["Corruption",f`At most \(t_{sp}-1\) storage providers, \(n_{ls}-1\) login servers, and \(n_{user}-1\) users.`],["Honest target","At least one honest user and one honest login server; a corrupted target LS is outside the guarantee."],["Channels and time","Authenticated server channels, synchronous bounded delay, and the timestamp clock assumptions used by Password Update."],["Availability",f`Authentication needs \(t_{sp}\) valid responses; every UpSPA state-changing boundary needs all \(n_{sp}\).`]],t=[["Password claim","The view adds no new offline verification predicate; it does not make a human password guess negligible."],["Cryptographic assumptions","TOPRF PRF + receiver-input obliviousness; AE IND-CPA, integrity, and key binding; EUF-CMA signatures; collision-resistant hash."],["Completed phases","Safety only after protocol-defined final acknowledgements; interrupted finalization and repair are outside the theorem."],["Trusted endpoint","Malware, keyloggers, memory scraping, malicious extensions/OS/client code are excluded."],["Not claimed","Anonymity, traffic-analysis resistance, account recovery, permanent provider replacement, adaptive/mobile corruption, or general crash recovery."]],s=(a,r)=>f`<div style="display:grid;gap:8px">${a.map(([o,l])=>f`<div style="padding:10px 13px;border-left:4px solid ${r};background:rgba(255,255,255,.62)"><strong style="display:block;font-size:15px">${o}</strong><span style="display:block;margin-top:3px;font-size:13px;line-height:1.2;color:var(--ink-soft)">${l}</span></div>`).join("")}</div>`,i=f`<div class="backup-columns" style="gap:22px;margin-top:6px">${s(e,"var(--user)")}${s(t,"var(--danger)")}</div>`;return z(n,"Aux · UpSPA security","UpSPA threat model - exact boundary","upspa-threat-model","Thesis, UpSPA Threat Model, §§ System Model and Threat Model.",i)}function sd(n){const e=[["Setup","Sample simulated root/signing/TOPRF material and dummy cᵢd; expose the corrupted-provider view.","Only after all nₛₚ accept."],["Registration","Use TOPRF/logical tables; create dummy account ciphertext and pending provider tuples; reproduce LS decision.","After LS accepts, Store, and all nₛₚ final acknowledgements."],["Authentication","Read committed logical root/account values, ignore pending state, select maximum valid counter, reproduce verifier decision.","No pending state and no Store/Discard."],["Secret update","Sample new account secret; keep dummy replacement pending; reproduce LS decision and exact finalization.","After LS accepts, Store, and all nₛₚ final acknowledgements."],["Password update","Generate fresh TOPRF key/shares; dummy cᵢd,new; sign exact uid‖cᵢd,new‖kᵢ,new‖time‖i; keep pending.","After Store and all nₛₚ final acknowledgements."]],t=Gc([["G₀","stopped real execution"],["G₁","replace TOPRF values and honest-receiver transcripts"],["G₂","replace identification plaintexts"],["G₃","replace account plaintexts"],["G₄","ideal FUpSPA + Sim"]]),s=f`<div class="split-60" style="gap:24px;align-items:start"><div>${Ft(["Phase","Simulator state/view","Ideal success point"],e,["15%","57%","28%"])}</div><div>${t}<div class="claim" style="margin-top:10px;padding:10px 13px;font-size:14px">Pending/committed mechanics stay local to \(\mathsf{Sim}\); \(\mathcal F_{UpSPA}\) contains only the logical result of a completed phase.</div></div></div>`;return z(n,"Aux · UpSPA proof","UpSPA simulator - phase-to-ideal map","upspa-security","Thesis, UpSPA Security Analysis, Simulation Behavior and Games G₀-G₄.",s)}function nd(n){const e=f`<div class="equation-box" style="margin-top:12px;font-size:18px;line-height:1.35">
    \[\begin{aligned}
    \mathsf{Adv}^{\mathsf{real/ideal}}_{UpSPA,\mathcal F_{UpSPA}}(\mathcal A)\le{}&\mathsf{Adv}^{prf}_{TOPRF}(\mathcal B_{prf})\\
    &+q_{\mathsf{id}}\mathsf{Adv}^{ind\text{-}cpa}_{AE}(\mathcal B_{cpa,id})
    +q_{\mathsf{sp}}\mathsf{Adv}^{ind\text{-}cpa}_{AE}(\mathcal B_{cpa,sp}).
    \end{aligned}\]
  </div>
  ${gt([[f`\(q_{\mathsf{id}}\)`,"honest encryptions producing cᵢd or cᵢd,new"],[f`\(q_{\mathsf{sp}}\)`,"honest account-ciphertext encryptions; this proof count is not RoUpSPA’s availability quorum"],["Completion","only committed completed phases; interrupted finalization is outside the theorem"]],3)}
  <div class="warning-box" style="margin-top:14px;padding:10px 14px;font-size:14px"><strong>Proof-accounting note.</strong> The theorem assumes receiver-input obliviousness and G₁ says it replaces honest-receiver transcripts, but the displayed final bound has no separately named receiver-input-obliviousness term. This transcription preserves the thesis formula; it does not invent one.</div>`;return z(n,"Aux · UpSPA proof","UpSPA final real/ideal advantage bound","upspa-security","Thesis, UpSPA Security Analysis, Completion of the Theorem.",e)}function id(n){const e=cs.slice(0,2).reverse(),t=[{number:"1-6",from:"user",to:"user",local:!0,label:f`sample \(R_{sp}\); generate \((K,\{k_i\})\), \((ssk,svk)\), and \(K_0\); set \(ctr_{id}=0\); \(c_{id}=\mathsf{Enc}_{F_K(pwd)}(ssk\|R_{sp}\|K_0\|ctr_{id})\)`},{number:7,from:"user",to:"sp",label:f`\(\langle uid,svk,c_{id},k_i\rangle\)`},{number:8,from:"sp",to:"user",label:f`\(\mathsf{OK}/\mathsf{FAIL}\) from all \(n_{sp}\)`,state:"committed"}],s=f`${Ue([["all nₛₚ required",""],["ctrᵢd = 0","changed"]])}${Te({actors:e,steps:t},420)}
    <div class="claim" style="margin-top:2px;padding:10px 14px;font-size:15px">Setup is the exception to quorum availability: synchronization can copy ciphertext state, but it cannot restore a provider’s missing long-term TOPRF share.</div>`;return z(n,"Aux · RoUpSPA protocol","RoUpSPA Setup - complete phase","roupspa-phase-semantics","Thesis, RoUpSPA Construction, Fig. “RoUpSPA setup phase”.",s)}function ad(n){const e=[{number:1,from:"user",to:"sp",label:f`\(uid\)`},{number:2,from:"sp",to:"user",label:f`at least \(t_{sp}\) valid active identification responses`},{number:3,from:"user",to:"sp",label:f`TOPRF on \(pwd\)`},{number:4,from:"sp",to:"user",label:f`current \(c_{id}\)`},{number:"5-11",from:"user",to:"user",local:!0,label:f`decrypt \(ssk\|R_{sp}\|K_0\|ctr_{id}\); \(SUid_{l,j}=H(R_{sp}\|ls_j)\); sample \(R^{ls_j}\), \(ctr_{ac}=0\); compute \(c_{sp}\), \(vInfo\); \(\sigma_j=\mathsf{Sign}_{ssk}(uid\|SUid_{l,j}\|c_{sp}\|ctr_{ac})\)`},{number:12,from:"user",to:"ls",label:f`\(\langle\mathsf{Prepare},uid,vInfo\rangle\)`},{number:13,from:"ls",to:"user",label:f`\(\mathsf{OK}/\mathsf{FAIL}\); tentative at LS`,state:"pending"},{number:14,from:"user",to:"sp",label:f`\(\langle uid,SUid_{l,j},c_{sp},ctr_{ac},\sigma_j\rangle\); provider installs CURRENT`},{number:15,from:"sp",to:"user",label:f`\(\mathsf{OK}/\mathsf{FAIL}\); \(q_{sp}\) durable matching writes`,state:"committed"},{number:16,from:"user",to:"ls",label:f`\(\langle\mathsf{Store}/\mathsf{Discard},uid,vInfo\rangle\); terminal, no LS ack`}],t=f`${Ue([["tₛₚ read","user"],["qₛₚ durable writes","changed"]])}${Te({actors:cs,steps:e},365)}${sourceConflict()}`;return z(n,"Aux · RoUpSPA protocol","RoUpSPA Registration - complete phase","roupspa-phase-semantics","Thesis, RoUpSPA Construction, Fig. “RoUpSPA registration phase” and construction preamble.",t)}function rd(n){const e=[{number:1,from:"user",to:"sp",label:f`\(uid\)`},{number:2,from:"sp",to:"user",label:f`\(t_{sp}\) valid active identification responses with one \(svk\)`},{number:3,from:"user",to:"sp",label:f`TOPRF on \(pwd\)`},{number:4,from:"sp",to:"user",label:f`current identification candidates`},{number:"5-7",from:"user",to:"user",local:!0,label:f`select max \(ctr_{id}\), decrypt \(c_{id}\), recover \(ssk\|R_{sp}\|K_0\), derive shared \(SUid_{l,j}=H(R_{sp}\|ls_j)\)`},{number:8,from:"user",to:"sp",label:f`\(SUid_{l,j}\)`},{number:9,from:"sp",to:"user",label:f`\(t_{sp}\) valid active account candidates`},{number:"10-12",from:"user",to:"user",local:!0,label:f`AE-decrypt and check bound counter; reject max-counter ties; select unique maximum \(ctr_{ac}\); \(vInfo'=H(R^{ls_j}\|ls_j)\)`},{number:13,from:"user",to:"ls",label:f`\(\langle uid,vInfo'\rangle\)`},{number:14,from:"ls",to:"user",label:f`\(\mathsf{OK}/\mathsf{FAIL}\)`,state:"committed"}],t=f`${Ue([["two active tₛₚ sets","user"],["not qₛₚ","danger"]])}${Te({actors:cs,steps:e},425)}
    <div class="claim" style="margin-top:2px;padding:9px 13px;font-size:15px">A stale provider, invalid record, tied maximum, or insufficient active threshold fails without repair or write-back.</div>`;return z(n,"Aux · RoUpSPA protocol","RoUpSPA Authentication - complete phase","roupspa-read-and-authentication","Thesis, RoUpSPA Construction, Fig. “RoUpSPA authentication phase”.",t)}function od(n){const e=[{number:1,from:"user",to:"sp",label:f`\(uid\)`},{number:2,from:"sp",to:"user",label:f`\(t_{sp}\) valid active identification responses`},{number:3,from:"user",to:"sp",label:f`TOPRF on current \(pwd\)`},{number:4,from:"sp",to:"user",label:f`current \(c_{id}\)`},{number:"5-7",from:"user",to:"user",local:!0,label:f`decrypt and recover \(ssk\|R_{sp}\|K_0\); derive \(SUid_{l,j}\)`},{number:8,from:"user",to:"sp",label:f`\(SUid_{l,j}\)`},{number:9,from:"sp",to:"user",label:f`active account candidates`},{number:"10-14",from:"user",to:"user",local:!0,label:f`select max \(ctr_{ac}\); compute current/new verifiers; \(ctr'_{ac}=ctr_{ac}+1\); \(c'_{sp}=\mathsf{Enc}_{K_0}(R^{ls_j}_{new}\|ctr'_{ac})\); \(\sigma_j=\mathsf{Sign}_{ssk}(uid\|SUid_{l,j}\|c'_{sp}\|ctr'_{ac})\)`},{number:15,from:"user",to:"ls",label:f`\(\langle\mathsf{Prepare},uid,vInfo',vInfo_{new}\rangle\)`},{number:16,from:"ls",to:"user",label:f`\(\mathsf{OK}/\mathsf{FAIL}\); tentative verifier`,state:"pending"},{number:17,from:"user",to:"sp",label:f`\(\langle uid,SUid_{l,j},c'_{sp},ctr'_{ac},\sigma_j\rangle\); install CURRENT`},{number:18,from:"sp",to:"user",label:f`\(q_{sp}\) durable matching acknowledgements`,state:"committed"},{number:19,from:"user",to:"ls",label:f`matching \(\mathsf{Store}/\mathsf{Discard}\); terminal, no LS ack`}],t=f`${Ue([["Prepare → qₛₚ write → Store","changed"]])}${Te({actors:cs,steps:e},325)}${sourceConflict()}`;return z(n,"Aux · RoUpSPA protocol","RoUpSPA Secret Update - complete phase","roupspa-phase-semantics","Thesis, RoUpSPA Construction, Fig. “RoUpSPA secret-update phase” and construction preamble.",t)}function ld(n){const e=cs.slice(0,2).reverse(),t=[{number:1,from:"user",to:"sp",label:f`\(uid\)`},{number:2,from:"sp",to:"user",label:f`\(t_{sp}\) valid active identification responses`},{number:3,from:"user",to:"sp",label:f`TOPRF on current \(pwd\)`},{number:4,from:"sp",to:"user",label:f`select largest-counter current \(c_{id}\)`},{number:"5-6",from:"user",to:"user",local:!0,label:f`decrypt \(ssk\|R_{sp}\|K_0\|ctr_{id}\)`},{number:7,from:"user",to:"sp",label:f`TOPRF on \(pwd_{new}\) under the same key/shares`},{number:"8-10",from:"user",to:"user",local:!0,label:f`\(ctr'_{id}=ctr_{id}+1\); \(c'_{id}=\mathsf{Enc}_{F_K(pwd_{new})}(ssk\|R_{sp}\|K_0\|ctr'_{id})\); \(\sigma_{id}=\mathsf{Sign}_{ssk}(uid\|c'_{id}\|ctr'_{id})\)`},{number:11,from:"user",to:"sp",label:f`\(\langle uid,\sigma_{id},c'_{id},ctr'_{id}\rangle\)`,state:"pending"},{number:12,from:"sp",to:"user",label:f`\(q_{sp}\) matching acknowledgements; current root retained meanwhile`},{number:13,from:"user",to:"sp",label:f`\(\mathsf{Store}/\mathsf{Discard}\); terminal, no acknowledgement`,state:"committed"}],s=f`${Ue([["same TOPRF key/shares","user"],["provider tentative state","pending"]])}${Te({actors:e,steps:t},320)}${sourceConflict("password")}`;return z(n,"Aux · RoUpSPA protocol","RoUpSPA Password Update - complete phase","roupspa-phase-semantics","Thesis, RoUpSPA Construction, Fig. “RoUpSPA password-update phase”; Security Analysis, quorum theorem.",s)}function cd(n){const e=[{id:"stale",label:"Recovering SP · STALE",kind:""},{id:"quorum",label:"Provider response set",kind:""},{id:"local",label:"Local validation/install",kind:"user"}],t=[{number:1,from:"stale",to:"quorum",label:f`request current record for one identification/account family`},{number:2,from:"quorum",to:"stale",label:f`collect at least \(q_{sp}\) valid current-record responses`},{number:3,from:"stale",to:"local",label:f`verify exact user signature for counter-positive identification/account candidates`},{number:4,from:"local",to:"local",local:!0,label:f`reject malformed, lower-counter, invalid-signature, and distinct tied-maximum candidates`},{number:5,from:"local",to:"local",local:!0,label:f`select the unique valid largest counter; retain this provider’s own \(k_i\)`},{number:6,from:"local",to:"stale",label:f`install record and mark family ACTIVE; otherwise keep local state and remain STALE`,state:"committed"}],s=f`${Ue([["qₛₚ valid responses","changed"],["no TOPRF","user"],["no LS state change",""]])}${Te({actors:e,steps:t},405)}
  <div class="backup-columns" style="gap:18px;margin-top:2px"><div class="claim" style="margin-top:0;padding:9px 13px;font-size:14px"><strong>Identification:</strong> counter-zero Setup is the unique unsigned initialization exception; later records verify \(uid\|c'_{id}\|ctr'_{id}\).</div><div class="claim" style="margin-top:0;padding:9px 13px;font-size:14px"><strong>Account:</strong> verify \(uid\|SUid_{l,j}\|c_{sp}\|ctr_{ac}\). Synchronization copies ciphertext state, never another provider’s share.</div></div>`;return z(n,"Aux · RoUpSPA protocol","RoUpSPA Synchronization - repair procedure","roupspa-synchronization","Thesis, RoUpSPA Construction, “Storage-provider synchronization and repair”.",s)}function dd(n){const e=f`${gt([["1 · Separate security from availability","tₛₚ protects password-dependent computation; qₛₚ measures sufficient replica participation.","var(--user)"],["2 · Authorize a shared namespace","SUidₗ,ⱼ enables corresponding-replica lookup but grants no write authority; signature + binding + counter do.","var(--changed)"],["3 · Distinguish valid from current","An older ciphertext can still authenticate; counters plus family-specific ACTIVE/STALE state exclude rollback.","var(--pending)"],["4 · Repair without plaintext","A returning provider selects signed ciphertext/counter evidence without pwd, TOPRF output, shares, or decrypted account state.","var(--provider)"],["5 · Limit the resilience claim","Completed quorum-backed safety and conditional stale repair are not consensus, unconditional liveness, or distributed transactions.","var(--danger)"]],5)}
  <div class="equation-box" style="margin-top:18px;text-align:center;font-size:20px">\[n_{sp}\ge q_{sp}\ge t_{sp}>\frac{n_{sp}}2,\qquad 2q_{sp}-n_{sp}>t_{sp}-1\]</div>
  <p class="small" style="margin-top:10px;font-size:15px!important">Shared \(SUid_{l,j}=H(R_{sp}\|ls_j)\) is routing metadata. Signatures authorize/bind records; counters and state rules establish freshness.</p>`;return z(n,"Aux · RoUpSPA design","RoUpSPA design challenges - new obligations only","roupspa-what-changes","Thesis, RoUpSPA Threat Model, “Design Challenges of RoUpSPA”.",e)}function pd(n){const e=f`<div class="proof-map" style="grid-template-columns:1fr 1.25fr;gap:24px;margin-top:8px">
    <div class="bad-events">
      <div class="bad-event"><strong>BadSig</strong><span>Honest provider accepts a write/synchronization record not signed by the honest user. Signed strings are \(uid\|SUid_{l,j}\|c_{sp}\|ctr_{ac}\) and \(uid\|c'_{id}\|ctr'_{id}\).</span></div>
      <div class="bad-event"><strong>BadHash</strong><span>A collision changes account-family binding \(R_{sp}\|ls_j\) or verifier binding \(R^{ls_j}\|ls_j\).</span></div>
      <div class="bad-event"><strong>BadCtxt</strong><span>Fresh adversarial ciphertext acceptance or cross-key acceptance changes a phase result. Honest replay is handled by counters and ACTIVE/STALE rules.</span></div>
    </div>
    <div>
      <div class="equation-box" style="font-size:17px;line-height:1.35">\[\begin{aligned}
      \epsilon^{RoUpSPA}_{\mathsf{bad}}(\lambda)={}&q_{\mathsf{dec}}\mathsf{Adv}^{int\text{-}ctxt}_{AE}(\mathcal B_{ctxt})
      +q_{\mathsf{kb}}\mathsf{Adv}^{kb}_{AE}(\mathcal B_{kb})\\
      &+q_{\mathsf{vk}}\mathsf{Adv}^{euf\text{-}cma}_{Sign}(\mathcal B_{sig})
      +\mathsf{Adv}^{cr}_{H}(\mathcal B_{hash}).
      \end{aligned}\]</div>
      <p class="small" style="margin-top:14px;font-size:15px!important">\(\Pr[BadSig\vee BadHash\vee BadCtxt]\le\epsilon^{RoUpSPA}_{\mathsf{bad}}(\lambda)\). Store/Discard are not additional signed records; exact retransmission is idempotency, not forgery.</p>
    </div>
  </div>`;return z(n,"Aux · RoUpSPA proof","RoUpSPA bad events - exact bindings","roupspa-security","Thesis, RoUpSPA Security Analysis, Bad Events.",e)}function ud(n){const e=f`<div class="backup-columns" style="gap:24px;margin-top:6px">
    <div>
      <h3 style="font-size:22px">Account record</h3>
      <div class="equation-box" style="margin-top:8px;font-size:16px">\[uid\|SUid_{l,j}\|c_{sp}\|ctr_{ac}\]</div>
      <ul class="compact-list"><li>Registration requires counter 0 and nonexistence.</li><li>Secret Update requires exactly current counter + 1.</li><li>Provider installs the signed account record before durable acknowledgement.</li><li>Different record at one counter, skipped counter, or lower counter is rejected.</li></ul>
    </div>
    <div>
      <h3 style="font-size:22px">Identification replacement</h3>
      <div class="equation-box" style="margin-top:8px;font-size:16px">\[uid\|c'_{id}\|ctr'_{id}\]</div>
      <ul class="compact-list"><li>Password Update requires exactly current counter + 1.</li><li>The provider retains CURRENT and stores one matching TENTATIVE record.</li><li>Matching Store promotes it; matching Discard removes only it.</li><li>Ordinary reads never return the tentative root.</li></ul>
    </div>
  </div>
  ${gt([["Exact retransmission","Idempotent: the same signed tuple may be retried."],["Serialization","No honest read, later update, or synchronization begins before the earlier terminal decision."],["Discarded partial account write","The proof classifies such replicas as STALE and may fail availability; it does not turn them into ideal success."]],3)}
  ${sourceConflict()}`;return z(n,"Aux · RoUpSPA proof","Authorized writes and terminal decisions","roupspa-security","Thesis, RoUpSPA Security Analysis, Lemma “Authorized writes and terminal decisions”.",e)}function hd(n){const e=f`<div class="split-60" style="gap:28px;align-items:start;margin-top:10px">
    <div>
      <div class="equation-box" style="text-align:center;font-size:21px">\[|C_{sp}|\le t_{sp}-1,\qquad t_{sp}>\frac{n_{sp}}2\]</div>
      ${gt([["Identification threshold","At least tₛₚ valid ACTIVE responses with one verification key; choose the unique valid maximum ctrᵢd."],["Account threshold","At least tₛₚ valid ACTIVE responses; AE-decrypt, check bound counters, choose the unique maximum ctrₐc."],["Honest witness","Every tₛₚ response set contains an honest provider under the corruption bound."],["Failure behavior","Missing active threshold, invalid/tied candidates, or malformed responses cause failure - not automatic repair."]],2)}
    </div>
    <div>
      <h3 style="font-size:23px">Why this is not a quorum read</h3>
      <div class="claim" style="margin-top:10px;padding:13px 16px;font-size:17px">Authentication uses \(t_{sp}\), not \(q_{sp}\). The quorum theorem first guarantees that the latest completed state remains represented among active replicas; the read then needs one honest witness plus maximum-counter validation.</div>
      <div class="warning-box" style="margin-top:16px;padding:12px 15px;font-size:15px">Signatures authorize stored writes. The user does <strong>not</strong> verify provider signatures on reads; AE integrity/key binding and the encrypted/external counter checks exclude modified returned ciphertexts.</div>
    </div>
  </div>`;return z(n,"Aux · RoUpSPA proof","Authentication from active threshold responses","roupspa-security","Thesis, RoUpSPA Security Analysis, Lemma “Authentication from active threshold responses”.",e)}function md(n){const e=f`<div class="split-60" style="gap:24px;align-items:start"><div>${Tr()}</div><div style="padding-top:10px">
    <div class="equation-box" style="font-size:19px">\[|W\cap R|\ge 2q_{sp}-n_{sp}>t_{sp}-1\]</div>
    <ol class="compact-list" style="margin-top:12px"><li>\(W\): \(q_{sp}\) providers holding the latest completed record after terminal Store.</li><li>\(R\): later synchronization quorum of \(q_{sp}\) valid current-record responses.</li><li>The intersection contains an honest provider, which returns the completed record and never decreases its counter.</li><li>Without BadSig/BadCtxt and with serialization, no larger acceptable completed counter exists.</li><li>The unique-largest-counter rule returns exactly the latest completed record.</li></ol>
  </div></div>
  <div class="warning-box" style="margin-top:-6px;padding:9px 13px;font-size:13px"><strong>Completion/delivery caveat.</strong> The thesis phase says sending Store is terminal, but this proof starts after \(q_{sp}\) providers hold CURRENT state. A bounded processed-delivery condition is needed for that starting set; the manuscript states it more explicitly than the thesis phase wording.</div>`;return z(n,"Aux · RoUpSPA proof","Quorum intersection preserves the latest completed state","roupspa-quorum-intersection","Thesis, RoUpSPA Security Analysis, Theorem “Quorum consistency and recovery correctness”. Example (7,4,5) satisfies the thesis conditions.",e)}function gd(n){const e=f`<div class="equation-box" style="margin-top:8px;font-size:16.5px;line-height:1.32">\[\begin{aligned}
    \mathsf{Adv}^{\mathsf{real/ideal}}_{RoUpSPA,\mathcal F_{UpSPA}}(\mathcal A)\le{}&2\epsilon^{RoUpSPA}_{\mathsf{bad}}(\lambda)
    +q_{\mathsf K}\mathsf{Adv}^{prf}_{TOPRF}(\mathcal B_{prf})
    +q_{\mathsf T}\mathsf{Adv}^{rio}_{TOPRF}(\mathcal B_{rio})\\
    &+q_{\mathsf{id}}\mathsf{Adv}^{ind\text{-}cpa}_{AE}(\mathcal B_{cpa,id})
    +q_{\mathsf{ac}}\mathsf{Adv}^{ind\text{-}cpa}_{AE}(\mathcal B_{cpa,sp}).
  \end{aligned}\]</div>
  ${gt([[f`\(q_{\mathsf K}\)`,"full TOPRF keys honestly generated at Setup; RoUpSPA retains the same key across Password Update"],[f`\(q_{\mathsf T}\)`,"honest-receiver TOPRF sessions; Password Update contributes two inputs; Synchronization contributes none"],[f`\(q_{\mathsf{id}}\)`,"honest identification encryption calls"],[f`\(q_{\mathsf{ac}}\)`,"honest account encryption calls; replication/copying is not a new encryption"]],4)}
  <div class="claim" style="margin-top:14px;padding:11px 14px;font-size:15px">Quorum intersection, exact-counter acceptance, ACTIVE/STALE bookkeeping, terminal decisions, and synchronization consistency are deterministic proof obligations; they add no computational advantage term.</div>
  <div class="warning-box" style="margin-top:10px;padding:9px 13px;font-size:13px"><strong>Notation correction preserved.</strong> The thesis earlier collides \(q_{sp}\) with an encryption-count name; the final formula uses \(q_{ac}\). This slide reserves \(q_{sp}\) for the availability quorum.</div>`;return z(n,"Aux · RoUpSPA proof","RoUpSPA final real/ideal advantage bound","roupspa-security","Thesis, RoUpSPA Security Analysis, Final Advantage Bound.",e)}function fd(n){const e=f`<div class="experiment-contract-grid">
    <article><h3>Sampling and build</h3><ul>
      <li>50 warm-ups + 200 successful measured samples</li>
      <li>Medians; randomness generated outside the timed region</li>
      <li>Rust 1.93 · <code>--locked --release</code></li>
    </ul></article>
    <article><h3>Hardware and networks</h3><ul>
      <li>i7-1185G7 at 3.00 GHz · 16 GB RAM</li>
      <li>LAN: 0.5 ms RTT · 0.05 ms jitter · 1 Gbps</li>
      <li>WAN: 60 ms RTT · 5 ms jitter · 50 Mbps</li>
    </ul></article>
    <article><h3>Cryptography</h3><ul>
      <li>UpSPA: Ristretto255 · BLAKE3 · XChaCha20-Poly1305 · Ed25519</li>
      <li>PAS-TA-U also uses BLS12-381</li>
      <li>AugSSO uses BLS12-381 + X25519</li>
    </ul></article>
    <article><h3>Measurement boundary</h3><ul>
      <li>Client, provider, and full targets are sampled separately</li>
      <li>Requests within one stage run in parallel; stages remain sequential</li>
      <li>In-memory providers: no disk, WAL, TLS/API, retries, or crash repair</li>
    </ul></article>
  </div>
  <div class="experiment-boundary-note"><strong>LAN/WAN are composed estimates.</strong> EVM gas, TRON resources, CPU time, and confirmation latency remain separate units.</div>`;return z(n,"Aux · Evaluation","Experimental configuration and measurement boundary","implementation-architecture-method","Thesis, Implementation chapter, Common Benchmark Environment and Network Profiles.",e)}function vd(n){const e=f`<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:2px">
    <div class="chart-wrap">${ie({labels:Ce,series:Ot,yMax:.65,xLabel:"threshold tₛₚ · nₛₚ = 30",title:"Registration and authentication · client",width:550,height:350})}</div>
    <div class="chart-wrap">${ie({labels:Ce,series:jt,yMax:1,xLabel:"threshold tₛₚ · nₛₚ = 30",title:"Setup and updates · client",width:550,height:350})}</div>
  </div>
  <div class="chart-takeaway" style="margin-top:6px;font-size:17px">At fixed \(n_{sp}=30\), every retained client series remains below 1 ms; UpSPA password update is the largest local UpSPA path in this sweep.</div>
  <p class="small center" style="margin-top:6px;font-size:13px!important">Exact points from the active thesis figures; no client/provider medians are added.</p>`;return z(n,"Aux · Evaluation","UpSPA and TSPA - fixed-provider client charts","results-upspa-tspa","Thesis, Implementation chapter, figures client-reg-auth-nsp30 and client-setup-updates-nsp30.",e)}function ha(n){return[{name:"UpSPA registration",color:"#164a7b",values:n.registration.upspa},{name:"RoUpSPA registration",color:"#7b61a8",dash:!0,values:n.registration.roupspa},{name:"UpSPA secret update",color:"#0b8f8c",values:n.secret.upspa},{name:"RoUpSPA secret update",color:"#d17722",dash:!0,values:n.secret.roupspa},{name:"UpSPA password update",color:"#3f7b5a",values:n.password.upspa},{name:"RoUpSPA password update",color:"#b84d4d",dash:!0,values:n.password.roupspa}]}function bd(n){const e=f`<div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:0">
    <div class="chart-wrap">${ie({labels:Fn,series:ha(Ee),yMax:.8,xLabel:"(nₛₚ/tₛₚ/qₛₚ)",title:"Complete local medians",width:560,height:360})}</div>
    <div class="chart-wrap">${ie({labels:Fn,series:ha(je),yMax:4.5,xLabel:"(nₛₚ/tₛₚ/qₛₚ)",title:"Composed LAN medians",width:560,height:360})}</div>
  </div>
  <div class="chart-takeaway" style="margin-top:2px;font-size:17px">RoUpSPA’s local checks are modest; its additional sequential coordination is more visible after the common LAN composition.</div>
  <p class="small center" style="margin-top:6px;font-size:13px!important">Functionality differs: UpSPA requires full availability for writes; RoUpSPA adds quorum completion, ACTIVE/STALE state, and synchronization.</p>`;return z(n,"Aux · Evaluation","UpSPA and RoUpSPA - local and composed LAN","results-upspa-roupspa","Thesis, Implementation chapter, UpSPA/RoUpSPA comparison data. LAN is composed, not deployed.",e)}function yd(n){const e=f`<div class="split-60" style="gap:26px;align-items:start"><div class="chart-wrap">${ie({labels:sn,series:nn,yMax:31,xLabel:"storage providers nₛₚ · qₛₚ = ⌈0.8nₛₚ⌉",title:"Password-update complete local latency",width:790,height:420})}</div><div>
    ${gt([["Quorum/ABD","1.0183 → 29.1757 ms"],["Signed PBB","0.903637 → 8.254218 ms"],["Authorized PBB","0.894433 → 8.220148 ms"],["Shared local blockchain","1.014246 → 8.609863 ms"]],2)}
    <div class="warning-box" style="margin-top:14px;padding:10px 13px;font-size:14px">The public-state modes use \(q_{sp}\) only to match the availability scenario; it is not a board or ledger quorum. The four series have different synchronization work and trust boundaries.</div>
  </div></div>`;return z(n,"Aux · Evaluation","Synchronization backends - password-update scaling","results-backends","Thesis, Implementation chapter, resilient backend scaling at qₛₚ=⌈0.8nₛₚ⌉.",e)}function wd(n){const e=[["Contract deployment","1","1,356,750","1,356,750","1,356,750"],["Direct registration","10","123,607","123,619","123,639"],["Direct secret update","10","51,157","51,173","51,189"],["Direct password update","10","51,145","51,169","51,189"]],t=[["8 / 3","93,625","93,637","11,704.625","28,260"],["32 / 5","93,625","93,643","2,926.344","30,790"],["128 / 7","93,649","93,661","731.727","33,350"]],s=f`<div class="backup-columns" style="gap:24px;margin-top:4px"><div><h3 style="font-size:21px">Direct commitments · gas receipts</h3>${Ft(["Operation","N","Min","p50","Max"],e,["37%","9%","18%","18%","18%"])}</div><div><h3 style="font-size:21px">Merkle publication and verification</h3>${Ft(["B/depth","Publish min","Publish p50","p50/B","Verify p50"],t,["18%","21%","21%","20%","20%"])}</div></div>
  ${gt([["Run","qa-local-anvil-20260728b · Anvil 1.5.1 · chain ID 31337"],["Receipts","91/91 successful, blocks 2-92; 10 repetitions; one confirmation"],["Interpretation","Local execution-cost/regression evidence - not public-network fee, congestion, or finality"],["Roles","Deployer, publisher, relayer, controller mapped to one Anvil EOA in this archive"]],4)}
  <div class="warning-box" style="margin-top:10px;padding:9px 13px;font-size:13px">With only ten successful samples per operation, p95 is the observed maximum. ERC-1271 is contract-tested but has no separate receipt series; no gas comparison is inferred.</div>`;return z(n,"Aux · Ledger evaluation","EVM direct and Merkle gas - receipt-level run","results-key-takeaways","Thesis, Implementation chapter, Tables “Receipt-level EVM gas”.",s)}function Sd(n){const e=[["Read latest after valid write","6,240"],["Reject stale counter","5,668"],["Reject invalid phase","9,421"],["Valid registration commitment","121,902"],["Valid password-update commitment","32,798"]],t=[["Reject unknown-batch proof","14,879"],["Verify proof · depth 8","13,730"],["Verify proof · depth 32","37,624"],["Append root · 1 leaf","144,515"],["Append root · 256 leaves","144,472"],["Read batch after write","6,708"]],s=f`<div class="foundry-cross-check"><article><h3>Single-commitment board</h3>${Ft(["Representative target","Gas"],e,["76%","24%"])}</article><article><h3>Merkle-root board</h3>${Ft(["Representative target","Gas"],t,["76%","24%"])}</article></div>
  <p class="foundry-boundary">Foundry snapshot only: setup is excluded and provider signatures are checked off chain. Do not pool these values with receipt-distribution results.</p>`;return z(n,"Aux · Ledger evaluation","Foundry snapshot — representative cross-checks","results-key-takeaways","Thesis, Implementation/upspa_foundry_gas_snapshot.tex.",s)}function kd(n){const e=[["Implementation","TVM-compatible contract and benchmark runner complete."],["Scenario matrix","Deployment; direct registration, secret update, password update; root publication per batch; transactional proof verification."],["Designed receipt fields","Energy, Bandwidth, SUN fee, submit/confirm latency, tx ID, block metadata, success, solidification."],["Supplied archive","No completed live TRON receipt file."],["Publication rule",f`Add results only after every normal row has \(success=true\) and \(solidified=true\).`]],t=f`<div style="display:grid;place-items:center;margin-top:28px"><div style="width:78%">
    <div class="warning-box" style="padding:22px 26px;border-left-color:var(--danger);background:var(--danger-soft);font-size:25px;text-align:center"><strong>Native TRON measurements are pending.</strong></div>
    ${Ft(["Status item","Evidence"],e,["25%","75%"])}
    <div class="claim danger" style="margin-top:18px;padding:13px 17px;font-size:18px;text-align:center">No TRON chart, no synthetic Energy/Bandwidth/SUN values, and no reuse of EVM gas as a proxy.</div>
  </div></div>`;return z(n,"Aux · Ledger evaluation","TRON implementation status","results-key-takeaways","Thesis, Implementation chapter, “TRON Implementation and Pending Native Measurements”.",t)}function Ad(n){const t=f`<div class="reference-list compact-references">${[["SPA","Acar, Belenkiy & Küpçü. “Single Password Authentication.” Computer Networks, 2013."],["TSPA","İşler & Küpçü. “Threshold Single Password Authentication.” ESORICS DPM, 2017."],["DiSPP","İşler & Küpçü. “Distributed Single Password Protocol Framework.” ePrint 2018/976."],["UpSPA","İşler, Saadi & Küpçü. “Secure and Updatable Single Password Authentication.” ePrint 2026/784."],["RoUpSPA","Saadi, İşler & Küpçü. “Robust Updatable Single Password Authentication.” Submitted to ACM TOPS."],["PAS-TA-U","Rawat & Jhanwar. “PAS-TA-U.” SPACE, 2020."],["AugSSO","Jiang, Xu & Yang. “AugSSO.” IEEE TMC, 2025."],["ABD register","Attiya, Bar-Noy & Dolev. “Sharing Memory Robustly.” JACM 42(1), 1995."],["Byzantine quorums","Malkhi & Reiter. “Byzantine Quorum Systems.” Distributed Computing 11(4), 1998."],["Append-only PBB","Heather & Lundin. “The Append-Only Web Bulletin Board.” LNCS 5491, 2009."],["Evaluation","Active thesis Implementation chapter and its included benchmark sources."],["Protocol authority","Active UpSPA and RoUpSPA construction and security-analysis sources."]].map(([s,i])=>f`<p><strong>${s}.</strong> ${i}</p>`).join("")}</div>`;return z(n,"Aux · Sources","References used by the defense deck","thank-you","Active thesis references.bib and Publications.tex; active UpSPA/RoUpSPA source graphs.",t)}function Pd(n){const e=[[f`\(n_{sp}\)`,"number of providers"],[f`\(t_{sp}\)`,"TOPRF/authentication threshold"],[f`\(q_{sp}\)`,"durable-write and repair quorum"],[f`\(uid\)`,"public user identifier"],[f`\(ls_j\)`,"authenticated service label"],[f`\(pwd,pwd_{new}\)`,"current and new password"],[f`\(R_{sp}\)`,"hidden routing secret"],[f`\(R^{ls_j}\)`,"service-specific secret"],[f`\(K, k_i\)`,"TOPRF key and share"],[f`\(K_0\)`,"account encryption key"],[f`\(c_{id}\)`,"protected root record"],[f`\(c_{sp}\)`,"account ciphertext"],[f`\(SUid_{l,i,j}\)`,"UpSPA provider-specific ID"],[f`\(SUid_{l,j}\)`,"RoUpSPA shared routing ID"],[f`\(vInfo_j\)`,"service verifier"],[f`\(ctr_{id}\)`,"RoUpSPA root counter"],[f`\(ctr_{ac}\)`,"account counter"],[f`\(ssk,svk\)`,"user signing keys"],["PENDING","not readable; awaits decision"],["CURRENT","accepted readable record"],["ACTIVE / STALE","may serve / must repair"]],t=f`<div class="notation-grid compact-notation">${e.map(([s,i])=>f`<div class="notation-item"><strong>${s}</strong><span>${i}</span></div>`).join("")}</div>
  <div class="notation-boundary"><strong>Keep the thresholds separate:</strong> \(t_{sp}\) controls cryptographic recovery; \(q_{sp}\) controls durable writes and repair.</div>`;return z(n,"Aux · Quick reference","Notation and state vocabulary","upspa-two-layer-state","Active thesis symbols, UpSPA Construction, and RoUpSPA Construction.",t)}const xd={"backup-upspa-setup-full":Qc,"backup-upspa-registration-full":Yc,"backup-upspa-authentication-full":Jc,"backup-upspa-secret-update-full":Xc,"backup-upspa-password-update-full":Zc,"backup-upspa-challenges-full":ed,"backup-upspa-threat-model-full":td,"backup-upspa-simulator-map":sd,"backup-upspa-advantage-bound":nd,"backup-roupspa-setup-full":id,"backup-roupspa-registration-full":ad,"backup-roupspa-authentication-full":rd,"backup-roupspa-secret-update-full":od,"backup-roupspa-password-update-full":ld,"backup-roupspa-synchronization-full":cd,"backup-roupspa-challenges-full":dd,"backup-roupspa-bad-events":pd,"backup-roupspa-authorized-writes":ud,"backup-roupspa-active-threshold":hd,"backup-roupspa-quorum-proof":md,"backup-roupspa-advantage-bound":gd,"backup-experiment-configuration":fd,"backup-upspa-tspa-charts":vd,"backup-upspa-roupspa-charts":bd,"backup-backend-charts":yd,"backup-evm-gas":wd,"backup-foundry-cross-check":Sd,"backup-tron-status":kd,"backup-references":Ad,"backup-notation":Pd};function Rd(n,e){const t=Wc(n);if(t)return t;const s=jc(n,e);if(s)return s;const i=xd[n];return i?i(e):z(e,"Aux",e?.title||"Aux slide",e?.returnTarget||e?.originId||"thank-you","Aux slide metadata.",'<p class="lead">Slide content unavailable.</p>')}function it(n=""){return String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Tn(n="",e={}){return String(n).replace(/\{\{config\.([A-Za-z0-9_]+)\}\}/g,(t,s)=>it(e[s]??""))}function _d(n,e){const t=n.content||{},s=Array.isArray(e.genealogy)?e.genealogy:[],i=[0,1,2].map(a=>{const r=s[a]||{},o=!r.name||!r.role||!r.institution||/TODO/i.test(JSON.stringify(r)),l=o?"?":r.name.split(/\s+/).filter(Boolean).slice(0,2).map(h=>h[0]).join("").toUpperCase(),c=r.photo?`<img src="${it(r.photo)}" alt="${it(r.name)}">`:`<span aria-hidden="true">${it(l)}</span>`;return`<article class="gene-node ${o?"todo":""}"><div class="portrait">${c}</div><strong>${it(r.name||"TODO")}</strong><span>${it(r.role||"Role not configured")}</span><small>${it(r.institution||"Institution not configured")}</small></article>`});return`<div class="slide-shell">${tn(t.kicker||"Academic genealogy")}<h2>${t.title||n.title}</h2><p class="lead genealogy-lead">${t.lead||""}</p><div class="genealogy">${i.join("")}</div></div>`}function Td(n,e){const t=n.content||{};if(t.layout==="genealogy")return _d(n,e);if(t.layout==="raw")return Tn(t.body||"",e);const s=t.kicker||n.sectionLabel||n.section||"Slide",i=Tn(t.title||n.title||"",e),a=Tn(t.body||"",e);return`<div class="slide-shell">${tn(s)}<h2>${i}</h2>${a}</div>`}const Ud=[{id:"user",label:"User",kind:"user"},{id:"sp",label:"Storage providers \\(SP_i\\)",kind:"sp"}];function Ld(n){return n?"\\(ssk, R^{sp}, K_0, ctr_{id}\\)":"\\(ssk, R^{sp}, K_0\\)"}function Nr({password:n="pwd",sameShares:e=!1,detailed:t=!1}={}){if(!t)return`<div class="protocol-interaction toprf-interaction is-compact-minimal" data-protocol-interaction="toprf" data-span="user-sp">
      <div class="interaction-heading"><strong>Interactive TOPRF${n==="pwd"?"":" \\("+n+"\\)"}</strong></div>
    </div>`;const s=`\\(${n}\\)`;return`<div class="protocol-interaction toprf-interaction${t?" is-detailed":""}" data-protocol-interaction="toprf" data-span="user-sp">
    <div class="interaction-heading"><strong>Interactive TOPRF(${s})</strong><span>User ↔ \\(SP_i\\)</span></div>
    <div class="interaction-parties" aria-hidden="true"><b>User</b><i>↔</i><b>\\(SP_i\\)</b></div>
    <div class="interaction-exchange"><span>blinded ${s} request →</span><span>← valid partial evaluations · ${e?"same provider shares \\(\\{k_i\\}\\)":"provider shares \\(\\{k_i\\}\\)"}</span></div>
  </div>`}function oi({mode:n="compact",password:e="pwd",oldPassword:t=!1,resilient:s=!1}={}){return n==="compact"?`<div class="protocol-interaction identification-interaction is-compact-minimal ${s?"is-resilient":"is-upspa"}" data-protocol-interaction="identification" data-span="user-sp">
      <div class="interaction-heading"><strong>Identification</strong></div>
    </div>`:`<div class="identification-component is-detailed" data-identification-mode="detailed">${mt({actors:Ud,steps:[{number:1,from:"user",to:"sp",label:"\\(Uid\\)"},{number:2,from:"sp",to:"user",label:"OK / FAIL"},{number:3,from:"user",to:"sp",interaction:Nr({password:e})},{number:4,from:"sp",to:"user",label:"Return \\(c_{id}\\)"},{number:5,from:"user",to:"user",local:!0,label:`Decrypt \\(c_{id}\\) with \\(F_K(${e})\\)`},{number:6,from:"user",to:"user",local:!0,label:`Recover ${Ld(s)}`}]})}</div>`}function me({number:n=1,password:e="pwd",oldPassword:t=!1,resilient:s=!1}={}){return{number:n,from:"user",to:"sp",interaction:oi({mode:"compact",password:e,oldPassword:t,resilient:s})}}function $r({number:n,password:e="pwd",sameShares:t=!1}={}){return{number:n,from:"user",to:"sp",interaction:Nr({password:e,sameShares:t})}}const ce={upspa:[{id:"ls",label:"Login server \\(LS_j\\)",kind:"ls"},{id:"user",label:"User",kind:"user"},{id:"sp",label:"Storage providers \\(SP_i\\)",kind:"sp"}],password:[{id:"user",label:"User",kind:"user"},{id:"sp",label:"Storage providers \\(SP_i\\)",kind:"sp"}]},Mt={},Ed=[["Registration",[3.723,3.869,4.75,6.737]],["Secret update",[11.241,3.852,4.852,6.855]],["Password update",[29.176,8.254,8.22,8.61]]],Cd=["Quorum / ABD","Signed PBB","Authorized PBB","Local chain"],ma=["#164a7b","#0b8f8c","#d17722","#7b61a8"];Object.assign(Mt,{"upspa-two-layer-state":{navLabel:"Two-layer state",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · State design",title:"One master record protects independent service accounts",body:'<div class="state-tree"><article><b>Identification / master record</b><strong>&#92;(c_{id}&#92;leftarrow Enc_{F_K(pwd)}(ssk&#92;|R^{sp}&#92;|K_0)&#92;)</strong><small>The UpSPA identification record has no counter.</small></article><i></i><div><article><b>Account &#92;(LS_1&#92;)</b><strong>&#92;(c_1&#92;leftarrow Enc_{K_0}(R^{ls_1}&#92;|ctr_{ac})&#92;)</strong></article><article><b>Account &#92;(LS_2&#92;)</b><strong>&#92;(c_2&#92;leftarrow Enc_{K_0}(R^{ls_2}&#92;|ctr_{ac})&#92;)</strong></article><article><b>Account &#92;(LS_j&#92;)</b><strong>&#92;(c_j&#92;leftarrow Enc_{K_0}(R^{ls_j}&#92;|ctr_{ac})&#92;)</strong></article></div></div>'},"upspa-primitives":{navLabel:"Cryptographic primitives",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Building blocks",title:"Cryptographic primitives used by UpSPA",body:'<div class="primitive-grid"><article><b>TOPRF</b><p>&#92;((K,&#92;{k_i&#92;})&#92;leftarrow TOPRFKeyGen(1^&#92;lambda,n_{sp},t_{sp})&#92;)</p><strong>User: &#92;(pwd&#92;) · &#92;(SP_i:k_i&#92;) · User output: &#92;(F_K(pwd)&#92;)</strong></article><article><b>Authenticated encryption</b><p>&#92;(K&#92;leftarrow KeyGen(1^&#92;lambda)&#92;) · &#92;(c&#92;leftarrow Enc_K(p)&#92;)</p><strong>&#92;(p&#39;&#92;leftarrow Dec_K(c)&#92;) · &#92;(p&#39;&#92;in&#92;{p,&#92;bot&#92;}&#92;)</strong></article><article><b>Digital signatures</b><p>&#92;((ssk,svk)&#92;leftarrow SignKeyGen(1^&#92;lambda)&#92;) · &#92;(&#92;sigma&#92;leftarrow Sign_{ssk}(m)&#92;)</p><strong>&#92;(Verify_{svk}(m,&#92;sigma)&#92;in&#92;{0,1&#92;}&#92;)</strong></article><article><b>Hash function</b><p>&#92;(H:&#92;{0,1&#92;}^{*}&#92;rightarrow&#92;{0,1&#92;}^{&#92;lambda}&#92;)</p><strong>Bind identifiers and domains</strong></article></div>'},"upspa-toprf":{navLabel:"TOPRF interaction",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Password-private threshold evaluation",title:"TOPRF derives the password key without revealing the password",body:`${de(ce.password,[{number:1,from:"user",to:"sp",label:"Blinded &#92;(pwd&#92;) request"},{number:2,from:"sp",to:"user",label:"Valid partial evaluations from at least &#92;(t_{sp}&#92;) providers"},{number:3,from:"user",to:"user",local:!0,label:"Aggregate, unblind, and finalize &#92;(F_K(pwd)&#92;)"}],"")}<div class="privacy-boundary"><strong>Privacy</strong><span>Providers learn neither &#92;(pwd&#92;) nor the final output.</span><b>Threshold: &#92;(|S|&#92;ge t_{sp}&#92;)</b></div>`},"aux-toprf-concrete":{navLabel:"2D-DDH TOPRF example",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"Concrete TOPRF example",title:"A concrete 2D-DDH OPRF/PRF example",body:`${de(ce.password,[{number:1,from:"user",to:"user",local:!0,label:"&#92;(X=H_1(pwd)&#92;); choose &#92;(r&#92;ne0&#92;); compute &#92;(B=X^r&#92;)"},{number:2,from:"user",to:"sp",label:"Blinded group element &#92;(B&#92;)"},{number:3,from:"sp",to:"user",label:"Partial evaluations &#92;(Z_i=B^{k_i}&#92;)"},{number:4,from:"user",to:"user",local:!0,label:"&#92;(Z=&#92;prod_{i&#92;in S}Z_i^{&#92;lambda_i}=B^K&#92;), for &#92;(|S|&#92;ge t_{sp}&#92;)"},{number:5,from:"user",to:"user",local:!0,label:"&#92;(F_K(pwd)=H_2(pwd,Z^{r^{-1}})&#92;)"}],"")}<div class="assumption-note"><b>2D-DDH</b><span>The blind exponent hides the input; fewer than &#92;(t_{sp}&#92;) shares cannot evaluate the full PRF.</span></div>`},"upspa-setup":{navLabel:"Setup",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Setup",title:"Setup creates the password-protected identification record",body:`${Be("assets/upspa-setup-source.png","UpSPA setup protocol source figure")}`},"upspa-identification":{navLabel:"Identification",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Reusable opening step",title:"Identification opens the master record—or stops safely",body:`${oi({mode:"detailed"})}<div class="safe-failure">Wrong password, fewer than &#92;(t_{sp}&#92;) valid responses, or failed decryption stops the phase.</div>`},"upspa-registration":{navLabel:"Registration",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Registration",title:"Registration stores the account only after the login server accepts it",body:`${de(ce.upspa,[me({number:1}),{number:2,from:"user",to:"user",local:!0,label:"Derive &#92;(SUid_{l,i,j}&#92;), &#92;(c_j&#92;), and &#92;(vInfo_j&#92;); set &#92;(ctr_{ac}=0&#92;)"},{number:3,from:"user",to:"sp",label:"Pending &#92;(&#92;langle SUid_{l,i,j},c_j&#92;rangle&#92;)",state:"pending"},{number:4,from:"sp",to:"user",label:"OK / FAIL from all &#92;(n_{sp}&#92;)"},{number:5,from:"user",to:"ls",label:"Register &#92;(&#92;langle Uid,vInfo_j&#92;rangle&#92;)"},{number:6,from:"ls",to:"user",label:"OK / FAIL"},{number:7,from:"user",to:"sp",label:"Store if accepted · Discard otherwise",state:"committed"}],"")}`},"upspa-authentication":{navLabel:"Authentication",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Authentication",title:"Authentication without revealing the password",body:`${de(ce.upspa,[me({number:1}),{number:2,from:"user",to:"sp",label:"Request the account record under &#92;(SUid_{l,i,j}&#92;)"},{number:3,from:"sp",to:"user",label:"&#92;(c_j&#92;) or FAIL"},{number:4,from:"user",to:"user",local:!0,label:"Decrypt and recover the service credential"},{number:5,from:"user",to:"ls",label:"&#92;(&#92;langle Uid,vInfo_j&#92;rangle&#92;)"},{number:6,from:"ls",to:"user",label:"OK / FAIL"}],"")}<div class="read-only-note">Read-only phase: no provider Store or Discard.</div>`},"upspa-rq2-updateability":{navLabel:"RQ2 · Native updates",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"RQ2 · Native Updateability",title:"UpSPA updates either one service credential or the master password",body:'<div class="rq2-branches"><article><b>Secret update</b><h3>Change one service credential</h3><p>Only the selected account record and its login-server verifier change.</p></article><i>or</i><article><b>Password update</b><h3>Change the master password</h3><p>The identification record receives a new TOPRF key and new provider shares; account records stay unchanged.</p></article></div>'},"upspa-secret-update":{navLabel:"Secret update",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Secret update",title:"Secret update changes one service credential",body:`${de(ce.upspa,[me({number:1}),{number:2,from:"user",to:"sp",label:"Read the selected account record"},{number:3,from:"sp",to:"user",label:"&#92;(c_j&#92;) or FAIL"},{number:4,from:"user",to:"user",local:!0,label:"Create &#92;(c_{j,new}&#92;) with &#92;(ctr&#39;_{ac}=ctr_{ac}+1&#92;)"},{number:5,from:"user",to:"sp",label:"Pending account replacement",state:"pending"},{number:6,from:"user",to:"ls",label:"Replace the old verifier with &#92;(vInfo_{j,new}&#92;)"},{number:7,from:"ls",to:"user",label:"OK / FAIL"},{number:8,from:"user",to:"sp",label:"Store / Discard",state:"committed"}],"")}`},"upspa-password-update":{navLabel:"Password update",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Password update",title:"Password update changes the master password without rewriting every account",body:`${de(ce.password,[me({number:1,oldPassword:!0}),{number:2,from:"user",to:"user",local:!0,label:"Generate a new TOPRF key and new shares &#92;({k_{i,new}}&#92;)"},{number:3,from:"user",to:"user",local:!0,label:"Encrypt &#92;(ssk&#92;|R^{sp}&#92;|K_0&#92;) under &#92;(F_{K_{new}}(pwd_{new})&#92;)"},{number:4,from:"user",to:"sp",label:"Signed pending replacement with &#92;(c_{id,new}&#92;) and &#92;(k_{i,new}&#92;)",state:"pending"},{number:5,from:"sp",to:"user",label:"OK / FAIL from all &#92;(n_{sp}&#92;)"},{number:6,from:"user",to:"sp",label:"Store / Discard",state:"committed"}],"")}<div class="read-only-note">Account ciphertexts and login-server verifiers do not change.</div>`},"upspa-security-theorem":{navLabel:"UpSPA security theorem",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Security theorem",title:"UpSPA securely realizes its ideal functionality",body:`${Be("assets/upspa-security-theorem.png","Authoritative UpSPA security theorem from the latest thesis source")}`},"aux-upspa-ideal-functionality":{navLabel:"Ideal functionality",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Ideal functionality",title:"The ideal functionality records only completed logical outcomes",body:`${Be("assets/upspa-ideal-functionality.png","Authoritative UpSPA ideal-functionality definition from the latest thesis source")}`},"upspa-challenge-mechanisms":{navLabel:"Security problems and countermeasures",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Design rationale",title:"Each security problem has a direct countermeasure",body:'<table class="mechanism-table"><thead><tr><th>Security problem</th><th>Countermeasure</th></tr></thead><tbody><tr><td>Resist offline dictionary attacks</td><td>Encrypt only random-looking state with the password-derived key</td></tr><tr><td>Keep the password away from login servers</td><td>Login servers store only domain-bound high-entropy verifiers</td></tr><tr><td>Hide and bind the provider-side account identifier</td><td>Derive it from the hidden family secret and service domain</td></tr><tr><td>Allow only the user to replace the identification record</td><td>Verify a phase-specific signature under the user signing key</td></tr><tr><td>Avoid half-finished updates</td><td>Use pending state followed by one explicit Store or Discard decision</td></tr></tbody></table>'}});Object.assign(Mt,{"roupspa-motivation":{navLabel:"Why resilience?",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Motivation",title:"RoUpSPA adds quorum replication and recovery on top of UpSPA",body:'<div class="failure-to-resilience"><article><b>UpSPA</b><p>State-changing phases wait for all &#92;(n_{sp}&#92;) providers.</p><strong>One outage blocks an update.</strong></article><i>→</i><article><b>RoUpSPA</b><p>A durable quorum completes the write; stale replicas repair before serving ordinary requests.</p><strong>Updates can continue with unavailable providers.</strong></article></div>'},"roupspa-threshold-quorum":{navLabel:"Threshold vs quorum",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Parameters",title:"&#92;(t_{sp}&#92;) and &#92;(q_{sp}&#92;) have different jobs",body:'<div class="thresholds"><article class="threshold crypto"><span class="symbol">&#92;(t_{sp}&#92;)</span><h3>Cryptographic threshold</h3><p>Enough valid TOPRF or read responses; also bounds provider corruption.</p></article><article class="threshold quorum"><span class="symbol">&#92;(q_{sp}&#92;)</span><h3>Storage quorum</h3><p>Enough durable writes or synchronization responses.</p></article></div><div class="equation-box center">&#92;[n_{sp}&#92;ge q_{sp}&#92;ge t_{sp}>n_{sp}/2,&#92;qquad 2q_{sp}-n_{sp}>t_{sp}-1&#92;]</div>'},"roupspa-quorum-intersection":{navLabel:"Quorum intersection",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Safety",title:"Every completed write overlaps a later read at an honest provider",body:'<div class="intersection-layout exact"><div class="venn"><span>W</span><span>R</span><strong><i class="honest-sp-marker">✓</i><em>honest SP<br>evidence</em></strong></div><div><div class="equation-box">&#92;[|W&#92;cap R|&#92;ge2q_{sp}-n_{sp}>t_{sp}-1&#92;]</div><ol><li>&#92;(W&#92;) contains the providers that acknowledged the committed record.</li><li>&#92;(R&#92;) is a later read or synchronization quorum.</li><li>The overlap is larger than the corrupted set.</li><li>The largest valid counter carries committed evidence forward.</li></ol></div></div>'},"roupspa-what-changes":{navLabel:"State layer",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · State layer",title:"Resilience introduces stale replicas and quorum writes",body:'<div class="delta-grid"><article><b>Shared account family</b><p>&#92;(SUid_{l,j}=H(R^{sp}&#92;|ls_j)&#92;)</p></article><article><b>Signed records</b><p>Every replacement binds its ciphertext to an exact counter.</p></article><article><b>Version counters</b><p>&#92;(ctr_{ac}&#92;) and &#92;(ctr_{id}&#92;) order accepted state.</p></article><article><b>Replica state</b><p>ACTIVE providers serve requests; STALE providers repair first.</p></article><article><b>Quorum completion</b><p>Durable writes require &#92;(q_{sp}&#92;), not every provider.</p></article><article><b>Synchronization</b><p>Recovery copies the freshest valid signed ciphertext.</p></article></div>'},"roupspa-setup":{navLabel:"Setup changes",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Setup",title:"RoUpSPA Setup — Changes from UpSPA",body:`${Be("assets/roupspa-setup-source.png","RoUpSPA setup protocol source figure")}<div class="setup-highlights"><span>&#92;(ctr_{id}&#92;leftarrow0&#92;)</span><span>&#92;(c_{id}=Enc_{F_K(pwd)}(ssk&#92;|R^{sp}&#92;|K_0&#92;|ctr_{id})&#92;)</span></div>`},"roupspa-registration":{navLabel:"Registration",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Registration",title:"RoUpSPA Registration",body:`${de(ce.upspa,[me({number:1,resilient:!0}),{number:2,from:"user",to:"user",local:!0,label:"Build &#92;(SUid_{l,j},c_j,vInfo_j&#92;) with &#92;(ctr_{ac}=0&#92;)"},{number:3,from:"user",to:"user",local:!0,label:"&#92;(&#92;sigma_j=Sign_{ssk}(Uid&#92;|SUid_{l,j}&#92;|c_j&#92;|ctr_{ac})&#92;)"},{number:4,from:"user",to:"ls",label:"&#92;(&#92;langle Prepare,Uid,vInfo_j&#92;rangle&#92;)",state:"pending"},{number:5,from:"ls",to:"user",label:"OK / FAIL"},{number:6,from:"user",to:"sp",label:"Signed account record"},{number:7,from:"sp",to:"user",label:"&#92;(q_{sp}&#92;) durable acknowledgements"},{number:8,from:"user",to:"ls",label:"Store",state:"committed"}],"")}<div class="phase-subtitle">Prepare at LS → write to &#92;(q_{sp}&#92;) providers → Store</div>`},"roupspa-phase-semantics":{navLabel:"Completion contract",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Completion contract",title:"RoUpSPA completes updates in two ways",body:'<div class="completion-patterns"><article><h3>Registration / Secret Update</h3><ol><li>Prepare at the login server.</li><li>Write one signed exact-counter record.</li><li>Collect &#92;(q_{sp}&#92;) durable acknowledgements.</li><li>Send Store to the login server.</li></ol></article><article><h3>Password Update</h3><ol><li>Create one signed exact-next identification record.</li><li>Providers retain it tentatively.</li><li>Collect &#92;(q_{sp}&#92;) matching acknowledgements.</li><li>Send Store to the providers.</li></ol></article></div>'},"roupspa-quorum-recovery":{navLabel:"Quorum recovery",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Recovery",title:"Quorum Recovery — Repairing Stale Providers",body:Nd()},"roupspa-secret-update":{navLabel:"Secret update",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Secret update",title:"RoUpSPA Secret Update",body:`${de(ce.upspa,[me({number:1,resilient:!0}),{number:2,from:"user",to:"sp",label:"Read active account records"},{number:3,from:"sp",to:"user",label:"Valid ciphertexts or FAIL"},{number:4,from:"user",to:"user",local:!0,label:"&#92;(&#92;sigma_j=Sign_{ssk}(Uid&#92;|SUid_{l,j}&#92;|c_{j,new}&#92;|ctr&#39;_{ac})&#92;), where &#92;(ctr&#39;_{ac}=ctr_{ac,max}+1&#92;)"},{number:5,from:"user",to:"ls",label:"Prepare old/new verifier transition",state:"pending"},{number:6,from:"user",to:"sp",label:"Signed exact-next account record"},{number:7,from:"sp",to:"user",label:"&#92;(q_{sp}&#92;) durable acknowledgements"},{number:8,from:"user",to:"ls",label:"Store",state:"committed"}],"")}<div class="phase-subtitle">Prepare → signed next-counter record → quorum → Store</div>`},"roupspa-password-update":{navLabel:"Password update",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Password update",title:"RoUpSPA Password Update",body:`${de(ce.password,[me({number:1,oldPassword:!0,resilient:!0}),$r({number:2,password:"pwd_{new}",sameShares:!0}),{number:3,from:"user",to:"user",local:!0,label:"&#92;(ctr&#39;_{id}=ctr_{id}+1&#92;); create &#92;(c_{id,new}&#92;)"},{number:4,from:"user",to:"user",local:!0,label:"&#92;(sig=Sign_{ssk}(Uid&#92;|c_{id,new}&#92;|ctr&#39;_{id})&#92;)"},{number:5,from:"user",to:"sp",label:"Signed tentative replacement",state:"pending"},{number:6,from:"sp",to:"user",label:"&#92;(q_{sp}&#92;) acknowledgements"},{number:7,from:"user",to:"sp",label:"Store",state:"committed"}],"")}<div class="phase-subtitle">Identification(old pwd) → TOPRF(new pwd) → quorum → Store</div>`},"roupspa-liveness":{navLabel:"Liveness scope",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Liveness",title:"Safety and availability use different thresholds",body:'<div class="liveness-matrix"><article><b>Authentication</b><strong>≥ &#92;(t_{sp}&#92;)</strong><p>Valid ACTIVE provider responses.</p></article><article><b>Registration / Secret Update</b><strong>≥ &#92;(q_{sp}&#92;)</strong><p>Durable acknowledgements, then login-server Store.</p></article><article><b>Password Update</b><strong>≥ &#92;(q_{sp}&#92;)</strong><p>Tentative acknowledgements, then provider Store.</p></article><article><b>Synchronization</b><strong>≥ &#92;(q_{sp}&#92;)</strong><p>Valid responses; choose the largest valid counter.</p></article></div><div class="not-consensus"><b>Not Byzantine consensus</b><span>A state-changing phase tolerates at most &#92;(n_{sp}-q_{sp}&#92;) unavailable providers.</span></div>'},"alternatives-pbb-visual":{navLabel:"PBB protocols",sectionKey:"alternatives",sectionLabel:"Synchronization alternatives",kicker:"Synchronization alternatives",title:"Public bulletin-board synchronization with and without DKG",body:`${Be("assets/pbb-alternatives.png","PBB without DKG and PBB with DKG protocol comparison")}`},"alternatives-pbb":{navLabel:"Public bulletin boards",sectionKey:"alternatives",sectionLabel:"Synchronization alternatives",kicker:"Synchronization alternatives",title:"A public bulletin board replaces private repair with a public update history",body:'<div class="split pbb-explanation"><article class="detail-card"><h3>Signed PBB</h3><p>Anyone can append, so each update carries the user signature that storage providers verify.</p><ul><li>Simple authorization</li><li>Public metadata and history</li><li>No private quorum repair</li></ul></article><article class="detail-card"><h3>DKG-authorized PBB</h3><p>Distributed key generation restricts writes to authorized users.</p><ul><li>Threshold write authority</li><li>More setup and cryptography</li><li>The same public-history trade-off</li></ul></article></div>'},"alternatives-blockchain-and-choice":{navLabel:"Backend trade-offs",sectionKey:"alternatives",sectionLabel:"Synchronization alternatives",kicker:"Synchronization alternatives",title:"Each synchronization backend has different trade-offs",body:'<table class="mechanism-table"><thead><tr><th>Mechanism</th><th>Shared component</th><th>Autonomous catch-up</th><th>Main added trade-off</th></tr></thead><tbody><tr><td>Quorum</td><td>None</td><td>Provider synchronization</td><td>Enough providers must respond</td></tr><tr><td>Signed PBB</td><td>Public board</td><td>Yes</td><td>Scanning, flooding, and board availability</td></tr><tr><td>Authorized PBB</td><td>Public board + admission</td><td>Yes</td><td>Committee setup and trust</td></tr><tr><td>Blockchain</td><td>Public ledger</td><td>Yes</td><td>Finality, fees, metadata, and contract assumptions</td></tr></tbody></table>'},"implementation-architecture-method":{navLabel:"Implementation architecture",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Implementation",title:"The prototype separates protocol logic, cryptography, and benchmarking",body:'<div class="implementation-pipeline"><article><b>Browser / client</b><span>Phase orchestration</span></article><i></i><article><b>Rust crypto core</b><span>TOPRF · AE · signatures · hashes</span></article><i></i><article><b>Provider API</b><span>Records · counters · quorum state</span></article><i></i><article><b>Login-server API</b><span>Verifier transitions</span></article><i></i><article><b>Benchmark harness</b><span>Timing and network configuration</span></article></div>'},"results-upspa-tspa":{navLabel:"UpSPA / TSPA performance",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · Client-side measurements",title:"Update support adds little client-side cost",body:`<div class="dual-charts fixed-nsp-charts"><article>${ie({labels:Ce,series:Ot,yMax:.65,yLabel:"Client time (ms)",xLabel:"Threshold tₛₚ",title:"Registration and authentication",width:700,height:400,showLegend:!1})}${_t(Ot,2,!0)}</article><article>${ie({labels:Ce,series:jt,yMax:1,yLabel:"Client time (ms)",xLabel:"Threshold tₛₚ",title:"Setup and update phases",width:700,height:400,showLegend:!1})}${_t(jt,2)}</article></div><div class="chart-callout">Fixed nₛₚ = 30 · all retained client medians remain below 1 ms.</div>`},"results-threshold-sso-comparison":{navLabel:"Comparison boundary",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · Interpretation boundary",title:"UpSPA, PAS-TA-U, and AugSSO provide different functionality",body:'<div class="comparison-boundary"><article><h3>UpSPA</h3><b>SPA lifecycle</b><p>Independent service credentials, secret updates, and master-password updates.</p></article><article><h3>PAS-TA-U</h3><b>Threshold authentication</b><p>Password update in a token and identity-provider setting.</p><a class="comparison-detail-link" href="#/aux-pastau-threshold-token-generation">PAS-TA-U protocols →</a></article><article><h3>AugSSO</h3><b>Threshold SSO</b><p>Popular-password collection and key renewal in an SSO setting.</p><a class="comparison-detail-link" href="#/aux-augsso-registration">AugSSO protocols →</a></article></div><div class="boundary-callout">These measurements compare implementation cost, not equivalent functionality.</div>'},"results-upspa-roupspa":{navLabel:"Coordination stages",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · Coordination semantics",title:"RoUpSPA adds quorum coordination to update phases",body:'<table class="coordination-table"><thead><tr><th>Phase</th><th>Coordination</th><th>LS?</th><th>&#92;(q_{sp}&#92;) write?</th><th>Store/Discard in prototype?</th></tr></thead><tbody><tr><td>Authentication</td><td>Read ACTIVE replicas</td><td>Yes</td><td>No</td><td>N/A</td></tr><tr><td>Registration</td><td>Prepare + quorum durability</td><td>Yes</td><td>Yes</td><td><strong class="not-implemented">Not implemented</strong></td></tr><tr><td>Secret update</td><td>Prepare + quorum durability</td><td>Yes</td><td>Yes</td><td><strong class="not-implemented">Not implemented</strong></td></tr><tr><td>Password update</td><td>Signed versioned root</td><td>No</td><td>Yes</td><td><strong class="not-implemented">Not implemented</strong></td></tr></tbody></table><div class="chart-callout">Store/Discard is defined by the protocol but not implemented in the prototype.</div>'},"results-upspa-roupspa-charts":{navLabel:"Resilience cost",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · Resilience cost",title:"RoUpSPA adds measurable overhead for resilience",body:`<div class="triple-mini-charts">${Nt("registration","Registration")}${Nt("secret","Secret update")}${Nt("password","Password update")}</div><div class="chart-callout">Low-threshold configurations remain practical.</div>`},"results-backends":{navLabel:"Backend endpoint cost",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · nₛₚ = 100",title:"Backend overhead differs by update phase at &#92;(n_{sp}=100&#92;)",body:`${qr()}<p class="chart-note">Complete local p50 · milliseconds · &#92;(q_{sp}=&#92;lceil0.8n_{sp}&#92;rceil&#92;)</p>`},"results-backend-scaling":{navLabel:"Backend scaling",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · Resilient storage backends",title:"Password-update backend cost grows differently with &#92;(n_{sp}&#92;)",body:`<div class="wide-chart">${ie({labels:sn,series:nn,yMax:32,yLabel:"Complete local p50 (ms)",xLabel:"nₛₚ",title:"Password-update endpoint scaling",width:1380,height:540})}</div><div class="chart-callout">qₛₚ = ⌈0.8nₛₚ⌉ · complete local medians.</div>`},"conclusion-contributions":{navLabel:"Contributions",sectionKey:"conclusion",sectionLabel:"Conclusions",kicker:"Contributions",title:"This thesis adds native updates and resilience to SPA",body:'<div class="contribution-blocks"><article><b>01 · UpSPA</b><h3>Native updates</h3><p>Change one service credential or the master password without rebuilding every account.</p></article><article><b>02 · RoUpSPA</b><h3>Quorum-based resilience</h3><p>Complete writes with a quorum and repair stale providers from signed evidence.</p></article><article><b>03 · Evaluation</b><h3>Measured trade-offs</h3><p>Compare client cost, network composition, and synchronization backends.</p></article></div>'},"conclusion-limitations-future":{navLabel:"Future work",sectionKey:"conclusion",sectionLabel:"Conclusions",kicker:"Future Work",title:"Future Work"},"conclusion-publications":{navLabel:"Research outputs",sectionKey:"conclusion",sectionLabel:"Conclusions",kicker:"Research outputs",title:"Publications and Research Outputs"}});function we(n,e=""){return`<div class="takeaway-strip ${e}"><b>Takeaway</b><span>${n}</span></div>`}function _t(n,e=2,t=!1){const s=i=>t?i.replace("registration","reg.").replace("authentication","auth."):i;return`<div class="chart-panel-legend" style="--legend-columns:${e}">${n.map(i=>`<span class="${i.dash||i.dashArray?"dashed":""}" style="--legend-color:${i.color}"><i></i>${s(i.name)}</span>`).join("")}</div>`}function Be(n,e,t=""){return`<figure class="exact-figure"><img src="${n}" alt="${e}">${t?`<figcaption>${t}</figcaption>`:""}</figure>`}function se(n,e,t){return`<div class="screenshot-stage">${Be(n,e,t)}</div>`}function de(n,e,t){return mt({actors:n,steps:e,finalLabel:t})}function It(n,e){return`<span class="downloaded-security-icon"><img src="assets/security-icons/${n}.svg" alt="${e} icon"></span>`}function Xt(n,e){return`<article>${It(e,n)}<strong>${n}</strong></article>`}function ga(n){const e=n==="TSPA",t=e?"Storage providers":"Storage provider",s=e?["Distribute protected helper material across \\(n_{sp}\\) providers","Register one high-entropy service verifier"]:["Store password-protected helper state","Register one high-entropy service verifier"],i=e?["Run OPRF-based protection with the providers","Combine at least \\(t_{sp}\\) responses and recover the service credential","Authenticate without sending \\(pwd\\)"]:["Open the helper state and recover the service credential","Authenticate without sending \\(pwd\\)"],a=(r,o,l)=>`<article class="legacy-zone"><h3>${r}</h3><div class="legacy-zone-flow">${o.map((c,h)=>`<div class="fragment" data-fragment-index="${l+h}"><b>${h+1}</b><span>${c}</span></div>`).join("<i>→</i>")}</div></article>`;return`<div class="legacy-protocol" data-protocol="${n.toLowerCase()}"><div class="legacy-actors"><span>${t}</span><span>User</span><span>Website / Login server</span></div>${a("Registration",s,0)}${a("Authentication",i,s.length)}<div class="legacy-principle"><strong>${e?"\\(t_{sp}\\) of \\(n_{sp}\\)":"One password"}</strong><span>${e?"OPRF-based protection and threshold recovery":"The login server receives only a high-entropy verifier"}</span></div></div>`}function Id(n){return n.map((e,t)=>`<span class="recovery-node ${e}"><b>SP${t+1}</b><small>${e==="active"?"ACTIVE":e==="recovering"?"RECOVERING":"OFFLINE / STALE"}</small></span>`).join("")}function Xe({index:n,title:e,states:t,detail:s,fragmentClass:i=""}){const a=i?` data-fragment-index="${n}"`:"";return`<article class="recovery-scene ${i}"${a}><div class="recovery-stage-label">Stage ${n+1}</div><h3>${e}</h3><div class="recovery-nodes">${Id(t)}</div><div class="recovery-detail">${s}</div></article>`}function Nd(){return`<div class="recovery-animation">
    ${Xe({index:0,title:"Two providers have missed committed state",states:["active","active","active","active","active","stale","stale"],detail:"<b>SP1–SP5</b> are synchronized. <b>SP6</b> and <b>SP7</b> are offline or stale."})}
    ${Xe({index:1,title:"SP6 returns and repairs from quorum R₆",states:["active","active","active","active","active","recovering","stale"],detail:String.raw`SP6 queries \(R_6=\{SP1,SP2,SP3,SP4,SP5\}\), verifies signatures and quorum evidence, selects the largest valid counter, and repairs its local state.`,fragmentClass:"fragment fade-in-then-out"})}
    ${Xe({index:2,title:"SP7 can now recover through a quorum that includes SP6",states:["active","active","active","active","active","active","recovering"],detail:String.raw`After SP6 becomes ACTIVE, SP7 queries a valid \(q_{sp}\)-provider recovery quorum \(R_7\) that may include SP6 and repeats the same checks.`,fragmentClass:"fragment fade-in-then-out"})}
    ${Xe({index:3,title:"All seven providers are ACTIVE and synchronized",states:["active","active","active","active","active","active","active"],detail:"Recovery copies only the freshest valid signed ciphertext. No password, plaintext, or TOPRF participation is required.",fragmentClass:"fragment fade-in"})}
  </div>`}function Nt(n,e){return`<article class="mini-chart-card">${ie({labels:Fn,series:[{name:"UpSPA",color:"#164a7b",values:Ee[n].upspa},{name:"RoUpSPA",color:"#7b61a8",values:Ee[n].roupspa}],yMax:Math.max(...Ee[n].roupspa)*1.12,yLabel:"Local client (ms)",xLabel:"n/t/q",title:e,width:460,height:330})}<div class="lan-endpoint"><b>Composed LAN at 10/6/8</b><span>UpSPA ${je[n].upspa.at(-1).toFixed(3)} ms</span><span>RoUpSPA ${je[n].roupspa.at(-1).toFixed(3)} ms</span></div></article>`}function qr(){return`<div class="grouped-endpoints"><div class="endpoint-key">${Cd.map((e,t)=>`<span style="--key:${ma[t]}">${e}</span>`).join("")}</div>${Ed.map(([e,t])=>`<article><h3>${e}</h3><div>${t.map((s,i)=>`<span class="endpoint-bar${e==="Password update"&&i===0?" label-inside":" label-above"}" style="--h:${s/30*100}%;--bar:${ma[i]}"><i>${s.toFixed(3)}</i></span>`).join("")}</div></article>`).join("")}</div>`}const $d=[["Contract deployment","1,356,750","$81.405"],["Direct registration","123,619","$7.417"],["Direct secret update","51,173","$3.070"],["Direct password update","51,169","$3.070"]],qd=[["8","93,637","11,704.625","$0.7023"],["32","93,643","2,926.344","$0.1756"],["128","93,661","731.727","$0.0439"]];function Od(){return`<div class="gas-layout"><article><h3>Direct receipt medians</h3><table class="evidence-table"><thead><tr><th>Operation</th><th>gasUsed</th><th>Illustrative USD</th></tr></thead><tbody>${$d.map(n=>`<tr>${n.map(e=>`<td>${e}</td>`).join("")}</tr>`).join("")}</tbody></table></article><article><h3>Merkle publication batching</h3><table class="evidence-table"><thead><tr><th>Batch</th><th>Publish gas</th><th>Gas / record</th><th>USD / record</th></tr></thead><tbody>${qd.map(n=>`<tr>${n.map(e=>`<td>${e}</td>`).join("")}</tr>`).join("")}</tbody></table><div class="batch-drop"><strong>16× lower</strong><span>per-record publication cost</span><small>B = 8 → 128 · 93.75% reduction</small></div></article></div><div class="gas-scenario"><b>Illustrative conversion only</b><span>20 gwei · ETH/USD = $3,000 · replace with presentation-time market inputs</span><span>All 91 archived local-Anvil receipts succeeded.</span></div>`}const jd={title:{navLabel:"Title",sectionKey:"title",sectionLabel:"Title",layout:"raw",body:'<div class="slide-shell title-stage"><div class="title-copy"><div class="section-kicker">MSc thesis defense</div><h1>{{config.title}}</h1><p class="program">Master of Science in {{config.program}}</p><div class="identity aligned single"><div><strong>{{config.presenterFormalName}}</strong><span>Lecturer</span></div></div><div class="title-date">Koç University · 12 August 2026</div></div><div class="title-visual" aria-label="Institutional affiliations"><div class="title-rings"><i></i><i></i><i></i><strong>SPA</strong></div><div class="title-logos"><img src="assets/koc-logo.png" alt="Koç University logo"><img src="assets/ku-crypto.png" alt="Koç University Cryptography, Security, and Privacy Research Group logo"></div></div></div>'},"problem-daily-authentication":{navLabel:"Daily authentication",sectionKey:"problem",sectionLabel:"Problem",kicker:"The password problem",title:"Authentication is a daily activity",body:`<p class="lead">People return to many independent accounts, often from several devices.</p><div class="service-category-grid">${Xt("Email","envelope")}${Xt("Banking","building-columns")}${Xt("Shopping","cart-shopping")}${Xt("Cloud","cloud")}${Xt("Developer","code")}</div>`},"problem-two-strategies":{navLabel:"One or many?",sectionKey:"problem",sectionLabel:"Problem",kicker:"The password problem",title:"One password is convenient; many passwords isolate compromise",body:'<div class="choice-grid human"><article class="danger-card"><span>01</span><h3>Reuse one password</h3><p>It is easy to remember and quick to use.</p><strong>A single leak can expose several accounts.</strong></article><div class="choice-or">or</div><article class="safe-card"><span>02</span><h3>Use a different password for every service</h3><p>Each account is better isolated.</p><strong>Remembering, updating, and recovering every credential becomes difficult.</strong></article></div>'},"problem-password-manager":{navLabel:"Password managers",sectionKey:"problem",sectionLabel:"Problem",kicker:"The password problem",title:"Password managers protect many credentials with one master secret",body:`<div class="manager-redesign"><div class="vault-flow"><article>${It("key","Master secret")}<strong>Master secret</strong></article><i>→</i><article>${It("vault","Encrypted vault")}<strong>Encrypted vault</strong></article><i>→</i><div class="vault-sites protected-sites"><span class="vault-shield">${It("shield-halved","Protected credentials")}</span><span>Email</span><span>Bank</span><span>Shop</span><span>Cloud</span><span>Developer</span></div></div><div class="vault-options"><article><h3>Local vault</h3><div><b>+</b><span>Credentials stay on one device.</span></div><div><b>−</b><span>Backup, migration, and device loss need a plan.</span></div></article><article><h3>Cloud vault</h3><div><b>+</b><span>Encrypted state is available across devices.</span></div><div><b>−</b><span>Cloud availability and metadata enter the trust boundary.</span></div></article></div></div>`},"problem-research-question":{navLabel:"Research questions",sectionKey:"problem",sectionLabel:"Problem",kicker:"Research questions",title:"Three research questions define the thesis",body:'<div class="research-questions three"><article><b>RQ1</b><p>Can one memorable password support many independent services without exposing the password to login servers?</p></article><article><b>RQ2</b><p>Can service credentials and the master password be updated efficiently without rebuilding every account?</p></article><article><b>RQ3</b><p>Can resilience be added so phases keep making progress when some parties are temporarily unavailable?</p></article></div><div class="rq-map"><span><b>RQ1</b> SPA / TSPA</span><span><b>RQ2</b> UpSPA</span><span><b>RQ3</b> RoUpSPA</span></div>'},"lineage-overview":{navLabel:"Evolution",sectionKey:"lineage",sectionLabel:"SPA lineage",kicker:"Evolution of SPA",title:"SPA evolves from authentication to updates and resilience",body:'<div class="lineage-cards compact"><article><b>2013 · Computer Networks</b><h3>SPA</h3><p>Single Password Authentication</p><small>One password, separate helper</small><div class="portrait-row"><img src="assets/tolga-acar.jpg" alt="Tolga Acar"><img src="assets/mira-belenkiy.jpg" alt="Mira Belenkiy"><img src="assets/alptekin-kupcu.jpg" alt="Alptekin Küpçü"></div><em>Acar¹ · Belenkiy¹ · Küpçü²</em></article><article><b>2017 · DPM</b><h3>TSPA</h3><p>Threshold Single Password Authentication</p><small>Threshold-distributed helper</small><div class="portrait-row"><img src="assets/devris-isler.jpg" alt="Devriş İşler"><img src="assets/alptekin-kupcu.jpg" alt="Alptekin Küpçü"></div><em>İşler² · Küpçü²</em></article><article><b>2026 · ePrint 2026/784 · WPES submitted</b><h3>UpSPA</h3><p>Updatable Single Password Authentication</p><small>Native secret and password updates</small><div class="portrait-row"><img src="assets/devris-isler.jpg" alt="Devriş İşler"><img src="assets/reza-saadi.jpg" alt="Reza Saadi"><img src="assets/alptekin-kupcu.jpg" alt="Alptekin Küpçü"></div><em>İşler³ · Saadi² · Küpçü²</em></article><article><b>2026 · ACM TOPS will be submitted</b><h3>RoUpSPA</h3><p>Robust Updatable Single Password Authentication</p><small>Quorum completion and stale repair</small><div class="portrait-row"><img src="assets/reza-saadi.jpg" alt="Reza Saadi"><img src="assets/devris-isler.jpg" alt="Devriş İşler"><img src="assets/alptekin-kupcu.jpg" alt="Alptekin Küpçü"></div><em>Saadi² · İşler³ · Küpçü²</em></article></div><div class="affiliation-footnote">(1) Microsoft, (2) Koç University, (3) IMDEA Institute.</div>'},"lineage-spa":{navLabel:"SPA",sectionKey:"lineage",sectionLabel:"SPA lineage",kicker:"SPA · Registration and Authentication",title:"SPA keeps the password away from the login server",body:ga("SPA")},"lineage-tspa":{navLabel:"TSPA",sectionKey:"lineage",sectionLabel:"SPA lineage",kicker:"TSPA · Registration and Authentication",title:"TSPA distributes password protection across providers",body:ga("TSPA")},"lineage-gap-and-thesis":{navLabel:"Thesis gap",sectionKey:"lineage",sectionLabel:"SPA lineage",kicker:"Evolution of SPA",title:"SPA and TSPA do not support native updates",body:'<div class="evolution-grid human"><article><b>SPA / TSPA</b><div><span>Registration</span><i></i><span>Authentication</span></div><p>Create and use a service credential.</p></article><article><b>UpSPA</b><div><span>Setup</span><i></i><span>Registration</span><i></i><span>Authentication</span></div><div><span>Secret update</span><i></i><span>Password update</span></div><p>Add native secret and password updates.</p></article><article><b>RoUpSPA</b><div><span>Quorum completion</span><i></i><span>Versioned replicas</span><i></i><span>Synchronization / repair</span></div><p>Continue safely when some providers are unavailable.</p></article></div>'},"upspa-two-layer-state":{navLabel:"Two-layer state",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · State design",title:"One master record protects independent service accounts",body:String.raw`<div class="state-tree"><article><b>Identification / master record</b><strong>(c_{id}leftarrow Enc_{F_K(pwd)}(ssk|R^{sp}|K_0))</strong><small>The UpSPA identification record has no counter.</small></article><i></i><div><article><b>Account (LS_1)</b><strong>(c_1leftarrow Enc_{K_0}(R^{ls_1}|ctr_{ac}))</strong></article><article><b>Account (LS_2)</b><strong>(c_2leftarrow Enc_{K_0}(R^{ls_2}|ctr_{ac}))</strong></article><article><b>Account (LS_j)</b><strong>(c_jleftarrow Enc_{K_0}(R^{ls_j}|ctr_{ac}))</strong></article></div></div>`},"upspa-setup":{navLabel:"Setup",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Setup",title:"Setup creates the threshold identification record at every provider",body:`<p class="lead compact-lead">Setup initializes provider-held TOPRF material and the encrypted identification record.</p>${Be("assets/upspa-setup-source.png","UpSPA setup protocol source figure")}`},"upspa-toprf":{navLabel:"TOPRF interaction",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Password-private threshold evaluation",title:"TOPRF derives the password key without revealing the password",body:String.raw`<div class="toprf-flow"><article><b>1 · Blind</b><h3>User</h3><p>Blinds \(pwd\) and sends the blinded input to available providers.</p></article><i>→</i><article><b>2 · Evaluate</b><h3>Providers</h3><p>Each \(SP_i\) uses only its share \(k_i\) and returns a partial evaluation.</p></article><i>→</i><article><b>3 · Aggregate</b><h3>User</h3><p>Combines at least \(t_{sp}\) valid partial evaluations.</p></article><i>→</i><article><b>4 · Finalize</b><h3>Output</h3><p>Unblinds and finalizes \(F_K(pwd)\).</p></article></div><div class="privacy-boundary"><strong>Provider view</strong><span>No provider learns \(pwd\) or the final output \(F_K(pwd)\).</span><b>Threshold rule: \(|S|\ge t_{sp}\)</b></div>`},"aux-toprf-concrete":{navLabel:"2D-DDH TOPRF example",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"Aux · Concrete TOPRF example",title:"A 2D-DDH-style OPRF/PRF evaluation, step by step",body:String.raw`<div class="concrete-toprf"><article><b>Blind</b><p>Map \(pwd\) to \(X=H_1(pwd)\), choose \(r\ne0\), and send \(B=X^r\).</p></article><article><b>Partial evaluations</b><p>Provider \(i\) returns \(Z_i=B^{k_i}\) using only its key share.</p></article><article><b>Threshold combine</b><p>For \(|S|\ge t_{sp}\), compute \(Z=\prod_{i\in S} Z_i^{\lambda_i}=B^K\).</p></article><article><b>Unblind + finalize</b><p>Compute \(Y=Z^{r^{-1}}=H_1(pwd)^K\), then \(F_K(pwd)=H_2(pwd,Y)\).</p></article></div><div class="assumption-note"><b>Security intuition</b><span>The blind exponent hides the user input; the threshold shares prevent fewer than \(t_{sp}\) providers from evaluating the full PRF. The 2D-DDH assumption supports pseudorandomness for this group-based example.</span></div>`},"upspa-identification":{navLabel:"Identification",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Reusable opening step",title:"Identification",body:`${oi({mode:"detailed"})}<div class="safe-failure">FAIL, fewer than \\(t_{sp}\\) valid provider responses, TOPRF failure, or authenticated-decryption failure stops the phase.</div>`},"upspa-registration":{navLabel:"Registration",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Registration",title:"Registration commits provider records only after login-server acceptance",body:`${de(ce.upspa,[me({number:1}),{number:2,from:"user",to:"user",local:!0,label:"Sample \\(R^{ls_j}\\); set \\(ctr_{ac}=0\\); derive \\(SUid_{l,i,j}=H(R^{sp}\\|ls_j\\|i)\\)"},{number:3,from:"user",to:"user",local:!0,label:"\\(c_j=Enc_{K_0}(R^{ls_j}\\|ctr_{ac})\\); \\(vInfo_j=H(R^{ls_j}\\|ls_j)\\)"},{number:4,from:"user",to:"sp",label:"Pending \\(\\langle SUid_{l,i,j},c_j\\rangle\\)",state:"pending"},{number:5,from:"sp",to:"user",label:"OK / FAIL (all \\(n_{sp}\\))"},{number:6,from:"user",to:"ls",label:"Register \\(\\langle Uid,vInfo_j\\rangle\\)"},{number:7,from:"ls",to:"user",label:"OK / FAIL"},{number:8,from:"user",to:"sp",label:"Store if accepted · Discard otherwise",state:"committed"},{number:9,from:"sp",to:"user",label:"Final OK / FAIL (all \\(n_{sp}\\))"}],"")}${we("Registration commits provider records only after login-server acceptance.")}`},"upspa-authentication":{navLabel:"Authentication",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Authentication",title:"Authentication reconstructs the service credential without sending the password",body:`${de(ce.upspa,[me({number:1}),{number:2,from:"user",to:"user",local:!0,label:"Derive \\(SUid_{l,i,j}=H(R^{sp}\\|ls_j\\|i)\\)"},{number:3,from:"user",to:"sp",label:"Request committed account record under \\(SUid_{l,i,j}\\)"},{number:4,from:"sp",to:"user",label:"\\(c_j\\) or FAIL"},{number:5,from:"user",to:"user",local:!0,label:"Authenticated-decrypt candidates; select valid maximum \\(ctr_{ac}\\)"},{number:6,from:"user",to:"user",local:!0,label:"\\(vInfo'_{j}=H(R^{ls_j}\\|ls_j)\\)"},{number:7,from:"user",to:"ls",label:"\\(\\langle Uid,vInfo'_{j}\\rangle\\)"},{number:8,from:"ls",to:"user",label:"OK / FAIL"}],"")}${we("Authentication reconstructs the service credential without sending the password.")}`},"upspa-secret-update":{navLabel:"Secret update",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Secret update",title:"Secret update rotates one login-server credential",body:`${de(ce.upspa,[me({number:1}),{number:2,from:"user",to:"sp",label:"Request account record under derived \\(SUid_{l,i,j}\\)"},{number:3,from:"sp",to:"user",label:"\\(c_j\\) or FAIL (committed only)"},{number:4,from:"user",to:"user",local:!0,label:"Decrypt; select maximum \\(ctr_{ac}\\); sample \\(R^{ls_j}_{new}\\); compute old/new \\(vInfo\\)"},{number:5,from:"user",to:"user",local:!0,label:"\\(ctr'_{ac}=(ctr_{ac})_{max}+1\\); \\(c_{j,new}=Enc_{K_0}(R^{ls_j}_{new}\\|ctr'_{ac})\\)"},{number:6,from:"user",to:"sp",label:"Pending \\(\\langle SUid_{l,i,j},c_{j,new}\\rangle\\)",state:"pending"},{number:7,from:"sp",to:"user",label:"OK / FAIL (all \\(n_{sp}\\))"},{number:8,from:"user",to:"ls",label:"\\(\\langle Uid,vInfo'_{j},vInfo_{j,new}\\rangle\\)"},{number:9,from:"ls",to:"user",label:"OK / FAIL"},{number:10,from:"user",to:"sp",label:"Store / Discard",state:"committed"},{number:11,from:"sp",to:"user",label:"Final OK / FAIL (all \\(n_{sp}\\))"}],"")}${we("Secret update rotates one service credential without changing the master password.")}`},"upspa-password-update":{navLabel:"Password update",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Password update",title:"Password update replaces the master-opening material - not every account",body:`${de(ce.password,[me({number:1,oldPassword:!0}),{number:2,from:"user",to:"user",local:!0,label:"\\((K_{new},\\{k_{i,new}\\}_{i\\in[n_{sp}]})\\leftarrow TOPRFGen(1^\\lambda,n_{sp},t_{sp})\\)"},{number:3,from:"user",to:"user",local:!0,label:"\\(c_{id,new}\\leftarrow Enc_{F_{K_{new}}(pwd_{new})}(ssk\\|R^{sp}\\|K_0)\\)"},{number:4,from:"user",to:"user",local:!0,label:"\\(sig_i=Sign_{ssk}(Uid\\|c_{id,new}\\|k_{i,new}\\|time\\|i)\\)"},{number:5,from:"user",to:"sp",label:"Pending \\(\\langle Uid,sig_i,c_{id,new},k_{i,new},time,i\\rangle\\)",state:"pending"},{number:6,from:"sp",to:"user",label:"OK / FAIL (all \\(n_{sp}\\))"},{number:7,from:"user",to:"sp",label:"Store / Discard",state:"committed"},{number:8,from:"sp",to:"user",label:"Final OK / FAIL (all \\(n_{sp}\\))"}],"")}${we("Password update changes provider-side master-opening material without contacting login servers.")}`},"upspa-design-challenges":{navLabel:"Update obligations",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Security obligations",title:"Updates add binding and consistency obligations",body:'<div class="obligation-grid"><article><b>01 · State binding</b><p>Hidden identifiers bind each record to its family and service domain.</p><span>Identifiers</span></article><article><b>02 · Password-update authorization</b><p>Only the legitimate user can replace the identification record.</p><span>Signatures</span></article><article><b>03 · Freshness</b><p>New state must advance beyond, not replay, an older account record.</p><span>Counters</span></article><article><b>04 · Terminal decision</b><p>Every staged write ends in one explicit final state.</p><span>Store / Discard</span></article></div>'},"upspa-challenge-mechanisms":{navLabel:"Challenges → mechanisms",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Design rationale",title:"Each design challenge has an explicit mechanism",body:'<table class="mechanism-table"><thead><tr><th>Challenge</th><th>Mechanism</th></tr></thead><tbody><tr><td>Prevent an offline dictionary predicate</td><td>Random-looking plaintext under password-derived authenticated encryption</td></tr><tr><td>Avoid login-server password exposure</td><td>Login server stores only \\(vInfo_j\\)</td></tr><tr><td>Bind an account to its service</td><td>Domain-bound \\(H(R^{ls_j}\\|ls_j)\\)</td></tr><tr><td>Bind a user to its account</td><td>Provider-side \\(SUid_{l,i,j}\\) derived from \\(R^{sp}\\) and the service domain</td></tr><tr><td>Authorize replacement of the identification record</td><td>Phase-bound \\(ssk/svk\\) signature</td></tr><tr><td>Avoid partial writes</td><td>Pending state followed by Store / Discard</td></tr></tbody></table>'},"upspa-proof-waterfall":{navLabel:"Hybrid proof waterfall",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Security proof",title:"G₀–G₄ remove protected structure one layer at a time",body:String.raw`<div class="proof-chain"><article><b>G₀</b><h3>Stopped real execution</h3><p>Run the real phases on real inputs and stop if a separately bounded bad event occurs.</p></article><i>↓</i><article><b>G₁</b><h3>TOPRF PRF replacement</h3><p>Replace honest-receiver TOPRF outputs and transcripts with random-function-consistent values.</p></article><i>↓</i><article><b>G₂</b><h3>Identification plaintext replacement</h3><p>Replace the protected identification plaintext in \(c_{id}\) by an equal-length dummy value.</p></article><i>↓</i><article><b>G₃</b><h3>Account plaintext replacement</h3><p>Replace honest account-record plaintexts by equal-length dummy values.</p></article><i>↓</i><article><b>G₄</b><h3>Ideal functionality + simulator</h3><p>Generate the same visible outcomes from \(\mathcal F_{UpSPA}\) and simulator-maintained logical state.</p></article></div><div class="proof-separation"><b>Accounted outside the hybrids</b><span>signature forgery · hash collision · authenticated-encryption integrity/key-binding failure · online password guesses</span></div>`},"aux-upspa-hybrid-g1":{navLabel:"G₀ → G₁ details",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"Aux · UpSPA proof details",title:"G₁ replaces the TOPRF view with one random function",body:String.raw`<div class="proof-detail-grid"><article><b>Random-function game</b><p>Sample one consistent random function \(R\) and replace every honest receiver output \(F_K(pwd^*)\) by \(R(pwd^*)\).</p></article><article><b>Encryption key</b><p>Use \(R(pwd^*)\) as the master-record encryption key in place of the real TOPRF output.</p></article><article><b>Transcript simulation</b><p>Simulate the honest-receiver interaction while preserving abort and result behavior.</p></article><article><b>Reduction</b><p>A distinguisher between G₀ and G₁ yields a distinguisher against TOPRF receiver-side PRF security and receiver-input obliviousness.</p></article></div>`},"aux-upspa-hybrid-g2-g3":{navLabel:"G₂ → G₃ details",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"Aux · UpSPA proof details",title:"G₂ and G₃ apply IND-CPA to each protected plaintext class",body:String.raw`<div class="proof-detail-grid two"><article><b>G₂ · Identification ciphertexts</b><p>Replace \(ssk\|R^{sp}\|K_0\) by a random string of the same length under the corresponding \(R(pwd^*)\) key.</p><small>Setup and password-update keys remain independent instances.</small></article><article><b>G₃ · Account ciphertexts</b><p>Replace each honest \(R^{ls_j}\|ctr_{ac}\) plaintext under \(K_0\) by an equal-length dummy string, one ciphertext at a time.</p><small>The logical record table still determines the visible phase result.</small></article></div><div class="assumption-note"><b>Integrity boundary</b><span>AE integrity and key binding keep malformed ciphertexts from changing simulated accept/reject behavior; IND-CPA hides only the plaintext contents.</span></div>`},"backup-upspa-advantage-bound":{navLabel:"UpSPA advantage bound",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"Aux · UpSPA final advantage bound",title:"The final bound separates TOPRF, identification, and account privacy",body:String.raw`<div class="final-bound"><div>\[\operatorname{Adv}_{real/ideal}\le \operatorname{Adv}_{TOPRF}^{prf}+q_{dec}\operatorname{Adv}_{AE,id}^{ind-cpa}+q_{ac}\operatorname{Adv}_{AE,ac}^{ind-cpa}\]</div><p>All query counts are polynomial; each term is negligible under the stated primitive assumption.</p></div>`},"roupspa-quorum-intersection":{navLabel:"Quorum intersection",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Safety",title:"Every write quorum meets a later read quorum in honest evidence",body:String.raw`<div class="intersection-layout exact"><div class="venn"><span>W</span><span>R</span><strong><i class="honest-sp-marker">✓</i><em>honest SP<br>evidence</em></strong></div><div><div class="equation-box">\[\lvert W\cap R\rvert\ge 2q_{sp}-n_{sp}>t_{sp}-1\]</div><ol><li>\(W\): the \(q_{sp}\) providers that acknowledged the committed record.</li><li>\(R\): a later \(q_{sp}\)-provider read or synchronization quorum.</li><li>The overlap is larger than the corrupt set, so it contains an honest SP.</li><li>The largest-valid-counter rule carries the latest committed evidence forward.</li></ol><p class="intersection-rule">Signatures authorize; counters order; quorum intersection preserves evidence.</p></div></div>`},"roupspa-registration":{navLabel:"Registration",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Registration",title:"RoUpSPA prepares the login server, then completes a durable write quorum",body:`${de(ce.upspa,[me({number:1,resilient:!0}),{number:2,from:"user",to:"user",local:!0,label:"\\(SUid_{l,j}=H(R^{sp}\\|ls_j)\\); sample \\(R^{ls_j}\\); set \\(ctr_{ac}=0\\); build \\(c_j,vInfo_j\\)"},{number:3,from:"user",to:"user",local:!0,label:"\\(\\sigma_j=Sign_{ssk}(Uid\\|SUid_{l,j}\\|c_j\\|ctr_{ac})\\)"},{number:4,from:"user",to:"ls",label:"\\(\\langle Prepare,Uid,vInfo_j\\rangle\\)",state:"pending"},{number:5,from:"ls",to:"user",label:"OK / FAIL (tentative at \\(LS_j\\))"},{number:6,from:"user",to:"sp",label:"\\(\\langle Uid,SUid_{l,j},c_j,ctr_{ac},\\sigma_j\\rangle\\)"},{number:7,from:"sp",to:"user",label:"\\(q_{sp}\\) matching durable acknowledgements",state:"committed"},{number:8,from:"user",to:"ls",label:"\\(\\langle Store,Uid,vInfo_j\\rangle\\)",state:"committed"}],"")}<div class="terminal-rule"><b>Discard rule</b><span>Discard is allowed only before the first provider-write request. After writing begins, retransmit the identical signed tuple until quorum or remain unresolved.</span></div>`},"roupspa-phase-semantics":{navLabel:"Completion semantics",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Completion contract",title:"State changes use two precise completion patterns",body:String.raw`<div class="completion-patterns"><article><h3>Registration / Secret Update</h3><ol><li>Prepare tentative verifier at \(LS_j\).</li><li>Install one phase-signed exact-counter record at providers.</li><li>Collect \(q_{sp}\) matching durable acknowledgements.</li><li>Send matching terminal Store to \(LS_j\).</li></ol></article><article><h3>Password Update</h3><ol><li>Create one signed exact-next identification-record replacement.</li><li>Providers retain the replacement tentatively.</li><li>Collect \(q_{sp}\) matching tentative acknowledgements.</li><li>Send matching terminal Store to providers.</li></ol></article></div><div class="terminal-rule"><b>Interrupted phase</b><span>Discard is a pre-write abort. Once provider writing begins, the phase retransmits the identical tuple or remains unresolved; no later phase starts for that record family.</span></div>`},"roupspa-synchronization":{navLabel:"Synchronization & repair",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Recovery",title:"Synchronization copies the freshest signed ciphertext",body:`<div class="replica-repair"><div class="replicas old"><b>Before read</b><span>SP₁ · v</span><span>SP₂ · v+1</span><span>SP₃ · v+1</span><span>SP₄ · v</span><span>SP₅ · v+1</span></div><div class="repair-core"><strong>Read quorum</strong><p>verify signatures<br>compare counters<br>select maximum valid version</p><b>v+1</b></div><div class="replicas repaired"><b>After repair</b><span>SP₁ · v+1</span><span>SP₂ · v+1</span><span>SP₃ · v+1</span><span>SP₄ · v+1</span><span>SP₅ · v+1</span></div></div>${we("A provider that misses a completed write can later repair from quorum evidence.")}`},"roupspa-quorum-recovery":{navLabel:"Quorum recovery figure",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Quorum recovery",title:"A stale provider recovers the freshest valid signed record",body:`${se("assets/roupspa-quorum-recovery.png","RoUpSPA quorum synchronization and stale-replica recovery figure","")}`},"roupspa-secret-update":{navLabel:"Secret update",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Secret update",title:"Secret update binds the exact-next counter before quorum storage",body:`${de(ce.upspa,[me({number:1,resilient:!0}),{number:2,from:"user",to:"sp",label:"Request active account record under derived \\(SUid_{l,j}\\)"},{number:3,from:"sp",to:"user",label:"\\(c_j\\) or FAIL"},{number:4,from:"user",to:"user",local:!0,label:"Decrypt; select \\(ctr_{ac,max}\\); build \\(c_{j,new},vInfo'_j,vInfo_{j,new}\\) with \\(ctr'_{ac}=ctr_{ac,max}+1\\)"},{number:5,from:"user",to:"user",local:!0,label:"\\(\\sigma_j=Sign_{ssk}(Uid\\|SUid_{l,j}\\|c_{j,new}\\|ctr'_{ac})\\)"},{number:6,from:"user",to:"ls",label:"\\(\\langle Prepare,Uid,vInfo'_j,vInfo_{j,new}\\rangle\\)",state:"pending"},{number:7,from:"ls",to:"user",label:"OK / FAIL (tentative at \\(LS_j\\))"},{number:8,from:"user",to:"sp",label:"\\(\\langle Uid,SUid_{l,j},c_{j,new},ctr'_{ac},\\sigma_j\\rangle\\)"},{number:9,from:"sp",to:"user",label:"\\(q_{sp}\\) matching durable acknowledgements",state:"committed"},{number:10,from:"user",to:"ls",label:"\\(\\langle Store,Uid,vInfo'_j,vInfo_{j,new}\\rangle\\)",state:"committed"}],"")}<div class="terminal-rule"><b>One-account scope</b><span>Pre-write Discard is allowed; after the first provider write, only the identical signed replacement may be retransmitted until quorum.</span></div>`},"roupspa-password-update":{navLabel:"Password update",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Password update",title:"Password update re-protects the identification record under the new password",body:`${de(ce.password,[me({number:1,oldPassword:!0,resilient:!0}),$r({number:2,password:"pwd_{new}",sameShares:!0}),{number:3,from:"user",to:"user",local:!0,label:"\\(ctr'_{id}=ctr_{id}+1\\); \\(c_{id,new}=Enc_{F_K(pwd_{new})}(ssk\\|R^{sp}\\|K_0\\|ctr'_{id})\\)"},{number:4,from:"user",to:"user",local:!0,label:"\\(sig=Sign_{ssk}(Uid\\|c_{id,new}\\|ctr'_{id})\\)"},{number:5,from:"user",to:"sp",label:"\\(\\langle Uid,sig,c_{id,new},ctr'_{id}\\rangle\\) (tentative)",state:"pending"},{number:6,from:"sp",to:"user",label:"\\(q_{sp}\\) matching tentative acknowledgements"},{number:7,from:"user",to:"sp",label:"Store after \\(q_{sp}\\) matching acknowledgements",state:"committed"}],"")}<div class="terminal-rule"><b>No login-server interaction</b><span>Discard is only a pre-write abort. After the first provider transmission, retransmit the identical signed tuple until quorum or remain unresolved. Store promotes the matching tentative record; no final acknowledgement follows.</span></div>`},"roupspa-authorized-records":{navLabel:"Authorized state",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · State validity",title:"Signed records authorize change; terminal messages finalize it",body:`<div class="authorized-state"><article><h3>Signed replacement record</h3><div class="record-payload"><span>family identifier</span><span>encrypted payload</span><span>counter / version</span><span>phase + domain</span><strong>signature under \\(ssk\\)</strong></div><p>Signatures authorize replacement. Counters order valid records.</p></article><div class="terminal-switch"><span class="store">Store</span><i>or</i><span class="discard">Discard</span></div><article><h3>Terminal decision</h3><div class="state-outcomes"><span>Store → committed</span><span>Discard → pending removed</span><span>Missing terminal evidence → not completed</span></div><p>Quorum visibility does not itself authorize state.</p></article></div>${we("Quorum alone is not authorization; signed records and terminal messages define valid state.")}`},"aux-roupspa-quorum-consistency":{navLabel:"Quorum theorem",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"Aux · RoUpSPA quorum consistency theorem",title:"Quorum consistency and recovery correctness",body:String.raw`<div class="theorem-card"><b>Theorem</b><p>Assume fewer than \(t_{sp}\) storage providers are corrupted; \(2q_{sp}-n_{sp}>t_{sp}-1\); and honest providers store only valid records, never decrease counters, and acknowledge only after storage.</p><p>Writes and reads require \(q_{sp}\) providers, and reads choose the valid record with the largest counter. If \(rec^*\) is the latest committed valid record before a successful read or recovery, then the returned \(rec\) satisfies \(ctr_{rec}\ge ctr_{rec^*}\).</p></div>`},"aux-roupspa-quorum-proof":{navLabel:"Quorum proof sketch",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"Aux · Quorum proof sketch",title:"One honest intersection member carries committed evidence forward",body:String.raw`<div class="proof-steps"><article><b>1</b><p>For write quorum \(W\) and later read quorum \(R\), \(\lvert W\cap R\rvert\ge2q_{sp}-n_{sp}>t_{sp}-1\).</p></article><article><b>2</b><p>Therefore \(W\cap R\) contains at least one honest provider.</p></article><article><b>3</b><p>After acknowledging \(rec^*\), that provider never stores a smaller counter.</p></article><article><b>4</b><p>Thus \(R\) contains a valid record with counter at least \(ctr_{rec^*}\).</p></article><article><b>5</b><p>Selecting the largest valid counter prevents rollback.</p></article></div>`},"aux-roupspa-no-rollback":{navLabel:"No rollback / divergence",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"Aux · RoUpSPA corollaries",title:"Committed records cannot roll back or diverge at one counter",body:String.raw`<div class="corollary-grid"><article><b>Corollary · No rollback</b><p>A successful read or recovery cannot return a record older than the latest committed valid record.</p></article><article><b>Corollary · No divergent committed records</b><p>Two distinct valid records with the same counter cannot both commit: their write quorums intersect in an honest provider, which acknowledges at most one valid record per account and counter.</p></article></div>`},"aux-roupspa-authorization-checks":{navLabel:"Authorization checks",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"Aux · Authorization checks",title:"Routing identifies a record; signatures and counters authorize replacement",body:String.raw`<div class="authorization-checks"><article><b>Route</b><p>\(SUid_{l,j}\) identifies and routes the account family. Knowledge of it does not authorize a write.</p></article><article><b>Authorize</b><p>The phase-specific signature binds \(Uid\), the family, ciphertext, and exact-next counter.</p></article><article><b>Freshness</b><p>An honest provider accepts only the expected next counter and never rolls a counter back.</p></article><article><b>Reject</b><p>Malformed or stale records are ignored unless every record, counter, quorum, synchronization, and authorization check passes.</p></article></div>`},"roupspa-threat-and-boundary":{navLabel:"Safety boundary",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Claim boundary",title:"Safety and progress depend on different response thresholds",body:String.raw`<div class="safety-liveness"><div class="safety"><h3>Completed-state safety</h3><ul><li>Phase-bound signatures and exact-next counters authorize writes.</li><li>Quorum intersection preserves honest committed evidence.</li><li>The largest-valid-counter rule prevents rollback.</li></ul></div><div class="liveness"><h3>Conditional progress</h3><ul><li>Authentication needs at least \(t_{sp}\) valid ACTIVE responses.</li><li>State changes and synchronization need at least \(q_{sp}\) responses.</li><li>Too many unavailable parties or an unresolved write can stop progress.</li></ul></div></div><div class="claim danger">Not claimed: Byzantine consensus, a general BFT storage protocol, or cross-family distributed transactions.</div>`},"roupspa-liveness":{navLabel:"Liveness scope",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Liveness",title:"RoUpSPA provides conditional progress—not Byzantine consensus",body:String.raw`<div class="liveness-matrix"><article><b>Authentication</b><strong>≥ \(t_{sp}\)</strong><p>Valid ACTIVE provider responses. Read-only; no repair or write-back.</p></article><article><b>Registration / Secret Update</b><strong>≥ \(q_{sp}\)</strong><p>Matching durable provider acknowledgements, then the matching login-server Store.</p></article><article><b>Password Update</b><strong>≥ \(q_{sp}\)</strong><p>Matching tentative acknowledgements, then provider-side Store.</p></article><article><b>Synchronization</b><strong>≥ \(q_{sp}\)</strong><p>Valid responses; verify signatures and select the largest valid counter.</p></article></div><div class="not-consensus"><b>Availability boundary</b><span>A state-changing phase tolerates at most \(n_{sp}-q_{sp}\) unavailable providers. The quorum condition is a consistency rule, not a consensus protocol.</span></div>`},"implementation-architecture-method":{navLabel:"Implementation architecture",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Implementation",title:"The prototype separates protocol, cryptography, and measurement surfaces",body:`<div class="implementation-pipeline"><article><b>Browser / client</b><span>phase orchestration</span></article><i></i><article><b>Rust crypto core</b><span>TOPRF · AE · signatures · hashes</span></article><i></i><article><b>Provider API</b><span>records · counters · quorum state</span></article><i></i><article><b>Login-server API</b><span>verifier and Prepare / terminal decisions</span></article><i></i><article><b>Benchmark harness</b><span>timing boundary · network configuration</span></article></div>${we("Protocol logic, cryptographic operations, and deployment measurement remain independently inspectable.")}`},"results-upspa-tspa":{navLabel:"UpSPA / TSPA performance",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · Client-side measurements",title:"Update support adds protocol work while client costs remain practical",body:`<div class="dual-charts fixed-nsp-charts"><article>${ie({labels:Ce,series:Ot,yMax:.65,yLabel:"Client time (ms)",xLabel:"Threshold tₛₚ",title:"Registration and authentication",width:700,height:400,showLegend:!1})}${_t(Ot,2)}</article><article>${ie({labels:Ce,series:jt,yMax:1,yLabel:"Client time (ms)",xLabel:"Threshold tₛₚ",title:"Setup and update phases",width:700,height:400,showLegend:!1})}${_t(jt,2)}</article></div>${we("At fixed nₛₚ = 30, measured client-side work grows with the threshold; updateability remains below 1 ms across the retained grid.")}`},"backup-upspa-tspa-charts":{navLabel:"Fixed nₛₚ = 30 LAN charts",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Aux · Evaluation · LAN",title:"LAN latency grows with tₛₚ at fixed nₛₚ = 30",body:`<div class="dual-charts fixed-nsp-charts"><article>${ie({labels:Ce,series:pa,yMax:2.5,yLabel:"LAN p50 (ms)",xLabel:"Threshold tₛₚ",title:"Registration and authentication",width:700,height:400,showLegend:!1})}${_t(pa,2,!0)}</article><article>${ie({labels:Ce,series:ua,yMax:2.5,yLabel:"LAN p50 (ms)",xLabel:"Threshold tₛₚ",title:"Setup and update phases",width:700,height:400,showLegend:!1})}${_t(ua,2)}</article></div>${we("These LAN medians are separate from the client-only measurements on the main slide.")}`},"results-threshold-sso-comparison":{navLabel:"Comparison boundary",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · Interpretation boundary",title:"UpSPA, PAS-TA-U, and AugSSO answer different system questions",body:'<div class="comparison-boundary"><article><h3>UpSPA</h3><b>SPA lifecycle</b><p>Independent service verifier, secret rotation, and master-password update.</p><small>Rust prototype · SPA trust model</small></article><article><h3>PAS-TA-U</h3><b>Threshold authentication</b><p>Password update inside a token/identity-provider authentication setting.</p><small>Different semantics and trusted roles</small><a class="comparison-detail-link" href="#/aux-pastau-threshold-token-generation">PAS-TA-U protocols →</a></article><article><h3>AugSSO</h3><b>Threshold SSO</b><p>Popular-password collection and key renewal in a single-sign-on setting.</p><small>Different functionality and environment</small><a class="comparison-detail-link" href="#/aux-augsso-registration">AugSSO protocols →</a></article></div><div class="boundary-callout">The benchmark is informative about measured executable cost - it is not a one-to-one replacement claim.</div>'},"results-upspa-roupspa":{navLabel:"Coordination stages",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · Coordination semantics",title:"RoUpSPA adds coordination only where state changes",body:`<table class="coordination-table"><thead><tr><th>Phase</th><th>Protocol coordination</th><th>LS interaction?</th><th>\\(q_{sp}\\) write?</th><th>Store / Discard implemented in prototype?</th></tr></thead><tbody><tr><td>Authentication</td><td>Read ACTIVE replicas</td><td>Yes · ordinary verify</td><td>No</td><td>N/A</td></tr><tr><td>Registration</td><td>Prepare + quorum durability</td><td>Yes</td><td>Yes</td><td><strong class="not-implemented">No · not implemented</strong></td></tr><tr><td>Secret update</td><td>Prepare + quorum durability</td><td>Yes</td><td>Yes</td><td><strong class="not-implemented">No · not implemented</strong></td></tr><tr><td>Password update</td><td>Signed versioned identification record</td><td>No</td><td>Yes</td><td><strong class="not-implemented">No · not implemented</strong></td></tr></tbody></table>${we("The protocol defines terminal handling; the measured prototype models its control-flow stage but does not execute database-backed Store / Discard handlers.")}`},"results-upspa-roupspa-charts":{navLabel:"UpSPA / RoUpSPA charts",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · Resilience cost",title:"RoUpSPA adds measurable resilience cost while practical configurations remain visible",body:`<div class="triple-mini-charts">${Nt("registration","Registration")}${Nt("secret","Secret update")}${Nt("password","Password update")}</div><div class="chart-callout">Low-threshold configurations remain deployable.</div>`},"results-backends":{navLabel:"Backend endpoints",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · nₛₚ = 100",title:"Backend cost depends strongly on phase at nₛₚ = 100",body:`${qr()}<p class="chart-note">Complete local p50 · milliseconds · \\(q_{sp}=\\lceil 0.8n_{sp}\\rceil\\)</p>${we("Endpoint choice changes the cost profile, especially for synchronized update phases.")}`},"results-backend-scaling":{navLabel:"Backend scaling",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · Resilient storage backends",title:"Password-update scaling depends on the synchronization backend",body:`<div class="wide-chart">${ie({labels:sn,series:nn,yMax:32,yLabel:"Complete local p50 (ms)",xLabel:"nₛₚ",title:"Password-update endpoint scaling",width:1380,height:540})}</div>${we("The quorum path diverges most at scale; append-only and chain-backed paths have different operational trade-offs.")}`},"results-evm-gas":{navLabel:"EVM gas & batching",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · Receipt-level EVM evidence",title:"Batching cuts per-record publication cost by 16×",body:`${Od()}`},"results-key-takeaways":{navLabel:"Engineering conclusions",sectionKey:"results",sectionLabel:"Implementation & results",kicker:"Evaluation · Synthesis",title:"Three engineering conclusions survive every evidence boundary",body:'<div class="engineering-conclusions"><article><b>01</b><h3>Coordination dominates</h3><p>Core cryptographic operations are small compared with network and deployment coordination.</p></article><article><b>02</b><h3>Update scopes stay clean</h3><p>UpSPA separates one-service secret rotation from master-password replacement.</p></article><article><b>03</b><h3>Resilience has a visible price</h3><p>RoUpSPA trades added coordination for partial availability and stale-replica repair.</p></article></div>'},"conclusion-contributions":{navLabel:"Contributions",sectionKey:"conclusion",sectionLabel:"Conclusions",kicker:"Contributions",title:"The thesis moves SPA from authentication-only to an updateable, resilient lifecycle",body:'<div class="contribution-blocks"><article><b>01 · UpSPA</b><h3>Update-enabled threshold SPA</h3><p>Native secret rotation and master-password replacement without rebuilding every account.</p></article><article><b>02 · RoUpSPA</b><h3>Quorum-based robust lifecycle</h3><p>Versioned signed records, durable completion, and stale-replica repair.</p></article><article><b>03 · Evidence</b><h3>Prototype and evaluation</h3><p>Executable comparisons, backend trade-offs, and receipt-level gas measurements.</p></article></div>'},"conclusion-limitations-future":{navLabel:"Future work",sectionKey:"conclusion",sectionLabel:"Conclusions",kicker:"Future work",title:"The next step is deployment robustness under stronger adversaries",body:'<div class="future-grid"><article><b>Asynchronous completion</b><p>Stronger fault-tolerant completion and recovery models.</p></article><article><b>Endpoint recovery</b><p>Compromise detection, credential recovery, and trusted-client hardening.</p></article><article><b>Deployment study</b><p>Broader multi-region measurements and user studies.</p></article><article><b>Mobile / browser</b><p>Hardened extensions, secure storage, and platform integration.</p></article><article><b>Post-quantum path</b><p>Evaluate practical post-quantum or hybrid primitives where relevant.</p></article></div>'},"conclusion-publications":{navLabel:"Publications",sectionKey:"conclusion",sectionLabel:"Conclusions",kicker:"Research outputs",title:"The work is represented by public and submitted manuscripts",body:'<div class="publication-list cleaned"><article class="publication"><span class="pub-num">1</span><div><strong>Secure and Updatable Single Password Authentication</strong><span>Devriş İşler · Reza Saadi · Alptekin Küpçü</span></div><em>ePrint 2026/784<br>WPES submitted</em></article><article class="publication"><span class="pub-num">2</span><div><strong>RoUpSPA: Robust Updatable Single Password Authentication</strong><span>Reza Saadi · Devriş İşler · Alptekin Küpçü</span></div><em>ACM TOPS<br>will be submitted</em></article><article class="publication"><span class="pub-num">3</span><div><strong>Secure Single Password Authentication Protocols in Distributed Systems</strong><span>Reza Saadi · MSc thesis</span></div><em>Koç University<br>2026</em></article></div>'},"thank-you":{navLabel:"Questions",sectionKey:"questions",sectionLabel:"Q&A",layout:"raw",body:'<div class="slide-shell closing-stage"><p>Secure Single Password Authentication Protocols in Distributed Systems</p><h2>Thank you</h2><strong>Questions?</strong><span>Reza Saadi · Koç University</span></div>'},"backup-spa-paper-figure":{navLabel:"SPA paper figure",sectionKey:"lineage",sectionLabel:"SPA lineage",kicker:"Aux · SPA source figure",title:"Original SPA registration and authentication figure",body:`${se("assets/spa-paper-figure.png","SPA registration and authentication source figure","")}`},"aux-tspa-registration":{navLabel:"TSPA registration source figure",sectionKey:"lineage",sectionLabel:"SPA lineage",kicker:"Aux · TSPA source figure",title:"TSPA Registration",body:`${se("assets/tspa-registration-figure.png","TSPA registration source figure","")}`},"aux-tspa-authentication":{navLabel:"TSPA authentication source figure",sectionKey:"lineage",sectionLabel:"SPA lineage",kicker:"Aux · TSPA source figure",title:"TSPA Authentication",body:`${se("assets/tspa-authentication-figure.png","TSPA authentication source figure","")}`},"backup-upspa-registration-full":{navLabel:"Full registration figure",kicker:"Aux · UpSPA source figure",title:"UpSPA Registration — Full protocol",body:`${se("assets/upspa-registration-source.png","UpSPA registration protocol source figure","")}`},"backup-upspa-authentication-full":{navLabel:"Full authentication figure",kicker:"Aux · UpSPA source figure",title:"UpSPA Authentication — Full protocol",body:`${se("assets/upspa-authentication-source.png","UpSPA authentication protocol source figure","")}`},"backup-upspa-secret-update-full":{navLabel:"Full secret-update figure",kicker:"Aux · UpSPA source figure",title:"UpSPA Secret Update — Full protocol",body:`${se("assets/upspa-secret-update-source.png","UpSPA secret-update protocol source figure","")}`},"backup-upspa-password-update-full":{navLabel:"Full password-update figure",kicker:"Aux · UpSPA source figure",title:"UpSPA Password Update — Full protocol",body:`${se("assets/upspa-password-update-source.png","UpSPA password-update protocol source figure","")}`},"backup-roupspa-setup-full":{navLabel:"Full setup figure",kicker:"Aux · RoUpSPA source figure",title:"RoUpSPA Setup — Full protocol",body:`${se("assets/roupspa-setup-source.png","RoUpSPA setup protocol source figure","")}`},"backup-roupspa-registration-full":{navLabel:"Full registration figure",kicker:"Aux · RoUpSPA source figure",title:"RoUpSPA registration - full protocol figure",body:`${se("assets/roupspa-registration-updated.png","RoUpSPA registration protocol source figure","")}`},"backup-roupspa-synchronization-full":{navLabel:"Full synchronization figure",kicker:"Aux · RoUpSPA recovery",title:"RoUpSPA synchronization and quorum recovery",body:`${se("assets/roupspa-quorum-recovery.png","RoUpSPA quorum recovery figure","")}`},"backup-roupspa-secret-update-full":{navLabel:"Full secret-update figure",kicker:"Aux · RoUpSPA source figure",title:"RoUpSPA secret update - full protocol figure",body:`${se("assets/roupspa-secretupdate-updated.png","RoUpSPA secret-update protocol source figure","")}`},"backup-roupspa-password-update-full":{navLabel:"Full password-update figure",kicker:"Aux · RoUpSPA source figure",title:"RoUpSPA password update - full protocol figure",body:`${se("assets/roupspa-passwordupdate-updated.png","RoUpSPA password-update protocol source figure","")}`}};for(const[n,e]of Object.entries(jd))Mt[n]={...e,...Mt[n]||{}};Object.assign(Mt,{"lineage-spa":{navLabel:"SPA interaction diagram",sectionKey:"lineage",sectionLabel:"SPA lineage",kicker:"SPA",title:"SPA registration and authentication",sourceRefs:["presentation/SPA diagram.png"],body:se("assets/spa-main-diagram.png","SPA registration and authentication interaction diagram","")},"lineage-tspa":{navLabel:"TSPA interaction diagram",sectionKey:"lineage",sectionLabel:"SPA lineage",kicker:"TSPA",title:"TSPA registration and authentication",sourceRefs:["presentation/TSPA diagram.png"],body:se("assets/tspa-main-diagram.png","TSPA registration and authentication interaction diagram with OPRF-based protection and threshold recovery","")},"upspa-security-theorem":{navLabel:"UpSPA theorem",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Security theorem",title:"Security follows from the stated primitive and corruption assumptions",sourceRefs:["presentation/Theorem.png"],body:Be("assets/upspa-theorem-user.png","Theorem 4.3.1, Security of UpSPA","")},"alternatives-pbb-visual":{navLabel:"PBB alternatives",sectionKey:"alternatives",sectionLabel:"Synchronization alternatives",kicker:"Public bulletin board",title:"DKG changes who may append to the bulletin board",sourceRefs:["presentation/output.png"],body:Be("assets/pbb-alternatives.png","Public bulletin board with and without distributed key generation","")},"roupspa-quorum-recovery":{navLabel:"Quorum recovery",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Quorum recovery",title:"Recovery begins with five synchronized and two stale providers",body:`<div class="recovery-animation recovery-base">${Xe({index:0,title:"Base case · seven providers, two missed the committed state",states:["active","active","active","active","active","stale","stale"],detail:"<b>SP1–SP5</b> are ACTIVE and synchronized. <b>SP6</b> and <b>SP7</b> are offline or stale."})}</div>`},"roupspa-recovery-stage-1":{navLabel:"Recovery stage 1",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Recovery stage 1",title:"Stage 1 · A completed write leaves SP6 and SP7 stale",body:`<div class="recovery-animation recovery-single">${Xe({index:0,title:"SP1–SP5 hold the latest committed record",states:["active","active","active","active","active","stale","stale"],detail:"A write completed through a valid quorum. SP6 and SP7 missed that committed update."})}</div>`},"roupspa-recovery-stage-2":{navLabel:"SP6 recovery",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · SP6 recovery",title:"SP6 repairs from R₆ = {SP1, SP2, SP3, SP4, SP5}",sourceRefs:["presentation/ChatGPT Image Aug 11, 2026, 01_39_28 PM.png"],body:se("assets/roupspa-recovery-stage1.png","SP6 recovery from the five synchronized storage providers","")},"roupspa-recovery-stage-3":{navLabel:"Recovery stage 3",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Recovery stage 3",title:"Stage 3 · SP7 may recover through repaired SP6",body:`<div class="recovery-animation recovery-single">${Xe({index:2,title:"SP7 verifies a recovery quorum that may include SP6",states:["active","active","active","active","active","active","recovering"],detail:String.raw`SP7 queries a valid \(q_{sp}\)-provider quorum, verifies signatures, and selects the valid record with the largest counter.`})}</div>`},"roupspa-recovery-stage-4":{navLabel:"Recovery stage 4",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Recovery stage 4",title:"Stage 4 · All seven providers are synchronized",body:`<div class="recovery-animation recovery-single">${Xe({index:3,title:"Every provider now holds the freshest valid record",states:["active","active","active","active","active","active","active"],detail:"Recovery copies only the freshest valid signed ciphertext. It does not expose the password or plaintext."})}</div>`},"problem-password-manager":{navLabel:"Password managers",sectionKey:"problem",sectionLabel:"Problem",kicker:"The password problem",title:"Password managers protect many credentials with one master secret",body:`<div class="manager-redesign"><div class="vault-flow"><article>${It("key","Master secret")}<strong>Master secret</strong></article><i>→</i><article>${It("vault","Encrypted vault")}<strong>Encrypted vault</strong></article><i>→</i><div class="vault-sites protected-sites"><span>Email</span><span>Banking</span><span>Shopping</span><span>Cloud</span><span>Developer</span></div></div><div class="vault-options"><article><h3>Local vault</h3><div><b>+</b><span>Credentials stay on one device.</span></div><div><b>−</b><span>Backup and migration need a plan, especially after device loss.</span></div></article><article><h3>Cloud vault</h3><div><b>+</b><span>Encrypted state is available across devices.</span></div><div><b>−</b><span>Cloud availability and metadata enter the trust boundary.</span></div></article></div></div>`},"upspa-primitives":{navLabel:"Cryptographic primitives",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Building blocks",title:"Cryptographic primitives used by UpSPA",body:String.raw`<div class="primitive-grid"><article><b>TOPRF</b><p>\((K,\{k_i\})\leftarrow TOPRFKeyGen(1^\lambda,n_{sp},t_{sp})\)</p><strong>User: \(pwd\) · <span class="toprf-provider">\(SP_i\)</span>: \(k_i\) · User output: \(F_K(pwd)\)</strong></article><article><b>Authenticated encryption</b><p>\(K_0\leftarrow KeyGen(1^\lambda)\) <span class="operation-separator">/</span> \(c\leftarrow Enc_{K_0}(p)\)</p><strong>\(p'\leftarrow Dec_{K_0}(c)\) · \(p'\in\{p,\bot\}\)</strong></article><article><b>Digital signatures</b><p>\((ssk,svk)\leftarrow SignKeyGen(1^\lambda)\) <span class="operation-separator">/</span> \(\sigma\leftarrow Sign_{ssk}(m)\)</p><strong>\(Verify_{svk}(m,\sigma)\in\{0,1\}\)</strong></article><article><b>Hash function</b><p>\(H:\{0,1\}^{*}\rightarrow\{0,1\}^{\lambda}\)</p><strong>Bind identifiers and domains</strong></article></div>`},"aux-upspa-ideal-functionality":{navLabel:"Ideal functionality · part 1",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Ideal functionality",title:"Ideal functionality · Setup and Registration",sourceRefs:["../../Downloads/Telegram Desktop/functionality 1.jpg"],body:se("assets/upspa-functionality-1.jpg","UpSPA ideal functionality, setup and registration","")},"upspa-ideal-functionality-continuation":{navLabel:"Ideal functionality · part 2",sectionKey:"upspa",sectionLabel:"UpSPA",kicker:"UpSPA · Ideal functionality",title:"Ideal functionality · Authentication and Updates",sourceRefs:["../../Downloads/Telegram Desktop/functionality 2.jpg"],body:se("assets/upspa-functionality-2.jpg","UpSPA ideal functionality, authentication, secret update, and password update","")},"roupspa-threshold-quorum":{navLabel:"Threshold vs quorum",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Parameters",title:String.raw`\(t_{sp}\) and \(q_{sp}\) have different jobs`,body:String.raw`<div class="thresholds"><article class="threshold crypto"><span class="symbol">\(t_{sp}\)</span><h3>Cryptographic threshold</h3><p>Enough valid TOPRF or read responses; also bounds provider corruption.</p></article><article class="threshold quorum"><span class="symbol">\(q_{sp}\)</span><h3>Storage quorum</h3><p>Enough durable writes or synchronization responses.</p></article></div><div class="equation-box center">\[2q_{sp}-n_{sp}>t_{sp}-1\]</div>`},"roupspa-quorum-intersection":{navLabel:"General quorum condition",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Quorum condition",title:"Why the quorum intersection must contain honest evidence",sourceRefs:["presentation/quorum.png"],body:se("assets/roupspa-general-quorum.png","General quorum intersection and combinatorial condition","")},"roupspa-recovery-overview":{navLabel:"Recovery overview",sectionKey:"roupspa",sectionLabel:"RoUpSPA",kicker:"RoUpSPA · Quorum recovery",title:"Dissemination and recovery return every provider to synchronized state",sourceRefs:["quorum (1).png"],body:se("assets/roupspa-quorum-recovery.png","RoUpSPA dissemination and multi-stage quorum recovery overview","")}});const fa=en.parse(Ol),va=en.parse(jl),ba=en.parse(Fl),ya=en.parse(Ml),wa=ba.slides||ba,Fd=fa.slides||fa,Md=new Map(Fd.map(n=>[n.id,n]));function Mn(n){return typeof n=="string"?n.replace(/^\s*(?:BACKUP|Backup|AUX|Aux)\s*(?:[·—:\-]\s*)?/,""):Array.isArray(n)?n.map(Mn):n&&typeof n=="object"?Object.fromEntries(Object.entries(n).map(([e,t])=>[e,Mn(t)])):n}const an=(va.slides||va).map(n=>{const e=n.sourceId||n.id,t=Md.get(e);if(!t)throw new Error(`Unknown sourceId in web route: ${e}`);const s=Mt[n.id]||wa[n.id]||wa[e],i=s?{...t,...n,...s,content:s,title:s.title||n.title||t.title}:{...t,...n};return i.route==="core"?(delete i.originId,delete i.returnTarget):n.originId&&(i.returnTarget=n.originId),Mn(i)}),Kd=new Map(an.map(n=>[n.id,n])),Or={title:["Title","#0b8f8c"],problem:["Problem","#b84d4d"],lineage:["SPA lineage","#68788a"],upspa:["UpSPA","#0b8f8c"],roupspa:["RoUpSPA","#7b61a8"],alternatives:["Synchronization alternatives","#d17722"],results:["Implementation & results","#164a7b"],conclusion:["Conclusions","#3f7b5a"],genealogy:["Genealogy","#68788a"],questions:["Q&A","#0b8f8c"]};function Re(n=""){return String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Vt(n){if(n.sectionKey)return n.sectionKey;if(n.route==="backup"){const t=Kd.get(n.originId||n.returnTarget);if(t)return Vt(t)}return{title:"title","password-problem":"problem","spa-lineage":"lineage",upspa:"upspa",roupspa:"roupspa",alternatives:"alternatives","implementation-results":"results",conclusion:n.id==="academic-genealogy"?"genealogy":n.id==="thank-you"?"questions":"conclusion"}[n.section]||"conclusion"}function li(n){return n.sectionLabel||Or[Vt(n)]?.[0]||n.section}function ci(n){return Or[Vt(n)]?.[1]||"#164a7b"}function Bd(n){const e=n.speakerNotes||{},t=e.cues||[],s=n.sourceRefs||[];return`<aside class="notes">
Estimated time: ${n.estimatedSeconds||0} seconds

Main point: ${Re(e.main||n.title)}

${t.map(i=>`- ${Re(i)}`).join(`
`)}

Transition: ${Re(e.transition||"")}

Skip option: ${Re(e.skip||"Do not skip.")}

Possible jury question: ${Re(e.jury||"—")}

Answer pointer: ${Re(e.pointer||"—")}

[Sources]
${s.map(i=>`- ${Re(i)}`).join(`
`)}
  </aside>`}function Un(n){const e=Vt(n),t=document.createElement("section");t.id=n.id,t.dataset.route=n.route,t.dataset.sectionGroup=e,t.dataset.sectionLabel=li(n),t.dataset.estimatedSeconds=n.estimatedSeconds||0,t.dataset.originId=n.originId||n.returnTarget||"",t.classList.add(`${e}-slide`),n.route==="backup"&&t.classList.add("backup-slide"),t.style.setProperty("--section-color",ci(n));const s=n.content?Td(n,ya):n.route==="backup"?Rd(n.id,n):Oc(n.id,n,ya),i='<div class="global-logo-strip" aria-label="Affiliations"><img src="assets/koc-logo.png" alt="Koç University"><img src="assets/ku-crypto.png" alt="Koç University Cryptography, Security, and Privacy Research Group"></div>';if(t.innerHTML=`${s}${i}${Bd(n)}`,t.querySelectorAll(".return-link").forEach(a=>a.remove()),n.route==="backup"){const a=t.querySelector("h2");a&&(a.innerHTML=a.innerHTML.trim().replace(/^\s*(?:BACKUP|Backup|AUX|Aux)\s*(?:[·—:\-]\s*)?/i,"")),t.querySelectorAll(".section-kicker").forEach(r=>{const o=(r.textContent||"").replace(/^\s*(?:BACKUP|Backup|AUX|Aux)\s*(?:[·—:\-]\s*)?/i,"").replace(/\b(?:AUX|BACKUP)\b/gi,"").trim();o?r.textContent=o:r.remove()})}return t}const ds=an.filter(n=>n.route==="core"),Dd=new Set(ds.map(n=>n.id)),di=new Map(ds.map(n=>[n.id,[]])),Kn=[];for(const n of an.filter(e=>e.route==="backup")){const e=n.originId||n.returnTarget;!e||!Dd.has(e)?Kn.push(n):di.get(e).push(n)}function zd(){if(Kn.length)throw new Error(`Aux slides need a valid main originId/returnTarget: ${Kn.map(e=>e.id).join(", ")}`);const n=document.getElementById("slides");for(const e of ds){const t=di.get(e.id)||[];if(!t.length){n.append(Un(e));continue}const s=document.createElement("section");s.className="stack",s.dataset.sectionGroup=Vt(e),s.dataset.sectionLabel=li(e),s.style.setProperty("--section-color",ci(e));const i=Un(e);i.classList.add("has-backups"),s.append(i),t.forEach(a=>s.append(Un(a))),n.append(s)}}function Hd(){const n=[...document.querySelectorAll("#slides section[id]")],e=n.length;n.forEach((t,s)=>{const i=document.createElement("div");i.className="physical-page-number",i.setAttribute("aria-label",`Slide ${s+1} of ${e}`),i.textContent=`${s+1} / ${e}`,t.append(i)})}function jr(){const n=[];for(const e of ds){const t=Vt(e);let s=n.find(i=>i.key===t);s||(s={key:t,label:li(e),color:ci(e),slides:[]},n.push(s)),s.slides.push(e)}return n}function Wd(){const n=document.getElementById("roadmap"),e=jr();n.style.gridTemplateColumns=`repeat(${e.length}, minmax(0,1fr))`;const t=s=>({alternatives:"Sync",results:"Results"})[s.key]||s.label;n.innerHTML=e.map(s=>`<a href="#/${s.slides[0].id}" data-group="${s.key}" style="--roadmap-color:${s.color}">${Re(t(s))}</a>`).join("")}function Vd(){const n=jr(),e=document.createElement("nav");e.className="waterfall-nav",e.setAttribute("aria-label","Slide navigator");const t=(r="")=>String(r).replace(/^\s*(?:BACKUP|AUX)\s*(?:[·—:\-]\s*)?/i,"");e.innerHTML=`<button class="waterfall-trigger" type="button" aria-expanded="false" aria-controls="waterfall-panel"><span>Deck map</span><i aria-hidden="true">⌄</i></button><div class="waterfall-panel" id="waterfall-panel">${n.map(r=>`<section class="waterfall-section" data-group="${r.key}" style="--section-color:${r.color}"><a class="waterfall-section-link" href="#/${r.slides[0].id}">${Re(r.label)}</a><div>${r.slides.map(o=>{const l=di.get(o.id)||[];return`<div class="waterfall-branch"><a class="waterfall-core" data-slide-id="${o.id}" href="#/${o.id}">${Re(o.navLabel||o.title)}</a>${l.length?`<div class="waterfall-details">${l.map((c,h)=>`<span class="waterfall-detail" data-slide-id="${c.id}" data-parent-id="${o.id}">${h+1}. ${Re(t(c.navLabel||c.title))}</span>`).join("")}</div>`:""}</div>`}).join("")}</div></section>`).join("")}</div>`,document.body.append(e);const s=e.querySelector(".waterfall-trigger"),i=e.querySelector(".waterfall-panel");i.inert=!0;const a=(r=!1)=>{e.classList.remove("open"),s.setAttribute("aria-expanded","false"),i.inert=!0,r&&s.focus()};s.addEventListener("click",()=>{const r=e.classList.toggle("open");s.setAttribute("aria-expanded",String(r)),i.inert=!r}),e.querySelectorAll("a").forEach(r=>r.addEventListener("click",()=>a(!1))),document.addEventListener("keydown",r=>{r.key==="Escape"&&e.classList.contains("open")&&(r.preventDefault(),r.stopImmediatePropagation(),a(!0))}),document.addEventListener("pointerdown",r=>{e.contains(r.target)||a()})}function Gd(n){if(!n)return;const e=n.dataset.sectionGroup||n.parentElement?.dataset.sectionGroup||"",t=n.id,s=n.dataset.originId||t;document.querySelectorAll("#roadmap a").forEach(a=>a.classList.toggle("active",a.dataset.group===e)),document.querySelectorAll(".waterfall-section").forEach(a=>a.classList.toggle("active",a.dataset.group===e)),document.querySelectorAll(".waterfall-core").forEach(a=>{const r=a.dataset.slideId===s;a.classList.toggle("active",r),r?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current")}),document.querySelectorAll(".waterfall-detail").forEach(a=>a.classList.toggle("active",a.dataset.slideId===t)),document.querySelector(`.waterfall-nav [data-slide-id="${CSS.escape(t)}"]`)?.scrollIntoView({block:"nearest"}),document.body.dataset.currentSection=e}zd();Hd();Wd();Vd();const Sa=ds.reduce((n,e)=>n+Number(e.estimatedSeconds||0),0);Sa>2340&&console.warn(`Core route is ${(Sa/60).toFixed(1)} minutes; target is at most 39.0 minutes.`);const Qd=new URL("mathjax/tex-chtml.js",document.baseURI).href;let ae,St;function Fr(n){const e=ae.getHorizontalSlides()[n],t=e?.querySelectorAll(":scope > section")||[];return t.length?[...t]:[e]}function Bn(n){const{h:e=0}=ae.getIndices(),t=e+n;t>=0&&t<ae.getHorizontalSlides().length&&ae.slide(t,0)}function Oe(n){const{v:e=0}=ae.getIndices();if(e===0){const t=ae.availableFragments();if(n>0&&t.next){ae.nextFragment();return}}Bn(n)}function Tt(n){const{h:e=0,v:t=0}=ae.getIndices(),s=Fr(e),i=t+n;i>=0&&i<s.length&&ae.slide(e,i)}function Yd(){const n=document.createElement("nav");return n.className="flow-controls",n.setAttribute("aria-label","Slide flow controls"),n.innerHTML='<div class="flow-pad"><button type="button" data-flow="up" aria-label="Previous vertical slide" aria-keyshortcuts="ArrowUp K">↑</button><button type="button" data-flow="left" aria-label="Previous horizontal slide" aria-keyshortcuts="ArrowLeft H">←</button><button type="button" data-flow="down" aria-label="Next vertical slide" aria-keyshortcuts="ArrowDown J">↓</button><button type="button" data-flow="right" aria-label="Next horizontal slide" aria-keyshortcuts="ArrowRight L">→</button></div>',document.body.append(n),n.querySelector('[data-flow="left"]').addEventListener("click",()=>Bn(-1)),n.querySelector('[data-flow="right"]').addEventListener("click",()=>Bn(1)),n.querySelector('[data-flow="up"]').addEventListener("click",()=>Tt(-1)),n.querySelector('[data-flow="down"]').addEventListener("click",()=>Tt(1)),n}function Jd(){if(!St)return;const{h:n=0,v:e=0}=ae.getIndices(),t=Fr(n);St.querySelector('[data-flow="left"]').disabled=n===0,St.querySelector('[data-flow="right"]').disabled=n>=ae.getHorizontalSlides().length-1,St.querySelector('[data-flow="up"]').disabled=e===0,St.querySelector('[data-flow="down"]').disabled=e>=t.length-1}St=Yd();ae=new Ve({width:1600,height:900,margin:0,minScale:.2,maxScale:2,hash:!0,history:!0,center:!1,controls:!1,controlsTutorial:!1,progress:!0,slideNumber:!1,transition:"fade",transitionSpeed:"fast",backgroundTransition:"fade",navigationMode:"default",touch:!1,keyboard:{37:()=>Oe(-1),39:()=>Oe(1),38:()=>Tt(-1),40:()=>Tt(1),72:()=>Oe(-1),76:()=>Oe(1),75:()=>Tt(-1),74:()=>Tt(1),33:()=>Oe(-1),34:()=>Oe(1),78:()=>Oe(1),80:()=>Oe(-1),32:n=>Oe(n?.shiftKey?-1:1)},pdfSeparateFragments:!1,plugins:[xo,Ro,To.MathJax3],mathjax3:{mathjax:Qd,tex:{inlineMath:[["\\(","\\)"]],displayMath:[["\\[","\\]"]],macros:Kl},options:{skipHtmlTags:["script","noscript","style","textarea","pre"]}}});window.Reveal=ae;window.__DECK_META__=an;const rn=n=>{Gd(n.currentSlide||ae.getCurrentSlide()),Jd()};ae.on("ready",rn);ae.on("slidechanged",rn);ae.on("fragmentshown",rn);ae.on("fragmenthidden",rn);ae.initialize();
//# sourceMappingURL=index-B-7kHjBD.js.map

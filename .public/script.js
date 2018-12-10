(function () {
  var css = "html,body{margin:0;background:#000}.fit{position:absolute;top:0;left:0;right:0;bottom:0}.media-fill{position:absolute;top:0;left:0;width:100%;height:100%}preso-presentation{position:absolute;top:0;left:0;right:0;bottom:0}preso-slide{background:linear-gradient(to bottom, #C33764, #1d2671);background-color:#000;perspective:1000px;--dimmer: rgba(0,0,0,0.0)}.sunny{background-image:linear-gradient(to top, var(--dimmer), var(--dimmer)),linear-gradient(to bottom, #22c1c3, #fdbb2d)}.ocean{background-image:linear-gradient(to top, var(--dimmer), var(--dimmer)),linear-gradient(to bottom, #000046, #1CB5E0)}.day{background-image:linear-gradient(to top, var(--dimmer), var(--dimmer)),linear-gradient(to bottom, #36d1dc, #5b86e5)}.swamp{background-image:linear-gradient(to top, var(--dimmer), var(--dimmer)),linear-gradient(to top, #43c6ac, #191654)}.dawn{background-image:linear-gradient(to top, var(--dimmer), var(--dimmer)),linear-gradient(to top, #3B4371, #F3904F)}.love{background-image:linear-gradient(to top, var(--dimmer), var(--dimmer)),linear-gradient(to top, #89253e, #3a6186)}.white{background-image:linear-gradient(to top, var(--dimmer), var(--dimmer)),#fff}.nyan{background:#0f4d8f}.blueprint{background-image:linear-gradient(to top, var(--dimmer), var(--dimmer)),url(\"imgs/graph-tile.png\"),radial-gradient(circle, #08d, #002b46)}.code-outer{background:rgba(0,0,0,.75);font-size:38px;border:1px solid transparent;margin:44px 0;border-width:55px 100px;border-right-width:0;line-height:1.5;position:relative}.vertically-center{display:flex;flex-flow:column;justify-content:center}.vertically-center-this{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);margin:0}.center{position:absolute;top:50%;left:50%;transform:translate(-50%);margin:0}.code-massive{font-size:60px}.code-medium{font-size:50px}.next-btn{position:absolute;right:0;width:20%;top:0;bottom:0}.prev-btn{position:absolute;left:0;width:20%;top:0;bottom:0}preso-presentation{-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-tap-highlight-color:transparent}";

  /*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){var t=document.defaultView,r=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,l="ownerSVGElement",c="http://www.w3.org/2000/svg",s="connected",f="dis"+s,d=/^style|textarea$/i,b="_hyper: "+(Math.random()*new Date|0)+";",h="\x3c!--"+b+"--\x3e",v=t.Event;try{new v("Event");}catch(e){v=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t};}var n,i=t.Map||function(){var n=[],r=[];return {get:function(e){return r[n.indexOf(e)]},set:function(e,t){r[n.push(e)-1]=t;}}},o=0,p=t.WeakMap||function(){var n=b+o++;return {get:function(e){return e[n]},set:function(e,t){Object.defineProperty(e,n,{configurable:!0,value:t});}}},a=t.WeakSet||function(){var t=new p;return {add:function(e){t.set(e,!0);},has:function(e){return !0===t.get(e)}}},m=Array.isArray||(n={}.toString,function(e){return "[object Array]"===n.call(e)}),g=b.trim||function(){return this.replace(/^\s+|\s+$/g,"")};function w(){return this}var u=function(e,t){var n="_"+e+"$";return {get:function(){return this[n]||(this[e]=t.call(this,e))},set:function(e){Object.defineProperty(this,n,{configurable:!0,value:e});}}},y={},N=[],x=y.hasOwnProperty,E=0,C=function(e,t){e in y||(E=N.push(e)),y[e]=t;},j=function(e,t){for(var n=0;n<E;n++){var r=N[n];if(x.call(e,r))return y[r](e[r],t)}},A=function(e,t){return T(e).createElement(t)},T=function(e){return e.ownerDocument||e},S=function(e){return T(e).createDocumentFragment()},L=function(e,t){return T(e).createTextNode(t)},O=" \\f\\n\\r\\t",k="[^ "+O+"\\/>\"'=]+",M="[ "+O+"]+"+k,D="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",$="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+k+"))?)",P=new RegExp(D+M+$+"+)([ "+O+"]*/?>)","g"),B=new RegExp(D+M+$+"*)([ "+O+"]*/>)","g"),R=S(document),H="append"in R,_="content"in A(document,"template");R.appendChild(L(R,"g")),R.appendChild(L(R,""));var z=1===R.cloneNode(!0).childNodes.length,F="importNode"in document,Z=H?function(e,t){e.append.apply(e,t);}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r]);},I=new RegExp("("+M+"=)(['\"]?)"+h+"\\2","gi"),V=function(e,t,n,r){return "<"+t+n.replace(I,W)+r},W=function(e,t,n){return t+(n||'"')+b+(n||'"')},q=function(e,t){return (l in e?Y:X)(e,t.replace(P,V))},G=z?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(G(n[i]));return t}:function(e){return e.cloneNode(!0)},J=F?function(e,t){return e.importNode(t,!0)}:function(e,t){return G(t)},K=[].slice,Q=function(e){return U(e)},U=function(e){if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((t.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var n={};U=function(e){var t="^"+e.join("^");return n[t]||(n[t]=e)};}else U=function(e){return e};return U(e)},X=_?function(e,t){var n=A(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=A(e,"template"),r=S(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",Z(r,K.call(n.querySelectorAll(i)));}else n.innerHTML=t,Z(r,K.call(n.childNodes));return r},Y=_?function(e,t){var n=S(e),r=T(e).createElementNS(c,"svg");return r.innerHTML=t,Z(n,K.call(r.childNodes)),n}:function(e,t){var n=S(e),r=A(e,"div");return r.innerHTML='<svg xmlns="'+c+'">'+t+"</svg>",Z(n,K.call(r.firstChild.childNodes)),n};function ee(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1];}ee.prototype.insert=function(){var e=S(this.first);return Z(e,this.childNodes),e},ee.prototype.remove=function(){var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=T(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents();}return e};var te=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n));},ne=function(e,t,n){return {type:e,name:n,node:t,path:function(e){var t=[],n=void 0;switch(e.nodeType){case 1:case 11:n=e;break;case 8:n=e.parentNode,te(t,n,e);break;default:n=e.ownerElement;}for(e=n;n=n.parentNode;e=n)te(t,n,e);return t}(t)}},re=function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e},ie=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,oe=function(o,a){var u=void 0,l=void 0;return function(e){switch(typeof e){case"object":if(e){if("object"===u){if(!a&&l!==e)for(var t in l)t in e||(o[t]="");}else a?o.value="":o.cssText="";var n=a?{}:o;for(var r in e){var i=e[r];n[r]="number"!=typeof i||ie.test(r)?i:i+"px";}u="object",a?o.value=le(l=n):l=e;break}default:l!=e&&(u="string",l=e,a?o.value=e||"":o.cssText=e||"");}}},ae=/([^A-Z])([A-Z]+)/g,ue=function(e,t,n){return t+"-"+n.toLowerCase()},le=function(e){var t=[];for(var n in e)t.push(n.replace(ae,ue),":",e[n],";");return t.join("")},ce=function(e,t){return e==t},se=function(e){return e},fe=function(e,t,n,r){if(null==r)t.removeChild(e(n,-1));else{var i=t.ownerDocument.createRange();i.setStartBefore(e(n,-1)),i.setEndAfter(e(r,-1)),i.deleteContents();}},de=function(e,t,n,r){r||(r={});for(var i=r.compare||ce,o=r.node||se,a=null==r.before?null:o(r.before,0),u=0,l=0,c=t.length-1,s=t[0],f=t[c],d=n.length-1,h=n[0],v=n[d];u<=c&&l<=d;)if(null==s)s=t[++u];else if(null==f)f=t[--c];else if(null==h)h=n[++l];else if(null==v)v=n[--d];else if(i(s,h))s=t[++u],h=n[++l];else if(i(f,v))f=t[--c],v=n[--d];else if(i(s,v))e.insertBefore(o(s,1),o(f,-0).nextSibling),s=t[++u],v=n[--d];else if(i(f,h))e.insertBefore(o(f,1),o(s,0)),f=t[--c],h=n[++l];else{var p=t.indexOf(h);if(p<0)e.insertBefore(o(h,1),o(s,0)),h=n[++l];else{for(var m=p,g=l;m<=c&&g<=d&&t[m]===n[g];)m++,g++;if(1<m-p)--p===u?e.removeChild(o(s,-1)):fe(o,e,s,t[p]),l=g,s=t[u=m],h=n[g];else{var b=t[p];t[p]=null,e.insertBefore(o(b,1),o(s,0)),h=n[++l];}}}if(u<=c||l<=d)if(c<u){var w=n[d+1],y=null==w?a:o(w,0);if(l===d)e.insertBefore(o(n[l],1),y);else{for(var N=e.ownerDocument.createDocumentFragment();l<=d;)N.appendChild(o(n[l++],1));e.insertBefore(N,y);}}else null==t[u]&&u++,u===c?e.removeChild(o(t[u],-1)):fe(o,e,t[u],t[c]);return n},he=new a;function ve(){}ve.prototype=Object.create(null);var pe=function(e){return {html:e}},me=function e(t,n){return "ELEMENT_NODE"in t?t:t.constructor===ee?1/n<0?n?t.remove():t.last:n?t.insert():t.first:e(t.render(),n)},ge=function(e,t,n){for(var r=new ve,i=e.attributes,o=K.call(i),a=[],u=o.length,l=0;l<u;l++){var c=o[l];if(c.value===b){var s=c.name;if(!(s in r)){var f=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");r[s]=i[f]||i[f.toLowerCase()],t.push(ne("attr",r[s],f));}a.push(c);}}for(var d=a.length,h=0;h<d;h++){var v=a[h];/^id$/i.test(v.name)?e.removeAttribute(v.name):e.removeAttributeNode(a[h]);}var p=e.nodeName;if(/^script$/i.test(p)){for(var m=document.createElement(p),g=0;g<i.length;g++)m.setAttributeNode(i[g].cloneNode(!0));m.textContent=e.textContent,e.parentNode.replaceChild(m,e);}},be=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(pe).then(t):Promise.resolve(j(e,t)).then(t);},we=function(e){return null!=e&&"then"in e},ye=function(r,i){var o={node:me,before:r},a=!1,u=void 0;return function e(t){switch(typeof t){case"string":case"number":case"boolean":a?u!==t&&(u=t,i[0].textContent=t):(a=!0,u=t,i=de(r.parentNode,i,[L(r,t)],o));break;case"object":case"undefined":if(null==t){a=!1,i=de(r.parentNode,i,[],o);break}default:if(a=!1,m(u=t))if(0===t.length)i.length&&(i=de(r.parentNode,i,[],o));else switch(typeof t[0]){case"string":case"number":case"boolean":e({html:t});break;case"object":if(m(t[0])&&(t=t.concat.apply([],t)),we(t[0])){Promise.all(t).then(e);break}default:i=de(r.parentNode,i,t,o);}else"ELEMENT_NODE"in(n=t)||n instanceof ee||n instanceof w?i=de(r.parentNode,i,11===t.nodeType?K.call(t.childNodes):[t],o):we(t)?t.then(e):"placeholder"in t?be(t,e):"text"in t?e(String(t.text)):"any"in t?e(t.any):"html"in t?i=de(r.parentNode,i,K.call(q(r,[].concat(t.html).join("")).childNodes),o):e("length"in t?K.call(t):j(t,e));}var n;}},Ne=function(t,n,e){var r=l in t,i=void 0;if("style"===n)return function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),oe(r,n)}return oe(e.style,n)}(t,e,r);if(/^on/.test(n)){var o=n.slice(2);return o===s||o===f?(Ce&&(Ce=!1,function(){var i=function(e,t){for(var n=new v(t),r=e.length,i=0;i<r;i++){var o=e[i];1===o.nodeType&&a(o,n);}},a=function e(t,n){he.has(t)&&t.dispatchEvent(n);for(var r=t.children||function(e){for(var t=[],n=e.childNodes,r=n.length,i=0;i<r;i++)1===n[i].nodeType&&t.push(n[i]);return t}(t),i=r.length,o=0;o<i;o++)e(r[o],n);};try{new MutationObserver(function(e){for(var t=e.length,n=0;n<t;n++){var r=e[n];i(r.removedNodes,f),i(r.addedNodes,s);}}).observe(document,{subtree:!0,childList:!0});}catch(e){document.addEventListener("DOMNodeRemoved",function(e){i([e.target],f);},!1),document.addEventListener("DOMNodeInserted",function(e){i([e.target],s);},!1);}}()),he.add(t)):n.toLowerCase()in t&&(o=o.toLowerCase()),function(e){i!==e&&(i&&t.removeEventListener(o,i,!1),(i=e)&&t.addEventListener(o,e,!1));}}if("data"===n||!r&&n in t)return function(e){i!==e&&(i=e,t[n]!==e&&null==(t[n]=e)&&t.removeAttribute(n));};var a=!1,u=e.cloneNode(!0);return function(e){i!==e&&(i=e,u.value!==e&&(null==e?(a&&(a=!1,t.removeAttributeNode(u)),u.value=e):(u.value=e,a||(a=!0,t.setAttributeNode(u)))));}},xe=function(n){var r=void 0;return function e(t){r!==t&&("object"==typeof(r=t)&&t?we(t)?t.then(e):"placeholder"in t?be(t,e):e("text"in t?String(t.text):"any"in t?t.any:"html"in t?[].concat(t.html).join(""):"length"in t?K.call(t).join(""):j(t,e)):n.textContent=null==t?"":t);}},Ee={create:function(e,t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t[i],a=re(e,o.path);switch(o.type){case"any":n.push(ye(a,[]));break;case"attr":n.push(Ne(a,o.name,o.node));break;case"text":n.push(xe(a)),a.textContent="";}}return n},find:function e(t,n,r){for(var i=t.childNodes,o=i.length,a=0;a<o;a++){var u=i[a];switch(u.nodeType){case 1:ge(u,n,r),e(u,n,r);break;case 8:u.textContent===b&&(r.shift(),n.push(d.test(t.nodeName)?ne("text",t):ne("any",u)));break;case 3:d.test(t.nodeName)&&g.call(u.textContent)===h&&(r.shift(),n.push(ne("text",t)));}}}},Ce=!0;var je=new p,Ae=function(){try{var e=new p,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(t){return new i}}();function Te(e){var t=je.get(this);return t&&t.template===Q(e)?Se.apply(t.updates,arguments):function(e){e=Q(e);var t=Ae.get(e)||function(e){var t=[],n=e.join(h).replace(De,$e),r=q(this,n);Ee.find(r,t,e.slice());var i={fragment:r,paths:t};return Ae.set(e,i),i}.call(this,e),n=J(this.ownerDocument,t.fragment),r=Ee.create(n,t.paths);je.set(this,{template:e,updates:r}),Se.apply(r,arguments),this.textContent="",this.appendChild(n);}.apply(this,arguments),this}function Se(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t]);}var Le,Oe,ke,Me,De=B,$e=function(e,t,n){return r.test(t)?e:"<"+t+n+"></"+t+">"},Pe=new p,Be=function(n){var r=void 0,i=void 0,o=void 0,a=void 0,u=void 0;return function(e){e=Q(e);var t=a!==e;return t&&(a=e,o=S(document),i="svg"===n?document.createElementNS(c,"svg"):o,u=Te.bind(i)),u.apply(null,arguments),t&&("svg"===n&&Z(o,K.call(i.childNodes)),r=He(o)),r}},Re=function(e,t){var n=t.indexOf(":"),r=Pe.get(e),i=t;return -1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||Pe.set(e,r={}),r[i]||(r[i]=Be(t))},He=function(e){for(var t=e.childNodes,n=t.length,r=[],i=0;i<n;i++){var o=t[i];1!==o.nodeType&&0===g.call(o.textContent).length||r.push(o);}return 1===r.length?r[0]:new ee(r)},_e=C;function ze(e){return arguments.length<2?null==e?Be("html"):"string"==typeof e?ze.wire(null,e):"raw"in e?Be("html")(e):"nodeType"in e?ze.bind(e):Re(e,"html"):("raw"in e?Be("html"):ze.wire).apply(null,arguments)}return ze.Component=w,ze.bind=function(e){return Te.bind(e)},ze.define=_e,ze.diff=de,(ze.hyper=ze).wire=function(e,t){return null==e?Be(t||"html"):Re(e,t||"html")},Le=Be,Oe=new p,ke=Object.create,Me=function(e,t){var n={w:null,p:null};return t.set(e,n),n},Object.defineProperties(w,{for:{configurable:!0,value:function(e,t){return function(e,t,n,r){var i,o,a,u=t.get(e)||Me(e,t);switch(typeof r){case"object":case"function":var l=u.w||(u.w=new p);return l.get(r)||(i=l,o=r,a=new e(n),i.set(o,a),a);default:var c=u.p||(u.p=ke(null));return c[r]||(c[r]=new e(n))}}(this,Oe.get(e)||(n=e,r=new i,Oe.set(n,r),r),e,null==t?"default":t);var n,r;}}}),Object.defineProperties(w.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e);}},html:u("html",Le),svg:u("svg",Le),state:u("state",function(){return this.defaultState}),defaultState:{get:function(){return {}}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return !1!==t&&this.render(),this}}}),ze}(window);

  var css$1 = "preso-notes{background:#000;color:#fff;font:normal 38px/1.3 sans-serif}.preso-notes-view{display:flex;flex-flow:column;height:100%}.preso-notes-list{margin:0;padding:0;flex:1}.preso-notes-list__item{display:block;padding:.7em}.preso-notes-list__item:nth-child(even){background:#222}.preso-slide-list{margin:0;padding:0;flex:1;display:flex;flex-flow:column wrap}.preso-slide-list__item{display:block;padding:0}.preso-slide-list__button{padding:.7em;font:inherit;color:inherit;border:none;background:none}.preso-notes-time{padding:.7em}.preso-notes__controls{display:flex}.preso-notes__buttons{margin-left:auto;margin-right:0;display:flex}.preso-notes__button{margin-right:.7em;fill:#fff;font:inherit;padding:0;border:none;background:none;cursor:pointer;position:relative;text-indent:-1000px;overflow:hidden;width:1.6em}.preso-notes__button svg{position:absolute;top:0;left:0;width:100%;height:100%}.notes-popup{background:#000}.notes-popup body{margin:0}.notes-popup preso-notes{position:absolute;top:0;left:0;right:0;bottom:0;transform-origin:0 0}.notes-popup .preso-notes__popout-button{display:none}";

  class Notes extends HTMLElement {
    constructor() {
      super();
      this._hasBeenConnected = false;
      this._notesList = hyperHTML`<ol class="preso-notes-list"></ol>`;
      this._slideList = hyperHTML`<ol class="preso-slide-list"></ol>`;
      this._controls = hyperHTML`
      <div class="preso-notes__controls">
        ${this._time = hyperHTML`<div class="preso-notes-time"></div>`}
        <div class="preso-notes__buttons">
          ${this._slidesListBtn = hyperHTML`<button class="preso-notes__button"><span>Toggle slide list</span><svg viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" /></svg></button>`}
          ${this._popOutBtn = hyperHTML`<button class="preso-notes__button preso-notes__popout-button"><span>Pop-out</span><svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5C4 3 3 4 3 5v14c0 1 1 2 2 2h14c1 0 2-1 2-2v-7h-2v7zM14 3v2h3.6l-9.8 9.8 1.4 1.4L19 6.4V10h2V3h-7z" /></svg></button>`}
        </div>
      </div>
    `;
      this._timeFormat = new Intl.DateTimeFormat('en-gb', {
        timeZone: 'UTC',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false
      });
      this._timerStart = 0;
      this._showingListView = false;
      this._slideList.style.display = 'none';

      // Listeners
      this._popOutBtn.addEventListener('click', () => this._onPopOutClick());
      this._slideList.addEventListener('click', event => {
        const btn = event.target.closest('button');
        if (btn) this._onSlideListClick(btn);
      });
      this._slidesListBtn.addEventListener('click', () => this._toggleListView());
    }
    connectedCallback() {
      if (this._hasBeenConnected) return;
      this._hasBeenConnected = true;
      // Adding the CSS to the element so it works when moved into its own iframe
      this.append(...hyperHTML`
      <style>${css$1}</style>
      <div class="preso-notes-view">
        ${this._slideList}
        ${this._notesList}
        ${this._controls}
      </div>
    `.childNodes);
    }
    _onPopOutClick() {
      this.dispatchEvent(new CustomEvent('popoutclick'));
    }
    _onSlideListClick(btn) {
      this.dispatchEvent(new CustomEvent('slideswitch', {
        detail: {slideIndex: Number(btn.dataset.slideIndex)}
      }));
    }
    _toggleListView() {
      this._showingListView = !this._showingListView;
      this._slideList.style.display = this._showingListView ? '' : 'none';
      this._notesList.style.display = !this._showingListView ? '' : 'none';
    }
    set(notes) {
      if (!Array.isArray(notes)) {
        notes = notes.trim().split('\n');
      }
      this._notesList.innerHTML = '';
      this._notesList.append(...notes.map(s => hyperHTML`<li class="preso-notes-list__item">${s}</li>`));
    }
    _updateTimer() {
      this._time.textContent = this._timeFormat.format(Date.now() - this._timerStart);
    }
    startTimer() {
      if (this._timerStart == 0) {
        setInterval(() => this._updateTimer(), 1000);
      }
      this._timerStart = Date.now();
      this._updateTimer();
    }
    _addSlideReference(name) {
      const slideIndex = this._slideList.children.length;
      this._slideList.append(hyperHTML`
      <li class="preso-slide-list__item">
        <button data-slide-index=${slideIndex} class="preso-slide-list__button">${name}</button>
      </li>
    `);
    }
  }

  customElements.define('preso-notes', Notes);

  /**
   * @returns Range
   */
  function findText(str, opts={}) {
    const {index = 0} = opts;
    let i = 0;

    for (const range of findTexts(str, opts)) {
      if (i === index) return range;
      i++;
    }
  }

  /**
   * @example Wrap every instance of 'hello' in a span:
   * for (const range of [...findTexts('hello')]) {
   *   const span = document.createElement('span');
   *   span.appendChild(range.extractContents());
   *   range.insertNode(span);
   * }
   */
  function* findTexts(str, {
    root = document.body
  }={}) {
    let matchPos = 0;
    let startContainer = null;
    let rewindCount = 0;
    let startOffset = 0;

    const ittr = document.createNodeIterator(root, NodeFilter.SHOW_TEXT);

    while (true) {
      let textNode = ittr.nextNode();
      if (!textNode) return;

      let text = textNode.nodeValue;

      // This lets us rewind if we don't find a match
      if (matchPos) rewindCount++;

      for (let i = 0; i < text.length; i++) {
        if (text[i] == str[matchPos]) {
          // Possible match
          if (matchPos == 0) {
            startContainer = textNode;
            startOffset = i;
          }

          matchPos++;

          // Total match
          if (matchPos == str.length) {
            const range = document.createRange();
            range.setStart(startContainer, startOffset);
            range.setEnd(textNode, i + 1);

            yield range;

            matchPos = 0;
            startContainer = null;
            startOffset = 0;
            rewindCount = 0;
          }
        }
        // Match failure
        else if (matchPos) {
          // Rewind everything to the first character of the initial match & continue
          while (rewindCount) {
            textNode = ittr.previousNode();
            rewindCount--;
          }
          text = textNode.nodeValue;
          i = startOffset;
          matchPos = 0;
          startContainer = null;
          startOffset = 0;
        }
      }
    }
  }

  const localStorageKeyPrefix = 'are-you-there-';

  function createDetectableWindow(name) {
    const win = window.open(null, name,
      'menubar=no,toolbar=no,location=no,status=no'
    );

    // Empty previous contents
    win.document.open();
    // Listen for "are you there?" requests
    win.document.write(`
    <script>
      window.addEventListener('storage', ({key, newValue}) => {
        if (key == ${JSON.stringify(localStorageKeyPrefix)} + ${JSON.stringify(name)} && newValue == 'ask') {
          window.localStorage.setItem(key, 'yes');
        }
      });
    </script>
  `);
    win.document.close();


    return win;
  }

  function detectableWindowExists(name) {
    return new Promise(resolve => {
      function listener({key, newValue}) {
        if (key == localStorageKeyPrefix + name && newValue == 'yes') {
          resolve(true);
        }
      }
      window.addEventListener('storage', listener);
      localStorage.setItem(localStorageKeyPrefix + name, 'ask');
      setTimeout(() => {
        resolve(false);
        localStorage.setItem(localStorageKeyPrefix + name, 'no');
        window.removeEventListener('storage', listener);
      }, 200);
    });
  }

  function frame() {
    return new Promise(r => requestAnimationFrame(r));
  }

  async function wait(ms) {
    await new Promise(r => setTimeout(r, ms));
    await frame();
  }

  function getCompoundTransform(element) {
    const chain = [];

    while (element) {
      chain.push(element);
      element = element.parentElement;
    }

    return chain.reverse().reduce((matrix, el) => {
      return matrix.multiplySelf(
        new DOMMatrix(window.getComputedStyle(el).transform)
      );
    }, new DOMMatrix());
  }

  function rectToQuad(rect) {
    return DOMQuad.fromRect({
      x: ('x' in rect) ? rect.x : rect.left,
      y: ('y' in rect) ? rect.y : rect.top,
      width: rect.width,
      height: rect.height
    });
  }

  function getRelativeBoundingClientRect(from, to) {
    // Deal with ranges
    let toEl = to.commonAncestorContainer || to;

    if (toEl.nodeType != 1) toEl = toEl.parentElement;

    const m = getCompoundTransform(toEl).invertSelf();
    const fromQuad = rectToQuad(from.getBoundingClientRect());
    const toQuad = rectToQuad(to.getBoundingClientRect());
    const fromTopLeft = fromQuad.p1.matrixTransform(m);
    const toTopLeft = toQuad.p1.matrixTransform(m);
    const toBottomRight = toQuad.p3.matrixTransform(m);

    return new DOMRectReadOnly(
      toTopLeft.x - fromTopLeft.x,
      toTopLeft.y - fromTopLeft.y,
      toBottomRight.x - toTopLeft.x,
      toBottomRight.y - toTopLeft.y
    );
  }

  const easeOutQuad = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
  const easeOutQuint = 'cubic-bezier(0.230, 1.000, 0.320, 1.000)';
  const easeInOutQuad = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)';

  async function fadeIn(element, {
    duration = 500,
    easing = easeInOutQuad
  }={}) {
    const slide = element.closest('preso-slide');
    if (!slide) throw Error("Fading element must be within preso-slide");

    const currentStyleValue = element.style.opacity;
    const currentOpacity = getComputedStyle(element).opacity;
    const endOpacity = parseFloat(currentOpacity) < 0.01 ? '1' : '';

    element.style.opacity = '0.0001';

    await slide.synchronize();

    if (currentStyleValue && currentStyleValue !== '0') {
      element.style.opacity = currentStyleValue;
    }
    else {
      element.style.opacity = endOpacity;
    }

    await element.animate([
      { opacity: '0' },
      { opacity: endOpacity || currentOpacity }
    ], {
      duration: duration * slide.transition,
      easing
    }).finished;
  }

  function animWatcher(element) {
    new MutationObserver(records => {
      for (const {addedNodes} of records) {
        for (const node of addedNodes) {
          if (node.nodeType != 1) continue;

          // fade-in
          if (node.hasAttribute('fade-in')) {
            node.removeAttribute('fade-in');
            const opts = {};

            if (node.hasAttribute('fade-duration')) {
              opts.duration = Number(node.getAttribute('fade-duration'));
              node.removeAttribute('fade-duration');
            }

            if (node.hasAttribute('fade-easing')) {
              opts.easing = node.getAttribute('fade-easing');
              node.removeAttribute('fade-easing');
            }

            fadeIn(node, opts);
          }
        }
      }
    }).observe(element, {
      childList: true,
      subtree: true
    });
  }

  var css$2 = "preso-slide{position:absolute;top:0;left:0;right:0;bottom:0;background:#000;color:#fff;will-change:opacity;overflow:hidden}";

  document.head.append(hyperHTML`<style>${css$2}</style>`);

  class Slide extends HTMLElement {
    constructor() {
      super();
      this._func = null;
      this._nextResolve = null;
      this._complete = false;
      this._synchronizePromises = [];
      this._currentStateNum = 0;
      this._autoAdvanceNum = 0;
      this.transition = true;

      // Enables auto-animating elements with particular attributes
      animWatcher(this);
    }

    async _run(func, {
      preventTransition = false,
      autoAdvanceNum = 0
    }={}) {
      this.transition = !preventTransition;
      this._autoAdvanceNum = autoAdvanceNum;

      const slideDone = func(this);

      await slideDone;
      this._complete = true;
    }

    _advance({
      preventTransition = false
    }={}) {
      this.transition = !preventTransition;
      if (this._nextResolve) this._nextResolve();
    }

    next() {
      if (this._nextResolve) throw Error('next() called before previous next had resolved – ensure you await slide.next()');

      return new Promise(resolve => {
        this._nextResolve = resolve;
        if (this._autoAdvanceNum) {
          this._autoAdvanceNum--;
          resolve();
        }
      }).then(() => {
        this._currentStateNum++;
        this._nextResolve = null;
        this._synchronizePromises = [Promise.all(this._synchronizePromises)];
      });
    }

    async synchronize(promise = undefined) {
      if (promise) {
        const caughtPromise = promise.catch(err => {
          // Don't rethrow the error, just log
          console.error('synchronize promise rejected', err);
        });

        this._synchronizePromises.push(caughtPromise);
      }

      await frame();

      return Promise.all(this._synchronizePromises);
    }

    currentSynchronized() {
      return Promise.all(this._synchronizePromises);
    }
  }

  customElements.define('preso-slide', Slide);

  function fade({
    duration = 600,
    easing = easeInOutQuad
  }={}) {
    return async function(slide) {
      await slide.synchronize();

      const anim = slide.animate([
        {opacity: 0},
        {opacity: 1}
      ], {
        duration,
        easing,
        fill: 'forwards'
      });

      return anim.finished;
    }
  }

  function fadeBlank({
    duration = 600,
    easing = easeInOutQuad,
    color = 'black'
  }={}) {
    return async function(slide, exitingSlide, stage) {
      const blank = document.createElement('div');

      Object.assign(blank.style, {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        backgroundColor: color
      });

      stage.append(blank);

      await slide.synchronize(blank.animate([
        { opacity: 0 },
        { opacity: 1 },
      ], {
        duration,
        easing,
        fill: 'forwards'
      }).finished);

      slide.style.opacity = 1;

      await blank.animate([
        {opacity: 1},
        {opacity: 0},
      ], {
        duration,
        easing,
        fill: 'forwards'
      }).finished;

      blank.remove();
    }
  }

  function slideFrom$1(direction, {
    duration = 800,
    easing = easeInOutQuad
  }={}) {
    return async function(slide, exitingSlide, stage) {
      await slide.synchronize();

      slide.style.opacity = 1;

      slide.animate([
        { transform: `translateX(${direction == 'right' ? 100 : -100}%)` },
        { transform: 'none' },
      ], { duration, easing });

      await exitingSlide.animate([
        { transform: 'none' },
        { transform: `translateX(${direction == 'right' ? -100 : 100}%)` }
      ], { duration, easing }).finished;
    }
  }

  function slideFromRight(opts) {
    return slideFrom$1('right', opts);
  }

  function swap() {
    return async function(slide) {
      await slide.synchronize();
      slide.style.opacity = 1;
    }
  }

  var css$3 = ":host{background:#000;overflow:hidden;position:relative}:host:focus{outline:none}.preso__layout{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-flow:column}.preso__cell{flex:1}.preso__resize-observer{opacity:0;position:absolute;top:0;left:0;width:100%;height:100%}::slotted(.preso__stage){position:absolute;transform-origin:0 0;overflow:hidden}::slotted(preso-notes){position:absolute;transform-origin:0 0}";

  class Presentation extends HTMLElement {
    constructor() {
      super();

      this.defaultTransition = fade();

      this._hasBeenConnected = false;
      this._currentSlideNum = -1;
      this._currentSlide = null;
      this._slideFuncs = [];
      this._transitionFuncs = [];
      // Appended in connectedCallback
      this._stage = hyperHTML`<div class="preso__stage"></div>`;
      this.notes = hyperHTML`<preso-notes></preso-notes>`;
      this._notesWindow = null;

      // Add shadow dom
      let resizeObserver;

      this.attachShadow({mode: 'closed'}).append(
        this._shadowStyle = hyperHTML`<style>${css$3}</style>`,
        hyperHTML`<div class="preso__layout">
        ${this._stageCell = hyperHTML`<div class="preso__cell"></div>`}
        ${this._notesCell = hyperHTML`<div class="preso__cell"></div>`}
        ${resizeObserver = hyperHTML`<iframe class="preso__resize-observer"></iframe>`}
      </div>`,
        hyperHTML`<slot></slot>`
      );

      // Watch for element size changes
      resizeObserver.addEventListener('load', () => {
        resizeObserver.contentWindow.addEventListener('resize', () => this._handleResize());
      });
      resizeObserver.src = '';

      // Add key listeners
      this.addEventListener('keydown', event => {
        switch (event.key) {
          case ' ':
            event.preventDefault();
            this.next();
            break;
          case 'ArrowRight':
            event.preventDefault();
            this.next({preventTransition: true});
            break;
          case 'ArrowLeft':
            event.preventDefault();
            this.previous({preventTransition: true});
            break;
          case 'f':
            event.preventDefault();
            this._fullscreen();
        }
      });

      // Other listeners
      this.notes.addEventListener('popoutclick', () => this._popoutNotes());
      this.notes.addEventListener('slideswitch', event => this._onSlideSwitchClicked(event));
    }

    async connectedCallback() {
      if (!this._hasBeenConnected) {
        this.style.opacity = 0;
        this._hasBeenConnected = true;
        this.append(this._stage, this.notes);
        this.tabIndex = 0;

        this._stage.style.width = `${this.width}px`;
        this._stage.style.height = `${this.height}px`;
        this.notes.style.width = `${this.notesWidth}px`;
        this.notes.style.height = `${this.notesHeight}px`;

        if (await detectableWindowExists('notes')) {
          this._popoutNotes();
        }
        this.style.opacity = 1;
      }

      this._handleResize();
    }

    attributeChangedCallback(name, oldVal, newVal) {
      switch(name) {
        case 'width':
          this._stage.style.width = `${this.width}px`;
          this._handleResize();
          break;
        case 'height':
          this._stage.style.height = `${this.height}px`;
          this._handleResize();
          break;
        case 'notes-width':
          this.notes.style.width = `${this.notesWidth}px`;
          this._handleResize();
          break;
        case 'notes-height':
          this.notes.style.height = `${this.notesHeight}px`;
          this._handleResize();
          break;
        case 'no-notes':
          if (newVal !== null) {
            this._notesCell.remove();
          }
          break;
      }
    }

    _onSlideSwitchClicked(event) {
      this.goTo(event.detail.slideIndex, { transition: fadeBlank() });
    }

    _popoutNotes() {
      const win = createDetectableWindow('notes');
      this._notesWindow = win;
      win.document.documentElement.classList.add('notes-popup');
      win.document.body.append(this.notes);
      this._notesCell.remove();
      this._notesCell = win.document.documentElement;
      win.addEventListener('resize', () => this._handleResize());
      this._handleResize();
    }

    _fullscreen() {
      this.webkitRequestFullscreen();
      this.style.cursor = 'none';

      // Fullscreen notes too
      if (this._notesWindow) {
        this._notesWindow.document.body.webkitRequestFullscreen();
      }
    }

    _handleResize() {
      const stageRect = this._stageCell.getBoundingClientRect();
      const notesRect = this._notesCell.getBoundingClientRect();

      // Resize stage
      const stageScale = Math.min(
        stageRect.width / this.width,
        stageRect.height / this.height
      );

      const stageLeft = (stageRect.width - (this.width * stageScale)) / 2 + stageRect.left;
      const stageTop = (stageRect.height - (this.height * stageScale)) / 2 + stageRect.top;

      this._stage.style.transform = `translate(${stageLeft}px, ${stageTop}px) scale(${stageScale})`;

      // Resize notes
      const notesScale = Math.min(
        notesRect.width / this.notesWidth,
        notesRect.height / this.notesHeight
      );

      const notesLeft = (notesRect.width - (this.notesWidth * notesScale)) / 2 + notesRect.left;
      const notesTop = (notesRect.height - (this.notesHeight * notesScale)) / 2 + notesRect.top;

      this.notes.style.transform = `translate(${notesLeft}px, ${notesTop}px) scale(${notesScale})`;
    }

    slide(slideName, asyncFunc) {
      // Make slideName optional:
      if (!asyncFunc) {
        asyncFunc = slideName;
        slideName = 'Unknown slide';
      }

      this._slideFuncs.push(asyncFunc);
      this._transitionFuncs.push(this.defaultTransition);
      this.notes._addSlideReference(slideName);

      if (this._slideFuncs.length == 1) {
        this.goTo(0);
      }
    }

    transition(transitionFunc) {
      this._transitionFuncs[this._transitionFuncs.length - 1] = transitionFunc;
    }

    async startHere() {
      const num = this._slideFuncs.length;
      await null; // microtask
      this.goTo(num, { transition: swap() });
    }

    async goTo(num, {
      state = 0,
      preventTransition = false,
      transition
    }={}) {
      const slide = new Slide();
      const exitingSlide = this._currentSlide;
      const func = this._slideFuncs[num];

      this._currentSlide = slide;
      this._currentSlideNum = Number(num);

      slide.style.opacity = 0;
      this._stage.append(slide);

      slide._run(func, {
        autoAdvanceNum: state,
        preventTransition
      });

      // Use the provided transition, avoid transitioning, or use the slide's transition
      transition = transition || (preventTransition ? false : this._transitionFuncs[num - 1]);

      if (transition) {
        await transition(slide, exitingSlide, this._stage);
      }
      else {
        await slide.synchronize();
        slide.style.opacity = 1;
      }

      if (exitingSlide) exitingSlide.remove();
    }

    next({
      preventTransition = false
    }={}) {
      if (this._currentSlide._complete) {
        // As long as it isn't the last slide
        if (this._currentSlideNum + 1 != this._slideFuncs.length) {
          this.goTo(this._currentSlideNum + 1, {preventTransition});
        }
        return;
      }
      this._currentSlide._advance({preventTransition});
    }

    previous() {
      if (this._currentSlide._currentStateNum == 0) {
        // As long as we aren't already on the first slide
        if (this._currentSlideNum != 0) {
          this.goTo(this._currentSlideNum - 1, {
            preventTransition: true,
            state: -1
          });
        }
        return;
      }

      this.goTo(this._currentSlideNum, {
        preventTransition: true,
        state: this._currentSlide._currentStateNum - 1
      });
    }
  }

  const numberAttrs = ['width', 'height', 'notes-width', 'notes-height'];
  const boolAttrs = ['no-notes'];

  Presentation.observedAttributes = [
    ...numberAttrs, ...boolAttrs
  ];

  // Property accessors for attributes
  for (const attr of numberAttrs) {
    const prop = attr.replace(/-\w/g, match => match.slice(1).toUpperCase());

    Object.defineProperty(Presentation.prototype, prop, {
      get() {
        const num = Number(this.getAttribute(attr));
        if (num) return num;

        // defaults:
        if (attr.endsWith('width')) return 1920;
        if (attr.endsWith('height')) return 1080;
      },
      set(val) {
        this.setAttribute(attr, Number(val));
      }
    });
  }

  for (const attr of boolAttrs) {
    const prop = attr.replace(/-\w/g, match => match.slice(1).toUpperCase());

    Object.defineProperty(Presentation.prototype, prop, {
      get() {
        return this.hasAttribute('no-notes');
      },
      set(val) {
        if (val) {
          this.setAttribute('no-notes', '');
        }
        else {
          this.removeAttribute('no-notes');
        }
      }
    });
  }

  customElements.define('preso-presentation', Presentation);

  var css$4 = "preso-img{display:inline-block;opacity:.0001;will-change:opacity}.preso-img--show{opacity:1}.preso-img__img{display:block;width:100%;height:100%;object-fit:contain}";

  document.head.append(hyperHTML`<style>${css$4}</style>`);

  class Img extends HTMLElement {
    constructor() {
      super();
      this._hasBeenConnected = false;
      this._img = hyperHTML`<img class="preso-img__img">`;
    }
    async connectedCallback() {
      if (this._hasBeenConnected) return;
      this._hasBeenConnected = true;

      const slide = this.closest('preso-slide');

      if (!slide) throw Error("preso-img must be within a preso-slide");

      this.append(this._img);

      await slide.synchronize(this._img.decode());

      this.classList.add('preso-img--show');
    }
    attributeChangedCallback(name, oldVal, newVal) {
      this._img.setAttribute(name, newVal);
    }
  }

  Img.observedAttributes = [
    'width', 'height', 'src', 'crossorigin'
  ];

  const propMap = new Map();
  propMap.set('crossorigin', 'crossOrigin');

  // Forwarded property accessors
  for (const attr of Img.observedAttributes) {
    const prop = propMap.get(attr) || attr;

    Object.defineProperty(Img.prototype, prop, {
      get() {
        this._img[prop];
      },
      set(val) {
        this._img[prop] = val;
      }
    });
  }

  customElements.define('preso-img', Img);

  const G = document.defaultView;

  // Node.CONSTANTS
  // 'cause some engine has no global Node defined
  // (i.e. Node, NativeScript, basicHTML ... )
  const ELEMENT_NODE = 1;
  const TEXT_NODE = 3;
  const COMMENT_NODE = 8;
  const DOCUMENT_FRAGMENT_NODE = 11;

  // HTML related constants
  const VOID_ELEMENTS = /^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i;

  // SVG related constants
  const OWNER_SVG_ELEMENT = 'ownerSVGElement';
  const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

  // Custom Elements / MutationObserver constants
  const CONNECTED = 'connected';
  const DISCONNECTED = 'dis' + CONNECTED;

  // hyperHTML related constants
  const EXPANDO = '_hyper: ';
  const SHOULD_USE_TEXT_CONTENT = /^style|textarea$/i;
  const UID = EXPANDO + ((Math.random() * new Date) | 0) + ';';
  const UIDC = '<!--' + UID + '-->';

  // you know that kind of basics you need to cover
  // your use case only but you don't want to bloat the library?
  // There's even a package in here:
  // https://www.npmjs.com/package/poorlyfills

  // used to dispatch simple events
  let Event = G.Event;
  try {
    new Event('Event');
  } catch(o_O) {
    Event = function (type) {
      const e = document.createEvent('Event');
      e.initEvent(type, false, false);
      return e;
    };
  }

  // used to store template literals
  /* istanbul ignore next */
  const Map$1 = G.Map || function Map() {
    const keys = [], values = [];
    return {
      get(obj) {
        return values[keys.indexOf(obj)];
      },
      set(obj, value) {
        values[keys.push(obj) - 1] = value;
      }
    };
  };

  // used to store wired content
  let ID = 0;
  const WeakMap = G.WeakMap || function WeakMap() {
    const key = UID + ID++;
    return {
      get(obj) { return obj[key]; },
      set(obj, value) {
        Object.defineProperty(obj, key, {
          configurable: true,
          value
        });
      }
    };
  };

  // used to store hyper.Components
  const WeakSet = G.WeakSet || function WeakSet() {
    const wm = new WeakMap;
    return {
      add(obj) { wm.set(obj, true); },
      has(obj) { return wm.get(obj) === true; }
    };
  };

  // used to be sure IE9 or older Androids work as expected
  const isArray = Array.isArray || (toString =>
    arr => toString.call(arr) === '[object Array]'
  )({}.toString);

  const trim = UID.trim || function () {
    return this.replace(/^\s+|\s+$/g, '');
  };

  // hyperHTML.Component is a very basic class
  // able to create Custom Elements like components
  // including the ability to listen to connect/disconnect
  // events via onconnect/ondisconnect attributes
  // Components can be created imperatively or declaratively.
  // The main difference is that declared components
  // will not automatically render on setState(...)
  // to simplify state handling on render.
  function Component$1() {
    return this; // this is needed in Edge !!!
  }

  // Component is lazily setup because it needs
  // wire mechanism as lazy content
  function setup(content) {
    // there are various weakly referenced variables in here
    // and mostly are to use Component.for(...) static method.
    const children = new WeakMap;
    const create = Object.create;
    const createEntry = (wm, id, component) => {
      wm.set(id, component);
      return component;
    };
    const get = (Class, info, context, id) => {
      const relation = info.get(Class) || relate(Class, info);
      switch (typeof id) {
        case 'object':
        case 'function':
          const wm = relation.w || (relation.w = new WeakMap);
          return wm.get(id) || createEntry(wm, id, new Class(context));
        default:
          const sm = relation.p || (relation.p = create(null));
          return sm[id] || (sm[id] = new Class(context));
      }
    };
    const relate = (Class, info) => {
      const relation = {w: null, p: null};
      info.set(Class, relation);
      return relation;
    };
    const set = context => {
      const info = new Map$1;
      children.set(context, info);
      return info;
    };
    // The Component Class
    Object.defineProperties(
      Component$1,
      {
        // Component.for(context[, id]) is a convenient way
        // to automatically relate data/context to children components
        // If not created yet, the new Component(context) is weakly stored
        // and after that same instance would always be returned.
        for: {
          configurable: true,
          value(context, id) {
            return get(
              this,
              children.get(context) || set(context),
              context,
              id == null ?
                'default' : id
            );
          }
        }
      }
    );
    Object.defineProperties(
      Component$1.prototype,
      {
        // all events are handled with the component as context
        handleEvent: {value(e) {
          const ct = e.currentTarget;
          this[
            ('getAttribute' in ct && ct.getAttribute('data-call')) ||
            ('on' + e.type)
          ](e);
        }},
        // components will lazily define html or svg properties
        // as soon as these are invoked within the .render() method
        // Such render() method is not provided by the base class
        // but it must be available through the Component extend.
        // Declared components could implement a
        // render(props) method too and use props as needed.
        html: lazyGetter('html', content),
        svg: lazyGetter('svg', content),
        // the state is a very basic/simple mechanism inspired by Preact
        state: lazyGetter('state', function () { return this.defaultState; }),
        // it is possible to define a default state that'd be always an object otherwise
        defaultState: {get() { return {}; }},
        // setting some property state through a new object
        // or a callback, triggers also automatically a render
        // unless explicitly specified to not do so (render === false)
        setState: {value(state, render) {
          const target = this.state;
          const source = typeof state === 'function' ? state.call(this, target) : state;
          for (const key in source) target[key] = source[key];
          if (render !== false) this.render();
          return this;
        }}
      }
    );
  }

  // instead of a secret key I could've used a WeakMap
  // However, attaching a property directly will result
  // into better performance with thousands of components
  // hanging around, and less memory pressure caused by the WeakMap
  const lazyGetter = (type, fn) => {
    const secret = '_' + type + '$';
    return {
      get() {
        return this[secret] || (this[type] = fn.call(this, type));
      },
      set(value) {
        Object.defineProperty(this, secret, {configurable: true, value});
      }
    };
  };

  const intents = {};
  const keys = [];
  const hasOwnProperty = intents.hasOwnProperty;

  let length = 0;

  var Intent = {

    // hyperHTML.define('intent', (object, update) => {...})
    // can be used to define a third parts update mechanism
    // when every other known mechanism failed.
    // hyper.define('user', info => info.name);
    // hyper(node)`<p>${{user}}</p>`;
    define: (intent, callback) => {
      if (!(intent in intents)) {
        length = keys.push(intent);
      }
      intents[intent] = callback;
    },

    // this method is used internally as last resort
    // to retrieve a value out of an object
    invoke: (object, callback) => {
      for (let i = 0; i < length; i++) {
        let key = keys[i];
        if (hasOwnProperty.call(object, key)) {
          return intents[key](object[key], callback);
        }
      }
    }
  };

  // these are tiny helpers to simplify most common operations needed here
  const create = (node, type) => doc(node).createElement(type);
  const doc = node => node.ownerDocument || node;
  const fragment = node => doc(node).createDocumentFragment();
  const text = (node, text) => doc(node).createTextNode(text);

  // TODO:  I'd love to code-cover RegExp too here
  //        these are fundamental for this library

  const spaces = ' \\f\\n\\r\\t';
  const almostEverything = '[^ ' + spaces + '\\/>"\'=]+';
  const attrName = '[ ' + spaces + ']+' + almostEverything;
  const tagName = '<([A-Za-z]+[A-Za-z0-9:_-]*)((?:';
  const attrPartials = '(?:=(?:\'[^\']*?\'|"[^"]*?"|<[^>]*?>|' + almostEverything + '))?)';

  const attrSeeker = new RegExp(
    tagName + attrName + attrPartials + '+)([ ' + spaces + ']*/?>)',
    'g'
  );

  const selfClosing = new RegExp(
    tagName + attrName + attrPartials + '*)([ ' + spaces + ']*/>)',
    'g'
  );

  const testFragment = fragment(document);

  // DOM4 node.append(...many)
  const hasAppend = 'append' in testFragment;

  // detect old browsers without HTMLTemplateElement content support
  const hasContent = 'content' in create(document, 'template');

  // IE 11 has problems with cloning templates: it "forgets" empty childNodes
  testFragment.appendChild(text(testFragment, 'g'));
  testFragment.appendChild(text(testFragment, ''));
  const hasDoomedCloneNode = testFragment.cloneNode(true).childNodes.length === 1;

  // old browsers need to fallback to cloneNode
  // Custom Elements V0 and V1 will work polyfilled
  // but native implementations need importNode instead
  // (specially Chromium and its old V0 implementation)
  const hasImportNode = 'importNode' in document;

  // appends an array of nodes
  // to a generic node/fragment
  // When available, uses append passing all arguments at once
  // hoping that's somehow faster, even if append has more checks on type
  const append = hasAppend ?
    (node, childNodes) => {
      node.append.apply(node, childNodes);
    } :
    (node, childNodes) => {
      const length = childNodes.length;
      for (let i = 0; i < length; i++) {
        node.appendChild(childNodes[i]);
      }
    };

  const findAttributes = new RegExp('(' + attrName + '=)([\'"]?)' + UIDC + '\\2', 'gi');
  const comments = ($0, $1, $2, $3) =>
    '<' + $1 + $2.replace(findAttributes, replaceAttributes) + $3;
  const replaceAttributes = ($0, $1, $2) => $1 + ($2 || '"') + UID + ($2 || '"');

  // given a node and a generic HTML content,
  // create either an SVG or an HTML fragment
  // where such content will be injected
  const createFragment = (node, html) =>
    (OWNER_SVG_ELEMENT in node ?
      SVGFragment :
      HTMLFragment
    )(node, html.replace(attrSeeker, comments));

  // IE/Edge shenanigans proof cloneNode
  // it goes through all nodes manually
  // instead of relying the engine to suddenly
  // merge nodes together
  const cloneNode = hasDoomedCloneNode ?
    node => {
      const clone = node.cloneNode();
      const childNodes = node.childNodes ||
                        // this is an excess of caution
                        // but some node, in IE, might not
                        // have childNodes property.
                        // The following fallback ensure working code
                        // in older IE without compromising performance
                        // or any other browser/engine involved.
                        /* istanbul ignore next */
                        [];
      const length = childNodes.length;
      for (let i = 0; i < length; i++) {
        clone.appendChild(cloneNode(childNodes[i]));
      }
      return clone;
    } :
    // the following ignore is due code-coverage
    // combination of not having document.importNode
    // but having a working node.cloneNode.
    // This shenario is common on older Android/WebKit browsers
    // but basicHTML here tests just two major cases:
    // with document.importNode or with broken cloneNode.
    /* istanbul ignore next */
    node => node.cloneNode(true);

  // IE and Edge do not support children in SVG nodes
  /* istanbul ignore next */
  const getChildren = node => {
    const children = [];
    const childNodes = node.childNodes;
    const length = childNodes.length;
    for (let i = 0; i < length; i++) {
      if (childNodes[i].nodeType === ELEMENT_NODE)
        children.push(childNodes[i]);
    }
    return children;
  };

  // used to import html into fragments
  const importNode = hasImportNode ?
    (doc$$1, node) => doc$$1.importNode(node, true) :
    (doc$$1, node) => cloneNode(node);

  // just recycling a one-off array to use slice
  // in every needed place
  const slice = [].slice;

  // lazy evaluated, returns the unique identity
  // of a template literal, as tempalte literal itself.
  // By default, ES2015 template literals are unique
  // tag`a${1}z` === tag`a${2}z`
  // even if interpolated values are different
  // the template chunks are in a frozen Array
  // that is identical each time you use the same
  // literal to represent same static content
  // around its own interpolations.
  const unique = template => TL(template);

  // TL returns a unique version of the template
  // it needs lazy feature detection
  // (cannot trust literals with transpiled code)
  let TL = t => {
    if (
      // TypeScript template literals are not standard
      t.propertyIsEnumerable('raw') ||
      (
          // Firefox < 55 has not standard implementation neither
          /Firefox\/(\d+)/.test((G.navigator || {}).userAgent) &&
            parseFloat(RegExp.$1) < 55
          )
    ) {
      const T = {};
      TL = t => {
        const k = '^' + t.join('^');
        return T[k] || (T[k] = t);
      };
    } else {
      // make TL an identity like function
      TL = t => t;
    }
    return TL(t);
  };

  // used to store templates objects
  // since neither Map nor WeakMap are safe
  const TemplateMap = () => {
    try {
      const wm = new WeakMap;
      const o_O = Object.freeze([]);
      wm.set(o_O, true);
      if (!wm.get(o_O))
        throw o_O;
      return wm;
    } catch(o_O) {
      // inevitable legacy code leaks due
      // https://github.com/tc39/ecma262/pull/890
      return new Map$1;
    }
  };

  // create document fragments via native template
  // with a fallback for browsers that won't be able
  // to deal with some injected element such <td> or others
  const HTMLFragment = hasContent ?
    (node, html) => {
      const container = create(node, 'template');
      container.innerHTML = html;
      return container.content;
    } :
    (node, html) => {
      const container = create(node, 'template');
      const content = fragment(node);
      if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
        const selector = RegExp.$1;
        container.innerHTML = '<table>' + html + '</table>';
        append(content, slice.call(container.querySelectorAll(selector)));
      } else {
        container.innerHTML = html;
        append(content, slice.call(container.childNodes));
      }
      return content;
    };

  // creates SVG fragment with a fallback for IE that needs SVG
  // within the HTML content
  const SVGFragment = hasContent ?
    (node, html) => {
      const content = fragment(node);
      const container = doc(node).createElementNS(SVG_NAMESPACE, 'svg');
      container.innerHTML = html;
      append(content, slice.call(container.childNodes));
      return content;
    } :
    (node, html) => {
      const content = fragment(node);
      const container = create(node, 'div');
      container.innerHTML = '<svg xmlns="' + SVG_NAMESPACE + '">' + html + '</svg>';
      append(content, slice.call(container.firstChild.childNodes));
      return content;
    };

  function Wire(childNodes) {
    this.childNodes = childNodes;
    this.length = childNodes.length;
    this.first = childNodes[0];
    this.last = childNodes[this.length - 1];
  }

  // when a wire is inserted, all its nodes will follow
  Wire.prototype.insert = function insert() {
    const df = fragment(this.first);
    append(df, this.childNodes);
    return df;
  };

  // when a wire is removed, all its nodes must be removed as well
  Wire.prototype.remove = function remove() {
    const first = this.first;
    const last = this.last;
    if (this.length === 2) {
      last.parentNode.removeChild(last);
    } else {
      const range = doc(first).createRange();
      range.setStartBefore(this.childNodes[1]);
      range.setEndAfter(last);
      range.deleteContents();
    }
    return first;
  };

  // every template literal interpolation indicates
  // a precise target in the DOM the template is representing.
  // `<p id=${'attribute'}>some ${'content'}</p>`
  // hyperHTML finds only once per template literal,
  // hence once per entire application life-cycle,
  // all nodes that are related to interpolations.
  // These nodes are stored as indexes used to retrieve,
  // once per upgrade, nodes that will change on each future update.
  // A path example is [2, 0, 1] representing the operation:
  // node.childNodes[2].childNodes[0].childNodes[1]
  // Attributes are addressed via their owner node and their name.
  const createPath = node => {
    const path = [];
    let parentNode;
    switch (node.nodeType) {
      case ELEMENT_NODE:
      case DOCUMENT_FRAGMENT_NODE:
        parentNode = node;
        break;
      case COMMENT_NODE:
        parentNode = node.parentNode;
        prepend(path, parentNode, node);
        break;
      default:
        parentNode = node.ownerElement;
        break;
    }
    for (
      node = parentNode;
      (parentNode = parentNode.parentNode);
      node = parentNode
    ) {
      prepend(path, parentNode, node);
    }
    return path;
  };

  const prepend = (path, parent, node) => {
    path.unshift(path.indexOf.call(parent.childNodes, node));
  };

  var Path = {
    create: (type, node, name) => ({type, name, node, path: createPath(node)}),
    find: (node, path) => {
      const length = path.length;
      for (let i = 0; i < length; i++) {
        node = node.childNodes[path[i]];
      }
      return node;
    }
  };

  // from https://github.com/developit/preact/blob/33fc697ac11762a1cb6e71e9847670d047af7ce5/src/constants.js
  const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

  // style is handled as both string and object
  // even if the target is an SVG element (consistency)
  var Style = (node, original, isSVG) => {
    if (isSVG) {
      const style = original.cloneNode(true);
      style.value = '';
      node.setAttributeNode(style);
      return update(style, isSVG);
    }
    return update(node.style, isSVG);
  };

  // the update takes care or changing/replacing
  // only properties that are different or
  // in case of string, the whole node
  const update = (style, isSVG) => {
    let oldType, oldValue;
    return newValue => {
      switch (typeof newValue) {
        case 'object':
          if (newValue) {
            if (oldType === 'object') {
              if (!isSVG) {
                if (oldValue !== newValue) {
                  for (const key in oldValue) {
                    if (!(key in newValue)) {
                      style[key] = '';
                    }
                  }
                }
              }
            } else {
              if (isSVG) style.value = '';
              else style.cssText = '';
            }
            const info = isSVG ? {} : style;
            for (const key in newValue) {
              const value = newValue[key];
              info[key] = typeof value === 'number' &&
                          !IS_NON_DIMENSIONAL.test(key) ?
                            (value + 'px') : value;
            }
            oldType = 'object';
            if (isSVG) style.value = toStyle((oldValue = info));
            else oldValue = newValue;
            break;
          }
        default:
          if (oldValue != newValue) {
            oldType = 'string';
            oldValue = newValue;
            if (isSVG) style.value = newValue || '';
            else style.cssText = newValue || '';
          }
          break;
      }
    };
  };

  const hyphen = /([^A-Z])([A-Z]+)/g;
  const ized = ($0, $1, $2) => $1 + '-' + $2.toLowerCase();
  const toStyle = object => {
    const css = [];
    for (const key in object) {
      css.push(key.replace(hyphen, ized), ':', object[key], ';');
    }
    return css.join('');
  };

  /* AUTOMATICALLY IMPORTED, DO NOT MODIFY */
  /*! (c) 2017 Andrea Giammarchi (ISC) */

  /**
   * This code is a revisited port of the snabbdom vDOM diffing logic,
   * the same that fuels as fork Vue.js or other libraries.
   * @credits https://github.com/snabbdom/snabbdom
   */

  const eqeq = (a, b) => a == b;

  const identity = O => O;

  const remove = (get, parentNode, before, after) => {
    if (after == null) {
      parentNode.removeChild(get(before, -1));
    } else {
      const range = parentNode.ownerDocument.createRange();
      range.setStartBefore(get(before, -1));
      range.setEndAfter(get(after, -1));
      range.deleteContents();
    }
  };

  const domdiff = (
    parentNode,     // where changes happen
    currentNodes,   // Array of current items/nodes
    futureNodes,    // Array of future items/nodes
    options         // optional object with one of the following properties
                    //  before: domNode
                    //  compare(generic, generic) => true if same generic
                    //  node(generic) => Node
  ) => {
    if (!options)
      options = {};
    const compare = options.compare || eqeq;
    const get = options.node || identity;
    const before = options.before == null ? null : get(options.before, 0);
    let currentStart = 0, futureStart = 0;
    let currentEnd = currentNodes.length - 1;
    let currentStartNode = currentNodes[0];
    let currentEndNode = currentNodes[currentEnd];
    let futureEnd = futureNodes.length - 1;
    let futureStartNode = futureNodes[0];
    let futureEndNode = futureNodes[futureEnd];
    while (currentStart <= currentEnd && futureStart <= futureEnd) {
      if (currentStartNode == null) {
        currentStartNode = currentNodes[++currentStart];
      }
      else if (currentEndNode == null) {
        currentEndNode = currentNodes[--currentEnd];
      }
      else if (futureStartNode == null) {
        futureStartNode = futureNodes[++futureStart];
      }
      else if (futureEndNode == null) {
        futureEndNode = futureNodes[--futureEnd];
      }
      else if (compare(currentStartNode, futureStartNode)) {
        currentStartNode = currentNodes[++currentStart];
        futureStartNode = futureNodes[++futureStart];
      }
      else if (compare(currentEndNode, futureEndNode)) {
        currentEndNode = currentNodes[--currentEnd];
        futureEndNode = futureNodes[--futureEnd];
      }
      else if (compare(currentStartNode, futureEndNode)) {
        parentNode.insertBefore(
          get(currentStartNode, 1),
          get(currentEndNode, -0).nextSibling
        );
        currentStartNode = currentNodes[++currentStart];
        futureEndNode = futureNodes[--futureEnd];
      }
      else if (compare(currentEndNode, futureStartNode)) {
        parentNode.insertBefore(
          get(currentEndNode, 1),
          get(currentStartNode, 0)
        );
        currentEndNode = currentNodes[--currentEnd];
        futureStartNode = futureNodes[++futureStart];
      }
      else {
        let index = currentNodes.indexOf(futureStartNode);
        if (index < 0) {
          parentNode.insertBefore(
            get(futureStartNode, 1),
            get(currentStartNode, 0)
          );
          futureStartNode = futureNodes[++futureStart];
        }
        else {
          let i = index;
          let f = futureStart;
          while (
            i <= currentEnd &&
            f <= futureEnd &&
            currentNodes[i] === futureNodes[f]
          ) {
            i++;
            f++;
          }
          if (1 < (i - index)) {
            if (--index === currentStart) {
              parentNode.removeChild(get(currentStartNode, -1));
            } else {
              remove(
                get,
                parentNode,
                currentStartNode,
                currentNodes[index]
              );
            }
            currentStart = i;
            futureStart = f;
            currentStartNode = currentNodes[i];
            futureStartNode = futureNodes[f];
          } else {
            const el = currentNodes[index];
            currentNodes[index] = null;
            parentNode.insertBefore(get(el, 1), get(currentStartNode, 0));
            futureStartNode = futureNodes[++futureStart];
          }
        }
      }
    }
    if (currentStart <= currentEnd || futureStart <= futureEnd) {
      if (currentStart > currentEnd) {
        const pin = futureNodes[futureEnd + 1];
        const place = pin == null ? before : get(pin, 0);
        if (futureStart === futureEnd) {
          parentNode.insertBefore(get(futureNodes[futureStart], 1), place);
        }
        else {
          const fragment = parentNode.ownerDocument.createDocumentFragment();
          while (futureStart <= futureEnd) {
            fragment.appendChild(get(futureNodes[futureStart++], 1));
          }
          parentNode.insertBefore(fragment, place);
        }
      }
      else {
        if (currentNodes[currentStart] == null)
          currentStart++;
        if (currentStart === currentEnd) {
          parentNode.removeChild(get(currentNodes[currentStart], -1));
        }
        else {
          remove(
            get,
            parentNode,
            currentNodes[currentStart],
            currentNodes[currentEnd]
          );
        }
      }
    }
    return futureNodes;
  };

  // hyper.Component have a connected/disconnected
  // mechanism provided by MutationObserver
  // This weak set is used to recognize components
  // as DOM node that needs to trigger connected/disconnected events
  const components = new WeakSet;

  // a basic dictionary used to filter already cached attributes
  // while looking for special hyperHTML values.
  function Cache() {}
  Cache.prototype = Object.create(null);

  // returns an intent to explicitly inject content as html
  const asHTML = html => ({html});

  // returns nodes from wires and components
  const asNode = (item, i) => {
    return 'ELEMENT_NODE' in item ?
      item :
      (item.constructor === Wire ?
        // in the Wire case, the content can be
        // removed, post-pended, inserted, or pre-pended and
        // all these cases are handled by domdiff already
        /* istanbul ignore next */
        ((1 / i) < 0 ?
          (i ? item.remove() : item.last) :
          (i ? item.insert() : item.first)) :
        asNode(item.render(), i));
  };

  // returns true if domdiff can handle the value
  const canDiff = value =>  'ELEMENT_NODE' in value ||
  value instanceof Wire ||
  value instanceof Component$1;

  // updates are created once per context upgrade
  // within the main render function (../hyper/render.js)
  // These are an Array of callbacks to invoke passing
  // each interpolation value.
  // Updates can be related to any kind of content,
  // attributes, or special text-only cases such <style>
  // elements or <textarea>
  const create$1 = (root, paths) => {
    const updates = [];
    const length = paths.length;
    for (let i = 0; i < length; i++) {
      const info = paths[i];
      const node = Path.find(root, info.path);
      switch (info.type) {
        case 'any':
          updates.push(setAnyContent(node, []));
          break;
        case 'attr':
          updates.push(setAttribute(node, info.name, info.node));
          break;
        case 'text':
          updates.push(setTextContent(node));
          node.textContent = '';
          break;
      }
    }
    return updates;
  };

  // finding all paths is a one-off operation performed
  // when a new template literal is used.
  // The goal is to map all target nodes that will be
  // used to update content/attributes every time
  // the same template literal is used to create content.
  // The result is a list of paths related to the template
  // with all the necessary info to create updates as
  // list of callbacks that target directly affected nodes.
  const find = (node, paths, parts) => {
    const childNodes = node.childNodes;
    const length = childNodes.length;
    for (let i = 0; i < length; i++) {
      let child = childNodes[i];
      switch (child.nodeType) {
        case ELEMENT_NODE:
          findAttributes$1(child, paths, parts);
          find(child, paths, parts);
          break;
        case COMMENT_NODE:
          if (child.textContent === UID) {
            parts.shift();
            paths.push(
              // basicHTML or other non standard engines
              // might end up having comments in nodes
              // where they shouldn't, hence this check.
              SHOULD_USE_TEXT_CONTENT.test(node.nodeName) ?
                Path.create('text', node) :
                Path.create('any', child)
            );
          }
          break;
        case TEXT_NODE:
          // the following ignore is actually covered by browsers
          // only basicHTML ends up on previous COMMENT_NODE case
          // instead of TEXT_NODE because it knows nothing about
          // special style or textarea behavior
          /* istanbul ignore if */
          if (
            SHOULD_USE_TEXT_CONTENT.test(node.nodeName) &&
            trim.call(child.textContent) === UIDC
          ) {
            parts.shift();
            paths.push(Path.create('text', node));
          }
          break;
      }
    }
  };

  // attributes are searched via unique hyperHTML id value.
  // Despite HTML being case insensitive, hyperHTML is able
  // to recognize attributes by name in a caseSensitive way.
  // This plays well with Custom Elements definitions
  // and also with XML-like environments, without trusting
  // the resulting DOM but the template literal as the source of truth.
  // IE/Edge has a funny bug with attributes and these might be duplicated.
  // This is why there is a cache in charge of being sure no duplicated
  // attributes are ever considered in future updates.
  const findAttributes$1 = (node, paths, parts) => {
    const cache = new Cache;
    const attributes = node.attributes;
    const array = slice.call(attributes);
    const remove = [];
    const length = array.length;
    for (let i = 0; i < length; i++) {
      const attribute = array[i];
      if (attribute.value === UID) {
        const name = attribute.name;
        // the following ignore is covered by IE
        // and the IE9 double viewBox test
        /* istanbul ignore else */
        if (!(name in cache)) {
          const realName = parts.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/, '$1');
          cache[name] = attributes[realName] ||
                        // the following ignore is covered by browsers
                        // while basicHTML is already case-sensitive
                        /* istanbul ignore next */
                        attributes[realName.toLowerCase()];
          paths.push(Path.create('attr', cache[name], realName));
        }
        remove.push(attribute);
      }
    }
    const len = remove.length;
    for (let i = 0; i < len; i++) {
      // Edge HTML bug #16878726
      const attribute = remove[i];
      if (/^id$/i.test(attribute.name))
        node.removeAttribute(attribute.name);
      // standard browsers would work just fine here
      else
        node.removeAttributeNode(remove[i]);
    }

    // This is a very specific Firefox/Safari issue
    // but since it should be a not so common pattern,
    // it's probably worth patching regardless.
    // Basically, scripts created through strings are death.
    // You need to create fresh new scripts instead.
    // TODO: is there any other node that needs such nonsense?
    const nodeName = node.nodeName;
    if (/^script$/i.test(nodeName)) {
      // this used to be like that
      // const script = createElement(node, nodeName);
      // then Edge arrived and decided that scripts created
      // through template documents aren't worth executing
      // so it became this ... hopefully it won't hurt in the wild
      const script = document.createElement(nodeName);
      for (let i = 0; i < attributes.length; i++) {
        script.setAttributeNode(attributes[i].cloneNode(true));
      }
      script.textContent = node.textContent;
      node.parentNode.replaceChild(script, node);
    }
  };

  // when a Promise is used as interpolation value
  // its result must be parsed once resolved.
  // This callback is in charge of understanding what to do
  // with a returned value once the promise is resolved.
  const invokeAtDistance = (value, callback) => {
    callback(value.placeholder);
    if ('text' in value) {
      Promise.resolve(value.text).then(String).then(callback);
    } else if ('any' in value) {
      Promise.resolve(value.any).then(callback);
    } else if ('html' in value) {
      Promise.resolve(value.html).then(asHTML).then(callback);
    } else {
      Promise.resolve(Intent.invoke(value, callback)).then(callback);
    }
  };

  // quick and dirty way to check for Promise/ish values
  const isPromise_ish = value => value != null && 'then' in value;

  // in a hyper(node)`<div>${content}</div>` case
  // everything could happen:
  //  * it's a JS primitive, stored as text
  //  * it's null or undefined, the node should be cleaned
  //  * it's a component, update the content by rendering it
  //  * it's a promise, update the content once resolved
  //  * it's an explicit intent, perform the desired operation
  //  * it's an Array, resolve all values if Promises and/or
  //    update the node with the resulting list of content
  const setAnyContent = (node, childNodes) => {
    const diffOptions = {node: asNode, before: node};
    let fastPath = false;
    let oldValue;
    const anyContent = value => {
      switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
          if (fastPath) {
            if (oldValue !== value) {
              oldValue = value;
              childNodes[0].textContent = value;
            }
          } else {
            fastPath = true;
            oldValue = value;
            childNodes = domdiff(
              node.parentNode,
              childNodes,
              [text(node, value)],
              diffOptions
            );
          }
          break;
        case 'object':
        case 'undefined':
          if (value == null) {
            fastPath = false;
            childNodes = domdiff(
              node.parentNode,
              childNodes,
              [],
              diffOptions
            );
            break;
          }
        default:
          fastPath = false;
          oldValue = value;
          if (isArray(value)) {
            if (value.length === 0) {
              if (childNodes.length) {
                childNodes = domdiff(
                  node.parentNode,
                  childNodes,
                  [],
                  diffOptions
                );
              }
            } else {
              switch (typeof value[0]) {
                case 'string':
                case 'number':
                case 'boolean':
                  anyContent({html: value});
                  break;
                case 'object':
                  if (isArray(value[0])) {
                    value = value.concat.apply([], value);
                  }
                  if (isPromise_ish(value[0])) {
                    Promise.all(value).then(anyContent);
                    break;
                  }
                default:
                  childNodes = domdiff(
                    node.parentNode,
                    childNodes,
                    value,
                    diffOptions
                  );
                  break;
              }
            }
          } else if (canDiff(value)) {
            childNodes = domdiff(
              node.parentNode,
              childNodes,
              value.nodeType === DOCUMENT_FRAGMENT_NODE ?
                slice.call(value.childNodes) :
                [value],
              diffOptions
            );
          } else if (isPromise_ish(value)) {
            value.then(anyContent);
          } else if ('placeholder' in value) {
            invokeAtDistance(value, anyContent);
          } else if ('text' in value) {
            anyContent(String(value.text));
          } else if ('any' in value) {
            anyContent(value.any);
          } else if ('html' in value) {
            childNodes = domdiff(
              node.parentNode,
              childNodes,
              slice.call(
                createFragment(
                  node,
                  [].concat(value.html).join('')
                ).childNodes
              ),
              diffOptions
            );
          } else if ('length' in value) {
            anyContent(slice.call(value));
          } else {
            anyContent(Intent.invoke(value, anyContent));
          }
          break;
      }
    };
    return anyContent;
  };

  // there are four kind of attributes, and related behavior:
  //  * events, with a name starting with `on`, to add/remove event listeners
  //  * special, with a name present in their inherited prototype, accessed directly
  //  * regular, accessed through get/setAttribute standard DOM methods
  //  * style, the only regular attribute that also accepts an object as value
  //    so that you can style=${{width: 120}}. In this case, the behavior has been
  //    fully inspired by Preact library and its simplicity.
  const setAttribute = (node, name, original) => {
    const isSVG = OWNER_SVG_ELEMENT in node;
    let oldValue;
    // if the attribute is the style one
    // handle it differently from others
    if (name === 'style') {
      return Style(node, original, isSVG);
    }
    // the name is an event one,
    // add/remove event listeners accordingly
    else if (/^on/.test(name)) {
      let type = name.slice(2);
      if (type === CONNECTED || type === DISCONNECTED) {
        if (notObserving) {
          notObserving = false;
          observe();
        }
        components.add(node);
      }
      else if (name.toLowerCase() in node) {
        type = type.toLowerCase();
      }
      return newValue => {
        if (oldValue !== newValue) {
          if (oldValue) node.removeEventListener(type, oldValue, false);
          oldValue = newValue;
          if (newValue) node.addEventListener(type, newValue, false);
        }
      };
    }
    // the attribute is special ('value' in input)
    // and it's not SVG *or* the name is exactly data,
    // in this case assign the value directly
    else if (name === 'data' || (!isSVG && name in node)) {
      return newValue => {
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (node[name] !== newValue) {
            node[name] = newValue;
            if (newValue == null) {
              node.removeAttribute(name);
            }
          }
        }
      };
    }
    // in every other case, use the attribute node as it is
    // update only the value, set it as node only when/if needed
    else {
      let owner = false;
      const attribute = original.cloneNode(true);
      return newValue => {
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (attribute.value !== newValue) {
            if (newValue == null) {
              if (owner) {
                owner = false;
                node.removeAttributeNode(attribute);
              }
              attribute.value = newValue;
            } else {
              attribute.value = newValue;
              if (!owner) {
                owner = true;
                node.setAttributeNode(attribute);
              }
            }
          }
        }
      };
    }
  };

  // style or textareas don't accept HTML as content
  // it's pointless to transform or analyze anything
  // different from text there but it's worth checking
  // for possible defined intents.
  const setTextContent = node => {
    let oldValue;
    const textContent = value => {
      if (oldValue !== value) {
        oldValue = value;
        if (typeof value === 'object' && value) {
          if (isPromise_ish(value)) {
            value.then(textContent);
          } else if ('placeholder' in value) {
            invokeAtDistance(value, textContent);
          } else if ('text' in value) {
            textContent(String(value.text));
          } else if ('any' in value) {
            textContent(value.any);
          } else if ('html' in value) {
            textContent([].concat(value.html).join(''));
          } else if ('length' in value) {
            textContent(slice.call(value).join(''));
          } else {
            textContent(Intent.invoke(value, textContent));
          }
        } else {
          node.textContent = value == null ? '' : value;
        }
      }
    };
    return textContent;
  };

  var Updates = {create: create$1, find};

  // hyper.Components might need connected/disconnected notifications
  // used by components and their onconnect/ondisconnect callbacks.
  // When one of these callbacks is encountered,
  // the document starts being observed.
  let notObserving = true;
  function observe() {

    // when hyper.Component related DOM nodes
    // are appended or removed from the live tree
    // these might listen to connected/disconnected events
    // This utility is in charge of finding all components
    // involved in the DOM update/change and dispatch
    // related information to them
    const dispatchAll = (nodes, type) => {
      const event = new Event(type);
      const length = nodes.length;
      for (let i = 0; i < length; i++) {
        let node = nodes[i];
        if (node.nodeType === ELEMENT_NODE) {
          dispatchTarget(node, event);
        }
      }
    };

    // the way it's done is via the components weak set
    // and recursively looking for nested components too
    const dispatchTarget = (node, event) => {
      if (components.has(node)) {
        node.dispatchEvent(event);
      }

      /* istanbul ignore next */
      const children = node.children || getChildren(node);
      const length = children.length;
      for (let i = 0; i < length; i++) {
        dispatchTarget(children[i], event);
      }
    };

    // The MutationObserver is the best way to implement that
    // but there is a fallback to deprecated DOMNodeInserted/Removed
    // so that even older browsers/engines can help components life-cycle
    try {
      (new MutationObserver(records => {
        const length = records.length;
        for (let i = 0; i < length; i++) {
          let record = records[i];
          dispatchAll(record.removedNodes, DISCONNECTED);
          dispatchAll(record.addedNodes, CONNECTED);
        }
      })).observe(document, {subtree: true, childList: true});
    } catch(o_O) {
      document.addEventListener('DOMNodeRemoved', event => {
        dispatchAll([event.target], DISCONNECTED);
      }, false);
      document.addEventListener('DOMNodeInserted', event => {
        dispatchAll([event.target], CONNECTED);
      }, false);
    }
  }

  // a weak collection of contexts that
  // are already known to hyperHTML
  const bewitched = new WeakMap;

  // all unique template literals
  const templates = TemplateMap();

  // better known as hyper.bind(node), the render is
  // the main tag function in charge of fully upgrading
  // or simply updating, contexts used as hyperHTML targets.
  // The `this` context is either a regular DOM node or a fragment.
  function render(template) {
    const wicked = bewitched.get(this);
    if (wicked && wicked.template === unique(template)) {
      update$1.apply(wicked.updates, arguments);
    } else {
      upgrade.apply(this, arguments);
    }
    return this;
  }

  // an upgrade is in charge of collecting template info,
  // parse it once, if unknown, to map all interpolations
  // as single DOM callbacks, relate such template
  // to the current context, and render it after cleaning the context up
  function upgrade(template) {
    template = unique(template);
    const info =  templates.get(template) ||
                  createTemplate.call(this, template);
    const fragment = importNode(this.ownerDocument, info.fragment);
    const updates = Updates.create(fragment, info.paths);
    bewitched.set(this, {template, updates});
    update$1.apply(updates, arguments);
    this.textContent = '';
    this.appendChild(fragment);
  }

  // an update simply loops over all mapped DOM operations
  function update$1() {
    const length = arguments.length;
    for (let i = 1; i < length; i++) {
      this[i - 1](arguments[i]);
    }
  }

  // a template can be used to create a document fragment
  // aware of all interpolations and with a list
  // of paths used to find once those nodes that need updates,
  // no matter if these are attributes, text nodes, or regular one
  function createTemplate(template) {
    const paths = [];
    const html = template.join(UIDC).replace(SC_RE, SC_PLACE);
    const fragment = createFragment(this, html);
    Updates.find(fragment, paths, template.slice());
    const info = {fragment, paths};
    templates.set(template, info);
    return info;
  }

  // some node could be special though, like a custom element
  // with a self closing tag, which should work through these changes.
  const SC_RE = selfClosing;
  const SC_PLACE = ($0, $1, $2) => {
    return VOID_ELEMENTS.test($1) ? $0 : ('<' + $1 + $2 + '></' + $1 + '>');
  };

  // all wires used per each context
  const wires = new WeakMap;

  // A wire is a callback used as tag function
  // to lazily relate a generic object to a template literal.
  // hyper.wire(user)`<div id=user>${user.name}</div>`; => the div#user
  // This provides the ability to have a unique DOM structure
  // related to a unique JS object through a reusable template literal.
  // A wire can specify a type, as svg or html, and also an id
  // via html:id or :id convention. Such :id allows same JS objects
  // to be associated to different DOM structures accordingly with
  // the used template literal without losing previously rendered parts.
  const wire$1 = (obj, type) => obj == null ?
    content(type || 'html') :
    weakly(obj, type || 'html');

  // A wire content is a virtual reference to one or more nodes.
  // It's represented by either a DOM node, or an Array.
  // In both cases, the wire content role is to simply update
  // all nodes through the list of related callbacks.
  // In few words, a wire content is like an invisible parent node
  // in charge of updating its content like a bound element would do.
  const content = type => {
    let wire, container, content, template, updates;
    return function (statics) {
      statics = unique(statics);
      let setup = template !== statics;
      if (setup) {
        template = statics;
        content = fragment(document);
        container = type === 'svg' ?
          document.createElementNS(SVG_NAMESPACE, 'svg') :
          content;
        updates = render.bind(container);
      }
      updates.apply(null, arguments);
      if (setup) {
        if (type === 'svg') {
          append(content, slice.call(container.childNodes));
        }
        wire = wireContent(content);
      }
      return wire;
    };
  };

  // wires are weakly created through objects.
  // Each object can have multiple wires associated
  // and this is thanks to the type + :id feature.
  const weakly = (obj, type) => {
    const i = type.indexOf(':');
    let wire = wires.get(obj);
    let id = type;
    if (-1 < i) {
      id = type.slice(i + 1);
      type = type.slice(0, i) || 'html';
    }
    if (!wire) wires.set(obj, wire = {});
    return wire[id] || (wire[id] = content(type));
  };

  // a document fragment loses its nodes as soon
  // as it's appended into another node.
  // This would easily lose wired content
  // so that on a second render call, the parent
  // node wouldn't know which node was there
  // associated to the interpolation.
  // To prevent hyperHTML to forget about wired nodes,
  // these are either returned as Array or, if there's ony one entry,
  // as single referenced node that won't disappear from the fragment.
  // The initial fragment, at this point, would be used as unique reference.
  const wireContent = node => {
    const childNodes = node.childNodes;
    const length = childNodes.length;
    const wireNodes = [];
    for (let i = 0; i < length; i++) {
      let child = childNodes[i];
      if (
        child.nodeType === ELEMENT_NODE ||
        trim.call(child.textContent).length !== 0
      ) {
        wireNodes.push(child);
      }
    }
    return wireNodes.length === 1 ? wireNodes[0] : new Wire(wireNodes);
  };

  /*! (c) Andrea Giammarchi (ISC) */

  // all functions are self bound to the right context
  // you can do the following
  // const {bind, wire} = hyperHTML;
  // and use them right away: bind(node)`hello!`;
  const bind$1 = context => render.bind(context);
  const define$1 = Intent.define;

  hyper$1.Component = Component$1;
  hyper$1.bind = bind$1;
  hyper$1.define = define$1;
  hyper$1.diff = domdiff;
  hyper$1.hyper = hyper$1;
  hyper$1.wire = wire$1;

  // the wire content is the lazy defined
  // html or svg property of each hyper.Component
  setup(content);

  // by default, hyperHTML is a smart function
  // that "magically" understands what's the best
  // thing to do with passed arguments
  function hyper$1(HTML) {
    return arguments.length < 2 ?
      (HTML == null ?
        content('html') :
        (typeof HTML === 'string' ?
          hyper$1.wire(null, HTML) :
          ('raw' in HTML ?
            content('html')(HTML) :
            ('nodeType' in HTML ?
              hyper$1.bind(HTML) :
              weakly(HTML, 'html')
            )
          )
        )) :
      ('raw' in HTML ?
        content('html') : hyper$1.wire
      ).apply(null, arguments);
  }

  class SlideItem extends HTMLElement {
    constructor() {
      super();
      this._hasBeenConnected = false;
    }
    connectedCallback() {
      const slide = this.closest('preso-slide');
      if (!slide) throw Error(`${this.tagName} must be within a preso-slide`);
      if (this._hasBeenConnected) return;
      this._hasBeenConnected = true;
      this.firstConnected(slide);
    }
    firstConnected(slide) {
      // This should be overwritten
    }
  }

  var css$5 = "preso-video{display:inline-block;position:relative;opacity:.0001;will-change:opacity}.preso-video--show{opacity:1}.preso-video__video{display:block;width:100%;height:100%}";

  document.head.append(hyper$1`<style>${css$5}</style>`);

  class Video extends SlideItem {
    constructor() {
      super();
      this._video = hyper$1`<video class="preso-video__video"></video>`;
      this._video.preload = 'auto';
      this._playingListener = null;

      this._videoReady = new Promise((resolve, reject) => {
        this._video.addEventListener('canplaythrough', () => resolve());
        this._video.addEventListener('error', () => reject(Error('Video load failed')));
      });

      this._metaReady = new Promise(resolve => {
        this._video.addEventListener('loadedmetadata', () => resolve());
      });
    }
    async firstConnected(slide) {
      this.append(this._video);
      await slide.synchronize(this._videoReady);
      this.classList.add('preso-video--show');
    }
    async seekTo(time) {
      await this._metaReady;
      this._video.currentTime = time;
    }
    async play(timeUntil) {
      const slide = this.closest('preso-slide');

      await this._videoReady;

      if (!slide.transition) {
        this.seekTo(timeUntil || this._video.duration);
        return;
      }

      if (this._playingListener) {
        this._video.removeEventListener('timeupdate', this._playingListener);
      }

      if (timeUntil) {
        this._playingListener = () => {
          if (this._video.currentTime >= timeUntil) {
            this._video.pause();
          }
        };

        this._video.addEventListener('timeupdate', this._playingListener);
      }

      this._video.play();
    }
    loop() {
      this._video.loop = true;
      this.play();
    }
    attributeChangedCallback(name, oldVal, newVal) {
      this._video.setAttribute(name, newVal);
    }
  }

  Video.observedAttributes = [
    'width', 'height', 'src', 'crossorigin'
  ];

  const propMap$1 = new Map();
  propMap$1.set('crossorigin', 'crossOrigin');

  // Forwarded property accessors
  for (const attr of Video.observedAttributes) {
    const prop = propMap$1.get(attr) || attr;

    Object.defineProperty(Video.prototype, prop, {
      get() {
        this._video[prop];
      },
      set(val) {
        this._video[prop] = val;
      }
    });
  }

  customElements.define('preso-video', Video);

  var css$6 = "preso-code{display:block;position:relative;height:0}preso-code pre{max-height:100%;overflow:hidden;margin:0;position:relative;will-change:transform}preso-code .hljs{padding:0;background:none;font-family:Menlo,Monaco,\"Courier New\",monospace}.preso-code__highlights{opacity:.2}.preso-code__highlight{position:absolute;background:#fff;padding:10px;margin:-10px 0 0 -10px}.hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-tag,.hljs-subst{color:#f8f8f2}.hljs-strong,.hljs-emphasis{color:#a8a8a2}.hljs-bullet,.hljs-quote,.hljs-number,.hljs-regexp,.hljs-literal,.hljs-link{color:#ae81ff}.hljs-code,.hljs-title,.hljs-section,.hljs-selector-class{color:#a6e22e}.hljs-strong{font-weight:bold}.hljs-emphasis{font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-name,.hljs-attr{color:#f92672}.hljs-symbol,.hljs-attribute{color:#66d9ef}.hljs-params,.hljs-class .hljs-title{color:#f8f8f2}.hljs-string,.hljs-type,.hljs-built_in,.hljs-builtin-name,.hljs-selector-id,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-addition,.hljs-variable,.hljs-template-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}";

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var highlight = createCommonjsModule(function (module, exports) {
  /*
  Syntax highlighting with language autodetection.
  https://highlightjs.org/
  */

  (function(factory) {

    // Setup highlight.js for different environments. First is Node.js or
    // CommonJS.
    {
      factory(exports);
    }

  }(function(hljs) {
    // Convenience variables for build-in objects
    var ArrayProto = [],
        objectKeys = Object.keys;

    // Global internal variables used within the highlight.js library.
    var languages = {},
        aliases   = {};

    // Regular expressions used throughout the highlight.js library.
    var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
        languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
        fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

    var spanEndTag = '</span>';

    // Global options used when within external APIs. This is modified when
    // calling the `hljs.configure` function.
    var options = {
      classPrefix: 'hljs-',
      tabReplace: null,
      useBR: false,
      languages: undefined
    };


    /* Utility functions */

    function escape(value) {
      return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function tag(node) {
      return node.nodeName.toLowerCase();
    }

    function testRe(re, lexeme) {
      var match = re && re.exec(lexeme);
      return match && match.index === 0;
    }

    function isNotHighlighted(language) {
      return noHighlightRe.test(language);
    }

    function blockLanguage(block) {
      var i, match, length, _class;
      var classes = block.className + ' ';

      classes += block.parentNode ? block.parentNode.className : '';

      // language-* takes precedence over non-prefixed class names.
      match = languagePrefixRe.exec(classes);
      if (match) {
        return getLanguage(match[1]) ? match[1] : 'no-highlight';
      }

      classes = classes.split(/\s+/);

      for (i = 0, length = classes.length; i < length; i++) {
        _class = classes[i];

        if (isNotHighlighted(_class) || getLanguage(_class)) {
          return _class;
        }
      }
    }

    function inherit(parent) {  // inherit(parent, override_obj, override_obj, ...)
      var key;
      var result = {};
      var objects = Array.prototype.slice.call(arguments, 1);

      for (key in parent)
        result[key] = parent[key];
      objects.forEach(function(obj) {
        for (key in obj)
          result[key] = obj[key];
      });
      return result;
    }

    /* Stream merging */

    function nodeStream(node) {
      var result = [];
      (function _nodeStream(node, offset) {
        for (var child = node.firstChild; child; child = child.nextSibling) {
          if (child.nodeType === 3)
            offset += child.nodeValue.length;
          else if (child.nodeType === 1) {
            result.push({
              event: 'start',
              offset: offset,
              node: child
            });
            offset = _nodeStream(child, offset);
            // Prevent void elements from having an end tag that would actually
            // double them in the output. There are more void elements in HTML
            // but we list only those realistically expected in code display.
            if (!tag(child).match(/br|hr|img|input/)) {
              result.push({
                event: 'stop',
                offset: offset,
                node: child
              });
            }
          }
        }
        return offset;
      })(node, 0);
      return result;
    }

    function mergeStreams(original, highlighted, value) {
      var processed = 0;
      var result = '';
      var nodeStack = [];

      function selectStream() {
        if (!original.length || !highlighted.length) {
          return original.length ? original : highlighted;
        }
        if (original[0].offset !== highlighted[0].offset) {
          return (original[0].offset < highlighted[0].offset) ? original : highlighted;
        }

        /*
        To avoid starting the stream just before it should stop the order is
        ensured that original always starts first and closes last:

        if (event1 == 'start' && event2 == 'start')
          return original;
        if (event1 == 'start' && event2 == 'stop')
          return highlighted;
        if (event1 == 'stop' && event2 == 'start')
          return original;
        if (event1 == 'stop' && event2 == 'stop')
          return highlighted;

        ... which is collapsed to:
        */
        return highlighted[0].event === 'start' ? original : highlighted;
      }

      function open(node) {
        function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"';}
        result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
      }

      function close(node) {
        result += '</' + tag(node) + '>';
      }

      function render(event) {
        (event.event === 'start' ? open : close)(event.node);
      }

      while (original.length || highlighted.length) {
        var stream = selectStream();
        result += escape(value.substring(processed, stream[0].offset));
        processed = stream[0].offset;
        if (stream === original) {
          /*
          On any opening or closing tag of the original markup we first close
          the entire highlighted node stack, then render the original tag along
          with all the following original tags at the same offset and then
          reopen all the tags on the highlighted stack.
          */
          nodeStack.reverse().forEach(close);
          do {
            render(stream.splice(0, 1)[0]);
            stream = selectStream();
          } while (stream === original && stream.length && stream[0].offset === processed);
          nodeStack.reverse().forEach(open);
        } else {
          if (stream[0].event === 'start') {
            nodeStack.push(stream[0].node);
          } else {
            nodeStack.pop();
          }
          render(stream.splice(0, 1)[0]);
        }
      }
      return result + escape(value.substr(processed));
    }

    /* Initialization */

    function expand_mode(mode) {
      if (mode.variants && !mode.cached_variants) {
        mode.cached_variants = mode.variants.map(function(variant) {
          return inherit(mode, {variants: null}, variant);
        });
      }
      return mode.cached_variants || (mode.endsWithParent && [inherit(mode)]) || [mode];
    }

    function compileLanguage(language) {

      function reStr(re) {
          return (re && re.source) || re;
      }

      function langRe(value, global) {
        return new RegExp(
          reStr(value),
          'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
        );
      }

      function compileMode(mode, parent) {
        if (mode.compiled)
          return;
        mode.compiled = true;

        mode.keywords = mode.keywords || mode.beginKeywords;
        if (mode.keywords) {
          var compiled_keywords = {};

          var flatten = function(className, str) {
            if (language.case_insensitive) {
              str = str.toLowerCase();
            }
            str.split(' ').forEach(function(kw) {
              var pair = kw.split('|');
              compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
            });
          };

          if (typeof mode.keywords === 'string') { // string
            flatten('keyword', mode.keywords);
          } else {
            objectKeys(mode.keywords).forEach(function (className) {
              flatten(className, mode.keywords[className]);
            });
          }
          mode.keywords = compiled_keywords;
        }
        mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

        if (parent) {
          if (mode.beginKeywords) {
            mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
          }
          if (!mode.begin)
            mode.begin = /\B|\b/;
          mode.beginRe = langRe(mode.begin);
          if (mode.endSameAsBegin)
            mode.end = mode.begin;
          if (!mode.end && !mode.endsWithParent)
            mode.end = /\B|\b/;
          if (mode.end)
            mode.endRe = langRe(mode.end);
          mode.terminator_end = reStr(mode.end) || '';
          if (mode.endsWithParent && parent.terminator_end)
            mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
        }
        if (mode.illegal)
          mode.illegalRe = langRe(mode.illegal);
        if (mode.relevance == null)
          mode.relevance = 1;
        if (!mode.contains) {
          mode.contains = [];
        }
        mode.contains = Array.prototype.concat.apply([], mode.contains.map(function(c) {
          return expand_mode(c === 'self' ? mode : c)
        }));
        mode.contains.forEach(function(c) {compileMode(c, mode);});

        if (mode.starts) {
          compileMode(mode.starts, parent);
        }

        var terminators =
          mode.contains.map(function(c) {
            return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
          })
          .concat([mode.terminator_end, mode.illegal])
          .map(reStr)
          .filter(Boolean);
        mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};
      }

      compileMode(language);
    }

    /*
    Core highlighting function. Accepts a language name, or an alias, and a
    string with the code to highlight. Returns an object with the following
    properties:

    - relevance (int)
    - value (an HTML string with highlighting markup)

    */
    function highlight(name, value, ignore_illegals, continuation) {

      function escapeRe(value) {
        return new RegExp(value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
      }

      function subMode(lexeme, mode) {
        var i, length;

        for (i = 0, length = mode.contains.length; i < length; i++) {
          if (testRe(mode.contains[i].beginRe, lexeme)) {
            if (mode.contains[i].endSameAsBegin) {
              mode.contains[i].endRe = escapeRe( mode.contains[i].beginRe.exec(lexeme)[0] );
            }
            return mode.contains[i];
          }
        }
      }

      function endOfMode(mode, lexeme) {
        if (testRe(mode.endRe, lexeme)) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
        if (mode.endsWithParent) {
          return endOfMode(mode.parent, lexeme);
        }
      }

      function isIllegal(lexeme, mode) {
        return !ignore_illegals && testRe(mode.illegalRe, lexeme);
      }

      function keywordMatch(mode, match) {
        var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
        return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
      }

      function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
        var classPrefix = noPrefix ? '' : options.classPrefix,
            openSpan    = '<span class="' + classPrefix,
            closeSpan   = leaveOpen ? '' : spanEndTag;

        openSpan += classname + '">';

        return openSpan + insideSpan + closeSpan;
      }

      function processKeywords() {
        var keyword_match, last_index, match, result;

        if (!top.keywords)
          return escape(mode_buffer);

        result = '';
        last_index = 0;
        top.lexemesRe.lastIndex = 0;
        match = top.lexemesRe.exec(mode_buffer);

        while (match) {
          result += escape(mode_buffer.substring(last_index, match.index));
          keyword_match = keywordMatch(top, match);
          if (keyword_match) {
            relevance += keyword_match[1];
            result += buildSpan(keyword_match[0], escape(match[0]));
          } else {
            result += escape(match[0]);
          }
          last_index = top.lexemesRe.lastIndex;
          match = top.lexemesRe.exec(mode_buffer);
        }
        return result + escape(mode_buffer.substr(last_index));
      }

      function processSubLanguage() {
        var explicit = typeof top.subLanguage === 'string';
        if (explicit && !languages[top.subLanguage]) {
          return escape(mode_buffer);
        }

        var result = explicit ?
                     highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                     highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

        // Counting embedded language score towards the host language may be disabled
        // with zeroing the containing mode relevance. Usecase in point is Markdown that
        // allows XML everywhere and makes every XML snippet to have a much larger Markdown
        // score.
        if (top.relevance > 0) {
          relevance += result.relevance;
        }
        if (explicit) {
          continuations[top.subLanguage] = result.top;
        }
        return buildSpan(result.language, result.value, false, true);
      }

      function processBuffer() {
        result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
        mode_buffer = '';
      }

      function startNewMode(mode) {
        result += mode.className? buildSpan(mode.className, '', true): '';
        top = Object.create(mode, {parent: {value: top}});
      }

      function processLexeme(buffer, lexeme) {

        mode_buffer += buffer;

        if (lexeme == null) {
          processBuffer();
          return 0;
        }

        var new_mode = subMode(lexeme, top);
        if (new_mode) {
          if (new_mode.skip) {
            mode_buffer += lexeme;
          } else {
            if (new_mode.excludeBegin) {
              mode_buffer += lexeme;
            }
            processBuffer();
            if (!new_mode.returnBegin && !new_mode.excludeBegin) {
              mode_buffer = lexeme;
            }
          }
          startNewMode(new_mode, lexeme);
          return new_mode.returnBegin ? 0 : lexeme.length;
        }

        var end_mode = endOfMode(top, lexeme);
        if (end_mode) {
          var origin = top;
          if (origin.skip) {
            mode_buffer += lexeme;
          } else {
            if (!(origin.returnEnd || origin.excludeEnd)) {
              mode_buffer += lexeme;
            }
            processBuffer();
            if (origin.excludeEnd) {
              mode_buffer = lexeme;
            }
          }
          do {
            if (top.className) {
              result += spanEndTag;
            }
            if (!top.skip && !top.subLanguage) {
              relevance += top.relevance;
            }
            top = top.parent;
          } while (top !== end_mode.parent);
          if (end_mode.starts) {
            if (end_mode.endSameAsBegin) {
              end_mode.starts.endRe = end_mode.endRe;
            }
            startNewMode(end_mode.starts, '');
          }
          return origin.returnEnd ? 0 : lexeme.length;
        }

        if (isIllegal(lexeme, top))
          throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

        /*
        Parser should not reach this point as all types of lexemes should be caught
        earlier, but if it does due to some bug make sure it advances at least one
        character forward to prevent infinite looping.
        */
        mode_buffer += lexeme;
        return lexeme.length || 1;
      }

      var language = getLanguage(name);
      if (!language) {
        throw new Error('Unknown language: "' + name + '"');
      }

      compileLanguage(language);
      var top = continuation || language;
      var continuations = {}; // keep continuations for sub-languages
      var result = '', current;
      for(current = top; current !== language; current = current.parent) {
        if (current.className) {
          result = buildSpan(current.className, '', true) + result;
        }
      }
      var mode_buffer = '';
      var relevance = 0;
      try {
        var match, count, index = 0;
        while (true) {
          top.terminators.lastIndex = index;
          match = top.terminators.exec(value);
          if (!match)
            break;
          count = processLexeme(value.substring(index, match.index), match[0]);
          index = match.index + count;
        }
        processLexeme(value.substr(index));
        for(current = top; current.parent; current = current.parent) { // close dangling modes
          if (current.className) {
            result += spanEndTag;
          }
        }
        return {
          relevance: relevance,
          value: result,
          language: name,
          top: top
        };
      } catch (e) {
        if (e.message && e.message.indexOf('Illegal') !== -1) {
          return {
            relevance: 0,
            value: escape(value)
          };
        } else {
          throw e;
        }
      }
    }

    /*
    Highlighting with language detection. Accepts a string with the code to
    highlight. Returns an object with the following properties:

    - language (detected language)
    - relevance (int)
    - value (an HTML string with highlighting markup)
    - second_best (object with the same structure for second-best heuristically
      detected language, may be absent)

    */
    function highlightAuto(text, languageSubset) {
      languageSubset = languageSubset || options.languages || objectKeys(languages);
      var result = {
        relevance: 0,
        value: escape(text)
      };
      var second_best = result;
      languageSubset.filter(getLanguage).filter(autoDetection).forEach(function(name) {
        var current = highlight(name, text, false);
        current.language = name;
        if (current.relevance > second_best.relevance) {
          second_best = current;
        }
        if (current.relevance > result.relevance) {
          second_best = result;
          result = current;
        }
      });
      if (second_best.language) {
        result.second_best = second_best;
      }
      return result;
    }

    /*
    Post-processing of the highlighted markup:

    - replace TABs with something more useful
    - replace real line-breaks with '<br>' for non-pre containers

    */
    function fixMarkup(value) {
      return !(options.tabReplace || options.useBR)
        ? value
        : value.replace(fixMarkupRe, function(match, p1) {
            if (options.useBR && match === '\n') {
              return '<br>';
            } else if (options.tabReplace) {
              return p1.replace(/\t/g, options.tabReplace);
            }
            return '';
        });
    }

    function buildClassName(prevClassName, currentLang, resultLang) {
      var language = currentLang ? aliases[currentLang] : resultLang,
          result   = [prevClassName.trim()];

      if (!prevClassName.match(/\bhljs\b/)) {
        result.push('hljs');
      }

      if (prevClassName.indexOf(language) === -1) {
        result.push(language);
      }

      return result.join(' ').trim();
    }

    /*
    Applies highlighting to a DOM node containing code. Accepts a DOM node and
    two optional parameters for fixMarkup.
    */
    function highlightBlock(block) {
      var node, originalStream, result, resultNode, text;
      var language = blockLanguage(block);

      if (isNotHighlighted(language))
          return;

      if (options.useBR) {
        node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
        node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
      } else {
        node = block;
      }
      text = node.textContent;
      result = language ? highlight(language, text, true) : highlightAuto(text);

      originalStream = nodeStream(node);
      if (originalStream.length) {
        resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
        resultNode.innerHTML = result.value;
        result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
      }
      result.value = fixMarkup(result.value);

      block.innerHTML = result.value;
      block.className = buildClassName(block.className, language, result.language);
      block.result = {
        language: result.language,
        re: result.relevance
      };
      if (result.second_best) {
        block.second_best = {
          language: result.second_best.language,
          re: result.second_best.relevance
        };
      }
    }

    /*
    Updates highlight.js global options with values passed in the form of an object.
    */
    function configure(user_options) {
      options = inherit(options, user_options);
    }

    /*
    Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
    */
    function initHighlighting() {
      if (initHighlighting.called)
        return;
      initHighlighting.called = true;

      var blocks = document.querySelectorAll('pre code');
      ArrayProto.forEach.call(blocks, highlightBlock);
    }

    /*
    Attaches highlighting to the page load event.
    */
    function initHighlightingOnLoad() {
      addEventListener('DOMContentLoaded', initHighlighting, false);
      addEventListener('load', initHighlighting, false);
    }

    function registerLanguage(name, language) {
      var lang = languages[name] = language(hljs);
      if (lang.aliases) {
        lang.aliases.forEach(function(alias) {aliases[alias] = name;});
      }
    }

    function listLanguages() {
      return objectKeys(languages);
    }

    function getLanguage(name) {
      name = (name || '').toLowerCase();
      return languages[name] || languages[aliases[name]];
    }

    function autoDetection(name) {
      var lang = getLanguage(name);
      return lang && !lang.disableAutodetect;
    }

    /* Interface definition */

    hljs.highlight = highlight;
    hljs.highlightAuto = highlightAuto;
    hljs.fixMarkup = fixMarkup;
    hljs.highlightBlock = highlightBlock;
    hljs.configure = configure;
    hljs.initHighlighting = initHighlighting;
    hljs.initHighlightingOnLoad = initHighlightingOnLoad;
    hljs.registerLanguage = registerLanguage;
    hljs.listLanguages = listLanguages;
    hljs.getLanguage = getLanguage;
    hljs.autoDetection = autoDetection;
    hljs.inherit = inherit;

    // Common regexps
    hljs.IDENT_RE = '[a-zA-Z]\\w*';
    hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
    hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
    hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
    hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
    hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

    // Common modes
    hljs.BACKSLASH_ESCAPE = {
      begin: '\\\\[\\s\\S]', relevance: 0
    };
    hljs.APOS_STRING_MODE = {
      className: 'string',
      begin: '\'', end: '\'',
      illegal: '\\n',
      contains: [hljs.BACKSLASH_ESCAPE]
    };
    hljs.QUOTE_STRING_MODE = {
      className: 'string',
      begin: '"', end: '"',
      illegal: '\\n',
      contains: [hljs.BACKSLASH_ESCAPE]
    };
    hljs.PHRASAL_WORDS_MODE = {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    };
    hljs.COMMENT = function (begin, end, inherits) {
      var mode = hljs.inherit(
        {
          className: 'comment',
          begin: begin, end: end,
          contains: []
        },
        inherits || {}
      );
      mode.contains.push(hljs.PHRASAL_WORDS_MODE);
      mode.contains.push({
        className: 'doctag',
        begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
        relevance: 0
      });
      return mode;
    };
    hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
    hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
    hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
    hljs.NUMBER_MODE = {
      className: 'number',
      begin: hljs.NUMBER_RE,
      relevance: 0
    };
    hljs.C_NUMBER_MODE = {
      className: 'number',
      begin: hljs.C_NUMBER_RE,
      relevance: 0
    };
    hljs.BINARY_NUMBER_MODE = {
      className: 'number',
      begin: hljs.BINARY_NUMBER_RE,
      relevance: 0
    };
    hljs.CSS_NUMBER_MODE = {
      className: 'number',
      begin: hljs.NUMBER_RE + '(' +
        '%|em|ex|ch|rem'  +
        '|vw|vh|vmin|vmax' +
        '|cm|mm|in|pt|pc|px' +
        '|deg|grad|rad|turn' +
        '|s|ms' +
        '|Hz|kHz' +
        '|dpi|dpcm|dppx' +
        ')?',
      relevance: 0
    };
    hljs.REGEXP_MODE = {
      className: 'regexp',
      begin: /\//, end: /\/[gimuy]*/,
      illegal: /\n/,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        {
          begin: /\[/, end: /\]/,
          relevance: 0,
          contains: [hljs.BACKSLASH_ESCAPE]
        }
      ]
    };
    hljs.TITLE_MODE = {
      className: 'title',
      begin: hljs.IDENT_RE,
      relevance: 0
    };
    hljs.UNDERSCORE_TITLE_MODE = {
      className: 'title',
      begin: hljs.UNDERSCORE_IDENT_RE,
      relevance: 0
    };
    hljs.METHOD_GUARD = {
      // excludes method names from keyword processing
      begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
      relevance: 0
    };

    return hljs;
  }));
  });

  var javascript = function(hljs) {
    var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
    var KEYWORDS = {
      keyword:
        'in of if for while finally var new function do return void else break catch ' +
        'instanceof with throw case default try this switch continue typeof delete ' +
        'let yield const export super debugger as async await static ' +
        // ECMAScript 6 modules import
        'import from as'
      ,
      literal:
        'true false null undefined NaN Infinity',
      built_in:
        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
        'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
        'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
        'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
        'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
        'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
        'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
        'Promise'
    };
    var NUMBER = {
      className: 'number',
      variants: [
        { begin: '\\b(0[bB][01]+)' },
        { begin: '\\b(0[oO][0-7]+)' },
        { begin: hljs.C_NUMBER_RE }
      ],
      relevance: 0
    };
    var SUBST = {
      className: 'subst',
      begin: '\\$\\{', end: '\\}',
      keywords: KEYWORDS,
      contains: []  // defined later
    };
    var TEMPLATE_STRING = {
      className: 'string',
      begin: '`', end: '`',
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ]
    };
    SUBST.contains = [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      TEMPLATE_STRING,
      NUMBER,
      hljs.REGEXP_MODE
    ];
    var PARAMS_CONTAINS = SUBST.contains.concat([
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]);

    return {
      aliases: ['js', 'jsx'],
      keywords: KEYWORDS,
      contains: [
        {
          className: 'meta',
          relevance: 10,
          begin: /^\s*['"]use (strict|asm)['"]/
        },
        {
          className: 'meta',
          begin: /^#!/, end: /$/
        },
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        TEMPLATE_STRING,
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        NUMBER,
        { // object attr container
          begin: /[{,]\s*/, relevance: 0,
          contains: [
            {
              begin: IDENT_RE + '\\s*:', returnBegin: true,
              relevance: 0,
              contains: [{className: 'attr', begin: IDENT_RE, relevance: 0}]
            }
          ]
        },
        { // "value" container
          begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
          keywords: 'return throw case',
          contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.REGEXP_MODE,
            {
              className: 'function',
              begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
              end: '\\s*=>',
              contains: [
                {
                  className: 'params',
                  variants: [
                    {
                      begin: IDENT_RE
                    },
                    {
                      begin: /\(\s*\)/,
                    },
                    {
                      begin: /\(/, end: /\)/,
                      excludeBegin: true, excludeEnd: true,
                      keywords: KEYWORDS,
                      contains: PARAMS_CONTAINS
                    }
                  ]
                }
              ]
            },
            { // E4X / JSX
              begin: /</, end: /(\/\w+|\w+\/)>/,
              subLanguage: 'xml',
              contains: [
                {begin: /<\w+\s*\/>/, skip: true},
                {
                  begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true,
                  contains: [
                    {begin: /<\w+\s*\/>/, skip: true},
                    'self'
                  ]
                }
              ]
            }
          ],
          relevance: 0
        },
        {
          className: 'function',
          beginKeywords: 'function', end: /\{/, excludeEnd: true,
          contains: [
            hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE}),
            {
              className: 'params',
              begin: /\(/, end: /\)/,
              excludeBegin: true,
              excludeEnd: true,
              contains: PARAMS_CONTAINS
            }
          ],
          illegal: /\[|%/
        },
        {
          begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        },
        hljs.METHOD_GUARD,
        { // ES6 class
          className: 'class',
          beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
          illegal: /[:"\[\]]/,
          contains: [
            {beginKeywords: 'extends'},
            hljs.UNDERSCORE_TITLE_MODE
          ]
        },
        {
          beginKeywords: 'constructor', end: /\{/, excludeEnd: true
        }
      ],
      illegal: /#(?!!)/
    };
  };

  var xml = function(hljs) {
    var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
    var TAG_INTERNALS = {
      endsWithParent: true,
      illegal: /</,
      relevance: 0,
      contains: [
        {
          className: 'attr',
          begin: XML_IDENT_RE,
          relevance: 0
        },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: 'string',
              endsParent: true,
              variants: [
                {begin: /"/, end: /"/},
                {begin: /'/, end: /'/},
                {begin: /[^\s"'=<>`]+/}
              ]
            }
          ]
        }
      ]
    };
    return {
      aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
      case_insensitive: true,
      contains: [
        {
          className: 'meta',
          begin: '<!DOCTYPE', end: '>',
          relevance: 10,
          contains: [{begin: '\\[', end: '\\]'}]
        },
        hljs.COMMENT(
          '<!--',
          '-->',
          {
            relevance: 10
          }
        ),
        {
          begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
          relevance: 10
        },
        {
          className: 'meta',
          begin: /<\?xml/, end: /\?>/, relevance: 10
        },
        {
          begin: /<\?(php)?/, end: /\?>/,
          subLanguage: 'php',
          contains: [
            // We don't want the php closing tag ?> to close the PHP block when
            // inside any of the following blocks:
            {begin: '/\\*', end: '\\*/', skip: true},
            {begin: 'b"', end: '"', skip: true},
            {begin: 'b\'', end: '\'', skip: true},
            hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null, className: null, contains: null, skip: true}),
            hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null, className: null, contains: null, skip: true})
          ]
        },
        {
          className: 'tag',
          /*
          The lookahead pattern (?=...) ensures that 'begin' only matches
          '<style' as a single word, followed by a whitespace or an
          ending braket. The '$' is needed for the lexeme to be recognized
          by hljs.subMode() that tests lexemes outside the stream.
          */
          begin: '<style(?=\\s|>|$)', end: '>',
          keywords: {name: 'style'},
          contains: [TAG_INTERNALS],
          starts: {
            end: '</style>', returnEnd: true,
            subLanguage: ['css', 'xml']
          }
        },
        {
          className: 'tag',
          // See the comment in the <style tag about the lookahead pattern
          begin: '<script(?=\\s|>|$)', end: '>',
          keywords: {name: 'script'},
          contains: [TAG_INTERNALS],
          starts: {
            end: '\<\/script\>', returnEnd: true,
            subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
          }
        },
        {
          className: 'tag',
          begin: '</?', end: '/?>',
          contains: [
            {
              className: 'name', begin: /[^\/><\s]+/, relevance: 0
            },
            TAG_INTERNALS
          ]
        }
      ]
    };
  };

  highlight.registerLanguage('javascript', javascript);
  highlight.registerLanguage('xml', xml);

  document.head.append(hyperHTML`<style>${css$6}</style>`);

  function normalizeIndent(str) {
    // trim empty lines from start & end
    str = str.replace(/^\s?\n|\n\s?$/g, '');

    const lines = str.split('\n');
    const indentLen = /^\s*/.exec(lines[0])[0].length;
    return lines.map(l => l.slice(indentLen)).join('\n');
  }

  class Code extends SlideItem {
    constructor() {
      super();
      this._content = Promise.resolve('');
      this._updateQueued = false;

      this._children = [
        this._highlights = hyperHTML`<div class="preso-code__highlights"></div>`,
        hyperHTML`<pre>${this._code = hyperHTML`<code class="hljs"></code>`}</pre>`
      ];
    }
    async firstConnected() {
      if (this.textContent.trim()) {
        // Runs the setter specified below
        this.textContent = this.textContent;
        this.innerHTML = '';
      }
      this.append(...this._children);
      this._queueUpdate();
    }
    attributeChangedCallback(name, oldVal, newVal) {
      if (name == 'src') {
        this._content = fetch(newVal).then(r => r.text());
      }
      if (this._hasBeenConnected) this._queueUpdate();
    }
    _queueUpdate() {
      if (this._updateQueued) return;
      this._updateQueued = true;

      const slide = this.closest('preso-slide');

      slide.synchronize((async () => {
        // allow multiple attrs to be changed
        await frame();
        this._updateQueued = false;
        await this._update();
      })());
    }
    async _update() {
      // Figure out language
      let lang = 'plain';

      if (this.codeLang) {
        lang = this.codeLang;
      }
      else if (this.src) {
        const result = /\.([^.]+)$/.exec(this.src);
        if (result[1]) lang = result[1];
      }

      const lines = (await this._content).split('\n');
      const start = this.start || 1;
      const end = (this.end || lines.length);
      // Start begins at 1, so deduct 1
      const content = lines.slice(start - 1, end).join('\n');
      const startHeight = window.getComputedStyle(this).height;
      let endHeight;

      // Set code
      // Are we just hiding existing code?
      // TODO: this shouldn't happen if lang has changed
      if (this.textContent.startsWith(content)) {
        const oldContent = this._code.innerHTML;
        this._code.textContent = content;

        this.style.height = 'auto';
        endHeight = window.getComputedStyle(this).height;
        this._code.innerHTML = oldContent;
      }
      else {
        if (lang == 'plain') {
          this._code.textContent = content;
        }
        else {
          const { value } = highlight.highlight(lang, content);
          this._code.innerHTML = value;
        }

        this.style.height = 'auto';
        endHeight = window.getComputedStyle(this).height;
        this.style.height = startHeight;
      }

      // Transition
      const slide = this.closest('preso-slide');

      if (!slide.transition) {
        this.style.height = 'auto';
        return;
      }

      slide.synchronize().then(() => {
        this.style.height = endHeight;

        this.animate([
          {height: startHeight},
          {height: endHeight}
        ], {
          duration: 300,
          easing: easeOutQuad
        });
      });

    }
    show(start, end) {
      this.start = start;
      this.end = end;
    }
    async _animateChars(range) {
      const slide = this.closest('preso-slide');

      await slide.synchronize();

      // Convert string to range
      if (typeof range == 'string') {
        range = findText(range, { root: this._code });
      }

      const root = range.commonAncestorContainer;
      const ittr = document.createNodeIterator(root, NodeFilter.SHOW_TEXT);
      const textNodes = [];
      const toAnimate = [];

      // Gathering the nodes first to avoid weird bugs where
      // stuff's changing as edits are made.
      while (true) {
        const textNode = ittr.nextNode();
        if (!textNode) break;
        if (range.intersectsNode(textNode)) {
          textNodes.push(textNode);
        }
      }

      for (const textNode of textNodes) {
        const text = textNode.nodeValue;
        const replacement = document.createDocumentFragment();

        let i = 0;
        let end = text.length;

        if (range.startContainer == textNode) {
          replacement.append(text.slice(0, range.startOffset));
          i = range.startOffset;
        }

        if (range.endContainer == textNode) {
          end = range.endOffset;
        }

        for (; i < end; i++) {
          const span = hyperHTML`<span class="preso-code__char">${text[i]}</span>`;
          toAnimate.push(span);
          replacement.append(span);
        }

        if (range.endContainer == textNode) {
          replacement.append(text.slice(range.endOffset));
        }

        textNode.replaceWith(replacement);
      }

      return toAnimate;
    }
    set textContent(val) {
      this._content = Promise.resolve(normalizeIndent(val));
      this._queueUpdate();
    }
    get textContent() {
      return super.textContent;
    }
    highlight(range) {
      const div = hyperHTML`<div class="preso-code__highlight"></div>`;
      const slide = this.closest('preso-slide');

      this._highlights.append(div);

      slide.synchronize().then(() => {
        // Convert string to range
        if (typeof range == 'string') {
          range = findText(range, {root: this._code});
        }

        const rect = getRelativeBoundingClientRect(this, range);

        Object.assign(div.style, {
          width: rect.width + 'px',
          height: rect.height + 'px',
          top: rect.top + 'px',
          left: rect.left + 'px'
        });

        div.animate([
          { transform: 'scaleX(0)' },
          { transform: '' }
        ], {
          duration: 300 * slide.transition,
          easing: easeOutQuint
        });
      });

      return div;
    }
    async backspace(range) {
      const els = await this._animateChars(range);
      const slide = this.closest('preso-slide');

      for (const [i, el] of els.reverse().entries()) {
        setTimeout(() => {
          el.style.display = 'none';
        }, 70 * i * slide.transition);
      }

      return wait(els.length * 70);
    }
    async type(range) {
      const els = await this._animateChars(range);
      const slide = this.closest('preso-slide');
      if (!slide.transition) return;

      let delay = 0;

      for (const el of els) {
        delay += Math.pow(Math.random(), 2) * 150 + 20;
        el.style.display = 'none';
        setTimeout(() => {
          el.style.display = '';
        }, delay);
      }

      return wait(delay);
    }
  }

  const numberAttrs$1 = ['start', 'end'];
  const reflectAttrs = ['src', 'code-lang'];

  Code.observedAttributes = [...numberAttrs$1, ...reflectAttrs];

  for (const attr of numberAttrs$1) {
    const prop = attr.replace(/-\w/g, match => match.slice(1).toUpperCase());

    Object.defineProperty(Code.prototype, prop, {
      get() {
        return Number(this.getAttribute(attr));
      },
      set(val) {
        this.setAttribute(attr, Number(val));
      }
    });
  }

  for (const attr of reflectAttrs) {
    const prop = attr.replace(/-\w/g, match => match.slice(1).toUpperCase());

    Object.defineProperty(Code.prototype, prop, {
      get() {
        return this.getAttribute(attr);
      },
      set(val) {
        this.setAttribute(attr, val);
      }
    });
  }

  customElements.define('preso-code', Code);

  var TweenLite = createCommonjsModule(function (module) {
  /*!
   * VERSION: 1.20.5
   * DATE: 2018-05-21
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   * 
   * @author: Jack Doyle, jack@greensock.com
   */
  (function(window, moduleName) {
  		var _exports = {},
  			_doc = window.document,
  			_globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
  		if (_globals.TweenLite) {
  			return _globals.TweenLite; //in case the core set of classes is already loaded, don't instantiate twice.
  		}
  		var _namespace = function(ns) {
  				var a = ns.split("."),
  					p = _globals, i;
  				for (i = 0; i < a.length; i++) {
  					p[a[i]] = p = p[a[i]] || {};
  				}
  				return p;
  			},
  			gs = _namespace("com.greensock"),
  			_tinyNum = 0.0000000001,
  			_slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
  				var b = [],
  					l = a.length,
  					i;
  				for (i = 0; i !== l; b.push(a[i++])) {}
  				return b;
  			},
  			_emptyFunc = function() {},
  			_isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
  				var toString = Object.prototype.toString,
  					array = toString.call([]);
  				return function(obj) {
  					return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
  				};
  			}()),
  			a, i, p, _ticker, _tickerActive,
  			_defLookup = {},

  			/**
  			 * @constructor
  			 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
  			 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
  			 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
  			 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
  			 *
  			 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
  			 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
  			 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
  			 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
  			 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
  			 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
  			 * sandbox the banner one like:
  			 *
  			 * <script>
  			 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
  			 * </script>
  			 * <script src="js/greensock/v1.7/TweenMax.js"></script>
  			 * <script>
  			 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
  			 * </script>
  			 * <script src="js/greensock/v1.6/TweenMax.js"></script>
  			 * <script>
  			 *     gs.TweenLite.to(...); //would use v1.7
  			 *     TweenLite.to(...); //would use v1.6
  			 * </script>
  			 *
  			 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
  			 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
  			 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
  			 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
  			 */
  			Definition = function(ns, dependencies, func, global) {
  				this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
  				_defLookup[ns] = this;
  				this.gsClass = null;
  				this.func = func;
  				var _classes = [];
  				this.check = function(init) {
  					var i = dependencies.length,
  						missing = i,
  						cur, a, n, cl;
  					while (--i > -1) {
  						if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
  							_classes[i] = cur.gsClass;
  							missing--;
  						} else if (init) {
  							cur.sc.push(this);
  						}
  					}
  					if (missing === 0 && func) {
  						a = ("com.greensock." + ns).split(".");
  						n = a.pop();
  						cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

  						//exports to multiple environments
  						if (global) {
  							_globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
  							if (module.exports) { //node
  								if (ns === moduleName) {
  									module.exports = _exports[moduleName] = cl;
  									for (i in _exports) {
  										cl[i] = _exports[i];
  									}
  								} else if (_exports[moduleName]) {
  									_exports[moduleName][n] = cl;
  								}
  							}
  						}
  						for (i = 0; i < this.sc.length; i++) {
  							this.sc[i].check();
  						}
  					}
  				};
  				this.check(true);
  			},

  			//used to create Definition instances (which basically registers a class that has dependencies).
  			_gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
  				return new Definition(ns, dependencies, func, global);
  			},

  			//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
  			_class = gs._class = function(ns, func, global) {
  				func = func || function() {};
  				_gsDefine(ns, [], function(){ return func; }, global);
  				return func;
  			};

  		_gsDefine.globals = _globals;



  /*
   * ----------------------------------------------------------------
   * Ease
   * ----------------------------------------------------------------
   */
  		var _baseParams = [0, 0, 1, 1],
  			Ease = _class("easing.Ease", function(func, extraParams, type, power) {
  				this._func = func;
  				this._type = type || 0;
  				this._power = power || 0;
  				this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
  			}, true),
  			_easeMap = Ease.map = {},
  			_easeReg = Ease.register = function(ease, names, types, create) {
  				var na = names.split(","),
  					i = na.length,
  					ta = (types || "easeIn,easeOut,easeInOut").split(","),
  					e, name, j, type;
  				while (--i > -1) {
  					name = na[i];
  					e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
  					j = ta.length;
  					while (--j > -1) {
  						type = ta[j];
  						_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
  					}
  				}
  			};

  		p = Ease.prototype;
  		p._calcEnd = false;
  		p.getRatio = function(p) {
  			if (this._func) {
  				this._params[0] = p;
  				return this._func.apply(null, this._params);
  			}
  			var t = this._type,
  				pw = this._power,
  				r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
  			if (pw === 1) {
  				r *= r;
  			} else if (pw === 2) {
  				r *= r * r;
  			} else if (pw === 3) {
  				r *= r * r * r;
  			} else if (pw === 4) {
  				r *= r * r * r * r;
  			}
  			return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
  		};

  		//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
  		a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
  		i = a.length;
  		while (--i > -1) {
  			p = a[i]+",Power"+i;
  			_easeReg(new Ease(null,null,1,i), p, "easeOut", true);
  			_easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
  			_easeReg(new Ease(null,null,3,i), p, "easeInOut");
  		}
  		_easeMap.linear = gs.easing.Linear.easeIn;
  		_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


  /*
   * ----------------------------------------------------------------
   * EventDispatcher
   * ----------------------------------------------------------------
   */
  		var EventDispatcher = _class("events.EventDispatcher", function(target) {
  			this._listeners = {};
  			this._eventTarget = target || this;
  		});
  		p = EventDispatcher.prototype;

  		p.addEventListener = function(type, callback, scope, useParam, priority) {
  			priority = priority || 0;
  			var list = this._listeners[type],
  				index = 0,
  				listener, i;
  			if (this === _ticker && !_tickerActive) {
  				_ticker.wake();
  			}
  			if (list == null) {
  				this._listeners[type] = list = [];
  			}
  			i = list.length;
  			while (--i > -1) {
  				listener = list[i];
  				if (listener.c === callback && listener.s === scope) {
  					list.splice(i, 1);
  				} else if (index === 0 && listener.pr < priority) {
  					index = i + 1;
  				}
  			}
  			list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
  		};

  		p.removeEventListener = function(type, callback) {
  			var list = this._listeners[type], i;
  			if (list) {
  				i = list.length;
  				while (--i > -1) {
  					if (list[i].c === callback) {
  						list.splice(i, 1);
  						return;
  					}
  				}
  			}
  		};

  		p.dispatchEvent = function(type) {
  			var list = this._listeners[type],
  				i, t, listener;
  			if (list) {
  				i = list.length;
  				if (i > 1) { 
  					list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
  				}
  				t = this._eventTarget;
  				while (--i > -1) {
  					listener = list[i];
  					if (listener) {
  						if (listener.up) {
  							listener.c.call(listener.s || t, {type:type, target:t});
  						} else {
  							listener.c.call(listener.s || t);
  						}
  					}
  				}
  			}
  		};


  /*
   * ----------------------------------------------------------------
   * Ticker
   * ----------------------------------------------------------------
   */
   		var _reqAnimFrame = window.requestAnimationFrame,
  			_cancelAnimFrame = window.cancelAnimationFrame,
  			_getTime = Date.now || function() {return new Date().getTime();},
  			_lastUpdate = _getTime();

  		//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
  		a = ["ms","moz","webkit","o"];
  		i = a.length;
  		while (--i > -1 && !_reqAnimFrame) {
  			_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
  			_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
  		}

  		_class("Ticker", function(fps, useRAF) {
  			var _self = this,
  				_startTime = _getTime(),
  				_useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
  				_lagThreshold = 500,
  				_adjustedLag = 33,
  				_tickWord = "tick", //helps reduce gc burden
  				_fps, _req, _id, _gap, _nextTime,
  				_tick = function(manual) {
  					var elapsed = _getTime() - _lastUpdate,
  						overlap, dispatch;
  					if (elapsed > _lagThreshold) {
  						_startTime += elapsed - _adjustedLag;
  					}
  					_lastUpdate += elapsed;
  					_self.time = (_lastUpdate - _startTime) / 1000;
  					overlap = _self.time - _nextTime;
  					if (!_fps || overlap > 0 || manual === true) {
  						_self.frame++;
  						_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
  						dispatch = true;
  					}
  					if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
  						_id = _req(_tick);
  					}
  					if (dispatch) {
  						_self.dispatchEvent(_tickWord);
  					}
  				};

  			EventDispatcher.call(_self);
  			_self.time = _self.frame = 0;
  			_self.tick = function() {
  				_tick(true);
  			};

  			_self.lagSmoothing = function(threshold, adjustedLag) {
  				if (!arguments.length) { //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
  					return (_lagThreshold < 1 / _tinyNum);
  				}
  				_lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
  				_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
  			};

  			_self.sleep = function() {
  				if (_id == null) {
  					return;
  				}
  				if (!_useRAF || !_cancelAnimFrame) {
  					clearTimeout(_id);
  				} else {
  					_cancelAnimFrame(_id);
  				}
  				_req = _emptyFunc;
  				_id = null;
  				if (_self === _ticker) {
  					_tickerActive = false;
  				}
  			};

  			_self.wake = function(seamless) {
  				if (_id !== null) {
  					_self.sleep();
  				} else if (seamless) {
  					_startTime += -_lastUpdate + (_lastUpdate = _getTime());
  				} else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
  					_lastUpdate = _getTime() - _lagThreshold + 5;
  				}
  				_req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
  				if (_self === _ticker) {
  					_tickerActive = true;
  				}
  				_tick(2);
  			};

  			_self.fps = function(value) {
  				if (!arguments.length) {
  					return _fps;
  				}
  				_fps = value;
  				_gap = 1 / (_fps || 60);
  				_nextTime = this.time + _gap;
  				_self.wake();
  			};

  			_self.useRAF = function(value) {
  				if (!arguments.length) {
  					return _useRAF;
  				}
  				_self.sleep();
  				_useRAF = value;
  				_self.fps(_fps);
  			};
  			_self.fps(fps);

  			//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
  			setTimeout(function() {
  				if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
  					_self.useRAF(false);
  				}
  			}, 1500);
  		});

  		p = gs.Ticker.prototype = new gs.events.EventDispatcher();
  		p.constructor = gs.Ticker;


  /*
   * ----------------------------------------------------------------
   * Animation
   * ----------------------------------------------------------------
   */
  		var Animation = _class("core.Animation", function(duration, vars) {
  				this.vars = vars = vars || {};
  				this._duration = this._totalDuration = duration || 0;
  				this._delay = Number(vars.delay) || 0;
  				this._timeScale = 1;
  				this._active = (vars.immediateRender === true);
  				this.data = vars.data;
  				this._reversed = (vars.reversed === true);

  				if (!_rootTimeline) {
  					return;
  				}
  				if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
  					_ticker.wake();
  				}

  				var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
  				tl.add(this, tl._time);

  				if (this.vars.paused) {
  					this.paused(true);
  				}
  			});

  		_ticker = Animation.ticker = new gs.Ticker();
  		p = Animation.prototype;
  		p._dirty = p._gc = p._initted = p._paused = false;
  		p._totalTime = p._time = 0;
  		p._rawPrevTime = -1;
  		p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
  		p._paused = false;


  		//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
  		var _checkTimeout = function() {
  				if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) { //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
  					_ticker.wake();
  				}
  				var t = setTimeout(_checkTimeout, 2000);
  				if (t.unref) {
  					// allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
  					t.unref();
  				}
  			};
  		_checkTimeout();


  		p.play = function(from, suppressEvents) {
  			if (from != null) {
  				this.seek(from, suppressEvents);
  			}
  			return this.reversed(false).paused(false);
  		};

  		p.pause = function(atTime, suppressEvents) {
  			if (atTime != null) {
  				this.seek(atTime, suppressEvents);
  			}
  			return this.paused(true);
  		};

  		p.resume = function(from, suppressEvents) {
  			if (from != null) {
  				this.seek(from, suppressEvents);
  			}
  			return this.paused(false);
  		};

  		p.seek = function(time, suppressEvents) {
  			return this.totalTime(Number(time), suppressEvents !== false);
  		};

  		p.restart = function(includeDelay, suppressEvents) {
  			return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
  		};

  		p.reverse = function(from, suppressEvents) {
  			if (from != null) {
  				this.seek((from || this.totalDuration()), suppressEvents);
  			}
  			return this.reversed(true).paused(false);
  		};

  		p.render = function(time, suppressEvents, force) {
  			//stub - we override this method in subclasses.
  		};

  		p.invalidate = function() {
  			this._time = this._totalTime = 0;
  			this._initted = this._gc = false;
  			this._rawPrevTime = -1;
  			if (this._gc || !this.timeline) {
  				this._enabled(true);
  			}
  			return this;
  		};

  		p.isActive = function() {
  			var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
  				startTime = this._startTime,
  				rawTime;
  			return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - 0.0000001));
  		};

  		p._enabled = function (enabled, ignoreTimeline) {
  			if (!_tickerActive) {
  				_ticker.wake();
  			}
  			this._gc = !enabled;
  			this._active = this.isActive();
  			if (ignoreTimeline !== true) {
  				if (enabled && !this.timeline) {
  					this._timeline.add(this, this._startTime - this._delay);
  				} else if (!enabled && this.timeline) {
  					this._timeline._remove(this, true);
  				}
  			}
  			return false;
  		};


  		p._kill = function(vars, target) {
  			return this._enabled(false, false);
  		};

  		p.kill = function(vars, target) {
  			this._kill(vars, target);
  			return this;
  		};

  		p._uncache = function(includeSelf) {
  			var tween = includeSelf ? this : this.timeline;
  			while (tween) {
  				tween._dirty = true;
  				tween = tween.timeline;
  			}
  			return this;
  		};

  		p._swapSelfInParams = function(params) {
  			var i = params.length,
  				copy = params.concat();
  			while (--i > -1) {
  				if (params[i] === "{self}") {
  					copy[i] = this;
  				}
  			}
  			return copy;
  		};

  		p._callback = function(type) {
  			var v = this.vars,
  				callback = v[type],
  				params = v[type + "Params"],
  				scope = v[type + "Scope"] || v.callbackScope || this,
  				l = params ? params.length : 0;
  			switch (l) { //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
  				case 0: callback.call(scope); break;
  				case 1: callback.call(scope, params[0]); break;
  				case 2: callback.call(scope, params[0], params[1]); break;
  				default: callback.apply(scope, params);
  			}
  		};

  //----Animation getters/setters --------------------------------------------------------

  		p.eventCallback = function(type, callback, params, scope) {
  			if ((type || "").substr(0,2) === "on") {
  				var v = this.vars;
  				if (arguments.length === 1) {
  					return v[type];
  				}
  				if (callback == null) {
  					delete v[type];
  				} else {
  					v[type] = callback;
  					v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
  					v[type + "Scope"] = scope;
  				}
  				if (type === "onUpdate") {
  					this._onUpdate = callback;
  				}
  			}
  			return this;
  		};

  		p.delay = function(value) {
  			if (!arguments.length) {
  				return this._delay;
  			}
  			if (this._timeline.smoothChildTiming) {
  				this.startTime( this._startTime + value - this._delay );
  			}
  			this._delay = value;
  			return this;
  		};

  		p.duration = function(value) {
  			if (!arguments.length) {
  				this._dirty = false;
  				return this._duration;
  			}
  			this._duration = this._totalDuration = value;
  			this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
  			if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
  				this.totalTime(this._totalTime * (value / this._duration), true);
  			}
  			return this;
  		};

  		p.totalDuration = function(value) {
  			this._dirty = false;
  			return (!arguments.length) ? this._totalDuration : this.duration(value);
  		};

  		p.time = function(value, suppressEvents) {
  			if (!arguments.length) {
  				return this._time;
  			}
  			if (this._dirty) {
  				this.totalDuration();
  			}
  			return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
  		};

  		p.totalTime = function(time, suppressEvents, uncapped) {
  			if (!_tickerActive) {
  				_ticker.wake();
  			}
  			if (!arguments.length) {
  				return this._totalTime;
  			}
  			if (this._timeline) {
  				if (time < 0 && !uncapped) {
  					time += this.totalDuration();
  				}
  				if (this._timeline.smoothChildTiming) {
  					if (this._dirty) {
  						this.totalDuration();
  					}
  					var totalDuration = this._totalDuration,
  						tl = this._timeline;
  					if (time > totalDuration && !uncapped) {
  						time = totalDuration;
  					}
  					this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
  					if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  						this._uncache(false);
  					}
  					//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
  					if (tl._timeline) {
  						while (tl._timeline) {
  							if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
  								tl.totalTime(tl._totalTime, true);
  							}
  							tl = tl._timeline;
  						}
  					}
  				}
  				if (this._gc) {
  					this._enabled(true, false);
  				}
  				if (this._totalTime !== time || this._duration === 0) {
  					if (_lazyTweens.length) {
  						_lazyRender();
  					}
  					this.render(time, suppressEvents, false);
  					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
  						_lazyRender();
  					}
  				}
  			}
  			return this;
  		};

  		p.progress = p.totalProgress = function(value, suppressEvents) {
  			var duration = this.duration();
  			return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
  		};

  		p.startTime = function(value) {
  			if (!arguments.length) {
  				return this._startTime;
  			}
  			if (value !== this._startTime) {
  				this._startTime = value;
  				if (this.timeline) if (this.timeline._sortChildren) {
  					this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
  				}
  			}
  			return this;
  		};

  		p.endTime = function(includeRepeats) {
  			return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
  		};

  		p.timeScale = function(value) {
  			if (!arguments.length) {
  				return this._timeScale;
  			}
  			var pauseTime, t;
  			value = value || _tinyNum; //can't allow zero because it'll throw the math off
  			if (this._timeline && this._timeline.smoothChildTiming) {
  				pauseTime = this._pauseTime;
  				t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
  				this._startTime = t - ((t - this._startTime) * this._timeScale / value);
  			}
  			this._timeScale = value;
  			t = this.timeline;
  			while (t && t.timeline) { //must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
  				t._dirty = true;
  				t.totalDuration();
  				t = t.timeline;
  			}
  			return this;
  		};

  		p.reversed = function(value) {
  			if (!arguments.length) {
  				return this._reversed;
  			}
  			if (value != this._reversed) {
  				this._reversed = value;
  				this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
  			}
  			return this;
  		};

  		p.paused = function(value) {
  			if (!arguments.length) {
  				return this._paused;
  			}
  			var tl = this._timeline,
  				raw, elapsed;
  			if (value != this._paused) if (tl) {
  				if (!_tickerActive && !value) {
  					_ticker.wake();
  				}
  				raw = tl.rawTime();
  				elapsed = raw - this._pauseTime;
  				if (!value && tl.smoothChildTiming) {
  					this._startTime += elapsed;
  					this._uncache(false);
  				}
  				this._pauseTime = value ? raw : null;
  				this._paused = value;
  				this._active = this.isActive();
  				if (!value && elapsed !== 0 && this._initted && this.duration()) {
  					raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
  					this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
  				}
  			}
  			if (this._gc && !value) {
  				this._enabled(true, false);
  			}
  			return this;
  		};


  /*
   * ----------------------------------------------------------------
   * SimpleTimeline
   * ----------------------------------------------------------------
   */
  		var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
  			Animation.call(this, 0, vars);
  			this.autoRemoveChildren = this.smoothChildTiming = true;
  		});

  		p = SimpleTimeline.prototype = new Animation();
  		p.constructor = SimpleTimeline;
  		p.kill()._gc = false;
  		p._first = p._last = p._recent = null;
  		p._sortChildren = false;

  		p.add = p.insert = function(child, position, align, stagger) {
  			var prevTween, st;
  			child._startTime = Number(position || 0) + child._delay;
  			if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
  				child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
  			}
  			if (child.timeline) {
  				child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
  			}
  			child.timeline = child._timeline = this;
  			if (child._gc) {
  				child._enabled(true, true);
  			}
  			prevTween = this._last;
  			if (this._sortChildren) {
  				st = child._startTime;
  				while (prevTween && prevTween._startTime > st) {
  					prevTween = prevTween._prev;
  				}
  			}
  			if (prevTween) {
  				child._next = prevTween._next;
  				prevTween._next = child;
  			} else {
  				child._next = this._first;
  				this._first = child;
  			}
  			if (child._next) {
  				child._next._prev = child;
  			} else {
  				this._last = child;
  			}
  			child._prev = prevTween;
  			this._recent = child;
  			if (this._timeline) {
  				this._uncache(true);
  			}
  			return this;
  		};

  		p._remove = function(tween, skipDisable) {
  			if (tween.timeline === this) {
  				if (!skipDisable) {
  					tween._enabled(false, true);
  				}

  				if (tween._prev) {
  					tween._prev._next = tween._next;
  				} else if (this._first === tween) {
  					this._first = tween._next;
  				}
  				if (tween._next) {
  					tween._next._prev = tween._prev;
  				} else if (this._last === tween) {
  					this._last = tween._prev;
  				}
  				tween._next = tween._prev = tween.timeline = null;
  				if (tween === this._recent) {
  					this._recent = this._last;
  				}

  				if (this._timeline) {
  					this._uncache(true);
  				}
  			}
  			return this;
  		};

  		p.render = function(time, suppressEvents, force) {
  			var tween = this._first,
  				next;
  			this._totalTime = this._time = this._rawPrevTime = time;
  			while (tween) {
  				next = tween._next; //record it here because the value could change after rendering...
  				if (tween._active || (time >= tween._startTime && !tween._paused && !tween._gc)) {
  					if (!tween._reversed) {
  						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
  					} else {
  						tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
  					}
  				}
  				tween = next;
  			}
  		};

  		p.rawTime = function() {
  			if (!_tickerActive) {
  				_ticker.wake();
  			}
  			return this._totalTime;
  		};

  /*
   * ----------------------------------------------------------------
   * TweenLite
   * ----------------------------------------------------------------
   */
  		var TweenLite = _class("TweenLite", function(target, duration, vars) {
  				Animation.call(this, duration, vars);
  				this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

  				if (target == null) {
  					throw "Cannot tween a null target.";
  				}

  				this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;

  				var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
  					overwrite = this.vars.overwrite,
  					i, targ, targets;

  				this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

  				if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
  					this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
  					this._propLookup = [];
  					this._siblings = [];
  					for (i = 0; i < targets.length; i++) {
  						targ = targets[i];
  						if (!targ) {
  							targets.splice(i--, 1);
  							continue;
  						} else if (typeof(targ) === "string") {
  							targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
  							if (typeof(targ) === "string") {
  								targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
  							}
  							continue;
  						} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
  							targets.splice(i--, 1);
  							this._targets = targets = targets.concat(_slice(targ));
  							continue;
  						}
  						this._siblings[i] = _register(targ, this, false);
  						if (overwrite === 1) if (this._siblings[i].length > 1) {
  							_applyOverwrite(targ, this, null, 1, this._siblings[i]);
  						}
  					}

  				} else {
  					this._propLookup = {};
  					this._siblings = _register(target, this, false);
  					if (overwrite === 1) if (this._siblings.length > 1) {
  						_applyOverwrite(target, this, null, 1, this._siblings);
  					}
  				}
  				if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
  					this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
  					this.render(Math.min(0, -this._delay)); //in case delay is negative
  				}
  			}, true),
  			_isSelector = function(v) {
  				return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
  			},
  			_autoCSS = function(vars, target) {
  				var css = {},
  					p;
  				for (p in vars) {
  					if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
  						css[p] = vars[p];
  						delete vars[p];
  					}
  				}
  				vars.css = css;
  			};

  		p = TweenLite.prototype = new Animation();
  		p.constructor = TweenLite;
  		p.kill()._gc = false;

  //----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

  		p.ratio = 0;
  		p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
  		p._notifyPluginsOfEnabled = p._lazy = false;

  		TweenLite.version = "1.20.5";
  		TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
  		TweenLite.defaultOverwrite = "auto";
  		TweenLite.ticker = _ticker;
  		TweenLite.autoSleep = 120;
  		TweenLite.lagSmoothing = function(threshold, adjustedLag) {
  			_ticker.lagSmoothing(threshold, adjustedLag);
  		};

  		TweenLite.selector = window.$ || window.jQuery || function(e) {
  			var selector = window.$ || window.jQuery;
  			if (selector) {
  				TweenLite.selector = selector;
  				return selector(e);
  			}
  			if (!_doc) { //in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
  				_doc = window.document;
  			}
  			return (!_doc) ? e : (_doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
  		};

  		var _lazyTweens = [],
  			_lazyLookup = {},
  			_numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
  			_relExp = /[\+-]=-?[\.\d]/,
  			//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
  			_setRatio = function(v) {
  				var pt = this._firstPT,
  					min = 0.000001,
  					val;
  				while (pt) {
  					val = !pt.blob ? pt.c * v + pt.s : (v === 1 && this.end != null) ? this.end : v ? this.join("") : this.start;
  					if (pt.m) {
  						val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
  					} else if (val < min) if (val > -min && !pt.blob) { //prevents issues with converting very small numbers to strings in the browser
  						val = 0;
  					}
  					if (!pt.f) {
  						pt.t[pt.p] = val;
  					} else if (pt.fp) {
  						pt.t[pt.p](pt.fp, val);
  					} else {
  						pt.t[pt.p](val);
  					}
  					pt = pt._next;
  				}
  			},
  			//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
  			_blobDif = function(start, end, filter, pt) {
  				var a = [],
  					charIndex = 0,
  					s = "",
  					color = 0,
  					startNums, endNums, num, i, l, nonNumbers, currentNum;
  				a.start = start;
  				a.end = end;
  				start = a[0] = start + ""; //ensure values are strings
  				end = a[1] = end + "";
  				if (filter) {
  					filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
  					start = a[0];
  					end = a[1];
  				}
  				a.length = 0;
  				startNums = start.match(_numbersExp) || [];
  				endNums = end.match(_numbersExp) || [];
  				if (pt) {
  					pt._next = null;
  					pt.blob = 1;
  					a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
  				}
  				l = endNums.length;
  				for (i = 0; i < l; i++) {
  					currentNum = endNums[i];
  					nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
  					s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
  					charIndex += nonNumbers.length;
  					if (color) { //sense rgba() values and round them.
  						color = (color + 1) % 5;
  					} else if (nonNumbers.substr(-5) === "rgba(") {
  						color = 1;
  					}
  					if (currentNum === startNums[i] || startNums.length <= i) {
  						s += currentNum;
  					} else {
  						if (s) {
  							a.push(s);
  							s = "";
  						}
  						num = parseFloat(startNums[i]);
  						a.push(num);
  						a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, m:(color && color < 4) ? Math.round : 0};
  						//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
  					}
  					charIndex += currentNum.length;
  				}
  				s += end.substr(charIndex);
  				if (s) {
  					a.push(s);
  				}
  				a.setRatio = _setRatio;
  				if (_relExp.test(end)) { //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  					a.end = null;
  				}
  				return a;
  			},
  			//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
  			_addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
  				if (typeof(end) === "function") {
  					end = end(index || 0, target);
  				}
  				var type = typeof(target[prop]),
  					getterName = (type !== "function") ? "" : ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3)),
  					s = (start !== "get") ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
  					isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
  					pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, m:(!mod ? 0 : (typeof(mod) === "function") ? mod : Math.round), pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
  					blob;

  				if (typeof(s) !== "number" || (typeof(end) !== "number" && !isRelative)) {
  					if (funcParam || isNaN(s) || (!isRelative && isNaN(end)) || typeof(s) === "boolean" || typeof(end) === "boolean") {
  						//a blob (string that has multiple numbers in it)
  						pt.fp = funcParam;
  						blob = _blobDif(s, (isRelative ? (parseFloat(pt.s) + pt.c) + (pt.s + "").replace(/[0-9\-\.]/g, "") : end), stringFilter || TweenLite.defaultStringFilter, pt);
  						pt = {t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
  					} else {
  						pt.s = parseFloat(s);
  						if (!isRelative) {
  							pt.c = (parseFloat(end) - pt.s) || 0;
  						}
  					}
  				}
  				if (pt.c) { //only add it to the linked list if there's a change.
  					if ((pt._next = this._firstPT)) {
  						pt._next._prev = pt;
  					}
  					this._firstPT = pt;
  					return pt;
  				}
  			},
  			_internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
  			_plugins = TweenLite._plugins = {},
  			_tweenLookup = _internals.tweenLookup = {},
  			_tweenLookupNum = 0,
  			_reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1, id:1, yoyoEase:1},
  			_overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
  			_rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
  			_rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
  			_nextGCFrame = 30,
  			_lazyRender = _internals.lazyRender = function() {
  				var i = _lazyTweens.length,
  					tween;
  				_lazyLookup = {};
  				while (--i > -1) {
  					tween = _lazyTweens[i];
  					if (tween && tween._lazy !== false) {
  						tween.render(tween._lazy[0], tween._lazy[1], true);
  						tween._lazy = false;
  					}
  				}
  				_lazyTweens.length = 0;
  			};

  		_rootTimeline._startTime = _ticker.time;
  		_rootFramesTimeline._startTime = _ticker.frame;
  		_rootTimeline._active = _rootFramesTimeline._active = true;
  		setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

  		Animation._updateRoot = TweenLite.render = function() {
  				var i, a, p;
  				if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
  					_lazyRender();
  				}
  				_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
  				_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
  				if (_lazyTweens.length) {
  					_lazyRender();
  				}
  				if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
  					_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
  					for (p in _tweenLookup) {
  						a = _tweenLookup[p].tweens;
  						i = a.length;
  						while (--i > -1) {
  							if (a[i]._gc) {
  								a.splice(i, 1);
  							}
  						}
  						if (a.length === 0) {
  							delete _tweenLookup[p];
  						}
  					}
  					//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
  					p = _rootTimeline._first;
  					if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
  						while (p && p._paused) {
  							p = p._next;
  						}
  						if (!p) {
  							_ticker.sleep();
  						}
  					}
  				}
  			};

  		_ticker.addEventListener("tick", Animation._updateRoot);

  		var _register = function(target, tween, scrub) {
  				var id = target._gsTweenID, a, i;
  				if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
  					_tweenLookup[id] = {target:target, tweens:[]};
  				}
  				if (tween) {
  					a = _tweenLookup[id].tweens;
  					a[(i = a.length)] = tween;
  					if (scrub) {
  						while (--i > -1) {
  							if (a[i] === tween) {
  								a.splice(i, 1);
  							}
  						}
  					}
  				}
  				return _tweenLookup[id].tweens;
  			},
  			_onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
  				var func = overwrittenTween.vars.onOverwrite, r1, r2;
  				if (func) {
  					r1 = func(overwrittenTween, overwritingTween, target, killedProps);
  				}
  				func = TweenLite.onOverwrite;
  				if (func) {
  					r2 = func(overwrittenTween, overwritingTween, target, killedProps);
  				}
  				return (r1 !== false && r2 !== false);
  			},
  			_applyOverwrite = function(target, tween, props, mode, siblings) {
  				var i, changed, curTween, l;
  				if (mode === 1 || mode >= 4) {
  					l = siblings.length;
  					for (i = 0; i < l; i++) {
  						if ((curTween = siblings[i]) !== tween) {
  							if (!curTween._gc) {
  								if (curTween._kill(null, target, tween)) {
  									changed = true;
  								}
  							}
  						} else if (mode === 5) {
  							break;
  						}
  					}
  					return changed;
  				}
  				//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
  				var startTime = tween._startTime + _tinyNum,
  					overlaps = [],
  					oCount = 0,
  					zeroDur = (tween._duration === 0),
  					globalStart;
  				i = siblings.length;
  				while (--i > -1) {
  					if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) ; else if (curTween._timeline !== tween._timeline) {
  						globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
  						if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
  							overlaps[oCount++] = curTween;
  						}
  					} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
  						overlaps[oCount++] = curTween;
  					}
  				}

  				i = oCount;
  				while (--i > -1) {
  					curTween = overlaps[i];
  					if (mode === 2) if (curTween._kill(props, target, tween)) {
  						changed = true;
  					}
  					if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
  						if (mode !== 2 && !_onOverwrite(curTween, tween)) {
  							continue;
  						}
  						if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
  							changed = true;
  						}
  					}
  				}
  				return changed;
  			},
  			_checkOverlap = function(tween, reference, zeroDur) {
  				var tl = tween._timeline,
  					ts = tl._timeScale,
  					t = tween._startTime;
  				while (tl._timeline) {
  					t += tl._startTime;
  					ts *= tl._timeScale;
  					if (tl._paused) {
  						return -100;
  					}
  					tl = tl._timeline;
  				}
  				t /= ts;
  				return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
  			};


  //---- TweenLite instance methods -----------------------------------------------------------------------------

  		p._init = function() {
  			var v = this.vars,
  				op = this._overwrittenProps,
  				dur = this._duration,
  				immediate = !!v.immediateRender,
  				ease = v.ease,
  				i, initPlugins, pt, p, startVars, l;
  			if (v.startAt) {
  				if (this._startAt) {
  					this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
  					this._startAt.kill();
  				}
  				startVars = {};
  				for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
  					startVars[p] = v.startAt[p];
  				}
  				startVars.data = "isStart";
  				startVars.overwrite = false;
  				startVars.immediateRender = true;
  				startVars.lazy = (immediate && v.lazy !== false);
  				startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
  				startVars.onUpdate = v.onUpdate;
  				startVars.onUpdateParams = v.onUpdateParams;
  				startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
  				this._startAt = TweenLite.to(this.target || {}, 0, startVars);
  				if (immediate) {
  					if (this._time > 0) {
  						this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
  					} else if (dur !== 0) {
  						return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
  					}
  				}
  			} else if (v.runBackwards && dur !== 0) {
  				//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
  				if (this._startAt) {
  					this._startAt.render(-1, true);
  					this._startAt.kill();
  					this._startAt = null;
  				} else {
  					if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
  						immediate = false;
  					}
  					pt = {};
  					for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
  						if (!_reservedProps[p] || p === "autoCSS") {
  							pt[p] = v[p];
  						}
  					}
  					pt.overwrite = 0;
  					pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
  					pt.lazy = (immediate && v.lazy !== false);
  					pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
  					this._startAt = TweenLite.to(this.target, 0, pt);
  					if (!immediate) {
  						this._startAt._init(); //ensures that the initial values are recorded
  						this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
  						if (this.vars.immediateRender) {
  							this._startAt = null;
  						}
  					} else if (this._time === 0) {
  						return;
  					}
  				}
  			}
  			this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
  			if (v.easeParams instanceof Array && ease.config) {
  				this._ease = ease.config.apply(ease, v.easeParams);
  			}
  			this._easeType = this._ease._type;
  			this._easePower = this._ease._power;
  			this._firstPT = null;

  			if (this._targets) {
  				l = this._targets.length;
  				for (i = 0; i < l; i++) {
  					if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i) ) {
  						initPlugins = true;
  					}
  				}
  			} else {
  				initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
  			}

  			if (initPlugins) {
  				TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
  			}
  			if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
  				this._enabled(false, false);
  			}
  			if (v.runBackwards) {
  				pt = this._firstPT;
  				while (pt) {
  					pt.s += pt.c;
  					pt.c = -pt.c;
  					pt = pt._next;
  				}
  			}
  			this._onUpdate = v.onUpdate;
  			this._initted = true;
  		};

  		p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
  			var p, i, initPlugins, plugin, pt, v;
  			if (target == null) {
  				return false;
  			}

  			if (_lazyLookup[target._gsTweenID]) {
  				_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
  			}

  			if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
  				_autoCSS(this.vars, target);
  			}
  			for (p in this.vars) {
  				v = this.vars[p];
  				if (_reservedProps[p]) {
  					if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
  						this.vars[p] = v = this._swapSelfInParams(v, this);
  					}

  				} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {

  					//t - target 		[object]
  					//p - property 		[string]
  					//s - start			[number]
  					//c - change		[number]
  					//f - isFunction	[boolean]
  					//n - name			[string]
  					//pg - isPlugin 	[boolean]
  					//pr - priority		[number]
  					//m - mod           [function | 0]
  					this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority, m:0};
  					i = plugin._overwriteProps.length;
  					while (--i > -1) {
  						propLookup[plugin._overwriteProps[i]] = this._firstPT;
  					}
  					if (plugin._priority || plugin._onInitAllProps) {
  						initPlugins = true;
  					}
  					if (plugin._onDisable || plugin._onEnable) {
  						this._notifyPluginsOfEnabled = true;
  					}
  					if (pt._next) {
  						pt._next._prev = pt;
  					}

  				} else {
  					propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
  				}
  			}

  			if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
  				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
  			}
  			if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
  				this._kill(propLookup, target);
  				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
  			}
  			if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
  				_lazyLookup[target._gsTweenID] = true;
  			}
  			return initPlugins;
  		};

  		p.render = function(time, suppressEvents, force) {
  			var prevTime = this._time,
  				duration = this._duration,
  				prevRawPrevTime = this._rawPrevTime,
  				isComplete, callback, pt, rawPrevTime;
  			if (time >= duration - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
  				this._totalTime = this._time = duration;
  				this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
  				if (!this._reversed ) {
  					isComplete = true;
  					callback = "onComplete";
  					force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
  				}
  				if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
  					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
  						time = 0;
  					}
  					if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
  						force = true;
  						if (prevRawPrevTime > _tinyNum) {
  							callback = "onReverseComplete";
  						}
  					}
  					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
  				}

  			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
  				this._totalTime = this._time = 0;
  				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
  				if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
  					callback = "onReverseComplete";
  					isComplete = this._reversed;
  				}
  				if (time < 0) {
  					this._active = false;
  					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
  						if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
  							force = true;
  						}
  						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
  					}
  				}
  				if (!this._initted || (this._startAt && this._startAt.progress())) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
  					force = true;
  				}
  			} else {
  				this._totalTime = this._time = time;

  				if (this._easeType) {
  					var r = time / duration, type = this._easeType, pow = this._easePower;
  					if (type === 1 || (type === 3 && r >= 0.5)) {
  						r = 1 - r;
  					}
  					if (type === 3) {
  						r *= 2;
  					}
  					if (pow === 1) {
  						r *= r;
  					} else if (pow === 2) {
  						r *= r * r;
  					} else if (pow === 3) {
  						r *= r * r * r;
  					} else if (pow === 4) {
  						r *= r * r * r * r;
  					}

  					if (type === 1) {
  						this.ratio = 1 - r;
  					} else if (type === 2) {
  						this.ratio = r;
  					} else if (time / duration < 0.5) {
  						this.ratio = r / 2;
  					} else {
  						this.ratio = 1 - (r / 2);
  					}

  				} else {
  					this.ratio = this._ease.getRatio(time / duration);
  				}
  			}

  			if (this._time === prevTime && !force) {
  				return;
  			} else if (!this._initted) {
  				this._init();
  				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
  					return;
  				} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
  					this._time = this._totalTime = prevTime;
  					this._rawPrevTime = prevRawPrevTime;
  					_lazyTweens.push(this);
  					this._lazy = [time, suppressEvents];
  					return;
  				}
  				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
  				if (this._time && !isComplete) {
  					this.ratio = this._ease.getRatio(this._time / duration);
  				} else if (isComplete && this._ease._calcEnd) {
  					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
  				}
  			}
  			if (this._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
  				this._lazy = false;
  			}
  			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
  				this._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
  			}
  			if (prevTime === 0) {
  				if (this._startAt) {
  					if (time >= 0) {
  						this._startAt.render(time, true, force);
  					} else if (!callback) {
  						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
  					}
  				}
  				if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
  					this._callback("onStart");
  				}
  			}
  			pt = this._firstPT;
  			while (pt) {
  				if (pt.f) {
  					pt.t[pt.p](pt.c * this.ratio + pt.s);
  				} else {
  					pt.t[pt.p] = pt.c * this.ratio + pt.s;
  				}
  				pt = pt._next;
  			}

  			if (this._onUpdate) {
  				if (time < 0) if (this._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
  					this._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
  				}
  				if (!suppressEvents) if (this._time !== prevTime || isComplete || force) {
  					this._callback("onUpdate");
  				}
  			}
  			if (callback) if (!this._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
  				if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
  					this._startAt.render(time, true, force);
  				}
  				if (isComplete) {
  					if (this._timeline.autoRemoveChildren) {
  						this._enabled(false, false);
  					}
  					this._active = false;
  				}
  				if (!suppressEvents && this.vars[callback]) {
  					this._callback(callback);
  				}
  				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
  					this._rawPrevTime = 0;
  				}
  			}
  		};

  		p._kill = function(vars, target, overwritingTween) {
  			if (vars === "all") {
  				vars = null;
  			}
  			if (vars == null) if (target == null || target === this.target) {
  				this._lazy = false;
  				return this._enabled(false, false);
  			}
  			target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
  			var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
  				i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
  			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
  				i = target.length;
  				while (--i > -1) {
  					if (this._kill(vars, target[i], overwritingTween)) {
  						changed = true;
  					}
  				}
  			} else {
  				if (this._targets) {
  					i = this._targets.length;
  					while (--i > -1) {
  						if (target === this._targets[i]) {
  							propLookup = this._propLookup[i] || {};
  							this._overwrittenProps = this._overwrittenProps || [];
  							overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
  							break;
  						}
  					}
  				} else if (target !== this.target) {
  					return false;
  				} else {
  					propLookup = this._propLookup;
  					overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
  				}

  				if (propLookup) {
  					killProps = vars || propLookup;
  					record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
  					if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
  						for (p in killProps) {
  							if (propLookup[p]) {
  								if (!killed) {
  									killed = [];
  								}
  								killed.push(p);
  							}
  						}
  						if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
  							return false;
  						}
  					}

  					for (p in killProps) {
  						if ((pt = propLookup[p])) {
  							if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
  								if (pt.f) {
  									pt.t[pt.p](pt.s);
  								} else {
  									pt.t[pt.p] = pt.s;
  								}
  								changed = true;
  							}
  							if (pt.pg && pt.t._kill(killProps)) {
  								changed = true; //some plugins need to be notified so they can perform cleanup tasks first
  							}
  							if (!pt.pg || pt.t._overwriteProps.length === 0) {
  								if (pt._prev) {
  									pt._prev._next = pt._next;
  								} else if (pt === this._firstPT) {
  									this._firstPT = pt._next;
  								}
  								if (pt._next) {
  									pt._next._prev = pt._prev;
  								}
  								pt._next = pt._prev = null;
  							}
  							delete propLookup[p];
  						}
  						if (record) {
  							overwrittenProps[p] = 1;
  						}
  					}
  					if (!this._firstPT && this._initted) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
  						this._enabled(false, false);
  					}
  				}
  			}
  			return changed;
  		};

  		p.invalidate = function() {
  			if (this._notifyPluginsOfEnabled) {
  				TweenLite._onPluginEvent("_onDisable", this);
  			}
  			this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
  			this._notifyPluginsOfEnabled = this._active = this._lazy = false;
  			this._propLookup = (this._targets) ? {} : [];
  			Animation.prototype.invalidate.call(this);
  			if (this.vars.immediateRender) {
  				this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
  				this.render(Math.min(0, -this._delay)); //in case delay is negative.
  			}
  			return this;
  		};

  		p._enabled = function(enabled, ignoreTimeline) {
  			if (!_tickerActive) {
  				_ticker.wake();
  			}
  			if (enabled && this._gc) {
  				var targets = this._targets,
  					i;
  				if (targets) {
  					i = targets.length;
  					while (--i > -1) {
  						this._siblings[i] = _register(targets[i], this, true);
  					}
  				} else {
  					this._siblings = _register(this.target, this, true);
  				}
  			}
  			Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
  			if (this._notifyPluginsOfEnabled) if (this._firstPT) {
  				return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
  			}
  			return false;
  		};


  //----TweenLite static methods -----------------------------------------------------

  		TweenLite.to = function(target, duration, vars) {
  			return new TweenLite(target, duration, vars);
  		};

  		TweenLite.from = function(target, duration, vars) {
  			vars.runBackwards = true;
  			vars.immediateRender = (vars.immediateRender != false);
  			return new TweenLite(target, duration, vars);
  		};

  		TweenLite.fromTo = function(target, duration, fromVars, toVars) {
  			toVars.startAt = fromVars;
  			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
  			return new TweenLite(target, duration, toVars);
  		};

  		TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
  			return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
  		};

  		TweenLite.set = function(target, vars) {
  			return new TweenLite(target, 0, vars);
  		};

  		TweenLite.getTweensOf = function(target, onlyActive) {
  			if (target == null) { return []; }
  			target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
  			var i, a, j, t;
  			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
  				i = target.length;
  				a = [];
  				while (--i > -1) {
  					a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
  				}
  				i = a.length;
  				//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
  				while (--i > -1) {
  					t = a[i];
  					j = i;
  					while (--j > -1) {
  						if (t === a[j]) {
  							a.splice(i, 1);
  						}
  					}
  				}
  			} else if (target._gsTweenID) {
  				a = _register(target).concat();
  				i = a.length;
  				while (--i > -1) {
  					if (a[i]._gc || (onlyActive && !a[i].isActive())) {
  						a.splice(i, 1);
  					}
  				}
  			}
  			return a || [];
  		};

  		TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
  			if (typeof(onlyActive) === "object") {
  				vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
  				onlyActive = false;
  			}
  			var a = TweenLite.getTweensOf(target, onlyActive),
  				i = a.length;
  			while (--i > -1) {
  				a[i]._kill(vars, target);
  			}
  		};



  /*
   * ----------------------------------------------------------------
   * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
   * ----------------------------------------------------------------
   */
  		var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
  					this._overwriteProps = (props || "").split(",");
  					this._propName = this._overwriteProps[0];
  					this._priority = priority || 0;
  					this._super = TweenPlugin.prototype;
  				}, true);

  		p = TweenPlugin.prototype;
  		TweenPlugin.version = "1.19.0";
  		TweenPlugin.API = 2;
  		p._firstPT = null;
  		p._addTween = _addPropTween;
  		p.setRatio = _setRatio;

  		p._kill = function(lookup) {
  			var a = this._overwriteProps,
  				pt = this._firstPT,
  				i;
  			if (lookup[this._propName] != null) {
  				this._overwriteProps = [];
  			} else {
  				i = a.length;
  				while (--i > -1) {
  					if (lookup[a[i]] != null) {
  						a.splice(i, 1);
  					}
  				}
  			}
  			while (pt) {
  				if (lookup[pt.n] != null) {
  					if (pt._next) {
  						pt._next._prev = pt._prev;
  					}
  					if (pt._prev) {
  						pt._prev._next = pt._next;
  						pt._prev = null;
  					} else if (this._firstPT === pt) {
  						this._firstPT = pt._next;
  					}
  				}
  				pt = pt._next;
  			}
  			return false;
  		};

  		p._mod = p._roundProps = function(lookup) {
  			var pt = this._firstPT,
  				val;
  			while (pt) {
  				val = lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ]);
  				if (val && typeof(val) === "function") { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
  					if (pt.f === 2) {
  						pt.t._applyPT.m = val;
  					} else {
  						pt.m = val;
  					}
  				}
  				pt = pt._next;
  			}
  		};

  		TweenLite._onPluginEvent = function(type, tween) {
  			var pt = tween._firstPT,
  				changed, pt2, first, last, next;
  			if (type === "_onInitAllProps") {
  				//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
  				while (pt) {
  					next = pt._next;
  					pt2 = first;
  					while (pt2 && pt2.pr > pt.pr) {
  						pt2 = pt2._next;
  					}
  					if ((pt._prev = pt2 ? pt2._prev : last)) {
  						pt._prev._next = pt;
  					} else {
  						first = pt;
  					}
  					if ((pt._next = pt2)) {
  						pt2._prev = pt;
  					} else {
  						last = pt;
  					}
  					pt = next;
  				}
  				pt = tween._firstPT = first;
  			}
  			while (pt) {
  				if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
  					changed = true;
  				}
  				pt = pt._next;
  			}
  			return changed;
  		};

  		TweenPlugin.activate = function(plugins) {
  			var i = plugins.length;
  			while (--i > -1) {
  				if (plugins[i].API === TweenPlugin.API) {
  					_plugins[(new plugins[i]())._propName] = plugins[i];
  				}
  			}
  			return true;
  		};

  		//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
  		_gsDefine.plugin = function(config) {
  			if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
  			var propName = config.propName,
  				priority = config.priority || 0,
  				overwriteProps = config.overwriteProps,
  				map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_mod", mod:"_mod", initAll:"_onInitAllProps"},
  				Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
  					function() {
  						TweenPlugin.call(this, propName, priority);
  						this._overwriteProps = overwriteProps || [];
  					}, (config.global === true)),
  				p = Plugin.prototype = new TweenPlugin(propName),
  				prop;
  			p.constructor = Plugin;
  			Plugin.API = config.API;
  			for (prop in map) {
  				if (typeof(config[prop]) === "function") {
  					p[map[prop]] = config[prop];
  				}
  			}
  			Plugin.version = config.version;
  			TweenPlugin.activate([Plugin]);
  			return Plugin;
  		};


  		//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
  		a = window._gsQueue;
  		if (a) {
  			for (i = 0; i < a.length; i++) {
  				a[i]();
  			}
  			for (p in _defLookup) {
  				if (!_defLookup[p].func) {
  					window.console.log("GSAP encountered missing dependency: " + p);
  				}
  			}
  		}

  		_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

  })((module.exports && typeof(commonjsGlobal) !== "undefined") ? commonjsGlobal : commonjsGlobal || window, "TweenLite");
  });

  var TimelineLite = createCommonjsModule(function (module) {
  /*!
   * VERSION: 1.20.5
   * DATE: 2018-05-21
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   * 
   * @author: Jack Doyle, jack@greensock.com
   */
  var _gsScope = (module.exports && typeof(commonjsGlobal) !== "undefined") ? commonjsGlobal : commonjsGlobal || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
  (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

  	_gsScope._gsDefine("TimelineLite", ["core.Animation","core.SimpleTimeline","TweenLite"], function(Animation, SimpleTimeline, TweenLite) {

  		var TimelineLite = function(vars) {
  				SimpleTimeline.call(this, vars);
  				this._labels = {};
  				this.autoRemoveChildren = (this.vars.autoRemoveChildren === true);
  				this.smoothChildTiming = (this.vars.smoothChildTiming === true);
  				this._sortChildren = true;
  				this._onUpdate = this.vars.onUpdate;
  				var v = this.vars,
  					val, p;
  				for (p in v) {
  					val = v[p];
  					if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
  						v[p] = this._swapSelfInParams(val);
  					}
  				}
  				if (_isArray(v.tweens)) {
  					this.add(v.tweens, 0, v.align, v.stagger);
  				}
  			},
  			_tinyNum = 0.0000000001,
  			TweenLiteInternals = TweenLite._internals,
  			_internals = TimelineLite._internals = {},
  			_isSelector = TweenLiteInternals.isSelector,
  			_isArray = TweenLiteInternals.isArray,
  			_lazyTweens = TweenLiteInternals.lazyTweens,
  			_lazyRender = TweenLiteInternals.lazyRender,
  			_globals = _gsScope._gsDefine.globals,
  			_copy = function(vars) {
  				var copy = {}, p;
  				for (p in vars) {
  					copy[p] = vars[p];
  				}
  				return copy;
  			},
  			_applyCycle = function(vars, targets, i) {
  				var alt = vars.cycle,
  					p, val;
  				for (p in alt) {
  					val = alt[p];
  					vars[p] = (typeof(val) === "function") ? val(i, targets[i]) : val[i % val.length];
  				}
  				delete vars.cycle;
  			},
  			_pauseCallback = _internals.pauseCallback = function() {},
  			_slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
  				var b = [],
  					l = a.length,
  					i;
  				for (i = 0; i !== l; b.push(a[i++]));
  				return b;
  			},
  			p = TimelineLite.prototype = new SimpleTimeline();

  		TimelineLite.version = "1.20.5";
  		p.constructor = TimelineLite;
  		p.kill()._gc = p._forcingPlayhead = p._hasPause = false;

  		/* might use later...
  		//translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
  		function localToGlobal(time, animation) {
  			while (animation) {
  				time = (time / animation._timeScale) + animation._startTime;
  				animation = animation.timeline;
  			}
  			return time;
  		}

  		//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
  		function globalToLocal(time, animation) {
  			var scale = 1;
  			time -= localToGlobal(0, animation);
  			while (animation) {
  				scale *= animation._timeScale;
  				animation = animation.timeline;
  			}
  			return time * scale;
  		}
  		*/

  		p.to = function(target, duration, vars, position) {
  			var Engine = (vars.repeat && _globals.TweenMax) || TweenLite;
  			return duration ? this.add( new Engine(target, duration, vars), position) : this.set(target, vars, position);
  		};

  		p.from = function(target, duration, vars, position) {
  			return this.add( ((vars.repeat && _globals.TweenMax) || TweenLite).from(target, duration, vars), position);
  		};

  		p.fromTo = function(target, duration, fromVars, toVars, position) {
  			var Engine = (toVars.repeat && _globals.TweenMax) || TweenLite;
  			return duration ? this.add( Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
  		};

  		p.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
  			var tl = new TimelineLite({onComplete:onCompleteAll, onCompleteParams:onCompleteAllParams, callbackScope:onCompleteAllScope, smoothChildTiming:this.smoothChildTiming}),
  				cycle = vars.cycle,
  				copy, i;
  			if (typeof(targets) === "string") {
  				targets = TweenLite.selector(targets) || targets;
  			}
  			targets = targets || [];
  			if (_isSelector(targets)) { //senses if the targets object is a selector. If it is, we should translate it into an array.
  				targets = _slice(targets);
  			}
  			stagger = stagger || 0;
  			if (stagger < 0) {
  				targets = _slice(targets);
  				targets.reverse();
  				stagger *= -1;
  			}
  			for (i = 0; i < targets.length; i++) {
  				copy = _copy(vars);
  				if (copy.startAt) {
  					copy.startAt = _copy(copy.startAt);
  					if (copy.startAt.cycle) {
  						_applyCycle(copy.startAt, targets, i);
  					}
  				}
  				if (cycle) {
  					_applyCycle(copy, targets, i);
  					if (copy.duration != null) {
  						duration = copy.duration;
  						delete copy.duration;
  					}
  				}
  				tl.to(targets[i], duration, copy, i * stagger);
  			}
  			return this.add(tl, position);
  		};

  		p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
  			vars.immediateRender = (vars.immediateRender != false);
  			vars.runBackwards = true;
  			return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
  		};

  		p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
  			toVars.startAt = fromVars;
  			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
  			return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
  		};

  		p.call = function(callback, params, scope, position) {
  			return this.add( TweenLite.delayedCall(0, callback, params, scope), position);
  		};

  		p.set = function(target, vars, position) {
  			position = this._parseTimeOrLabel(position, 0, true);
  			if (vars.immediateRender == null) {
  				vars.immediateRender = (position === this._time && !this._paused);
  			}
  			return this.add( new TweenLite(target, 0, vars), position);
  		};

  		TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
  			vars = vars || {};
  			if (vars.smoothChildTiming == null) {
  				vars.smoothChildTiming = true;
  			}
  			var tl = new TimelineLite(vars),
  				root = tl._timeline,
  				hasNegativeStart, time,	tween, next;
  			if (ignoreDelayedCalls == null) {
  				ignoreDelayedCalls = true;
  			}
  			root._remove(tl, true);
  			tl._startTime = 0;
  			tl._rawPrevTime = tl._time = tl._totalTime = root._time;
  			tween = root._first;
  			while (tween) {
  				next = tween._next;
  				if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
  					time = tween._startTime - tween._delay;
  					if (time < 0) {
  						hasNegativeStart = 1;
  					}
  					tl.add(tween, time);
  				}
  				tween = next;
  			}
  			root.add(tl, 0);
  			if (hasNegativeStart) { //calling totalDuration() will force the adjustment necessary to shift the children forward so none of them start before zero, and moves the timeline backwards the same amount, so the playhead is still aligned where it should be globally, but the timeline doesn't have illegal children that start before zero.
  				tl.totalDuration();
  			}
  			return tl;
  		};

  		p.add = function(value, position, align, stagger) {
  			var curTime, l, i, child, tl, beforeRawTime;
  			if (typeof(position) !== "number") {
  				position = this._parseTimeOrLabel(position, 0, true, value);
  			}
  			if (!(value instanceof Animation)) {
  				if ((value instanceof Array) || (value && value.push && _isArray(value))) {
  					align = align || "normal";
  					stagger = stagger || 0;
  					curTime = position;
  					l = value.length;
  					for (i = 0; i < l; i++) {
  						if (_isArray(child = value[i])) {
  							child = new TimelineLite({tweens:child});
  						}
  						this.add(child, curTime);
  						if (typeof(child) !== "string" && typeof(child) !== "function") {
  							if (align === "sequence") {
  								curTime = child._startTime + (child.totalDuration() / child._timeScale);
  							} else if (align === "start") {
  								child._startTime -= child.delay();
  							}
  						}
  						curTime += stagger;
  					}
  					return this._uncache(true);
  				} else if (typeof(value) === "string") {
  					return this.addLabel(value, position);
  				} else if (typeof(value) === "function") {
  					value = TweenLite.delayedCall(0, value);
  				} else {
  					throw("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
  				}
  			}

  			SimpleTimeline.prototype.add.call(this, value, position);

  			if (value._time) { //in case, for example, the _startTime is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
  				value.render((this.rawTime() - value._startTime) * value._timeScale, false, false);
  			}

  			//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
  			if (this._gc || this._time === this._duration) if (!this._paused) if (this._duration < this.duration()) {
  				//in case any of the ancestors had completed but should now be enabled...
  				tl = this;
  				beforeRawTime = (tl.rawTime() > value._startTime); //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
  				while (tl._timeline) {
  					if (beforeRawTime && tl._timeline.smoothChildTiming) {
  						tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
  					} else if (tl._gc) {
  						tl._enabled(true, false);
  					}
  					tl = tl._timeline;
  				}
  			}

  			return this;
  		};

  		p.remove = function(value) {
  			if (value instanceof Animation) {
  				this._remove(value, false);
  				var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
  				value._startTime = (value._paused ? value._pauseTime : tl._time) - ((!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale); //ensure that if it gets played again, the timing is correct.
  				return this;
  			} else if (value instanceof Array || (value && value.push && _isArray(value))) {
  				var i = value.length;
  				while (--i > -1) {
  					this.remove(value[i]);
  				}
  				return this;
  			} else if (typeof(value) === "string") {
  				return this.removeLabel(value);
  			}
  			return this.kill(null, value);
  		};

  		p._remove = function(tween, skipDisable) {
  			SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
  			var last = this._last;
  			if (!last) {
  				this._time = this._totalTime = this._duration = this._totalDuration = 0;
  			} else if (this._time > this.duration()) {
  				this._time = this._duration;
  				this._totalTime = this._totalDuration;
  			}
  			return this;
  		};

  		p.append = function(value, offsetOrLabel) {
  			return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
  		};

  		p.insert = p.insertMultiple = function(value, position, align, stagger) {
  			return this.add(value, position || 0, align, stagger);
  		};

  		p.appendMultiple = function(tweens, offsetOrLabel, align, stagger) {
  			return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
  		};

  		p.addLabel = function(label, position) {
  			this._labels[label] = this._parseTimeOrLabel(position);
  			return this;
  		};

  		p.addPause = function(position, callback, params, scope) {
  			var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
  			t.vars.onComplete = t.vars.onReverseComplete = callback;
  			t.data = "isPause";
  			this._hasPause = true;
  			return this.add(t, position);
  		};

  		p.removeLabel = function(label) {
  			delete this._labels[label];
  			return this;
  		};

  		p.getLabelTime = function(label) {
  			return (this._labels[label] != null) ? this._labels[label] : -1;
  		};

  		p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
  			var clippedDuration, i;
  			//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
  			if (ignore instanceof Animation && ignore.timeline === this) {
  				this.remove(ignore);
  			} else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
  				i = ignore.length;
  				while (--i > -1) {
  					if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
  						this.remove(ignore[i]);
  					}
  				}
  			}
  			clippedDuration = (typeof(timeOrLabel) === "number" && !offsetOrLabel) ? 0 : (this.duration() > 99999999999) ? this.recent().endTime(false) : this._duration; //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  			if (typeof(offsetOrLabel) === "string") {
  				return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof(timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - clippedDuration : 0, appendIfAbsent);
  			}
  			offsetOrLabel = offsetOrLabel || 0;
  			if (typeof(timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) { //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
  				i = timeOrLabel.indexOf("=");
  				if (i === -1) {
  					if (this._labels[timeOrLabel] == null) {
  						return appendIfAbsent ? (this._labels[timeOrLabel] = clippedDuration + offsetOrLabel) : offsetOrLabel;
  					}
  					return this._labels[timeOrLabel] + offsetOrLabel;
  				}
  				offsetOrLabel = parseInt(timeOrLabel.charAt(i-1) + "1", 10) * Number(timeOrLabel.substr(i+1));
  				timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i-1), 0, appendIfAbsent) : clippedDuration;
  			} else if (timeOrLabel == null) {
  				timeOrLabel = clippedDuration;
  			}
  			return Number(timeOrLabel) + offsetOrLabel;
  		};

  		p.seek = function(position, suppressEvents) {
  			return this.totalTime((typeof(position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
  		};

  		p.stop = function() {
  			return this.paused(true);
  		};

  		p.gotoAndPlay = function(position, suppressEvents) {
  			return this.play(position, suppressEvents);
  		};

  		p.gotoAndStop = function(position, suppressEvents) {
  			return this.pause(position, suppressEvents);
  		};

  		p.render = function(time, suppressEvents, force) {
  			if (this._gc) {
  				this._enabled(true, false);
  			}
  			var prevTime = this._time,
  				totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
  				prevStart = this._startTime,
  				prevTimeScale = this._timeScale,
  				prevPaused = this._paused,
  				tween, isComplete, next, callback, internalForce, pauseTween, curTime;
  			if (prevTime !== this._time) { //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
  				time += this._time - prevTime;
  			}
  			if (time >= totalDur - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
  				this._totalTime = this._time = totalDur;
  				if (!this._reversed) if (!this._hasPausedChild()) {
  					isComplete = true;
  					callback = "onComplete";
  					internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
  					if (this._duration === 0) if ((time <= 0 && time >= -0.0000001) || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) if (this._rawPrevTime !== time && this._first) {
  						internalForce = true;
  						if (this._rawPrevTime > _tinyNum) {
  							callback = "onReverseComplete";
  						}
  					}
  				}
  				this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
  				time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.

  			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
  				this._totalTime = this._time = 0;
  				if (prevTime !== 0 || (this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || (time < 0 && this._rawPrevTime >= 0)))) {
  					callback = "onReverseComplete";
  					isComplete = this._reversed;
  				}
  				if (time < 0) {
  					this._active = false;
  					if (this._timeline.autoRemoveChildren && this._reversed) { //ensures proper GC if a timeline is resumed after it's finished reversing.
  						internalForce = isComplete = true;
  						callback = "onReverseComplete";
  					} else if (this._rawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
  						internalForce = true;
  					}
  					this._rawPrevTime = time;
  				} else {
  					this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
  					if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
  						tween = this._first;
  						while (tween && tween._startTime === 0) {
  							if (!tween._duration) {
  								isComplete = false;
  							}
  							tween = tween._next;
  						}
  					}
  					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
  					if (!this._initted) {
  						internalForce = true;
  					}
  				}

  			} else {

  				if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
  					if (time >= prevTime) {
  						tween = this._first;
  						while (tween && tween._startTime <= time && !pauseTween) {
  							if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
  								pauseTween = tween;
  							}
  							tween = tween._next;
  						}
  					} else {
  						tween = this._last;
  						while (tween && tween._startTime >= time && !pauseTween) {
  							if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
  								pauseTween = tween;
  							}
  							tween = tween._prev;
  						}
  					}
  					if (pauseTween) {
  						this._time = time = pauseTween._startTime;
  						this._totalTime = time + (this._cycle * (this._totalDuration + this._repeatDelay));
  					}
  				}

  				this._totalTime = this._time = this._rawPrevTime = time;
  			}
  			if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
  				return;
  			} else if (!this._initted) {
  				this._initted = true;
  			}

  			if (!this._active) if (!this._paused && this._time !== prevTime && time > 0) {
  				this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
  			}

  			if (prevTime === 0) if (this.vars.onStart) if (this._time !== 0 || !this._duration) if (!suppressEvents) {
  				this._callback("onStart");
  			}

  			curTime = this._time;
  			if (curTime >= prevTime) {
  				tween = this._first;
  				while (tween) {
  					next = tween._next; //record it here because the value could change after rendering...
  					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
  						break;
  					} else if (tween._active || (tween._startTime <= curTime && !tween._paused && !tween._gc)) {
  						if (pauseTween === tween) {
  							this.pause();
  						}
  						if (!tween._reversed) {
  							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
  						} else {
  							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
  						}
  					}
  					tween = next;
  				}
  			} else {
  				tween = this._last;
  				while (tween) {
  					next = tween._prev; //record it here because the value could change after rendering...
  					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
  						break;
  					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
  						if (pauseTween === tween) {
  							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
  							while (pauseTween && pauseTween.endTime() > this._time) {
  								pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
  								pauseTween = pauseTween._prev;
  							}
  							pauseTween = null;
  							this.pause();
  						}
  						if (!tween._reversed) {
  							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
  						} else {
  							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
  						}
  					}
  					tween = next;
  				}
  			}

  			if (this._onUpdate) if (!suppressEvents) {
  				if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
  					_lazyRender();
  				}
  				this._callback("onUpdate");
  			}

  			if (callback) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
  				if (isComplete) {
  					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
  						_lazyRender();
  					}
  					if (this._timeline.autoRemoveChildren) {
  						this._enabled(false, false);
  					}
  					this._active = false;
  				}
  				if (!suppressEvents && this.vars[callback]) {
  					this._callback(callback);
  				}
  			}
  		};

  		p._hasPausedChild = function() {
  			var tween = this._first;
  			while (tween) {
  				if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
  					return true;
  				}
  				tween = tween._next;
  			}
  			return false;
  		};

  		p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
  			ignoreBeforeTime = ignoreBeforeTime || -9999999999;
  			var a = [],
  				tween = this._first,
  				cnt = 0;
  			while (tween) {
  				if (tween._startTime < ignoreBeforeTime) ; else if (tween instanceof TweenLite) {
  					if (tweens !== false) {
  						a[cnt++] = tween;
  					}
  				} else {
  					if (timelines !== false) {
  						a[cnt++] = tween;
  					}
  					if (nested !== false) {
  						a = a.concat(tween.getChildren(true, tweens, timelines));
  						cnt = a.length;
  					}
  				}
  				tween = tween._next;
  			}
  			return a;
  		};

  		p.getTweensOf = function(target, nested) {
  			var disabled = this._gc,
  				a = [],
  				cnt = 0,
  				tweens, i;
  			if (disabled) {
  				this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
  			}
  			tweens = TweenLite.getTweensOf(target);
  			i = tweens.length;
  			while (--i > -1) {
  				if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
  					a[cnt++] = tweens[i];
  				}
  			}
  			if (disabled) {
  				this._enabled(false, true);
  			}
  			return a;
  		};

  		p.recent = function() {
  			return this._recent;
  		};

  		p._contains = function(tween) {
  			var tl = tween.timeline;
  			while (tl) {
  				if (tl === this) {
  					return true;
  				}
  				tl = tl.timeline;
  			}
  			return false;
  		};

  		p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
  			ignoreBeforeTime = ignoreBeforeTime || 0;
  			var tween = this._first,
  				labels = this._labels,
  				p;
  			while (tween) {
  				if (tween._startTime >= ignoreBeforeTime) {
  					tween._startTime += amount;
  				}
  				tween = tween._next;
  			}
  			if (adjustLabels) {
  				for (p in labels) {
  					if (labels[p] >= ignoreBeforeTime) {
  						labels[p] += amount;
  					}
  				}
  			}
  			return this._uncache(true);
  		};

  		p._kill = function(vars, target) {
  			if (!vars && !target) {
  				return this._enabled(false, false);
  			}
  			var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
  				i = tweens.length,
  				changed = false;
  			while (--i > -1) {
  				if (tweens[i]._kill(vars, target)) {
  					changed = true;
  				}
  			}
  			return changed;
  		};

  		p.clear = function(labels) {
  			var tweens = this.getChildren(false, true, true),
  				i = tweens.length;
  			this._time = this._totalTime = 0;
  			while (--i > -1) {
  				tweens[i]._enabled(false, false);
  			}
  			if (labels !== false) {
  				this._labels = {};
  			}
  			return this._uncache(true);
  		};

  		p.invalidate = function() {
  			var tween = this._first;
  			while (tween) {
  				tween.invalidate();
  				tween = tween._next;
  			}
  			return Animation.prototype.invalidate.call(this);		};

  		p._enabled = function(enabled, ignoreTimeline) {
  			if (enabled === this._gc) {
  				var tween = this._first;
  				while (tween) {
  					tween._enabled(enabled, true);
  					tween = tween._next;
  				}
  			}
  			return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
  		};

  		p.totalTime = function(time, suppressEvents, uncapped) {
  			this._forcingPlayhead = true;
  			var val = Animation.prototype.totalTime.apply(this, arguments);
  			this._forcingPlayhead = false;
  			return val;
  		};

  		p.duration = function(value) {
  			if (!arguments.length) {
  				if (this._dirty) {
  					this.totalDuration(); //just triggers recalculation
  				}
  				return this._duration;
  			}
  			if (this.duration() !== 0 && value !== 0) {
  				this.timeScale(this._duration / value);
  			}
  			return this;
  		};

  		p.totalDuration = function(value) {
  			if (!arguments.length) {
  				if (this._dirty) {
  					var max = 0,
  						tween = this._last,
  						prevStart = 999999999999,
  						prev, end;
  					while (tween) {
  						prev = tween._prev; //record it here in case the tween changes position in the sequence...
  						if (tween._dirty) {
  							tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
  						}
  						if (tween._startTime > prevStart && this._sortChildren && !tween._paused && !this._calculatingDuration) { //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
  							this._calculatingDuration = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add(), like _parseTimeOrLabel().
  							this.add(tween, tween._startTime - tween._delay);
  							this._calculatingDuration = 0;
  						} else {
  							prevStart = tween._startTime;
  						}
  						if (tween._startTime < 0 && !tween._paused) { //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
  							max -= tween._startTime;
  							if (this._timeline.smoothChildTiming) {
  								this._startTime += tween._startTime / this._timeScale;
  								this._time -= tween._startTime;
  								this._totalTime -= tween._startTime;
  								this._rawPrevTime -= tween._startTime;
  							}
  							this.shiftChildren(-tween._startTime, false, -9999999999);
  							prevStart = 0;
  						}
  						end = tween._startTime + (tween._totalDuration / tween._timeScale);
  						if (end > max) {
  							max = end;
  						}
  						tween = prev;
  					}
  					this._duration = this._totalDuration = max;
  					this._dirty = false;
  				}
  				return this._totalDuration;
  			}
  			return (value && this.totalDuration()) ? this.timeScale(this._totalDuration / value) : this;
  		};

  		p.paused = function(value) {
  			if (!value) { //if there's a pause directly at the spot from where we're unpausing, skip it.
  				var tween = this._first,
  					time = this._time;
  				while (tween) {
  					if (tween._startTime === time && tween.data === "isPause") {
  						tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
  					}
  					tween = tween._next;
  				}
  			}
  			return Animation.prototype.paused.apply(this, arguments);
  		};

  		p.usesFrames = function() {
  			var tl = this._timeline;
  			while (tl._timeline) {
  				tl = tl._timeline;
  			}
  			return (tl === Animation._rootFramesTimeline);
  		};

  		p.rawTime = function(wrapRepeats) {
  			return (wrapRepeats && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale;
  		};

  		return TimelineLite;

  	}, true);


  }); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }

  //export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
  (function(name) {
  	var getGlobal = function() {
  		return (_gsScope.GreenSockGlobals || _gsScope)[name];
  	};
  	if (module.exports) { //node
  		 //dependency
  		module.exports = getGlobal();
  	}
  }("TimelineLite"));
  });

  var CSSPlugin = createCommonjsModule(function (module) {
  /*!
   * VERSION: 1.20.5
   * DATE: 2018-05-21
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   * 
   * @author: Jack Doyle, jack@greensock.com
   */
  var _gsScope = (module.exports && typeof(commonjsGlobal) !== "undefined") ? commonjsGlobal : commonjsGlobal || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
  (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

  	_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin","TweenLite"], function(TweenPlugin, TweenLite) {

  		/** @constructor **/
  		var CSSPlugin = function() {
  				TweenPlugin.call(this, "css");
  				this._overwriteProps.length = 0;
  				this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
  			},
  			_globals = _gsScope._gsDefine.globals,
  			_hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
  			_suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
  			_cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
  			_overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
  			_specialProps = {},
  			p = CSSPlugin.prototype = new TweenPlugin("css");

  		p.constructor = CSSPlugin;
  		CSSPlugin.version = "1.20.5";
  		CSSPlugin.API = 2;
  		CSSPlugin.defaultTransformPerspective = 0;
  		CSSPlugin.defaultSkewType = "compensated";
  		CSSPlugin.defaultSmoothOrigin = true;
  		p = "px"; //we'll reuse the "p" variable to keep file size down
  		CSSPlugin.suffixMap = {top:p, right:p, bottom:p, left:p, width:p, height:p, fontSize:p, padding:p, margin:p, perspective:p, lineHeight:""};


  		var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
  			_relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
  			_valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
  			_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
  			_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
  			_opacityExp = /opacity *= *([^)]*)/i,
  			_opacityValExp = /opacity:([^;]*)/i,
  			_alphaFilterExp = /alpha\(opacity *=.+?\)/i,
  			_rgbhslExp = /^(rgb|hsl)/,
  			_capsExp = /([A-Z])/g,
  			_camelExp = /-([a-z])/gi,
  			_urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
  			_camelFunc = function(s, g) { return g.toUpperCase(); },
  			_horizExp = /(?:Left|Right|Width)/i,
  			_ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
  			_ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
  			_commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
  			_complexExp = /[\s,\(]/i, //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
  			_DEG2RAD = Math.PI / 180,
  			_RAD2DEG = 180 / Math.PI,
  			_forcePT = {},
  			_dummyElement = {style:{}},
  			_doc = _gsScope.document || {createElement: function() {return _dummyElement;}},
  			_createElement = function(type, ns) {
  				return _doc.createElementNS ? _doc.createElementNS(ns || "http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
  			},
  			_tempDiv = _createElement("div"),
  			_tempImg = _createElement("img"),
  			_internals = CSSPlugin._internals = {_specialProps:_specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
  			_agent = (_gsScope.navigator || {}).userAgent || "",
  			_autoRound,
  			_reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

  			_isSafari,
  			_isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
  			_isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
  			_ieVers,
  			_supportsOpacity = (function() { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
  				var i = _agent.indexOf("Android"),
  					a = _createElement("a");
  				_isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i+8, 2)) > 3));
  				_isSafariLT6 = (_isSafari && (parseFloat(_agent.substr(_agent.indexOf("Version/")+8, 2)) < 6));
  				_isFirefox = (_agent.indexOf("Firefox") !== -1);
  				if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
  					_ieVers = parseFloat( RegExp.$1 );
  				}
  				if (!a) {
  					return false;
  				}
  				a.style.cssText = "top:1px;opacity:.55;";
  				return /^0.55/.test(a.style.opacity);
  			}()),
  			_getIEOpacity = function(v) {
  				return (_opacityExp.test( ((typeof(v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ) ? ( parseFloat( RegExp.$1 ) / 100 ) : 1);
  			},
  			_log = function(s) {//for logging messages, but in a way that won't throw errors in old versions of IE.
  				if (_gsScope.console) {
  					console.log(s);
  				}
  			},
  			_target, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
  			_index, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params

  			_prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
  			_prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

  			// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
  			_checkPropPrefix = function(p, e) {
  				e = e || _tempDiv;
  				var s = e.style,
  					a, i;
  				if (s[p] !== undefined) {
  					return p;
  				}
  				p = p.charAt(0).toUpperCase() + p.substr(1);
  				a = ["O","Moz","ms","Ms","Webkit"];
  				i = 5;
  				while (--i > -1 && s[a[i]+p] === undefined) { }
  				if (i >= 0) {
  					_prefix = (i === 3) ? "ms" : a[i];
  					_prefixCSS = "-" + _prefix.toLowerCase() + "-";
  					return _prefix + p;
  				}
  				return null;
  			},

  			_getComputedStyle = (typeof(window) !== "undefined" ? window : _doc.defaultView || {getComputedStyle:function() {}}).getComputedStyle,

  			/**
  			 * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
  			 * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
  			 *
  			 * @param {!Object} t Target element whose style property you want to query
  			 * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
  			 * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
  			 * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
  			 * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
  			 * @return {?string} The current property value
  			 */
  			_getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
  				var rv;
  				if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
  					return _getIEOpacity(t);
  				}
  				if (!calc && t.style[p]) {
  					rv = t.style[p];
  				} else if ((cs = cs || _getComputedStyle(t))) {
  					rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
  				} else if (t.currentStyle) {
  					rv = t.currentStyle[p];
  				}
  				return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
  			},

  			/**
  			 * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
  			 * @param {!Object} t Target element
  			 * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
  			 * @param {!number} v Value
  			 * @param {string=} sfx Suffix (like "px" or "%" or "em")
  			 * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
  			 * @return {number} value in pixels
  			 */
  			_convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
  				if (sfx === "px" || (!sfx && p !== "lineHeight")) { return v; }
  				if (sfx === "auto" || !v) { return 0; }
  				var horiz = _horizExp.test(p),
  					node = t,
  					style = _tempDiv.style,
  					neg = (v < 0),
  					precise = (v === 1),
  					pix, cache, time;
  				if (neg) {
  					v = -v;
  				}
  				if (precise) {
  					v *= 100;
  				}
  				if (p === "lineHeight" && !sfx) { //special case of when a simple lineHeight (without a unit) is used. Set it to the value, read back the computed value, and then revert.
  					cache = _getComputedStyle(t).lineHeight;
  					t.style.lineHeight = v;
  					pix = parseFloat(_getComputedStyle(t).lineHeight);
  					t.style.lineHeight = cache;
  				} else if (sfx === "%" && p.indexOf("border") !== -1) {
  					pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
  				} else {
  					style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
  					if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
  						node = t.parentNode || _doc.body;
  						if (_getStyle(node, "display").indexOf("flex") !== -1) { //Edge and IE11 have a bug that causes offsetWidth to report as 0 if the container has display:flex and the child is position:relative. Switching to position: absolute solves it.
  							style.position = "absolute";
  						}
  						cache = node._gsCache;
  						time = TweenLite.ticker.frame;
  						if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
  							return cache.width * v / 100;
  						}
  						style[(horiz ? "width" : "height")] = v + sfx;
  					} else {
  						style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
  					}
  					node.appendChild(_tempDiv);
  					pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
  					node.removeChild(_tempDiv);
  					if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
  						cache = node._gsCache = node._gsCache || {};
  						cache.time = time;
  						cache.width = pix / v * 100;
  					}
  					if (pix === 0 && !recurse) {
  						pix = _convertToPixels(t, p, v, sfx, true);
  					}
  				}
  				if (precise) {
  					pix /= 100;
  				}
  				return neg ? -pix : pix;
  			},
  			_calculateOffset = _internals.calculateOffset = function(t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
  				if (_getStyle(t, "position", cs) !== "absolute") { return 0; }
  				var dim = ((p === "left") ? "Left" : "Top"),
  					v = _getStyle(t, "margin" + dim, cs);
  				return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
  			},

  			// @private returns at object containing ALL of the style properties in camelCase and their associated values.
  			_getAllStyles = function(t, cs) {
  				var s = {},
  					i, tr, p;
  				if ((cs = cs || _getComputedStyle(t, null))) {
  					if ((i = cs.length)) {
  						while (--i > -1) {
  							p = cs[i];
  							if (p.indexOf("-transform") === -1 || _transformPropCSS === p) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
  								s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
  							}
  						}
  					} else { //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
  						for (i in cs) {
  							if (i.indexOf("Transform") === -1 || _transformProp === i) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
  								s[i] = cs[i];
  							}
  						}
  					}
  				} else if ((cs = t.currentStyle || t.style)) {
  					for (i in cs) {
  						if (typeof(i) === "string" && s[i] === undefined) {
  							s[i.replace(_camelExp, _camelFunc)] = cs[i];
  						}
  					}
  				}
  				if (!_supportsOpacity) {
  					s.opacity = _getIEOpacity(t);
  				}
  				tr = _getTransform(t, cs, false);
  				s.rotation = tr.rotation;
  				s.skewX = tr.skewX;
  				s.scaleX = tr.scaleX;
  				s.scaleY = tr.scaleY;
  				s.x = tr.x;
  				s.y = tr.y;
  				if (_supports3D) {
  					s.z = tr.z;
  					s.rotationX = tr.rotationX;
  					s.rotationY = tr.rotationY;
  					s.scaleZ = tr.scaleZ;
  				}
  				if (s.filters) {
  					delete s.filters;
  				}
  				return s;
  			},

  			// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
  			_cssDif = function(t, s1, s2, vars, forceLookup) {
  				var difs = {},
  					style = t.style,
  					val, p, mpt;
  				for (p in s2) {
  					if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) if (p.indexOf("Origin") === -1) if (typeof(val) === "number" || typeof(val) === "string") {
  						difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof(s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
  						if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
  							mpt = new MiniPropTween(style, p, style[p], mpt);
  						}
  					}
  				}
  				if (vars) {
  					for (p in vars) { //copy properties (except className)
  						if (p !== "className") {
  							difs[p] = vars[p];
  						}
  					}
  				}
  				return {difs:difs, firstMPT:mpt};
  			},
  			_dimensions = {width:["Left","Right"], height:["Top","Bottom"]},
  			_margins = ["marginLeft","marginRight","marginTop","marginBottom"],

  			/**
  			 * @private Gets the width or height of an element
  			 * @param {!Object} t Target element
  			 * @param {!string} p Property name ("width" or "height")
  			 * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
  			 * @return {number} Dimension (in pixels)
  			 */
  			_getDimension = function(t, p, cs) {
  				if ((t.nodeName + "").toLowerCase() === "svg") { //Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
  					return (cs || _getComputedStyle(t))[p] || 0;
  				} else if (t.getCTM && _isSVG(t)) {
  					return t.getBBox()[p] || 0;
  				}
  				var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
  					a = _dimensions[p],
  					i = a.length;
  				cs = cs || _getComputedStyle(t, null);
  				while (--i > -1) {
  					v -= parseFloat( _getStyle(t, "padding" + a[i], cs, true) ) || 0;
  					v -= parseFloat( _getStyle(t, "border" + a[i] + "Width", cs, true) ) || 0;
  				}
  				return v;
  			},

  			// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
  			_parsePosition = function(v, recObj) {
  				if (v === "contain" || v === "auto" || v === "auto auto") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
  					return v + " ";
  				}
  				if (v == null || v === "") {
  					v = "0 0";
  				}
  				var a = v.split(" "),
  					x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
  					y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1],
  					i;
  				if (a.length > 3 && !recObj) { //multiple positions
  					a = v.split(", ").join(",").split(",");
  					v = [];
  					for (i = 0; i < a.length; i++) {
  						v.push(_parsePosition(a[i]));
  					}
  					return v.join(",");
  				}
  				if (y == null) {
  					y = (x === "center") ? "50%" : "0";
  				} else if (y === "center") {
  					y = "50%";
  				}
  				if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
  					x = "50%";
  				}
  				v = x + " " + y + ((a.length > 2) ? " " + a[2] : "");
  				if (recObj) {
  					recObj.oxp = (x.indexOf("%") !== -1);
  					recObj.oyp = (y.indexOf("%") !== -1);
  					recObj.oxr = (x.charAt(1) === "=");
  					recObj.oyr = (y.charAt(1) === "=");
  					recObj.ox = parseFloat(x.replace(_NaNExp, ""));
  					recObj.oy = parseFloat(y.replace(_NaNExp, ""));
  					recObj.v = v;
  				}
  				return recObj || v;
  			},

  			/**
  			 * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
  			 * @param {(number|string)} e End value which is typically a string, but could be a number
  			 * @param {(number|string)} b Beginning value which is typically a string but could be a number
  			 * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
  			 */
  			_parseChange = function(e, b) {
  				if (typeof(e) === "function") {
  					e = e(_index, _target);
  				}
  				return (typeof(e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : (parseFloat(e) - parseFloat(b)) || 0;
  			},

  			/**
  			 * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
  			 * @param {Object} v Value to be parsed
  			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
  			 * @return {number} Parsed value
  			 */
  			_parseVal = function(v, d) {
  				if (typeof(v) === "function") {
  					v = v(_index, _target);
  				}
  				return (v == null) ? d : (typeof(v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
  			},

  			/**
  			 * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
  			 * @param {Object} v Value to be parsed
  			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
  			 * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
  			 * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
  			 * @return {number} parsed angle in radians
  			 */
  			_parseAngle = function(v, d, p, directionalEnd) {
  				var min = 0.000001,
  					cap, split, dif, result, isRelative;
  				if (typeof(v) === "function") {
  					v = v(_index, _target);
  				}
  				if (v == null) {
  					result = d;
  				} else if (typeof(v) === "number") {
  					result = v;
  				} else {
  					cap = 360;
  					split = v.split("_");
  					isRelative = (v.charAt(1) === "=");
  					dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
  					if (split.length) {
  						if (directionalEnd) {
  							directionalEnd[p] = d + dif;
  						}
  						if (v.indexOf("short") !== -1) {
  							dif = dif % cap;
  							if (dif !== dif % (cap / 2)) {
  								dif = (dif < 0) ? dif + cap : dif - cap;
  							}
  						}
  						if (v.indexOf("_cw") !== -1 && dif < 0) {
  							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
  						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
  							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
  						}
  					}
  					result = d + dif;
  				}
  				if (result < min && result > -min) {
  					result = 0;
  				}
  				return result;
  			},

  			_colorLookup = {aqua:[0,255,255],
  				lime:[0,255,0],
  				silver:[192,192,192],
  				black:[0,0,0],
  				maroon:[128,0,0],
  				teal:[0,128,128],
  				blue:[0,0,255],
  				navy:[0,0,128],
  				white:[255,255,255],
  				fuchsia:[255,0,255],
  				olive:[128,128,0],
  				yellow:[255,255,0],
  				orange:[255,165,0],
  				gray:[128,128,128],
  				purple:[128,0,128],
  				green:[0,128,0],
  				red:[255,0,0],
  				pink:[255,192,203],
  				cyan:[0,255,255],
  				transparent:[255,255,255,0]},

  			_hue = function(h, m1, m2) {
  				h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
  				return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
  			},

  			/**
  			 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
  			 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
  			 * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
  			 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
  			 */
  			_parseColor = CSSPlugin.parseColor = function(v, toHSL) {
  				var a, r, g, b, h, s, l, max, min, d, wasHSL;
  				if (!v) {
  					a = _colorLookup.black;
  				} else if (typeof(v) === "number") {
  					a = [v >> 16, (v >> 8) & 255, v & 255];
  				} else {
  					if (v.charAt(v.length - 1) === ",") { //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
  						v = v.substr(0, v.length - 1);
  					}
  					if (_colorLookup[v]) {
  						a = _colorLookup[v];
  					} else if (v.charAt(0) === "#") {
  						if (v.length === 4) { //for shorthand like #9F0
  							r = v.charAt(1);
  							g = v.charAt(2);
  							b = v.charAt(3);
  							v = "#" + r + r + g + g + b + b;
  						}
  						v = parseInt(v.substr(1), 16);
  						a = [v >> 16, (v >> 8) & 255, v & 255];
  					} else if (v.substr(0, 3) === "hsl") {
  						a = wasHSL = v.match(_numExp);
  						if (!toHSL) {
  							h = (Number(a[0]) % 360) / 360;
  							s = Number(a[1]) / 100;
  							l = Number(a[2]) / 100;
  							g = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
  							r = l * 2 - g;
  							if (a.length > 3) {
  								a[3] = Number(a[3]);
  							}
  							a[0] = _hue(h + 1 / 3, r, g);
  							a[1] = _hue(h, r, g);
  							a[2] = _hue(h - 1 / 3, r, g);
  						} else if (v.indexOf("=") !== -1) { //if relative values are found, just return the raw strings with the relative prefixes in place.
  							return v.match(_relNumExp);
  						}
  					} else {
  						a = v.match(_numExp) || _colorLookup.transparent;
  					}
  					a[0] = Number(a[0]);
  					a[1] = Number(a[1]);
  					a[2] = Number(a[2]);
  					if (a.length > 3) {
  						a[3] = Number(a[3]);
  					}
  				}
  				if (toHSL && !wasHSL) {
  					r = a[0] / 255;
  					g = a[1] / 255;
  					b = a[2] / 255;
  					max = Math.max(r, g, b);
  					min = Math.min(r, g, b);
  					l = (max + min) / 2;
  					if (max === min) {
  						h = s = 0;
  					} else {
  						d = max - min;
  						s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  						h = (max === r) ? (g - b) / d + (g < b ? 6 : 0) : (max === g) ? (b - r) / d + 2 : (r - g) / d + 4;
  						h *= 60;
  					}
  					a[0] = (h + 0.5) | 0;
  					a[1] = (s * 100 + 0.5) | 0;
  					a[2] = (l * 100 + 0.5) | 0;
  				}
  				return a;
  			},
  			_formatColors = function(s, toHSL) {
  				var colors = s.match(_colorExp) || [],
  					charIndex = 0,
  					parsed = "",
  					i, color, temp;
  				if (!colors.length) {
  					return s;
  				}
  				for (i = 0; i < colors.length; i++) {
  					color = colors[i];
  					temp = s.substr(charIndex, s.indexOf(color, charIndex)-charIndex);
  					charIndex += temp.length + color.length;
  					color = _parseColor(color, toHSL);
  					if (color.length === 3) {
  						color.push(1);
  					}
  					parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
  				}
  				return parsed + s.substr(charIndex);
  			},
  			_colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

  		for (p in _colorLookup) {
  			_colorExp += "|" + p + "\\b";
  		}
  		_colorExp = new RegExp(_colorExp+")", "gi");

  		CSSPlugin.colorStringFilter = function(a) {
  			var combined = a[0] + " " + a[1],
  				toHSL;
  			if (_colorExp.test(combined)) {
  				toHSL = (combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1);
  				a[0] = _formatColors(a[0], toHSL);
  				a[1] = _formatColors(a[1], toHSL);
  			}
  			_colorExp.lastIndex = 0;
  		};

  		if (!TweenLite.defaultStringFilter) {
  			TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter;
  		}

  		/**
  		 * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
  		 * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
  		 * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
  		 * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
  		 * @return {Function} formatter function
  		 */
  		var _getFormatter = function(dflt, clr, collapsible, multi) {
  				if (dflt == null) {
  					return function(v) {return v;};
  				}
  				var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
  					dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
  					pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
  					sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
  					delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
  					numVals = dVals.length,
  					dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
  					formatter;
  				if (!numVals) {
  					return function(v) {return v;};
  				}
  				if (clr) {
  					formatter = function(v) {
  						var color, vals, i, a;
  						if (typeof(v) === "number") {
  							v += dSfx;
  						} else if (multi && _commasOutsideParenExp.test(v)) {
  							a = v.replace(_commasOutsideParenExp, "|").split("|");
  							for (i = 0; i < a.length; i++) {
  								a[i] = formatter(a[i]);
  							}
  							return a.join(",");
  						}
  						color = (v.match(_colorExp) || [dColor])[0];
  						vals = v.split(color).join("").match(_valuesExp) || [];
  						i = vals.length;
  						if (numVals > i--) {
  							while (++i < numVals) {
  								vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
  							}
  						}
  						return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
  					};
  					return formatter;

  				}
  				formatter = function(v) {
  					var vals, a, i;
  					if (typeof(v) === "number") {
  						v += dSfx;
  					} else if (multi && _commasOutsideParenExp.test(v)) {
  						a = v.replace(_commasOutsideParenExp, "|").split("|");
  						for (i = 0; i < a.length; i++) {
  							a[i] = formatter(a[i]);
  						}
  						return a.join(",");
  					}
  					vals = v.match(_valuesExp) || [];
  					i = vals.length;
  					if (numVals > i--) {
  						while (++i < numVals) {
  							vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
  						}
  					}
  					return pfx + vals.join(delim) + sfx;
  				};
  				return formatter;
  			},

  			/**
  			 * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
  			 * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
  			 * @return {Function} a formatter function
  			 */
  			_getEdgeParser = function(props) {
  				props = props.split(",");
  				return function(t, e, p, cssp, pt, plugin, vars) {
  					var a = (e + "").split(" "),
  						i;
  					vars = {};
  					for (i = 0; i < 4; i++) {
  						vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
  					}
  					return cssp.parse(t, vars, pt, plugin);
  				};
  			},

  			// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
  			_setPluginRatio = _internals._setPluginRatio = function(v) {
  				this.plugin.setRatio(v);
  				var d = this.data,
  					proxy = d.proxy,
  					mpt = d.firstMPT,
  					min = 0.000001,
  					val, pt, i, str, p;
  				while (mpt) {
  					val = proxy[mpt.v];
  					if (mpt.r) {
  						val = mpt.r(val);
  					} else if (val < min && val > -min) {
  						val = 0;
  					}
  					mpt.t[mpt.p] = val;
  					mpt = mpt._next;
  				}
  				if (d.autoRotate) {
  					d.autoRotate.rotation = d.mod ? d.mod.call(this._tween, proxy.rotation, this.t, this._tween) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
  				}
  				//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.
  				if (v === 1 || v === 0) {
  					mpt = d.firstMPT;
  					p = (v === 1) ? "e" : "b";
  					while (mpt) {
  						pt = mpt.t;
  						if (!pt.type) {
  							pt[p] = pt.s + pt.xs0;
  						} else if (pt.type === 1) {
  							str = pt.xs0 + pt.s + pt.xs1;
  							for (i = 1; i < pt.l; i++) {
  								str += pt["xn"+i] + pt["xs"+(i+1)];
  							}
  							pt[p] = str;
  						}
  						mpt = mpt._next;
  					}
  				}
  			},

  			/**
  			 * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
  			 * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
  			 * @param {!string} p property name
  			 * @param {(number|string|object)} v value
  			 * @param {MiniPropTween=} next next MiniPropTween in the linked list
  			 * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
  			 */
  			MiniPropTween = function(t, p, v, next, r) {
  				this.t = t;
  				this.p = p;
  				this.v = v;
  				this.r = r;
  				if (next) {
  					next._prev = this;
  					this._next = next;
  				}
  			},

  			/**
  			 * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
  			 * This method returns an object that has the following properties:
  			 *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
  			 *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
  			 *  - firstMPT: the first MiniPropTween in the linked list
  			 *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
  			 * @param {!Object} t target object to be tweened
  			 * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
  			 * @param {!CSSPlugin} cssp The CSSPlugin instance
  			 * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
  			 * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
  			 * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
  			 * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
  			 */
  			_parseToProxy = _internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
  				var bpt = pt,
  					start = {},
  					end = {},
  					transform = cssp._transform,
  					oldForce = _forcePT,
  					i, p, xp, mpt, firstPT;
  				cssp._transform = null;
  				_forcePT = vars;
  				pt = firstPT = cssp.parse(t, vars, pt, plugin);
  				_forcePT = oldForce;
  				//break off from the linked list so the new ones are isolated.
  				if (shallow) {
  					cssp._transform = transform;
  					if (bpt) {
  						bpt._prev = null;
  						if (bpt._prev) {
  							bpt._prev._next = null;
  						}
  					}
  				}
  				while (pt && pt !== bpt) {
  					if (pt.type <= 1) {
  						p = pt.p;
  						end[p] = pt.s + pt.c;
  						start[p] = pt.s;
  						if (!shallow) {
  							mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
  							pt.c = 0;
  						}
  						if (pt.type === 1) {
  							i = pt.l;
  							while (--i > 0) {
  								xp = "xn" + i;
  								p = pt.p + "_" + xp;
  								end[p] = pt.data[xp];
  								start[p] = pt[xp];
  								if (!shallow) {
  									mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
  								}
  							}
  						}
  					}
  					pt = pt._next;
  				}
  				return {proxy:start, end:end, firstMPT:mpt, pt:firstPT};
  			},



  			/**
  			 * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
  			 * CSSPropTweens have the following optional properties as well (not defined through the constructor):
  			 *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
  			 *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
  			 *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
  			 *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
  			 *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
  			 * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
  			 * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
  			 * @param {number} s Starting numeric value
  			 * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
  			 * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
  			 * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
  			 * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
  			 * @param {boolean=} r If true, the value(s) should be rounded
  			 * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
  			 * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
  			 * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
  			 */
  			CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
  				this.t = t; //target
  				this.p = p; //property
  				this.s = s; //starting value
  				this.c = c; //change value
  				this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
  				if (!(t instanceof CSSPropTween)) {
  					_overwriteProps.push(this.n);
  				}
  				this.r = !r ? r : (typeof(r) === "function") ? r : Math.round; //round (boolean)
  				this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
  				if (pr) {
  					this.pr = pr;
  					_hasPriority = true;
  				}
  				this.b = (b === undefined) ? s : b;
  				this.e = (e === undefined) ? s + c : e;
  				if (next) {
  					this._next = next;
  					next._prev = this;
  				}
  			},

  			_addNonTweeningNumericPT = function(target, prop, start, end, next, overwriteProp) { //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
  				var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
  				pt.b = start;
  				pt.e = pt.xs0 = end;
  				return pt;
  			},

  			/**
  			 * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
  			 * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
  			 * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
  			 * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
  			 *
  			 * @param {!Object} t Target whose property will be tweened
  			 * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
  			 * @param {string} b Beginning value
  			 * @param {string} e Ending value
  			 * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
  			 * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
  			 * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
  			 * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
  			 * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
  			 * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
  			 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
  			 */
  			_parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
  				//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
  				b = b || dflt || "";
  				if (typeof(e) === "function") {
  					e = e(_index, _target);
  				}
  				pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
  				e += ""; //ensures it's a string
  				if (clrs && _colorExp.test(e + b)) { //if colors are found, normalize the formatting to rgba() or hsla().
  					e = [b, e];
  					CSSPlugin.colorStringFilter(e);
  					b = e[0];
  					e = e[1];
  				}
  				var ba = b.split(", ").join(",").split(" "), //beginning array
  					ea = e.split(", ").join(",").split(" "), //ending array
  					l = ba.length,
  					autoRound = (_autoRound !== false),
  					i, xi, ni, bv, ev, bnums, enums, bn, hasAlpha, temp, cv, str, useHSL;
  				if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
  					if ((e + b).indexOf("rgb") !== -1 || (e + b).indexOf("hsl") !== -1) { //keep rgb(), rgba(), hsl(), and hsla() values together! (remember, we're splitting on spaces)
  						ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
  						ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
  					} else {
  						ba = ba.join(" ").split(",").join(", ").split(" ");
  						ea = ea.join(" ").split(",").join(", ").split(" ");
  					}
  					l = ba.length;
  				}
  				if (l !== ea.length) {
  					//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
  					ba = (dflt || "").split(" ");
  					l = ba.length;
  				}
  				pt.plugin = plugin;
  				pt.setRatio = setRatio;
  				_colorExp.lastIndex = 0;
  				for (i = 0; i < l; i++) {
  					bv = ba[i];
  					ev = ea[i] + "";
  					bn = parseFloat(bv);
  					//if the value begins with a number (most common). It's fine if it has a suffix like px
  					if (bn || bn === 0) {
  						pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1) ? Math.round : false, true);

  					//if the value is a color
  					} else if (clrs && _colorExp.test(bv)) {
  						str = ev.indexOf(")") + 1;
  						str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.
  						useHSL = (ev.indexOf("hsl") !== -1 && _supportsOpacity);
  						temp = ev; //original string value so we can look for any prefix later.
  						bv = _parseColor(bv, useHSL);
  						ev = _parseColor(ev, useHSL);
  						hasAlpha = (bv.length + ev.length > 6);
  						if (hasAlpha && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
  							pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
  							pt.e = pt.e.split(ea[i]).join("transparent");
  						} else {
  							if (!_supportsOpacity) { //old versions of IE don't support rgba().
  								hasAlpha = false;
  							}
  							if (useHSL) {
  								pt.appendXtra(temp.substr(0, temp.indexOf("hsl")) + (hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true)
  									.appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false)
  									.appendXtra("", bv[2], _parseChange(ev[2], bv[2]), (hasAlpha ? "%," : "%" + str), false);
  							} else {
  								pt.appendXtra(temp.substr(0, temp.indexOf("rgb")) + (hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", Math.round, true)
  									.appendXtra("", bv[1], ev[1] - bv[1], ",", Math.round)
  									.appendXtra("", bv[2], ev[2] - bv[2], (hasAlpha ? "," : str), Math.round);
  							}

  							if (hasAlpha) {
  								bv = (bv.length < 4) ? 1 : bv[3];
  								pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
  							}
  						}
  						_colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.

  					} else {
  						bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

  						//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
  						if (!bnums) {
  							pt["xs" + pt.l] += (pt.l || pt["xs" + pt.l]) ? " " + ev : ev;

  						//loop through all the numbers that are found and construct the extra values on the pt.
  						} else {
  							enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
  							if (!enums || enums.length !== bnums.length) {
  								//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
  								return pt;
  							}
  							ni = 0;
  							for (xi = 0; xi < bnums.length; xi++) {
  								cv = bnums[xi];
  								temp = bv.indexOf(cv, ni);
  								pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px") ? Math.round : false, (xi === 0));
  								ni = temp + cv.length;
  							}
  							pt["xs" + pt.l] += bv.substr(ni);
  						}
  					}
  				}
  				//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
  				if (e.indexOf("=") !== -1) if (pt.data) {
  					str = pt.xs0 + pt.data.s;
  					for (i = 1; i < pt.l; i++) {
  						str += pt["xs" + i] + pt.data["xn" + i];
  					}
  					pt.e = str + pt["xs" + i];
  				}
  				if (!pt.l) {
  					pt.type = -1;
  					pt.xs0 = pt.e;
  				}
  				return pt.xfirst || pt;
  			},
  			i = 9;


  		p = CSSPropTween.prototype;
  		p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
  		while (--i > 0) {
  			p["xn" + i] = 0;
  			p["xs" + i] = "";
  		}
  		p.xs0 = "";
  		p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;


  		/**
  		 * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
  		 * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
  		 * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
  		 * @param {string=} pfx Prefix (if any)
  		 * @param {!number} s Starting value
  		 * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
  		 * @param {string=} sfx Suffix (if any)
  		 * @param {boolean=} r Round (if true).
  		 * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
  		 * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
  		 */
  		p.appendXtra = function(pfx, s, c, sfx, r, pad) {
  			var pt = this,
  				l = pt.l;
  			pt["xs" + l] += (pad && (l || pt["xs" + l])) ? " " + pfx : pfx || "";
  			if (!c) if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
  				pt["xs" + l] += s + (sfx || "");
  				return pt;
  			}
  			pt.l++;
  			pt.type = pt.setRatio ? 2 : 1;
  			pt["xs" + pt.l] = sfx || "";
  			if (l > 0) {
  				pt.data["xn" + l] = s + c;
  				pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
  				pt["xn" + l] = s;
  				if (!pt.plugin) {
  					pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
  					pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
  				}
  				return pt;
  			}
  			pt.data = {s:s + c};
  			pt.rxp = {};
  			pt.s = s;
  			pt.c = c;
  			pt.r = r;
  			return pt;
  		};

  		/**
  		 * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
  		 * @param {!string} p Property name (like "boxShadow" or "throwProps")
  		 * @param {Object=} options An object containing any of the following configuration options:
  		 *                      - defaultValue: the default value
  		 *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
  		 *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
  		 *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
  		 *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
  		 *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
  		 *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
  		 *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
  		 *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
  		 */
  		var SpecialProp = function(p, options) {
  				options = options || {};
  				this.p = options.prefix ? _checkPropPrefix(p) || p : p;
  				_specialProps[p] = _specialProps[this.p] = this;
  				this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
  				if (options.parser) {
  					this.parse = options.parser;
  				}
  				this.clrs = options.color;
  				this.multi = options.multi;
  				this.keyword = options.keyword;
  				this.dflt = options.defaultValue;
  				this.pr = options.priority || 0;
  			},

  			//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
  			_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
  				if (typeof(options) !== "object") {
  					options = {parser:defaults}; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
  				}
  				var a = p.split(","),
  					d = options.defaultValue,
  					i, temp;
  				defaults = defaults || [d];
  				for (i = 0; i < a.length; i++) {
  					options.prefix = (i === 0 && options.prefix);
  					options.defaultValue = defaults[i] || d;
  					temp = new SpecialProp(a[i], options);
  				}
  			},

  			//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
  			_registerPluginProp = _internals._registerPluginProp = function(p) {
  				if (!_specialProps[p]) {
  					var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
  					_registerComplexSpecialProp(p, {parser:function(t, e, p, cssp, pt, plugin, vars) {
  						var pluginClass = _globals.com.greensock.plugins[pluginName];
  						if (!pluginClass) {
  							_log("Error: " + pluginName + " js file not loaded.");
  							return pt;
  						}
  						pluginClass._cssRegister();
  						return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
  					}});
  				}
  			};


  		p = SpecialProp.prototype;

  		/**
  		 * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
  		 * @param {!Object} t target element
  		 * @param {(string|number|object)} b beginning value
  		 * @param {(string|number|object)} e ending (destination) value
  		 * @param {CSSPropTween=} pt next CSSPropTween in the linked list
  		 * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
  		 * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
  		 * @return {CSSPropTween=} First CSSPropTween in the linked list
  		 */
  		p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
  			var kwd = this.keyword,
  				i, ba, ea, l, bi, ei;
  			//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
  			if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
  				ba = b.replace(_commasOutsideParenExp, "|").split("|");
  				ea = e.replace(_commasOutsideParenExp, "|").split("|");
  			} else if (kwd) {
  				ba = [b];
  				ea = [e];
  			}
  			if (ea) {
  				l = (ea.length > ba.length) ? ea.length : ba.length;
  				for (i = 0; i < l; i++) {
  					b = ba[i] = ba[i] || this.dflt;
  					e = ea[i] = ea[i] || this.dflt;
  					if (kwd) {
  						bi = b.indexOf(kwd);
  						ei = e.indexOf(kwd);
  						if (bi !== ei) {
  							if (ei === -1) { //if the keyword isn't in the end value, remove it from the beginning one.
  								ba[i] = ba[i].split(kwd).join("");
  							} else if (bi === -1) { //if the keyword isn't in the beginning, add it.
  								ba[i] += " " + kwd;
  							}
  						}
  					}
  				}
  				b = ba.join(", ");
  				e = ea.join(", ");
  			}
  			return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
  		};

  		/**
  		 * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
  		 * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
  		 * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
  		 * @param {!Object} t Target object whose property is being tweened
  		 * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
  		 * @param {!string} p Property name
  		 * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
  		 * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
  		 * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
  		 * @param {Object=} vars Original vars object that contains the data for parsing.
  		 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
  		 */
  		p.parse = function(t, e, p, cssp, pt, plugin, vars) {
  			return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
  		};

  		/**
  		 * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
  		 *  1) Target object whose property should be tweened (typically a DOM element)
  		 *  2) The end/destination value (could be a string, number, object, or whatever you want)
  		 *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
  		 *
  		 * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
  		 *
  		 * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
  		 *      var start = target.style.width;
  		 *      return function(ratio) {
  		 *              target.style.width = (start + value * ratio) + "px";
  		 *              console.log("set width to " + target.style.width);
  		 *          }
  		 * }, 0);
  		 *
  		 * Then, when I do this tween, it will trigger my special property:
  		 *
  		 * TweenLite.to(element, 1, {css:{myCustomProp:100}});
  		 *
  		 * In the example, of course, we're just changing the width, but you can do anything you want.
  		 *
  		 * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
  		 * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
  		 * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
  		 */
  		CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
  			_registerComplexSpecialProp(name, {parser:function(t, e, p, cssp, pt, plugin, vars) {
  				var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
  				rv.plugin = plugin;
  				rv.setRatio = onInitTween(t, e, cssp._tween, p);
  				return rv;
  			}, priority:priority});
  		};






  		//transform-related methods and properties
  		CSSPlugin.useSVGTransformAttr = true; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
  		var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
  			_transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
  			_transformPropCSS = _prefixCSS + "transform",
  			_transformOriginProp = _checkPropPrefix("transformOrigin"),
  			_supports3D = (_checkPropPrefix("perspective") !== null),
  			Transform = _internals.Transform = function() {
  				this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
  				this.force3D = (CSSPlugin.defaultForce3D === false || !_supports3D) ? false : CSSPlugin.defaultForce3D || "auto";
  			},
  			_SVGElement = _gsScope.SVGElement,
  			_useSVGTransformAttr,
  			//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.

  			_createSVG = function(type, container, attributes) {
  				var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
  					reg = /([a-z])([A-Z])/g,
  					p;
  				for (p in attributes) {
  					element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
  				}
  				container.appendChild(element);
  				return element;
  			},
  			_docElement = _doc.documentElement || {},
  			_forceSVGTransformAttr = (function() {
  				//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
  				var force = _ieVers || (/Android/i.test(_agent) && !_gsScope.chrome),
  					svg, rect, width;
  				if (_doc.createElementNS && !force) { //IE8 and earlier doesn't support SVG anyway
  					svg = _createSVG("svg", _docElement);
  					rect = _createSVG("rect", svg, {width:100, height:50, x:100});
  					width = rect.getBoundingClientRect().width;
  					rect.style[_transformOriginProp] = "50% 50%";
  					rect.style[_transformProp] = "scaleX(0.5)";
  					force = (width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D)); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
  					_docElement.removeChild(svg);
  				}
  				return force;
  			})(),
  			_parseSVGOrigin = function(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
  				var tm = e._gsTransform,
  					m = _getMatrix(e, true),
  					v, x, y, xOrigin, yOrigin, a, b, c, d, tx, ty, determinant, xOriginOld, yOriginOld;
  				if (tm) {
  					xOriginOld = tm.xOrigin; //record the original values before we alter them.
  					yOriginOld = tm.yOrigin;
  				}
  				if (!absolute || (v = absolute.split(" ")).length < 2) {
  					b = e.getBBox();
  					if (b.x === 0 && b.y === 0 && b.width + b.height === 0) { //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
  						b = {x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0, y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0, width:0, height:0};
  					}
  					local = _parsePosition(local).split(" ");
  					v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x,
  						 (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
  				}
  				decoratee.xOrigin = xOrigin = parseFloat(v[0]);
  				decoratee.yOrigin = yOrigin = parseFloat(v[1]);
  				if (absolute && m !== _identity2DMatrix) { //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
  					a = m[0];
  					b = m[1];
  					c = m[2];
  					d = m[3];
  					tx = m[4];
  					ty = m[5];
  					determinant = (a * d - b * c);
  					if (determinant) { //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
  						x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + ((c * ty - d * tx) / determinant);
  						y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - ((a * ty - b * tx) / determinant);
  						xOrigin = decoratee.xOrigin = v[0] = x;
  						yOrigin = decoratee.yOrigin = v[1] = y;
  					}
  				}
  				if (tm) { //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
  					if (skipRecord) {
  						decoratee.xOffset = tm.xOffset;
  						decoratee.yOffset = tm.yOffset;
  						tm = decoratee;
  					}
  					if (smoothOrigin || (smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false)) {
  						x = xOrigin - xOriginOld;
  						y = yOrigin - yOriginOld;
  						//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
  						//tm.x -= x - (x * m[0] + y * m[2]);
  						//tm.y -= y - (x * m[1] + y * m[3]);
  						tm.xOffset += (x * m[0] + y * m[2]) - x;
  						tm.yOffset += (x * m[1] + y * m[3]) - y;
  					} else {
  						tm.xOffset = tm.yOffset = 0;
  					}
  				}
  				if (!skipRecord) {
  					e.setAttribute("data-svg-origin", v.join(" "));
  				}
  			},
  			_getBBoxHack = function(swapIfPossible) { //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  				var svg = _createElement("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
  					oldParent = this.parentNode,
  					oldSibling = this.nextSibling,
  					oldCSS = this.style.cssText,
  					bbox;
  				_docElement.appendChild(svg);
  				svg.appendChild(this);
  				this.style.display = "block";
  				if (swapIfPossible) {
  					try {
  						bbox = this.getBBox();
  						this._originalGetBBox = this.getBBox;
  						this.getBBox = _getBBoxHack;
  					} catch (e) { }
  				} else if (this._originalGetBBox) {
  					bbox = this._originalGetBBox();
  				}
  				if (oldSibling) {
  					oldParent.insertBefore(this, oldSibling);
  				} else {
  					oldParent.appendChild(this);
  				}
  				_docElement.removeChild(svg);
  				this.style.cssText = oldCSS;
  				return bbox;
  			},
  			_getBBox = function(e) {
  				try {
  					return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  				} catch (error) {
  					return _getBBoxHack.call(e, true);
  				}
  			},
  			_isSVG = function(e) { //reports if the element is an SVG on which getBBox() actually works
  				return !!(_SVGElement && e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  			},
  			_identity2DMatrix = [1,0,0,1,0,0],
  			_getMatrix = function(e, force2D) {
  				var tm = e._gsTransform || new Transform(),
  					rnd = 100000,
  					style = e.style,
  					isDefault, s, m, n, dec, none;
  				if (_transformProp) {
  					s = _getStyle(e, _transformPropCSS, null, true);
  				} else if (e.currentStyle) {
  					//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
  					s = e.currentStyle.filter.match(_ieGetMatrixExp);
  					s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
  				}
  				isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
  				if (_transformProp && ((none = (!_getComputedStyle(e) || _getComputedStyle(e).display === "none")) || !e.parentNode)) { //note: Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  					if (none) { //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
  						n = style.display;
  						style.display = "block";
  					}
  					if (!e.parentNode) {
  						dec = 1; //flag
  						_docElement.appendChild(e);
  					}
  					s = _getStyle(e, _transformPropCSS, null, true);
  					isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
  					if (n) {
  						style.display = n;
  					} else if (none) {
  						_removeProp(style, "display");
  					}
  					if (dec) {
  						_docElement.removeChild(e);
  					}
  				}
  				if (tm.svg || (e.getCTM && _isSVG(e))) {
  					if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) { //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
  						s = style[_transformProp];
  						isDefault = 0;
  					}
  					m = e.getAttribute("transform");
  					if (isDefault && m) {
  						m = e.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
  						s = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")";
  						isDefault = 0;
  					}
  				}
  				if (isDefault) {
  					return _identity2DMatrix;
  				}
  				//split the matrix values out into an array (m for matrix)
  				m = (s || "").match(_numExp) || [];
  				i = m.length;
  				while (--i > -1) {
  					n = Number(m[i]);
  					m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
  				}
  				return (force2D && m.length > 6) ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
  			},

  			/**
  			 * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
  			 * @param {!Object} t target element
  			 * @param {Object=} cs computed style object (optional)
  			 * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
  			 * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
  			 * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
  			 */
  			_getTransform = _internals.getTransform = function(t, cs, rec, parse) {
  				if (t._gsTransform && rec && !parse) {
  					return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
  				}
  				var tm = rec ? t._gsTransform || new Transform() : new Transform(),
  					invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
  					min = 0.00002,
  					rnd = 100000,
  					zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin  || 0 : 0,
  					defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
  					m, i, scaleX, scaleY, rotation, skewX;

  				tm.svg = !!(t.getCTM && _isSVG(t));
  				if (tm.svg) {
  					_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
  					_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
  				}
  				m = _getMatrix(t);
  				if (m !== _identity2DMatrix) {

  					if (m.length === 16) {
  						//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
  						var a11 = m[0], a21 = m[1], a31 = m[2], a41 = m[3],
  							a12 = m[4], a22 = m[5], a32 = m[6], a42 = m[7],
  							a13 = m[8], a23 = m[9], a33 = m[10],
  							a14 = m[12], a24 = m[13], a34 = m[14],
  							a43 = m[11],
  							angle = Math.atan2(a32, a33),
  							t1, t2, t3, cos, sin;
  						//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
  						if (tm.zOrigin) {
  							a34 = -tm.zOrigin;
  							a14 = a13*a34-m[12];
  							a24 = a23*a34-m[13];
  							a34 = a33*a34+tm.zOrigin-m[14];
  						}
  						//note for possible future consolidation: rotationX: Math.atan2(a32, a33), rotationY: Math.atan2(-a31, Math.sqrt(a33 * a33 + a32 * a32)), rotation: Math.atan2(a21, a11), skew: Math.atan2(a12, a22). However, it doesn't seem to be quite as reliable as the full-on backwards rotation procedure.
  						tm.rotationX = angle * _RAD2DEG;
  						//rotationX
  						if (angle) {
  							cos = Math.cos(-angle);
  							sin = Math.sin(-angle);
  							t1 = a12*cos+a13*sin;
  							t2 = a22*cos+a23*sin;
  							t3 = a32*cos+a33*sin;
  							a13 = a12*-sin+a13*cos;
  							a23 = a22*-sin+a23*cos;
  							a33 = a32*-sin+a33*cos;
  							a43 = a42*-sin+a43*cos;
  							a12 = t1;
  							a22 = t2;
  							a32 = t3;
  						}
  						//rotationY
  						angle = Math.atan2(-a31, a33);
  						tm.rotationY = angle * _RAD2DEG;
  						if (angle) {
  							cos = Math.cos(-angle);
  							sin = Math.sin(-angle);
  							t1 = a11*cos-a13*sin;
  							t2 = a21*cos-a23*sin;
  							t3 = a31*cos-a33*sin;
  							a23 = a21*sin+a23*cos;
  							a33 = a31*sin+a33*cos;
  							a43 = a41*sin+a43*cos;
  							a11 = t1;
  							a21 = t2;
  							a31 = t3;
  						}
  						//rotationZ
  						angle = Math.atan2(a21, a11);
  						tm.rotation = angle * _RAD2DEG;
  						if (angle) {
  							cos = Math.cos(angle);
  							sin = Math.sin(angle);
  							t1 = a11*cos+a21*sin;
  							t2 = a12*cos+a22*sin;
  							t3 = a13*cos+a23*sin;
  							a21 = a21*cos-a11*sin;
  							a22 = a22*cos-a12*sin;
  							a23 = a23*cos-a13*sin;
  							a11 = t1;
  							a12 = t2;
  							a13 = t3;
  						}

  						if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) { //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
  							tm.rotationX = tm.rotation = 0;
  							tm.rotationY = 180 - tm.rotationY;
  						}

  						//skewX
  						angle = Math.atan2(a12, a22);

  						//scales
  						tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31) * rnd + 0.5) | 0) / rnd;
  						tm.scaleY = ((Math.sqrt(a22 * a22 + a32 * a32) * rnd + 0.5) | 0) / rnd;
  						tm.scaleZ = ((Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33) * rnd + 0.5) | 0) / rnd;
  						a11 /= tm.scaleX;
  						a12 /= tm.scaleY;
  						a21 /= tm.scaleX;
  						a22 /= tm.scaleY;
  						if (Math.abs(angle) > min) {
  							tm.skewX = angle * _RAD2DEG;
  							a12 = 0; //unskews
  							if (tm.skewType !== "simple") {
  								tm.scaleY *= 1 / Math.cos(angle); //by default, we compensate the scale based on the skew so that the element maintains a similar proportion when skewed, so we have to alter the scaleY here accordingly to match the default (non-adjusted) skewing that CSS does (stretching more and more as it skews).
  							}

  						} else {
  							tm.skewX = 0;
  						}

  						/* //for testing purposes
  						var transform = "matrix3d(",
  							comma = ",",
  							zero = "0";
  						a13 /= tm.scaleZ;
  						a23 /= tm.scaleZ;
  						a31 /= tm.scaleX;
  						a32 /= tm.scaleY;
  						a33 /= tm.scaleZ;
  						transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
  						transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
  						transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
  						transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
  						transform += a14 + comma + a24 + comma + a34 + comma + (tm.perspective ? (1 + (-a34 / tm.perspective)) : 1) + ")";
  						console.log(transform);
  						document.querySelector(".test").style[_transformProp] = transform;
  						*/

  						tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
  						tm.x = a14;
  						tm.y = a24;
  						tm.z = a34;
  						if (tm.svg) {
  							tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
  							tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
  						}

  					} else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY))) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
  						var k = (m.length >= 6),
  							a = k ? m[0] : 1,
  							b = m[1] || 0,
  							c = m[2] || 0,
  							d = k ? m[3] : 1;
  						tm.x = m[4] || 0;
  						tm.y = m[5] || 0;
  						scaleX = Math.sqrt(a * a + b * b);
  						scaleY = Math.sqrt(d * d + c * c);
  						rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
  						skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
  						tm.scaleX = scaleX;
  						tm.scaleY = scaleY;
  						tm.rotation = rotation;
  						tm.skewX = skewX;
  						if (_supports3D) {
  							tm.rotationX = tm.rotationY = tm.z = 0;
  							tm.perspective = defaultTransformPerspective;
  							tm.scaleZ = 1;
  						}
  						if (tm.svg) {
  							tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
  							tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
  						}
  					}
  					if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
  						if (invX) {
  							tm.scaleX *= -1;
  							tm.skewX += (tm.rotation <= 0) ? 180 : -180;
  							tm.rotation += (tm.rotation <= 0) ? 180 : -180;
  						} else {
  							tm.scaleY *= -1;
  							tm.skewX += (tm.skewX <= 0) ? 180 : -180;
  						}
  					}
  					tm.zOrigin = zOrigin;
  					//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
  					for (i in tm) {
  						if (tm[i] < min) if (tm[i] > -min) {
  							tm[i] = 0;
  						}
  					}
  				}
  				//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
  				if (rec) {
  					t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
  					if (tm.svg) { //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
  						if (_useSVGTransformAttr && t.style[_transformProp]) {
  							TweenLite.delayedCall(0.001, function(){ //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
  								_removeProp(t.style, _transformProp);
  							});
  						} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
  							TweenLite.delayedCall(0.001, function(){
  								t.removeAttribute("transform");
  							});
  						}
  					}
  				}
  				return tm;
  			},

  			//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
  			_setIETransformRatio = function(v) {
  				var t = this.data, //refers to the element's _gsTransform object
  					ang = -t.rotation * _DEG2RAD,
  					skew = ang + t.skewX * _DEG2RAD,
  					rnd = 100000,
  					a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
  					b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
  					c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
  					d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
  					style = this.t.style,
  					cs = this.t.currentStyle,
  					filters, val;
  				if (!cs) {
  					return;
  				}
  				val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
  				b = -c;
  				c = -val;
  				filters = cs.filter;
  				style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
  				var w = this.t.offsetWidth,
  					h = this.t.offsetHeight,
  					clip = (cs.position !== "absolute"),
  					m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
  					ox = t.x + (w * t.xPercent / 100),
  					oy = t.y + (h * t.yPercent / 100),
  					dx, dy;

  				//if transformOrigin is being used, adjust the offset x and y
  				if (t.ox != null) {
  					dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
  					dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
  					ox += dx - (dx * a + dy * b);
  					oy += dy - (dx * c + dy * d);
  				}

  				if (!clip) {
  					m += ", sizingMethod='auto expand')";
  				} else {
  					dx = (w / 2);
  					dy = (h / 2);
  					//translate to ensure that transformations occur around the correct origin (default is center).
  					m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
  				}
  				if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
  					style.filter = filters.replace(_ieSetMatrixExp, m);
  				} else {
  					style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
  				}

  				//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
  				if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf(filters.indexOf("Alpha")) === -1) {
  					style.removeAttribute("filter");
  				}

  				//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
  				if (!clip) {
  					var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
  						marg, prop, dif;
  					dx = t.ieOffsetX || 0;
  					dy = t.ieOffsetY || 0;
  					t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
  					t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
  					for (i = 0; i < 4; i++) {
  						prop = _margins[i];
  						marg = cs[prop];
  						//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
  						val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
  						if (val !== t[prop]) {
  							dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
  						} else {
  							dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
  						}
  						style[prop] = (t[prop] = Math.round( val - dif * ((i === 0 || i === 2) ? 1 : mult) )) + "px";
  					}
  				}
  			},

  			/* translates a super small decimal to a string WITHOUT scientific notation
  			_safeDecimal = function(n) {
  				var s = (n < 0 ? -n : n) + "",
  					a = s.split("e-");
  				return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
  			},
  			*/

  			_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(v) {
  				var t = this.data, //refers to the element's _gsTransform object
  					style = this.t.style,
  					angle = t.rotation,
  					rotationX = t.rotationX,
  					rotationY = t.rotationY,
  					sx = t.scaleX,
  					sy = t.scaleY,
  					sz = t.scaleZ,
  					x = t.x,
  					y = t.y,
  					z = t.z,
  					isSVG = t.svg,
  					perspective = t.perspective,
  					force3D = t.force3D,
  					skewY = t.skewY,
  					skewX = t.skewX,
  					t1,	a11, a12, a13, a21, a22, a23, a31, a32, a33, a41, a42, a43,
  					zOrigin, min, cos, sin, t2, transform, comma, zero, skew, rnd;
  				if (skewY) { //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
  					skewX += skewY;
  					angle += skewY;
  				}

  				//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
  				if (((((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1) || (_useSVGTransformAttr && isSVG) || !_supports3D) { //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.

  					//2D
  					if (angle || skewX || isSVG) {
  						angle *= _DEG2RAD;
  						skew = skewX * _DEG2RAD;
  						rnd = 100000;
  						a11 = Math.cos(angle) * sx;
  						a21 = Math.sin(angle) * sx;
  						a12 = Math.sin(angle - skew) * -sy;
  						a22 = Math.cos(angle - skew) * sy;
  						if (skew && t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
  							t1 = Math.tan(skew - skewY * _DEG2RAD);
  							t1 = Math.sqrt(1 + t1 * t1);
  							a12 *= t1;
  							a22 *= t1;
  							if (skewY) {
  								t1 = Math.tan(skewY * _DEG2RAD);
  								t1 = Math.sqrt(1 + t1 * t1);
  								a11 *= t1;
  								a21 *= t1;
  							}
  						}
  						if (isSVG) {
  							x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
  							y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
  							if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) { //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
  								min = this.t.getBBox();
  								x += t.xPercent * 0.01 * min.width;
  								y += t.yPercent * 0.01 * min.height;
  							}
  							min = 0.000001;
  							if (x < min) if (x > -min) {
  								x = 0;
  							}
  							if (y < min) if (y > -min) {
  								y = 0;
  							}
  						}
  						transform = (((a11 * rnd) | 0) / rnd) + "," + (((a21 * rnd) | 0) / rnd) + "," + (((a12 * rnd) | 0) / rnd) + "," + (((a22 * rnd) | 0) / rnd) + "," + x + "," + y + ")";
  						if (isSVG && _useSVGTransformAttr) {
  							this.t.setAttribute("transform", "matrix(" + transform);
  						} else {
  							//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
  							style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
  						}
  					} else {
  						style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
  					}
  					return;

  				}
  				if (_isFirefox) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
  					min = 0.0001;
  					if (sx < min && sx > -min) {
  						sx = sz = 0.00002;
  					}
  					if (sy < min && sy > -min) {
  						sy = sz = 0.00002;
  					}
  					if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
  						perspective = 0;
  					}
  				}
  				if (angle || skewX) {
  					angle *= _DEG2RAD;
  					cos = a11 = Math.cos(angle);
  					sin = a21 = Math.sin(angle);
  					if (skewX) {
  						angle -= skewX * _DEG2RAD;
  						cos = Math.cos(angle);
  						sin = Math.sin(angle);
  						if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
  							t1 = Math.tan((skewX - skewY) * _DEG2RAD);
  							t1 = Math.sqrt(1 + t1 * t1);
  							cos *= t1;
  							sin *= t1;
  							if (t.skewY) {
  								t1 = Math.tan(skewY * _DEG2RAD);
  								t1 = Math.sqrt(1 + t1 * t1);
  								a11 *= t1;
  								a21 *= t1;
  							}
  						}
  					}
  					a12 = -sin;
  					a22 = cos;

  				} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) { //if we're only translating and/or 2D scaling, this is faster...
  					style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z +"px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
  					return;
  				} else {
  					a11 = a22 = 1;
  					a12 = a21 = 0;
  				}
  				// KEY  INDEX   AFFECTS a[row][column]
  				// a11  0       rotation, rotationY, scaleX
  				// a21  1       rotation, rotationY, scaleX
  				// a31  2       rotationY, scaleX
  				// a41  3       rotationY, scaleX
  				// a12  4       rotation, skewX, rotationX, scaleY
  				// a22  5       rotation, skewX, rotationX, scaleY
  				// a32  6       rotationX, scaleY
  				// a42  7       rotationX, scaleY
  				// a13  8       rotationY, rotationX, scaleZ
  				// a23  9       rotationY, rotationX, scaleZ
  				// a33  10      rotationY, rotationX, scaleZ
  				// a43  11      rotationY, rotationX, perspective, scaleZ
  				// a14  12      x, zOrigin, svgOrigin
  				// a24  13      y, zOrigin, svgOrigin
  				// a34  14      z, zOrigin
  				// a44  15
  				// rotation: Math.atan2(a21, a11)
  				// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
  				// rotationX: Math.atan2(a32, a33)
  				a33 = 1;
  				a13 = a23 = a31 = a32 = a41 = a42 = 0;
  				a43 = (perspective) ? -1 / perspective : 0;
  				zOrigin = t.zOrigin;
  				min = 0.000001; //threshold below which browsers use scientific notation which won't work.
  				comma = ",";
  				zero = "0";
  				angle = rotationY * _DEG2RAD;
  				if (angle) {
  					cos = Math.cos(angle);
  					sin = Math.sin(angle);
  					a31 = -sin;
  					a41 = a43*-sin;
  					a13 = a11*sin;
  					a23 = a21*sin;
  					a33 = cos;
  					a43 *= cos;
  					a11 *= cos;
  					a21 *= cos;
  				}
  				angle = rotationX * _DEG2RAD;
  				if (angle) {
  					cos = Math.cos(angle);
  					sin = Math.sin(angle);
  					t1 = a12*cos+a13*sin;
  					t2 = a22*cos+a23*sin;
  					a32 = a33*sin;
  					a42 = a43*sin;
  					a13 = a12*-sin+a13*cos;
  					a23 = a22*-sin+a23*cos;
  					a33 = a33*cos;
  					a43 = a43*cos;
  					a12 = t1;
  					a22 = t2;
  				}
  				if (sz !== 1) {
  					a13*=sz;
  					a23*=sz;
  					a33*=sz;
  					a43*=sz;
  				}
  				if (sy !== 1) {
  					a12*=sy;
  					a22*=sy;
  					a32*=sy;
  					a42*=sy;
  				}
  				if (sx !== 1) {
  					a11*=sx;
  					a21*=sx;
  					a31*=sx;
  					a41*=sx;
  				}

  				if (zOrigin || isSVG) {
  					if (zOrigin) {
  						x += a13*-zOrigin;
  						y += a23*-zOrigin;
  						z += a33*-zOrigin+zOrigin;
  					}
  					if (isSVG) { //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
  						x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
  						y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
  					}
  					if (x < min && x > -min) {
  						x = zero;
  					}
  					if (y < min && y > -min) {
  						y = zero;
  					}
  					if (z < min && z > -min) {
  						z = 0; //don't use string because we calculate perspective later and need the number.
  					}
  				}

  				//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
  				transform = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(");
  				transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
  				transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
  				if (rotationX || rotationY || sz !== 1) { //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
  					transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
  					transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
  				} else {
  					transform += ",0,0,0,0,1,0,";
  				}
  				transform += x + comma + y + comma + z + comma + (perspective ? (1 + (-z / perspective)) : 1) + ")";

  				style[_transformProp] = transform;
  			};

  		p = Transform.prototype;
  		p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
  		p.scaleX = p.scaleY = p.scaleZ = 1;

  		_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {parser:function(t, e, parsingProp, cssp, pt, plugin, vars) {
  			if (cssp._lastParsedTransform === vars) { return pt; } //only need to parse the transform once, and only if the browser supports it.
  			cssp._lastParsedTransform = vars;
  			var scaleFunc = (vars.scale && typeof(vars.scale) === "function") ? vars.scale : 0, //if there's a function-based "scale" value, swap in the resulting numeric value temporarily. Otherwise, if it's called for both scaleX and scaleY independently, they may not match (like if the function uses Math.random()).
  				swapFunc;
  			if (typeof(vars[parsingProp]) === "function") { //whatever property triggers the initial parsing might be a function-based value in which case it already got called in parse(), thus we don't want to call it again in here. The most efficient way to avoid this is to temporarily swap the value directly into the vars object, and then after we do all our parsing in this function, we'll swap it back again.
  				swapFunc = vars[parsingProp];
  				vars[parsingProp] = e;
  			}
  			if (scaleFunc) {
  				vars.scale = scaleFunc(_index, t);
  			}
  			var originalGSTransform = t._gsTransform,
  				style = t.style,
  				min = 0.000001,
  				i = _transformProps.length,
  				v = vars,
  				endRotations = {},
  				transformOriginString = "transformOrigin",
  				m1 = _getTransform(t, _cs, true, v.parseTransform),
  				orig = v.transform && ((typeof(v.transform) === "function") ? v.transform(_index, _target) : v.transform),
  				m2, copy, has3D, hasChange, dr, x, y, matrix, p;
  			m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
  			cssp._transform = m1;
  			if (orig && typeof(orig) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
  				copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
  				copy[_transformProp] = orig;
  				copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
  				copy.position = "absolute";
  				if (orig.indexOf("%") !== -1) { //%-based translations will fail unless we set the width/height to match the original target...
  					copy.width = _getStyle(t, "width");
  					copy.height = _getStyle(t, "height");
  				}
  				_doc.body.appendChild(_tempDiv);
  				m2 = _getTransform(_tempDiv, null, false);
  				if (m1.skewType === "simple") { //the default _getTransform() reports the skewX/scaleY as if skewType is "compensated", thus we need to adjust that here if skewType is "simple".
  					m2.scaleY *= Math.cos(m2.skewX * _DEG2RAD);
  				}
  				if (m1.svg) { //if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
  					x = m1.xOrigin;
  					y = m1.yOrigin;
  					m2.x -= m1.xOffset;
  					m2.y -= m1.yOffset;
  					if (v.transformOrigin || v.svgOrigin) { //if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
  						orig = {};
  						_parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);
  						x = orig.xOrigin;
  						y = orig.yOrigin;
  						m2.x -= orig.xOffset - m1.xOffset;
  						m2.y -= orig.yOffset - m1.yOffset;
  					}
  					if (x || y) {
  						matrix = _getMatrix(_tempDiv, true);
  						m2.x -= x - (x * matrix[0] + y * matrix[2]);
  						m2.y -= y - (x * matrix[1] + y * matrix[3]);
  					}
  				}
  				_doc.body.removeChild(_tempDiv);
  				if (!m2.perspective) {
  					m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
  				}
  				if (v.xPercent != null) {
  					m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
  				}
  				if (v.yPercent != null) {
  					m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
  				}
  			} else if (typeof(v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
  				m2 = {scaleX:_parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
  					scaleY:_parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
  					scaleZ:_parseVal(v.scaleZ, m1.scaleZ),
  					x:_parseVal(v.x, m1.x),
  					y:_parseVal(v.y, m1.y),
  					z:_parseVal(v.z, m1.z),
  					xPercent:_parseVal(v.xPercent, m1.xPercent),
  					yPercent:_parseVal(v.yPercent, m1.yPercent),
  					perspective:_parseVal(v.transformPerspective, m1.perspective)};
  				dr = v.directionalRotation;
  				if (dr != null) {
  					if (typeof(dr) === "object") {
  						for (copy in dr) {
  							v[copy] = dr[copy];
  						}
  					} else {
  						v.rotation = dr;
  					}
  				}
  				if (typeof(v.x) === "string" && v.x.indexOf("%") !== -1) {
  					m2.x = 0;
  					m2.xPercent = _parseVal(v.x, m1.xPercent);
  				}
  				if (typeof(v.y) === "string" && v.y.indexOf("%") !== -1) {
  					m2.y = 0;
  					m2.yPercent = _parseVal(v.y, m1.yPercent);
  				}

  				m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : ("rotationZ" in v) ? v.rotationZ : m1.rotation, m1.rotation, "rotation", endRotations);
  				if (_supports3D) {
  					m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
  					m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
  				}
  				m2.skewX = _parseAngle(v.skewX, m1.skewX);
  				m2.skewY = _parseAngle(v.skewY, m1.skewY);
  			}
  			if (_supports3D && v.force3D != null) {
  				m1.force3D = v.force3D;
  				hasChange = true;
  			}

  			has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
  			if (!has3D && v.scale != null) {
  				m2.scaleZ = 1; //no need to tween scaleZ.
  			}

  			while (--i > -1) {
  				p = _transformProps[i];
  				orig = m2[p] - m1[p];
  				if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
  					hasChange = true;
  					pt = new CSSPropTween(m1, p, m1[p], orig, pt);
  					if (p in endRotations) {
  						pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
  					}
  					pt.xs0 = 0; //ensures the value stays numeric in setRatio()
  					pt.plugin = plugin;
  					cssp._overwriteProps.push(pt.n);
  				}
  			}

  			orig = v.transformOrigin;
  			if (m1.svg && (orig || v.svgOrigin)) {
  				x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
  				y = m1.yOffset;
  				_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
  				pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
  				pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
  				if (x !== m1.xOffset || y !== m1.yOffset) {
  					pt = _addNonTweeningNumericPT(m1, "xOffset", (originalGSTransform ? x : m1.xOffset), m1.xOffset, pt, transformOriginString);
  					pt = _addNonTweeningNumericPT(m1, "yOffset", (originalGSTransform ? y : m1.yOffset), m1.yOffset, pt, transformOriginString);
  				}
  				orig = "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
  			}
  			if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
  				if (_transformProp) {
  					hasChange = true;
  					p = _transformOriginProp;
  					orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
  					pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
  					pt.b = style[p];
  					pt.plugin = plugin;
  					if (_supports3D) {
  						copy = m1.zOrigin;
  						orig = orig.split(" ");
  						m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
  						pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
  						pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
  						pt.b = copy;
  						pt.xs0 = pt.e = m1.zOrigin;
  					} else {
  						pt.xs0 = pt.e = orig;
  					}

  					//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
  				} else {
  					_parsePosition(orig + "", m1);
  				}
  			}
  			if (hasChange) {
  				cssp._transformType = (!(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3)) ? 3 : 2; //quicker than calling cssp._enableTransforms();
  			}
  			if (swapFunc) {
  				vars[parsingProp] = swapFunc;
  			}
  			if (scaleFunc) {
  				vars.scale = scaleFunc;
  			}
  			return pt;
  		}, prefix:true});

  		_registerComplexSpecialProp("boxShadow", {defaultValue:"0px 0px 0px 0px #999", prefix:true, color:true, multi:true, keyword:"inset"});

  		_registerComplexSpecialProp("borderRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
  			e = this.format(e);
  			var props = ["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],
  				style = t.style,
  				ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
  			w = parseFloat(t.offsetWidth);
  			h = parseFloat(t.offsetHeight);
  			ea1 = e.split(" ");
  			for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
  				if (this.p.indexOf("border")) { //older browsers used a prefix
  					props[i] = _checkPropPrefix(props[i]);
  				}
  				bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
  				if (bs.indexOf(" ") !== -1) {
  					bs2 = bs.split(" ");
  					bs = bs2[0];
  					bs2 = bs2[1];
  				}
  				es = es2 = ea1[i];
  				bn = parseFloat(bs);
  				bsfx = bs.substr((bn + "").length);
  				rel = (es.charAt(1) === "=");
  				if (rel) {
  					en = parseInt(es.charAt(0)+"1", 10);
  					es = es.substr(2);
  					en *= parseFloat(es);
  					esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
  				} else {
  					en = parseFloat(es);
  					esfx = es.substr((en + "").length);
  				}
  				if (esfx === "") {
  					esfx = _suffixMap[p] || bsfx;
  				}
  				if (esfx !== bsfx) {
  					hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
  					vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
  					if (esfx === "%") {
  						bs = (hn / w * 100) + "%";
  						bs2 = (vn / h * 100) + "%";
  					} else if (esfx === "em") {
  						em = _convertToPixels(t, "borderLeft", 1, "em");
  						bs = (hn / em) + "em";
  						bs2 = (vn / em) + "em";
  					} else {
  						bs = hn + "px";
  						bs2 = vn + "px";
  					}
  					if (rel) {
  						es = (parseFloat(bs) + en) + esfx;
  						es2 = (parseFloat(bs2) + en) + esfx;
  					}
  				}
  				pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
  			}
  			return pt;
  		}, prefix:true, formatter:_getFormatter("0px 0px 0px 0px", false, true)});
  		_registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
  			return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
  		}, prefix:true, formatter:_getFormatter("0px 0px", false, true)});
  		_registerComplexSpecialProp("backgroundPosition", {defaultValue:"0 0", parser:function(t, e, p, cssp, pt, plugin) {
  			var bp = "background-position",
  				cs = (_cs || _getComputedStyle(t, null)),
  				bs = this.format( ((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
  				es = this.format(e),
  				ba, ea, i, pct, overlap, src;
  			if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
  				src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
  				if (src && src !== "none") {
  					ba = bs.split(" ");
  					ea = es.split(" ");
  					_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
  					i = 2;
  					while (--i > -1) {
  						bs = ba[i];
  						pct = (bs.indexOf("%") !== -1);
  						if (pct !== (ea[i].indexOf("%") !== -1)) {
  							overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
  							ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
  						}
  					}
  					bs = ba.join(" ");
  				}
  			}
  			return this.parseComplex(t.style, bs, es, pt, plugin);
  		}, formatter:_parsePosition});
  		_registerComplexSpecialProp("backgroundSize", {defaultValue:"0 0", formatter:function(v) {
  			v += ""; //ensure it's a string
  			return (v.substr(0,2) === "co") ? v : _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong). Also remember that it could be "cover" or "contain" which we can't tween but should be able to set.
  		}});
  		_registerComplexSpecialProp("perspective", {defaultValue:"0px", prefix:true});
  		_registerComplexSpecialProp("perspectiveOrigin", {defaultValue:"50% 50%", prefix:true});
  		_registerComplexSpecialProp("transformStyle", {prefix:true});
  		_registerComplexSpecialProp("backfaceVisibility", {prefix:true});
  		_registerComplexSpecialProp("userSelect", {prefix:true});
  		_registerComplexSpecialProp("margin", {parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
  		_registerComplexSpecialProp("padding", {parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
  		_registerComplexSpecialProp("clip", {defaultValue:"rect(0px,0px,0px,0px)", parser:function(t, e, p, cssp, pt, plugin){
  			var b, cs, delim;
  			if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
  				cs = t.currentStyle;
  				delim = _ieVers < 8 ? " " : ",";
  				b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
  				e = this.format(e).split(",").join(delim);
  			} else {
  				b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
  				e = this.format(e);
  			}
  			return this.parseComplex(t.style, b, e, pt, plugin);
  		}});
  		_registerComplexSpecialProp("textShadow", {defaultValue:"0px 0px 0px #999", color:true, multi:true});
  		_registerComplexSpecialProp("autoRound,strictUnits", {parser:function(t, e, p, cssp, pt) {return pt;}}); //just so that we can ignore these properties (not tween them)
  		_registerComplexSpecialProp("border", {defaultValue:"0px solid #000", parser:function(t, e, p, cssp, pt, plugin) {
  			var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
  				end = this.format(e).split(" "),
  				esfx = end[0].replace(_suffixExp, "");
  			if (esfx !== "px") { //if we're animating to a non-px value, we need to convert the beginning width to that unit.
  				bw = (parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx)) + esfx;
  			}
  			return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
  			}, color:true, formatter:function(v) {
  				var a = v.split(" ");
  				return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
  			}});
  		_registerComplexSpecialProp("borderWidth", {parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
  		_registerComplexSpecialProp("float,cssFloat,styleFloat", {parser:function(t, e, p, cssp, pt, plugin) {
  			var s = t.style,
  				prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
  			return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
  		}});

  		//opacity-related
  		var _setIEOpacityRatio = function(v) {
  				var t = this.t, //refers to the element's style property
  					filters = t.filter || _getStyle(this.data, "filter") || "",
  					val = (this.s + this.c * v) | 0,
  					skip;
  				if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
  					if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
  						t.removeAttribute("filter");
  						skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
  					} else {
  						t.filter = filters.replace(_alphaFilterExp, "");
  						skip = true;
  					}
  				}
  				if (!skip) {
  					if (this.xn1) {
  						t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
  					}
  					if (filters.indexOf("pacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
  						if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
  							t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
  						}
  					} else {
  						t.filter = filters.replace(_opacityExp, "opacity=" + val);
  					}
  				}
  			};
  		_registerComplexSpecialProp("opacity,alpha,autoAlpha", {defaultValue:"1", parser:function(t, e, p, cssp, pt, plugin) {
  			var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
  				style = t.style,
  				isAutoAlpha = (p === "autoAlpha");
  			if (typeof(e) === "string" && e.charAt(1) === "=") {
  				e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
  			}
  			if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
  				b = 0;
  			}
  			if (_supportsOpacity) {
  				pt = new CSSPropTween(style, "opacity", b, e - b, pt);
  			} else {
  				pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
  				pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
  				style.zoom = 1; //helps correct an IE issue.
  				pt.type = 2;
  				pt.b = "alpha(opacity=" + pt.s + ")";
  				pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
  				pt.data = t;
  				pt.plugin = plugin;
  				pt.setRatio = _setIEOpacityRatio;
  			}
  			if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
  				pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
  				pt.xs0 = "inherit";
  				cssp._overwriteProps.push(pt.n);
  				cssp._overwriteProps.push(p);
  			}
  			return pt;
  		}});


  		var _removeProp = function(s, p) {
  				if (p) {
  					if (s.removeProperty) {
  						if (p.substr(0,2) === "ms" || p.substr(0,6) === "webkit") { //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
  							p = "-" + p;
  						}
  						s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
  					} else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
  						s.removeAttribute(p);
  					}
  				}
  			},
  			_setClassNameRatio = function(v) {
  				this.t._gsClassPT = this;
  				if (v === 1 || v === 0) {
  					this.t.setAttribute("class", (v === 0) ? this.b : this.e);
  					var mpt = this.data, //first MiniPropTween
  						s = this.t.style;
  					while (mpt) {
  						if (!mpt.v) {
  							_removeProp(s, mpt.p);
  						} else {
  							s[mpt.p] = mpt.v;
  						}
  						mpt = mpt._next;
  					}
  					if (v === 1 && this.t._gsClassPT === this) {
  						this.t._gsClassPT = null;
  					}
  				} else if (this.t.getAttribute("class") !== this.e) {
  					this.t.setAttribute("class", this.e);
  				}
  			};
  		_registerComplexSpecialProp("className", {parser:function(t, e, p, cssp, pt, plugin, vars) {
  			var b = t.getAttribute("class") || "", //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
  				cssText = t.style.cssText,
  				difData, bs, cnpt, cnptLookup, mpt;
  			pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
  			pt.setRatio = _setClassNameRatio;
  			pt.pr = -11;
  			_hasPriority = true;
  			pt.b = b;
  			bs = _getAllStyles(t, _cs);
  			//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
  			cnpt = t._gsClassPT;
  			if (cnpt) {
  				cnptLookup = {};
  				mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
  				while (mpt) {
  					cnptLookup[mpt.p] = 1;
  					mpt = mpt._next;
  				}
  				cnpt.setRatio(1);
  			}
  			t._gsClassPT = pt;
  			pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
  			t.setAttribute("class", pt.e);
  			difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
  			t.setAttribute("class", b);
  			pt.data = difData.firstMPT;
  			t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  			pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
  			return pt;
  		}});


  		var _setClearPropsRatio = function(v) {
  			if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
  				var s = this.t.style,
  					transformParse = _specialProps.transform.parse,
  					a, p, i, clearTransform, transform;
  				if (this.e === "all") {
  					s.cssText = "";
  					clearTransform = true;
  				} else {
  					a = this.e.split(" ").join("").split(",");
  					i = a.length;
  					while (--i > -1) {
  						p = a[i];
  						if (_specialProps[p]) {
  							if (_specialProps[p].parse === transformParse) {
  								clearTransform = true;
  							} else {
  								p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
  							}
  						}
  						_removeProp(s, p);
  					}
  				}
  				if (clearTransform) {
  					_removeProp(s, _transformProp);
  					transform = this.t._gsTransform;
  					if (transform) {
  						if (transform.svg) {
  							this.t.removeAttribute("data-svg-origin");
  							this.t.removeAttribute("transform");
  						}
  						delete this.t._gsTransform;
  					}
  				}

  			}
  		};
  		_registerComplexSpecialProp("clearProps", {parser:function(t, e, p, cssp, pt) {
  			pt = new CSSPropTween(t, p, 0, 0, pt, 2);
  			pt.setRatio = _setClearPropsRatio;
  			pt.e = e;
  			pt.pr = -10;
  			pt.data = cssp._tween;
  			_hasPriority = true;
  			return pt;
  		}});

  		p = "bezier,throwProps,physicsProps,physics2D".split(",");
  		i = p.length;
  		while (i--) {
  			_registerPluginProp(p[i]);
  		}








  		p = CSSPlugin.prototype;
  		p._firstPT = p._lastParsedTransform = p._transform = null;

  		//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
  		p._onInitTween = function(target, vars, tween, index) {
  			if (!target.nodeType) { //css is only for dom elements
  				return false;
  			}
  			this._target = _target = target;
  			this._tween = tween;
  			this._vars = vars;
  			_index = index;
  			_autoRound = vars.autoRound;
  			_hasPriority = false;
  			_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
  			_cs = _getComputedStyle(target, "");
  			_overwriteProps = this._overwriteProps;
  			var style = target.style,
  				v, pt, pt2, first, last, next, zIndex, tpt, threeD;
  			if (_reqSafariFix) if (style.zIndex === "") {
  				v = _getStyle(target, "zIndex", _cs);
  				if (v === "auto" || v === "") {
  					//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
  					this._addLazySet(style, "zIndex", 0);
  				}
  			}

  			if (typeof(vars) === "string") {
  				first = style.cssText;
  				v = _getAllStyles(target, _cs);
  				style.cssText = first + ";" + vars;
  				v = _cssDif(target, v, _getAllStyles(target)).difs;
  				if (!_supportsOpacity && _opacityValExp.test(vars)) {
  					v.opacity = parseFloat( RegExp.$1 );
  				}
  				vars = v;
  				style.cssText = first;
  			}

  			if (vars.className) { //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
  				this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
  			} else {
  				this._firstPT = pt = this.parse(target, vars, null);
  			}

  			if (this._transformType) {
  				threeD = (this._transformType === 3);
  				if (!_transformProp) {
  					style.zoom = 1; //helps correct an IE issue.
  				} else if (_isSafari) {
  					_reqSafariFix = true;
  					//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
  					if (style.zIndex === "") {
  						zIndex = _getStyle(target, "zIndex", _cs);
  						if (zIndex === "auto" || zIndex === "") {
  							this._addLazySet(style, "zIndex", 0);
  						}
  					}
  					//Setting WebkitBackfaceVisibility corrects 3 bugs:
  					// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
  					// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
  					// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
  					//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
  					if (_isSafariLT6) {
  						this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
  					}
  				}
  				pt2 = pt;
  				while (pt2 && pt2._next) {
  					pt2 = pt2._next;
  				}
  				tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
  				this._linkCSSP(tpt, null, pt2);
  				tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
  				tpt.data = this._transform || _getTransform(target, _cs, true);
  				tpt.tween = tween;
  				tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
  				_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
  			}

  			if (_hasPriority) {
  				//reorders the linked list in order of pr (priority)
  				while (pt) {
  					next = pt._next;
  					pt2 = first;
  					while (pt2 && pt2.pr > pt.pr) {
  						pt2 = pt2._next;
  					}
  					if ((pt._prev = pt2 ? pt2._prev : last)) {
  						pt._prev._next = pt;
  					} else {
  						first = pt;
  					}
  					if ((pt._next = pt2)) {
  						pt2._prev = pt;
  					} else {
  						last = pt;
  					}
  					pt = next;
  				}
  				this._firstPT = first;
  			}
  			return true;
  		};


  		p.parse = function(target, vars, pt, plugin) {
  			var style = target.style,
  				p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
  			for (p in vars) {
  				es = vars[p]; //ending value string
  				if (typeof(es) === "function") {
  					es = es(_index, _target);
  				}
  				sp = _specialProps[p]; //SpecialProp lookup.
  				if (sp) {
  					pt = sp.parse(target, es, p, this, pt, plugin, vars);
  				} else if (p.substr(0,2) === "--") { //for tweening CSS variables (which always start with "--"). To maximize performance and simplicity, we bypass CSSPlugin altogether and just add a normal property tween to the tween instance itself.
  					this._tween._propLookup[p] = this._addTween.call(this._tween, target.style, "setProperty", _getComputedStyle(target).getPropertyValue(p) + "", es + "", p, false, p);
  					continue;
  				} else {
  					bs = _getStyle(target, p, _cs) + "";
  					isStr = (typeof(es) === "string");
  					if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
  						if (!isStr) {
  							es = _parseColor(es);
  							es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
  						}
  						pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

  					} else if (isStr && _complexExp.test(es)) {
  						pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

  					} else {
  						bn = parseFloat(bs);
  						bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

  						if (bs === "" || bs === "auto") {
  							if (p === "width" || p === "height") {
  								bn = _getDimension(target, p, _cs);
  								bsfx = "px";
  							} else if (p === "left" || p === "top") {
  								bn = _calculateOffset(target, p, _cs);
  								bsfx = "px";
  							} else {
  								bn = (p !== "opacity") ? 0 : 1;
  								bsfx = "";
  							}
  						}

  						rel = (isStr && es.charAt(1) === "=");
  						if (rel) {
  							en = parseInt(es.charAt(0) + "1", 10);
  							es = es.substr(2);
  							en *= parseFloat(es);
  							esfx = es.replace(_suffixExp, "");
  						} else {
  							en = parseFloat(es);
  							esfx = isStr ? es.replace(_suffixExp, "") : "";
  						}

  						if (esfx === "") {
  							esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
  						}

  						es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
  						//if the beginning/ending suffixes don't match, normalize them...
  						if (bsfx !== esfx) if (esfx !== "" || p === "lineHeight") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
  							bn = _convertToPixels(target, p, bn, bsfx);
  							if (esfx === "%") {
  								bn /= _convertToPixels(target, p, 100, "%") / 100;
  								if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
  									bs = bn + "%";
  								}

  							} else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
  								bn /= _convertToPixels(target, p, 1, esfx);

  							//otherwise convert to pixels.
  							} else if (esfx !== "px") {
  								en = _convertToPixels(target, p, en, esfx);
  								esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
  							}
  							if (rel) if (en || en === 0) {
  								es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
  							}
  						}

  						if (rel) {
  							en += bn;
  						}

  						if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
  							pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
  							pt.xs0 = esfx;
  							//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
  						} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
  							_log("invalid " + p + " tween value: " + vars[p]);
  						} else {
  							pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
  							pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
  							//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
  						}
  					}
  				}
  				if (plugin) if (pt && !pt.plugin) {
  					pt.plugin = plugin;
  				}
  			}
  			return pt;
  		};


  		//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
  		p.setRatio = function(v) {
  			var pt = this._firstPT,
  				min = 0.000001,
  				val, str, i;
  			//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
  			if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
  				while (pt) {
  					if (pt.type !== 2) {
  						if (pt.r && pt.type !== -1) {
  							val = pt.r(pt.s + pt.c);
  							if (!pt.type) {
  								pt.t[pt.p] = val + pt.xs0;
  							} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
  								i = pt.l;
  								str = pt.xs0 + val + pt.xs1;
  								for (i = 1; i < pt.l; i++) {
  									str += pt["xn"+i] + pt["xs"+(i+1)];
  								}
  								pt.t[pt.p] = str;
  							}
  						} else {
  							pt.t[pt.p] = pt.e;
  						}
  					} else {
  						pt.setRatio(v);
  					}
  					pt = pt._next;
  				}

  			} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
  				while (pt) {
  					val = pt.c * v + pt.s;
  					if (pt.r) {
  						val = pt.r(val);
  					} else if (val < min) if (val > -min) {
  						val = 0;
  					}
  					if (!pt.type) {
  						pt.t[pt.p] = val + pt.xs0;
  					} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
  						i = pt.l;
  						if (i === 2) {
  							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
  						} else if (i === 3) {
  							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
  						} else if (i === 4) {
  							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
  						} else if (i === 5) {
  							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
  						} else {
  							str = pt.xs0 + val + pt.xs1;
  							for (i = 1; i < pt.l; i++) {
  								str += pt["xn"+i] + pt["xs"+(i+1)];
  							}
  							pt.t[pt.p] = str;
  						}

  					} else if (pt.type === -1) { //non-tweening value
  						pt.t[pt.p] = pt.xs0;

  					} else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
  						pt.setRatio(v);
  					}
  					pt = pt._next;
  				}

  			//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
  			} else {
  				while (pt) {
  					if (pt.type !== 2) {
  						pt.t[pt.p] = pt.b;
  					} else {
  						pt.setRatio(v);
  					}
  					pt = pt._next;
  				}
  			}
  		};

  		/**
  		 * @private
  		 * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
  		 * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
  		 * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
  		 * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
  		 * doesn't have any transform-related properties of its own. You can call this method as many times as you
  		 * want and it won't create duplicate CSSPropTweens.
  		 *
  		 * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
  		 */
  		p._enableTransforms = function(threeD) {
  			this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
  			this._transformType = (!(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3)) ? 3 : 2;
  		};

  		var lazySet = function(v) {
  			this.t[this.p] = this.e;
  			this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
  		};
  		/** @private Gives us a way to set a value on the first render (and only the first render). **/
  		p._addLazySet = function(t, p, v) {
  			var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
  			pt.e = v;
  			pt.setRatio = lazySet;
  			pt.data = this;
  		};

  		/** @private **/
  		p._linkCSSP = function(pt, next, prev, remove) {
  			if (pt) {
  				if (next) {
  					next._prev = pt;
  				}
  				if (pt._next) {
  					pt._next._prev = pt._prev;
  				}
  				if (pt._prev) {
  					pt._prev._next = pt._next;
  				} else if (this._firstPT === pt) {
  					this._firstPT = pt._next;
  					remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
  				}
  				if (prev) {
  					prev._next = pt;
  				} else if (!remove && this._firstPT === null) {
  					this._firstPT = pt;
  				}
  				pt._next = next;
  				pt._prev = prev;
  			}
  			return pt;
  		};

  		p._mod = function(lookup) {
  			var pt = this._firstPT;
  			while (pt) {
  				if (typeof(lookup[pt.p]) === "function") { //only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally.
  					pt.r = lookup[pt.p];
  				}
  				pt = pt._next;
  			}
  		};

  		//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
  		p._kill = function(lookup) {
  			var copy = lookup,
  				pt, p, xfirst;
  			if (lookup.autoAlpha || lookup.alpha) {
  				copy = {};
  				for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
  					copy[p] = lookup[p];
  				}
  				copy.opacity = 1;
  				if (copy.autoAlpha) {
  					copy.visibility = 1;
  				}
  			}
  			if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
  				xfirst = pt.xfirst;
  				if (xfirst && xfirst._prev) {
  					this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
  				} else if (xfirst === this._firstPT) {
  					this._firstPT = pt._next;
  				}
  				if (pt._next) {
  					this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
  				}
  				this._classNamePT = null;
  			}
  			pt = this._firstPT;
  			while (pt) {
  				if (pt.plugin && pt.plugin !== p && pt.plugin._kill) { //for plugins that are registered with CSSPlugin, we should notify them of the kill.
  					pt.plugin._kill(lookup);
  					p = pt.plugin;
  				}
  				pt = pt._next;
  			}
  			return TweenPlugin.prototype._kill.call(this, copy);
  		};



  		//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
  		var _getChildStyles = function(e, props, targets) {
  				var children, i, child, type;
  				if (e.slice) {
  					i = e.length;
  					while (--i > -1) {
  						_getChildStyles(e[i], props, targets);
  					}
  					return;
  				}
  				children = e.childNodes;
  				i = children.length;
  				while (--i > -1) {
  					child = children[i];
  					type = child.type;
  					if (child.style) {
  						props.push(_getAllStyles(child));
  						if (targets) {
  							targets.push(child);
  						}
  					}
  					if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
  						_getChildStyles(child, props, targets);
  					}
  				}
  			};

  		/**
  		 * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
  		 * and then compares the style properties of all the target's child elements at the tween's start and end, and
  		 * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
  		 * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
  		 * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
  		 * is because it creates entirely new tweens that may have completely different targets than the original tween,
  		 * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
  		 * and it would create other problems. For example:
  		 *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
  		 *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
  		 *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
  		 *
  		 * @param {Object} target object to be tweened
  		 * @param {number} Duration in seconds (or frames for frames-based tweens)
  		 * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
  		 * @return {Array} An array of TweenLite instances
  		 */
  		CSSPlugin.cascadeTo = function(target, duration, vars) {
  			var tween = TweenLite.to(target, duration, vars),
  				results = [tween],
  				b = [],
  				e = [],
  				targets = [],
  				_reservedProps = TweenLite._internals.reservedProps,
  				i, difs, p, from;
  			target = tween._targets || tween.target;
  			_getChildStyles(target, b, targets);
  			tween.render(duration, true, true);
  			_getChildStyles(target, e);
  			tween.render(0, true, true);
  			tween._enabled(true);
  			i = targets.length;
  			while (--i > -1) {
  				difs = _cssDif(targets[i], b[i], e[i]);
  				if (difs.firstMPT) {
  					difs = difs.difs;
  					for (p in vars) {
  						if (_reservedProps[p]) {
  							difs[p] = vars[p];
  						}
  					}
  					from = {};
  					for (p in difs) {
  						from[p] = b[i][p];
  					}
  					results.push(TweenLite.fromTo(targets[i], duration, from, difs));
  				}
  			}
  			return results;
  		};

  		TweenPlugin.activate([CSSPlugin]);
  		return CSSPlugin;

  	}, true);
  	
  }); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }

  //export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
  (function(name) {
  	var getGlobal = function() {
  		return (_gsScope.GreenSockGlobals || _gsScope)[name];
  	};
  	if (module.exports) { //node
  		
  		module.exports = getGlobal();
  	}
  }("CSSPlugin"));
  });

  var EasePack = createCommonjsModule(function (module) {
  /*!
   * VERSION: 1.16.0
   * DATE: 2018-02-15
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   * 
   * @author: Jack Doyle, jack@greensock.com
   **/
  var _gsScope = (module.exports && typeof(commonjsGlobal) !== "undefined") ? commonjsGlobal : commonjsGlobal || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
  (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

  	_gsScope._gsDefine("easing.Back", ["easing.Ease"], function(Ease) {
  		
  		var w = (_gsScope.GreenSockGlobals || _gsScope),
  			gs = w.com.greensock,
  			_2PI = Math.PI * 2,
  			_HALF_PI = Math.PI / 2,
  			_class = gs._class,
  			_create = function(n, f) {
  				var C = _class("easing." + n, function(){}, true),
  					p = C.prototype = new Ease();
  				p.constructor = C;
  				p.getRatio = f;
  				return C;
  			},
  			_easeReg = Ease.register || function(){}, //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
  			_wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
  				var C = _class("easing."+name, {
  					easeOut:new EaseOut(),
  					easeIn:new EaseIn(),
  					easeInOut:new EaseInOut()
  				}, true);
  				_easeReg(C, name);
  				return C;
  			},
  			EasePoint = function(time, value, next) {
  				this.t = time;
  				this.v = value;
  				if (next) {
  					this.next = next;
  					next.prev = this;
  					this.c = next.v - value;
  					this.gap = next.t - time;
  				}
  			},

  			//Back
  			_createBack = function(n, f) {
  				var C = _class("easing." + n, function(overshoot) {
  						this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
  						this._p2 = this._p1 * 1.525;
  					}, true), 
  					p = C.prototype = new Ease();
  				p.constructor = C;
  				p.getRatio = f;
  				p.config = function(overshoot) {
  					return new C(overshoot);
  				};
  				return C;
  			},

  			Back = _wrap("Back",
  				_createBack("BackOut", function(p) {
  					return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
  				}),
  				_createBack("BackIn", function(p) {
  					return p * p * ((this._p1 + 1) * p - this._p1);
  				}),
  				_createBack("BackInOut", function(p) {
  					return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
  				})
  			),


  			//SlowMo
  			SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
  				power = (power || power === 0) ? power : 0.7;
  				if (linearRatio == null) {
  					linearRatio = 0.7;
  				} else if (linearRatio > 1) {
  					linearRatio = 1;
  				}
  				this._p = (linearRatio !== 1) ? power : 0;
  				this._p1 = (1 - linearRatio) / 2;
  				this._p2 = linearRatio;
  				this._p3 = this._p1 + this._p2;
  				this._calcEnd = (yoyoMode === true);
  			}, true),
  			p = SlowMo.prototype = new Ease(),
  			SteppedEase, ExpoScaleEase, RoughEase, _createElastic;
  			
  		p.constructor = SlowMo;
  		p.getRatio = function(p) {
  			var r = p + (0.5 - p) * this._p;
  			if (p < this._p1) {
  				return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
  			} else if (p > this._p3) {
  				return this._calcEnd ? (p === 1 ? 0 : 1 - (p = (p - this._p3) / this._p1) * p) : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p); //added p === 1 ? 0 to avoid floating point rounding errors from affecting the final value, like 1 - 0.7 = 0.30000000000000004 instead of 0.3
  			}
  			return this._calcEnd ? 1 : r;
  		};
  		SlowMo.ease = new SlowMo(0.7, 0.7);
  		
  		p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
  			return new SlowMo(linearRatio, power, yoyoMode);
  		};


  		//SteppedEase
  		SteppedEase = _class("easing.SteppedEase", function(steps, immediateStart) {
  				steps = steps || 1;
  				this._p1 = 1 / steps;
  				this._p2 = steps + (immediateStart ? 0 : 1);
  				this._p3 = immediateStart ? 1 : 0;
  			}, true);
  		p = SteppedEase.prototype = new Ease();	
  		p.constructor = SteppedEase;
  		p.getRatio = function(p) {
  			if (p < 0) {
  				p = 0;
  			} else if (p >= 1) {
  				p = 0.999999999;
  			}
  			return (((this._p2 * p) | 0) + this._p3) * this._p1;
  		};
  		p.config = SteppedEase.config = function(steps, immediateStart) {
  			return new SteppedEase(steps, immediateStart);
  		};


  		//ExpoScaleEase
  		ExpoScaleEase = _class("easing.ExpoScaleEase", function(start, end, ease) {
  			this._p1 = Math.log(end / start);
  			this._p2 = end - start;
  			this._p3 = start;
  			this._ease = ease;
  		}, true);
  		p = ExpoScaleEase.prototype = new Ease();
  		p.constructor = ExpoScaleEase;
  		p.getRatio = function(p) {
  			if (this._ease) {
  				p = this._ease.getRatio(p);
  			}
  			return (this._p3 * Math.exp(this._p1 * p) - this._p3) / this._p2;
  		};
  		p.config = ExpoScaleEase.config = function(start, end, ease) {
  			return new ExpoScaleEase(start, end, ease);
  		};


  		//RoughEase
  		RoughEase = _class("easing.RoughEase", function(vars) {
  			vars = vars || {};
  			var taper = vars.taper || "none",
  				a = [],
  				cnt = 0,
  				points = (vars.points || 20) | 0,
  				i = points,
  				randomize = (vars.randomize !== false),
  				clamp = (vars.clamp === true),
  				template = (vars.template instanceof Ease) ? vars.template : null,
  				strength = (typeof(vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
  				x, y, bump, invX, obj, pnt;
  			while (--i > -1) {
  				x = randomize ? Math.random() : (1 / points) * i;
  				y = template ? template.getRatio(x) : x;
  				if (taper === "none") {
  					bump = strength;
  				} else if (taper === "out") {
  					invX = 1 - x;
  					bump = invX * invX * strength;
  				} else if (taper === "in") {
  					bump = x * x * strength;
  				} else if (x < 0.5) {  //"both" (start)
  					invX = x * 2;
  					bump = invX * invX * 0.5 * strength;
  				} else {				//"both" (end)
  					invX = (1 - x) * 2;
  					bump = invX * invX * 0.5 * strength;
  				}
  				if (randomize) {
  					y += (Math.random() * bump) - (bump * 0.5);
  				} else if (i % 2) {
  					y += bump * 0.5;
  				} else {
  					y -= bump * 0.5;
  				}
  				if (clamp) {
  					if (y > 1) {
  						y = 1;
  					} else if (y < 0) {
  						y = 0;
  					}
  				}
  				a[cnt++] = {x:x, y:y};
  			}
  			a.sort(function(a, b) {
  				return a.x - b.x;
  			});

  			pnt = new EasePoint(1, 1, null);
  			i = points;
  			while (--i > -1) {
  				obj = a[i];
  				pnt = new EasePoint(obj.x, obj.y, pnt);
  			}

  			this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
  		}, true);
  		p = RoughEase.prototype = new Ease();
  		p.constructor = RoughEase;
  		p.getRatio = function(p) {
  			var pnt = this._prev;
  			if (p > pnt.t) {
  				while (pnt.next && p >= pnt.t) {
  					pnt = pnt.next;
  				}
  				pnt = pnt.prev;
  			} else {
  				while (pnt.prev && p <= pnt.t) {
  					pnt = pnt.prev;
  				}
  			}
  			this._prev = pnt;
  			return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
  		};
  		p.config = function(vars) {
  			return new RoughEase(vars);
  		};
  		RoughEase.ease = new RoughEase();


  		//Bounce
  		_wrap("Bounce",
  			_create("BounceOut", function(p) {
  				if (p < 1 / 2.75) {
  					return 7.5625 * p * p;
  				} else if (p < 2 / 2.75) {
  					return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
  				} else if (p < 2.5 / 2.75) {
  					return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
  				}
  				return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
  			}),
  			_create("BounceIn", function(p) {
  				if ((p = 1 - p) < 1 / 2.75) {
  					return 1 - (7.5625 * p * p);
  				} else if (p < 2 / 2.75) {
  					return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
  				} else if (p < 2.5 / 2.75) {
  					return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
  				}
  				return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
  			}),
  			_create("BounceInOut", function(p) {
  				var invert = (p < 0.5);
  				if (invert) {
  					p = 1 - (p * 2);
  				} else {
  					p = (p * 2) - 1;
  				}
  				if (p < 1 / 2.75) {
  					p = 7.5625 * p * p;
  				} else if (p < 2 / 2.75) {
  					p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
  				} else if (p < 2.5 / 2.75) {
  					p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
  				} else {
  					p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
  				}
  				return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
  			})
  		);


  		//CIRC
  		_wrap("Circ",
  			_create("CircOut", function(p) {
  				return Math.sqrt(1 - (p = p - 1) * p);
  			}),
  			_create("CircIn", function(p) {
  				return -(Math.sqrt(1 - (p * p)) - 1);
  			}),
  			_create("CircInOut", function(p) {
  				return ((p*=2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
  			})
  		);


  		//Elastic
  		_createElastic = function(n, f, def) {
  			var C = _class("easing." + n, function(amplitude, period) {
  					this._p1 = (amplitude >= 1) ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  					this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
  					this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
  					this._p2 = _2PI / this._p2; //precalculate to optimize
  				}, true),
  				p = C.prototype = new Ease();
  			p.constructor = C;
  			p.getRatio = f;
  			p.config = function(amplitude, period) {
  				return new C(amplitude, period);
  			};
  			return C;
  		};
  		_wrap("Elastic",
  			_createElastic("ElasticOut", function(p) {
  				return this._p1 * Math.pow(2, -10 * p) * Math.sin( (p - this._p3) * this._p2 ) + 1;
  			}, 0.3),
  			_createElastic("ElasticIn", function(p) {
  				return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2 ));
  			}, 0.3),
  			_createElastic("ElasticInOut", function(p) {
  				return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 *(p -= 1)) * Math.sin( (p - this._p3) * this._p2 ) * 0.5 + 1;
  			}, 0.45)
  		);


  		//Expo
  		_wrap("Expo",
  			_create("ExpoOut", function(p) {
  				return 1 - Math.pow(2, -10 * p);
  			}),
  			_create("ExpoIn", function(p) {
  				return Math.pow(2, 10 * (p - 1)) - 0.001;
  			}),
  			_create("ExpoInOut", function(p) {
  				return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
  			})
  		);


  		//Sine
  		_wrap("Sine",
  			_create("SineOut", function(p) {
  				return Math.sin(p * _HALF_PI);
  			}),
  			_create("SineIn", function(p) {
  				return -Math.cos(p * _HALF_PI) + 1;
  			}),
  			_create("SineInOut", function(p) {
  				return -0.5 * (Math.cos(Math.PI * p) - 1);
  			})
  		);

  		_class("easing.EaseLookup", {
  				find:function(s) {
  					return Ease.map[s];
  				}
  			}, true);

  		//register the non-standard eases
  		_easeReg(w.SlowMo, "SlowMo", "ease,");
  		_easeReg(RoughEase, "RoughEase", "ease,");
  		_easeReg(SteppedEase, "SteppedEase", "ease,");
  		
  		return Back;
  		
  	}, true);

  }); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }

  //export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
  (function() {
  	var getGlobal = function() {
  		return (_gsScope.GreenSockGlobals || _gsScope);
  	};
  	if (module.exports) { //node
  		
  		module.exports = getGlobal();
  	}
  }());
  });

  Slide.prototype.timeline = function() {
    const timeline = new TimelineLite({
      onUpdate: () => {
        if (!this.transition) {
          if (timeline.duration() !== 0) {
            timeline.progress(1, false);
          }
        }
      }
    });

    return timeline;
  };

  var css$7 = function(hljs) {
    var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
    var RULE = {
      begin: /[A-Z\_\.\-]+\s*:/, returnBegin: true, end: ';', endsWithParent: true,
      contains: [
        {
          className: 'attribute',
          begin: /\S/, end: ':', excludeEnd: true,
          starts: {
            endsWithParent: true, excludeEnd: true,
            contains: [
              {
                begin: /[\w-]+\(/, returnBegin: true,
                contains: [
                  {
                    className: 'built_in',
                    begin: /[\w-]+/
                  },
                  {
                    begin: /\(/, end: /\)/,
                    contains: [
                      hljs.APOS_STRING_MODE,
                      hljs.QUOTE_STRING_MODE
                    ]
                  }
                ]
              },
              hljs.CSS_NUMBER_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.APOS_STRING_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              {
                className: 'number', begin: '#[0-9A-Fa-f]+'
              },
              {
                className: 'meta', begin: '!important'
              }
            ]
          }
        }
      ]
    };

    return {
      case_insensitive: true,
      illegal: /[=\/|'\$]/,
      contains: [
        hljs.C_BLOCK_COMMENT_MODE,
        {
          className: 'selector-id', begin: /#[A-Za-z0-9_-]+/
        },
        {
          className: 'selector-class', begin: /\.[A-Za-z0-9_-]+/
        },
        {
          className: 'selector-attr',
          begin: /\[/, end: /\]/,
          illegal: '$'
        },
        {
          className: 'selector-pseudo',
          begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
        },
        {
          begin: '@(font-face|page)',
          lexemes: '[a-z-]+',
          keywords: 'font-face page'
        },
        {
          begin: '@', end: '[{;]', // at_rule eating first "{" is a good thing
                                   // because it doesn’t let it to be parsed as
                                   // a rule set but instead drops parser into
                                   // the default mode which is how it should be.
          illegal: /:/, // break on Less variables @var: ...
          contains: [
            {
              className: 'keyword',
              begin: /\w+/
            },
            {
              begin: /\s/, endsWithParent: true, excludeEnd: true,
              relevance: 0,
              contains: [
                hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE,
                hljs.CSS_NUMBER_MODE
              ]
            }
          ]
        },
        {
          className: 'selector-tag', begin: IDENT_RE,
          relevance: 0
        },
        {
          begin: '{', end: '}',
          illegal: /\S/,
          contains: [
            hljs.C_BLOCK_COMMENT_MODE,
            RULE,
          ]
        }
      ]
    };
  };

  highlight.registerLanguage('css', css$7);

  const presentation = new Presentation();
  presentation.noNotes = true;
  presentation.width = 1920;
  presentation.height = 1350;

  document.body.append(presentation);
  document.head.append(hyperHTML`<style>${css}</style>`);

  presentation.slide('', async slide => {
    slide.classList.add('sunny');

    await slide.next();
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 56px">
    ${code = hyperHTML`<preso-code code-lang="js">
      function Car(doors) {
        Vehicle.call(this, { doors: doors, wheels: 4 });
      }

      Car.prototype = (function() {
        function tmp() {}
        tmp.prototype = Vehicle.prototype;
        return new tmp();
      })();
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('sunny');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 56px">
    ${code = hyperHTML`<preso-code code-lang="js">
      class Car extends Vehicle {
        constructor(doors) {
          super({ doors, wheels: 4 });
        }
      }
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });


  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('ocean');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 45px">
    ${code = hyperHTML`<preso-code code-lang="js">
      function spin(options) {
        if (!options) options = {};
        var duration = ('duration' in options) ?
          options.duration : 1000;
        var direction = ('direction' in options) ?
          options.direction : 'clockwise';
        var easing = ('easing' in options) ?
          options.easing : 'ease-out';
        var iterations = ('iterations' in options) ?
          options.iterations : 1;
        // …
      }
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('ocean');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 45px">
    ${code = hyperHTML`<preso-code code-lang="js">
      function spin({
        duration = 1000,
        direction = 'clockwise',
        easing = 'ease-out',
        iterations = 1,
      } = {}) {
        // …
      }

      function spin(options = {}) {
        const {
          duration = 1000,
          direction = 'clockwise',
          easing = 'ease-out',
          iterations = 1,
        } = options;
        // …
      }
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
    code.show(1, 8);
    await slide.next();
    code.show(1, 18);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('day');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 76px">
    ${code = hyperHTML`<preso-code code-lang="css">
      .whatever {
        width: 100px;
        height: 100px;
      }

      .whatever {
        --size: 100px;
        width: var(--size);
        height: var(--size);
      }
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
    code.show(1, 4);
    await slide.next();
    code.show(1, 10);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('dawn');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 60px">
    ${code = hyperHTML`<preso-code code-lang="js">
      ul.addEventListener('click', function(event) {
        let li = event.target;

        while (li && li.tagName !== 'li') {
          li = li.parentNode;
        }

        if (!li) return;
        // …
      });
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('dawn');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 60px">
    ${code = hyperHTML`<preso-code code-lang="js">
      ul.addEventListener('click', (event) => {
        const li = event.target.closest('li');
        if (!li) return;
        // …
      });
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('love');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 55px">
    ${code = hyperHTML`<preso-code code-lang="js">
      input = input.replace(/\+/g, ' ');
      var result = {};
      input.split('&').forEach(function(item) {
        var keyVal = item.split('=');
        result[keyVal[0]] = (keyVal.length > 1) ?
          decodeURIComponent(keyVal.slice(1).join('=')) :
          null;
      });
      console.log(result.foo);
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });


  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('love');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 55px">
    ${code = hyperHTML`<preso-code code-lang="js">
      const result = new URLSearchParams(input);
      console.log(result.get('foo'));
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('sunny');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 52px">
    ${code = hyperHTML`<preso-code code-lang="js">
      var reader = new FileReader();
      reader.onload = function() {
        var buffer = reader.result;
        // …
      };
      reader.onerror = function() {
        // …
      };
      reader.readAsArrayBuffer(blob);
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('sunny');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 52px">
    ${code = hyperHTML`<preso-code code-lang="js">
      try {
        const buffer = await new Response(blob).arrayBuffer();
        // …
      } catch (err) {
        // …
      }
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('ocean');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 33px">
    ${code = hyperHTML`<preso-code code-lang="js">
      const style = document.createElement('style');
      const id = anim + Math.random();
      style.textContent = \`
        @keyframe \$\{id} {
          from { transform: translateY(\$\{from}px); }
          to   { transform: translateY(\$\{to}px); }
        }
      \`;
      document.head.append(style);
      el.style.animation = \`\$\{id} \$\{duration}ms \$\{easing} forwards\`;
      const finished = new Promise((resolve, reject) => {
        const listener = (event) => {
          if (event.target !== el) return;
          if (event.type === 'animationcancel') {
            reject(new DOMException('Animation cancelled', 'AbortError'));
          } else {
            resolve();
          }
          el.removeEventListener('animationend', listener);
          el.removeEventListener('animationcancel', listener);
        };
        el.addEventListener('animationend', listener);
        el.addEventListener('animationcancel', listener);
      });
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('ocean');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 55px">
    ${code = hyperHTML`<preso-code code-lang="js">
      const { finished } = el.animate([
        { transform: \`translateY(\$\{from}px)\` },
        { transform: \`translateY(\$\{to}px)\` },
      ], {
        duration, easing,
        fill: 'forwards',
      });
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('sunny');

    await slide.next();
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 40px">
    ${code = hyperHTML`<preso-code code-lang="js">
      navigator.serviceWorker.ready.then(async (swReg) => {
        const urls = ['/podcast.mp3', '/artwork.jpg'];
        const bgFetch = await swReg.backgroundFetch.fetch('my-fetch', urls, {
          title: 'Epsisode 5',
          icons: [{
            sizes: '300x300',
            src: '/podcast-icon.png',
            type: 'image/png',
          }],
          downloadTotal: 60 * 1024 * 1024,
        });
      });
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('ocean');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 50px">
    ${code = hyperHTML`<preso-code code-lang="js">
      bgFetch.addEventListener('progress', () => {
        if (!bgFetch.downloadTotal) return;
        const percent = Math.round(
          bgFetch.downloaded / bgFetch.downloadTotal * 100
        );
        console.log(\`Download progress: \$\{percent}%\`);
      });
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('day');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 50px">
    ${code = hyperHTML`<preso-code code-lang="js">
      bgFetch.match('/podcast.mp3').then(async (record) => {
        if (!record) {
          console.log('No record found');
          return;
        }

        console.log("Here's the request", record.request);
        const response = await record.responseReady;
        console.log("And here's the response", response);
      });
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('dawn');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 50px">
    ${code = hyperHTML`<preso-code code-lang="js">
      addEventListener('backgroundfetchsuccess', (event) => {
        const bgFetch = event.registration;

        event.waitUntil(async function() {
          const cache = await caches.open('downloads');
          const records = await bgFetch.matchAll();
          const promises = records.map(async (record) => {
            const response = await record.responseReady;
            await cache.put(record.request, response);
          });
          await Promise.all(promises);
          event.updateUI({ title: 'Podcast ready to listen' });
        }());
      });
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  presentation.transition(slideFromRight());

  presentation.slide('', async slide => {
    slide.classList.add('love');
    
    let code;
    const codeOuter = hyperHTML`<div class="code-outer" fade-in style="font-size: 50px">
    ${code = hyperHTML`<preso-code code-lang="js">
      addEventListener('backgroundfetchclick', (event) => {
        const bgFetch = event.registration;

        if (bgFetch.result === 'success') {
          clients.openWindow('/latest-podcasts');
        } else {
          clients.openWindow('/download-progress');
        }
      });
    </preso-code>`}
  </div>`;
    slide.append(codeOuter);
  });

  document.addEventListener('click', () => {
    document.documentElement.requestFullscreen();
  });

  document.body.append(hyperHTML`<div class="next-btn" onclick=${event => { event.preventDefault(); presentation.next(); }} ontouchstart=${event => { event.preventDefault(); presentation.next(); }}>`);
  document.body.append(hyperHTML`<div class="prev-btn" onclick=${event => { event.preventDefault(); presentation.previous(); }} ontouchstart=${event => { event.preventDefault(); presentation.previous(); }}>`);

}());

!function(t){function e(e){for(var i,s,n=e[0],r=e[1],h=0,u=[];h<n.length;h++)s=n[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);for(l&&l(e);u.length;)u.shift()()}function i(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}var s={},o={0:0};i.e=function(t){var e=[],s=o[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise((function(e,i){s=o[t]=[e,i]}));e.push(s[2]=n);var r,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=function(t){return i.p+""+({}[t]||t)+"."+{1:"94dc"}[t]+".js"}(t);var l=new Error;r=function(e){h.onerror=h.onload=null,clearTimeout(u);var i=o[t];if(0!==i){if(i){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",l.name="ChunkLoadError",l.type=s,l.request=n,i[1](l)}o[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:h})}),12e4);h.onerror=h.onload=r,document.head.appendChild(h)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw t};var n=window.webpackJsonp=window.webpackJsonp||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var h=0;h<n.length;h++)e(n[h]);var l=r;i(i.s=6)}([function(t){t.exports={root:"Q8cY",withLabel:"c2Go",open:"_1et4",input:"r-kJ",upperSelect:"_1B_J",list:"_3MFT"}},function(t){t.exports={root:"kfXA",input:"_6J4F"}},function(t){t.exports={root:"_1d6U",logo:"_1ttR"}},function(){},function(){},,function(t,e,i){"use strict";function s(t,...e){let i=document.createElement("template");return i.innerHTML=t.reduce((t,i,s)=>t+i+e[s],"").trim(),i.content.firstChild}i.r(e);var o=i(0);let n=null;const r=220,h=56;class l{constructor(){this.domRoot=null,this.domInput=null,this.domUL=null,this.options=[],this.class=new Set([o.root]),this.scroll=0,this.offset=0,this.itemsCount=0,this.code="",this.value="",this.onInputClick=()=>{this.mountSelect()},this.onFocus=()=>{this.mountSelect()},this.onBlur=()=>{},this.onInput=async()=>{if(!this.domInput)return;let t=await n;if(!t)return;let e=this.domInput.value;this.options=t.Country.map(t=>[this.rate(e,t),t]).filter(t=>!!t[0]).sort((t,e)=>t[0]<e[0]?-1:t[0]>e[0]?1:0).map(t=>t[1]),this.renderOptions()},this.onClickOutside=t=>{this.close(t)},this.close=t=>{this.domUL&&this.domRoot&&(t&&this.domRoot.contains(t.target)||(window.removeEventListener("click",this.onClickOutside),window.removeEventListener("resize",this.onResize),this.domUL.remove(),this.domUL=null,this.class.delete(o.open),this.class.delete(o.upperSelect),this.domRoot.setAttribute("class",[...this.class].join(" ")),this.domInput&&(this.domInput.value=this.value)))},this.onResize=()=>{this.matchUpOrDown(),this.rerenderListItems()},this.matchUpOrDown=()=>{if(!this.domUL||!this.domInput||!this.domRoot)return;let t=this.domInput.getBoundingClientRect(),e=window.innerHeight-t.height-t.top-16;e<r?(e=r,this.class.add(o.upperSelect),this.domRoot.setAttribute("class",[...this.class].join(" "))):(this.class.delete(o.upperSelect),this.domRoot.setAttribute("class",[...this.class].join(" "))),this.domUL.style.maxHeight=`${e}px`},this.onScroll=()=>{this.rerenderListItems()},this.rerenderListItems=function(t,e){let i=Date.now(),s=function(){let t=Date.now();i+10-t<=0?(requestAnimationFrame(e),i=t):setTimeout(s,i+10-t)};return s}(0,()=>{if(!this.domUL)return;let t=this.offset,e=this.itemsCount;this.scroll=this.domUL.scrollTop,this.class.has(o.upperSelect)&&(this.scroll=-this.domUL.scrollTop+this.domUL.scrollHeight-this.domUL.clientHeight),this.matchListPaddings();let i=[this.domUL.firstChild,this.domUL.lastChild],s=Array.prototype.slice.call(this.domUL.querySelectorAll("li"));if(this.offset>t){let i=this.offset-t;i>e&&(i=e),s.splice(0,i).forEach(t=>t.remove()),e-=i,t=this.offset}if(this.itemsCount+this.offset<t+e){let i=t+e-this.itemsCount-this.offset;i>e&&(i=e),s.splice(e-i,i).forEach(t=>t.remove()),e-=i}let n=[],r=[];if(this.offset<t){let i=Math.min(t-this.offset,this.itemsCount-e);for(let t=this.offset;t<this.offset+i;t++)r.push(this.renderLi(t));e+=i,t=this.offset}if(this.itemsCount>e){for(let t=this.offset+e;t<this.itemsCount+this.offset;t++)n.push(this.renderLi(t));e=this.itemsCount}i[0].after(...r),i[1].before(...n),i[0].style.height=`${this.offset*h}px`,i[1].style.height=`${(this.options.length-this.offset-this.itemsCount)*h}px`,this.class.has(o.upperSelect)?this.domUL.scrollTop=-this.scroll+this.domUL.scrollHeight-this.domUL.clientHeight:this.domUL.scrollTop=this.scroll}),this.loadCountry()}mount(){return this.domRoot=s`
      <div class="${[...this.class].join(" ")}">
        <label for="country-input">Country</label>
        <input
          id="country-input"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          class="${o.input}"
          placeholder="Country"
        />
        <i></i>
      </div>
    `,this.domInput=this.domRoot.querySelector(`.${o.input}`),this.domInput.addEventListener("click",this.onInputClick,{passive:!0}),this.domInput.addEventListener("focus",this.onFocus,{passive:!0}),this.domInput.addEventListener("input",this.onInput,{passive:!0}),this.domInput.addEventListener("blur",this.onBlur,{passive:!0}),this.domRoot}unmount(){this.domRoot&&(this.domRoot.remove(),this.domRoot=null),this.domInput=null,this.domUL=null,window.removeEventListener("click",this.onClickOutside),window.removeEventListener("resize",this.onResize)}loadCountry(){n=i.e(1).then(i.bind(null,5))}setValue(t,e){this.value=t,this.code=e,this.domInput&&(this.domInput.value=t),this.domRoot&&(this.class.add(o.withLabel),this.domRoot.setAttribute("class",[...this.class].join(" ")))}rate(t,e){t=this.strip(t);let i=this.strip(e[0]).indexOf(t),s=this.strip(e[1]).indexOf(t),o=this.strip(e[2]).indexOf(t);if(i<0&&s<0&&o<0)return"";let n=1333;return 0===i?n-=200:i>0&&(n-=100),0===s?n-=2:s>0&&(n-=1),0===o?n-=20:o>0&&(n-=10),`${n}${e[0]}`}strip(t){return t.toLowerCase().trim().replace(/[^\w\d]/g,"")}async mountSelect(){let t=await n;t&&this.domInput&&this.domRoot&&(this.domUL||(this.options=t.Country,this.domUL=s`
      <ul class=${o.list}></ul>
    `,this.domUL.addEventListener("scroll",this.onScroll,{passive:!0}),this.matchUpOrDown(),window.addEventListener("resize",this.onResize,{passive:!0}),this.renderOptions(),this.domRoot.appendChild(this.domUL),this.class.add(o.open),this.domRoot.setAttribute("class",[...this.class].join(" ")),window.addEventListener("click",this.onClickOutside,{passive:!0}),this.domUL.style.maxHeight===`${r}px`&&this.domInput.scrollIntoView()))}matchListPaddings(){if(!this.domUL)return;let t=this.domUL.clientHeight;t<r?t=window.innerHeight:t+=2*h,this.itemsCount=Math.ceil(t/h),this.offset=Math.floor(this.scroll/h)-1,this.offset>=this.options.length&&(this.offset=this.options.length-1),this.offset<0&&(this.offset=0),this.offset+this.itemsCount>this.options.length&&(this.itemsCount=this.options.length-this.offset)}renderOptions(){if(this.domUL){this.domUL.innerHTML="",this.scroll=0,this.matchListPaddings(),this.domUL.append(s`
        <div style="height: ${this.offset*h}px;"></div>
      `);for(let t=0;t<this.itemsCount&&!(t+this.offset>=this.options.length);t++)this.domUL.appendChild(this.renderLi(t));this.domUL.append(s`
        <div
          style="height: ${(this.options.length-this.offset-this.itemsCount)*h}px;"
        ></div>
      `)}}renderLi(t){let e=this.options[t],i=s`
      <li role="group" tabindex="-1">
        <i style="background-image: url('flags/${e[2].toLowerCase()}.png');"></i>
        <div>${e[1]}</div>
        <span>${e[0]}</div>
      </li>
    `;return i.addEventListener("click",()=>{this.domInput&&(this.setValue(e[1],e[0]),this.close())},{passive:!0,once:!0}),i}}var u=i(1);class d{constructor(){this.domRoot=null,this.domInput=null}mount(){return this.domRoot=s`
      <div class="${u.root}"><input class="${u.input}" /></div>
    `,this.domInput=this.domRoot.querySelector(`.${u.input}`),this.domRoot}unmount(){this.domRoot&&(this.domRoot.remove(),this.domRoot=null)}}var c=i(2);class a{constructor(){this.rootNode=null,this.countrySelect=new l,this.phone=new d}mount(){return this.rootNode=s`
      <div class=${c.root}>
        <div class=${c.logo}></div>
        <h1>Sign in to Telegram</h1>
        <p>
          Please confirm your country and<br />
          enter your phone number
        </p>
      </div>
    `,this.rootNode.appendChild(this.countrySelect.mount()),this.rootNode}}i(3),i(4);const p=new class{constructor(){this.signIn=new a}mount(){return this.signIn.mount()}};document.body.appendChild(p.mount())}]);
//# sourceMappingURL=main.ac27.js.map
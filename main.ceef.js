!function(t){function o(o){for(var e,n,s=o[0],r=o[1],u=0,c=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&c.push(i[n][0]),i[n]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);for(l&&l(o);c.length;)c.shift()()}function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={},i={0:0};e.e=function(t){var o=[],n=i[t];if(0!==n)if(n)o.push(n[2]);else{var s=new Promise((function(o,e){n=i[t]=[o,e]}));o.push(n[2]=s);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,e.nc&&u.setAttribute("nonce",e.nc),u.src=function(t){return e.p+""+({}[t]||t)+"."+{1:"ce65"}[t]+".js"}(t);var l=new Error;r=function(o){u.onerror=u.onload=null,clearTimeout(c);var e=i[t];if(0!==e){if(e){var n=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,e[1](l)}i[t]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(o)},e.m=t,e.c=n,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)e.d(n,i,function(o){return t[o]}.bind(null,i));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e.oe=function(t){throw t};var s=window.webpackJsonp=window.webpackJsonp||[],r=s.push.bind(s);s.push=o,s=s.slice();for(var u=0;u<s.length;u++)o(s[u]);var l=r;e(e.s=5)}([function(t){t.exports={root:"Q8cY",withLabel:"c2Go",open:"_1et4",input:"r-kJ",list:"_3MFT"}},function(t){t.exports={root:"kfXA",input:"_6J4F"}},function(t){t.exports={root:"_1d6U",logo:"_1ttR"}},function(){},,function(t,o,e){"use strict";function n(t,...o){let e=document.createElement("template");return e.innerHTML=t.reduce((t,e,n)=>t+e+o[n],"").trim(),e.content.firstChild}e.r(o);var i=e(0),s=null;class r{constructor(){this.domRoot=null,this.domInput=null,this.domUL=null,this.class=new Set([i.root]),this.code="",this.value="",this.onFocus=()=>{this.mountSelect()},this.onClickOutside=t=>{this.close(t)},this.close=t=>{this.domUL&&this.domRoot&&(t&&this.domRoot.contains(t.target)||(window.removeEventListener("click",this.onClickOutside),this.domUL.remove(),this.domUL=null,this.class.delete(i.open),this.domRoot.setAttribute("class",[...this.class].join(" "))))},this.loadCountry()}mount(){return this.domRoot=n`
      <div class="${[...this.class].join(" ")}">
        <label for="country-input">Country</label>
        <input
          id="country-input"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          class="${i.input}"
          placeholder="Country"
        />
        <i />
      </div>
    `,this.domInput=this.domRoot.querySelector(`.${i.input}`),this.domInput.addEventListener("focus",this.onFocus),this.domInput.addEventListener("click",this.onFocus),this.domRoot}unmount(){this.domRoot&&(this.domRoot.remove(),this.domRoot=null),this.domInput=null,this.domUL=null,window.removeEventListener("click",this.onClickOutside)}loadCountry(){s=e.e(1).then(e.bind(null,4))}setValue(t,o){this.value=t,this.code=o,this.domInput&&(this.domInput.value=t),this.domRoot&&(this.class.add(i.withLabel),this.domRoot.setAttribute("class",[...this.class].join(" ")))}async mountSelect(){let t=await s;if(!t)return;if(!this.domInput)return;if(!this.domRoot)return;if(this.domUL)return;let o=this.domInput.getBoundingClientRect(),e=Math.max(window.innerHeight-o.height-o.top-16,120);this.domUL=n`
      <ul class=${i.list} style="max-height: ${e}px"></ul>
    `;for(let o of t.Country){let t=n`
        <li role="group" tabindex="-1">
          <img src="flags/${o[2].toLowerCase()}.png" />
          <div>${o[1]}</div>
          <span>${o[0]}</div>
        </li>
      `;t.addEventListener("click",()=>{this.domInput&&(this.setValue(o[1],o[0]),this.close())}),this.domUL.appendChild(t)}this.domRoot.appendChild(this.domUL),this.class.add(i.open),this.domRoot.setAttribute("class",[...this.class].join(" ")),window.addEventListener("click",this.onClickOutside),this.domInput.scrollIntoView()}}var u=e(1);class l{constructor(){this.domRoot=null,this.domInput=null}mount(){return this.domRoot=n`
      <div class="${u.root}"><input class="${u.input}" /></div>
    `,this.domInput=this.domRoot.querySelector(`.${u.input}`),this.domRoot}unmount(){this.domRoot&&(this.domRoot.remove(),this.domRoot=null)}}var c=e(2);class d{constructor(){this.rootNode=null,this.countrySelect=new r,this.phone=new l}mount(){return this.rootNode=n`
      <div class=${c.root}>
        <div class=${c.logo}></div>
        <h1>Sign in to Telegram</h1>
        <p>
          Please confirm your country and<br />
          enter your phone number
        </p>
      </div>
    `,this.rootNode.appendChild(this.countrySelect.mount()),this.rootNode}}e(3);const a=new class{constructor(){this.signIn=new d}mount(){return this.signIn.mount()}};document.body.appendChild(a.mount())}]);
//# sourceMappingURL=main.ceef.js.map
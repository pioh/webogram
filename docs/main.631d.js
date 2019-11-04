(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(o){o.exports={root:"kfXA",input:"_6J4F"}},function(o){o.exports={root:"_1d6U",logo:"_1ttR"}},function(o,t,n){"use strict";function e(o,...t){let n=document.createElement("template");return n.innerHTML=o.reduce((o,n,e)=>o+n+t[e],"").trim(),n.content.firstChild}n.r(t);var s=n(0);class i{constructor(){this.domRoot=null,this.domInput=null}mount(){return this.domRoot=e`
      <div class="${s.root}"><input class="${s.input}" /></div>
    `,this.domInput=this.domRoot.querySelector(`.${s.input}`),this.domRoot}unmount(){this.domRoot&&(this.domRoot.remove(),this.domRoot=null)}}var r=n(1);class u{constructor(){this.rootNode=null,this.phone=new i}mount(){return this.rootNode=e`
      <div class=${r.root}>
        <div class=${r.logo}></div>
        <h1>Sign in to Telegram</h1>
        <h4>Please confirm your country and</h4>
        <b>enter your phone number</b>
      </div>
    `,this.rootNode.appendChild(this.phone.mount()),this.rootNode}}const d=new class{constructor(){this.signIn=new u}mount(){return this.signIn.mount()}};document.body.appendChild(d.mount())}],[[2,0]]]);
//# sourceMappingURL=main.631d.js.map
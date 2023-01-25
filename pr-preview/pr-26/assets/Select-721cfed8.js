import{r as o}from"./index-f1f749bf.js";import{R as O}from"./index-96c5f47c.js";var f={},E={get exports(){return f},set exports(e){f=e}},v={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V=o,T=Symbol.for("react.element"),I=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,F=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function C(e,a,l){var t,i={},s=null,u=null;l!==void 0&&(s=""+l),a.key!==void 0&&(s=""+a.key),a.ref!==void 0&&(u=a.ref);for(t in a)$.call(a,t)&&!M.hasOwnProperty(t)&&(i[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps,a)i[t]===void 0&&(i[t]=a[t]);return{$$typeof:T,type:e,key:s,ref:u,props:i,_owner:F.current}}v.Fragment=I;v.jsx=C;v.jsxs=C;(function(e){e.exports=v})(E);const B=f.Fragment,m=f.jsx,y=f.jsxs,D=e=>typeof e=="function",W=e=>{const[a,l]=o.useState(e),t=o.useCallback((r,n)=>D(n)?n(r):n,[]),i=o.useCallback(()=>l([]),[]),s=o.useCallback(()=>l(e),[e]),u=o.useCallback((...r)=>l(n=>[...n,...r]),[]),p=o.useCallback((r,...n)=>l(d=>[...d.slice(0,r),...n,...d.slice(r)]),[]),c=o.useCallback(r=>l(n=>[...n.slice(0,r),...n.slice(r+1)]),[]),g=o.useCallback(r=>l(n=>n.filter(r)),[]),k=o.useCallback((r,n)=>l(d=>d.slice(r,n)),[]),N=o.useCallback((r,...n)=>l(d=>[...d.slice(0,r),...n.map((b,q)=>t(d[r+q],b)),...d.slice(r+n.length)]),[t]),w=o.useCallback((r,n)=>l(d=>d.map(b=>r(b)?t(b,n):b)),[t]),R=o.useCallback(r=>l(n=>n.map(d=>t(d,r))),[t]),S=o.useCallback(r=>l(n=>[...n.sort(r)]),[]),j=o.useCallback(()=>l(r=>[...r.reverse()]),[]);return[a,{set:l,clear:i,reset:s,push:u,insertAt:p,removeAt:c,removeWhere:g,trimToRange:k,updateAt:N,updateWhere:w,updateAll:R,sort:S,reverse:j}]},A=({initial:e=0,step:a=1})=>{const[l,t]=o.useState(e),i=o.useCallback(p=>t(c=>c+(p??a)),[a]),s=o.useCallback(p=>t(c=>c-(p??a)),[a]),u=o.useCallback(()=>t(e),[e]);return[l,{set:t,increment:i,decrement:s,reset:u}]},U=e=>{const[a,l]=o.useState(e),t=o.useCallback(()=>l(!0),[]),i=o.useCallback(()=>l(!1),[]),s=o.useCallback(()=>l(u=>!u),[]);return[a,{set:l,flag:t,unflag:i,toggle:s}]},_=({variant:e="fill",color:a,className:l,...t})=>m("button",{className:`rounded-md border border-transparent bg-transparent px-1.5 py-1 disabled:hover:no-underline  ${e==="fill"?"bg-blue-500 text-white hover:underline disabled:bg-slate-500 ":e==="outline"?"border-slate-800 bg-white hover:underline disabled:text-slate-600":"hover:bg-slate-100"} ${l}`,style:e==="fill"?{backgroundColor:a}:e==="outline"?{borderColor:a}:{color:a},...t});try{_.displayName="Button",_.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"fill"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"fill"'},{value:'"outline"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}const h=({isOpen:e,onClose:a,children:l})=>e?O.createPortal(y(B,{children:[m("div",{className:"fixed top-0 left-0 z-50 h-screen w-screen bg-black opacity-50",onClick:a,"aria-hidden":!0}),m("div",{className:"fixed top-2/4 left-2/4 z-50 -translate-y-2/4 -translate-x-2/4","aria-modal":!0,tabIndex:-1,role:"dialog",children:y("div",{className:"flex h-60 max-w-lg flex-col justify-center gap-12 rounded-lg bg-white p-4 text-xl leading-6 text-black",children:[a&&m(_,{variant:"text",title:"Close",onClick:a,className:"absolute top-2 right-2",children:"✕"}),l]})})]}),document.body):null;try{h.displayName="Modal",h.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const x=({label:e,labelDirection:a="row",onChange:l,options:t,className:i,variant:s="outline",color:u,...p})=>y("label",{className:`flex ${a==="row"?"items-baseline":"flex-col items-start"} gap-1`,children:[e,m("select",{className:`w-full rounded-md border border-transparent bg-transparent py-1 pl-1.5 pr-8 disabled:hover:no-underline  ${s==="fill"?"bg-blue-500 text-white hover:underline disabled:bg-slate-500":s==="outline"?"border-slate-800 bg-white hover:underline disabled:text-slate-600":"hover:bg-slate-100"} ${i}`,style:s==="fill"?{backgroundColor:u}:s==="outline"?{borderColor:u}:{color:u},onChange:l?c=>l(c):void 0,...p,children:t.map(({value:c,label:g})=>m("option",{value:c,label:g},g))})]});try{x.displayName="Select",x.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},labelDirection:{defaultValue:{value:"row"},description:"",name:"labelDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLSelectElement & { value: T; }>"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: T; label: string; }[]"}},variant:{defaultValue:{value:"outline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"fill"'},{value:'"outline"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}export{_ as B,B as F,h as M,x as S,W as T,A as U,m as a,U as b,y as j};
//# sourceMappingURL=Select-721cfed8.js.map

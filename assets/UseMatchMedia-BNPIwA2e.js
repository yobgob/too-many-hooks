import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as r,d as o}from"./index-sJP6Ole0.js";import"./index-uubelm5h.js";import"./iframe-Wb-1lKFi.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-DNoTwSKD.js";import"./_baseIsEqual-rkW4RVPP.js";import"./uniq-dwgeWkvB.js";import"./index-DrFu-skq.js";const s=`/**
 * \`useMatchMedia\` hook type
 *
 * @export
 * @typedef {UseMatchMedia}
 * @param {string} query - a CSS media query to match on
 * @returns {boolean}
 */
export type UseMatchMedia = (query: string) => MediaQueryList;
/**
 * Returns a boolean indicating whether or not a media query matches
 *
 * @example
 * To check for a screen width <= 360px
 * \`\`\`ts
 * const isMobile = useMatchMedia("screen and (max-width: 360px)")
 * \`\`\`
 * @example
 * To check if the browser is printing the page
 * \`\`\`ts
 * const isPrinting = useMatchMedia("print")
 * \`\`\`
 * @implements {UseMatchMedia}
 * @param {string} query - a CSS media query to match on
 * @returns {MediaQueryList}
 */
declare const useMatchMedia: UseMatchMedia;
export default useMatchMedia;
`;function a(t){const n={h1:"h1",h2:"h2",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"useMatchMedia"}),`
`,e.jsx(n.h1,{id:"usematchmedia",children:"useMatchMedia"}),`
`,e.jsx(n.p,{children:"Track whether a media query is matching or not"}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(o,{language:"ts",code:s})]})}function j(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{j as default};

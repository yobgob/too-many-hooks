import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import{ae as r,af as o}from"./index-Be446UHo.js";import"./index-RYns6xqu.js";import"./iframe-BPhcqx7T.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./_baseIsEqual-BBkbHXCC.js";import"./_overArg-DNpLtsSq.js";import"./index-BAm4mo3T.js";import"./index-DrFu-skq.js";const s=`/**
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

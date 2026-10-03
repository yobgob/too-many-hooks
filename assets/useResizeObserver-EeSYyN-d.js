import{j as e,T as p,D as R,S as u,m as O,r}from"./iframe-D0cwLo6p.js";const v=`/**
 * \`useResizeObserver\` hook type
 *
 * @export
 * @typedef {UseResizeObserver}
 * @param {(Element | null)} target
 * @param {?ResizeObserverOptions} [options]
 * @returns {(ResizeObserverEntry[] | undefined)}
 */
export type UseResizeObserver = (target: Element | null, options?: ResizeObserverOptions) => ResizeObserverEntry[] | undefined;
/**
 * Wraps a resize observer on an element
 *
 * @implements {UseResizeObserver}
 * @param {(Element | null)} target
 * @param {?ResizeObserverOptions} [options]
 * @returns {(ResizeObserverEntry[] | undefined)}
 */
declare const useResizeObserver: UseResizeObserver;
export default useResizeObserver;
`,b="\nHandles adding and removing a `ResizeObserver` to observe an element and return the most recent `ResizeObserverEntry`\n",c=()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{}),e.jsx(R,{}),e.jsx(u,{code:v,language:"typescript"}),e.jsx(O,{})]}),m={page:c,description:{component:b}},z=(s,n)=>{const[o,a]=r.useState(),t=r.useRef(new ResizeObserver(a));return r.useEffect(()=>{if(s){const i=t.current;return i.observe(s,n),()=>{i.unobserve(s)}}},[s,t,n]),o};export{m as U,z as u};

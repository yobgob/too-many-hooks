var ce=Object.defineProperty;var pe=(t,e,n)=>e in t?ce(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var h=(t,e,n)=>pe(t,typeof e!="symbol"?e+"":e,n);import{j as A,T as me,D as fe,S as ne,m as Te,r as u,R as De}from"./iframe-D0cwLo6p.js";const ge=`import type React from 'react';
import type { Coordinates, CoordinatesOfLength, CoordinatesOrNever, GraphData, IGraph } from '../../../UseGraph/Graph';
import type { ObjectKey, PartialDataKeys } from './internal';
/**
 * The type of elements that can be registered with \`useForm\` - inputs, selects, and textareas
 *
 * @export
 * @typedef {FieldElement}
 */
export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
/**
 * The type of data that can be used in the \`useForm\` - the same as standard input types
 *
 * @export
 * @interface FieldsData
 * @typedef {FieldsData}
 */
export interface FieldsData {
    [key: ObjectKey]: string | string[] | FileList | number | boolean | Date;
}
/**
 * Options for configuring a form field when registering it
 *
 * @export
 * @interface RegisterOptions
 * @typedef {RegisterOptions}
 * @template {FieldsData} TData
 * @template {keyof TData} [TFieldName=keyof TData]
 * @template {RefPropKey} [TRefPropKey='ref']
 * @template {boolean} [TIsRequired=false]
 */
export interface RegisterOptions<TData extends FieldsData, TDimensions extends number = 0, TFieldName extends keyof TData = keyof TData, TIsRequired extends boolean = false> {
    /**
     * If true, adds a validation that the field has a value, outputting an error if not
     *
     * @type {?TIsRequired}
     */
    isRequired?: TIsRequired;
    isRequiredErrorMessageOverride?: string;
    /**
     * Adds a custom validation to the field.
     * If \`isRequired\` is \`true\`, the field is guaranteed to have a value.
     *
     * @type {?(
     *     field: TIsRequired extends true ? TData[TFieldName] : TData[TFieldName] | undefined | null,
     *     fields: TIsRequired extends true ? Partial<TData> & Pick<TData, TFieldName> : Partial<TData>,
     *     graph: FormData<Partial<TData>, TDimensions>,
     *   ) => string | null}
     */
    validate?: (field: TIsRequired extends true ? TData[TFieldName] : TData[TFieldName] | undefined | null, fields: TIsRequired extends true ? Partial<TData> & Pick<TData, TFieldName> : Partial<TData>, graph: FormData<Partial<TData>, TDimensions>) => string | null;
    /**
     * The coordinates of the registered field, if in a form with TDimensions > 0
     *
     * @type {?CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>}
     */
    coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>;
    /**
     * If \`true\`, the field will not be automatically removed when its \`ref\` is unset
     *
     * @type {?boolean}
     */
    shouldNotBeAutoPruned?: boolean;
}
/**
 * The result of the \`register\` function including:
 * - A ref of the type of the field's element
 * - An \`onChange\` function for updating form data values
 * - An \`onFocus\` function for marking fields as touched
 * - An \`onBlur\` function for triggering validations
 * @export
 * @typedef {RegisterResult}
 * @template {FieldElement} [TFieldElement=FieldElement]
 */
export type RegisterResult<TFieldElement extends FieldElement = FieldElement> = {
    ref: React.Ref<TFieldElement>;
    onChange: <TOnChangeElement extends FieldElement = FieldElement>(event: React.ChangeEvent<TOnChangeElement> | null) => void;
    onFocus: () => void;
    onBlur: () => void;
};
/**
 * The type of the \`register\` function provided by \`useForm\`.
 * Generic for:
 * - The form's data type
 * - The type of element being registered as a field
 * - Where or not the field is required
 *
 * @export
 * @typedef {Register}
 * @template {FieldsData} TData
 */
export type Register<TData extends FieldsData, TDimensions extends number = 0> = <TFieldName extends keyof TData, TFieldElement extends FieldElement, TIsRequired extends boolean = false>(fieldName: TFieldName, options?: RegisterOptions<TData, TDimensions, TFieldName, TIsRequired>) => RegisterResult<TFieldElement>;
/**
 * The type of the \`deregister\` function provided by \`useForm\`.
 *
 * @export
 * @typedef {Deregister}
 * @template {FieldsData} TData
 */
export type Deregister<TData extends FieldsData, TDimensions extends number = 0> = <TFieldName extends keyof TData>(fieldName: TFieldName, coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => void;
/**
 * The type of the \`deregisterAtCoordinates\` function provided by \`useForm\`.
 *
 * @export
 * @typedef {DeregisterAtCoordinates}
 * @template {FieldsData} TData
 */
export type DeregisterAtCoordinates<TDimensions extends number = 0> = <TCoordinates extends Coordinates = CoordinatesOfLength<0>>(coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>) => void;
/**
 * The callback run when submitting via \`handleSubmit\` in \`useForm\`.
 * If validations are skipped, data is not guaranteed to exist.
 *
 * @export
 * @typedef {OnSubmit}
 * @template {FieldsData} TData
 * @template {boolean} TShouldSkipValidations
 */
export type OnSubmit<TData extends FieldsData, TDimensions extends number = 0, TShouldSkipValidations extends boolean = false> = (data: TShouldSkipValidations extends true ? TDimensions extends 0 ? Partial<TData> : FormData<Partial<TData>, TDimensions> : TDimensions extends 0 ? TData : FormData<TData, TDimensions>) => void;
/**
 * The options for handling a submission with \`useForm\`
 *
 * @export
 * @interface HandleSubmitOptions
 * @typedef {HandleSubmitOptions}
 * @template {FieldsData} TData
 * @template {boolean} TShouldSkipValidations
 */
export interface HandleSubmitOptions<TData extends FieldsData, TDimensions extends number = 0, TShouldSkipValidations extends boolean = false> {
    /**
     * If \`true\`, the \`onSubmit\` function will be called even with errors in the form
     *
     * @type {?TShouldSkipValidations}
     */
    shouldSkipValidations?: TShouldSkipValidations;
    /**
     * A callback used upon submission of the form with all data defined
     * If \`shouldSkipValidations\` is \`true\`, data is not guaranteed to exist
     *
     * @type {?OnSubmit<TData, TShouldSkipValidations>}
     */
    onSubmit?: OnSubmit<TData, TDimensions, TShouldSkipValidations>;
    /**
     * A callback used upon submission of the form if errors prevented completion
     *
     * @type {?(errors: TDimensions extends 0 ? Errors<TData> : FormData<Errors<TData>, TDimensions>) => void}
     */
    onError?: (errors: TDimensions extends 0 ? Errors<TData> : FormData<Errors<TData>, TDimensions>) => void;
}
/**
 * The type of the \`handleSubmit\` function provided by \`useForm\`
 *
 * @export
 * @typedef {HandleSubmit}
 * @template {FieldsData} TData
 * @template {boolean} TShouldSkipValidations
 */
export type HandleSubmit<TData extends FieldsData, TDimensions extends number = 0> = <TShouldSkipValidations extends boolean = false>(options: HandleSubmitOptions<TData, TDimensions, TShouldSkipValidations>) => void;
/**
 * The data tracked internally of one field
 *
 * @export
 * @interface FieldData
 * @typedef {FieldData}
 * @template {FieldsData} TData
 * @template {FieldElements<TData>} [TFieldElements=FieldElements<TData>]
 * @template {string | number | symbol} [TRefPropKey='ref']
 * @template {boolean} [TIsRequired=false]
 */
export interface FieldData<TData extends FieldsData, TDimensions extends number = 0, TFieldElements extends FieldElements<TData> = FieldElements<TData>, TIsRequired extends boolean = boolean> {
    /**
     * The name of the field
     *
     * @type {keyof TData}
     */
    name: keyof TData;
    /**
     * A ref to the element the field was registered upon
     *
     * @type {React.Ref<TFieldElements[keyof TData]>}
     */
    ref: React.MutableRefObject<TFieldElements[keyof TData] | null>;
    /**
     * Configures the validations of the registered field and what the \`register\` function for the field returns
     *
     * @type {?RegisterOptions<TData, keyof TData, TRefPropKey, TIsRequired>}
     */
    options?: RegisterOptions<TData, TDimensions, keyof TData, TIsRequired>;
    /**
     * The current value of the field
     *
     * @type {?TData[keyof TData]}
     */
    value?: TData[keyof TData];
    /**
     * A string error or null if no error exists
     *
     * @type {(string | null)}
     */
    error: string | null;
    /**
     * Whether or not the user has focused the registered field
     *
     * @type {boolean}
     */
    hasBeenTouched: boolean;
    /**
     * Whether or not the user has changed the value of the registered field
     *
     * @type {boolean}
     */
    hasBeenChanged: boolean;
}
/**
 * Maps registered field names to validation information.
 * If a field has an error, a user-facing string describing that error is returned.
 * If a field has no error, \`null\` is returned.
 *
 * @export
 * @typedef {Errors}
 * @template {FieldsData} TData
 */
export type Errors<TData extends FieldsData> = PartialDataKeys<TData, string | null>;
/**
 * Maps registered field names to a boolean indicating if the user has focused the input.
 *
 * @export
 * @typedef {Touched}
 * @template {FieldsData} TData
 */
export type Touched<TData extends FieldsData> = PartialDataKeys<TData, boolean>;
/**
 * Maps registered field names to a boolean indicating if the user has changed the value of the input.
 *
 * @export
 * @typedef {Changed}
 * @template {FieldsData} TData
 */
export type Changed<TData extends FieldsData> = PartialDataKeys<TData, boolean>;
/**
 * Maps registered field names to their respective element types in the DOM
 *
 * @export
 * @typedef {FieldElements}
 * @template {FieldsData} TData
 * @template {FieldElement} [TFieldElement=FieldElement]
 */
export type FieldElements<TData extends FieldsData, TFieldElement extends FieldElement = FieldElement> = {
    [Key in keyof TData]: TFieldElement;
};
/**
 * The type of the internally tracked information about each registered field.
 *
 * The defaults of \`FieldElements<TData, FieldElement>\`, \`ObjectKey\`, and \`boolean\` are broader than the actual types
 * of each element - this allows us to be responsible for narrowing of these types, except where they are needed by the
 * user and can be inferred via generics e.g. the \`register\` function
 * This ultimately allows users to pass in just one generic type: their data type
 *
 *
 * @export
 * @typedef {Fields}
 * @template {FieldsData} TData
 * @template {FieldElements<TData, FieldElement>} [TFieldElements=FieldElements<TData, FieldElement>]
 * @template {RefPropKey} [TRefPropKey=RefPropKey]
 * @template {boolean} [TIsRequired=boolean]
 */
export type Fields<TData extends FieldsData, TDimensions extends number = 0, TFieldElements extends FieldElements<TData, FieldElement> = FieldElements<TData, FieldElement>, TIsRequired extends boolean = boolean> = PartialDataKeys<TData, FieldData<TData, TDimensions, TFieldElements, TIsRequired>>;
export interface UseFormOptions<TDimensions extends number = 0> {
    dimensions?: TDimensions;
    isRequiredErrorMessageOverride?: string;
    shouldNotAutoPruneFields?: boolean;
}
/**
 * The return type of \`useForm\`
 *
 * @export
 * @interface UseFormReturn
 * @typedef {UseFormReturn}
 * @template {FieldsData} TData
 */
export interface UseFormReturn<TData extends FieldsData, TDimensions extends number = 0> {
    /**
     * The \`register\` function is used to register inputs as fields within the form
     *
     * @type {Register<TData, TDimensions>}
     */
    register: Register<TData, TDimensions>;
    /**
     * The \`deregister\` function is used to remove fields from the form for which data/errors should no longer be tracked
     *
     * @type {Deregister<TData, TDimensions>}
     */
    deregister: Deregister<TData, TDimensions>;
    /**
     * The \`deregisterAtCoordinates\` function deregisters all fields at or below a set of coordinates
     *
     * @type {DeregisterAtCoordinates<TDimensions>}
     */
    deregisterAtCoordinates: DeregisterAtCoordinates<TDimensions>;
    /**
     * A graph of maps of registered fields to their validation information
     *
     * @type {GraphData<Errors<TData>, TDimensions> | null}
     */
    errors: GraphData<Errors<TData>, TDimensions> | null;
    /**
     * A graph of maps of registered fields to whether or not they have been focused by the user
     *
     * @type {GraphData<Touched<TData>, TDimensions> | null}
     */
    touched: GraphData<Touched<TData>, TDimensions> | null;
    /**
     * A graph of maps of registered fields to whether or not their value has been changed by the user
     *
     * @type {GraphData<Changed<TData>, TDimensions> | null}
     */
    changed: GraphData<Changed<TData>, TDimensions> | null;
    /**
     * \`true\` if the user has focused any form field
     *
     * @type {boolean}
     */
    hasBegun: boolean;
    /**
     * \`true\` if the form has not been submitted since the last form field was changed
     *
     * @type {boolean}
     */
    hasChangedWithoutSubmit: boolean;
    /**
     * Handles submission of the form, conditionally calling an \`onSubmit\` callback which receives the form's data
     *
     * @type {HandleSubmit<TData, TDimensions>}
     */
    handleSubmit: HandleSubmit<TData, TDimensions>;
}
/**
 * The type of the \`useForm\` hook, which helps manage state for forms
 *
 * @export
 * @typedef {UseForm}
 */
export type UseForm = <TData extends FieldsData, TDimensions extends number = 0>(options?: UseFormOptions<TDimensions>) => UseFormReturn<TData, TDimensions>;
/**
 * \`useForm\` data with any dimensionality, usually used for arrays or matrices of forms
 *
 * Requires a \`TFieldsData\` type which is the type of the form fields that are repeated for each set of graph coordinates
 *
 * Requires \`TDimensions\` which indicates how many dimensions the form has
 * e.g. 0 is just TFieldsData, 1 is effectively an array of TFieldsData, 2 is effectively a matrix of TFieldsData
 * (although they are actually objects indexed with numbers)
 *
 * @export
 * @typedef {FormData}
 * @template TFieldsData
 * @template {number} [TDimensions=0]
 */
export type FormData<TFieldsData, TDimensions extends number = 0> = IGraph<TFieldsData, TDimensions>;
`,ye=`import type { UseForm } from './types';
/**
 * Helps manage form state.
 * Provides a \`register\` function for registering fields with the hook and handles tracking
 * their values, errors, and submission of the form.
 *
 * @template {FieldsData} TData
 * @returns {{ register: Register<TData>; errors: Errors<TData>; touched: Touched<TData>; handleSubmit: HandleSubmit<TData>; }}
 */
declare const useForm: UseForm;
export default useForm;
`,xe="\nManage state, validations, and submission for forms with any number of dimensions\n\n## Utilities\n\nThe `useForm` hook comes with `buildRegisterOverride` - a utility for transforming the results of the `register` function to have custom keys, so it can be used custom input components regardless of prop names.\nAll that is required to register a field is a component with `ref`, `onChange`, `onBlur`, and `onFocus` props by any name.\n",Fe=()=>A.jsxs(A.Fragment,{children:[A.jsx(me,{}),A.jsx(fe,{}),A.jsx(ne,{code:ye,language:"typescript"}),A.jsx(ne,{code:ge,language:"typescript"}),A.jsx(Te,{})]}),we={page:Fe,description:{component:xe}},v=(t,e)=>{const n={...t};return delete n[e],n};class F{constructor({graph:e,dimensions:n,data:s}){h(this,"data",null);h(this,"dimensions");h(this,"getDimensions",()=>this.dimensions);h(this,"get",()=>this.data);h(this,"getAtCoordinates",e=>e!=null&&e.length?e.reduce((n,s)=>n==null?void 0:n[s],this.data)??null:this.data);h(this,"getVertex",e=>this.getAtCoordinates(e));h(this,"set",e=>(this.data=e,e));h(this,"setAtCoordinates",(e,n)=>this.updateAtCoordinates(()=>e,n));h(this,"setVertex",(e,n)=>this.setAtCoordinates(e,n));h(this,"update",e=>{const n=e(this.data);return this.data=n,n});h(this,"updateAtCoordinates",(e,n)=>{const s=e(this.getAtCoordinates(n),n);if(n!=null&&n.length){const g=n.reduceRight((c,l,f)=>({...this.getAtCoordinates(n.slice(0,n.length-(f+1))),[l]:c}),s);return this.data=g,this.getAtCoordinates(n)}else return this.data=s,this.data});h(this,"updateVertex",(e,n)=>this.updateAtCoordinates(e,n));h(this,"clear",()=>{this.data=null});h(this,"pruneAtCoordinates",e=>{e!=null&&e.length?this.updateAtCoordinates(n=>n?v(n,e.at(-1)):null,e.slice(0,-1)):this.data=null});h(this,"pruneVertex",e=>{e!=null&&e.length?this.updateAtCoordinates(n=>n?v(n,e.at(-1)):null,e.slice(0,-1)):this.data=null});h(this,"map",e=>e(this.data));h(this,"mapAtCoordinates",(e,n)=>e(this.getAtCoordinates(n),n));h(this,"mapVertex",(e,n)=>this.mapAtCoordinates(e,n));h(this,"_forEachVertex",(e,n)=>{if(this.dimensions===0)this.data&&e(this.data);else{const s=n.length+1,g=this.getAtCoordinates(n),c=Object.keys(g??{}).map(l=>+l);s===this.dimensions?c.forEach(l=>{const f=[...n,l];e(this.getVertex(f),f)}):c.forEach(l=>this._forEachVertex(e,[...n,l]))}});h(this,"forEachVertex",e=>this._forEachVertex(e,[]));h(this,"_updateAllVertices",(e,n)=>{if(this.dimensions===0){const s=e(this.data);return this.data=s,s}else{const s=n.length+1,g=this.getAtCoordinates(n),c=Object.keys(g??{}).map(l=>+l);return s===this.dimensions?c.reduce((l,f)=>({...l,[f]:this.updateVertex(e,[...n,f])}),{}):c.reduce((l,f)=>({...l,[f]:this._updateAllVertices(e,[...n,f])}),{})}});h(this,"_someVertex",(e,n)=>{if(this.dimensions===0)return this.data?e(this.data):!1;{const s=n.length+1,g=this.getAtCoordinates(n),c=Object.keys(g??{}).map(l=>+l);return s===this.dimensions?c.some(l=>e(this.getVertex([...n,l]))):c.some(l=>this._someVertex(e,[...n,l]))}});h(this,"someVertex",e=>this._someVertex(e,[]));h(this,"updateAllVertices",e=>(this._updateAllVertices(e,[]),this.data));h(this,"setAllVertices",e=>{this._updateAllVertices(()=>e,[])});h(this,"_mapAllVertices",(e,n)=>{if(this.dimensions===0)return this.data===null?null:e(this.data);{const s=n.length+1,g=this.getAtCoordinates(n),c=Object.keys(g??{}).map(l=>+l);return s===this.dimensions?c.reduce((l,f)=>({...l,[f]:this.mapVertex(e,[...n,f])}),{}):c.reduce((l,f)=>({...l,[f]:this._mapAllVertices(e,[...n,f])}),{})}});h(this,"mapAllVertices",e=>new F({dimensions:this.dimensions,data:this._mapAllVertices(e,[])}));s&&n!==void 0?(this.data=s,this.dimensions=n):e?(this.data=e.get(),this.dimensions=e.getDimensions()):n!==void 0?this.dimensions=n:this.dimensions=0}}const B=({dimensions:t=0,initial:e}={})=>{const[n,s]=u.useState(e??new F({dimensions:t})),g=u.useCallback(m=>s(p=>{const D=new F({graph:p});return D.update(m),D}),[]),c=u.useCallback((m,p)=>s(D=>{const C=new F({graph:D});return C.updateAtCoordinates(m,p),C}),[]),l=u.useCallback((m,p)=>s(D=>{const C=new F({graph:D});return C.updateVertex(m,p),C}),[]),f=u.useCallback(m=>g(()=>m),[g]),I=u.useCallback((m,p)=>c(()=>m,p),[c]),O=u.useCallback((m,p)=>l(()=>m,p),[l]),E=u.useCallback(m=>s(p=>{const D=new F({graph:p});return D.updateAllVertices(m),D}),[]),b=u.useCallback(m=>{s(p=>{const D=new F({graph:p});return D.pruneAtCoordinates(m),D})},[]),j=u.useCallback(m=>{s(p=>{const D=new F({graph:p});return D.pruneVertex(m),D})},[]),P=u.useCallback(m=>E(()=>m),[E]),w=u.useCallback(()=>{s(m=>{const p=new F({graph:m});return p.clear(),p})},[]);return[n.get(),{getAtCoordinates:n.getAtCoordinates,getVertex:n.getVertex,set:f,setAtCoordinates:I,setVertex:O,update:g,updateAtCoordinates:c,updateVertex:l,clear:w,pruneAtCoordinates:b,pruneVertex:j,map:n.map,mapAtCoordinates:n.mapAtCoordinates,mapVertex:n.mapVertex,forEachVertex:n.forEachVertex,someVertex:n.someVertex,setAllVertices:P,updateAllVertices:E,mapAllVertices:n.mapAllVertices}]},U=t=>"type"in t&&t.type==="file",M=t=>"type"in t&&t.type==="radio",_=t=>"type"in t&&t.type==="checkbox",be=t=>"type"in t&&t.type==="date",H=t=>"type"in t&&t.type==="number",Ce=t=>"type"in t&&t.type==="select-one",L=t=>"type"in t&&t.type==="select-multiple",Ve=t=>"type"in t&&t.type==="textarea",W=t=>Array.from(t.options).reduce((e,n)=>n.selected?[...e,n.value]:e,[]),ke=t=>{if(t)return M(t)||_(t)?t.defaultChecked??t.checked:U(t)?t.files:H(t)?t.defaultValue?+t.defaultValue:+t.value:Ce(t)?t.value:L(t)?W(t):Ve(t)?t.value:"defaultValue"in t?t.defaultValue??t.value:t.value},Ae=t=>{if("target"in t&&"type"in t.target){const e=t.target;return M(e)||_(e)?e.checked:U(e)?e.files:H(e)?+e.value:L(e)?W(e):e.value}},re=t=>t==null||t===""||typeof t=="object"&&"length"in t&&t.length===0,ae=t=>!re(t),se=t=>{if(t.ref.current&&"type"in t.ref.current){const e=t.ref.current;return M(e)||_(e)?e.checked:U(e)?e.files:H(e)?ae(e.value)?+e.value:e.value:be(e)?ae(e.value)?new Date(e.value):e.value:L(e)?W(e):e.value}return t.value},K=t=>t.mapAllVertices(e=>e?Object.keys(e).reduce((n,s)=>s?{...n,[s]:se(e[s])}:n,{}):null),Ee=(t,e)=>{const{ref:n,onChange:s,onBlur:g,onFocus:c}={ref:e.ref??"ref",onChange:e.onChange??"onChange",onBlur:e.onBlur??"onBlur",onFocus:e.onFocus??"onFocus"};return{[n]:t.ref,[s]:t.onChange,[g]:t.onBlur,[c]:t.onFocus}},Se=(t,e)=>(n,s)=>Ee(t(n,s),e),Ie=({dimensions:t=0,isRequiredErrorMessageOverride:e,shouldNotAutoPruneFields:n=!1}={})=>{const s=u.useRef(new F({dimensions:t})),[g,{updateVertex:c,set:l,pruneVertex:f,pruneAtCoordinates:I}]=B({dimensions:t}),[O,{someVertex:E,updateVertex:b,pruneVertex:j,pruneAtCoordinates:P}]=B({dimensions:t}),[w,{someVertex:m,updateVertex:p,updateAllVertices:D,pruneVertex:C,pruneAtCoordinates:Y}]=B({dimensions:t}),ie=u.useMemo(()=>!!O&&E(r=>r?Object.values(r).some(a=>a):!1),[O,E]),oe=u.useMemo(()=>!!w&&m(r=>r?Object.values(r).some(a=>a):!1),[w,m]),x=u.useCallback((r,a,i)=>s.current.updateVertex(o=>o?{...o,[r]:a(o==null?void 0:o[r])}:{[r]:a()},i),[]),z=u.useCallback((r,a,i)=>s.current.updateVertex(o=>o?{...o,[r]:a}:{[r]:a},i),[]),J=u.useCallback((r,a)=>{x(r,i=>i&&{...i,hasBeenTouched:!0},a),b(i=>i&&{...i,[r]:!0},a)},[b,x]),Q=u.useCallback((r,a)=>{x(r,i=>i&&{...i,hasBeenChanged:!0},a),p(i=>i&&{...i,[r]:!0},a)},[p,x]),G=u.useCallback(()=>{s.current.updateAllVertices(r=>r?Object.keys(r).reduce((a,i)=>({...a,[i]:{...r[i],changed:!1}}),{}):null),D(r=>r?Object.keys(r).reduce((a,i)=>({...a,[i]:!1}),{}):null)},[D]),X=u.useCallback(r=>{const a=s.current.getVertex(r);if(a){const i=Object.keys(a).reduce((T,d)=>{var y,V,k,R;return{...T,...(V=(y=a[d])==null?void 0:y.ref)!=null&&V.current||(R=(k=a[d])==null?void 0:k.options)!=null&&R.shouldNotBeAutoPruned?{[d]:a[d]}:{}}},{});s.current.setVertex(i,r);const o=T=>T?Object.keys(i).reduce((d,y)=>({...d,[y]:T[y]}),{}):null;c(o),b(o),p(o)}},[p,c,b]),S=u.useCallback(r=>{s.current.pruneAtCoordinates(r),f(r),j(r),C(r)},[C,f,j]),le=u.useCallback((r,a)=>{s.current.updateVertex(o=>o?v(o,r):null,a);const i=s.current.getVertex(a);!i||Object.keys(i).length===0?S(a):(c(o=>o?v(o,r):null,a),b(o=>o?v(o,r):null,a),p(o=>o?v(o,r):null,a))},[S,p,c,b]),de=u.useCallback(r=>{s.current.pruneAtCoordinates(r),I(r),P(r),Y(r)},[Y,I,P]),Z=u.useCallback(()=>{s.current.forEachVertex((r,a)=>{if(!r)S(a);else{X(a);const i=s.current.getVertex(a);(!i||Object.keys(i).length===0)&&S(a)}})},[S,X]),q=u.useCallback((r,a)=>{var y,V;const i=s.current.getVertex(a);if(!(i&&r in i))return null;const o=i[r],T=se(o),d=o.options;if(d!=null&&d.isRequired&&re(T)){const k=((y=o.options)==null?void 0:y.isRequiredErrorMessageOverride)??e??"Field is required";return x(r,R=>({...R,error:k}),a),k}else{const k=K(s.current),R={...k.getVertex(a),[r]:T},te=((V=d==null?void 0:d.validate)==null?void 0:V.call(d,T,R,k.get()))??null;return x(r,he=>({...he,error:te}),a),te}},[e,x]),$=u.useCallback(()=>s.current.forEachVertex((r,a)=>{r&&Object.keys(r).forEach(i=>q(i,a))}),[q]),N=u.useCallback((r,a)=>{c(i=>({...i,[r]:q(r,a)}),a)},[c,q]),ee=u.useCallback(()=>{$();const r=s.current.mapAllVertices(a=>a?Object.keys(a).reduce((i,o)=>{var T;return{...i,[o]:(T=a[o])==null?void 0:T.error}},{}):null).get();l(r)},[l,$]),ue=u.useCallback(({shouldSkipValidations:r,onSubmit:a,onError:i})=>{if(n||Z(),r){const o=K(s.current);a==null||a(o),G()}else if(s.current){ee();const o=s.current.mapAllVertices(d=>d?Object.keys(d).reduce((y,V)=>({...y,[V]:d[V].error}),{}):null);if(o.someVertex(d=>d?Object.keys(d).some(y=>d[y]!==null):!1))i==null||i(o);else{const d=K(s.current);G(),a==null||a(d)}}},[G,n,Z,ee]);return{register:u.useCallback((r,a)=>{a??(a={});const i=s.current.getVertex(a.coordinates)??{};return r in i?x(r,o=>({...o,options:a}),a.coordinates):z(r,{name:r,ref:De.createRef(),options:a,value:void 0,error:null,hasBeenTouched:!1,hasBeenChanged:!1},a==null?void 0:a.coordinates),{ref:o=>{const T=s.current.getVertex(a.coordinates);if(T!=null&&T[r])if(T[r].value===void 0){const d=ke(o);x(r,y=>({...y,value:d,ref:{...y.ref,current:o}}),a.coordinates)}else x(r,d=>({...d,ref:{...d.ref,current:o}}),a.coordinates)},onChange:o=>{const T=s.current.getVertex(a.coordinates);if(r in T){T[r].hasBeenChanged||Q(r,a.coordinates);const d=Ae(o);x(r,y=>({...y,value:d}),a==null?void 0:a.coordinates)}},onFocus:()=>{const o=s.current.getVertex(a.coordinates);r in o&&(o[r].hasBeenTouched||J(r,a==null?void 0:a.coordinates))},onBlur:()=>{N(r,a==null?void 0:a.coordinates)}}},[Q,z,J,N,x]),deregister:le,deregisterAtCoordinates:de,errors:g,touched:O,changed:w,hasBegun:ie,hasChangedWithoutSubmit:oe,handleSubmit:ue}};export{we as U,Se as b,Ie as u};

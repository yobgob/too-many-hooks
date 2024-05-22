import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as o,d as a}from"./index-iNG66WTU.js";import"./index-uubelm5h.js";import"./iframe-DLVtTsMU.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-DNoTwSKD.js";import"./_baseIsEqual-rkW4RVPP.js";import"./uniq-dwgeWkvB.js";import"./index-DrFu-skq.js";const r=`import { ObjectKey, PartialDataKeys } from './internal';
import { Coordinates, CoordinatesOfLength, CoordinatesOrNever, GraphData, IGraph } from '../../../UseGraph/Graph';
import { default as React } from 'react';

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
`,d=`import { UseForm } from './types';

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
`;function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"useForm"}),`
`,e.jsx(n.h1,{id:"useform",children:"useForm"}),`
`,e.jsx(n.p,{children:"Manage state, validations, and submission for forms with any number of dimensions"}),`
`,e.jsx(n.h2,{id:"utilities",children:"Utilities"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useForm"})," hook comes with ",e.jsx(n.code,{children:"buildRegisterOverride"})," - a utility for transforming the results of the ",e.jsx(n.code,{children:"register"}),` function to have custom keys, so it can be used custom input components regardless of prop names.
All that is required to register a field is a component with `,e.jsx(n.code,{children:"ref"}),", ",e.jsx(n.code,{children:"onChange"}),", ",e.jsx(n.code,{children:"onBlur"}),", and ",e.jsx(n.code,{children:"onFocus"})," props by any name."]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(a,{language:"ts",code:d}),`
`,e.jsx(a,{language:"ts",code:r})]})}function x(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{x as default};

import{M as Z,S as W,C as x,a as Y}from"./chunk-MA2MUXQN-5e089c2e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{z as J,j as N,a as c,F as k}from"./too-many-hooks-1b006c2c.js";import{c as M}from"./_commonjsHelpers-042e6b4d.js";import{r as y}from"./index-f1f749bf.js";import{u as R}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./index-96c5f47c.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-d7041101.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-73b10f51.js";import"./chunk-XHUUYXNA-5f774ba0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-9936fa47.js";var b="Expected a function",L=0/0,j="[object Symbol]",_=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,Q=/^0b[01]+$/i,z=/^0o[0-7]+$/i,q=parseInt,X=typeof M=="object"&&M&&M.Object===Object&&M,$=typeof self=="object"&&self&&self.Object===Object&&self,ee=X||$||Function("return this")(),ae=Object.prototype,ne=ae.toString,te=Math.max,oe=Math.min,g=function(){return ee.Date.now()};function se(e,a,n){var t,r,l,u,s,v,d=0,I=!1,m=!1,A=!0;if(typeof e!="function")throw new TypeError(b);a=K(a)||0,S(n)&&(I=!!n.leading,m="maxWait"in n,l=m?te(K(n.maxWait)||0,a):l,A="trailing"in n?!!n.trailing:A);function T(o){var i=t,f=r;return t=r=void 0,d=o,u=e.apply(f,i),u}function O(o){return d=o,s=setTimeout(p,a),I?T(o):u}function F(o){var i=o-v,f=o-d,P=a-i;return m?oe(P,l-f):P}function h(o){var i=o-v,f=o-d;return v===void 0||i>=a||i<0||m&&f>=l}function p(){var o=g();if(h(o))return B(o);s=setTimeout(p,F(o))}function B(o){return s=void 0,A&&t?T(o):(t=r=void 0,u)}function H(){s!==void 0&&clearTimeout(s),d=0,t=v=r=s=void 0}function V(){return s===void 0?u:B(g())}function G(){var o=g(),i=h(o);if(t=arguments,r=this,v=o,i){if(s===void 0)return O(v);if(m)return s=setTimeout(p,a),T(v)}return s===void 0&&(s=setTimeout(p,a)),u}return G.cancel=H,G.flush=V,G}function ce(e,a,n){var t=!0,r=!0;if(typeof e!="function")throw new TypeError(b);return S(n)&&(t="leading"in n?!!n.leading:t,r="trailing"in n?!!n.trailing:r),se(e,a,{leading:t,maxWait:a,trailing:r})}function S(e){var a=typeof e;return!!e&&(a=="object"||a=="function")}function re(e){return!!e&&typeof e=="object"}function le(e){return typeof e=="symbol"||re(e)&&ne.call(e)==j}function K(e){if(typeof e=="number")return e;if(le(e))return L;if(S(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=S(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=e.replace(_,"");var n=Q.test(e);return n||z.test(e)?q(e.slice(2),n?2:8):w.test(e)?L:+e}var ue=ce;const E=({firstName:e,countryCode:a})=>{const[n,t]=y.useState(),r=y.useRef(ue(u=>fetch("https://api.agify.io?"+new URLSearchParams(u)).then(s=>s.json()).then(s=>t(s.age)),2e3)),l={name:e,country_id:a};return J(()=>{l!=null&&l.name&&l.country_id&&r.current(l)},[l]),N("div",{className:"prose flex flex-col items-center gap-4 text-4xl",children:[c("p",{children:'Enter a name and country in "Controls" to get a predicted age'}),c("p",{children:n?`Predicted age: ${n}`:e?"No age result for entered name and location":"No name entered"})]})};try{E.displayName="API",E.__docgenInfo={description:"",displayName:"API",props:{firstName:{defaultValue:null,description:"",name:"firstName",required:!0,type:{name:"string"}},countryCode:{defaultValue:null,description:"",name:"countryCode",required:!0,type:{name:"enum",value:[{value:'"AD"'},{value:'"AE"'},{value:'"AF"'},{value:'"AG"'},{value:'"AI"'},{value:'"AL"'},{value:'"AM"'},{value:'"AN"'},{value:'"AO"'},{value:'"AQ"'},{value:'"AR"'},{value:'"AS"'},{value:'"AT"'},{value:'"AU"'},{value:'"AW"'},{value:'"AZ"'},{value:'"BA"'},{value:'"BB"'},{value:'"BD"'},{value:'"BE"'},{value:'"BF"'},{value:'"BG"'},{value:'"BH"'},{value:'"BI"'},{value:'"BJ"'},{value:'"BL"'},{value:'"BM"'},{value:'"BN"'},{value:'"BO"'},{value:'"BR"'},{value:'"BS"'},{value:'"BT"'},{value:'"BV"'},{value:'"BW"'},{value:'"BY"'},{value:'"BZ"'},{value:'"CA"'},{value:'"CC"'},{value:'"CD"'},{value:'"CF"'},{value:'"CG"'},{value:'"CH"'},{value:'"CI"'},{value:'"CK"'},{value:'"CL"'},{value:'"CM"'},{value:'"CN"'},{value:'"CO"'},{value:'"CR"'},{value:'"CU"'},{value:'"CV"'},{value:'"CX"'},{value:'"CY"'},{value:'"CZ"'},{value:'"DE"'},{value:'"DJ"'},{value:'"DK"'},{value:'"DM"'},{value:'"DO"'},{value:'"DZ"'},{value:'"EC"'},{value:'"EE"'},{value:'"EG"'},{value:'"EH"'},{value:'"ER"'},{value:'"ES"'},{value:'"ET"'},{value:'"FI"'},{value:'"FJ"'},{value:'"FK"'},{value:'"FM"'},{value:'"FO"'},{value:'"FR"'},{value:'"GA"'},{value:'"GB"'},{value:'"GD"'},{value:'"GE"'},{value:'"GF"'},{value:'"GG"'},{value:'"GH"'},{value:'"GI"'},{value:'"GL"'},{value:'"GM"'},{value:'"GN"'},{value:'"GP"'},{value:'"GQ"'},{value:'"GR"'},{value:'"GS"'},{value:'"GT"'},{value:'"GU"'},{value:'"GW"'},{value:'"GY"'},{value:'"HK"'},{value:'"HN"'},{value:'"HR"'},{value:'"HT"'},{value:'"HU"'},{value:'"ID"'},{value:'"IE"'},{value:'"IL"'},{value:'"IM"'},{value:'"IN"'},{value:'"IO"'},{value:'"IQ"'},{value:'"IR"'},{value:'"IS"'},{value:'"IT"'},{value:'"JE"'},{value:'"JM"'},{value:'"JO"'},{value:'"JP"'},{value:'"KE"'},{value:'"KG"'},{value:'"KH"'},{value:'"KI"'},{value:'"KM"'},{value:'"KN"'},{value:'"KP"'},{value:'"KR"'},{value:'"KW"'},{value:'"KY"'},{value:'"KZ"'},{value:'"LA"'},{value:'"LB"'},{value:'"LC"'},{value:'"LI"'},{value:'"LK"'},{value:'"LR"'},{value:'"LS"'},{value:'"LT"'},{value:'"LU"'},{value:'"LV"'},{value:'"LY"'},{value:'"MA"'},{value:'"MC"'},{value:'"MD"'},{value:'"ME"'},{value:'"MF"'},{value:'"MG"'},{value:'"MH"'},{value:'"MK"'},{value:'"ML"'},{value:'"MM"'},{value:'"MN"'},{value:'"MO"'},{value:'"MP"'},{value:'"MQ"'},{value:'"MR"'},{value:'"MS"'},{value:'"MT"'},{value:'"MU"'},{value:'"MV"'},{value:'"MW"'},{value:'"MX"'},{value:'"MY"'},{value:'"MZ"'},{value:'"NA"'},{value:'"NC"'},{value:'"NE"'},{value:'"NF"'},{value:'"NG"'},{value:'"NI"'},{value:'"NL"'},{value:'"NO"'},{value:'"NP"'},{value:'"NR"'},{value:'"NU"'},{value:'"NZ"'},{value:'"OM"'},{value:'"PA"'},{value:'"PE"'},{value:'"PF"'},{value:'"PG"'},{value:'"PH"'},{value:'"PK"'},{value:'"PL"'},{value:'"PM"'},{value:'"PN"'},{value:'"PR"'},{value:'"PS"'},{value:'"PT"'},{value:'"PW"'},{value:'"PY"'},{value:'"QA"'},{value:'"RE"'},{value:'"RO"'},{value:'"RS"'},{value:'"RU"'},{value:'"RW"'},{value:'"SA"'},{value:'"SB"'},{value:'"SC"'},{value:'"SD"'},{value:'"SE"'},{value:'"SG"'},{value:'"SH"'},{value:'"SI"'},{value:'"SJ"'},{value:'"SK"'},{value:'"SL"'},{value:'"SM"'},{value:'"SN"'},{value:'"SO"'},{value:'"SR"'},{value:'"ST"'},{value:'"SV"'},{value:'"SY"'},{value:'"SZ"'},{value:'"TC"'},{value:'"TD"'},{value:'"TG"'},{value:'"TH"'},{value:'"TJ"'},{value:'"TK"'},{value:'"TL"'},{value:'"TM"'},{value:'"TN"'},{value:'"TO"'},{value:'"TR"'},{value:'"TT"'},{value:'"TV"'},{value:'"TW"'},{value:'"TZ"'},{value:'"UA"'},{value:'"UG"'},{value:'"US"'},{value:'"UY"'},{value:'"UZ"'},{value:'"VA"'},{value:'"VC"'},{value:'"VE"'},{value:'"VG"'},{value:'"VI"'},{value:'"VN"'},{value:'"VU"'},{value:'"WF"'},{value:'"WS"'},{value:'"YE"'},{value:'"YT"'},{value:'"ZA"'},{value:'"ZM"'},{value:'"ZW"'}]}}}}}catch{}const ie=`import throttle from 'lodash.throttle'
import React, { useRef, useState } from 'react'
import { useDeepCompareEffect } from 'too-many-hooks'
import COUNTRIES from './assets/countries.json'

interface Props {
  firstName: string
  countryCode: keyof typeof COUNTRIES
}

const API: React.FC<Props> = ({ firstName, countryCode }) => {
  const [predictedAge, setPredictedAge] = useState<string>()

  const getThrottledPrediction = useRef(
    throttle(
      (params: { name: string; country_id: keyof typeof COUNTRIES }) =>
        fetch('https://api.agify.io?' + new URLSearchParams(params))
          .then(res => res.json())
          .then(data => setPredictedAge(data.age)),
      2000,
    ),
  )

  const fetchArgs = { name: firstName, country_id: countryCode }

  useDeepCompareEffect(() => {
    if (fetchArgs?.name && fetchArgs.country_id) {
      getThrottledPrediction.current(fetchArgs)
    }
  }, [fetchArgs])

  return (
    <div className="prose flex flex-col items-center gap-4 text-4xl">
      <p>Enter a name and country in &quot;Controls&quot; to get a predicted age</p>
      <p>
        {predictedAge
          ? \`Predicted age: \${predictedAge}\`
          : firstName
          ? 'No age result for entered name and location'
          : 'No name entered'}
      </p>
    </div>
  )
}

export default API
`,ve="Andorra",de="United Arab Emirates",me="Afghanistan",fe="Antigua and Barbuda",pe="Anguilla",Me="Albania",Se="Armenia",Ce="Netherlands Antilles",Ae="Angola",Te="Antarctica",Ge="Argentina",ge="American Samoa",Ne="Austria",Ee="Australia",Ie="Aruba",he="Azerbaijan",Be="Bosnia and Herzegovina",Pe="Barbados",ye="Bangladesh",Re="Belgium",Le="Burkina Faso",Ke="Bulgaria",De="Bahrain",be="Burundi",Ue="Benin",Oe="Saint Barthelemy",Fe="Bermuda",He="Brunei",Ve="Bolivia",Ze="Brazil",We="Bahamas",xe="Bhutan",Ye="Bouvet Island",Je="Botswana",ke="Belarus",je="Belize",_e="Canada",we="Cocos Islands",Qe="Democratic Republic of the Congo",ze="Central African Republic",qe="Republic of the Congo",Xe="Switzerland",$e="Ivory Coast",ea="Cook Islands",aa="Chile",na="Cameroon",ta="China",oa="Colombia",sa="Costa Rica",ca="Cuba",ra="Cape Verde",la="Christmas Island",ua="Cyprus",ia="Czech Republic",va="Germany",da="Djibouti",ma="Denmark",fa="Dominica",pa="Dominican Republic",Ma="Algeria",Sa="Ecuador",Ca="Estonia",Aa="Egypt",Ta="Western Sahara",Ga="Eritrea",ga="Spain",Na="Ethiopia",Ea="Finland",Ia="Fiji",ha="Falkland Islands",Ba="Micronesia",Pa="Faroe Islands",ya="France",Ra="Gabon",La="United Kingdom",Ka="Grenada",Da="Georgia",ba="French Guiana",Ua="Guernsey",Oa="Ghana",Fa="Gibraltar",Ha="Greenland",Va="Gambia",Za="Guinea",Wa="Guadeloupe",xa="Equatorial Guinea",Ya="Greece",Ja="South Georgia And Sandwich Isl.",ka="Guatemala",ja="Guam",_a="Guinea-Bissau",wa="Guyana",Qa="Hong Kong",za="Honduras",qa="Croatia",Xa="Haiti",$a="Hungary",en="Indonesia",an="Ireland",nn="Israel",tn="Isle of Man",on="India",sn="British Indian Ocean Territory",cn="Iraq",rn="Iran",ln="Iceland",un="Italy",vn="Jersey",dn="Jamaica",mn="Jordan",fn="Japan",pn="Kenya",Mn="Kyrgyzstan",Sn="Cambodia",Cn="Kiribati",An="Comoros",Tn="Saint Kitts and Nevis",Gn="North Korea",gn="South Korea",Nn="Kuwait",En="Cayman Islands",In="Kazakhstan",hn="Laos",Bn="Lebanon",Pn="Saint Lucia",yn="Liechtenstein",Rn="Sri Lanka",Ln="Liberia",Kn="Lesotho",Dn="Lithuania",bn="Luxembourg",Un="Latvia",On="Libya",Fn="Morocco",Hn="Monaco",Vn="Moldova",Zn="Montenegro",Wn="Saint Martin",xn="Madagascar",Yn="Marshall Islands",Jn="Macedonia",kn="Mali",jn="Myanmar",_n="Mongolia",wn="Macao",Qn="Northern Mariana Islands",zn="Martinique",qn="Mauritania",Xn="Montserrat",$n="Malta",et="Mauritius",at="Maldives",nt="Malawi",tt="Mexico",ot="Malaysia",st="Mozambique",ct="Namibia",rt="New Caledonia",lt="Niger",ut="Norfolk Island",it="Nigeria",vt="Nicaragua",dt="Netherlands",mt="Norway",ft="Nepal",pt="Nauru",Mt="Niue",St="New Zealand",Ct="Oman",At="Panama",Tt="Peru",Gt="French Polynesia",gt="Papua New Guinea",Nt="Philippines",Et="Pakistan",It="Poland",ht="Saint Pierre and Miquelon",Bt="Pitcairn",Pt="Puerto Rico",yt="Palestine",Rt="Portugal",Lt="Palau",Kt="Paraguay",Dt="Qatar",bt="Reunion",Ut="Romania",Ot="Serbia",Ft="Russia",Ht="Rwanda",Vt="Saudi Arabia",Zt="Solomon Islands",Wt="Seychelles",xt="Sudan",Yt="Sweden",Jt="Singapore",kt="Saint Helena",jt="Slovenia",_t="Svalbard and Jan Mayen",wt="Slovakia",Qt="Sierra Leone",zt="San Marino",qt="Senegal",Xt="Somalia",$t="Suriname",eo="Sao Tome and Principe",ao="El Salvador",no="Syria",to="Swaziland",oo="Turks and Caicos Islands",so="Chad",co="Togo",ro="Thailand",lo="Tajikistan",uo="Tokelau",io="East Timor",vo="Turkmenistan",mo="Tunisia",fo="Tonga",po="Turkey",Mo="Trinidad and Tobago",So="Tuvalu",Co="Taiwan",Ao="Tanzania",To="Ukraine",Go="Uganda",go="United States",No="Uruguay",Eo="Uzbekistan",Io="Vatican",ho="Saint Vincent and the Grenadines",Bo="Venezuela",Po="British Virgin Islands",yo="U.S. Virgin Islands",Ro="Vietnam",Lo="Vanuatu",Ko="Wallis and Futuna",Do="Samoa",bo="Yemen",Uo="Mayotte",Oo="South Africa",Fo="Zambia",Ho="Zimbabwe",D={AD:ve,AE:de,AF:me,AG:fe,AI:pe,AL:Me,AM:Se,AN:Ce,AO:Ae,AQ:Te,AR:Ge,AS:ge,AT:Ne,AU:Ee,AW:Ie,AZ:he,BA:Be,BB:Pe,BD:ye,BE:Re,BF:Le,BG:Ke,BH:De,BI:be,BJ:Ue,BL:Oe,BM:Fe,BN:He,BO:Ve,BR:Ze,BS:We,BT:xe,BV:Ye,BW:Je,BY:ke,BZ:je,CA:_e,CC:we,CD:Qe,CF:ze,CG:qe,CH:Xe,CI:$e,CK:ea,CL:aa,CM:na,CN:ta,CO:oa,CR:sa,CU:ca,CV:ra,CX:la,CY:ua,CZ:ia,DE:va,DJ:da,DK:ma,DM:fa,DO:pa,DZ:Ma,EC:Sa,EE:Ca,EG:Aa,EH:Ta,ER:Ga,ES:ga,ET:Na,FI:Ea,FJ:Ia,FK:ha,FM:Ba,FO:Pa,FR:ya,GA:Ra,GB:La,GD:Ka,GE:Da,GF:ba,GG:Ua,GH:Oa,GI:Fa,GL:Ha,GM:Va,GN:Za,GP:Wa,GQ:xa,GR:Ya,GS:Ja,GT:ka,GU:ja,GW:_a,GY:wa,HK:Qa,HN:za,HR:qa,HT:Xa,HU:$a,ID:en,IE:an,IL:nn,IM:tn,IN:on,IO:sn,IQ:cn,IR:rn,IS:ln,IT:un,JE:vn,JM:dn,JO:mn,JP:fn,KE:pn,KG:Mn,KH:Sn,KI:Cn,KM:An,KN:Tn,KP:Gn,KR:gn,KW:Nn,KY:En,KZ:In,LA:hn,LB:Bn,LC:Pn,LI:yn,LK:Rn,LR:Ln,LS:Kn,LT:Dn,LU:bn,LV:Un,LY:On,MA:Fn,MC:Hn,MD:Vn,ME:Zn,MF:Wn,MG:xn,MH:Yn,MK:Jn,ML:kn,MM:jn,MN:_n,MO:wn,MP:Qn,MQ:zn,MR:qn,MS:Xn,MT:$n,MU:et,MV:at,MW:nt,MX:tt,MY:ot,MZ:st,NA:ct,NC:rt,NE:lt,NF:ut,NG:it,NI:vt,NL:dt,NO:mt,NP:ft,NR:pt,NU:Mt,NZ:St,OM:Ct,PA:At,PE:Tt,PF:Gt,PG:gt,PH:Nt,PK:Et,PL:It,PM:ht,PN:Bt,PR:Pt,PS:yt,PT:Rt,PW:Lt,PY:Kt,QA:Dt,RE:bt,RO:Ut,RS:Ot,RU:Ft,RW:Ht,SA:Vt,SB:Zt,SC:Wt,SD:xt,SE:Yt,SG:Jt,SH:kt,SI:jt,SJ:_t,SK:wt,SL:Qt,SM:zt,SN:qt,SO:Xt,SR:$t,ST:eo,SV:ao,SY:no,SZ:to,TC:oo,TD:so,TG:co,TH:ro,TJ:lo,TK:uo,TL:io,TM:vo,TN:mo,TO:fo,TR:po,TT:Mo,TV:So,TW:Co,TZ:Ao,UA:To,UG:Go,US:go,UY:No,UZ:Eo,VA:Io,VC:ho,VE:Bo,VG:Po,VI:yo,VN:Ro,VU:Lo,WF:Ko,WS:Do,YE:bo,YT:Uo,ZA:Oo,ZM:Fo,ZW:Ho},U={parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:ie,language:"tsx"}}},argTypes:{firstName:{type:"string"},countryCode:{options:Object.keys(D),control:{type:"select",labels:D}}},args:{firstName:"",countryCode:"US"},render:e=>c(E,{...e})},Vo=`import React from 'react';
/**
 * \`useDeepCompareEffect\` hook type
 *
 * @export
 * @typedef {UseDeepCompareEffect}
 * @param {React.EffectCallback} effect
 * @param {?React.DependencyList} [deps]
 */
export declare type UseDeepCompareEffect = (effect: React.EffectCallback, deps?: React.DependencyList) => void;
/**
 * Whenever dependencies are no longer deeply equal, calls an \`effect\` function that contains imperative, possibly effectful code
 *
 * @implements {UseDeepCompareEffect}
 * @param {React.EffectCallback} effect
 * @param {?React.DependencyList} [deps]
 * @returns {*}
 */
declare const useDeepCompareEffect: UseDeepCompareEffect;
export default useDeepCompareEffect;
`;function Zo(e={}){const{wrapper:a}=Object.assign({},R(),e.components);return a?c(a,{...e,children:c(n,{})}):n();function n(){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},R(),e.components);return N(k,{children:[c(Z,{title:"Example/UseDeepCompareEffect"}),`
`,c(t.h1,{children:"useDeepCompareEffect"}),`
`,N(t.p,{children:["Runs an ",c(t.code,{children:"effect"})," function when dependencies change, deeply compared"]}),`
`,c(t.h2,{children:"Types"}),`
`,c(W,{language:"ts",code:Vo}),`
`,c(t.h2,{children:"Examples"}),`
`,c(t.h3,{children:"API call"}),`
`,c(x,{withSource:"open",children:c(Y,{name:"API Call",story:U})})]})}}const Wo=U;Wo.storyName="API Call";const C={title:"Example/UseDeepCompareEffect",tags:["mdx"],includeStories:["_api_"]};C.parameters=C.parameters||{};C.parameters.docs={...C.parameters.docs||{},page:Zo};const ls=["_api_"];export{ls as __namedExportsOrder,Wo as _api_,C as default};
//# sourceMappingURL=UseDeepCompareEffect.stories-f231787b.js.map

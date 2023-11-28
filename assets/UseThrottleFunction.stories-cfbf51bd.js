import{M,e as S,C as m,f as A}from"./chunk-S4VUQJ4A-26b56a9d.js";import{j as a}from"./jsx-runtime-c7a09cbf.js";import{H as C}from"./too-many-hooks-6349bca8.js";import{r as p}from"./index-4f8e55f4.js";import{u as r}from"./index-ab6d812b.js";import"./iframe-10d988d7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const s=({firstName:e,countryCode:n})=>{const[l,v]=p.useState();return C(async d=>fetch("https://api.agify.io?"+new URLSearchParams(d)).then(o=>o.json()).then(o=>v(o.age)),2e3,{name:e,country_id:n}),a.jsxs("div",{className:"prose flex flex-col items-center gap-4 text-4xl",children:[a.jsx("p",{children:'Enter a name and country in "Controls" to get a predicted age, updated at most every 2 seconds'}),a.jsx("p",{children:l?`Predicted age: ${l}`:e?"No age result for entered name and location":"No name entered"})]})};try{s.displayName="API",s.__docgenInfo={description:"",displayName:"API",props:{firstName:{defaultValue:null,description:"",name:"firstName",required:!0,type:{name:"string"}},countryCode:{defaultValue:null,description:"",name:"countryCode",required:!0,type:{name:"enum",value:[{value:'"AD"'},{value:'"AE"'},{value:'"AF"'},{value:'"AG"'},{value:'"AI"'},{value:'"AL"'},{value:'"AM"'},{value:'"AN"'},{value:'"AO"'},{value:'"AQ"'},{value:'"AR"'},{value:'"AS"'},{value:'"AT"'},{value:'"AU"'},{value:'"AW"'},{value:'"AZ"'},{value:'"BA"'},{value:'"BB"'},{value:'"BD"'},{value:'"BE"'},{value:'"BF"'},{value:'"BG"'},{value:'"BH"'},{value:'"BI"'},{value:'"BJ"'},{value:'"BL"'},{value:'"BM"'},{value:'"BN"'},{value:'"BO"'},{value:'"BR"'},{value:'"BS"'},{value:'"BT"'},{value:'"BV"'},{value:'"BW"'},{value:'"BY"'},{value:'"BZ"'},{value:'"CA"'},{value:'"CC"'},{value:'"CD"'},{value:'"CF"'},{value:'"CG"'},{value:'"CH"'},{value:'"CI"'},{value:'"CK"'},{value:'"CL"'},{value:'"CM"'},{value:'"CN"'},{value:'"CO"'},{value:'"CR"'},{value:'"CU"'},{value:'"CV"'},{value:'"CX"'},{value:'"CY"'},{value:'"CZ"'},{value:'"DE"'},{value:'"DJ"'},{value:'"DK"'},{value:'"DM"'},{value:'"DO"'},{value:'"DZ"'},{value:'"EC"'},{value:'"EE"'},{value:'"EG"'},{value:'"EH"'},{value:'"ER"'},{value:'"ES"'},{value:'"ET"'},{value:'"FI"'},{value:'"FJ"'},{value:'"FK"'},{value:'"FM"'},{value:'"FO"'},{value:'"FR"'},{value:'"GA"'},{value:'"GB"'},{value:'"GD"'},{value:'"GE"'},{value:'"GF"'},{value:'"GG"'},{value:'"GH"'},{value:'"GI"'},{value:'"GL"'},{value:'"GM"'},{value:'"GN"'},{value:'"GP"'},{value:'"GQ"'},{value:'"GR"'},{value:'"GS"'},{value:'"GT"'},{value:'"GU"'},{value:'"GW"'},{value:'"GY"'},{value:'"HK"'},{value:'"HN"'},{value:'"HR"'},{value:'"HT"'},{value:'"HU"'},{value:'"ID"'},{value:'"IE"'},{value:'"IL"'},{value:'"IM"'},{value:'"IN"'},{value:'"IO"'},{value:'"IQ"'},{value:'"IR"'},{value:'"IS"'},{value:'"IT"'},{value:'"JE"'},{value:'"JM"'},{value:'"JO"'},{value:'"JP"'},{value:'"KE"'},{value:'"KG"'},{value:'"KH"'},{value:'"KI"'},{value:'"KM"'},{value:'"KN"'},{value:'"KP"'},{value:'"KR"'},{value:'"KW"'},{value:'"KY"'},{value:'"KZ"'},{value:'"LA"'},{value:'"LB"'},{value:'"LC"'},{value:'"LI"'},{value:'"LK"'},{value:'"LR"'},{value:'"LS"'},{value:'"LT"'},{value:'"LU"'},{value:'"LV"'},{value:'"LY"'},{value:'"MA"'},{value:'"MC"'},{value:'"MD"'},{value:'"ME"'},{value:'"MF"'},{value:'"MG"'},{value:'"MH"'},{value:'"MK"'},{value:'"ML"'},{value:'"MM"'},{value:'"MN"'},{value:'"MO"'},{value:'"MP"'},{value:'"MQ"'},{value:'"MR"'},{value:'"MS"'},{value:'"MT"'},{value:'"MU"'},{value:'"MV"'},{value:'"MW"'},{value:'"MX"'},{value:'"MY"'},{value:'"MZ"'},{value:'"NA"'},{value:'"NC"'},{value:'"NE"'},{value:'"NF"'},{value:'"NG"'},{value:'"NI"'},{value:'"NL"'},{value:'"NO"'},{value:'"NP"'},{value:'"NR"'},{value:'"NU"'},{value:'"NZ"'},{value:'"OM"'},{value:'"PA"'},{value:'"PE"'},{value:'"PF"'},{value:'"PG"'},{value:'"PH"'},{value:'"PK"'},{value:'"PL"'},{value:'"PM"'},{value:'"PN"'},{value:'"PR"'},{value:'"PS"'},{value:'"PT"'},{value:'"PW"'},{value:'"PY"'},{value:'"QA"'},{value:'"RE"'},{value:'"RO"'},{value:'"RS"'},{value:'"RU"'},{value:'"RW"'},{value:'"SA"'},{value:'"SB"'},{value:'"SC"'},{value:'"SD"'},{value:'"SE"'},{value:'"SG"'},{value:'"SH"'},{value:'"SI"'},{value:'"SJ"'},{value:'"SK"'},{value:'"SL"'},{value:'"SM"'},{value:'"SN"'},{value:'"SO"'},{value:'"SR"'},{value:'"ST"'},{value:'"SV"'},{value:'"SY"'},{value:'"SZ"'},{value:'"TC"'},{value:'"TD"'},{value:'"TG"'},{value:'"TH"'},{value:'"TJ"'},{value:'"TK"'},{value:'"TL"'},{value:'"TM"'},{value:'"TN"'},{value:'"TO"'},{value:'"TR"'},{value:'"TT"'},{value:'"TV"'},{value:'"TW"'},{value:'"TZ"'},{value:'"UA"'},{value:'"UG"'},{value:'"US"'},{value:'"UY"'},{value:'"UZ"'},{value:'"VA"'},{value:'"VC"'},{value:'"VE"'},{value:'"VG"'},{value:'"VI"'},{value:'"VN"'},{value:'"VU"'},{value:'"WF"'},{value:'"WS"'},{value:'"YE"'},{value:'"YT"'},{value:'"ZA"'},{value:'"ZM"'},{value:'"ZW"'}]}}}}}catch{}const G=`import { useThrottleFunction } from '@yobgob/too-many-hooks'
import React, { useState } from 'react'
import COUNTRIES from './assets/countries.json'

interface Props {
  firstName: string
  countryCode: keyof typeof COUNTRIES
}

const API: React.FC<Props> = ({ firstName, countryCode }) => {
  const [predictedAge, setPredictedAge] = useState<string>()

  useThrottleFunction(
    async (params: { name: string; country_id: keyof typeof COUNTRIES }) =>
      fetch('https://api.agify.io?' + new URLSearchParams(params))
        .then(res => res.json())
        .then(data => setPredictedAge(data.age)),
    2000,
    { name: firstName, country_id: countryCode },
  )

  return (
    <div className="prose flex flex-col items-center gap-4 text-4xl">
      <p>
        Enter a name and country in &quot;Controls&quot; to get a predicted age, updated at most
        every 2 seconds
      </p>
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
`,T="Andorra",N="United Arab Emirates",h="Afghanistan",I="Antigua and Barbuda",B="Anguilla",g="Albania",E="Armenia",P="Netherlands Antilles",R="Angola",y="Antarctica",L="Argentina",K="American Samoa",F="Austria",U="Australia",f="Aruba",D="Azerbaijan",H="Bosnia and Herzegovina",O="Barbados",V="Bangladesh",x="Belgium",b="Burkina Faso",Z="Bulgaria",W="Bahrain",Y="Burundi",J="Benin",j="Saint Barthelemy",w="Bermuda",k="Brunei",_="Bolivia",Q="Brazil",z="Bahamas",q="Bhutan",X="Bouvet Island",$="Botswana",aa="Belarus",ea="Belize",na="Canada",ta="Cocos Islands",oa="Democratic Republic of the Congo",sa="Central African Republic",la="Republic of the Congo",ca="Switzerland",ua="Ivory Coast",ra="Cook Islands",ia="Chile",va="Cameroon",da="China",Ma="Colombia",Sa="Costa Rica",ma="Cuba",Aa="Cape Verde",Ca="Christmas Island",pa="Cyprus",Ga="Czech Republic",Ta="Germany",Na="Djibouti",ha="Denmark",Ia="Dominica",Ba="Dominican Republic",ga="Algeria",Ea="Ecuador",Pa="Estonia",Ra="Egypt",ya="Western Sahara",La="Eritrea",Ka="Spain",Fa="Ethiopia",Ua="Finland",fa="Fiji",Da="Falkland Islands",Ha="Micronesia",Oa="Faroe Islands",Va="France",xa="Gabon",ba="United Kingdom",Za="Grenada",Wa="Georgia",Ya="French Guiana",Ja="Guernsey",ja="Ghana",wa="Gibraltar",ka="Greenland",_a="Gambia",Qa="Guinea",za="Guadeloupe",qa="Equatorial Guinea",Xa="Greece",$a="South Georgia And Sandwich Isl.",ae="Guatemala",ee="Guam",ne="Guinea-Bissau",te="Guyana",oe="Hong Kong",se="Honduras",le="Croatia",ce="Haiti",ue="Hungary",re="Indonesia",ie="Ireland",ve="Israel",de="Isle of Man",Me="India",Se="British Indian Ocean Territory",me="Iraq",Ae="Iran",Ce="Iceland",pe="Italy",Ge="Jersey",Te="Jamaica",Ne="Jordan",he="Japan",Ie="Kenya",Be="Kyrgyzstan",ge="Cambodia",Ee="Kiribati",Pe="Comoros",Re="Saint Kitts and Nevis",ye="North Korea",Le="South Korea",Ke="Kuwait",Fe="Cayman Islands",Ue="Kazakhstan",fe="Laos",De="Lebanon",He="Saint Lucia",Oe="Liechtenstein",Ve="Sri Lanka",xe="Liberia",be="Lesotho",Ze="Lithuania",We="Luxembourg",Ye="Latvia",Je="Libya",je="Morocco",we="Monaco",ke="Moldova",_e="Montenegro",Qe="Saint Martin",ze="Madagascar",qe="Marshall Islands",Xe="Macedonia",$e="Mali",an="Myanmar",en="Mongolia",nn="Macao",tn="Northern Mariana Islands",on="Martinique",sn="Mauritania",ln="Montserrat",cn="Malta",un="Mauritius",rn="Maldives",vn="Malawi",dn="Mexico",Mn="Malaysia",Sn="Mozambique",mn="Namibia",An="New Caledonia",Cn="Niger",pn="Norfolk Island",Gn="Nigeria",Tn="Nicaragua",Nn="Netherlands",hn="Norway",In="Nepal",Bn="Nauru",gn="Niue",En="New Zealand",Pn="Oman",Rn="Panama",yn="Peru",Ln="French Polynesia",Kn="Papua New Guinea",Fn="Philippines",Un="Pakistan",fn="Poland",Dn="Saint Pierre and Miquelon",Hn="Pitcairn",On="Puerto Rico",Vn="Palestine",xn="Portugal",bn="Palau",Zn="Paraguay",Wn="Qatar",Yn="Reunion",Jn="Romania",jn="Serbia",wn="Russia",kn="Rwanda",_n="Saudi Arabia",Qn="Solomon Islands",zn="Seychelles",qn="Sudan",Xn="Sweden",$n="Singapore",at="Saint Helena",et="Slovenia",nt="Svalbard and Jan Mayen",tt="Slovakia",ot="Sierra Leone",st="San Marino",lt="Senegal",ct="Somalia",ut="Suriname",rt="Sao Tome and Principe",it="El Salvador",vt="Syria",dt="Swaziland",Mt="Turks and Caicos Islands",St="Chad",mt="Togo",At="Thailand",Ct="Tajikistan",pt="Tokelau",Gt="East Timor",Tt="Turkmenistan",Nt="Tunisia",ht="Tonga",It="Turkey",Bt="Trinidad and Tobago",gt="Tuvalu",Et="Taiwan",Pt="Tanzania",Rt="Ukraine",yt="Uganda",Lt="United States",Kt="Uruguay",Ft="Uzbekistan",Ut="Vatican",ft="Saint Vincent and the Grenadines",Dt="Venezuela",Ht="British Virgin Islands",Ot="U.S. Virgin Islands",Vt="Vietnam",xt="Vanuatu",bt="Wallis and Futuna",Zt="Samoa",Wt="Yemen",Yt="Mayotte",Jt="South Africa",jt="Zambia",wt="Zimbabwe",c={AD:T,AE:N,AF:h,AG:I,AI:B,AL:g,AM:E,AN:P,AO:R,AQ:y,AR:L,AS:K,AT:F,AU:U,AW:f,AZ:D,BA:H,BB:O,BD:V,BE:x,BF:b,BG:Z,BH:W,BI:Y,BJ:J,BL:j,BM:w,BN:k,BO:_,BR:Q,BS:z,BT:q,BV:X,BW:$,BY:aa,BZ:ea,CA:na,CC:ta,CD:oa,CF:sa,CG:la,CH:ca,CI:ua,CK:ra,CL:ia,CM:va,CN:da,CO:Ma,CR:Sa,CU:ma,CV:Aa,CX:Ca,CY:pa,CZ:Ga,DE:Ta,DJ:Na,DK:ha,DM:Ia,DO:Ba,DZ:ga,EC:Ea,EE:Pa,EG:Ra,EH:ya,ER:La,ES:Ka,ET:Fa,FI:Ua,FJ:fa,FK:Da,FM:Ha,FO:Oa,FR:Va,GA:xa,GB:ba,GD:Za,GE:Wa,GF:Ya,GG:Ja,GH:ja,GI:wa,GL:ka,GM:_a,GN:Qa,GP:za,GQ:qa,GR:Xa,GS:$a,GT:ae,GU:ee,GW:ne,GY:te,HK:oe,HN:se,HR:le,HT:ce,HU:ue,ID:re,IE:ie,IL:ve,IM:de,IN:Me,IO:Se,IQ:me,IR:Ae,IS:Ce,IT:pe,JE:Ge,JM:Te,JO:Ne,JP:he,KE:Ie,KG:Be,KH:ge,KI:Ee,KM:Pe,KN:Re,KP:ye,KR:Le,KW:Ke,KY:Fe,KZ:Ue,LA:fe,LB:De,LC:He,LI:Oe,LK:Ve,LR:xe,LS:be,LT:Ze,LU:We,LV:Ye,LY:Je,MA:je,MC:we,MD:ke,ME:_e,MF:Qe,MG:ze,MH:qe,MK:Xe,ML:$e,MM:an,MN:en,MO:nn,MP:tn,MQ:on,MR:sn,MS:ln,MT:cn,MU:un,MV:rn,MW:vn,MX:dn,MY:Mn,MZ:Sn,NA:mn,NC:An,NE:Cn,NF:pn,NG:Gn,NI:Tn,NL:Nn,NO:hn,NP:In,NR:Bn,NU:gn,NZ:En,OM:Pn,PA:Rn,PE:yn,PF:Ln,PG:Kn,PH:Fn,PK:Un,PL:fn,PM:Dn,PN:Hn,PR:On,PS:Vn,PT:xn,PW:bn,PY:Zn,QA:Wn,RE:Yn,RO:Jn,RS:jn,RU:wn,RW:kn,SA:_n,SB:Qn,SC:zn,SD:qn,SE:Xn,SG:$n,SH:at,SI:et,SJ:nt,SK:tt,SL:ot,SM:st,SN:lt,SO:ct,SR:ut,ST:rt,SV:it,SY:vt,SZ:dt,TC:Mt,TD:St,TG:mt,TH:At,TJ:Ct,TK:pt,TL:Gt,TM:Tt,TN:Nt,TO:ht,TR:It,TT:Bt,TV:gt,TW:Et,TZ:Pt,UA:Rt,UG:yt,US:Lt,UY:Kt,UZ:Ft,VA:Ut,VC:ft,VE:Dt,VG:Ht,VI:Ot,VN:Vt,VU:xt,WF:bt,WS:Zt,YE:Wt,YT:Yt,ZA:Jt,ZM:jt,ZW:wt},i={parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:G,language:"tsx"}}},argTypes:{firstName:{type:"string"},countryCode:{options:Object.keys(c),control:{type:"select",labels:c}}},args:{firstName:"",countryCode:"US"},render:e=>a.jsx(s,{...e})},kt=`/**
 * \`useThrottleFunction\` hook type
 *
 * @export
 * @template A extends unknown[]
 * @template R
 * @param {(...args: A) => R} func
 * @param {number} delay
 * @param {A} args
 * @returns {R | null}
 * @typedef {UseThrottleFunction}
 */
export type UseThrottleFunction = <A extends unknown[], R>(func: (...args: A) => R, delay: number, ...args: A) => R | null;
/**
 * Ensures a function is called whenever its args change, at most once every \`delay\`ms. Immediately calls then function then re-calls
 * the function and updates the result whenever the args change, at most once every \`delay\`ms.
 *
 * @template A extends unknown[]
 * @template R
 * @param {(...args: A) => R} func
 * @param {number} delay
 * @param {A} args
 * @returns {R | null}
 */
declare const useThrottleFunction: UseThrottleFunction;
export default useThrottleFunction;
`;function u(e){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},r(),e.components);return a.jsxs(a.Fragment,{children:[a.jsx(M,{title:"Example/UseThrottleFunction"}),`
`,a.jsx(n.h1,{id:"usethrottlefunction",children:"useThrottleFunction"}),`
`,a.jsxs(n.p,{children:["Ensures a function is called whenever its args change, at most once every ",a.jsx(n.code,{children:"delay"}),`ms.
Immediately calls then function then re-calls the function and updates the result whenever the args change, at most once every `,a.jsx(n.code,{children:"delay"}),"ms."]}),`
`,a.jsx(n.h2,{id:"types",children:"Types"}),`
`,a.jsx(S,{language:"ts",code:kt}),`
`,a.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,a.jsx(n.h3,{id:"api-call",children:"API call"}),`
`,a.jsx(m,{withSource:"open",children:a.jsx(A,{name:"API Call",story:i})})]})}function _t(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?a.jsx(n,{...e,children:a.jsx(u,{...e})}):u(e)}const Qt=i;Qt.storyName="API Call";const t={title:"Example/UseThrottleFunction",tags:["stories-mdx"],includeStories:["_api_"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:_t};const lo=["_api_"];export{lo as __namedExportsOrder,Qt as _api_,t as default};
//# sourceMappingURL=UseThrottleFunction.stories-cfbf51bd.js.map

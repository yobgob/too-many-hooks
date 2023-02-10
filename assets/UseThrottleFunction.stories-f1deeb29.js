import{M as m,S as M,C as S,a as p}from"./chunk-MA2MUXQN-5e95634e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{j as c,a,F as A}from"./jsx-runtime-68f49b4e.js";import{r as C}from"./index-f1f749bf.js";import{H as G}from"./too-many-hooks-b381134c.js";import{u as r}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4b8a78e3.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-405d3c04.js";import"./chunk-XHUUYXNA-29433977.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-E2WFFXZ5-4de4dd5f.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-b1d1948e.js";import"./index-356e4a49.js";const u=({firstName:e,countryCode:o})=>{const[t,n]=C.useState();return G(async d=>fetch("https://api.agify.io?"+new URLSearchParams(d)).then(l=>l.json()).then(l=>n(l.age)),2e3,{name:e,country_id:o}),c("div",{className:"prose flex flex-col items-center gap-4 text-4xl",children:[a("p",{children:'Enter a name and country in "Controls" to get a predicted age, updated at most every 2 seconds'}),a("p",{children:t?`Predicted age: ${t}`:e?"No age result for entered name and location":"No name entered"})]})};try{u.displayName="API",u.__docgenInfo={description:"",displayName:"API",props:{firstName:{defaultValue:null,description:"",name:"firstName",required:!0,type:{name:"string"}},countryCode:{defaultValue:null,description:"",name:"countryCode",required:!0,type:{name:"enum",value:[{value:'"AD"'},{value:'"AE"'},{value:'"AF"'},{value:'"AG"'},{value:'"AI"'},{value:'"AL"'},{value:'"AM"'},{value:'"AN"'},{value:'"AO"'},{value:'"AQ"'},{value:'"AR"'},{value:'"AS"'},{value:'"AT"'},{value:'"AU"'},{value:'"AW"'},{value:'"AZ"'},{value:'"BA"'},{value:'"BB"'},{value:'"BD"'},{value:'"BE"'},{value:'"BF"'},{value:'"BG"'},{value:'"BH"'},{value:'"BI"'},{value:'"BJ"'},{value:'"BL"'},{value:'"BM"'},{value:'"BN"'},{value:'"BO"'},{value:'"BR"'},{value:'"BS"'},{value:'"BT"'},{value:'"BV"'},{value:'"BW"'},{value:'"BY"'},{value:'"BZ"'},{value:'"CA"'},{value:'"CC"'},{value:'"CD"'},{value:'"CF"'},{value:'"CG"'},{value:'"CH"'},{value:'"CI"'},{value:'"CK"'},{value:'"CL"'},{value:'"CM"'},{value:'"CN"'},{value:'"CO"'},{value:'"CR"'},{value:'"CU"'},{value:'"CV"'},{value:'"CX"'},{value:'"CY"'},{value:'"CZ"'},{value:'"DE"'},{value:'"DJ"'},{value:'"DK"'},{value:'"DM"'},{value:'"DO"'},{value:'"DZ"'},{value:'"EC"'},{value:'"EE"'},{value:'"EG"'},{value:'"EH"'},{value:'"ER"'},{value:'"ES"'},{value:'"ET"'},{value:'"FI"'},{value:'"FJ"'},{value:'"FK"'},{value:'"FM"'},{value:'"FO"'},{value:'"FR"'},{value:'"GA"'},{value:'"GB"'},{value:'"GD"'},{value:'"GE"'},{value:'"GF"'},{value:'"GG"'},{value:'"GH"'},{value:'"GI"'},{value:'"GL"'},{value:'"GM"'},{value:'"GN"'},{value:'"GP"'},{value:'"GQ"'},{value:'"GR"'},{value:'"GS"'},{value:'"GT"'},{value:'"GU"'},{value:'"GW"'},{value:'"GY"'},{value:'"HK"'},{value:'"HN"'},{value:'"HR"'},{value:'"HT"'},{value:'"HU"'},{value:'"ID"'},{value:'"IE"'},{value:'"IL"'},{value:'"IM"'},{value:'"IN"'},{value:'"IO"'},{value:'"IQ"'},{value:'"IR"'},{value:'"IS"'},{value:'"IT"'},{value:'"JE"'},{value:'"JM"'},{value:'"JO"'},{value:'"JP"'},{value:'"KE"'},{value:'"KG"'},{value:'"KH"'},{value:'"KI"'},{value:'"KM"'},{value:'"KN"'},{value:'"KP"'},{value:'"KR"'},{value:'"KW"'},{value:'"KY"'},{value:'"KZ"'},{value:'"LA"'},{value:'"LB"'},{value:'"LC"'},{value:'"LI"'},{value:'"LK"'},{value:'"LR"'},{value:'"LS"'},{value:'"LT"'},{value:'"LU"'},{value:'"LV"'},{value:'"LY"'},{value:'"MA"'},{value:'"MC"'},{value:'"MD"'},{value:'"ME"'},{value:'"MF"'},{value:'"MG"'},{value:'"MH"'},{value:'"MK"'},{value:'"ML"'},{value:'"MM"'},{value:'"MN"'},{value:'"MO"'},{value:'"MP"'},{value:'"MQ"'},{value:'"MR"'},{value:'"MS"'},{value:'"MT"'},{value:'"MU"'},{value:'"MV"'},{value:'"MW"'},{value:'"MX"'},{value:'"MY"'},{value:'"MZ"'},{value:'"NA"'},{value:'"NC"'},{value:'"NE"'},{value:'"NF"'},{value:'"NG"'},{value:'"NI"'},{value:'"NL"'},{value:'"NO"'},{value:'"NP"'},{value:'"NR"'},{value:'"NU"'},{value:'"NZ"'},{value:'"OM"'},{value:'"PA"'},{value:'"PE"'},{value:'"PF"'},{value:'"PG"'},{value:'"PH"'},{value:'"PK"'},{value:'"PL"'},{value:'"PM"'},{value:'"PN"'},{value:'"PR"'},{value:'"PS"'},{value:'"PT"'},{value:'"PW"'},{value:'"PY"'},{value:'"QA"'},{value:'"RE"'},{value:'"RO"'},{value:'"RS"'},{value:'"RU"'},{value:'"RW"'},{value:'"SA"'},{value:'"SB"'},{value:'"SC"'},{value:'"SD"'},{value:'"SE"'},{value:'"SG"'},{value:'"SH"'},{value:'"SI"'},{value:'"SJ"'},{value:'"SK"'},{value:'"SL"'},{value:'"SM"'},{value:'"SN"'},{value:'"SO"'},{value:'"SR"'},{value:'"ST"'},{value:'"SV"'},{value:'"SY"'},{value:'"SZ"'},{value:'"TC"'},{value:'"TD"'},{value:'"TG"'},{value:'"TH"'},{value:'"TJ"'},{value:'"TK"'},{value:'"TL"'},{value:'"TM"'},{value:'"TN"'},{value:'"TO"'},{value:'"TR"'},{value:'"TT"'},{value:'"TV"'},{value:'"TW"'},{value:'"TZ"'},{value:'"UA"'},{value:'"UG"'},{value:'"US"'},{value:'"UY"'},{value:'"UZ"'},{value:'"VA"'},{value:'"VC"'},{value:'"VE"'},{value:'"VG"'},{value:'"VI"'},{value:'"VN"'},{value:'"VU"'},{value:'"WF"'},{value:'"WS"'},{value:'"YE"'},{value:'"YT"'},{value:'"ZA"'},{value:'"ZM"'},{value:'"ZW"'}]}}}}}catch{}const T=`import React, { useState } from 'react'
import { useThrottleFunction } from 'too-many-hooks'
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
`,N="Andorra",h="United Arab Emirates",I="Afghanistan",B="Antigua and Barbuda",g="Anguilla",P="Albania",E="Armenia",R="Netherlands Antilles",y="Angola",L="Antarctica",K="Argentina",F="American Samoa",U="Austria",f="Australia",D="Aruba",H="Azerbaijan",O="Bosnia and Herzegovina",V="Barbados",Z="Bangladesh",b="Belgium",W="Burkina Faso",Y="Bulgaria",J="Bahrain",x="Burundi",w="Benin",k="Saint Barthelemy",_="Bermuda",Q="Brunei",j="Bolivia",z="Brazil",q="Bahamas",X="Bhutan",$="Bouvet Island",aa="Botswana",ea="Belarus",na="Belize",ta="Canada",oa="Cocos Islands",sa="Democratic Republic of the Congo",la="Central African Republic",ca="Republic of the Congo",ua="Switzerland",ra="Ivory Coast",ia="Cook Islands",va="Chile",da="Cameroon",ma="China",Ma="Colombia",Sa="Costa Rica",pa="Cuba",Aa="Cape Verde",Ca="Christmas Island",Ga="Cyprus",Ta="Czech Republic",Na="Germany",ha="Djibouti",Ia="Denmark",Ba="Dominica",ga="Dominican Republic",Pa="Algeria",Ea="Ecuador",Ra="Estonia",ya="Egypt",La="Western Sahara",Ka="Eritrea",Fa="Spain",Ua="Ethiopia",fa="Finland",Da="Fiji",Ha="Falkland Islands",Oa="Micronesia",Va="Faroe Islands",Za="France",ba="Gabon",Wa="United Kingdom",Ya="Grenada",Ja="Georgia",xa="French Guiana",wa="Guernsey",ka="Ghana",_a="Gibraltar",Qa="Greenland",ja="Gambia",za="Guinea",qa="Guadeloupe",Xa="Equatorial Guinea",$a="Greece",ae="South Georgia And Sandwich Isl.",ee="Guatemala",ne="Guam",te="Guinea-Bissau",oe="Guyana",se="Hong Kong",le="Honduras",ce="Croatia",ue="Haiti",re="Hungary",ie="Indonesia",ve="Ireland",de="Israel",me="Isle of Man",Me="India",Se="British Indian Ocean Territory",pe="Iraq",Ae="Iran",Ce="Iceland",Ge="Italy",Te="Jersey",Ne="Jamaica",he="Jordan",Ie="Japan",Be="Kenya",ge="Kyrgyzstan",Pe="Cambodia",Ee="Kiribati",Re="Comoros",ye="Saint Kitts and Nevis",Le="North Korea",Ke="South Korea",Fe="Kuwait",Ue="Cayman Islands",fe="Kazakhstan",De="Laos",He="Lebanon",Oe="Saint Lucia",Ve="Liechtenstein",Ze="Sri Lanka",be="Liberia",We="Lesotho",Ye="Lithuania",Je="Luxembourg",xe="Latvia",we="Libya",ke="Morocco",_e="Monaco",Qe="Moldova",je="Montenegro",ze="Saint Martin",qe="Madagascar",Xe="Marshall Islands",$e="Macedonia",an="Mali",en="Myanmar",nn="Mongolia",tn="Macao",on="Northern Mariana Islands",sn="Martinique",ln="Mauritania",cn="Montserrat",un="Malta",rn="Mauritius",vn="Maldives",dn="Malawi",mn="Mexico",Mn="Malaysia",Sn="Mozambique",pn="Namibia",An="New Caledonia",Cn="Niger",Gn="Norfolk Island",Tn="Nigeria",Nn="Nicaragua",hn="Netherlands",In="Norway",Bn="Nepal",gn="Nauru",Pn="Niue",En="New Zealand",Rn="Oman",yn="Panama",Ln="Peru",Kn="French Polynesia",Fn="Papua New Guinea",Un="Philippines",fn="Pakistan",Dn="Poland",Hn="Saint Pierre and Miquelon",On="Pitcairn",Vn="Puerto Rico",Zn="Palestine",bn="Portugal",Wn="Palau",Yn="Paraguay",Jn="Qatar",xn="Reunion",wn="Romania",kn="Serbia",_n="Russia",Qn="Rwanda",jn="Saudi Arabia",zn="Solomon Islands",qn="Seychelles",Xn="Sudan",$n="Sweden",at="Singapore",et="Saint Helena",nt="Slovenia",tt="Svalbard and Jan Mayen",ot="Slovakia",st="Sierra Leone",lt="San Marino",ct="Senegal",ut="Somalia",rt="Suriname",it="Sao Tome and Principe",vt="El Salvador",dt="Syria",mt="Swaziland",Mt="Turks and Caicos Islands",St="Chad",pt="Togo",At="Thailand",Ct="Tajikistan",Gt="Tokelau",Tt="East Timor",Nt="Turkmenistan",ht="Tunisia",It="Tonga",Bt="Turkey",gt="Trinidad and Tobago",Pt="Tuvalu",Et="Taiwan",Rt="Tanzania",yt="Ukraine",Lt="Uganda",Kt="United States",Ft="Uruguay",Ut="Uzbekistan",ft="Vatican",Dt="Saint Vincent and the Grenadines",Ht="Venezuela",Ot="British Virgin Islands",Vt="U.S. Virgin Islands",Zt="Vietnam",bt="Vanuatu",Wt="Wallis and Futuna",Yt="Samoa",Jt="Yemen",xt="Mayotte",wt="South Africa",kt="Zambia",_t="Zimbabwe",i={AD:N,AE:h,AF:I,AG:B,AI:g,AL:P,AM:E,AN:R,AO:y,AQ:L,AR:K,AS:F,AT:U,AU:f,AW:D,AZ:H,BA:O,BB:V,BD:Z,BE:b,BF:W,BG:Y,BH:J,BI:x,BJ:w,BL:k,BM:_,BN:Q,BO:j,BR:z,BS:q,BT:X,BV:$,BW:aa,BY:ea,BZ:na,CA:ta,CC:oa,CD:sa,CF:la,CG:ca,CH:ua,CI:ra,CK:ia,CL:va,CM:da,CN:ma,CO:Ma,CR:Sa,CU:pa,CV:Aa,CX:Ca,CY:Ga,CZ:Ta,DE:Na,DJ:ha,DK:Ia,DM:Ba,DO:ga,DZ:Pa,EC:Ea,EE:Ra,EG:ya,EH:La,ER:Ka,ES:Fa,ET:Ua,FI:fa,FJ:Da,FK:Ha,FM:Oa,FO:Va,FR:Za,GA:ba,GB:Wa,GD:Ya,GE:Ja,GF:xa,GG:wa,GH:ka,GI:_a,GL:Qa,GM:ja,GN:za,GP:qa,GQ:Xa,GR:$a,GS:ae,GT:ee,GU:ne,GW:te,GY:oe,HK:se,HN:le,HR:ce,HT:ue,HU:re,ID:ie,IE:ve,IL:de,IM:me,IN:Me,IO:Se,IQ:pe,IR:Ae,IS:Ce,IT:Ge,JE:Te,JM:Ne,JO:he,JP:Ie,KE:Be,KG:ge,KH:Pe,KI:Ee,KM:Re,KN:ye,KP:Le,KR:Ke,KW:Fe,KY:Ue,KZ:fe,LA:De,LB:He,LC:Oe,LI:Ve,LK:Ze,LR:be,LS:We,LT:Ye,LU:Je,LV:xe,LY:we,MA:ke,MC:_e,MD:Qe,ME:je,MF:ze,MG:qe,MH:Xe,MK:$e,ML:an,MM:en,MN:nn,MO:tn,MP:on,MQ:sn,MR:ln,MS:cn,MT:un,MU:rn,MV:vn,MW:dn,MX:mn,MY:Mn,MZ:Sn,NA:pn,NC:An,NE:Cn,NF:Gn,NG:Tn,NI:Nn,NL:hn,NO:In,NP:Bn,NR:gn,NU:Pn,NZ:En,OM:Rn,PA:yn,PE:Ln,PF:Kn,PG:Fn,PH:Un,PK:fn,PL:Dn,PM:Hn,PN:On,PR:Vn,PS:Zn,PT:bn,PW:Wn,PY:Yn,QA:Jn,RE:xn,RO:wn,RS:kn,RU:_n,RW:Qn,SA:jn,SB:zn,SC:qn,SD:Xn,SE:$n,SG:at,SH:et,SI:nt,SJ:tt,SK:ot,SL:st,SM:lt,SN:ct,SO:ut,SR:rt,ST:it,SV:vt,SY:dt,SZ:mt,TC:Mt,TD:St,TG:pt,TH:At,TJ:Ct,TK:Gt,TL:Tt,TM:Nt,TN:ht,TO:It,TR:Bt,TT:gt,TV:Pt,TW:Et,TZ:Rt,UA:yt,UG:Lt,US:Kt,UY:Ft,UZ:Ut,VA:ft,VC:Dt,VE:Ht,VG:Ot,VI:Vt,VN:Zt,VU:bt,WF:Wt,WS:Yt,YE:Jt,YT:xt,ZA:wt,ZM:kt,ZW:_t},v={parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:T,language:"tsx"}}},argTypes:{firstName:{type:"string"},countryCode:{options:Object.keys(i),control:{type:"select",labels:i}}},args:{firstName:"",countryCode:"US"},render:e=>a(u,{...e})},Qt=`/**
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
export declare type UseThrottleFunction = <A extends unknown[], R>(func: (...args: A) => R, delay: number, ...args: A) => R | null;
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
`;function jt(e={}){const{wrapper:o}=Object.assign({},r(),e.components);return o?a(o,{...e,children:a(t,{})}):t();function t(){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},r(),e.components);return c(A,{children:[a(m,{title:"Example/UseThrottleFunction"}),`
`,a(n.h1,{children:"useThrottleFunction"}),`
`,c(n.p,{children:["Ensures a function is called whenever its args change, at most once every ",a(n.code,{children:"delay"}),`ms.
Immediately calls then function then re-calls the function and updates the result whenever the args change, at most once every `,a(n.code,{children:"delay"}),"ms."]}),`
`,a(n.h2,{children:"Types"}),`
`,a(M,{language:"ts",code:Qt}),`
`,a(n.h2,{children:"Examples"}),`
`,a(n.h3,{children:"API call"}),`
`,a(S,{withSource:"open",children:a(p,{name:"API Call",story:v})})]})}}const zt=v;zt.storyName="API Call";const s={title:"Example/UseThrottleFunction",tags:["mdx"],includeStories:["_api_"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:jt};const To=["_api_"];export{To as __namedExportsOrder,zt as _api_,s as default};
//# sourceMappingURL=UseThrottleFunction.stories-f1deeb29.js.map

import{j as n,T as S,D as p,S as M,m as T,r as A,p as C}from"./iframe-D0cwLo6p.js";import{u as g}from"./useThrottleFunction-qpiba_z-.js";import"./preload-helper-C1FmrZbK.js";const I=`/**
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
`,N="\nEnsures a function is called whenever its args change, at most once every `delay`ms.\nImmediately calls then function then re-calls the function and updates the result whenever the args change, at most once every `delay`ms.\n",G=()=>n.jsxs(n.Fragment,{children:[n.jsx(S,{}),n.jsx(p,{}),n.jsx(M,{code:I,language:"typescript"}),n.jsx(T,{})]}),h={page:G,description:{component:N}},y="Andorra",E="United Arab Emirates",P="Afghanistan",R="Antigua and Barbuda",B="Anguilla",L="Albania",U="Armenia",F="Netherlands Antilles",K="Angola",f="Antarctica",O="Argentina",b="American Samoa",D="Austria",x="Australia",H="Aruba",V="Azerbaijan",Z="Bosnia and Herzegovina",v="Barbados",k="Bangladesh",w="Belgium",W="Burkina Faso",Y="Bulgaria",J="Bahrain",j="Burundi",_="Benin",z="Saint Barthelemy",Q="Bermuda",q="Brunei",X="Bolivia",$="Brazil",nn="Bahamas",tn="Bhutan",on="Bouvet Island",an="Botswana",sn="Belarus",en="Belize",cn="Canada",rn="Cocos Islands",ln="Democratic Republic of the Congo",un="Central African Republic",dn="Republic of the Congo",mn="Switzerland",Sn="Ivory Coast",pn="Cook Islands",Mn="Chile",Tn="Cameroon",An="China",Cn="Colombia",gn="Costa Rica",In="Cuba",Nn="Cape Verde",Gn="Christmas Island",hn="Cyprus",yn="Czech Republic",En="Germany",Pn="Djibouti",Rn="Denmark",Bn="Dominica",Ln="Dominican Republic",Un="Algeria",Fn="Ecuador",Kn="Estonia",fn="Egypt",On="Western Sahara",bn="Eritrea",Dn="Spain",xn="Ethiopia",Hn="Finland",Vn="Fiji",Zn="Falkland Islands",vn="Micronesia",kn="Faroe Islands",wn="France",Wn="Gabon",Yn="United Kingdom",Jn="Grenada",jn="Georgia",_n="French Guiana",zn="Guernsey",Qn="Ghana",qn="Gibraltar",Xn="Greenland",$n="Gambia",nt="Guinea",tt="Guadeloupe",ot="Equatorial Guinea",at="Greece",st="South Georgia And Sandwich Isl.",et="Guatemala",ct="Guam",rt="Guinea-Bissau",it="Guyana",lt="Hong Kong",ut="Honduras",dt="Croatia",mt="Haiti",St="Hungary",pt="Indonesia",Mt="Ireland",Tt="Israel",At="Isle of Man",Ct="India",gt="British Indian Ocean Territory",It="Iraq",Nt="Iran",Gt="Iceland",ht="Italy",yt="Jersey",Et="Jamaica",Pt="Jordan",Rt="Japan",Bt="Kenya",Lt="Kyrgyzstan",Ut="Cambodia",Ft="Kiribati",Kt="Comoros",ft="Saint Kitts and Nevis",Ot="North Korea",bt="South Korea",Dt="Kuwait",xt="Cayman Islands",Ht="Kazakhstan",Vt="Laos",Zt="Lebanon",vt="Saint Lucia",kt="Liechtenstein",wt="Sri Lanka",Wt="Liberia",Yt="Lesotho",Jt="Lithuania",jt="Luxembourg",_t="Latvia",zt="Libya",Qt="Morocco",qt="Monaco",Xt="Moldova",$t="Montenegro",no="Saint Martin",to="Madagascar",oo="Marshall Islands",ao="Macedonia",so="Mali",eo="Myanmar",co="Mongolia",ro="Macao",io="Northern Mariana Islands",lo="Martinique",uo="Mauritania",mo="Montserrat",So="Malta",po="Mauritius",Mo="Maldives",To="Malawi",Ao="Mexico",Co="Malaysia",go="Mozambique",Io="Namibia",No="New Caledonia",Go="Niger",ho="Norfolk Island",yo="Nigeria",Eo="Nicaragua",Po="Netherlands",Ro="Norway",Bo="Nepal",Lo="Nauru",Uo="Niue",Fo="New Zealand",Ko="Oman",fo="Panama",Oo="Peru",bo="French Polynesia",Do="Papua New Guinea",xo="Philippines",Ho="Pakistan",Vo="Poland",Zo="Saint Pierre and Miquelon",vo="Pitcairn",ko="Puerto Rico",wo="Palestine",Wo="Portugal",Yo="Palau",Jo="Paraguay",jo="Qatar",_o="Reunion",zo="Romania",Qo="Serbia",qo="Russia",Xo="Rwanda",$o="Saudi Arabia",na="Solomon Islands",ta="Seychelles",oa="Sudan",aa="Sweden",sa="Singapore",ea="Saint Helena",ca="Slovenia",ra="Svalbard and Jan Mayen",ia="Slovakia",la="Sierra Leone",ua="San Marino",da="Senegal",ma="Somalia",Sa="Suriname",pa="Sao Tome and Principe",Ma="El Salvador",Ta="Syria",Aa="Swaziland",Ca="Turks and Caicos Islands",ga="Chad",Ia="Togo",Na="Thailand",Ga="Tajikistan",ha="Tokelau",ya="East Timor",Ea="Turkmenistan",Pa="Tunisia",Ra="Tonga",Ba="Turkey",La="Trinidad and Tobago",Ua="Tuvalu",Fa="Taiwan",Ka="Tanzania",fa="Ukraine",Oa="Uganda",ba="United States",Da="Uruguay",xa="Uzbekistan",Ha="Vatican",Va="Saint Vincent and the Grenadines",Za="Venezuela",va="British Virgin Islands",ka="U.S. Virgin Islands",wa="Vietnam",Wa="Vanuatu",Ya="Wallis and Futuna",Ja="Samoa",ja="Yemen",_a="Mayotte",za="South Africa",Qa="Zambia",qa="Zimbabwe",e={AD:y,AE:E,AF:P,AG:R,AI:B,AL:L,AM:U,AN:F,AO:K,AQ:f,AR:O,AS:b,AT:D,AU:x,AW:H,AZ:V,BA:Z,BB:v,BD:k,BE:w,BF:W,BG:Y,BH:J,BI:j,BJ:_,BL:z,BM:Q,BN:q,BO:X,BR:$,BS:nn,BT:tn,BV:on,BW:an,BY:sn,BZ:en,CA:cn,CC:rn,CD:ln,CF:un,CG:dn,CH:mn,CI:Sn,CK:pn,CL:Mn,CM:Tn,CN:An,CO:Cn,CR:gn,CU:In,CV:Nn,CX:Gn,CY:hn,CZ:yn,DE:En,DJ:Pn,DK:Rn,DM:Bn,DO:Ln,DZ:Un,EC:Fn,EE:Kn,EG:fn,EH:On,ER:bn,ES:Dn,ET:xn,FI:Hn,FJ:Vn,FK:Zn,FM:vn,FO:kn,FR:wn,GA:Wn,GB:Yn,GD:Jn,GE:jn,GF:_n,GG:zn,GH:Qn,GI:qn,GL:Xn,GM:$n,GN:nt,GP:tt,GQ:ot,GR:at,GS:st,GT:et,GU:ct,GW:rt,GY:it,HK:lt,HN:ut,HR:dt,HT:mt,HU:St,ID:pt,IE:Mt,IL:Tt,IM:At,IN:Ct,IO:gt,IQ:It,IR:Nt,IS:Gt,IT:ht,JE:yt,JM:Et,JO:Pt,JP:Rt,KE:Bt,KG:Lt,KH:Ut,KI:Ft,KM:Kt,KN:ft,KP:Ot,KR:bt,KW:Dt,KY:xt,KZ:Ht,LA:Vt,LB:Zt,LC:vt,LI:kt,LK:wt,LR:Wt,LS:Yt,LT:Jt,LU:jt,LV:_t,LY:zt,MA:Qt,MC:qt,MD:Xt,ME:$t,MF:no,MG:to,MH:oo,MK:ao,ML:so,MM:eo,MN:co,MO:ro,MP:io,MQ:lo,MR:uo,MS:mo,MT:So,MU:po,MV:Mo,MW:To,MX:Ao,MY:Co,MZ:go,NA:Io,NC:No,NE:Go,NF:ho,NG:yo,NI:Eo,NL:Po,NO:Ro,NP:Bo,NR:Lo,NU:Uo,NZ:Fo,OM:Ko,PA:fo,PE:Oo,PF:bo,PG:Do,PH:xo,PK:Ho,PL:Vo,PM:Zo,PN:vo,PR:ko,PS:wo,PT:Wo,PW:Yo,PY:Jo,QA:jo,RE:_o,RO:zo,RS:Qo,RU:qo,RW:Xo,SA:$o,SB:na,SC:ta,SD:oa,SE:aa,SG:sa,SH:ea,SI:ca,SJ:ra,SK:ia,SL:la,SM:ua,SN:da,SO:ma,SR:Sa,ST:pa,SV:Ma,SY:Ta,SZ:Aa,TC:Ca,TD:ga,TG:Ia,TH:Na,TJ:Ga,TK:ha,TL:ya,TM:Ea,TN:Pa,TO:Ra,TR:Ba,TT:La,TV:Ua,TW:Fa,TZ:Ka,UA:fa,UG:Oa,US:ba,UY:Da,UZ:xa,VA:Ha,VC:Va,VE:Za,VG:va,VI:ka,VN:wa,VU:Wa,WF:Ya,WS:Ja,YE:ja,YT:_a,ZA:za,ZM:Qa,ZW:qa},l=({firstName:a,countryCode:u})=>{const[s,d]=A.useState();return g(async m=>fetch("https://api.agify.io?"+new URLSearchParams(m)).then(o=>o.json()).then(o=>d(o.age)),2e3,{name:a,country_id:u}),n.jsxs("div",{className:"prose flex flex-col items-center gap-4 text-4xl",children:[n.jsx("p",{children:'Enter a name and country in "Controls" to get a predicted age, updated at most every 2 seconds'}),n.jsx("p",{children:s?`Predicted age: ${s}`:a?"No age result for entered name and location":"No name entered"})]})};l.__docgenInfo={description:"",methods:[],displayName:"API",props:{firstName:{required:!0,tsType:{name:"string"},description:""},countryCode:{required:!0,tsType:{name:"unknown"},description:""}}};const Xa=`import type React from 'react'
import { useState } from 'react'
import useThrottleFunction from '../useThrottleFunction'
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
`,$a=C.meta({title:"useThrottleFunction",component:l,parameters:{layout:"centered",docs:h}}),t=$a.story({name:"API Call",parameters:{controls:{expanded:!0},docs:{source:{code:Xa,language:"tsx"}}},argTypes:{countryCode:{options:Object.keys(e),control:{type:"select",labels:e}}},args:{firstName:"",countryCode:"US"}});var c,r,i;t.input.parameters={...t.input.parameters,docs:{...(c=t.input.parameters)==null?void 0:c.docs,source:{originalSource:`meta.story({
  name: 'API Call',
  parameters: {
    controls: {
      expanded: true
    },
    docs: {
      source: {
        code: API_CODE,
        language: 'tsx'
      }
    }
  },
  argTypes: {
    countryCode: {
      options: Object.keys(COUNTRIES),
      control: {
        type: 'select',
        labels: COUNTRIES
      }
    }
  },
  args: {
    firstName: '',
    countryCode: 'US'
  }
})`,...(i=(r=t.input.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const as=["API_Example"];export{t as API_Example,as as __namedExportsOrder,$a as default};

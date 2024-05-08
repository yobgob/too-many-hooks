import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{r as A}from"./index-uubelm5h.js";import{u as m}from"./useThrottleFunction-BCgAsEsw.js";const d=({firstName:t,countryCode:u})=>{const[a,S]=A.useState();return m(async M=>fetch("https://api.agify.io?"+new URLSearchParams(M)).then(s=>s.json()).then(s=>S(s.age)),2e3,{name:t,country_id:u}),o.jsxs("div",{className:"prose flex flex-col items-center gap-4 text-4xl",children:[o.jsx("p",{children:'Enter a name and country in "Controls" to get a predicted age, updated at most every 2 seconds'}),o.jsx("p",{children:a?`Predicted age: ${a}`:t?"No age result for entered name and location":"No name entered"})]})},l=d;d.__docgenInfo={description:"",methods:[],displayName:"API",props:{firstName:{required:!0,tsType:{name:"string"},description:""},countryCode:{required:!0,tsType:{name:"unknown"},description:""}}};const C=`import React, { useState } from 'react'
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
`,T="Andorra",p="United Arab Emirates",I="Afghanistan",N="Antigua and Barbuda",G="Anguilla",g="Albania",P="Armenia",B="Netherlands Antilles",E="Angola",y="Antarctica",R="Argentina",h="American Samoa",L="Austria",K="Australia",U="Aruba",F="Azerbaijan",f="Bosnia and Herzegovina",O="Barbados",b="Bangladesh",D="Belgium",H="Burkina Faso",V="Bulgaria",Z="Bahrain",x="Burundi",W="Benin",J="Saint Barthelemy",Y="Bermuda",k="Brunei",v="Bolivia",j="Brazil",w="Bahamas",_="Bhutan",z="Bouvet Island",Q="Botswana",q="Belarus",X="Belize",$="Canada",nn="Cocos Islands",tn="Democratic Republic of the Congo",on="Central African Republic",sn="Republic of the Congo",an="Switzerland",en="Ivory Coast",cn="Cook Islands",rn="Chile",dn="Cameroon",ln="China",un="Colombia",Sn="Costa Rica",Mn="Cuba",An="Cape Verde",mn="Christmas Island",Cn="Cyprus",Tn="Czech Republic",pn="Germany",In="Djibouti",Nn="Denmark",Gn="Dominica",gn="Dominican Republic",Pn="Algeria",Bn="Ecuador",En="Estonia",yn="Egypt",Rn="Western Sahara",hn="Eritrea",Ln="Spain",Kn="Ethiopia",Un="Finland",Fn="Fiji",fn="Falkland Islands",On="Micronesia",bn="Faroe Islands",Dn="France",Hn="Gabon",Vn="United Kingdom",Zn="Grenada",xn="Georgia",Wn="French Guiana",Jn="Guernsey",Yn="Ghana",kn="Gibraltar",vn="Greenland",jn="Gambia",wn="Guinea",_n="Guadeloupe",zn="Equatorial Guinea",Qn="Greece",qn="South Georgia And Sandwich Isl.",Xn="Guatemala",$n="Guam",nt="Guinea-Bissau",tt="Guyana",ot="Hong Kong",st="Honduras",at="Croatia",et="Haiti",ct="Hungary",rt="Indonesia",it="Ireland",dt="Israel",lt="Isle of Man",ut="India",St="British Indian Ocean Territory",Mt="Iraq",At="Iran",mt="Iceland",Ct="Italy",Tt="Jersey",pt="Jamaica",It="Jordan",Nt="Japan",Gt="Kenya",gt="Kyrgyzstan",Pt="Cambodia",Bt="Kiribati",Et="Comoros",yt="Saint Kitts and Nevis",Rt="North Korea",ht="South Korea",Lt="Kuwait",Kt="Cayman Islands",Ut="Kazakhstan",Ft="Laos",ft="Lebanon",Ot="Saint Lucia",bt="Liechtenstein",Dt="Sri Lanka",Ht="Liberia",Vt="Lesotho",Zt="Lithuania",xt="Luxembourg",Wt="Latvia",Jt="Libya",Yt="Morocco",kt="Monaco",vt="Moldova",jt="Montenegro",wt="Saint Martin",_t="Madagascar",zt="Marshall Islands",Qt="Macedonia",qt="Mali",Xt="Myanmar",$t="Mongolia",no="Macao",to="Northern Mariana Islands",oo="Martinique",so="Mauritania",ao="Montserrat",eo="Malta",co="Mauritius",ro="Maldives",io="Malawi",lo="Mexico",uo="Malaysia",So="Mozambique",Mo="Namibia",Ao="New Caledonia",mo="Niger",Co="Norfolk Island",To="Nigeria",po="Nicaragua",Io="Netherlands",No="Norway",Go="Nepal",go="Nauru",Po="Niue",Bo="New Zealand",Eo="Oman",yo="Panama",Ro="Peru",ho="French Polynesia",Lo="Papua New Guinea",Ko="Philippines",Uo="Pakistan",Fo="Poland",fo="Saint Pierre and Miquelon",Oo="Pitcairn",bo="Puerto Rico",Do="Palestine",Ho="Portugal",Vo="Palau",Zo="Paraguay",xo="Qatar",Wo="Reunion",Jo="Romania",Yo="Serbia",ko="Russia",vo="Rwanda",jo="Saudi Arabia",wo="Solomon Islands",_o="Seychelles",zo="Sudan",Qo="Sweden",qo="Singapore",Xo="Saint Helena",$o="Slovenia",ns="Svalbard and Jan Mayen",ts="Slovakia",os="Sierra Leone",ss="San Marino",as="Senegal",es="Somalia",cs="Suriname",rs="Sao Tome and Principe",is="El Salvador",ds="Syria",ls="Swaziland",us="Turks and Caicos Islands",Ss="Chad",Ms="Togo",As="Thailand",ms="Tajikistan",Cs="Tokelau",Ts="East Timor",ps="Turkmenistan",Is="Tunisia",Ns="Tonga",Gs="Turkey",gs="Trinidad and Tobago",Ps="Tuvalu",Bs="Taiwan",Es="Tanzania",ys="Ukraine",Rs="Uganda",hs="United States",Ls="Uruguay",Ks="Uzbekistan",Us="Vatican",Fs="Saint Vincent and the Grenadines",fs="Venezuela",Os="British Virgin Islands",bs="U.S. Virgin Islands",Ds="Vietnam",Hs="Vanuatu",Vs="Wallis and Futuna",Zs="Samoa",xs="Yemen",Ws="Mayotte",Js="South Africa",Ys="Zambia",ks="Zimbabwe",e={AD:T,AE:p,AF:I,AG:N,AI:G,AL:g,AM:P,AN:B,AO:E,AQ:y,AR:R,AS:h,AT:L,AU:K,AW:U,AZ:F,BA:f,BB:O,BD:b,BE:D,BF:H,BG:V,BH:Z,BI:x,BJ:W,BL:J,BM:Y,BN:k,BO:v,BR:j,BS:w,BT:_,BV:z,BW:Q,BY:q,BZ:X,CA:$,CC:nn,CD:tn,CF:on,CG:sn,CH:an,CI:en,CK:cn,CL:rn,CM:dn,CN:ln,CO:un,CR:Sn,CU:Mn,CV:An,CX:mn,CY:Cn,CZ:Tn,DE:pn,DJ:In,DK:Nn,DM:Gn,DO:gn,DZ:Pn,EC:Bn,EE:En,EG:yn,EH:Rn,ER:hn,ES:Ln,ET:Kn,FI:Un,FJ:Fn,FK:fn,FM:On,FO:bn,FR:Dn,GA:Hn,GB:Vn,GD:Zn,GE:xn,GF:Wn,GG:Jn,GH:Yn,GI:kn,GL:vn,GM:jn,GN:wn,GP:_n,GQ:zn,GR:Qn,GS:qn,GT:Xn,GU:$n,GW:nt,GY:tt,HK:ot,HN:st,HR:at,HT:et,HU:ct,ID:rt,IE:it,IL:dt,IM:lt,IN:ut,IO:St,IQ:Mt,IR:At,IS:mt,IT:Ct,JE:Tt,JM:pt,JO:It,JP:Nt,KE:Gt,KG:gt,KH:Pt,KI:Bt,KM:Et,KN:yt,KP:Rt,KR:ht,KW:Lt,KY:Kt,KZ:Ut,LA:Ft,LB:ft,LC:Ot,LI:bt,LK:Dt,LR:Ht,LS:Vt,LT:Zt,LU:xt,LV:Wt,LY:Jt,MA:Yt,MC:kt,MD:vt,ME:jt,MF:wt,MG:_t,MH:zt,MK:Qt,ML:qt,MM:Xt,MN:$t,MO:no,MP:to,MQ:oo,MR:so,MS:ao,MT:eo,MU:co,MV:ro,MW:io,MX:lo,MY:uo,MZ:So,NA:Mo,NC:Ao,NE:mo,NF:Co,NG:To,NI:po,NL:Io,NO:No,NP:Go,NR:go,NU:Po,NZ:Bo,OM:Eo,PA:yo,PE:Ro,PF:ho,PG:Lo,PH:Ko,PK:Uo,PL:Fo,PM:fo,PN:Oo,PR:bo,PS:Do,PT:Ho,PW:Vo,PY:Zo,QA:xo,RE:Wo,RO:Jo,RS:Yo,RU:ko,RW:vo,SA:jo,SB:wo,SC:_o,SD:zo,SE:Qo,SG:qo,SH:Xo,SI:$o,SJ:ns,SK:ts,SL:os,SM:ss,SN:as,SO:es,SR:cs,ST:rs,SV:is,SY:ds,SZ:ls,TC:us,TD:Ss,TG:Ms,TH:As,TJ:ms,TK:Cs,TL:Ts,TM:ps,TN:Is,TO:Ns,TR:Gs,TT:gs,TV:Ps,TW:Bs,TZ:Es,UA:ys,UG:Rs,US:hs,UY:Ls,UZ:Ks,VA:Us,VC:Fs,VE:fs,VG:Os,VI:bs,VN:Ds,VU:Hs,WF:Vs,WS:Zs,YE:xs,YT:Ws,ZA:Js,ZM:Ys,ZW:ks},vs={title:"useThrottleFunction/API",component:l},n={name:"API Call",parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:C,language:"tsx"}}},argTypes:{firstName:{type:"string"},countryCode:{options:Object.keys(e),control:{type:"select",labels:e}}},args:{firstName:"",countryCode:"US"},render:t=>o.jsx(l,{...t})};var c,r,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'API Call',
  parameters: {
    layout: 'centered',
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
    firstName: {
      type: 'string'
    },
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
  },
  render: args => <API {...args} />
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const js=["api"],Qs=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:js,api:n,default:vs},Symbol.toStringTag,{value:"Module"}));export{Qs as A,n as a};

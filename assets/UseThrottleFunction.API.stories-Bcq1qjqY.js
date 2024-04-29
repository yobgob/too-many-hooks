import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{H as m}from"./too-many-hooks-DK1YWqSv.js";import{r as A}from"./index-uubelm5h.js";const d=({firstName:t,countryCode:u})=>{const[a,S]=A.useState();return m(async M=>fetch("https://api.agify.io?"+new URLSearchParams(M)).then(s=>s.json()).then(s=>S(s.age)),2e3,{name:t,country_id:u}),o.jsxs("div",{className:"prose flex flex-col items-center gap-4 text-4xl",children:[o.jsx("p",{children:'Enter a name and country in "Controls" to get a predicted age, updated at most every 2 seconds'}),o.jsx("p",{children:a?`Predicted age: ${a}`:t?"No age result for entered name and location":"No name entered"})]})},l=d;d.__docgenInfo={description:"",methods:[],displayName:"API",props:{firstName:{required:!0,tsType:{name:"string"},description:""},countryCode:{required:!0,tsType:{name:"unknown"},description:""}}};const C=`import { useThrottleFunction } from '@yobgob/too-many-hooks'
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
`,p="Andorra",I="United Arab Emirates",N="Afghanistan",T="Antigua and Barbuda",G="Anguilla",g="Albania",P="Armenia",B="Netherlands Antilles",y="Angola",E="Antarctica",R="Argentina",h="American Samoa",L="Austria",K="Australia",U="Aruba",b="Azerbaijan",F="Bosnia and Herzegovina",f="Barbados",O="Bangladesh",H="Belgium",D="Burkina Faso",V="Bulgaria",Z="Bahrain",x="Burundi",W="Benin",J="Saint Barthelemy",Y="Bermuda",k="Brunei",v="Bolivia",j="Brazil",w="Bahamas",_="Bhutan",z="Bouvet Island",Q="Botswana",q="Belarus",X="Belize",$="Canada",nn="Cocos Islands",tn="Democratic Republic of the Congo",on="Central African Republic",sn="Republic of the Congo",an="Switzerland",en="Ivory Coast",cn="Cook Islands",rn="Chile",dn="Cameroon",ln="China",un="Colombia",Sn="Costa Rica",Mn="Cuba",mn="Cape Verde",An="Christmas Island",Cn="Cyprus",pn="Czech Republic",In="Germany",Nn="Djibouti",Tn="Denmark",Gn="Dominica",gn="Dominican Republic",Pn="Algeria",Bn="Ecuador",yn="Estonia",En="Egypt",Rn="Western Sahara",hn="Eritrea",Ln="Spain",Kn="Ethiopia",Un="Finland",bn="Fiji",Fn="Falkland Islands",fn="Micronesia",On="Faroe Islands",Hn="France",Dn="Gabon",Vn="United Kingdom",Zn="Grenada",xn="Georgia",Wn="French Guiana",Jn="Guernsey",Yn="Ghana",kn="Gibraltar",vn="Greenland",jn="Gambia",wn="Guinea",_n="Guadeloupe",zn="Equatorial Guinea",Qn="Greece",qn="South Georgia And Sandwich Isl.",Xn="Guatemala",$n="Guam",nt="Guinea-Bissau",tt="Guyana",ot="Hong Kong",st="Honduras",at="Croatia",et="Haiti",ct="Hungary",rt="Indonesia",it="Ireland",dt="Israel",lt="Isle of Man",ut="India",St="British Indian Ocean Territory",Mt="Iraq",mt="Iran",At="Iceland",Ct="Italy",pt="Jersey",It="Jamaica",Nt="Jordan",Tt="Japan",Gt="Kenya",gt="Kyrgyzstan",Pt="Cambodia",Bt="Kiribati",yt="Comoros",Et="Saint Kitts and Nevis",Rt="North Korea",ht="South Korea",Lt="Kuwait",Kt="Cayman Islands",Ut="Kazakhstan",bt="Laos",Ft="Lebanon",ft="Saint Lucia",Ot="Liechtenstein",Ht="Sri Lanka",Dt="Liberia",Vt="Lesotho",Zt="Lithuania",xt="Luxembourg",Wt="Latvia",Jt="Libya",Yt="Morocco",kt="Monaco",vt="Moldova",jt="Montenegro",wt="Saint Martin",_t="Madagascar",zt="Marshall Islands",Qt="Macedonia",qt="Mali",Xt="Myanmar",$t="Mongolia",no="Macao",to="Northern Mariana Islands",oo="Martinique",so="Mauritania",ao="Montserrat",eo="Malta",co="Mauritius",ro="Maldives",io="Malawi",lo="Mexico",uo="Malaysia",So="Mozambique",Mo="Namibia",mo="New Caledonia",Ao="Niger",Co="Norfolk Island",po="Nigeria",Io="Nicaragua",No="Netherlands",To="Norway",Go="Nepal",go="Nauru",Po="Niue",Bo="New Zealand",yo="Oman",Eo="Panama",Ro="Peru",ho="French Polynesia",Lo="Papua New Guinea",Ko="Philippines",Uo="Pakistan",bo="Poland",Fo="Saint Pierre and Miquelon",fo="Pitcairn",Oo="Puerto Rico",Ho="Palestine",Do="Portugal",Vo="Palau",Zo="Paraguay",xo="Qatar",Wo="Reunion",Jo="Romania",Yo="Serbia",ko="Russia",vo="Rwanda",jo="Saudi Arabia",wo="Solomon Islands",_o="Seychelles",zo="Sudan",Qo="Sweden",qo="Singapore",Xo="Saint Helena",$o="Slovenia",ns="Svalbard and Jan Mayen",ts="Slovakia",os="Sierra Leone",ss="San Marino",as="Senegal",es="Somalia",cs="Suriname",rs="Sao Tome and Principe",is="El Salvador",ds="Syria",ls="Swaziland",us="Turks and Caicos Islands",Ss="Chad",Ms="Togo",ms="Thailand",As="Tajikistan",Cs="Tokelau",ps="East Timor",Is="Turkmenistan",Ns="Tunisia",Ts="Tonga",Gs="Turkey",gs="Trinidad and Tobago",Ps="Tuvalu",Bs="Taiwan",ys="Tanzania",Es="Ukraine",Rs="Uganda",hs="United States",Ls="Uruguay",Ks="Uzbekistan",Us="Vatican",bs="Saint Vincent and the Grenadines",Fs="Venezuela",fs="British Virgin Islands",Os="U.S. Virgin Islands",Hs="Vietnam",Ds="Vanuatu",Vs="Wallis and Futuna",Zs="Samoa",xs="Yemen",Ws="Mayotte",Js="South Africa",Ys="Zambia",ks="Zimbabwe",e={AD:p,AE:I,AF:N,AG:T,AI:G,AL:g,AM:P,AN:B,AO:y,AQ:E,AR:R,AS:h,AT:L,AU:K,AW:U,AZ:b,BA:F,BB:f,BD:O,BE:H,BF:D,BG:V,BH:Z,BI:x,BJ:W,BL:J,BM:Y,BN:k,BO:v,BR:j,BS:w,BT:_,BV:z,BW:Q,BY:q,BZ:X,CA:$,CC:nn,CD:tn,CF:on,CG:sn,CH:an,CI:en,CK:cn,CL:rn,CM:dn,CN:ln,CO:un,CR:Sn,CU:Mn,CV:mn,CX:An,CY:Cn,CZ:pn,DE:In,DJ:Nn,DK:Tn,DM:Gn,DO:gn,DZ:Pn,EC:Bn,EE:yn,EG:En,EH:Rn,ER:hn,ES:Ln,ET:Kn,FI:Un,FJ:bn,FK:Fn,FM:fn,FO:On,FR:Hn,GA:Dn,GB:Vn,GD:Zn,GE:xn,GF:Wn,GG:Jn,GH:Yn,GI:kn,GL:vn,GM:jn,GN:wn,GP:_n,GQ:zn,GR:Qn,GS:qn,GT:Xn,GU:$n,GW:nt,GY:tt,HK:ot,HN:st,HR:at,HT:et,HU:ct,ID:rt,IE:it,IL:dt,IM:lt,IN:ut,IO:St,IQ:Mt,IR:mt,IS:At,IT:Ct,JE:pt,JM:It,JO:Nt,JP:Tt,KE:Gt,KG:gt,KH:Pt,KI:Bt,KM:yt,KN:Et,KP:Rt,KR:ht,KW:Lt,KY:Kt,KZ:Ut,LA:bt,LB:Ft,LC:ft,LI:Ot,LK:Ht,LR:Dt,LS:Vt,LT:Zt,LU:xt,LV:Wt,LY:Jt,MA:Yt,MC:kt,MD:vt,ME:jt,MF:wt,MG:_t,MH:zt,MK:Qt,ML:qt,MM:Xt,MN:$t,MO:no,MP:to,MQ:oo,MR:so,MS:ao,MT:eo,MU:co,MV:ro,MW:io,MX:lo,MY:uo,MZ:So,NA:Mo,NC:mo,NE:Ao,NF:Co,NG:po,NI:Io,NL:No,NO:To,NP:Go,NR:go,NU:Po,NZ:Bo,OM:yo,PA:Eo,PE:Ro,PF:ho,PG:Lo,PH:Ko,PK:Uo,PL:bo,PM:Fo,PN:fo,PR:Oo,PS:Ho,PT:Do,PW:Vo,PY:Zo,QA:xo,RE:Wo,RO:Jo,RS:Yo,RU:ko,RW:vo,SA:jo,SB:wo,SC:_o,SD:zo,SE:Qo,SG:qo,SH:Xo,SI:$o,SJ:ns,SK:ts,SL:os,SM:ss,SN:as,SO:es,SR:cs,ST:rs,SV:is,SY:ds,SZ:ls,TC:us,TD:Ss,TG:Ms,TH:ms,TJ:As,TK:Cs,TL:ps,TM:Is,TN:Ns,TO:Ts,TR:Gs,TT:gs,TV:Ps,TW:Bs,TZ:ys,UA:Es,UG:Rs,US:hs,UY:Ls,UZ:Ks,VA:Us,VC:bs,VE:Fs,VG:fs,VI:Os,VN:Hs,VU:Ds,WF:Vs,WS:Zs,YE:xs,YT:Ws,ZA:Js,ZM:Ys,ZW:ks},vs={title:"useThrottleFunction/API",component:l},n={name:"API Call",parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:C,language:"tsx"}}},argTypes:{firstName:{type:"string"},countryCode:{options:Object.keys(e),control:{type:"select",labels:e}}},args:{firstName:"",countryCode:"US"},render:t=>o.jsx(l,{...t})};var c,r,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

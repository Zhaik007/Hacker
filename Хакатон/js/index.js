const contryList = document.querySelector("#contries");
console.log(contryList)
const filter = document.querySelector('#country')
const form = document.querySelector('.aut-form')

const contries = [{type:"AD",nazvanie:"Andorra"},{type:"AE",nazvanie:"United Arab Emirates" },{ type:"AF",nazvanie:"Afghanistan"},{type:"AG",nazvanie:"Antigua and Barbuda" },{type:"AI",nazvanie:"Anguilla"},{type:"AL",nazvanie:"Albania"},
  {type:"AM",nazvanie:"Armenia"},{type:"AN",nazvanie:"Netherlands Antilles"},{type:"AO",nazvanie:"Angola"},
  {type:"AQ",nazvanie:"Antarctica"},{type:"AR",nazvanie:"Argentina"},{type:"AS",nazvanie:"American Samoa" },
  {type:"AT", nazvanie:"Austria"},{type:"AU",nazvanie:"Australia"}, { type: "AW", nazvanie: "Aruba" },  
  {type:"AX",nazvanie:"Åland Islands" },{type:"AZ",nazvanie: "Azerbaijan" },  { type: "AZ", nazvanie: "Azerbaijan" },
  {type:"BA",nazvanie:"Bosnia and Herzegovina"},{type:"BB",nazvanie:"Barbados"},{type:"BD",nazvanie:"Bangladesh" },  {type:"BE", nazvanie:"Belgium"},{type:"BF",nazvanie:"Burkina Faso" },  { type: "BG", nazvanie: "Bulgaria" },
  {type:"BH",nazvanie:"Bahrain" },{ type: "AZ", nazvanie: "Azerbaijan" }, {type:"AZ",nazvanie:"Azerbaijan" },  
  {type: "BI", nazvanie: "Burundi" },  {type:"BJ",nazvanie:"Benin" },  { type: "BM", nazvanie: "Bermuda" },
  {type:"BN",nazvanie:"Brunei Darussalam" },  { type: "BO", nazvanie: "Bolivia" }, {type:"BR",nazvanie:"Brazil" },  
  {type: "BS", nazvanie: "Bahamas" },  {type:"BT",nazvanie:"Bhutan" },  { type: "BW", nazvanie: "Botswana" },
  {type:"BY",nazvanie:"Belarus" },  { type: "BZ", nazvanie: "Belize" },  {type:"CA",nazvanie:"Canada" },  
  { type: "CC", nazvanie: "Cocos (Keeling) Islands" }, {type:"CD",nazvanie:"The Democratic Republic Of The Congo"},  {type:"CF",nazvanie:"Central African Republic"},{type:"CG",nazvanie:"Congo"},{type:"CH",nazvanie:"Switzerland" },  { type: "CI", nazvanie: "Côte D'Ivoire"},  {type:"CK",nazvanie:"Cook Islands" },  { type: "CL", nazvanie: "Chile" },
  {type:"CM",nazvanie:"Cameroon" },  { type: "CN", nazvanie: "China" },  {type:"CO",nazvanie:"Colombia" },  
  { type: "CR", nazvanie: "Costa Rica" },  {type:"CU",nazvanie:"Cuba" },  { type: "CV", nazvanie: "Cape Verde" },
  {type:"CW",nazvanie:"Curaçao" },  { type: "CX", nazvanie: "Christmas Island" },  {type:"CY",nazvanie:"Cyprus" }, 
  { type: "CZ", nazvanie: "Czech Republic" },  {type:"DE",nazvanie:"Germany" },  { type: "DJ", nazvanie: "Djibouti" },
  {type:"DK",nazvanie:"Denmark" },  { type: "DM", nazvanie: "Dominica" },
  {type:"DO",nazvanie:"Dominican Republic" },  { type: "DZ", nazvanie: "Algeria" },{type:"EC",nazvanie:"Ecuador" },  { type: "EE", nazvanie: "Estonia" },  {type:"EG",nazvanie:"Egypt" },  { type: "EH", nazvanie: "Western Sahara" },
  {type:"ER",nazvanie:"Eritrea" },  { type: "ES", nazvanie: "Spain" }, {type:"ET",nazvanie:"Ethiopia" },  
  { type: "FI", nazvanie: "Finland"},{type:"FJ",nazvanie:"Fiji" },{type:"FK",nazvanie:"Falkland Islands (Malvinas)" },
  {type:"FM",nazvanie:"Micronesia, Federated States Of" },  {type:"FO",nazvanie:"Faroe Islands" },  
  { type: "FR", nazvanie: "France" },  {type:"GA",nazvanie:"Gabon" },  { type: "GB", nazvanie: "United Kingdom" },
  {type:"GD",nazvanie:"Grenada" },  { type: "GE", nazvanie: "Georgia" },  {type:"GG",nazvanie:"Guernsey" },  
  { type: "GH", nazvanie: "Ghana" },{type:"GI",nazvanie:"Gibraltar" },  { type: "GL", nazvanie: "Greenland" },
  {type:"GM",nazvanie:"Gambia" },  { type: "GN", nazvanie: "Guinea" }, {type:"GQ",nazvanie:"Equatorial Guinea" },
  {type: "GR", nazvanie: "Greece" },  {type:"GS",nazvanie:"South Georgia and the South Sandwich Islands" },
  {type:"GT",nazvanie:"Guatemala" },  { type: "GU", nazvanie: "Guam" },  {type:"GW",nazvanie:"Guinea-Bissau" },  
  { type: "GY", nazvanie: "Guyana" },  {type:"HK",nazvanie:"Hong Kong" },  { type: "HN", nazvanie: "Honduras" },
  {type:"HR",nazvanie:"Croatia" },  { type: "HT", nazvanie: "Haiti" },  {type:"HU",nazvanie:"Hungary" },  
  { type: "ID", nazvanie: "Indonesia" },  {type:"IE",nazvanie:"Ireland" },  { type: "IL", nazvanie: "Israel" },
  {type:"IM",nazvanie:"Isle of Man" },  { type: "IN", nazvanie: "India" },  {type:"IQ",nazvanie:"Iraq" },  
  { type: "IR", nazvanie:"Iran, Islamic Republic Of"},{type:"IS",nazvanie:"Iceland"},{type: "IT", nazvanie: "Italy" },
  {type:"JE",nazvanie:"Jersey"},{type:"JM",nazvanie:"Jamaica"},{type:"JO",nazvanie:"Jordan"},
  {type:"JP",nazvanie:"Japan"},{type:"KE",nazvanie:"Kenya" },  { type: "KG", nazvanie: "Kyrgyzstan" },
  {type:"KH",nazvanie:"Cambodia" },  { type: "KI", nazvanie: "Kiribati" }, {type:"KM",nazvanie:"Comoros" }, 
  { type: "KN", nazvanie: "Saint Kitts And Nevis" },  {type:"KP",nazvanie:"Democratic People's Republic Of Korea" },
  {type:"KR",nazvanie:" Republic of Korea" },{type:"KW",nazvanie:"Kuwait"},{type:"KY",nazvanie:"Cayman Islands" },  { type: "KZ", nazvanie: "Kazakhstan" },  {type:"LA",nazvanie:"People's Democratic Republic of Lao" },
  {type:"LB",nazvanie:"Lebanon" },  { type: "LC", nazvanie: "Saint Lucia" }, {type:"LI",nazvanie:"Liechtenstein" },  { type: "LK", nazvanie: "Sri Lanka" },  {type:"LR",nazvanie:"Liberia" },  { type: "LS", nazvanie: "Lesotho" },
  {type:"LT",nazvanie:"Lithuania" },  { type: "LU", nazvanie: "Luxembourg" },  {type:"LV",nazvanie:"Latvia" },
  { type: "LY", nazvanie: "Libya" },  {type:"MA",nazvanie:"Morocco" },  { type: "MC", nazvanie: "Monaco" },
  {type:"MD",nazvanie:"Republic of Moldova"},{type:"ME",nazvanie:"Montenegro"},{type:"MF",nazvanie:"Saint Martin" },  { type: "MG", nazvanie: "Madagascar"},{type:"MH",nazvanie:"Marshall Islands" },
  {type:"MK",nazvanie:"Former Yugoslav Republic Of Macedonia"},{ type: "ML", nazvanie: "Mali" },
  {type:"MM",nazvanie:"Myanmar" },{ type: "MN", nazvanie: "Mongolia" },  { type: "MO", nazvanie: "Macao" },
  {type:"MP",nazvanie:"Northern Mariana Islands"},{type:"MQ",nazvanie:"Martinique"},
  {type:"MR",nazvanie:"Mauritania" },{ type:"MS", nazvanie: "Montserrat"},{type:"MT",nazvanie:"Malta" },
  { type: "MU", nazvanie: "Mauritius" },{type:"MV",nazvanie:"Maldives" }, {type:"MW",nazvanie:"Malawi" },  
  { type: "MX", nazvanie: "Mexico" },  { type: "MY", nazvanie: "Malaysia" }, {type:"MZ",nazvanie:"Mozambique"},  {type: "NA",nazvanie:"Namibia" },  {type:"NC",nazvanie:"New Caledonia" },{ type: "NE",nazvanie:"Niger"},
  { type: "NF", nazvanie: "Norfolk Island" },  {type:"NG",nazvanie:"Nigeria" },{ type: "NI", nazvanie: "Nicaragua" },
  {type:"NL",nazvanie:"Netherlands" },  { type: "NO", nazvanie: "Norway" },  {type:"NP",nazvanie:"Nepal" },  
  { type: "NR", nazvanie: "Nauru" },  {type:"NU",nazvanie:"Niue" },  { type: "NZ", nazvanie: "New Zealand" },
  {type:"OM",nazvanie:"Oman" },  { type: "PA", nazvanie: "Panama" },  {type:"PE",nazvanie:"Peru" },  
  { type: "PF", nazvanie: "French Polynesia" },  {type:"PG",nazvanie:"Papua New Guinea" },
  { type: "PH", nazvanie: "Philippines" },  {type:"PK",nazvanie:"Pakistan" },  { type: "PL", nazvanie: "Poland" },
  {type:"PN",nazvanie:"Pitcairn" },{type:"PR",nazvanie:"Puerto Rico"},{type:"PS",nazvanie:"State of Palestine" },  { type: "PT", nazvanie: "Portugal" },{type:"PW",nazvanie:"Palau" },  { type: "PY", nazvanie: "Paraguay" },
  {type:"QA",nazvanie:"Qatar" },  { type: "RE", nazvanie: "Réunion" },  {type:"RO",nazvanie:"Romania" },  
  { type: "RS", nazvanie: "Serbia" },  {type:"RU",nazvanie:"Russian Federation" },{ type: "RW", nazvanie: "Rwanda" },
  {type:"SA",nazvanie:"Saudi Arabia " },{type:"SB",nazvanie:"Solomon Islands"},{type:"SC",nazvanie:"Seychelles " },  { type: "SD", nazvanie: "Sudan " },{type:"SE",nazvanie:"Sweden " },  { type: "SG", nazvanie: "Singapore " },
  {type:"SH",nazvanie:"Saint Helena " },  { type: "SI", nazvanie: "Slovenia " },
  {type:"SK",nazvanie:"Slovakia " },{ type: "SL", nazvanie: "Sierra Leone " },
    {type:"SM",nazvanie:"San Marino " },{ type: "SN", nazvanie: "Senegal " },
    {type:"SO",nazvanie:"Somalia " },{ type: "SR", nazvanie: "Suriname " },
    {type:"SS",nazvanie:"South Sudan " },{ type:"ST", nazvanie: "Sao Tome and Principe " },
    {type:"SV",nazvanie:"El Salvador " },{ type:"SY", nazvanie: "Syrian Arab Republic " },
    {type:"SZ",nazvanie:"Swaziland " },{ type:"TC", nazvanie: "Turks and Caicos Islands " },
    {type:"TD",nazvanie:"Chad " },{ type: "TF",nazvanie: "French Southern Territories " },
    {type:"TG",nazvanie:"Togo " },{ type: "TH",nazvanie: "Thailand " },
    {type:"TJ",nazvanie:"Tajikistan " },{ type:"TK",nazvanie: "Tokelau " },
    {type:"TL",nazvanie:"Timor-Leste" },{ type:"TM",nazvanie: "Turkmenistan " },
    {type:"TN",nazvanie:"Tunisia " },{ type: "TO",nazvanie: "Tonga " },
    {type:"TR",nazvanie:"Turkey" },{ type: "TT",nazvanie: "Trinidad and Tobago " },
    {type:"TV",nazvanie:"Tuvalu" },{ type: "TW",nazvanie: "Taiwan, Republic Of China " },
    {type:"TZ",nazvanie:"United Republic of Tanzania"},{ type: "UA", nazvanie: "Ukraine " },
    {type:"UG",nazvanie:"Uganda" },{ type: "US", nazvanie: "United States" },
    {type:"UY",nazvanie:"Uruguay" },{ type: "UZ", nazvanie: "Uzbekistan" },
    {type:"VA",nazvanie:"Holy See (Vatican City State)"},{ type:"VC", nazvanie: "Saint Vincent And The Grenadines " },
    {type:"VE",nazvanie:"Bolivarian Republic of Venezuela" },{type:"VG",nazvanie:"Virgin Islands, British " }, 
    { type: "VI", nazvanie: "Virgin Islands, U.S. " },
    {type:"VN",nazvanie:"Vietnam " },{ type: "VU", nazvanie: "Vanuatu " },{type:"WF",nazvanie:"Wallis and Futuna " },
    { type: "WS", nazvanie: "Samoa " },{type:"YE",nazvanie:"Yemen " },{ type: "YT", nazvanie: "Mayotte " },
    {type:"ZA",nazvanie:"South Africa " },{ type: "ZM", nazvanie: "Zambia " },{type:"ZW",nazvanie:"Zimbabwe " }];
function returnCountryFlag(country) {
  return `
    <li class = "hover:ring rounded-lg cursor-pointer" onclick="update_country(this);">
        <img class="rounded inline-block align-middle" src="https://flagsapi.com/${country.type}/flat/64.png" alt="" width="30 " height="30"><p id="pp">${country.nazvanie}</p>
    </li>`
}
init()
filter.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    const filteredContries = contries.filter((cntry) =>
      cntry.nazvanie.toLowerCase().includes(value)
    )
    init(filteredContries)
})
function init(CountriesToDisplay = contries){
    contryList.innerHTML = CountriesToDisplay.map(returnCountryFlag).join("");
}
function isValid(name,email,password,country,checker){
    if(!name.value || !password.value || !email.value){
        console.log("Niga works")
    return true}
}

form.addEventListener('submit',addnewel)
function addnewel(event){
    event.preventDefault()
    const {name,email,password,checker} = event.target
    console.log(name.value,email.value,password.value,checker)
    if(isValid(name,email,password,checker)){
        if (name.value===''){name.style.borderColor = '#e75a5a'}
        if (email.value==='') {email.style.borderColor = '#e75a5a'}
        if (password.value=='') {password.style.borderColor = '#e75a5a'}
        if (checker.checked==false) {checker.style.borderColor = '#e75a5a'}
        setTimeout(() => {
          name.style.borderColor = '#e4eafc';
          email.style.borderColor = '#e4eafc';
          password.style.borderColor = '#e4eafc';
          checker.style.borderColor = '#e4eafc';
        }, 1500);
        return
    }
    name.value =''
    email.value=''
    password.value=''
    checker.checked=false
    window.location.href = "/html/uroki.html";
}



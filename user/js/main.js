


setTimeout(function() {
    var a = document.getElementById("subt");
    a.style.opacity = "0";
}, 2000);



//notification info
function cin(ba, bb, bc) {

    var aa = document.createElement("div");
    aa.id = "subt";
    aa.classList.add("mins", bc);
    aa.innerText = ba;
    var b = document.querySelector("#"+bb);
    b.appendChild(aa);

    setTimeout(function () {
        b.removeChild(aa);
    }, 2000);

}



loadf();

var curr = 0;
showTab(curr);


function showTab(n) {
    var a = document.getElementsByClassName("tab");
    var ya = document.getElementById("form");


    a[n].style.display = "block";

    var prev = document.querySelector("#prev");
    var nxt = document.querySelector("#nxt");

    if (n == 0) {
        prev.style.display = "none";
    } else {
        prev.style.display = "inline-block";
    }

    if (n == (a.length - 1)) {
        nxt.value = "Submit";
        nxt.removeAtrribute("onclick");
    } else {
        nxt.value = "Next";
    }

    fixInd(n);
}


function next(n) {
    var a = document.getElementsByClassName("tab");
    var pd1 = document.querySelector("#form #pwd").value;
    var nxt = document.querySelector("#form #nxt");
    var pd2 = document.querySelector("#form #spwd").value;

    if (n == 1 && !validForm()) return false;

    if (n == 1 && curr >= a.length-1 && !vapas()) {
        cin("Passwords do not match", "form", "subtt");
        return false;
    }

    if (n == 1 && curr >= a.length-1 && !vapp()) {
        cin("Please input required format", "form", "subtt");
        return false;
    }

    if (n == 1 && curr >= a.length-1 && vapas() && vapp()) {
        document.querySelector("#form").submit();
        return false;
    }


    a[curr].style.display = "none";

    curr += n;

    showTab(curr);
}

function validForm() {
    var x,
    y,
    i,
    valid = true;
    x = document.getElementsByClassName("tab");
    y = x[curr].getElementsByTagName("input");

    for (i of y) {
        if (i.value == "") {
            i.className = "invalid";

            valid = false;
        }
    }

    if (valid) {
        document.getElementsByClassName("step")[curr].className += " finish";
    }

    return valid;
}


function vapas() {
    var pd1 = document.querySelector("#form #pwd").value;
    var pd2 = document.querySelector("#form #spwd").value;

    var val = true;

    if (pd1 != pd2) {
        val = false;
    }

    return val;
}


function vapp() {
    var pd1 = document.querySelector("#form #pwd").value;

    var val = true;

    var pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,14}$/g;

    /*
    if (!pd1.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,14}$/g)){
        val = false;
    }
    */

    if (!pattern.test(pd1)) {
        return false;
    }

    return val;
}


function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i,
    x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}

lau();


function loadf () {
    var a = document.querySelector("#country");
    const countries = [
        "Afghanistan",
        "Aland Islands",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands",
        "Colombia",
        "Comoros",
        "Congo",
        "Congo, Democratic Republic of the Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote D'Ivoire",
        "Croatia",
        "Cuba",
        "Curacao",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands (Malvinas)",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (Vatican City State)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran, Islamic Republic of",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea, Democratic People's Republic of",
        "Korea, Republic of",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libyan Arab Jamahiriya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Macedonia, the Former Yugoslav Republic of",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia, Federated States of",
        "Moldova, Republic of",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestinian Territory, Occupied",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Saint Barthelemy",
        "Saint Helena",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Serbia and Montenegro",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "St Martin",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan, Province of China",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "United States Minor Outlying Islands",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Viet Nam",
        "Virgin Islands, British",
        "Virgin Islands, U.s.",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ];

    for (let i of countries) {
        var b = document.createElement("option");
        b.value = i;
        b.innerText = i;
        a.appendChild(b);
    }

    var c = document.querySelector("#gender");

    var ca = ["Male",
        "Female"];

    for (let i of ca) {
        var b = document.createElement("option");
        b.value = i;
        b.innerText = i;
        c.appendChild(b);
    }

    var d = document.querySelector("#type");

    var da = ["Savings",
        "Current",
        "Offshore",
        "Online business",
        "Joint",
        "Fixed"];

    for (let i of da) {
        var b = document.createElement("option");
        b.value = i;
        b.innerText = i;
        d.appendChild(b);
    }

}
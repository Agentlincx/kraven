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



async function fet(a, b) {

    let data = await fetch("val.php?" + a + "=" + b).then(res => res.text()).then((dat) => {
        return dat;
    });

    return data.trim();
}



//fetch invest json list
async function fetl(a) {

    let data = await fetch("val.php?" + a).then(res => res.json()).then((dat) => {
        return dat;
    });

    return data;
}



function nav() {
    var a = document.querySelector("#smnav #a1");
    var b = document.querySelector("#smnav #a2");
    var c = document.querySelector("#mavl");

    a.classList.toggle("a1");
    b.classList.toggle("a2");
    c.classList.toggle("mavl");
}

function back() {
    window.history.back();
}


async function lodm(){
    var a = document.querySelectorAll(".imae");
    var ver = "";
    if (await fet("guser", "ver") == "1"){
        ver = "";
    } else {
        cretn();
    }
    
    for (let i of a){
    i.src = await fet("guser", "img");
    }
    var aa = document.querySelectorAll(".name");
    for (let i of aa){
    i.innerHTML = await fet("guser", "fnam") + " "  + await fet('guser', 'lnam') + ver;
    }
    var ab = document.querySelectorAll(".email");
    for (let i of ab){
    i.innerText = await fet("guser", "email");
    }
    
}


function cretn(){
    var bod = document.querySelector("body");
    
    var aa = document.createElement("div");
    aa.id = "ntyy";
    bod.appendChild(aa);
    
    var a = document.createElement("div");
    a.id = "nty";
    aa.appendChild(a);
    
    var ab = document.createElement("i");
    ab.classList.add("fas", "fa-times");
    ab.onclick = function (){
        aa.style.display = "none";
    }
    a.appendChild(ab);
    
    var ac = document.createElement("p");
    a.appendChild(ac);
    
    var aca = document.createElement("i");
    aca.classList.add("fas", "fa-lock");
    ac.appendChild(aca);
    
    var acb = document.createElement("span");
    acb.innerText = "  Jira";
    ac.appendChild(acb);
    
    var ad = document.createElement("p");
    ad.innerText = "You do not have permission to access this content";
    a.appendChild(ad);
    
    var ae = document.createElement("i");
    ae.classList.add("fas", "fa-lock");
    a.appendChild(ae);
    
    var af = document.createElement("p");
    af.innerText = "It looks like your account has been deactivated.";
    a.appendChild(af);
    
    var ag = document.createElement("p");
    ag.innerText = "We have sent you an email with details on who to contact to get more info about this";
    a.appendChild(ag);
    
    var ah = document.createElement("a");
    ah.href = "login.html";
    ah.innerText = "Log in to a different account";
    a.appendChild(ah);
    
}


async function lods(){
    
    var a = document.querySelector(".img");
    a.src = await fet("guser", "img");
    
    var aa = document.querySelector(".name");
    aa.innerText = await fet("guser", "fnam") + " "  + await fet('guser', 'lnam');
    
    var ab = document.querySelector(".email");
    ab.innerText = await fet("guser", "email");
    
    var ac = document.querySelector(".pho");
    ac.innerText = await fet("guser", "phone");
    
    var ad = document.querySelector(".id");
    ad.innerText = await fet("guser", "idd");
}


function lodn() {
    var a = document.querySelector("#mavl>div:nth-child(2)");

    var aa = document.querySelector("#bnav>#bavl>div:nth-child(2)");

    var b = [["fas",
        "home",
        "Home",
        "index.php"],
        ["fas",
            "user-plus",
            "Beneficiaries",
            "beneficiary.php"],
        ["fas",
            "history",
            "Transactions",
            "trans.php"],
        ["fas",
            "cogs",
            "Settings",
            "settings.php"],
        ["fas",
            "sign-out-alt",
            "Logout",
            "index.php?logout"]];

    for (let i of b) {
        var c = document.createElement("a");
        c.href = i[3];

        var ca = document.createElement("i");
        ca.classList.add(i[0], "fa-"+i[1]);

        var cb = document.createElement("span");
        cb.innerText = i[2];

        c.appendChild(ca);
        c.appendChild(cb);
        a.appendChild(c);
    }

    for (let i of b) {
        var c = document.createElement("a");
        c.href = i[3];

        var ca = document.createElement("i");
        ca.classList.add(i[0], "fa-"+i[1]);

        var cb = document.createElement("span");
        cb.innerText = i[2];

        c.appendChild(ca);
        c.appendChild(cb);
        aa.appendChild(c);
    }
    
    

    var k = document.querySelector("#date");
    var ka = new Date().getFullYear();
    k.innerText = ka;
}



async function lst() {
    var a = document.querySelector("#j3>div:first-child");
    var amt = document.querySelector("#amt");
    var ak = document.querySelector("#j2");
    var aa = document.querySelector("#j3>div:nth-child(2)");

    //amt.innerText = typeof fcur(parseFloat(await fet("amt")));
    var ty = await fet("guser", "amt");
    amt.innerText = fcur(parseFloat(ty));


    var au = await fetl("recent");

    var ar = ["ID",
        "Description",
        "Amount",
        "Date",
        "Type",
        "Third party"];

    for (let q of au) {

        var ca = document.createElement("a");

        ca.onclick = function() {
            var fg = document.querySelector("#opt");
            var fga = document.querySelector("#opt>div>div:nth-child(3)");
            fga.classList.add("tranv");

            fg.style.width = "100%";
            for (let o = 0; o < q.length; o++) {
                if ((ar[o] != "Type")) {
                    var y = document.createElement("div");
                    var ya = document.createElement("div");
                    ya.innerText = ar[o];
                    y.appendChild(ya);
                    var yb = document.createElement("input");
                    yb.type = "text";
                    yb.disabled = "disabled";
                    if (ar[o] == "Date") {

                        yb.value = new Date(parseInt(q[o])).toUTCString();
                    } else if (ar[o] == "Amount") {

                        var kk = "";
                        if (q[4] == "0") {
                            kk = "-";
                        }
                        yb.value = kk+fcur(parseFloat(q[o]));
                    } else {
                        yb.value = q[o];
                    }
                    y.appendChild(yb);

                    fga.appendChild(y);
                }
            }
        }



        var caa = document.createElement("i");
        caa.classList.add("fas", "fa-coins");
        ca.appendChild(caa);

        var cab = document.createElement("div");
        var caba = document.createElement("div");
        caba.innerText = q[1];

        var cabb = document.createElement("div");
        cabb.innerText = new Date(parseInt(q[3])).toUTCString();

        cab.appendChild(caba);
        cab.appendChild(cabb);
        ca.appendChild(cab);

        var cac = document.createElement("div");

        var kk = "";
        if (q[4] == "0") {
            kk = "-";
        }

        cac.innerText = kk + fcur(parseFloat(q[2]));
        ca.appendChild(cac);

        ak.appendChild(ca);
    }



    var b = [["Accounts",
        "d1"],
        ["Transfers",
            "d4"],
        ["Bill Payments",
            "d3"],
        ["Cheques & Cards",
            "d2"]];

    for (let i of b) {
        var c = document.createElement("a");
        c.onclick = function(e) {
            var aq = document.querySelector(".scrll>a.acts");
            if (aq.classList.contains("acts")) {
                aq.classList.remove("acts");

            }

            e.target.classList.add("acts");
            var l = document.querySelectorAll(".arr");
            for (let t of l) {
                t.style.display = "none";
            }

            document.querySelector("#"+i[1]).style.display = "grid";
        }
        c.innerText = i[0];
        if (i[0] == "Accounts") {
            c.classList.add("acts");
        }
        a.appendChild(c);
    }

    var d = [["d1",
        ["fas",
            "sync",
            "Transaction History",
            "trans.php"],
        ["fas",
            "envelope-open-text",
            "Generate Statement",
            ""],
        ["fas",
            "user-plus",
            "Beneficiaries",
            "beneficiary.php"]],
        ["d2",
            ["fas",
                "credit-card",
                "Add Card",
                "addc.php"],
            ["fas",
                "credit-card",
                "Request Credit Card",
                "rcard.php"],
            ["fas",
                "credit-card",
                "Cards",
                "cardl.php"]],
        ["d3",
            ["fas",
                "ellipsis-h",
                "Utility",
                ""],
            ["fas",
                "clock",
                "Scheduled Payments",
                ""],
            ["fas",
                "tv",
                "Cable TV",
                ""]],
        ["d4",
            ["fas",
                "bank",
                "Kraven Inter Transfer",
                "transfer.php"],
            ["fas",
                "route",
                "Other Banks Transfer",
                "otransfer.php"],
            ["fas",
                "window-maximize",
                "Bulk Transfer",
                "transfer.php"],
            ["fas",
                "clock",
                "Pending Transfers",
                "ptran.php"]]];

    for (let i of d) {
        var e = document.createElement("div");
        e.id = i[0];
        e.classList.add("arr");

        for (let o = 1; o < i.length; o++) {
            var ea = document.createElement("a");
            ea.href = i[o][3];

            var eaa = document.createElement("i");
            eaa.classList.add(i[o][0], "fa-"+i[o][1]);

            var eab = document.createElement("div");
            eab.innerText = i[o][2];

            ea.appendChild(eaa);
            ea.appendChild(eab);

            e.appendChild(ea);
        }
        aa.appendChild(e);
    }
}


async function bene1() {

    var a = document.querySelector("#bene>div:nth-child(2)");

    var qa = document.querySelector("#bene>div:nth-child(4)");

    var b = [["Transfer",
        "d1"],
        ["FCY",
            "d2"],
        ["Bill Payments",
            "d3"]];

    for (let i of b) {
        var c = document.createElement("a");
        c.onclick = function(e) {
            var aq = document.querySelector(".scrll>a.acts");
            if (aq.classList.contains("acts")) {
                aq.classList.remove("acts");

            }

            e.target.classList.add("acts");
            var l = document.querySelectorAll(".arr");
            for (let t of l) {
                t.style.display = "none";
            }

            document.querySelector("#"+i[1]).style.display = "grid";
        }
        c.innerText = i[0];
        if (i[0] == "Transfer") {
            c.classList.add("acts");
        }
        a.appendChild(c);
    }


    var d = [["d1",
        await fetl("bene")],
        ["d2",
            ["Coming soon...",
                ""]],
        ["d3",
            ["Coming soon...",
                ""]]];

    var ar = [["Account Name",
        "acc",
        "text"],
        ["Bank Name",
            "bank",
            "text"],
        ["Account Number",
            "accn",
            "number"],
        ["",
            "id",
            "hidden"]];

    for (let i of d) {
        var e = document.createElement("div");
        e.id = i[0];
        e.classList.add("arr");

        for (let o of i[1]) {
            var ea = document.createElement("a");
            ea.onclick = async function() {
                var fg = document.querySelector("#opt");
                var fga = document.querySelector("#opt>div>div:nth-child(3)>form");
                fga.classList.add("tranv");

                fg.style.width = "100%";

                for (let q = 0; q < i[1][0].length; q++) {
                    var y = document.createElement("div");
                    var ya = document.createElement("div");
                    ya.innerText = ar[q][0];
                    y.appendChild(ya);
                    var yb = document.createElement("input");
                    yb.type = ar[q][2];
                    //yb.disabled = "disabled";
                    yb.name = ar[q][1];
                    yb.value = o[q];
                    yb.required = "required";

                    y.appendChild(yb);

                    fga.appendChild(y);

                }

                var tk = document.createElement("input");
                tk.type = "submit";
                tk.value = "Update";
                tk.name = "upb";

                fga.appendChild(tk);

                var atk = document.createElement("input");
                atk.classList.add("del");
                atk.type = "submit";
                atk.value = "Delete";
                atk.name = "delb";

                fga.appendChild(atk);
            }

            var eaa = document.createElement("div");
            eaa.innerText = o[0];

            var eab = document.createElement("div");
            eab.innerText = o[1]+" - "+ o[2];

            ea.appendChild(eaa);
            ea.appendChild(eab);

            e.appendChild(ea);
        }
        qa.appendChild(e);
    }
}



function addb() {
    var ar = [["Account Name",
        "acc",
        "text"],
        ["Bank Name",
            "bank",
            "text"],
        ["Account Number",
            "accn",
            "number"]];


    var fg = document.querySelector("#opt");
    var fga = document.querySelector("#opt>div>div:nth-child(3)>form");
    fga.classList.add("tranv");

    fg.style.width = "100%";

    for (let q of ar) {
        var y = document.createElement("div");
        var ya = document.createElement("div");
        ya.innerText = q[0];
        y.appendChild(ya);
        var yb = document.createElement("input");
        yb.type = q[2];
        //yb.disabled = "disabled";
        yb.name = q[1];
        yb.value = "";
        yb.required = "required";

        y.appendChild(yb);

        fga.appendChild(y);

    }

    var tk = document.createElement("input");
    tk.type = "submit";
    tk.value = "Update";
    tk.name = "crb";

    fga.appendChild(tk);
}



async function prof() {

    var a = document.querySelector("#prof>div:nth-child(3)");

    var qa = document.querySelector("#prof>div:nth-child(4)");

    var b = [["Transaction Limits",
        "d1"],
        ["Change Password",
            "d3"],
        ["Personal Data",
            "d4"],
        ["Other Info",
            "d2"]/*,
        ["Other Settings",
            "d5"]*/];

    for (let i of b) {
        var c = document.createElement("a");
        c.onclick = function(e) {
            var aq = document.querySelector(".scrll>a.acts");
            if (aq.classList.contains("acts")) {
                aq.classList.remove("acts");
            }

            e.target.classList.add("acts");
            var l = document.querySelectorAll(".arr");
            for (let t of l) {
                t.style.display = "none";
            }

            document.querySelector("#"+i[1]).style.display = "grid";
        }
        c.innerText = i[0];
        if (i[0] == "Transaction Limits") {
            c.classList.add("acts");
        }
        a.appendChild(c);
    }

    // payments
    var d = [["Kraven to Kraven",
        "sts",
        parseFloat(await fet("guser", "sosd")),
        parseFloat(await fet("guser", "sosm"))],
        ["Other banks",
            "sto",
            parseFloat(await fet("guser", "obd")),
            parseFloat(await fet("guser", "obm"))],
        ["Bill payments",
            "blp",
            parseFloat(await fet("guser", "bpd")),
            parseFloat(await fet("guser", "bpm"))]];

    var e = document.createElement("div");
    e.setAttribute("id", "d1");
    e.classList.add("tran", "arr");

    qa.appendChild(e);

    for (let i of d) {
        var ea = document.createElement("div");

        var eaa = document.createElement("div");
        var eaaa = document.createElement("div");
        eaaa.innerText = i[0];

        var eaab = document.createElement("a");
        var eaaba = document.createElement("i");
        eaaba.classList.add("fas", "fa-pencil-alt");
        var eaabb = document.createElement("span");
        eaabb.innerText = "Edit";
        eaab.appendChild(eaaba);
        eaab.appendChild(eaabb);

        eaab.onclick = function() {
            var ty = document.querySelector("#opd");
            document.querySelector("#opd>div>div:nth-child(2)").innerText = i[0];
            document.querySelector("#opd>div input:first-of-type").value = i[2];
            document.querySelector("#opd>div input[id='slim']").value = i[3];
            document.querySelector("#opd>div input[type='submit']").name = i[1];
            /*
            */
            ty.style.height = "100%";
            ty.style.width = "100%";
        }

        eaa.appendChild(eaaa);
        eaa.appendChild(eaab);

        var eab = document.createElement("div");
        var eaba = document.createElement("div");
        eaba.innerText = "Daily Transfer Limit";

        var eabb = document.createElement("div");
        eabb.innerText = fcur(i[2]);

        eab.appendChild(eaba);
        eab.appendChild(eabb);

        var eac = document.createElement("div");
        var eaca = document.createElement("div");
        eaca.innerText = "Maximum amount per transaction";

        var eacb = document.createElement("div");
        eacb.innerText = fcur(i[3]);

        eac.appendChild(eaca);
        eac.appendChild(eacb);

        ea.appendChild(eaa);
        ea.appendChild(eab);
        ea.appendChild(eac);
        e.appendChild(ea);
    }


    // xhange password
    var da = [["p1",
        "Enter current Password...",
        "ipd"],
        ["p2",
            "Enter new password...",
            "npd"],
        ["p3",
            "Confirm new password...",
            "cpd"]];

    var f = document.createElement("form");
    f.id = "chp";
    f.onsubmit = function(e) {

        var ta = document.querySelector("#npd").value;
        var tb = document.querySelector("#cpd").value;

        var gi = true;

        if (ta != tb) {
            gi = false;
            cin("Passwords don't match", "cover", "subtt");
        }

        return gi;

    }



    f.id = "d3";
    f.classList.add("proin", "arr");
    qa.appendChild(f);

    var fz = document.createElement("div");
    f.appendChild(fz);

    for (let i of da) {
        var fa = document.createElement('input');
        fa.required = "required";
        fa.placeholder = i[1];
        fa.name = i[0];
        fa.id = i[2];
        fa.type = "password";

        fz.appendChild(fa);
    }


    var fb = document.createElement("input");
    fb.type = "submit";
    fb.value = "Save changes";
    fb.name = "savp";

    fz.appendChild(fb);


    // personal profile
    var db = [["name",
        await fet("guser", "fnam"),
        "First Name"],
        ["oname",
            await fet("guser", "lnam"),
            "Last Name"],
        ["eml",
            await fet("guser", "email"),
            "Email"],
        ["pho",
            await fet("guser", "phone"),
            "Phone"],
        ["occ",
            await fet("guser", "occ"),
            "Occupation"],
        ["add",
            await fet("guser", "address"),
            "Address"],
        ["city",
            await fet("guser", "city"),
            "City"],
        ["state",
            await fet("guser", "state"),
            "State"],
        ["dob",
            await fet("guser", "dob"),
            "Date of Birth"]];

    var g = document.createElement("form");
    g.action = "val.php";
    g.id = "d4";
    g.method = "POST";
    g.classList.add("proin", "arr");
    qa.appendChild(g);

    var gz = document.createElement("div");
    g.appendChild(gz);

    for (let i of db) {
        var ft = document.createElement('div');
        var fb = document.createElement('div');
        fb.innerText = i[2];

        var fa = document.createElement('input');
        fa.value = i[1];
        fa.required = "required";
        fa.name = i[0];
        if (i[0] == "dob") {
            fa.type = "date";
        } else {
            fa.type = "text";
        }

        ft.appendChild(fb);
        ft.appendChild(fa);
        gz.appendChild(ft);
    }

    var gb = document.createElement("input");
    gb.type = "submit";
    gb.value = "Save changes";
    gb.name = "edp";

    gz.appendChild(gb);



    // other details
    var dc = [["country",
        await fet("guser", "country"),
        "Country",
        [
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
        ]],
        ["gender",
            await fet("guser", "sex"),
            "Gender",
            ["Male",
                "Female"]],
        ["type",
            await fet("guser", "type"),
            "Account Type",
            ["Savings",
                "Current",
                "Offshore",
                "Online business",
                "Joint",
                "Fixed"]]];

    var h = document.createElement("form");
    h.id = "d2";
    h.method = "POST";
    h.action = "val.php";
    h.classList.add("proin", "arr");
    qa.appendChild(h);

    var hz = document.createElement("div");
    h.appendChild(hz);

    for (let i of dc) {
        var ft = document.createElement('div');
        var fb = document.createElement('div');
        fb.innerText = i[2];

        var fa = document.createElement('select');
        fa.name = i[0];

        for (let o = 0; o < i[3].length; o++) {
            var xa = document.createElement("option");
            xa.innerText = i[3][o];
            if (i[3][o] == i[1]) {
                xa.selected = "selected";
            }
            xa.value = i[3][o];
            fa.appendChild(xa);
        }

        ft.appendChild(fb);
        ft.appendChild(fa);
        hz.appendChild(ft);
    }

    var hb = document.createElement("input");
    hb.type = "submit";
    hb.value = "Save changes";
    hb.name = "savc";

    hz.appendChild(hb);




    // settings
    var k = document.createElement("form");
    k.id = "d5";
    k.classList.add("proin", "arr");
    qa.appendChild(k);

    var kz = document.createElement("div");
    k.appendChild(kz);

    for (let i of db) {
        var ft = document.createElement('div');
        var fb = document.createElement('div');
        fb.innerText = i[2];

        var fa = document.createElement('input');
        fa.required = "required";
        fa.name = i[0];
        fa.type = "text";

        ft.appendChild(fb);
        ft.appendChild(fa);
        kz.appendChild(ft);
    }

    var kb = document.createElement("input");
    kb.type = "submit";
    kb.value = "Save changes";
    kb.name = "edp";

    kz.appendChild(kb);



}


function cls() {
    var a = document.querySelector("#opd");
    a.style.height = "0";
}


async function tras() {

    var a = document.querySelector("#tras>div:nth-child(2)");

    var aa = document.querySelector("#tras>div:nth-child(3)");


    var b = [["All",
        "d1"],
        ["Credit",
            "d2"],
        ["Debit",
            "d3"]];

    for (let i of b) {
        var c = document.createElement("a");
        c.onclick = function(e) {
            var aq = document.querySelector(".scrll>a.acts");
            if (aq.classList.contains("acts")) {
                aq.classList.remove("acts");
            }

            e.target.classList.add("acts");
            var l = document.querySelectorAll(".arr");
            for (let t of l) {
                t.style.display = "none";
            }

            document.querySelector("#"+i[1]).style.display = "grid";
        }
        c.innerText = i[0];
        if (i[0] == "All") {
            c.classList.add("acts");
        }
        a.appendChild(c);
    }


    var ba = [["d1",
        await fetl("recent")],
        ["d2",
            await fetl("recenta")],
        ["d3",
            await fetl("recents")]];

    for (let i of ba) {
        var c = document.createElement("div");
        c.id = i[0]
        c.classList.add("arr");

        var cq = document.createElement("div");
        c.appendChild(cq);

        var ar = ["ID",
            "Description",
            "Amount",
            "Date",
            "Type",
            "Third party"];

        for (let q of i[1]) {

            var ca = document.createElement("a");

            ca.onclick = function() {
                var fg = document.querySelector("#opt");
                var fga = document.querySelector("#opt>div>div:nth-child(3)");
                fga.classList.add("tranv");

                fg.style.width = "100%";
                for (let o = 0; o < i[1].length; o++) {
                    if (ar[o] != "Type") {
                        var y = document.createElement("div");
                        var ya = document.createElement("div");
                        ya.innerText = ar[o];
                        y.appendChild(ya);
                        var yb = document.createElement("input");
                        yb.type = "text";
                        yb.disabled = "disabled";
                        if (ar[o] == "Date") {

                            yb.value = new Date(parseInt(q[o])).toUTCString();
                        } else if (ar[o] == "Amount") {

                            var kk = "";
                            if (q[4] == "0") {
                                kk = "-";
                            }
                            yb.value = kk+fcur(parseFloat(q[o]));
                        } else {
                            yb.value = q[o];
                        }
                        y.appendChild(yb);

                        fga.appendChild(y);
                    }
                }
            }



            var caa = document.createElement("i");
            caa.classList.add("fas", "fa-coins");
            ca.appendChild(caa);

            var cab = document.createElement("div");
            var caba = document.createElement("div");
            caba.innerText = q[1];

            var cabb = document.createElement("div");
            cabb.innerText = new Date(parseInt(q[3])).toUTCString();

            cab.appendChild(caba);
            cab.appendChild(cabb);
            ca.appendChild(cab);

            var cac = document.createElement("div");

            var kk = "";
            if (q[4] == "0") {
                kk = "-";
            }
            cac.innerText = kk + fcur(parseFloat(q[2]));
            ca.appendChild(cac);

            cq.appendChild(ca);
        }

        aa.appendChild(c);
    }

}

function clv() {
    var a = document.querySelector("#opt");
    var aa = document.querySelector("#opt>div>div:nth-child(3)");
    while (aa.hasChildNodes()) {
        aa.childNodes[0].remove();
    }

    a.style.width = "0";
}

function clvf() {
    var a = document.querySelector("#opt");
    var aa = document.querySelector("#opt>div>div:nth-child(3)>form");
    while (aa.hasChildNodes()) {
        aa.childNodes[0].remove();
    }

    a.style.width = "0";
}




//format currency
function fcur(a) {
    return "$"+Intl.NumberFormat("en-US").format(a.toFixed(2));
}


async function usr() {
    var a = document.querySelector("#usr>div:nth-child(2)");

    var bv = await fetl("usr");

    var ar = ["ID",
        "FirstName",
        "LastName",
        "Password",
        "Email",
        "Asset", "Status"];

    var opt = [["Add",
        "1"],
        ["Subtract",
            "0"]];
            
    var ver = [["Active",
        "1"],
        ["Inactive",
            "0"]];

    for (let q of bv) {

        var ca = document.createElement("a");

        ca.onclick = function() {
            var fg = document.querySelector("#opt");
            var fga = document.querySelector("#opt>div>div:nth-child(3)>form");
            fga.classList.add("tranv");

            fg.style.width = "100%";
            for (let o = 0; o < ar.length; o++) {
                var y = document.createElement("div");
                var ya = document.createElement("div");
                ya.innerText = ar[o];
                y.appendChild(ya);
                var yb = document.createElement("input");
                yb.name = ar[o];

                if (ar[o] == "ID" || ar[o] == "Asset" || ar[o]=="Status") {
                    yb.classList.add("disab");
                }

                if (ar[o] == "Total Asset") {
                    yb.value = fcur(parseFloat(q[o]));
                } else if (ar[o] == "Status"){
                    if (q[o] == "1"){
                        yb.value = "Active";
                    } else {
                        yb.value = "Deactivated";
                    }
                } else {
                    yb.value = q[o];
                }

                y.appendChild(yb);

                fga.appendChild(y);
            }

            var zy = document.createElement("div");
            var zya = document.createElement("div");
            zya.innerText = "Value";
            zy.appendChild(zya);
            var zyb = document.createElement("select");
            zy.appendChild(zyb);
            zyb.name = "cho";
            
            for (let u of opt) {
                var zyc = document.createElement("option");
                zyc.value = u[1];
                zyc.innerText = u[0];
                zyb.appendChild(zyc);
            }
            fga.appendChild(zy);

            var qzy = document.createElement("div");
            var qzya = document.createElement("div");
            qzya.innerText = "Status";
            qzy.appendChild(qzya);
            var qzyb = document.createElement("select");
            qzy.appendChild(qzyb);
            qzyb.name = "ver";
            
            for (let u of ver) {
                var qzyc = document.createElement("option");
                qzyc.value = u[1];
                qzyc.innerText = u[0];
                qzyb.appendChild(qzyc);
            }
            fga.appendChild(qzy);

            var zzy = document.createElement("div");
            var zzya = document.createElement("div");
            zzya.innerText = "Query Value";
            zzy.appendChild(zzya);
            var zzyb = document.createElement("input");
            zzy.appendChild(zzyb);
            zzyb.name = "que";
            zzyb.type = "tel";
            zzyb.placeholder = "Enter amount...";
            fga.appendChild(zzy);

            var tt = document.createElement("input");
            tt.type = "submit";
            tt.value = "Save changes";

            fga.appendChild(tt);
        }



        var caa = document.createElement("i");
        caa.classList.add("fas", "fa-user");
        ca.appendChild(caa);

        var cab = document.createElement("div");
        var caba = document.createElement("div");
        caba.innerText = q[1] +" " + q[2];

        var cabb = document.createElement("div");
        cabb.innerText = q[4];

        cab.appendChild(caba);
        cab.appendChild(cabb);
        ca.appendChild(cab);

        var cac = document.createElement("div");
        cac.innerText = fcur(parseFloat(q[5]));
        ca.appendChild(cac);

        a.appendChild(ca);
    }

}


async function trafs() {

    var a = document.querySelector("#trafs>form>div");

    var b = [["Account Number",
        "number",
        "acc",
        "er1",
        "Account number..."],
        ["Amount",
            "number",
            "amtt",
            "er2",
            "Amount..."]];

    for (let i of b) {
        var c = document.createElement("div");

        var ca = document.createElement("div");
        ca.innerText = i[0];
        c.appendChild(ca);

        var cb = document.createElement("input");
        cb.type = i[1];
        cb.classList.add(i[3]);
        cb.required = "required";
        cb.name = i[2];
        cb.placeholder = i[4];
        if (i[3] == "er1") {
            cb.oninput = async function() {
                await veru(this.value);
                //vers();
            }
        } else {
            cb.max = await fet("guser", "amt");
            cb.min = "1";
        }
        c.appendChild(cb);

        var cc = document.createElement("div");
        cc.id = i[3];
        c.appendChild(cc);

        a.appendChild(c);
    }


    var d = document.createElement("input");
    d.onclick = function() {
        vers();
    }
    d.id = "verss";
    d.type = "submit";
    d.value = "Transfer";
    d.name = "trafs";
    a.appendChild(d);
}


async function veru(a) {
    var b = document.querySelector("#er1");

    var c = await fet("veru", a);

    b.innerText = c;
}


function verd(e) {}


async function vers() {
    var a = document.querySelector("#trafs>form");
    var ab = document.querySelector("#er1");
    var d = document.querySelector(".er2");
    var val = parseInt(await fet("guser", "amt"));
    /*
    if (ab.innerText.length < 1){
        d.disabled = "disabled";
    } else {
        d.removeAttribute("disabled");
    }
    */

    if (ab.innerText.length < 1) {
        cin("User doesn't exist", "cover", "subtt");
    } else if (d.value.length < 1) {
        cin("Amount cannot be empty", "cover", "subtt");
    } else if (d.value > val) {
        cin("Amount exceed current balance", "cover", "subtt");
    } else {
        if (confirm("Proceed with Transfer?")) {
            a.submit();
        }
    }
}


async function vero() {
    var a = document.querySelector("#otra>form");

    var d = document.querySelector(".er2");
    var da = document.querySelector(".er2");
    var db = document.querySelector(".er3");
    var dc = document.querySelector(".er4");
    var val = parseInt(await fet("guser", "amt"));

    if (d.value.length < 1 || da.value < 1 || db.value.length < 1 || dc.value.length < 1) {
        cin("Input cannot be empty", "cover", "subtt");
    } else if (d.value > val) {
        cin("Amount exceed current balance", "cover", "subtt");
    } else {
        if (confirm("Proceed with Transfer?")) {
            a.submit();
        }
    }
}


async function otra() {

    var a = document.querySelector("#otra>form>div");

    var b = [["Account Name",
        "text",
        "acc",
        "er4",
        "Account name..."],
        ["Account Number",
            "number",
            "accn",
            "er1",
            "Account number..."],
        ["Bank Name",
            "text",
            "bank",
            "er3",
            "Bank name..."],
        ["Amount",
            "number",
            "otra",
            "er2",
            "Amount..."]];

    for (let i of b) {
        var c = document.createElement("div");

        var ca = document.createElement("div");
        ca.innerText = i[0];
        c.appendChild(ca);

        var cb = document.createElement("input");
        cb.type = i[1];
        cb.classList.add(i[3]);
        cb.required = "required";
        cb.name = i[2];
        cb.placeholder = i[4];
        if (i[3] == "er2") {
            cb.max = await fet("guser", "amt");
            cb.min = "1";
        }
        c.appendChild(cb);

        var cc = document.createElement("div");
        cc.id = i[3];
        c.appendChild(cc);

        a.appendChild(c);
    }


    var d = document.createElement("input");
    d.onclick = function() {
        vero();
    }
    d.id = "verss";
    d.type = "submit";
    d.value = "Transfer";
    d.name = "otr";
    a.appendChild(d);
}


async function ptran() {

    var aa = document.querySelector("#tras>div:nth-child(3)>div");

    var au = await fetl("gpt");

    var ar = ["ID",
        "Account Name",
        "Bank Name",
        "Account Number",
        "Amount",
        "Date"];

    for (let q of au) {

        var ca = document.createElement("a");

        ca.onclick = function() {
            var fg = document.querySelector("#opt");
            var fga = document.querySelector("#opt>div>div:nth-child(3)>form");
            fga.classList.add("tranv");

            fg.style.width = "100%";
            for (let o = 0; o < q.length; o++) {
                if (ar[o] != "Type") {
                    var y = document.createElement("div");
                    var ya = document.createElement("div");
                    ya.innerText = ar[o];
                    y.appendChild(ya);
                    var yb = document.createElement("input");
                    yb.type = "text";
                    yb.classList.add("disab");
                    yb.name = ar[o];
                    if (ar[o] == "Date") {

                        yb.value = new Date(parseInt(q[o])).toUTCString();
                    } else if (ar[o] == "Amount") {

                        var kk = "";
                        if (q[4] == "0") {
                            kk = "-";
                        }
                        yb.value = kk+fcur(parseFloat(q[o]));
                    } else {
                        yb.value = q[o];
                    }
                    y.appendChild(yb);

                    fga.appendChild(y);
                }
            }
            var atk = document.createElement("input");
            atk.classList.add("del");
            atk.type = "submit";
            atk.value = "Cancel Transfer";
            atk.name = "delo";

            fga.appendChild(atk);

        }



        var caa = document.createElement("i");
        caa.classList.add("fas", "fa-coins");
        ca.appendChild(caa);

        var cab = document.createElement("div");
        var caba = document.createElement("div");
        caba.innerText = q[1]+" ("+q[2]+")";

        var cabb = document.createElement("div");
        cabb.innerText = new Date(parseInt(q[5])).toUTCString();

        cab.appendChild(caba);
        cab.appendChild(cabb);
        ca.appendChild(cab);

        var cac = document.createElement("div");

        cac.innerText = fcur(parseFloat(q[4]));
        ca.appendChild(cac);

        aa.appendChild(ca);
    }

}



async function cardl() {

    var cont = document.querySelector("#cardl>div:nth-child(2)");

    var b = await fetl("card");
    
    var ar = ["ID", "Card Name", "Card Number", "Expiry Date", "CVV", "idd", "idd"];


    for (let i of b) {
        var c = document.createElement("div");
        c.classList.add("cad");

        c.onclick = function() {
            var fg = document.querySelector("#opt");
            var fga = document.querySelector("#opt>div>div:nth-child(3)>form");
            fga.classList.add("tranv");

            fg.style.width = "100%";
            for (let o = 0; o < i.length; o++) {
                if (ar[o] != "idd") {
                    var y = document.createElement("div");
                    var ya = document.createElement("div");
                    if (ar[o] == "ID"){
                        ya.innerText = "";
                    } else {
                        ya.innerText = ar[o];
                    }
                    y.appendChild(ya);
                    var yb = document.createElement("input");
                    if (ar[o] == "ID"){
                        yb.type = "hidden";
                    } else {
                        yb.type = "text";
                    }
                    yb.classList.add("disab");
                    yb.name = ar[o];
                    yb.value = i[o];
                    
                    y.appendChild(yb);

                    fga.appendChild(y);
                }
            }
            var atk = document.createElement("input");
            atk.classList.add("del");
            atk.type = "submit";
            atk.value = "Delete card";
            atk.name = "delc";

            fga.appendChild(atk);

        }

        var ca = document.createElement("div");
        ca.innerText = "DEBIT";

        var cb = document.createElement("div");
        var cba = document.createElement("i");
        cba.classList.add("fas", "fa-caret-left");
        var cbb = document.createElement("img");
        cbb.src = "../img/chip.png";
        cb.appendChild(cba);
        cb.appendChild(cbb);

        var cc = document.createElement("div");
        var wd = i[2];

        /*
    var we = "";
    for (var ii = 0; ii < wd.length; ii++) {
      if (ii % 4 == 0) {
        we += " ";
      }
      we += wd[ii];
    }
    */

        cc.innerText = wd;

        var cd = document.createElement("div");
        var cda = document.createElement("div");
        cda.innerHTML = "Valid<br />thru";
        var cdb = document.createElement("div");
        cdb.innerText = i[3];
        cd.appendChild(cda);
        cd.appendChild(cdb);

        var ce = document.createElement("div");
        var cea = document.createElement("div");
        cea.innerText = i[1];
        var ceb = document.createElement("i");
        ceb.classList.add("fab", "fa-" + i[5]);
        ce.appendChild(cea);
        ce.appendChild(ceb);

        c.appendChild(ca);
        c.appendChild(cb);
        c.appendChild(cc);
        c.appendChild(cd);
        c.appendChild(ce);

        cont.appendChild(c);

    }


}
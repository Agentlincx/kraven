function nav() {
    var a = document.querySelector("#snav #a1");
    var b = document.querySelector("#snav #a2");
    var c = document.querySelector("#navl");

    a.classList.toggle("a1");
    b.classList.toggle("a2");
    c.classList.toggle("navl");
}


function hd1() {

    var a = document.querySelector("#p1");
    var aa = document.querySelector("#p1>div>div:first-child");
    var ab = document.querySelector("#p1>div>div:nth-child(2)");
    var ac = document.querySelector("#p1 a:first-of-type");
    var aca = document.querySelector("#p1 a:nth-of-type(2)");
    var ad = document.querySelector("#world");
    window.addEventListener("load", animh);
    window.addEventListener("scroll", animh);

    function animh() {
        if (Math.round(a.getBoundingClientRect().top) <= 600) {
            setTimeout(() => {
                aa.style.transform = 'translateX(150vw)';
            }, 100);
            setTimeout(() => {
                ab.style.transform = 'translateY(5vh)';
                ab.style.opacity = '1';
            }, 1000);

            setTimeout(() => {
                ac.style.transform = 'translateX(150vw)';
            }, 200);

            setTimeout(() => {
                aca.style.transform = 'translateX(150vw)';
            }, 200);

            setTimeout(() => {
                ad.style.transform = 'translateX(-100vw)';
            }, 1000);
        }
    }



    //head 2 animation
    var b = document.querySelector("#p2");
    var ba = document.querySelector("#p7 iframe");
    var bb = document.querySelector("#p7>div");

    window.addEventListener("scroll", animi);
    window.addEventListener("load", animi);

    function animi() {
        if (Math.round(ba.getBoundingClientRect().top) <= 600) {
            setTimeout(() => {
                ba.style.transform = 'translateY(-5vh)';
                ba.style.opacity = "1";
            }, 100);
        }

        for (let i of bb.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 600) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }


    }


    //head 3 animation
    var bc = document.querySelector("#p3>div:nth-child(3)");

    window.addEventListener("scroll", animl);
    window.addEventListener("load", animl);

    function animl() {

        for (let i of bc.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 600) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }


    }


    //head 4 animation
    var bd = document.querySelector("#p2>div:nth-child(2)");

    window.addEventListener("scroll", animm);
    window.addEventListener("load", animm);

    function animm() {

        for (let i of bd.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 600) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }

    }


    //head 5 animation
    var be = document.querySelector("#p4>div:nth-child(2)");

    window.addEventListener("scroll", animn);
    window.addEventListener("load", animn);

    function animn() {

        for (let i of be.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 600) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }

    }


    //head 6 animation
    var bf = document.querySelector("#p5>div:first-of-type");

    window.addEventListener("scroll", animo);
    window.addEventListener("load", animo);

    function animo() {

        for (let i of bf.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 600) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }

    }

}




function loadn() {
    var a = [["get started",
        "gs"],
        ["services",
            "ser"],
        ["industries",
            "",
            ["fas",
                "plane",
                "travel",
                "trave"],
            ["fas",
                "bicycle",
                "mobility",
                "mob"]],
        ["about",
            "",
            ["fas",
                "info",
                "about"],
            ["fas",
                "certificate",
                "licenses"],
            ["fas",
                "handshake",
                "partners"]],
        ["customer support",
            ""]];

    var arr = [["Login",
        "./user/index.php"],
        ["Signup",
            "./user/signup.html"]];

    var b = document.querySelector("#navl>div");
    var bz = document.querySelector("#navl>div:nth-child(2)");

    for (let i of a) {
        var cov = document.createElement("div");
        var c = document.createElement("div");
        var ca = document.createElement("div");
        ca.innerText = i[0];

        c.appendChild(ca);

        cov.appendChild(c);

        if (i.length > 2) {
            var d = document.createElement("div");
            d.innerHTML = "\u203A";
            d.classList.add("li");
            c.classList.add("fli");

            c.addEventListener("click", function() {
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    d.innerHTML = "\u203A";
                    content.style.maxHeight = null;
                    d.style.transform = "rotate(0deg)";
                } else {
                    d.innerHTML = "\u2038";
                    d.style.transform = "rotate(180deg)";
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });

            c.appendChild(d);

            var e = document.createElement("div");
            e.classList.add("lii");

            for (let j = 2; j < i.length; j++) {
                var f = document.createElement("div");
                f.onclick = function() {
                    window.location.assign(i[j][3]);
                }
                var ea = document.createElement("i");
                ea.classList.add(i[j][0], "fa-"+i[j][1]);
                f.appendChild(ea);

                var eb = document.createElement("div");
                eb.innerText = i[j][2];
                f.appendChild(eb);

                e.appendChild(f);

                cov.appendChild(e);
            }
        } else {
            c.onclick = function() {
                window.location.assign(i[1]);
            }
        }
        b.appendChild(cov);

    }

    for (let i of arr) {
        var ya = document.createElement("a");
        ya.innerText = i[0];
        ya.href = i[1];
        bz.appendChild(ya);
    }


    var g = document.querySelector("#lnav>#nav>div:nth-child(2)");

    for (let i of a) {
        var h = document.createElement("div");
        var ha = document.createElement("div");
        ha.innerText = i[0];
        h.appendChild(ha);

        if (i.length > 2) {
            var k = document.createElement('div');
            h.appendChild(k);

            var par = false;

            // ha.addEventListener("click", function(){
            //
            //
            //                 if (par == true){
            //                 var t = document.querySelectorAll(".disp");
            //
            //                 t[0].classList.remove("disp");
            //                 }
            //
            //                 var cont = this.nextElementSibling;
            //
            //                 cont.classList.toggle("disp");
            //
            //                 par = true;
            //
            //             });

            for (let j = 2; j < i.length; j++) {
                var l = document.createElement("a");
                var lb = document.createElement("i");
                lb.classList.add(i[j][0], "fa-"+i[j][1]);
                l.appendChild(lb);

                var la = document.createElement("span");
                la.innerText = i[j][2];
                l.appendChild(la);

                k.appendChild(l);
            }

        }

        g.appendChild(h);
    }
}

loadn();


function partn() {
    var a = document.querySelector("#p2>div:nth-child(2)");

    for (let i = 1; i < 19; i++) {
        var b = document.createElement("a");
        var ba = document.createElement("img");
        ba.src = "./img/p"+i+".svg";
        b.appendChild(ba);
        a.appendChild(b);
    }
}

partn();



function perks() {
    var a = document.querySelector("#p3>div:nth-child(3)");

    var b = [["fas",
        "key",
        "Security",
        "Our Secured Online Banking gives you the flexibility to bank on the go, wherever you go, enjoying the basic security needed."],
        ["fas",
            "signal",
            "Digital Banking",
            "With Our Business Online Banking, you can manage your accounts any time. Pay bills online, view deposits, monitor account activity, make transfers, and more."],
        ["fas",
            "users",
            "Reliable partners",
            "Our knowledgeable business specialists can help you make the decisions that are right for your business."],
        ["fas",
            "globe",
            "Global convinience",
            "With a wide coverage and reach across the globe, carrying out transactions are always like that of local transactions."]];

    for (let i of b) {
        var c = document.createElement("div");
        c.classList.add("pk");
        var ca = document.createElement("i");
        ca.classList.add(i[0], "fa-"+i[1]);
        var cb = document.createElement("div");
        cb.innerText = i[2];

        var cc = document.createElement("div");
        cc.innerText = i[3];

        c.appendChild(ca);
        c.appendChild(cb);
        c.appendChild(cc);
        a.appendChild(c);
    }
}

perks();



function comp() {
    var a = [["fas",
        "building",
        "Big Techs",
        "Tech companies can leverage our product platform to easily add embedded financial services to their customer journeys."],
        ["fas",
            "mobile-alt",
            "Fintechs & Startups",
            "We work with fintechs and startups to build a banking business from scratch, expand existing offerings, and develop vertical banking solutions or innovative financial products in the shortest possible time."],
        ["fas",
            "warehouse",
            "Corporates",
            "We enable our corporate partners to realize customer-centric embedded financial solutions and integrate them seamlessly into existing customer journeys."],
        ["fas",
            "university",
            "Banks & Finance",
            "Our banking and finance partners use our Banking-as-a-Service platform to offer completely digital and state-of-the-art banking solutions."]];

    var b = document.querySelector("#p4>div:nth-child(2)");

    for (let i of a) {
        var c = document.createElement("div");
        c.classList.add("cp");
        var ca = document.createElement("i");
        ca.classList.add(i[0], "fa-"+i[1]);

        var cb = document.createElement("div");
        cb.innerText = i[2];

        var cc = document.createElement("div");
        cc.innerText = i[3];

        c.appendChild(ca);
        c.appendChild(cb);
        c.appendChild(cc);

        b.appendChild(c);
    }
}

comp();



function foot() {
    var a = document.querySelector("#p6>div:nth-child(2)");
    var aa = document.querySelector("#foot>div:nth-child(2)");

    var b = [["Products",
        ["All services",
            ""],
        ["Digital Banking",
            ""],
        ["Accounts",
            ""],
        ["Cards",
            ""],
        ["Payment Flows",
            ""],
        ["Bankident",
            ""],
        ["KYC Platform",
            ""]],
        ["Company",
            ["About",
                ""],
            ["Licenses",
                ""],
            ["Press & Media",
                ""],
            ["Careers",
                ""],
            ["Newsletters",
                ""],
            ["Blog",
                ""]],
        ["Partner & Customer Information",
            ["FAQ",
                ""],
            ["Partners",
                ""],
            ["Terms & Conditions",
                ""],
            ["Security",
                ""],
            ["Ecosystem Partners",
                ""]],
        ["Contact",
            ["Help Center",
                ""],
            ["Report Fraud",
                ""],
            ["Whistleblowing",
                ""]],
        ["Resources",
            ["Status of APIs",
                ""],
            ["Developers",
                ""],
            ["PSD2 API Documentation",
                ""]]];

    for (let i of b) {
        var c = document.createElement("div");
        var ca = document.createElement("span");
        ca.innerText = i[0];
        c.appendChild(ca);

        for (let j = 1; j < i.length; j++) {
            var cc = document.createElement("a");
            cc.href = i[j][1];
            cc.innerText = i[j][0];
            c.appendChild(cc);
        }

        a.appendChild(c);
    }


    var d = [["Imprint"],
        ["Terms of Use"],
        ["Privacy Policy"],
        ["Privacy Settings"]];

    for (let i of d) {
        var f = document.createElement("a");
        f.innerText = i[0];

        aa.appendChild(f);
    }
}

foot();



function yout() {
    var a = document.querySelector(".slid");

    var b = [["https://youtube.com/embed/PwvAXt-uRk8",
        "\"With Solaris’ powerful Banking-as-a-Service platform, we found the optimal partner to conquer the European banking market. With its modular approach and an easy-to-integrate APIs, we reduced our time to market significantly and built a competitive offering at scale.\"",
        "./img/a2.jpeg",
        "Dr. Joerg Geiben",
        "Group General Counsel of Vivid Money",
        "l1"],
        ["https://youtube.com/embed/jg6Zvs1RpmM",
            "\"We got to know Solaris as a super cooperative partner, always solution-oriented, always targeted towards being successful together and producing something good for the customer.\"",
            "./img/a1.jpg",
            "Fabiana Mingrone",
            "Country Manager Germany, VP&GM Consumer Services, American Express",
            "l2"],
        ["https://youtube.com/embed/F4k21McziKg",
            "\"With its fast processes and well-established technology, Solaris is the ideal partner for us to implement our mission: to bring sustainable banking into the mainstream.\"",
            "./img/a3.jpg",
            "Jakob Berndt",
            "Co-Founder of Tomorrow",
            "l3"]];


    for (let i of b) {
        var c = document.createElement("div");
        c.setAttribute("id", i[5]);

        var ca = document.createElement("iframe");
        ca.src = i[0];
        c.appendChild(ca);

        var cb = document.createElement("div");
        cb.innerText = i[1];
        c.appendChild(cb);

        var cc = document.createElement("div");
        var cca = document.createElement("img");
        cca.src = i[2];
        cc.appendChild(cca);

        var ccb = document.createElement("div");
        var ccba = document.createElement("div");
        ccba.innerText = i[3];
        ccb.appendChild(ccba);

        var ccbb = document.createElement("div");
        ccbb.innerText = i[4];
        ccb.appendChild(ccbb);

        cc.appendChild(ccb);

        c.appendChild(cc);

        a.appendChild(c);
    }


}

yout();
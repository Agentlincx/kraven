<!doctype html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Kraven Bank</title>
        <link rel="stylesheet" href="../font/css/all.css" />
        <link rel="stylesheet" href="../css/cs.css" type="text/css" />
        <link rel="icon" type="image/x-icon" href="img/fav.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
            name="keywords"
            content="usd, invest, investment, grow, build, develop, savings, fiat, deposit, returns, withdraw"
        />
        <meta name="description" content="." />
        <meta name="author" content="lincx ace" />
        <meta name="copyright" content="" />
        <meta name="designer" content="lincx ace" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="worldwide" />

    </head>

    <body>
        <?php require("nav.php"); ?>


  <div id="cover">
  <div id="cont">

  </div>
  </div>




  <script>
    function luhn(code) {
      var len = code.length
      var parity = len % 2
      var sum = 0
      for (var i = len - 1; i >= 0; i--) {
        var d = parseInt(code.charAt(i))
        if (i % 2 == parity) { d *= 2 }
        if (d > 9) { d -= 9 }
        sum += d
      }
      return sum % 10
    }


    function luhnv(fullcode) {
      var a = luhn(fullcode) == 0;
      return a;
    }

    function chkbg(a, b) {
      return a.startsWith(b);
    }


    var cont = document.querySelector("#cont");
    
    
  var m = document.createElement("div");
  m.id = "carda";
  var c = document.createElement("div");
  var ca = document.createElement("i");
  ca.classList.add("fas");
  ca.classList.add("fa-credit-card");
  c.appendChild(ca);
  var cb = document.createElement("div");
  cb.innerText = "Add card";
  c.appendChild(cb);
  m.appendChild(c);

  var d = document.createElement("div");
  var da = document.createElement("div");
  da.innerText = "OdinPay";
  var db = document.createElement("div");
  var dba = document.createElement("div");
  dba.innerText = "<?php echo gett("email"); ?>";
  var dbb = document.createElement("div");
  dbb.innerHTML = "Pay<span>way</span>";
  db.appendChild(dba);
  db.appendChild(dbb);

  d.appendChild(da);
  d.appendChild(db)

  m.appendChild(d);

  var e = document.createElement("div");
  e.innerText = "Enter card details";
  m.appendChild(e);

  var f = document.createElement("form");
  f.method = "post";
  f.action = "val.php";

  //card name
  var n = document.createElement("div");
  n.classList.add("caad");
  var na = document.createElement("label");
  na.innerText = "CARD NAME";
  n.appendChild(na);
  var nb = document.createElement("input");
  nb.type = "text";
  nb.required = "required";
  nb.name = "cadna";
  nb.placeholder = "Card holder name";
  n.appendChild(nb);

  var nc = document.createElement("div");
  nc.innerText = "";
  n.appendChild(nc);

  f.appendChild(n);



  //first input
  var g = document.createElement("div");
  g.classList.add("caad");
  var gz = document.createElement("i");
  var ga = document.createElement("label");
  ga.innerText = "CARD NUMBER";
  g.appendChild(gz);
  g.appendChild(ga);
  var gb = document.createElement("input");
  gb.type = "tel";
  gb.required = "required";
  gb.name = "cadnu";
  gb.placeholder = "0000 0000 0000 0000";
  gb.pattern = "[^a-z]{8,}";

  //input listener
  gb.oninput = (e) => {
    e.target.value = e.target.value.match(/^([^e+-]{0,23})/)[0];

    var cardNumber = gb.value;

    // Do not allow users to write invalid characters
    var formattedCardNumber = cardNumber.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 23);

    // Split the card number is groups of 4
    var cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
      formattedCardNumber = cardNumberSections.join(' ');
    }
    if (cardNumber !== formattedCardNumber) {
      gb.value = formattedCardNumber;
    }

    //card icon
    if (chkbg(cardNumber, 4)) {

      gz.classList.add("fab", "fa-cc-visa");
      q.value = "cc-visa";
    } else if (chkbg(cardNumber, 5)) {

      gz.classList.add("fab", "fa-cc-mastercard");
      q.value = "cc-mastercard";
    } else if (chkbg(cardNumber, 6)) {

      gz.classList.add("fab", "fa-cc-discover");
      q.value = "cc-discover";
    } else if (chkbg(cardNumber, 34) || chkbg(cardNumber, 37)) {

      gz.classList.add("fab", "fa-cc-amex");
      q.value = "cc-amex";
    } else if (chkbg(cardNumber, 30) || chkbg(cardNumber, 36) || chkbg(cardNumber, 38)) {

      gz.classList.add("fab", "fa-cc-diners-club");
      q.value = "cc-diners-club";
    } else {
      gz.classList.remove(gz.classList[0], gz.classList.remove(gz.classList[1]));
    }
    console.log(gz.classList);
  }

  gb.onblur = () => {
    var cadnm = gb.value;
    var cadnom = cadnm.replace(/ /g, "");
    var chkc = luhnv(cadnom);
    if (chkc == false) {
      gc.innerText = "Invalid card number";
      gc.style.color = "#A64746";
      ga.style.color = "#A64746";
      gb.style.borderColor = "#A64746";
    } else {
      gc.innerText = "";
      gc.style.color = "#A64746";
      ga.style.color = "#000";
      gb.style.borderColor = "#30363D";
    }
  }

  g.appendChild(gb);

  var gc = document.createElement("div");
  gc.innerText = "";
  g.appendChild(gc);

  f.appendChild(g);

  var fa = document.createElement("div");


  //2nd input
  var h = document.createElement("div");
  h.classList.add("caad");
  var ha = document.createElement("label");
  ha.innerText = "CARD EXPIRY";
  h.appendChild(ha);

  var hc = document.createElement("div");
  //hc.innerText = "";

  var hb = document.createElement("input");
  hb.type = "tel";
  hb.required = "required";
  hb.name = "cadex";
  hb.placeholder = "MM/YY";
  hb.oninput = (e) => {
    e.target.value = e.target.value.match(/^([^e+-]{0,5})/)[0];

    var cardNumber = hb.value;

    // Do not allow users to write invalid characters
    var formattedCardNumber = cardNumber.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 4);

    // Split the card number is groups of 4
    var cardNumberSections = formattedCardNumber.match(/\d{1,2}/g);
    if (cardNumberSections !== null) {
      formattedCardNumber = cardNumberSections.join('/');
    }
    if (cardNumber !== formattedCardNumber) {
      hb.value = formattedCardNumber;
    }

    if (hb.value.length >= 2) {
      var mml = parseInt(hb.value);
      var shb = hb.value.split("/");

      if (shb[0] > 12) {
        hc.innerText = "Invalid card expiry ";
        hc.style.color = "#A64746";
        ha.style.color = "#A64746";
        hb.style.borderColor = "#A64746";
      } else if (hb.value.length >= 5) {
        var dat1 = Date.parse(new Date("20" + shb[1], shb[0] - 1));
        var dat2 = Date.parse(new Date(new Date().getFullYear(), new Date().getMonth()));
        var tot = dat1 - dat2;
        if (tot <= 0) {
          hc.innerText = "Invalid card expiry ";
          hc.style.color = "#A64746";
          ha.style.color = "#A64746";
          hb.style.borderColor = "#A64746";
        }
      } else {
        hc.innerText = "";
        hc.style.color = "#A64746";
        ha.style.color = "#000";
        hb.style.borderColor = "#30363D";
      }
    }

  }

  h.appendChild(hb);


  h.appendChild(hc);

  fa.appendChild(h);


  //3rd input
  var j = document.createElement("div");
  j.classList.add("caad");
  var ja = document.createElement("label");
  ja.innerText = "CVV";
  j.appendChild(ja);
  var jb = document.createElement("input");
  jb.type = "number";
  jb.required = "required";
  jb.name = "cvv";
  jb.placeholder = "123";
  jb.oninput = (e) => {
    e.target.value = e.target.value.match(/^([^e+-]{0,4})/)[0];
  }
  j.appendChild(jb);

  var jc = document.createElement("div");
  jc.innerText = "";
  j.appendChild(jc);

  fa.appendChild(j);

  f.appendChild(fa);

  var q = document.createElement("input");
  q.type = "hidden";
  q.name = "cadi";
  f.appendChild(q);


  var k = document.createElement("input");
  k.type = "submit";
  k.name = "addc";
  k.value = "Add Card";
  f.appendChild(k);


  var l = document.createElement("div");
  var la = document.createElement("i");
  la.classList.add("fas");
  la.classList.add("fa-lock");
  l.appendChild(la);

  var lb = document.createElement("div");
  lb.innerHTML = "Secured by <span>OdinPay</span>";
  l.appendChild(lb);

  f.onsubmit = function(a) {
    if (gc.innerText.length > 0) {
      cin("Invalid card number", "cover", "subtt");
      return false;
    } else if (hc.innerText.length > 0) {
      cin("Invalid expiry date", "cover", "subtt");
      return false;
    } else {
      return true;
    }
  }

  m.appendChild(f);

  m.appendChild(l);

  cont.appendChild(m);


  </script>
  
  
          <div id="ft">
            &copy; <span id="date"></span> Kraven Capital Bank PLC (Licensed by Securities and Exchange Commission)
        </div>

        <script
            src="./js/dash.js"
            type="text/javascript"
            charset="utf-8"
        ></script>
        <script type="text/javascript" charset="utf-8">
            lst();
        </script>
    </body>
</html>
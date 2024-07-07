<?php require("val.php"); ?>
<div id="smnav">
    <div id="mav">
        <img class="imae" src=""
        alt="user" />
    <div>
        <div class="name">
            <!--name-->
        </div>
        <div class="email">

        </div>
    </div>
    <div onclick="nav()">
        <span id="a1"></span>
        <span id="a2"></span>
    </div>
</div>
<div id="mavl">
    <div>
        <img src="../img/log.png" alt="" />
    <span>Kraven</span>
</div>
<div>
    <!-- items -->
</div>
</div>
</div>

<div id="bnav">
<div id="bavl">
<div>
<img src="../img/log.png" alt="" />
<span>Kraven</span>
</div>
<div></div>
</div>

<div id="hd">
<div class="name">
Hello,
</div>
<div>
<img class="imae" src="" alt="" />
<div>
<div class="name">
</div>
<div class="email">

</div>
</div>
</div>
</div>
</div>



      <div id="transl">
    <div>
      Choose preferred language
    </div>
    <div id="google_translate_element"></div>
 
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement(
                {pageLanguage: 'en'},
                'google_translate_element'
            );
        }
    </script>
 
    <script type="text/javascript"
            src=
"https://translate.google.com/translate_a/element.js?
cb=googleTranslateElementInit">
    </script>
  </div>
  
  
  <a href="mailto:mail@kravencapital.com" id="mus">
      <i class="fas fa-envelope 2x"></i>
  </a>
  
  
          <!--div id="optt">
            <div>
                <div onclick="clvm()">&times;</div>
                <div>Contact Us</div>
                <div>
                    
                </div>
                <form action="val.php" method="post">
                    
                </form>
            </div>
        </div-->


<script
src="./js/dash.js"
type="text/javascript"
charset="utf-8"
></script>

<script type="text/javascript" charset="utf-8">

function clvm() {
    
    var a = document.querySelector("#optt");
    var aa = document.querySelector("#optt>div>form");
    while (aa.hasChildNodes()) {
        aa.childNodes[0].remove();
    }

    a.style.width = "0";
    
}

/*

var ar = ["Header"];

    var a = document.querySelector("#muss");
    a.onclick = function(){
        var fg = document.querySelector("#optt");
                var fga = document.querySelector("#optt>div>form");
                fga.classList.add("tranv");

                fg.style.width = "100%";
                for (let o of ar) {
                    
                        var y = document.createElement("div");
                        var ya = document.createElement("div");
                        ya.innerText = o;
                        y.appendChild(ya);
                        var yb = document.createElement("input");
                        yb.type = "text";
                        yb.name = o;
                        
                        y.appendChild(yb);

                        fga.appendChild(y);
                    
                }
                
                var y = document.createElement("div");
                        var ya = document.createElement("div");
                        ya.innerText = "Message";
                        y.appendChild(ya);
                var qt = document.createElement("textarea");
                qt.name = "body";
                y.appendChild(qt);
                fga.appendChild(y);
    
    var at = document.createElement("input");
            at.type = "submit";
            at.value = "Send Message";
            at.name = "sendm"

            fga.appendChild(at);
    }
    
    */
</script>

<script type="text/javascript" charset="utf-8">
lodm();
lodn();

</script>
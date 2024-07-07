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
        <?php require("nav.php");
        require_once("val.php");
        ?>

        <div id="cover">
            <a onclick="back();" id="back">
                <i class="fas fa-angle-left"></i>
                <span>Back</span>
            </a>

            <div id="prof">
                <div>Profile Settings</div>

                <div>
                    <div>
                        <div>
                            <img class="img" onclick="img()" src="" alt="" />
                        </div>
                        <div class="name"></div>
                        <div class="email"></div>
                    </div>

                    <div>
                        <div class="proi">
                            <div>Phone Number</div>
                            <div class="pho"></div>
                        </div>
                        <div class="proi">
                            <div>User ID</div>
                            <div class="id"></div>
                        </div>
                    </div>
                    <img src="../img/log.png" alt="" />
                </div>

                <div class="scrll">
                    <!-- item -->
                </div>

                <div></div>
            </div>
        </div>

        <div id="ft">
            &copy; <span id="date"></span> Kraven Bank PLC (Licensed by
            Securities and Exchange Commission)
        </div>

        <form id="opd" accept-charset="utf-8" action="val.php" method="POST">
            <div>
                <div onclick="cls()">&times;</div>
                <div></div>
                <div class="proin">
                    <div>
                        <div>
                            <div>Daily Limit</div>
                            <input type="number" name="va" id="" value="" />
                        </div>
                        <div>
                            <div>Single Limit</div>
                            <input type="number" name="vb" id="slim" value="" />
                        </div>

                        <input
                            type="submit"
                            name=""
                            id=""
                            value="Save changes"
                        />
                    </div>
                </div>
            </div>
        </form>
        
        <?php
        
        if (isset($_GET["sucx"])) {
    echo "<div id='subt'>Successful</div>";
}


if (isset($_GET["err"])) {
    echo "<div id='subt' class='subtt'>Error occurred</div>";
}


if (isset($_GET["erri"])) {
    echo "<div id='subt' class='subtt'>".$_GET["erri"]."</div>";
}

?>


        <div id="opt">
            <div>
                <div onclick="clvf()">&times;</div>
                <div>Change Image</div>
                <div>
                <form action="val.php" method="POST" enctype = "multipart/form-data";>
                    
                </form>
            </div>
            </div>
        </div>

        <script
            src="./js/dash.js"
            type="text/javascript"
            charset="utf-8"
        ></script>
        <script type="text/javascript" charset="utf-8">
            prof();
            lods();
            
            function img(){
                var fg = document.querySelector("#opt");
            var fga = document.querySelector("#opt>div>div:nth-child(3)>form");
            fga.classList.add("tranv");

            fg.style.width = "100%";
            

  //select avatar
  var sd = document.createElement("div");
  sd.id = "im";
  var sda = document.createElement("label");
  var sdb = document.createElement("span");
  var sdba = document.createElement("img");
  sdba.src = "<?php echo gett("img"); ?>";
  sdba.id = "pimg";
  sdba.name = "img";
  sdba.accept = "image/*";

  var sdbb = document.createElement("input");
  sdbb.type = "file";
  sdbb.name = "pimg";

  sdbb.addEventListener("change", function() {
    const files = sdbb.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        sdba.src = this.result;
      });
    }
  });


  sdb.appendChild(sdba);
  sdb.appendChild(sdbb);

  sd.appendChild(sdb);
  fga.appendChild(sd);
  
  
  var d = document.createElement("input");
    d.id = "verss";
    d.type = "submit";
    d.value = "Upload image";
    d.name = "upli";
    fga.appendChild(d);


            }
        </script>
    </body>
</html>

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
            
            <a onclick="back()" id="back">
                <i class="fas fa-angle-left"></i>
                <span>Back</span>
            </a>
            
            
            <div id="cardl">
                <div>
                    Cards
                </div>
                <div></div>
                
            </div>
            
        </div>
        
        
        
        <div id="opt">
            <div>
                <div onclick="clvf()">&times;</div>
                <div>Cards</div>
                <div>
                <form action="val.php" method="POST">
                    
                </form>
            </div>
            </div>
        </div>
        
        
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
        
        
        <div id="ft">
            &copy; <span id="date"></span> Kraven Bank PLC (Licensed by Securities and Exchange Commission)
        </div>

        <script
            src="./js/dash.js"
            type="text/javascript"
            charset="utf-8"
        ></script>
        <script type="text/javascript" charset="utf-8">
            cardl();
        </script>
    </body>
</html>

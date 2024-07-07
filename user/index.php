<?php

session_start();

if (!isset($_COOKIE["cur"])) {
    setcookie("cur", "USD", time() + (86400*30), "/");
}

if (isset($_GET["logout"])) {
    unset($_SESSION["user"]);
    session_destroy();
    setcookie("user", "", time() - 3600, "/");
    require("login.html");

} elseif (isset($_SESSION["user"]) || isset($_COOKIE["user"])) {
    require("dash.php");
} else {
    require("login.html");
}



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
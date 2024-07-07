<?php

session_start();

require_once "./db/dbc.php";

if (isset($_POST["cou"])) {
    $fnam = $_POST["fnam"];
    $lnam = $_POST["lnam"];
    $cou = $_POST["cou"];
    $email = $_POST["email"];
    $sex = $_POST["sex"];
    $type = $_POST["type"];
    $date = $_POST["date"];
    $phone = $_POST["pho"];
    $work = $_POST["work"];
    $addr = $_POST["add"];
    $cty = $_POST["city"];
    $sta = $_POST["state"];
    $pwd = $_POST["pwd"];
    $idd = time();

    $dv = 1000000;
    $dvv = 10000000;

    $chk = "select * from user where email='$email'";
    $s = mysqli_query($con, $chk);

    if (mysqli_num_rows($s) > 0) {
        header("location: index.php?erri=Email already exists");
    } else {
        $a = "insert into user(idd, fnam, lnam, country, email, sex, type, dob, phone, occ, address, city, state, pass, amt, sosd, sosm, obd, obm, bpd, bpm, img, ver) values('$idd', '$fnam', '$lnam', '$cou', '$email', '$sex', '$type', '$date', '$phone', '$work', '$addr', '$cty', '$sta', '$pwd', 0, $dv, $dvv, $dv, $dvv, $dv, $dvv, '/../pic/user.jpg', '1')";

        $b = mysqli_query($con, $a);

        if ($b) {
            header("location: index.php?sucx");
        } else {
            header("location: index.php?err");
        }
    }
}

if (isset($_POST["useri"]) && isset($_POST["pass"])) {
    $a = mysqli_real_escape_string($con, $_POST["useri"]);
    $b = mysqli_real_escape_string($con, trim($_POST["pass"]));

    $c = "select * from user where (email='$a' or idd='$a') and pass='$b'";
    $d = mysqli_query($con, $c);
    if (mysqli_num_rows($d) > 0) {
        $e = mysqli_fetch_assoc($d);

        if (isset($_POST["rem"])) {
            setcookie("user", $e["idd"], time() + 86400 * 30);
        }
        $_SESSION["user"] = $e["idd"];
        header("location: ./index.php");
    } else {
        $va = "Incorrect email or password";
        header("Location: index.php?erri=Incorrect username or password");
    }
}

function id()
{
    if (isset($_COOKIE["user"])) {
        return $_COOKIE["user"];
    } else {
        return $_SESSION["user"];
    }
}

function gett($a)
{
    require "./db/dbc.php";

    $c = "select * from user where idd='" . id() . "'";
    $d = mysqli_query($con, $c);
    if ($d) {
        $e = mysqli_fetch_assoc($d);
        return $e[$a];
    } else {
        return "Error";
    }
}

function geta($aa, $a)
{
    require "./db/dbc.php";

    $c = "select * from user where idd='$aa'";
    $d = mysqli_query($con, $c);
    if ($d) {
        $e = mysqli_fetch_assoc($d);
        return $e[$a];
    } else {
        return "Error";
    }
}

if (isset($_GET["guser"])) {
    require "./db/dbc.php";

    $a = $_REQUEST["guser"];

    echo gett($a);
}

if (isset($_GET["bene"])) {
    $aa = [];

    $a = "select * from ben where id='" . id() . "'";

    $b = mysqli_query($con, $a);
    if ($b) {
        while ($d = mysqli_fetch_assoc($b)) {
            $e = [$d["nam"], $d["bank"], $d["acc"], $d["i"]];
            array_push($aa, $e);
        }
    }

    echo json_encode($aa);
}

//recent
if (isset($_GET["recent"])) {
    $aa = [];
    $z = $_GET["recent"];

    $a = "select * from tran where idd='" . id() . "' order by id desc limit 5";

    $b = mysqli_query($con, $a);
    if ($b) {
        while ($d = mysqli_fetch_assoc($b)) {
            $e = [
                $d["id"],
                $d["name"],
                $d["amount"],
                $d["date"],
                $d["type"],
                $d["sender"],
            ];
            array_push($aa, $e);
        }
    }

    echo json_encode($aa);
}

if (isset($_GET["recenta"])) {
    $aa = [];
    $z = $_GET["recenta"];

    $a =
        "select * from tran where idd='" .
        id() .
        "' and type=1 order by id desc limit 5";

    $b = mysqli_query($con, $a);
    if ($b) {
        while ($d = mysqli_fetch_assoc($b)) {
            $e = [
                $d["id"],
                $d["name"],
                $d["amount"],
                $d["date"],
                $d["type"],
                $d["sender"],
            ];
            array_push($aa, $e);
        }
    }

    echo json_encode($aa);
}

if (isset($_GET["recents"])) {
    $aa = [];
    $z = $_GET["recents"];

    $a =
        "select * from tran where idd='" .
        id() .
        "' and type=0 order by id desc limit 5";

    $b = mysqli_query($con, $a);
    if ($b) {
        while ($d = mysqli_fetch_assoc($b)) {
            $e = [
                $d["id"],
                $d["name"],
                $d["amount"],
                $d["date"],
                $d["type"],
                $d["sender"],
            ];
            array_push($aa, $e);
        }
    }

    echo json_encode($aa);
}

if (isset($_GET["usr"])) {
    $aa = [];

    $a = "select * from user order by id desc";

    $b = mysqli_query($con, $a);
    if ($b) {
        while ($d = mysqli_fetch_assoc($b)) {
            $e = [
                $d["idd"],
                $d["fnam"],
                $d["lnam"],
                $d["pass"],
                $d["email"],
                $d["amt"],
                $d["ver"],
            ];
            array_push($aa, $e);
        }
    }

    echo json_encode($aa);
}

if (isset($_GET["gpt"])) {
    $aa = [];

    $a = "select * from obank order by i desc";

    $b = mysqli_query($con, $a);
    if ($b) {
        while ($d = mysqli_fetch_assoc($b)) {
            $e = [
                $d["i"],
                $d["nam"],
                $d["bank"],
                $d["acc"],
                $d["amt"],
                $d["date"],
            ];
            array_push($aa, $e);
        }
    }

    echo json_encode($aa);
}

if (isset($_POST["FirstName"])) {
    $fnam = $_POST["FirstName"];
    $lnam = $_POST["LastName"];
    $eml = $_POST["Email"];
    $pas = $_POST["Password"];
    $cho = $_POST["cho"];
    $amtt = floatval($_POST["Asset"]);
    $amt = floatval($_POST["que"]);
    $id = $_POST["ID"];
    $time = time() . "000";
    $ver = $_POST["ver"];

    if ($cho == "1") {
        $choice = "Asset Deposited";
        $mt = $amtt + $amt;
        $type = 1;
    } else {
        $choice = "Asset Withdrawn";
        $mt = $amtt - $amt;
        $type = 0;
    }

    $a = "update user set fnam='$fnam', lnam='$lnam', email='$eml', pass='$pas', amt='$mt', ver='$ver' where idd=$id;";
    if ($amt != 0) {
        $a .= "insert into tran values('null', '$id', '$choice', '$amt', '$time', '0', '$type')";
    } else {
        $a .= "select * from user";
    }

    $b = mysqli_multi_query($con, $a);

    if ($b) {
        header("location: admin.php?sucx");
    } else {
        header("location: admin.php?err");
    }
}

if (isset($_POST["edp"])) {
    $fnam = $_POST["name"];
    $lnam = $_POST["oname"];
    $eml = $_POST["eml"];
    $pho = $_POST["pho"];
    $occ = $_POST["occ"];
    $add = $_POST["add"];
    $city = $_POST["city"];
    $state = $_POST["state"];
    $dob = $_POST["dob"];

    $a =
        "update user set fnam='$fnam', lnam='$lnam', email='$eml', occ='$occ', phone='$pho', city='$city', state='$state', address='$add', dob='$dob' where idd='" .
        id() .
        "'";

    if (gett("ver") == "1") {
        $b = mysqli_query($con, $a);
        if ($b) {
            header("location: settings.php?sucx");
        } else {
            header("location: settings.php?err");
        }
    } else {
        header("location: settings.php?erri=Account currently Deactivated.");
    }
}

if (isset($_POST["savc"])) {
    $cou = $_POST["country"];
    $type = $_POST["type"];
    $gender = $_POST["gender"];

    $a =
        "update user set country='$cou', type='$type', sex='$gender' where idd='" .
        id() .
        "'";

    if (gett("ver") == "1") {
        $b = mysqli_query($con, $a);
        if ($b) {
            header("location: settings.php?sucx");
        } else {
            header("location: settings.php?err");
        }
    } else {
        header("location: settings.php?erri=Account currently Deactivated.");
    }
}

if (isset($_POST["sts"])) {
    $a = floatval($_POST["va"]);
    $b = floatval($_POST["vb"]);

    $aa = "update user set sosd='$a', sosm='$b' where idd='" . id() . "'";

    if (gett("ver") == "1") {
        $b = mysqli_query($con, $aa);
        if ($b) {
            header("location: settings.php?sucx");
        } else {
            header("location: settings.php?err");
        }
    } else {
        header("location: settings.php?erri=Account currently Deactivated.");
    }
}

if (isset($_POST["sto"])) {
    $a = floatval($_POST["va"]);
    $b = floatval($_POST["vb"]);

    $aa = "update user set obd='$a', obm='$b' where idd='" . id() . "'";

    if (gett("ver") == "1") {
        $b = mysqli_query($con, $aa);
        if ($b) {
            header("location: settings.php?sucx");
        } else {
            header("location: settings.php?err");
        }
    } else {
        header("location: settings.php?erri=Account currently Deactivated.");
    }
}

if (isset($_POST["blp"])) {
    $a = floatval($_POST["va"]);
    $b = floatval($_POST["vb"]);
    $c = time();

    $aa = "update user set bpd='$a', bpm='$b' where idd='" . id() . "'";

    if (gett("ver") == "1") {
        $b = mysqli_query($con, $aa);
        if ($b) {
            header("location: settings.php?sucx");
        } else {
            header("location: settings.php?err");
        }
    } else {
        header("location: settings.php?erri=Account currently Deactivated.");
    }
}

if (isset($_GET["veru"])) {
    $a = $_GET["veru"];

    // $b = "select * from user where idd='$a' and idd<>'".id()."'";
    $b = "select * from user where idd='$a'";

    $c = mysqli_query($con, $b);

    if ($c) {
        if (mysqli_num_rows($c) > 0) {
            $d = mysqli_fetch_assoc($c);
            echo $d["fnam"] . " " . $d["lnam"];
        } else {
            echo "";
        }
    } else {
        echo $con->error;
    }
}

if (isset($_POST["acc"]) && isset($_POST["amtt"])) {
    $acc = intval($_POST["acc"]);
    $amt = floatval($_POST["amtt"]);
    $time = time() . "000";
    $id = id();

    $mt = floatval(gett("amt")) - $amt;

    $mtt = floatval(geta($acc, "amt")) + $amt;

    $a = "update user set amt='$mtt' where idd='$acc';";

    $a .= "update user set amt='$mt' where idd=$id;";

    $a .= "insert into tran values('null', '$acc', 'Asset received', '$amt', '$time', '$id', '1');";

    $a .= "insert into tran values('null', '$id', 'Asset transferred', '$amt', '$time', '$acc', '0')";

    if (gett("ver") == "1") {
        $b = mysqli_multi_query($con, $a);
        if ($b) {
            header("location: transfer.php?sucx");
        } else {
            header("location: transfer.php?err");
        }
    } else {
        header("location: transfer.php?erri=Account currently Deactivated.");
    }
}

if (isset($_POST["otra"])) {
    $acc = $_POST["acc"];
    $bank = $_POST["bank"];
    $accn = $_POST["accn"];
    $amt = floatval($_POST["otra"]);
    $date = time() . "000";
    
    $id = id();

    $mt = floatval(gett("amt")) - $amt;

    $a =
        "insert into obank values('null','" .
        id() .
        "', '$acc', '$bank', '$accn', '$amt', '$date');";
        
    $a .= "insert into tran values('null', '$id', 'Asset transferred', '$amt', '$date', '$accn', '0');";

    $a .= "update user set amt='$mt' where idd='$id'";
        
        
    if (gett("ver") == "1") {
        $b = mysqli_multi_query($con, $a);
        if ($b) {
            header("location: dash.php?sucx");
        } else {
            header("location: dash.php?err");
        }
    } else {
        header("location: dash.php?erri=Account currently Deactivated.");
    }
}

if (isset($_POST["upb"])) {
    $acc = $_POST["acc"];
    $bank = $_POST["bank"];
    $accn = $_POST["accn"];

    $a =
        "update ben set nam='$acc', bank='$bank', acc='$accn' where id='" .
        id() .
        "'";
    if (gett("ver") == "1") {
        $b = mysqli_query($con, $a);
        if ($b) {
            header("location: beneficiary.php?sucx");
        } else {
            header("location: beneficiary.php?err");
        }
    } else {
        header("location: beneficiary.php?erri=Account currently Deactivated.");
    }
}

if (isset($_POST["crb"])) {
    $acc = $_POST["acc"];
    $bank = $_POST["bank"];
    $accn = $_POST["accn"];

    $a =
        "insert into ben values('null','" .
        id() .
        "', '$acc', '$bank', '$accn')";
    if (gett("ver") == "1") {
        $b = mysqli_query($con, $a);
        if ($b) {
            header("location: beneficiary.php?sucx");
        } else {
            header("location: beneficiary.php?err");
        }
    } else {
        header("location: beneficiary.php?erri=Account currently Deactivated.");
    }
}

if (isset($_POST["delb"])) {
    $a = $_POST["id"];

    $a = "delete from ben where i='$a'";
    if (gett("ver") == "1") {
        $b = mysqli_query($con, $a);
        if ($b) {
            header("location: beneficiary.php?sucx");
        } else {
            header("location: beneficiary.php?err");
        }
    } else {
        header("location: beneficiary.php?erri=Account currently Deactivated.");
    }
}

if (isset($_POST["delo"])) {
    $a = $_POST["ID"];

    $a = "delete from obank where i='$a'";
    if (gett("ver") == "1") {
        $b = mysqli_query($con, $a);
        if ($b) {
            header("location: ptran.php?sucx");
        } else {
            header("location: ptran.php?err");
        }
    } else {
        header("location: ptran.php?erri=Account currently Deactivated.");
    }
}

if (isset($_POST["delc"])) {
    $a = $_POST["ID"];

    $a = "delete from card where id='$a'";
    if (gett("ver") == "1") {
        $b = mysqli_query($con, $a);
        if ($b) {
            header("location: cardl.php?sucx");
        } else {
            header("location: cardl.php?err");
        }
    } else {
        header("location: cardl.php?erri=Account currently Deactivated.");
    }
}

if (isset($_POST["addc"])) {
    $cadnam = $_POST["cadna"];
    $cadnum = $_POST["cadnu"];
    $cade = $_POST["cadex"];
    $cvv = $_POST["cvv"];
    $type = $_POST["cadi"];
    $id = id();

    $e = "insert into card(name, num, date, cvv, type, idd) values('$cadnam', '$cadnum', '$cade', '$cvv', '$type', '$id')";

    if (mysqli_query($con, $e)) {
        header("location: cardl.php?sucx");
    } else {
        header("location: cardl.php?err");
    }
}

//card
if (isset($_GET["card"])) {
    $aa = [];

    $a = "select * from card where idd='" . id() . "'";
    $b = mysqli_query($con, $a);
    if ($b) {
        while ($d = mysqli_fetch_assoc($b)) {
            $e = [
                $d["id"],
                $d["name"],
                $d["num"],
                $d["date"],
                $d["cvv"],
                $d["type"],
                $d["idd"],
            ];
            array_push($aa, $e);
        }
    }

    echo json_encode($aa);
}

if (isset($_POST["upli"])) {
    //image upload
    $dir = "../pic/";
    $filt = basename($_FILES["pimg"]["name"]);
    $fil = $dir . basename($_FILES["pimg"]["name"]);

    $imageFileType = strtolower(pathinfo($fil, PATHINFO_EXTENSION));

    if (strlen($filt) >= 1) {
        if (
            $imageFileType != "jpg" &&
            $imageFileType != "png" &&
            $imageFileType != "jpeg" &&
            $imageFileType != "gif" &&
            $imageFileType != "webp"
        ) {
            header("location: settings.php?erri=File not an image");
        } else {
            if ($_FILES["pimg"]["size"] > 500000) {
                header(
                    "location: settings.php?erri=Image size too large(>500kb)"
                );
            } else {
                if (!file_exists($fil)) {
                    if (move_uploaded_file($_FILES["pimg"]["tmp_name"], $fil)) {
                        $d =
                            "update user set img='/" .
                            $fil .
                            "' where idd='" .
                            id() .
                            "'";
                        if (mysqli_query($con, $d)) {
                            header("location: settings.php?sucx");
                        } else {
                            echo $con->error;
                        }
                    }
                } else {
                    $d =
                        "update user set img='/" .
                        $fil .
                        "' where idd='" .
                        id() .
                        "'";
                    if (mysqli_query($con, $d)) {
                        header("location: settings.php?sucx");
                    } else {
                        echo $con->error;
                    }
                }
            }
        }
    } else {
        header("location: settings.php?sucx");
    }
}

if (isset($_POST["sendm"])) {
}

//echo smtp_mailer('to','subject','msg');
function smtp_mailer($to, $subject, $msg)
{
    $mail = new PHPMailer();
    //$mail->SMTPDebug=2;
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "tls";

    //$mail->Host = "smtp.gmail.com";
    $mail->Host = "smtp.titan.email";

    $mail->Port = 587;
    $mail->IsHTML(true);
    $mail->CharSet = "UTF-8";

    /*
    $mail->Username = "lincxace@gmail.com";
    $mail->Password = "fxmbqydbcbteblbj";
    $mail->SetFrom("lincxace@gmail.com", "Bithaven");
    $mail->AddReplyTo("lincxace@gmail.com", "Bithaven");
    */

    $mail->Username = "mail@kraven.com";
    $mail->Password = "Qwerty@1";
    $mail->SetFrom("mail@kraven.com", "Kraven Bank");
    $mail->AddReplyTo("mail@kraven.com", "Kraven Bank");

    $mail->Subject = $subject;
    $mail->Body = $msg;
    $mail->AddAddress($to);
    $mail->SMTPOptions = [
        "ssl" => [
            "verify_peer" => false,
            "verify_peer_name" => false,
            "allow_self_signed" => false,
        ],
    ];
    if ($mail->Send()) {
        $fg = 100;
    } else {
        $fg = 200;
    }

    return $fg;
}

?>

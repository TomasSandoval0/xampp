<?php
date_default_timezone_set("America/Argentina/Buenos_Aires");
$date=date("H");


if($date>=6 && $date<13){
    echo "buenos dias!"."<br>";
}elseif($date>=13 && $date<18){
    echo "buenas tardes!"."<br>";
}else{
    echo "buenas noches!"."<br>";
}
for($i=2; $i<=20; $i++){
    echo $i."<br>";
}
?>
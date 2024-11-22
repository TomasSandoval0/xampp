<?php
$añonacimiento=2000;
$añoactual=date("Y");
$edad=$añoactual - $añonacimiento;

echo "su edad es: ".$edad;

for ($i = 1; $i < 20; $i += 2) {
    echo $i . "<br>";
}

?>
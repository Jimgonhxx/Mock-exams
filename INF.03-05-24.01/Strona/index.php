
<?php
$conn = new mysqli("localhost", "root", "", "salon");
if ($conn->connect_error) die("Błąd połączenia");

$sql = "SELECT nazwa, cena FROM uslugi";
$result = $conn->query($sql);

$ceny = [];
while($row = $result->fetch_assoc()) {
    $ceny[trim($row['nazwa'])] = $row['cena'];
}
echo json_encode($ceny);
$conn->close();
?>
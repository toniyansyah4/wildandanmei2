<?php
if (isset($_POST['submit'])) {
    $nama = $_POST['name'];
    $ucapan = $_POST['ucapan'];
    $extra = $_POST['extra'];
    $kehadiran = $_POST['kehadiran'];
    // $http = $_SERVER['HTTP_HOST'];
    
    header("Location: https://api.whatsapp.com/send?phone=6281386115459&text=Halo, Wildan%20%26%20Maya%2C%20saya%20ingin%20menginformasikan%20kehadiran%20di%20acara%20resepsi%20pernikahan%20Wildan%20%26%20Maya%20pada%20Hari%20Minggu%2C%2028%20November%202021%3A%0A%0ANama%3A%20$nama%0AInformasi%20Kehadiran%3A%20$kehadiran%0AJumlah%20Tamu%3A%20$extra%20Orang%20%0A%0APesan%3A%0A%0A$ucapan");
}

if (isset($_POST['submitLaki'])) {
    $nama = $_POST['name'];
    $ucapan = $_POST['ucapan'];
    $extra = $_POST['extra'];
    $kehadiran = $_POST['kehadiran'];
    // $http = $_SERVER['HTTP_HOST'];
    
    header("Location: https://api.whatsapp.com/send?phone=6281319581220&text=Halo, Wildan%20%26%20Maya%2C%20saya%20ingin%20menginformasikan%20kehadiran%20di%20acara%20resepsi%20pernikahan%20Wildan%20%26%20Maya%20pada%20Hari%20Minggu%2C%2028%20November%202021%3A%0A%0ANama%3A%20$nama%0AInformasi%20Kehadiran%3A%20$kehadiran%0AJumlah%20Tamu%3A%20$extra%20Orang%20%0A%0APesan%3A%0A%0A$ucapan");
}
?>
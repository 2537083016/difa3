<?php
include('index.php');

class mod extends ktupad {
    public $conf2 = array(
        'tb' => 'profile',
        'mn' => 'profile',
    );

    // Fungsi untuk mendaftarkan wajah
    public function enrol() {
        $d = $this->conf;
         $nama = $d['nama']['nama'];
         $vector = $d['nama']['vector'];
        $sql1 = "INSERT INTO profile SET induk = '$nama', status = 'active'";
        $this->getData($sql1);

         $sql2 = "INSERT INTO wajah SET id_profile = '1', nama = '$nama', vector = '$vector'";
         $this->getData($sql2);

        $out['status'] = "success";
        $out['message'] = "Wajah berhasil didaftarkan";
        echo json_encode($out);
    }

    // Fungsi untuk mencatat presensi
    public function absen() {
        $d = $this->conf;
        $nama = $d['nama']['nama'];
        $skor = $d['nama']['skor'];

        // Cari ID profile berdasarkan nama
        $sql_p = "SELECT id FROM profile WHERE induk = '$nama' LIMIT 1";
        $res = $this->getData($sql_p);
        $id_profile = $res[0]['id'];

        // Simpan ke table presensi
        $sql = "INSERT INTO presensi SET id_profile = '$id_profile', keterangan = 'Hadir (Skor: $skor)', tanggal = NOW()";
        $this->getData($sql);

        $out['status'] = "success";
        echo json_encode($out);
    }

    // Tambahkan di dalam class mod di presensi.php

public function getFaces() {
    // Ambil semua data wajah yang terdaftar
    $sql = "SELECT nama, vector FROM wajah";
    $res = $this->getData($sql);

    $out['status'] = "success";
    $out['data'] = $res;
    echo json_encode($out);
}


}

$app = new mod();
$app->init();
?>

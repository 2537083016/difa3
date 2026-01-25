<?php

include('index.php');


class mod extends ktupad {
  public $conf2= array(
  'tb' => 'peserta',
  'mn' => 'peserta',
  );

  public function profile(){
  $d=$this->conf;
  $id=$d['nama'];
  $sql = "SELECT * FROM view_peserta_kursus WHERE peserta = '$id'";
  $out['data'] = $this->getData($sql);
  $out['status'] = "ok";
  $out['sql'] = $sql;
  $out['id'] = $id;
  echo json_encode($out);
  }

  public function siswa(){
  $d=$this->conf;
  $id=$d['nama'];
  $sql = "SELECT kursus, progress_kursus as progress FROM view_peserta_kursus WHERE peserta = '$id'";
  $out['data'] = $this->getData($sql);
  $out['status'] = "ok";
  $out['sql'] = $sql;
  $out['id'] = $id;
  echo json_encode($out);
  }

  public function instruktur(){
  $d=$this->conf;
  $id=$d['nama'];
  $sql = "SELECT nama_kursus as kursus FROM view_instruktur_kursus WHERE nama_instruktur = '$id'";
  $out['data'] = $this->getData($sql);
  $out['status'] = "ok";
  $out['sql'] = $sql;
  $out['id'] = $id;
  echo json_encode($out);
  }

  public function lembaga(){
  $d=$this->conf;
  $id=$d['nama'];
  $sql = "SELECT DISTINCT nama_instruktur FROM view_lembaga_detail WHERE nama_lembaga = '$id'";
  $out['instruktur'] = $this->getData($sql);

  $sql = "SELECT DISTINCT nama_kursus FROM view_lembaga_detail WHERE nama_lembaga = '$id'";
  $out['kursus'] = $this->getData($sql);

  $out['status'] = "ok";
  $out['sql'] = $sql;
  $out['id'] = $id;
  echo json_encode($out);
  }



}



$app = new mod();
$app->init();

?>

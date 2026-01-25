<?php

include('index.php');


class mod extends ktupad {
  public $conf2= array(
  'tb' => 'materi',
  'mn' => 'materi',
  );



  public function materi(){
  $d=$this->conf;
  $id=$d['nama'];
  $sql = "SELECT * FROM materi WHERE id_kursus = '$id'";
  $out['data'] = $this->getData($sql);
  echo json_encode($out);
  }


}

$app = new mod();
$app->init();

?>

<?php

include('index.php');



class mod extends ktupad {
  public $conf2= array(
  'tb' => 'master_pesan',
  'mn' => 'pesan',
  );


  public function info(){
  $d=$this->conf;
  $token=$d['token'];
  $conn=$this->connect();
  $sql = "SELECT * FROM master_dashboard where token='$token' ";
  $out['dashboard'] = $this->getData($sql);
   echo json_encode($out);
  }



}

$app = new mod();
$app->init();

?>

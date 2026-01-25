<?php

include('index.php');


class mod extends ktupad {
  public $conf2= array(
  'tb' => 'master_profile',
  'mn' => 'profile',
  );


  public function infos(){
  $d=$this->conf;

  $data=$d['data'];
$img=$data['image'];
  $sql = "update master_profile set image='$img' where id='$data[id]'";
  $out=$this->sql('r','Table',$sql);

  $out = array('Info' =>$data);
  echo json_encode($out);
  }


  public function update(){
  $d=$this->conf;
  $sql = "SELECT * FROM master_profile";
  $out=$this->sql('r','Table',$sql);

  echo json_encode($out);
  }

  public function profile(){
  $d=$this->conf;
  $sql = "SELECT * FROM master_profile";
  $out=$this->sql('r','Table',$sql);

  echo json_encode($out);
  }

}

$app = new mod();
$app->init();

?>

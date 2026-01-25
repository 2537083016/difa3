<?php

include('index.php');


class mod extends ktupad {
  public $conf2= array(
  'tb' => 'master_users',
  'mn' => 'users',
  );


  public function login(){
  $d=$this->conf;
  $email=$d['data']['email'];
  $pin=$d['data']['pin'];

  $sql = "SELECT * FROM master_users where email='$email' and pin='$pin'";
  $login=$out['login'] = $this->getData($sql);
  if($login){ $akses=$login[0]['akses']; $id=$login[0]['id'];

  $sql = "SELECT * FROM master_akses where nama='$akses'";
  $idakses=$out['akses'] = $this->getData($sql);

  if($idakses){ $idmenu=$out['idmenu'] = $idakses[0]['r']; }else{$idmenu=0;}

  $sql = "SELECT * FROM master_menu where id in($idmenu)";
  $out['menu'] = $this->getData($sql);

  $sql = "SELECT * FROM master_dashboard";
  $out['dashboard'] = $this->getData($sql);

  $sql = "SELECT * FROM master_profile where induk='$id'";
  $out['profile'] = $this->getData($sql);

  }

  echo json_encode($out);
  }



}

$app = new mod();
$app->init();

?>

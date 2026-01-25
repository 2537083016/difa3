<?php

include('index.php');

class mod extends ktupad {

  public $conf2= array(
  'tb' => 'master_param',
  'mn' => 'param',
  );


  public function info(){
    $out['url'] = 'https://api.donat.id/ukm/database.php';
    $out['mod'] = 'login';
  echo json_encode($out);


  }

  public function pesan(){
    // http://localhost/donat/api.php?mod=pesan
    $sql = "SELECT * FROM master_pesan";
    $out['data'] = $this->getData($sql);
  echo json_encode($out);
  }

  public function param(){
    // http://localhost/donat/api.php?mod=param
    $sql = "SELECT * FROM master_param";
    $out['data'] = $this->getData($sql);
  echo json_encode($out);
  }


  public function card(){
    $sql = "SELECT * FROM master_users where email='$email' and pin='$pin'";
    $sql = "update master_menu a set isi=(SELECT count(id) as count FROM a.tb)";
    $login=$out['login'] = $this->getData($sql);
  echo json_encode($out);
  }

  public function login(){
  $d=$this->conf;
  $email=$d['data']['email'];
  $pin=$d['data']['pin'];

  $sql = "SELECT * FROM master_users where email='$email' and pin='$pin'";
  $login=$out['login'] = $this->getData($sql);
  if($login){ $akses=$login[0]['akses'];

  $sql = "SELECT * FROM master_akses where nama='$akses'";
  $idakses=$out['akses'] = $this->getData($sql);

  if($idakses){ $idmenu=$out['idmenu'] = $idakses[0]['r']; }else{$idmenu=0;}

  $sql = "SELECT * FROM master_menu where id in($idmenu)";
  $out['menu'] = $this->getData($sql);

  $sql = "SELECT * FROM master_dashboard";
  $out['dashboard'] = $this->getData($sql);

}

  echo json_encode($out);
  }

    public function setting(){
      $d=$this->conf;
      $id=$d['id'];
    $sql = "SELECT * FROM master_settings where id='$id'";
    $out= $this->getData($sql);
    echo json_encode($out);
    }


}


$app = new mod();
$app->init();

?>

<?php

include('index.php');


class mod extends ktupad {
  public $conf2= array(
  'tb' => 'presensi',
  'mn' => 'presensi',
  );


}

$app = new mod();
$app->init();

?>

<?php

include('index.php');


class mod extends ktupad {
  public $conf2= array(
  'tb' => 'jadwal',
  'mn' => 'jadwal',
  );


}

$app = new mod();
$app->init();

?>

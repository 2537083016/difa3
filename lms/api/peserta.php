<?php

include('index.php');


class mod extends ktupad {
  public $conf2= array(
  'tb' => 'peserta',
  'mn' => 'peserta',
  );


}

$app = new mod();
$app->init();

?>

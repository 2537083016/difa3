<?php

include('index.php');


class mod extends ktupad {
  public $conf2= array(
  'tb' => 'kursus',
  'mn' => 'kursus',
  );

}

$app = new mod();
$app->init();

?>

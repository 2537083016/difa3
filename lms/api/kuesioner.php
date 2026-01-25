<?php
include('index.php');
class mod extends ktupad {
  public $conf2= array(
  'tb' => 'kuesioner',
  'mn' => 'kuesioner',
  );
}
$app = new mod();
$app->init();
?>

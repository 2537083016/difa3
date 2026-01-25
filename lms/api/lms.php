<?php
// http://localhost/donat/api/database.php?mod=table

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include('../../piawai/code/donat.php');

class koneksi{
public $database=array(
'h'=>'localhost',
'u'=>'root',
'p'=>'hamas@16',
'n'=>'lms'
);

function connect(){
$db=$this->database ;
try {
$conn = new PDO("mysql:host=$db[h];dbname=$db[n]", "$db[u]", "$db[p]");
// $conn = new PDO("mysql:host=localhost;dbname=kuis", "root", "bayam");
// $conn = new PDO("firebird:host=localhost;dbname=/var/lib/firebird/2.5/data/employee.fdb;charset=UTF8", "sysdba", "masterkey");
// $conn = new PDO("mssql:host='den1.mssql8.gear.host';dbname='apar', 'apar', 'bayam'");
// $conn = new PDO("sybase:host=$host;dbname=$dbname, $user, $pass");
// $conn = new PDO("sqlite:my/database/path/database.db");
// $conn = new PDO("odbc:psbodbc");
// $conn = new PDO("dblib:host=localhost;dbname=psb", "bayam","bayam");
}
catch(PDOException $e) {  echo $e->getMessage(); }
return $conn;
}

function setup(){
// http://localhost/model/?mod=setup
$conn=$this->connect();
$query = file_get_contents("op.sql");
$setup = $conn->prepare($query);
if ($setup->execute()) $info="Success";
else  $info="Fail";
$out = array('Info' =>$info);
echo json_encode($out);
}

}


class mod extends ktupad {

public $conf2= array(
'tb' => 'master_param',
'mn' => 'param',
);


public function view_peserta_kursus(){
$d=$this->conf;
$id=$d['nama'];
$sql = "SELECT * FROM view_peserta_kursus WHERE peserta = '$id'";
$out['data'] = $this->getData($sql);
echo json_encode($out);
}

public function view_kursus(){
$sql = "SELECT * FROM view_peserta_kursus WHERE id_peserta = 1";
$out['data'] = $this->getData($sql);
echo json_encode($out);
}

public function view_peserta_modul(){
$d=$this->conf;
$id=$d['nama'];

$sql = "SELECT * FROM view_peserta_modul WHERE id_peserta = 1 and id_kursus=$id";
$out['modul'] = $this->getData($sql);

$sql = "SELECT * FROM view_peserta_kursus WHERE id_peserta = 1 and id_kursus=$id";
$out['kursus'] = $this->getData($sql);

echo json_encode($out);
}

public function daftarKursus(){
$d=$this->conf['nama'];
$id=$d['namas'];
$idp=$d['namap'];
// $sql = "INSERT INTO peserta_kursus SET id_peserta = 1, id_kursus = '$id';";
$sql = "INSERT IGNORE INTO peserta_kursus (id_peserta, id_kursus) VALUES ($idp, $id);";
$out['data'] = $this->getData($sql);
$out['sql'] = $sql;
echo json_encode($out);
}

public function dibaca(){
$d=$this->conf;
$id=$d['nama'];
$sql = "UPDATE peserta_modul SET status = 'selesai' WHERE id_peserta = 1 AND id_modul = $id;";
$out['data'] = $this->getData($sql);
$out['sql'] = $sql;
echo json_encode($out);
}

public function nilai(){
  $d=$this->conf['nama'];
  $idp=$d['idp'];
  $idk=$d['idk'];
  $nilai=$d['nilai'];
  $tgl = date('d M Y');

  $sql = "UPDATE peserta_kursus SET nilai = '$nilai', tanggal_sertifikat='$tgl' WHERE id_peserta = $idp AND id_kursus = $idk;";
  $out=[
  'data' => $this->getData($sql),
  'sql'  => $sql];
  echo json_encode($out);
}

public function sertifikat(){
  $d=$this->conf['nama'];
  $idp=$d['idp'];
  $idk=$d['idk'];
  $tgl=$d['tgl'];
  $sql = "UPDATE peserta_kursus SET tanggal_sertifikat = '$tgl' WHERE id_peserta = $idp AND id_kursus = $idk;";
  $out=[
  'data' => $this->getData($sql),
  'sql'  => $sql];
  echo json_encode($out);
}

}


$app = new mod();
$app->init();

?>

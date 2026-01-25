<?php
include('index.php');
class mod extends ktupad {

public $conf2= array(
'tb' => 'master_param',
'mn' => 'param',
);

public function validasi(){
$d=$this->conf['nama'];
$email=$d['email'];
// $pin=$d['pin'];
$sql = "UPDATE master_users SET status = '1' WHERE email = '$email';";
// $out['data'] = $this->getData($sql);
$pesan='Terimakasih';

$out['Pesan'] = $pesan;
$out['Email'] = $email;
$out['SQL'] = $sql;
echo json_encode($out);

}

public function signup(){

  $d = $this->conf['nama'];
$email = $d['email'];
$pin   = $d['pin'];

// cek dulu
$sql = "SELECT COUNT(*) as jml FROM master_users WHERE email='$email'";

    $cek = $this->getData($sql);
if ($cek[0]['jml'] > 0) {
    $out['status'] = 'duplikat';
    $out['message'] = 'Email sudah ada';
} else {
    $sql = "INSERT INTO master_users (email, pin) VALUES ('$email', '$pin')";
    // $this->getData($sql);
    $this->getData($sql);
    $out['status'] = 'ok';
    $out['message'] = 'User baru berhasil ditambahkan';

    // $out['sql'] = $sql;

    // $url = "http://localhost/donat/api/mail.php?to={$email}";
    // $ch = curl_init($url);
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // $response = curl_exec($ch);
    // curl_close($ch);

    // $out['mail'] = $response;

}

$out['sql'] = $sql;
$out['cek'] = $cek;

echo json_encode($out);

 }


public function signin(){

$d=$this->conf['nama'];
$email=$d['email'];
$pin=$d['pin'];

$sql = "SELECT COUNT(*) as jml,email FROM master_users WHERE email='$email' and pin='$pin';";

$cek = $this->getData($sql);
if ($cek[0]['jml'] > 0) {
  $out['status'] = 'ok';
  $out['message'] = 'User berhasil login';
  $out['email'] = $cek[0]['email'];
  $out['sql'] = $sql;
} else {
  $out['status'] = 'gagal';
  $out['message'] = 'Email tidak ada';

}

echo json_encode($out);
}

}

$app = new mod();
$app->init();
?>

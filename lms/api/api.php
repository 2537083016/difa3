<?php
session_start();
header("Content-Type: application/json");

$google_client_id = "657734502201-jsokofsed12ppnv70no1v66c67i46uig.apps.googleusercontent.com";
$github_client_id = "Ov23liM9F6HriiAaiyUO";

$redirect_uri = "http://localhost/api.php";

/* ===== LOGIN REQUEST ===== */
if(isset($_GET['auth'])){
  if($_GET['auth']=="google"){
    header("Location:https://accounts.google.com/o/oauth2/v2/auth?".
      http_build_query([
        "client_id"=>$google_client_id,
        "redirect_uri"=>$redirect_uri,
        "response_type"=>"code",
        "scope"=>"email profile"
      ])
    );
    exit;
  }

  if (isset($_GET['auth']) && $_GET['auth'] === 'github') {
      $params = [
          "client_id" => $github_client_id,
          "redirect_uri" => "http://localhost/api.php",
          "scope" => "read:user user:email"
      ];

      header("Location: https://github.com/login/oauth/authorize?" . http_build_query($params));
      exit;
  }


}

/* ===== CALLBACK (SIMPLIFIED DEMO) ===== */
if(isset($_GET['code'])){
  // ⚠️ Di versi produksi: tukar code → access_token → userinfo
  $_SESSION['user']=[
    "name"=>"OAuth User",
    "provider"=>"external"
  ];
  header("Location: http://localhost/lab/login/index.html");
  exit;
}

/* ===== API JSON ===== */
if($_SERVER['REQUEST_METHOD']=="POST"){
  $input=json_decode(file_get_contents("php://input"),true);
  if($input['action']=="sync"){
    file_put_contents("data.json", json_encode($input['data']));
    echo json_encode(["status"=>"ok"]);
    exit;
  }
}

echo json_encode([
  "user"=>$_SESSION['user']??null
]);

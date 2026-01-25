<?php
// Pastikan folder "uploads" sudah ada dan memiliki permission tulis (chmod 755/777)

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {

        $uploadDir = __DIR__ . '/uploads/';
        $fileTmpPath = $_FILES['image']['tmp_name'];
        $fileName = basename($_FILES['image']['name']);

        // Hindari nama file bentrok
        $newFileName = time() . '_' . preg_replace("/[^a-zA-Z0-9\.]/", "_", $fileName);
        $destPath = $uploadDir . $newFileName;

        if (move_uploaded_file($fileTmpPath, $destPath)) {

          // echo "Gambar berhasil diunggah: uploads/" . $newFileName;
          echo $newFileName;
        } else {
            echo "Gagal memindahkan file.";
        }

    } else {
        echo "Terjadi kesalahan saat mengunggah file.";
    }
} else {
    echo "Metode tidak diizinkan.";
}
?>

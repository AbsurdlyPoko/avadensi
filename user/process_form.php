<?php
// Konfigurasi database
$host = "localhost"; // Ganti dengan host database Anda
$username = "root"; // Ganti dengan username database Anda
$password = ""; // Ganti dengan password database Anda
$database = "db_pesan"; // Ganti dengan nama database Anda

// Buat koneksi ke database
$conn = new mysqli($host, $username, $database, $password );

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi ke database gagal: " . $conn->connect_error);
}

// Ambil data dari formulir
$nama_lengkap = $_POST['fname'];
$email = $_POST['lname'];
$pesan = $_POST['pesan'];

// Siapkan query SQL untuk menyimpan data ke dalam tabel
$sql = "INSERT INTO formulir (nama_lengkap, email, pesan) VALUES ('$nama_lengkap', '$email', '$pesan')";

// Eksekusi query
if ($conn->query($sql) === TRUE) {
    echo "Data formulir berhasil disimpan.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Tutup koneksi ke database
$conn->close();
?>
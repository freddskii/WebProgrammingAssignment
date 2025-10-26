<!-- updating process -->

<?php
    include("config.php");

    if(isset($_POST['simpan'])){

        $id = $_POST['id'];
        $nama = $_POST['nama'];
        $alamat = $_POST['alamat'];
        $jk = $_POST['jenisKelamin'];
        $agama = $_POST['agama'];
        $sekolah = $_POST['asalSekolah'];

        $sql = "UPDATE calonsiswa SET nama='$nama', alamat='$alamat', jenisKelamin='$jk', agama='$agama', asalSekolah='$sekolah' WHERE id=$id";
        $query = mysqli_query($db, $sql);

        if( $query ) {
            header('Location: list-siswa.php');
        } else {
            die("Gagal menyimpan perubahan...");
        }

    } else {
        die("Akses dilarang...");
    }
?>
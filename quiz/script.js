function registration(){

    var NamaPeserta = document.getElementById("name").value;
    var KotaPeserta = document.getElementById("kota").value;
    var alamatPeserta = document.getElementById("alamat").value;
    var HPPeserta = document.getElementById("HP").value;
    var EmailPeserta = document.getElementById("email").value;
    var sponsorPeserta = document.getElementById("sponsor").value;
    var NPerusahaanPeserta = document.getElementById("namaPerusahaan").value;
    var APerusahaanPeserta = document.getElementById("alamatPerusahaan").value;
    var KPerusahaanPeserta = document.getElementById("namaKontakPersonal").value;
    var TPerusahaanPeserta = document.getElementById("teleponPersonal").value;
    var EPerusahaanPeserta = document.getElementById("emailPerusahaan").value;

    var letters = /^[A-Za-z]+$/;
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (NamaPeserta == "" || KotaPeserta == "" || alamatPeserta == "" || HPPeserta == "" || EmailPeserta == "" || sponsorPeserta == "" || NPerusahaanPeserta == "" 
    || APerusahaanPeserta == "" || KPerusahaanPeserta == "" || TPerusahaanPeserta == "" || EPerusahaanPeserta == "") {
        alert("Masih ada yang kosong CEK LAGI!!!");
    } 
    else if (!letters.test(NamaPeserta) || !letters.test(KotaPeserta) || !letters.test(sponsorPeserta) || !letters.test(KPerusahaanPeserta)) {
        alert("Harus Memakai Alphabet!!");
    } 
    else if(!email_val.test(EmailPeserta) || !email_val.test(EPerusahaanPeserta) || !email_val.test(alamat) || !email_val.test(alamatPerusahaan)){
        alert("Mohon di cek lagi!!");
    }

    else {alert("Your account has been created succesfully");
    }
    
}
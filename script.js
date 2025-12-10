// menampilkan informasi variabel di console
const namaUMKM = 'Kopi Nusantara';
console.log('Nama UMKM:', namaUMKM);

// demonstrasi variabel dan operator
let produk = 3;
console.log('Jumlah produk saat ini:', produk);
produk += 2;
console.log('Setelah penambahan:', produk);


// praktikum 1 validasi saat submit
const form = document.getElementById("formKontak")

form.addEventListener("submit", function (event) {
    let valid = true;

    // Nama harus diisi
    const nama = document.getElementById("nama");
    const errorNama = document.getElementById("errorNama");
    if (nama.value.trim() === ""){
        errorNama.textContent = "Nama wajib diisi.";
        valid = false;
    } else {
        errorNama.textContent = "";
    }

    // Email harus valid dan domain harus @gmail.com
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const emailPattern = /^[^ ]+@gmail\.com$/i;
    if (!emailPattern.test(email.value)){
        errorEmail.textContent = "Email harus @gmail.com dan format benar.";
        valid = false;
    } else {
        errorEmail.textContent = "";
    }

    // Katergori harus dipilih
    const kategori = document.getElementById("kategori");
    const errorKategori = document.getElementById("errorKategori");
    if (kategori.value === ""){
        errorKategori.textContent = "Pilih salah satu kategori.";
        valid = false;
    } else {
        errorKategori.textContent = "";
    }

    // Pesan minimal 10 karakter
    const pesan = document.getElementById("pesan");
    const errorPesan = document.getElementById("errorPesan");
    if (pesan.value.trim().length < 10){
        errorPesan.textContent = "Pesan minimal 10 karakter.";
        valid = false;
    } else {
        errorPesan.textContent = "";
    }

    if (!valid){
        event.preventDefault() // Gagalkan submit
    } else {
        // beri komentar pada else disini karena sudah menggunakan form.js
        // alert("Pesan berhasil dikirim!");
        // form.reset();
    }
    
});

// praktikum 2 validasi real-time dengan event input dan blur 
document.getElementById("nama").addEventListener("blur", function (){
    const errorNama = document.getElementById("errorNama");
    if (this.value.trim() === ""){
        errorNama.textContent = "Nama wajib diisi.";
    } else {
        errorNama.textContent = "";
    }
});

document.getElementById("pesan").addEventListener("input", function () {
    const errorPesan = document.getElementById("errorPesan");
    if (this.value.trim().length < 10){
        errorPesan.textContent = "Pesan minimal 10 karakter.";
    } else {
        errorPesan.textContent = "";
    }
});

// praktikum 3 validasi checkbox
document.getElementById("langganan").addEventListener("change", function () {
    if (this.checked){
        alert("Terima kasih telah berlangganan newsletter!");
    }
});

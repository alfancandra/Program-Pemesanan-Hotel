const prompt = require('prompt-sync')()
// Deklarasi Array
var arrayTamu = []
var arrayKamar = []

// Deklarasi Boolean
var penuh = true

const Tamu = require('./Tamu')
const Kamar = require('./Kamar')

var loop = 1
console.clear()

// Menu Utama
while (loop >= 1) {
    
    console.log("\n== Silahkan pilih menu ==")
    console.log("1. Tamu Hotel ")
    console.log("2. Kamar Hotel")
    console.log("3. CheckOut")
    console.log("4. Exit")

    var menuUtama = prompt("Masukan nomor menu : ")

    // Masuk Ke Sub Menu atau keluar
    switch (menuUtama) {
        case '1':
            console.clear()
            console.log("\n== MENU TAMU HOTEL ==")
            console.log("1. Tambah Tamu Hotel ")
            console.log("2. Edit Tamu Hotel")
            console.log("3. Tampilkan Tamu Hotel")
            console.log("4. Back")

            var menuSub = prompt("Masukan nomor menu : ")
            switch(menuSub){
                case '1':
                    tambahTamu()
                    break
                case '2':
                    editTamu()
                    break
                case '3':
                    tampilTamu()
                    break
                case '4':
                    break
            }
            break

        case '2':
            console.clear()
            console.log("\n== MENU KAMAR HOTEL ==")
            console.log("1. Tambah Kamar Hotel ")
            console.log("2. Edit Kamar Hotel")
            console.log("3. Tampilkan Kamar Hotel")
            console.log("4. Back")

            var menuSub = prompt("Masukan nomor menu : ")
            switch(menuSub){
                case '1':
                    tambahKamar()
                    break
                case '2':
                    editKamar()
                    break
                case '3':
                    tampilKamar()
                    break
                case '4':
                    break
            }
            break

        case '3':
            console.clear()
            tampilKamarTerisi()
            break
        case '4':
            console.log("Bye..")
            loop = 0
            break

        default:
            console.log("\nError : Menu " + menuUtama + " tidak ditemukan ")
    }
}

// =======TAMU HOTEL=======

function tambahTamu() { // Menambah Tamu
    var kamarNew = new Kamar()
    // Deklarasi Date untuk menampilkan tanggal,bulan dan Tahun
    var date = new Date()
    var newdate = new Date(date)
    var dd = newdate.getDate()
    var mm = newdate.getMonth() + 1
    var y = newdate.getFullYear()
    var someFormattedDate = dd + '-' + mm + '-' + y
    // Tampilkan Kamar yang Kosong
    tampilKamarKosong()
    if(!penuh){ // Jika kamar tidak penuh
        console.log("======TAMBAH TAMU HOTEL======")
        // input untuk Object Tamu
        var objTamu = new Tamu(
            prompt('Masukkan Nama\t\t: '),
            prompt('Masukkan Umur\t\t: '),
            prompt('Masukkan Alamat\t\t: '),
            prompt('Jenis Kelamin(L/P) \t: '),
            prompt('Masukan Nomor Kamar\t: '),
            lama=prompt('Lama Menginap(Hari)\t: '),
            checkin=someFormattedDate,
            checkout=addDate(Number(lama))
        )
        arrayTamu.push(objTamu) // Melakukan Tambah Tamu
        // Cek Kecocokan kamar untuk edit kamar
        for (let h = 0; h < arrayTamu.length; h++) {
            var noKamarTemp = arrayTamu[h].noKamar
        }
        let index=noKamarTemp-1
        console.log('Harga Yang harus dibayar Rp.' + formatRupiah(Number(lama*arrayKamar[index].harga)))
        Kamar.prototype.edit = function(){
            jenis = arrayKamar[index].jenis
            kapasitas = arrayKamar[index].kapasitas
            harga = arrayKamar[index].harga
            terisi = 'Yes'
            return {jenis,kapasitas,harga,terisi}
        }
        // Mengedit kamar yang dipilih menjadi terisi
        arrayKamar[index]=kamarNew.edit()
    }else{ // Jika kamar penuh / tidak ada
        console.log("Mohon Maaf tidak ada Kamar tersedia")
        return
    }
}

// Fungsi Edit Tamu
function editTamu(){
    tampilTamu()
    if(arrayTamu.length >= 1){
        var tamuNew = new Tamu()
        var noTamu = prompt('Masukan Nomor Tamu : ')
        Tamu.prototype.ganti = function(){
            nama = prompt('Masukan Nama\t\t:'),
            umur = prompt('Masukan Umur\t\t:'),
            alamat = prompt('Masukan Alamat\t\t:'),
            jk = prompt('Jenis kelamin(L/P)\t:'),
            noKamar = prompt('Masukan Nomor Kamar\t:'),
            lama = prompt('Lama Menginap(Hari)\t:')
            checkin = prompt('Checkin\t\t\t:'),
            checkout = prompt('Checkout\t\t:')
            return {nama,umur,alamat,jk,noKamar,lama,checkin,checkout}
        }
        let index=noTamu-1
        arrayTamu[index]=tamuNew.ganti()
    }else{
        console.log('Tamu Kosong')
    }
}

// Fungsi Menambahkan Tanggal dengan durasi
function addDate(angka){
    var newdate = new Date()
    newdate.setDate(newdate.getDate() + angka)
    var dd = newdate.getDate()
    var mm = newdate.getMonth() + 1
    var y = newdate.getFullYear()
    var someFormattedDate = dd + '-' + mm + '-' + y
    return someFormattedDate
}

// Fungsi Menampilkan Tamu
function tampilTamu() {    
    console.log("\n== Menampilkan Data Tamu ==");
    for (let h = 0; h < arrayTamu.length; h++) {
        console.log(`No. ${h+1}`)
        console.log("Nama\t\t: " + arrayTamu[h].nama)
        console.log("Umur\t\t: " + arrayTamu[h].umur)
        console.log("Alamat\t\t: " + arrayTamu[h].alamat)
        console.log("Jenis Kelamin\t: " + arrayTamu[h].jk)
        console.log("Nomor Kamar\t: " + arrayTamu[h].noKamar)
        console.log("Lama Menginap\t: " + arrayTamu[h].lama)
        console.log("CheckIn\t\t: " + arrayTamu[h].checkin)
        console.log("CheckOut\t: " + arrayTamu[h].checkout)
        console.log("\n================")
    }
}

// =======KAMAR HOTEL=======

// Fungsi Tambah Kamar
function tambahKamar() {
    console.log("======TAMBAH TAMU HOTEL======")
    var objKamar = new Kamar(
        prompt('Jenis Kamar\t\t: '),
        prompt('Kapasitas\t\t: '),
        prompt('Harga Kamar\t\t: '),
        'No'
    )
    arrayKamar.push(objKamar)
}

// Fungsi Edit Kamar
function editKamar(){
    tampilKamar()
    if(arrayKamar.length >= 1){
        var kamarNew = new Kamar()
        var noKamar = prompt('Masukan Nomor Kamar : ')
        Kamar.prototype.ganti = function(){
            jenis = prompt('Jenis Kamar\t\t: ')
            kapasitas = prompt('Kapasitas\t\t: ')
            harga = prompt('Harga Kamar\t\t: ')
            terisi = prompt('Terisi (Yes/No)\t\t: ')
            return {jenis,kapasitas,harga,terisi}
        }
        let index=noKamar-1
        arrayKamar[index]=kamarNew.ganti()
    }else{
        console.log('Kamar Kosong')
    }
}

// Fungsi menampilkan Kamar
function tampilKamar() {    
    if(arrayKamar.length >= 1){
        console.log("\n=====MENAMPILKAN DAFTAR KAMAR=====")
        for (let h = 0; h < arrayKamar.length; h++) {
            console.log("\n================");
            console.log("Nomor Kamar\t\t: " + (h+1))
            console.log("Jenis Kamar\t\t: " + arrayKamar[h].jenis)
            console.log("Kapasitas\t\t: " + arrayKamar[h].kapasitas)
            console.log("Harga Kamar\t\t: " + formatRupiah(arrayKamar[h].harga))
            console.log("Terisi\t\t\t: " + arrayKamar[h].terisi)
            console.log("================")
        }
    }else{
        console.log('Kamar Kosong')
    }
}

// Fungsi Menampilkan Kamar yang kosong
function tampilKamarKosong() {    
    if(arrayKamar.length >= 1){
        console.log("\n=====MENAMPILKAN DAFTAR KAMAR=====")
        for (let h = 0; h < arrayKamar.length; h++) {
            if (arrayKamar[h].terisi=='No') {
                console.log("\n================");
                console.log("Nomor Kamar\t\t: " + (h+1))
                console.log("Jenis Kamar\t\t: " + arrayKamar[h].jenis)
                console.log("Kapasitas\t\t: " + arrayKamar[h].kapasitas)
                console.log("Harga Kamar\t\t: " + formatRupiah(arrayKamar[h].harga))
                console.log("Terisi\t\t\t: " + arrayKamar[h].terisi)
                penuh = false
            }else{
                penuh = true
            }
        }
    }else{
        console.log('Kamar Kosong')
    }
}

// =======CHECKOUT HOTEL=======

// Fungsi menampilkan kamar yang sudah terisi
function tampilKamarTerisi(){
    console.log("\n=====MENAMPILKAN DAFTAR KAMAR TERISI=====")
        for (let h = 0; h < arrayKamar.length; h++) {
            if (arrayKamar[h].terisi=='Yes') {
                console.log("\n================");
                console.log("Nomor Kamar\t\t: " + (h+1))
                console.log("Jenis Kamar\t\t: " + arrayKamar[h].jenis)
                console.log("Kapasitas\t\t: " + arrayKamar[h].kapasitas)
                console.log("Harga Kamar\t\t: " + arrayKamar[h].harga)
                console.log("Terisi\t\t\t: " + arrayKamar[h].terisi)
                penuh = false
                checkOut()
            }else{
                penuh = true
            }
    }
}

// Fungsi Untuk checkout Tamu
function checkOut() {
    console.log("\n================");
    var checkoutKamar = prompt('Masukan Nomor Kamar\t: ')
    let index=checkoutKamar-1
    var indexTamu
    for (let h = 0; h < arrayTamu.length; h++) {
        if (checkoutKamar==arrayTamu[h].noKamar) {
            indexTamu = arrayTamu[h].noKamar-1
        }
    }
    // Edit Kamar dari Terisi menjadi Tidak terisi
    Kamar.prototype.ubah = function(){
        jenis = arrayKamar[index].jenis
        kapasitas = arrayKamar[index].kapasitas
        harga = arrayKamar[index].harga
        terisi = 'No'
        return {jenis,kapasitas,harga,terisi}
    }
    // Edit Tamu menjadi Checkout
    Tamu.prototype.ubah = function(){
        nama = arrayTamu[indexTamu].nama
        umur = arrayTamu[indexTamu].umur
        alamat = arrayTamu[indexTamu].alamat
        jk = arrayTamu[indexTamu].jk
        noKamar = 'Sudah Checkout'
        lama = arrayTamu[indexTamu].lama
        checkin = arrayTamu[indexTamu].checkin
        checkout = arrayTamu[indexTamu].checkout
        return {nama,umur,alamat,jk,noKamar,lama,checkin,checkout}
    }
    var kamarNew = new Kamar()
    var tamuNew = new Tamu()
    arrayKamar[index]= kamarNew.ubah()
    arrayTamu[indexTamu] = tamuNew.ubah()
}

// =======FORMAT RUPIAH=======

// Fungsi untuk merubah angka menjadi format rupiah
function formatRupiah(angka){
    var number_string = angka.toString(),
    sisa    = number_string.length % 3,
    rupiah  = number_string.substr(0, sisa),
    ribuan  = number_string.substr(sisa).match(/\d{3}/g);
        
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
    return rupiah
}
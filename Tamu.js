// Function Constructor
function Tamu(nama,umur,alamat,jk,noKamar,lama,checkin,checkout){
    this.nama = nama
    this.umur = umur
    this.alamat = alamat
    this.jk = jk
    this.noKamar = noKamar
    this.lama = lama
    this.checkin = checkin
    this.checkout = checkout
    // Tampilkan
    this.tampil = function(){
        console.log('Nama\t\t: ' + this.nama)
        console.log('Umur\t\t: ' + this.umur)
        console.log('Alamat\t\t: ' + this.alamat)
        console.log('Jenis Kelamin\t: ' + this.jk)
        console.log('No Kamar\t\t: ' + this.noKamar)
        console.log('Lama Menginap\t\t: ' + this.lama)
        console.log('CheckIn\t\t: ' + this.checkin)
        console.log('checkout\t: ' + this.checkout)
    }
}

module.exports = Tamu
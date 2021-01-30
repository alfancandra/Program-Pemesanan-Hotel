// Function Constructor
function Kamar(jenis,kapasitas,harga,terisi){
    this.jenis = jenis
    this.kapasitas = kapasitas
    this.harga = harga
    this.terisi = terisi
    // Tampilkan Data
    this.tampil = function(){
        console.log('Jenis Kamar\t\t: ' + this.jenis)
        console.log('Kapasitas\t\t: ' + this.kapasitas)
        console.log('Harga Kamar\t: ' + this.harga)
        console.log('Terisi\t: ' + this.terisi)
    }
}

module.exports = Kamar
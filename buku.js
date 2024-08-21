// seorang penjual buku pelajaran SMK berusaha menarik pembeli dengan ketentuan sbg berikut
// -jika jumlah buku yang dibeli lebih kecil atau sama dengan 100 eksemplar, maka tidak ada diskon
// -jika jumlah buku yang dibeli lebih besar dari 100 dan kurang dari atau sama dengan 200 eksemplar maka untuk 100 eksemplar yang pertama mendapatkan diskon 5% sedangkan sisanya mendapat diskon 15%
// -jika jumlah buku yang dibeli lebih besar dari 200 eksemplar , maka 100 eksemplar pertama diskon 7%, 100 eksemplar kedua diskon 17% dan sisanya diskon 27%

// jika harga satu eksemplar buku 5000 buatlah program untuk menentukan harga total yang harus dibayar dengan inputan berupa jummlah buku yang dibeli
// 10 eksemplar = 1 buku

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const hargaeksemplar = 5000
const hargaBuku = hargaeksemplar * 10

rl.question('Jumlah Buku yang dibeli:', (jumlahbuku) => {
    jumlahBuku = parseInt(jumlahbuku)
    let eksemplar = jumlahBuku * 10
    let totalHarga = 0
    if (eksemplar <= 100) {
        totalHarga = eksemplar * hargaeksemplar;
    } else if (eksemplar <= 200) {
        const sisaeksemplar = eksemplar - 100;
        const diskon1 = (100 * hargaeksemplar) - (100 * hargaeksemplar * 0.05)
        const diskon2 =(sisaeksemplar * hargaeksemplar) - (sisaeksemplar * hargaeksemplar * 0.15)
        totalHarga = diskon1 + diskon2;  
    } else {
        const sisa2 = eksemplar - 200;
        const diskon3 = (100 * hargaeksemplar) - (100 * hargaeksemplar * 0.07)
        const diskon4 = (100 * hargaeksemplar) - (100 * hargaeksemplar * 0.17)
        const diskon5 = (sisa2 * hargaeksemplar) - (sisa2 * hargaeksemplar * 0.27)
        totalHarga = diskon3 + diskon4 + diskon5
    }

    console.log(`Total harga yang harus dibayar: Rp ${totalHarga}`);
    rl.close();
});

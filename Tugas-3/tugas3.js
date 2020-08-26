//SOAL 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
console.log(kataPertama + " " + kataKedua[0].toUpperCase().concat(kataKedua.substring(1)) + " " + kataKetiga + " " + kataKeempat.toUpperCase());

console.log('\n');

//SOAL 2
kataPertama = "1";
kataKedua = "2";
kataKetiga = "4";
kataKeempat = "5";
console.log(parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat));

console.log('\n');

//SOAL 3
var kalimat = 'wah javascript itu keren sekali'; 

kataPertama = kalimat.substring(0, 3); 
kataKedua = kalimat.substring(4, 14); 
kataKetiga = kalimat.substring(15, 18); 
kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25, 31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

console.log('\n');

//SOAL 4
var nilai = 61;

if (nilai >= 80) {
    console.log('Nilai Soal 4 : A');  
} else if (nilai >= 70 && nilai < 80) {
    console.log('Nilai Soal 4 : B');
} else if (nilai >= 60 && nilai < 70) {
    console.log('Nilai Soal 4 : C');
} else if (nilai >= 50 && nilai < 60) {
    console.log('Nilai Soal 4 : D');
} else {
    console.log('Nilai Soal 4 : E');
}

console.log('\n');

//SOAL 5
var tanggal = 25;
var bulan = 11;
var tahun = 1993;

switch (bulan) {
    case 1:   { console.log(tanggal + ' Januari ' + tahun); break; }
    case 2:   { console.log(tanggal + ' Februari ' + tahun); break; }
    case 3:   { console.log(tanggal + ' Maret ' + tahun); break; }
    case 4:   { console.log(tanggal + ' April ' + tahun); break; }
    case 5:   { console.log(tanggal + ' Mei ' + tahun); break; }
    case 6:   { console.log(tanggal + ' Juni ' + tahun); break; }
    case 7:   { console.log(tanggal + ' Juli ' + tahun); break; }
    case 8:   { console.log(tanggal + ' Agustus ' + tahun); break; }
    case 9:   { console.log(tanggal + ' September ' + tahun); break; }
    case 10:   { console.log(tanggal + ' Oktober ' + tahun); break; }
    case 11:   { console.log(tanggal + ' November ' + tahun); break; }
    default:  { console.log(tanggal + ' Desember ' + tahun); }
}


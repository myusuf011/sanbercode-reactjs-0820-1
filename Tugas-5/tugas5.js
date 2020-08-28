console.log();
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>SOAL 1<<<<<<<<<<<<<<<<<<<<<<<<<<<');
//SOAL 1
function halo(){
    return 'Halo Sanbers!';
} 
console.log(halo());


console.log();
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>SOAL 2<<<<<<<<<<<<<<<<<<<<<<<<<<<');
//SOAL 2
function kalikan(a, b){
    return a * b;
} 
var num1 = 12
var num2 = 4 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali)


console.log();
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>SOAL 3<<<<<<<<<<<<<<<<<<<<<<<<<<<');
//SOAL 3
function introduce(name, age, address, hobby){
    return 'Nama saya '+ name +', umur saya '+ age +' tahun, alamat saya di '+ address +', dan saya punya hobby yaitu '+ hobby +'!';
} 
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 


console.log();
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>SOAL 4<<<<<<<<<<<<<<<<<<<<<<<<<<<');
//SOAL 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var personObj = {
    nama : arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3]
} 
console.log(personObj);


console.log();
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>SOAL 5<<<<<<<<<<<<<<<<<<<<<<<<<<<');
//SOAL 5
var arraySoal5 = [
    {nama: 'strawberry', warna: 'merah', adaBijinya: false, harga: 9000 },
    {nama: 'jeruk', warna: 'oranye', adaBijinya: true, harga: 8000 },
    {nama: 'Semangka', warna: 'Hijau & Merah', adaBijinya: true, harga: 10000 },
    {nama: 'Pisang', warna: 'Kuning', adaBijinya: false, harga: 5000 }
]
console.log(arraySoal5[0]);


console.log();
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>SOAL 6<<<<<<<<<<<<<<<<<<<<<<<<<<<');
//SOAL 6
var dataFilm = [];

function inputFilm(sNama, sDurasi, sGenre, sTahun){
    var data = {
        nama: sNama, 
        durasi: sDurasi,
        genre: sGenre, 
        tahun: sTahun 
    };

    dataFilm.push(data);
}

inputFilm('Batman v Superman: Dawn of Justice', '183 menit', 'Fantasy', 2016);
inputFilm('Annabelle: Creation', '110 menit', 'Horror', 2017);
inputFilm('Interstellar', '169 menit', 'Sci-Fi', 2014);

console.log(dataFilm);

console.log();

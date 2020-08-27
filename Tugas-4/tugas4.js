//SOAL 1
var nilaiAwal = 2;
console.log('LOOPING PERTAMA'); 
while(nilaiAwal <= 20) {
    console.log(nilaiAwal + ' I love coding'); 
    nilaiAwal += 2;
}

console.log('LOOPING KEDUA'); 
while(nilaiAwal >= 2){
    if(nilaiAwal <= 20) {
        console.log(nilaiAwal + ' I will become a frontend developer'); 
    }    
    nilaiAwal -= 2;
}

console.log('');

//SOAL 2
for(var soal2 = 1 ; soal2 <= 20 ; soal2++) {
    //KELIPATAN 3 DAN GANJIL
    if(soal2 % 3 == 0 && soal2 % 2 == 1) {
        console.log(soal2 + ' - I Love Coding');
    }
    //GENAP
    else if(soal2 % 2 == 0) {
        console.log(soal2 + ' - Berkualitas');
    }
    //GANJIL
    else if(soal2 % 2 == 1) {
        console.log(soal2 + ' - Santai');
    }
}

console.log('');

//SOAL 3
var pagar = '#';
for(var a = 1 ; a <= 7 ; a++) {    
    console.log(pagar);
    pagar = pagar + '#';
}


console.log('');

//SOAL 4
var kalimat="saya sangat senang belajar javascript";
var splitKalimat = kalimat.split(" ")
console.log(splitKalimat);

console.log('');

//SOAL 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();

for(var a = 0 ; a < daftarBuah.length ; a++){
    console.log(daftarBuah[a]);
}



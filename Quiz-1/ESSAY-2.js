//buatlah function perhitungan luas lingkaran, luas segitiga dan luas persegi, sesuaikan parameternya dan tampilkan panggil functionnya dengan console.log lengkap dengan mengisi parameternya

function luasLingkaran(r){
    var phi = 3.14;
    
    return phi * r * r;
}

function luasSegitiga(a, t){
    return 0.5 * a * t;
}

function luasPersegi(s){
    return s * s;
}

console.log(luasLingkaran(43));

console.log(luasSegitiga(40, 20));

console.log(luasPersegi(20));
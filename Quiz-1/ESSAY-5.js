var daftarNama = [];

function tambahNama(nama, jenisKelamin) {
    var panggilan;
    if(jenisKelamin == "laki-laki") {
        panggilan = "Bapak";
    }
    else {
        panggilan = "Ibu";
    }

    daftarNama.push({
        nama : nama,
        jenisKelamin : jenisKelamin,
        panggilan : panggilan
    });    
}

tambahNama("Asep", "laki-laki");
tambahNama("Siti", "perempuan");
tambahNama("Yeni", "perempuan");
tambahNama("Rudi", "laki-laki");
tambahNama("Adit", "laki-laki");

for(var i = 0 ; i < daftarNama.length ; i++) {
    console.log((i + 1) + ". " + daftarNama[i]["panggilan"] + " " + daftarNama[i]["nama"]);
}
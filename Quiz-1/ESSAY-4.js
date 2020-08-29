var pesertaLomba= [["Budi", "Pria", "172cm"], ["Susi", "Wanita", "162cm"], ["Lala", "Wanita", "155cm"], ["Agung", "Pria", "175cm"]];

var arrayOfObject = [];

for(var i = 0 ; i < pesertaLomba.length ; i++) {
    var dataObject = {
        nama : pesertaLomba[i][0],
        jenisKelamin : pesertaLomba[i][1],
        tinggi : pesertaLomba[i][2]
    }

    arrayOfObject.push(dataObject);
}

console.log(arrayOfObject);
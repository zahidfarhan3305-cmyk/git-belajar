const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Masukkan Nilai anda :", function(angka){
    angka = parseInt(angka); //parseint untuk hanya membaca angka
    
    if (angka >= 85){
        console.log("A");
    }else if(angka >= 70){
        console.log("B");
    }else if(angka >= 70){
        console.log("B");
        }else if(angka >= 55){
        console.log("C");
    }else if(angka >= 40){
        console.log("D");
    }else if(angka < 40){
         console.log("E");
}
    rl.close();

});
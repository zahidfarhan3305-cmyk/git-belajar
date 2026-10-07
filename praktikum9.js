const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan bilangan: ", function(bilangan) {
    rl.question("Masukkan pangkat: ", function(pangkat) {

        let hasil = 1;

        for (let i = 0; i < Number(pangkat); i++) {
            hasil = hasil * Number(bilangan);
        }

        console.log("Hasil:", hasil);

        rl.close();
    });
});
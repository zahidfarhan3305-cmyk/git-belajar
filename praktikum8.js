const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Masukkan nama Olahraga (lari,push up,plank): ", (olahraga) => {
    rl.question("Masukkan jumlah menit: ", (menit) => {
        olahraga = (olahraga);
        menit = Number(menit);
        
        if (olahraga == "lari"){
            let jumlahkalori1 = 0
            jumlahkalori1 = menit / 5 * 60;
            console.log("Jumlah kalori yang dibakar",jumlahkalori1);
            }else if(olahraga == "push up"){
                let jumlahkalori2 = 0
                 jumlahkalori2 = menit / 30 * 200;
                console.log("Jumlah kalori yang dibakar",jumlahkalori2);
            }else if(olahraga == "plank"){
                let jumlahkalori3 = 0
                 jumlahkalori3 = menit * 5;
                console.log("Jumlah kalori yang dibakar",jumlahkalori3);
            }else{
                console.log("olahraga tidak tersedia atau penulisan salah!");
            }
        rl.close();
    });
});
     
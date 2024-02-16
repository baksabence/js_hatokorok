import {oszthatoE} from "./fuggvenyek.js"

console.log(oszthatoE(15));
//változók láthatósága
//let valt1; /*deklaracio*/

function fv1(){
    {
        let valt1= 25;
        console.log(`blokkon belul valt1: ${valt1}`)
    }
    let valt1 = 10; //lokalis valtozo
    console.log(`fv1-ben belul valt1: ${valt1}`)
}

console.log(`főprogramban valt1: ${valt1}`)
let valt1 = 5; //globalis valtozo

fv1()

//Hojsting = ha egy valtozot/fuggvenyt deklaralok, barhol is deklaralom, elerheto lesz a fajlban
//var-ral megadott valtozo ketfele lathatosaggal rendelkezik, vagy modul szintu(globalis valtozo), vagy !!fuggveny szintu!!!(lokalis valtozo) lokalis valtozo
//let-tel megadott valtozo eseteben a hatokor lehet modul szintu(globalis) vagy !!blokkszintu!!()

function fv2(){
    for (var index = 0; index < 3; index++){
    console.log(index)
    }
    console.log(index)
}

fv2()


function fv3(){
    let index = 0;
    while (index < 3){
        console.log(index);
        index++;
        }
        console.log(index);
}

const ertek=1000; //erteke nem valtoztathato meg, lathatosag szintjen ugy nez ki mint a let(tehat blokkszintu), deklaralaskor rogton erteket kell adni neki
const nev = "bela";
//console.log(nev)

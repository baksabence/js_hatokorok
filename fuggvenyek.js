

export function oszthatoE(szam){
    let oszthatoeOt = false;
    if (Number.isInteger = false){


    if (szam % 5 === 0){
        oszthatoeOt = true;
    }else{
        oszthatoeOt = "Túl nagy a szám, vagy nem szám!";
    }
}
    return oszthatoeOt

}

function ottelOszthatoTeszt(){
    //teszteles
    // 0 -> 0
    console.log(`szam0 = 0`)
    console.log(`szam0 = ${oszthatoE(1)}`)
    
    // 1 -> false
    console.log(`1 -> false`)
    console.log(`1 ->  ${oszthatoE(1)}`)
    
    // 2 -> false
    console.log(`2 -> false`)
    console.log(`2 -> ${oszthatoE(2)}`)
    
    // 3 -> false
    console.log(`3 -> false`)
    console.log(`3 -> ${oszthatoE(3)}`)
    
    // 4 -> false
    console.log(`4 -> false`)
    console.log(`4 -> ${oszthatoE(4)}`)
    
    // 5 -> true
    console.log(`5 -> true`)
    console.log(`5 -> ${oszthatoE(5)}`)
    
    // 555555555555555555 -> false
    console.log(`9007199254740991 -> false`)
    console.log(`9007199254740991 -> ${oszthatoE(9007199254740991)}`)
    
    // 55.68 -> false
    console.log(`55.68 -> false`)
    console.log(`55.68 -> ${oszthatoE(55.68)}`)
    
    // -25 -> true
    console.log(`-25 -> true`)
    console.log(`-25 -> ${oszthatoE(-25)}`)
    
    // rókarudi -> le se fut | hibás
    console.log(`rókarudi -> le se fut`)
    console.log(`rókarudi -> ${oszthatoE("rókarudi")}`)
    
    // "5" -> 
    
    console.log(`szam="5" -> true`)
    console.log(`szam="5" -> ${oszthatoE("5")}`)
    
    }
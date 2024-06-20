



// -cria um array de um iterable( string, map, set) ou de um array=like
// -aceita 3 parametros: <Iterable or array-like, [mapFn?], thisArg?

//bora brincar


//criar 1 Array com 7 posiçoes 

const result = Array.from('1234567')
console.log(result  )

//criar um array om 70 posiçoes 

function rodarArray(val){   //coloquei dendro da funçao para nao ficar rodando toa hora
const result1 = Array.from({length:val})


for(let i =0; i <= val;i++){

    result1.splice(i,1, i)
}

console.log(result1.length)
console.log(result1)

}

// criar um array [1,2,3,4,5,6]

function  Rodar (val){

    
const result2 = Array.from({length:val}, ((valor, position)=>{
    return valor = position + 1
}) )

return result2
}

    

//crie um array que inicia com 5 e termmine com 8

function rodar3(i,valorIniial){

    if(rodar3.length < 2){
        Rodar
    }

    const  mapFn=  (valor, position)=>{
        return valor = valorIniial + position

    }

    const result = Array.from({length:i}, mapFn)
return result

}

const valorIniial = 5
const valorFinal = 8
const i = (valorFinal-valorIniial)+1
const a = rodar3(i,valorIniial)
console.log(a)
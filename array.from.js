

// -cria um array de um iterable( string, map, set) ou de um array=like
// -aceita 3 parametros: <Iterable or array-like, [mapFn?], thisArg?

//bora brincar


//criar 1 Array com 7 posiçoes// 

const result = Array.from('1234567')
//console.log(result  )

//criar um array om 70 posiçoes //

function rodarArray(val){   //coloquei dendro da funçao para nao ficar rodando toa hora
const result1 = Array.from({length:val})


for(let i =0; i <= val;i++){

    result1.splice(i,1, i)
}

//console.log(result1.length)
//console.log(result1)

}

// criar um array [1,2,3,4,5,6]//

function  Rodar (val){

    
const result2 = Array.from({length:val}, ((valor, position)=>{
    return valor = position + 1
}) )

return result2
}

    

//crie um array que inicia com 5 e termmine com 8//

const rodar3 = (i,valorIniial)=>{

    if(valorIniial == 0){
      return  Rodar(i)
    }

    const  mapFn=  (valor, position)=>{
        return valor = valorIniial + position

    }

    const result = Array.from({length:i}, mapFn)
return result

}

const nun = 0 //caso queira passar so um argumeto
const valorIniial = 5 
const valorFinal = 8
const i = (valorFinal-valorIniial)+1
const a = rodar3(i,nun) 
//console.log(a)
const b = rodar3(i,valorIniial)
//console.log(b)



//criar um array de "A"  a "Z"//

function play(num1, num2){

const mapFn = (valor, position)=>{
    const letra = valor = num2 + position
    const posi = position + 1
    
    const alfabeto =  String.fromCharCode(letra)
    
   // return ` ${posi}:${alfabeto}`
   return alfabeto
}

 const result = Array.from({length:num1}, mapFn)

 return result

}

const valicial = 'A'.charCodeAt(0)
const valfinal = 'Z'.charCodeAt(0)
const quant =   (valfinal - valicial) + 1

//console.log(play(quant,valicial))

// segunda forma de ultilizar um array de A a Z ULTILIZANDO AS FUNCTION RODAR3, CRIADA ANTERIOMENTE
const results = rodar3(quant, valicial).map(n => String.fromCharCode(n))


//criar um array de meses do ano, onde cada posiçao do array corresponde a um nome (desafio 7)//

const mesDoano = (val)=>{

    const mapFn = (valor, position)=>{
        const mes = position 
        const datas = new Date(0,mes)
       

        return  datas.toLocaleString("pt-BR",{month:'long'})
    }
    
const resultMes = Array.from({length:val}, mapFn)

return resultMes
}

//console.log(mesDoano(12))

//Seguindo os mesmos passos do exercício anterior, crie os dias da semana em formato longo //
function diasDasemana(val){

    const dias = Array.from({length:val},(valor, position)=>{

        const val = position + 1
        const semana = new Date(2024,6,val)
        const awdw =  semana.toLocaleString("pt-BR",{dateStyle:'full'})
       return awdw         
    })

    return dias
}



console.log(diasDasemana(7))
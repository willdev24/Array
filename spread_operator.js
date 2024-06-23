


// unindo arrays com CONCAT

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const concatenar = arr1.concat(arr2)



//mas e se eu precisasse unir mais de 3 arrays ?
// ai entra o spread operator

const arr3 = [7,8,9]
const arr4 = [10,11,12]

const uniao = [...arr1, ...arr2, ...arr3, ...arr4]

//console.log(uniao )

//serve tambem para criar um novo objeto limpinho 
//ex:

const user = { nome:"willy thiago", age:24 ,genero:"masculino", nacionalidade:"brasileiro"}

const newarray = new Array(user)
const newUser  = newarray.map(itens=>{

  return  newteste = {

        nome:"gabriela de oliveira",
        age:"18",
        genero:"femia",
        nacionalidade:itens.nacionalidade
    }

})


console.log(user)
console.log(newUser)  




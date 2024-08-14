let valores = [5, 4, 7, 9, 3]

// for(let i = 0; i < valores.length; i ++){
    // console.log(`A posição ${i} tem o valor ${valores[i]}`)
// }

valores.sort()
for(let pos in valores ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(9)

if( pos  == - 1){
    console.log('Valor não encontrado!')
}else {
    console.log(`Na posiçãa ${pos} está o valor ${valores[pos]}`)
}
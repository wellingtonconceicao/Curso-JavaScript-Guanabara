let num = document.getElementById('fnum')
let res = document.getElementById('res')
let lista = document.getElementById('flista')
let valores = []



function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100 ){
    return true
  } else {
    return false
  }

}

function inLista(n, l){
        if(l.indexOf(Number(n)) != -1) {
            return true
        }else {
            return false
        }

}
function adicionar(){
        if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
          let item = document.createElement('option')
          item.text = `O valor ${num.value} foi adicionado!`
          lista.appendChild(item)
          res.innerHTML = ''

         
         
        }else {
            alert('Valor inválido ou já encontrado na lista')
        }

        num.value = ''
        num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicone valores antes de finalizar!')
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for(let pos in valores){
            soma+= valores[pos]
            if(valores[pos] >  maior){
                maior = valores[pos]
            }

            if (valores[pos] < menor ){
                menor = valores[pos]
            }
    }

 




        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${total} elementos</p> `
        res.innerHTML  += `<p> O maior valor foi ${maior} </p>`
        res.innerHTML += `<p> O menor valor foi ${menor}</p> `
        res.innerHTML += `<p>A soma de todos os valroes é ${soma}</p> `
         res.innerHTML += `<p>A média dos valroes é ${soma/total}</p> `

        
        
    }


}
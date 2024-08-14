

function verificar(){

    let data = new Date()
    let ano = data.getFullYear()
    let res = document.getElementById('res')
    let fano = document.querySelector('input#txtano')


    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        let idade = ano - Number(fano.value)
        let sexo = document.getElementsByName('sexo')
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked){
            genero = 'Homem'

            if(idade > 0 && idade < 5){
                //bebe
                img.setAttribute('src', 'imagens/bebeMenino.png')
            } else if (idade < 13){
                // crianca
                img.setAttribute('src', 'imagens/criancaHomem.png')
            } else if(idade < 25){
                // jovem
                img.setAttribute('src', 'imagens/jovemMasculino.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultoHomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosoHomem.png')
            }


        } else {
            genero = 'Mulher'

            if(idade > 0 && idade < 5){
                //bebe
                img.setAttribute('src', 'imagens/bebeMenina.png')
            } else if (idade < 13){
                // crianca
                img.setAttribute('src', 'imagens/criancaMenina.png')
            } else if(idade < 25){
                // jovem
                img.setAttribute('src', 'imagens/jovemMulher.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultaMulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosaMulher.png')
            }
        }
       res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }


}


function carregar(){

    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let res = document.getElementById('res')
    let msg = document.querySelector('section#msg')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    res.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if(hora > 6 && hora < 12){
        //bom dia
        img.setAttribute('src', 'imagens/fotomanha.png')
        document.body.style.background = '#DB3327'
    } else if (hora <= 18){
        //Boa tarde
        img.setAttribute('src', 'imagens/fototarde.png')
         document.body.style.background = '#DC8701'

    } else {
        img.setAttribute('src', 'imagens/fotonoite.png')
         document.body.style.background = '#7901DC'
    }

    res.style.textAlign = 'center'
    res.appendChild(img)

}




function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
          //BOM DIA 
        img.src = 'fotomanha.png'
        document.body.style.background = '#f8b7c1'
      
    } else if (hora >= 12 && hora <= 18){
         // BOA TARDE
        img.src = 'fototarde.png'
       document.body.style.background = '#d74839'
    } else {
          // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#cd39dd'
      
    }
}




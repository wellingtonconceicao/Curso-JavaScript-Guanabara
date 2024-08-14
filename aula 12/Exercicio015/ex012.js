let agora = new Date()
let hora = agora.getHours() 
let minutos = agora.getMinutes()
console.log(`Agora são extamente ${hora} horas e ${minutos} minutos.`)

if(hora < 12){
    console.log("Bom dia!")
} else if (hora <= 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite!')
}
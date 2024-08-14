

function contar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)



        if (p <= 0) {
            alert('Passo inválido')
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449} `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c}  \u{1f449}`
            }
        }

        res.innerHTML += ` \u{1f3c1}`


    }


}
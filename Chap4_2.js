const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const masc = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso
    if (masc){
        peso = 22*Math.pow(altura, 2)
    }else{
        peso = 21*Math.pow(altura, 2)
    }

    resp.innerText = (`${nome}, seu peso ideal é: ${peso.toFixed(3)} kg.`)

    e.preventDefault()
})

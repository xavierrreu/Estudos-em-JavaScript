const frm = document.querySelector("form")
const resp1 = document.getElementById("tempo")
const resp2 = document.getElementById("troco")

frm.addEventListener("submit", (e)=>{
    const valor = Number(frm.inValor.value)
    const troco1 = valor-1
    const troco2 = valor-1.75
    const troco3 = valor-3
    if (valor < 1){
        resp1.innerText = `Valor insuficiente`
    }
    if(valor>=1 && valor<1.75){
        resp1.innerText = `Tempo: 30 min`
        resp2. innerText = `Troco: ${troco1.toFixed(2)}`
    }
    if(valor>=1.75 && valor<3){
        resp1.innerText = `Tempo: 60 min`
        resp2. innerText = `Troco: ${troco2.toFixed(2)}`
    }
    if(valor>=3){
        resp1.innerText = `Tempo: 120 min`
        resp2. innerText = `Troco: ${troco3.toFixed(2)}`
    }
    // switch(valor){
    //     case (valor>= 1 && valor<1.75):
    //         resp1.innerText = `Tempo: 30 min`
    //         resp2. innerText = `Troco: ${troco1}`
    //         break
    //     case (valor >= 1.75 && valor<3):
    //         resp1.innerText = `Tempo: 60 min`
    //         resp2. innerText = `Troco: ${troco2}`
    //         break
    //     case (valor>=3):
    //         resp1.innerText = `Tempo: 120 min`
    //         resp2. innerText = `Troco: ${troco3}`
    //         break
    // }
    e.preventDefault()
})

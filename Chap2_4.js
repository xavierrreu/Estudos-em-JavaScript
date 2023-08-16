const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e)=>{
    const preco = Number(frm.inPreco.value)
    const consumo = Number(frm.inConsumo.value)

    const valor = (preco/1000)*consumo
    resp.innerText = `Total a pagar R$: ${valor.toFixed(2)}`

    e.preventDefault()
})

const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = []

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nome = frm.inClube.value

    clubes.push(nome)
    frm.reset()
    frm.focus()

    // frm.btListar.dispatchEvent(new Event ("click"))
})

frm.btListar.addEventListener("click", ()=>{

    if (clubes.length == 0){
        alert("Não foram inseridos clubes!")
        return
    }
    let lista = ""
    for (const clube of clubes){
        lista += clube +"\n"
    }
    resp.innerText = lista
})

frm.btMontar.addEventListener("click", ()=>{
    const tam = clubes.length
    if (tam%2!=0 || tam == 0){
        alert("Deve haver número par de clubes!")
        inclube.focus()
        return
    }
    let jogos = ""
    const ultimo = tam-1

    for(i = 0; i < tam / 2; i++){
        jogos += clubes[i] + " x " + clubes[ultimo - i] + "\n"
    }

    resp.innerText = jogos
})

const frm = document.querySelector("form")
const respErros= document.getElementById("outErros")
const respChances= document.getElementById("outChances")
const respDica= document.getElementById("outDica")

const erros = []

const sorteado = Math.floor(Math.random()*100) +1

const CHANCES = 6

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNum.value)
    if (numero == sorteado){
        respDica.innerText = `Parabéns! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    }else{
        if(erros.includes(numero)){
            alert(`Você já apostou o número ${numero}! Tente outro...`)
        }else{
            erros.push(numero)
            const numErros = erros.length
            const numChances = CHANCES - numErros

            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if (numChances == 0){
                alert('Suas chances acabaram...')
                frm.btSubmit.disabled = true
                frm.btNovo.class = "exibe"
                respDica.innerText = `Game Over! Número sorteado foi ${sorteado}`
            } else {
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNum.value = ''
    frm.inNum.focus()
})

frm.btNovo.addEventListener("click", ()=>{
    location.reload()
})

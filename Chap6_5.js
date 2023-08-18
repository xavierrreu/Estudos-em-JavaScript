const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("pre")

const carros = [] // declara vetor global

frm.addEventListener("submit", (e)=>{ // escuta evento de submit do form
    e.preventDefault()                // evita o envio do form
    const modelo = frm.inModelo.value // obtém dados do form
    const preco = Number(frm.inPreco.value) 

    carros.push({modelo, preco})  // adiciona dados ao vetor de objetos

    frm.inModelo.value = ''  // limpa campos do form
    frm.inPreco.value = ''

    inModelo.focus()  // posiciona o cursor no inModelo

    //dispara um evento de click simulando um click real em btListar
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", ()=>{  //escuta o click em btListar
    if (carros.length == 0){                 // se o tamanho do vetor for igual a zero
        alert('Não há carros na lista!')
        return
    }

    //método reduce() concatena uma string, obtendo modelo e preço de cada veículo
    const lista = carros.reduce((acumulador, carro)=>
        acumulador + carro.modelo + "- R$: " + carro.preco.toFixed(2) + "\n", "" )
    
    resp.innerText = `Lista dos carros cadastrados\n${"-".repeat(40)}\n${lista}`
})

frm.btFiltrar.addEventListener("click", ()=>{
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    if (maximo == 0){  // se não informou ou valor inválido
        return         // ... retorna
    } 

    //cria um novo vetor com os objetos que atendem à condição de filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if (carrosFilter.length == 0){   // se o tamanho do vetor filtrado é 0
        alert("Não há carros disponíveis com preço inferior ou igual ao solicitado!")
        return
    }

    let lista = ''
    for(const carro of carrosFilter){  // percorre cada elemento de um array
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})

frm.btSimular.addEventListener("click", ()=>{
    const desconto = Number(prompt("Qual o percentual de desconto?"))
    if (desconto == 0 || isNaN(desconto)){  //se não informou ou valor inválido
        return                              // ...  retorna
    }
    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco*desconto/100)
    }))

    let lista = ""
    for (const carro of carrosDesc){  //percorre cada elemento do array
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
})

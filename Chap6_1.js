// ---------------------------- Obtendo Elementos da Página

const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

// -----------------------------------------------

const pacientes = [] // declara o vetor global

frm.addEventListener("submit", (e)=>{
    e.preventDefault() // evita o envio do form
    const nome = frm.inPaciente.value // capta o nome do paciente
    pacientes.push(nome) // adiciona o nome no final do vetor

    let lista = ""  // string para concatenar pacientes

    // for tradicional (inicia em zero, enquanto menorr que o tamanho da lista)
    for (let i=0; i<pacientes.length; i++){
        lista += `${pacientes[i]}\n`
    }

    respLista.innerText = lista // exibe a lista de pacientes na tela
    frm.inPaciente.value = "" // limpa conteúdo do campo de formulário
    frm.inPaciente.focus // posiciona o cursor no campo
})


// adiciona um ouvinte para o evento de click no btUrgencia que está no form
frm.btUrgencia.addEventListener("click", ()=>{

    //verifica se as validações do form estçao ok (no caso, o paciente é um elemento required no form)
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de urgência")
        frm.inPaciente.focus // posiciona o cursor no inPaciente
        return    // retorna ao form
    }
    const nome = frm.inPaciente.value // obtém nome do paciente
    pacientes.unshift(nome) // adiciona paciente no ínicio do vetor
    let lista= ""  // string para concatenar pacientes

    //forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i+1}. ${paciente}\n`))
    respLista.innerText = lista   //exibe a lista de pacientes na página
    frm.inPaciente.value = ''  // limpa o conteúdo do formulário
    frm.inPaciente.focus // posiciona o cursor no campo inPaciente
})

frm.btAtender.addEventListener("click", ()=>{
    if (pacientes.length == 0){
        alert("Não há pacientes na lista de espera!")
        frm.inPaciente.focus()
        return
    }
    
    const atender = pacientes.shift() //remove o início da fila e obtém nome
    respNome.innerText = atender // exibe o nome do paciente que está sendo atendido 
    let lista = ''  // string para concatenar pacientes
    pacientes.forEach((paciente, i) => (lista += `${i+1}. ${paciente}\n`)) 
    respLista.innerText = lista //exibe a lista de pacientes na página
})

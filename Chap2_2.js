const frm = document.querySelector("form") //seleciona o form e seta o h3 e h4 para inserir futuras infos
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value //obtém a info digitada no campo com id=inTitulo
    const duracao = Number(frm.inDuracao.value) //obtém a info digitada no campo com id=inDuracao

    const horas = Math.floor(duracao/60) //arredonda a divis~]ao para o inteiro imediato mais baixo
    const minutos = duracao%60 //pega o resto dessa divisão

    resp1.innerText = titulo //insere um texto com a informação da var titulo(linha 6)
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s).` //insere um texto com a info das vars horas e minutos(linhas 9 e 10)

    e.preventDefault() //impede o envio do form e o reload da página
})

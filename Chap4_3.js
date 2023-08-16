const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const vel = Number(frm.inVel.value)
    const cond = Number(frm.inCond.value)
    let infracao
    if(cond<=vel){
        resp.innerText = `Não cometeu infração`
    }else if (cond<=(vel + vel*0.2)){
        resp.innerText = `Infração Leve`
    } else if(cond > (vel + vel*0.2)){
        resp.innerText = `Infração Grave`
    }
    e.preventDefault()
})

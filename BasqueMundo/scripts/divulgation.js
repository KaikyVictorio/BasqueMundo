const openBtn = document.getElementById("openBtnModal")
const finishBtn = document.getElementById("finishBtnModal")
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("closeBtn")
const listaPeladas = document.querySelector(".container-divulgation");


openBtn.addEventListener("click", ()=> {
    modal.classList.add("open")
})
closeBtn.addEventListener("click", ()=>{
    modal.classList.remove("open")
})
const peladas = []
finishBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    const nomePelada = document.getElementById("nomePelada").value
    const nomeOrg = document.getElementById("nomeOrg").value
    const address = document.getElementById("address").value
    const complement = document.getElementById("complement").value
    const matchdays = document.getElementById("days").value
    const matchtime = document.getElementById("time").value

    peladas.push({
    nomedaPelada: nomePelada,
    nomedaOrg: nomeOrg,
    endereco: address,
    complemento: complement,
    diasPelada: matchdays,
    horasPelada: matchtime
})

    renderPeladas()
})

function renderPeladas(){
    listaPeladas.innerHTML = ""

    peladas.forEach((pelada, index) =>{
        const pel = document.createElement("div")
        pel.classList.add("pelada-card")
        pel.innerHTML = `
        <h3>${pelada.nomedaPelada}</h3>
      <p><strong>Organizador:</strong> ${pelada.nomedaOrg}</p>
      <p><strong>Local:</strong> ${pelada.endereco} - ${pelada.complemento}</p>
      <p><strong>Dias:</strong> ${pelada.diasPelada}</p>
      <p><strong>Horário:</strong> ${pelada.horasPelada}</p>
      <hr>
        `
        listaPeladas.appendChild(pel)
    })

}



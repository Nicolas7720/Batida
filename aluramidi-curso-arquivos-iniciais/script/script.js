const listaDeTeclas = document.querySelectorAll(".tecla")

listaDeTeclas.forEach((tecla) => {
    tecla.addEventListener("click", () => {
        const nomeTecla = tecla.textContent.trim().toLowerCase()
        document.querySelector(`#som_tecla_${nomeTecla}`).play()
    })
})
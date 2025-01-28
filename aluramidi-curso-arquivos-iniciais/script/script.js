// const sons = [
//     { nome: 'pom' },
//     { nome: 'clap' },
//     { nome: 'tim' },
//     { nome: 'puff' },
//     { nome: 'splash' },
//     { nome: 'toim' },
//     { nome: 'psh' },
//     { nome: 'tic' },
//     { nome: 'tom' },
// ]


// sons.map((som) => (
//     document.querySelector(`.tecla_${som.nome}`).addEventListener('click', () => {
//         const elementoMusical = document.querySelector(`#som_tecla_${som.nome}`)
//         elementoMusical.play()

//     })
// ))

const listaDeTeclas = document.querySelectorAll(".tecla")

listaDeTeclas.forEach((tecla) => {
    tecla.addEventListener("click", () => {
        const nomeTecla = tecla.textContent.trim().toLowerCase()
        document.querySelector(`#som_tecla_${nomeTecla}`).play()
        tecla.addEventListener("keydown", (e) => {
            if (e.code === "Enter" || e.code === "Space") {
                tecla.classList.add("ativa")
            }

        })
        tecla.addEventListener("keyup", (e) => {
            if (e.code === "Enter" || e.code === "Space") {
                tecla.classList.remove('ativa')
            }
        })
    })
})
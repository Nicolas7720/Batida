const sons = [
    { nome: 'tecla_pom', som: 'som_tecla_pom' },
    { nome: 'tecla_clap', som: 'som_tecla_clap' },
    { nome: 'tecla_tim', som: 'som_tecla_tim' },
    { nome: 'tecla_puff', som: 'som_tecla_puff' },
    { nome: 'tecla_splash', som: 'som_tecla_splash' },
    { nome: 'tecla_toim', som: 'som_tecla_toim' },
    { nome: 'tecla_psh', som: 'som_tecla_psh' },
    { nome: 'tecla_tic', som: 'som_tecla_tic' },
    { nome: 'tecla_tom', som: 'som_tecla_tom' },
]


sons.map((som) => (
    document.querySelector(`.${som.nome}`).addEventListener('click', () => {
        const elementoMusical = document.querySelector(`#${som.som}`)
        elementoMusical.play()

    })
))
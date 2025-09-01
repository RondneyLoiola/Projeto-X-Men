const personagens = document.querySelectorAll('.personagem')

personagens.forEach(perso => {
    perso.addEventListener('click', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }


        const idPerso = perso.attributes.id.value

        const persoSelecionado = document.querySelector('.selecionado')
        persoSelecionado.classList.remove('selecionado')

        perso.classList.add('selecionado')

        const nomePerso = document.querySelector('.nome-personagem')
        nomePerso.innerText = perso.getAttribute('data-name')

        const imgPerso = document.querySelector('.personagem-grande')
        imgPerso.src = `./src/imagens/card-${idPerso}.png`

        const descricaoPerso = document.querySelector('.descricao-personagem')
        descricaoPerso.innerText = perso.getAttribute('data-description')
    })

})
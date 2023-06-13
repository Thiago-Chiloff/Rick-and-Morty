document.addEventListener('DOMContentLoaded', () => {
  const personagemClass = document.querySelector('.personagemClass');
  const pesquisar = document.querySelector('.pesquisar');
  const content = document.querySelector('.content');
  const imagem = document.querySelector('img');

  pesquisar.addEventListener('click', () => {
    const valor = personagemClass.value;
    if (valor) {
      fetch(`https://rickandmortyapi.com/api/character/${valor}`)
        .then(response => response.json())
        .then(data => {
          const nome = data.name;
          const episodios = data.episode.map(episode => episode.split('/').pop());
          content.innerHTML = `<h2>Nome: ${nome}</h2><br>Episódios: ${episodios.join(', ')}`;
          imagem.src = data.image;
          imagem.alt = nome;
        })
        .catch(error => {
          console.log(error);
        });
    }
    document.querySelector('.personagemClass').value = '';
  });
});

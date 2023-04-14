const btnEnviar = document.querySelector('button[type="submit"]');

btnEnviar.addEventListener('click', (event) => {

  event.preventDefault();

  const nome = document.querySelector('#nome');
  const email = document.querySelector('#email');
  const mensagem = document.querySelector('#mensagem');

  if (nome.value === '' || email.value === '' || mensagem.value === '') {
    alert('Por favor, preencha todos os campos do formulário.');
  } else {
    alert('O formulário foi enviado com sucesso!');
    nome.value = '';
    email.value = '';
    mensagem.value = '';
  }
});

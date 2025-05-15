function buscarCEP() {
  var cep = document.getElementById('cep').value.replace(/\D/g, '');
  if (cep.length != 8) {
    alert('CEP inválido!');
    return;
  }

  var url = 'https://viacep.com.br/ws/' + cep + '/json/';

  fetch(url)
    .then(function(resposta) {
      return resposta.json();
    })
    .then(function(dados) {
      if ('erro' in dados) {
        alert('CEP não encontrado!');
      } else {
        document.getElementById('logradouro').value = dados.logradouro;
        document.getElementById('bairro').value = dados.bairro;
        document.getElementById('cidade').value = dados.localidade;
        document.getElementById('estado').value = dados.uf;
      }
    })
    .catch(function() {
      alert('Erro ao buscar o CEP!');
    });
}

window.onload = function() {
  document.getElementById('cep').addEventListener('blur', buscarCEP);
};
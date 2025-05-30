const app = angular.module('bancoApp', []);

app.controller('BancoController', function($scope) {
  $scope.contas = [
    { id: 1, nome: "Fabricio", saldo: 200 },
    { id: 2, nome: "Joana", saldo: 350 },
    { id: 3, nome: "Carlos", saldo: 50 },
    { id: 4, nome: "Marina", saldo: 780 },
    { id: 5, nome: "Tiago", saldo: 120 },
    { id: 6, nome: "Renata", saldo: 90 },
    { id: 7, nome: "Roberto", saldo: 500 },
    { id: 8, nome: "André", saldo: 1000 },
    { id: 9, nome: "Luciana", saldo: 640 },
    { id: 10, nome: "Patrícia", saldo: 270 }
  ];

  $scope.mensagem = {
    texto: '',
    classe: ''
  };

  $scope.transferencia = {
    remetente: '',
    destino: '',
    valor: null
  };

  $scope.transferir = function() {
    const { remetente, destino } = $scope.transferencia;
    let valor = parseFloat($scope.transferencia.valor);

    if (!remetente || !destino || isNaN(valor)) {
      mostrarMensagem("Preencha todos os campos.", false);
      return;
    }

    if (remetente === destino) {
      mostrarMensagem("Não é possível transferir para o mesmo cliente.", false);
      return;
    }

    const origem = $scope.contas.find(c => c.id === remetente);
    const destinoConta = $scope.contas.find(c => c.id === destino);

    if (!origem || !destinoConta) return;

    if (origem.saldo < valor) {
      mostrarMensagem("Saldo insuficiente.", false);
      return;
    }

    origem.saldo -= valor;
    destinoConta.saldo += valor;

    mostrarMensagem("Transferência simulada com sucesso.", true);
    $scope.transferencia.valor = null;
  };

  function mostrarMensagem(texto, sucesso = true) {
    $scope.mensagem.texto = texto;
    $scope.mensagem.classe = sucesso ? 'alert-success' : 'alert-danger';
    const msg = document.getElementById('mensagem');
    msg.textContent = texto;
    msg.className = 'alert ' + $scope.mensagem.classe;
    msg.style.display = 'block';
  }
});

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

  $scope.transferencia = {
    remetente: '',
    destino: '',
    valor: null,
    data: null
  };

  $scope.mensagem = {
    texto: '',
    classe: ''
  };

  $scope.extrato = [];

  $scope.transferir = function() {
    const { remetente, destino, valor, data } = $scope.transferencia;
    const valorNum = parseFloat(valor);

    if (!remetente || !destino || isNaN(valorNum) || !data) {
      mostrarMensagem("Preencha todos os campos.", false);
      return;
    }

    if (remetente === destino) {
      mostrarMensagem("Não é possível transferir para o mesmo cliente.", false);
      return;
    }

    if (valorNum <= 0) {
      mostrarMensagem("O valor da transferência deve ser maior que zero.", false);
      return;
    }

    const origem = $scope.contas.find(c => c.id === remetente);
    const destinoConta = $scope.contas.find(c => c.id === destino);

    if (!origem || !destinoConta) return;

    if (origem.saldo < valorNum) {
      mostrarMensagem("Saldo insuficiente.", false);
      return;
    }

    origem.saldo -= valorNum;
    destinoConta.saldo += valorNum;

    // Salvar no extrato
    $scope.extrato.unshift({
      data: new Date(data).toLocaleDateString(),
      remetente: origem.nome,
      destino: destinoConta.nome,
      valor: valorNum
    });

    mostrarMensagem("Transferência simulada com sucesso.", true);
    $scope.cancelar();
  };

  $scope.cancelar = function() {
    $scope.transferencia = {
      remetente: '',
      destino: '',
      valor: null,
      data: null
    };
    $scope.mensagem = { texto: '', classe: '' };
  };

	function mostrarMensagem(texto, sucesso = true) {
	  $scope.$applyAsync(() => {
		$scope.mensagem = {
		  texto: texto,
		  classe: sucesso ? 'alert-success' : 'alert-danger'
		};
	  });
	}
	
	$scope.saldoOrigem = null;

	$scope.atualizarSaldo = function() {
	  const cliente = $scope.contas.find(c => c.id === $scope.transferencia.remetente);
	  $scope.saldoOrigem = cliente ? cliente.saldo : null;
	};
});

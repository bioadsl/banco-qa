const app = angular.module('bancoApp', []);

app.controller('BancoController', function($scope) {
  $scope.contas = [
    { id 1, nome Fabricio, saldo 200 },
    { id 2, nome Joana, saldo 350 },
    { id 3, nome Carlos, saldo 50 },
    { id 4, nome Marina, saldo 780 },
    { id 5, nome Tiago, saldo 120 },
    { id 6, nome Renata, saldo 90 },
    { id 7, nome Roberto, saldo 500 },
    { id 8, nome André, saldo 1000 },
    { id 9, nome Luciana, saldo 640 },
    { id 10, nome Patrícia, saldo 270 }
  ];

  $scope.mensagem = {
    texto '',
    classe ''
  };

  $scope.transferencia = {
    remetente '',
    destino '',
    valor null
  };

  $scope.transferir = function() {
    const { remetente, destino, valor } = $scope.transferencia;

    if (!remetente  !destino  !valor) {
      $scope.mensagem.texto = Preencha todos os campos.;
      $scope.mensagem.classe = alert-danger;
      return;
    }

    if (remetente === destino) {
      $scope.mensagem.texto = Não é possível transferir para o mesmo cliente.;
      $scope.mensagem.classe = alert-danger;
      return;
    }

    const origem = $scope.contas.find(c = c.id === remetente);
    const destinoConta = $scope.contas.find(c = c.id === destino);

    if (!origem  !destinoConta) return;

    if (origem.saldo  valor) {
      $scope.mensagem.texto = Saldo insuficiente.;
      $scope.mensagem.classe = alert-danger;
      return;
    }

    origem.saldo -= valor;
    destinoConta.saldo += valor;

    $scope.mensagem.texto = Transferência simulada com sucesso.;
    $scope.mensagem.classe = alert-success;
    $scope.transferencia.valor = null;
  };
});

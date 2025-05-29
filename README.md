
# Banco QA

Aplicação simulada de transferências bancárias para fins de automação de testes com Cypress e CI/CD via GitHub Actions.

## 🚀 Tecnologias

- HTML, CSS, Bootstrap
- AngularJS (1.x)
- Cypress
- GitHub Actions

## 📂 Estrutura

- `/frontend/` → app simulando transferências
- `/cypress/` → testes automatizados
- `.github/workflows/` → CI pipeline
- `contas.json` → base simulada de correntistas

## 🧪 Casos de Teste Automatizados (Cypress)

1. Transferência com saldo suficiente
2. Tentativa com saldo insuficiente
3. Validação de campos obrigatórios

## ▶️ Executar no GitHub Actions

Esse repositório possui pipeline automático. Ao clicar em **"Run workflow"** na aba `Actions`, o GitHub:

- Instala o projeto
- Sobe um servidor local com `live-server`
- Executa os testes
- Exibe os resultados no console (logs)

> Ideal para apresentação ou avaliação técnica. Basta acessar o repositório e executar o workflow.


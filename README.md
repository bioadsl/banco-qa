
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

# Banco QA - Transferência Bancária

Este projeto simula um sistema bancário simples com AngularJS e Bootstrap, contendo testes automatizados com Cypress.

## ✅ Funcionalidades
- Transferência entre clientes
- Validação de saldo
- Validação de campos obrigatórios
- Painel de gerenciamento de contas
- Testes Cypress (fluxos positivos e negativos)

---

## 🚀 Como Executar os Testes

### 1. Clone o projeto
```bash
git clone https://github.com/bioadsl/banco-qa.git
cd banco-qa
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute os testes Cypress (modo headless)
```bash
npx cypress run
```

### 4. (Opcional) Execute com interface gráfica
```bash
npx cypress open
```
E clique no arquivo `transferencia.cy.js`.

---

## 📁 Resultados dos testes

- Vídeos: `cypress/videos/`
- Prints de falhas: `cypress/screenshots/`

---

## 📌 Requisitos
- Node.js (v18+ ou superior)
- npm

---

Feito com 💻 por [Fabricio Duarte](https://github.com/bioadsl)


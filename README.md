"# Nicoli-Capivara-IA" 
# Projeto: Teste Técnico

Este projeto foi desenvolvido para a vaga de estágio frontend, simulando um sistema de autenticação de usuários com funcionalidades de login, cadastro e um dashboard protegido. As tecnologias utilizadas incluem Next.js, TypeScript e Tailwind CSS.

## Funcionalidades

- **Página de Login (/login)**
  - Formulário com validação de campos obrigatórios
  - Feedback visual com animação de shake
  - Alternar visibilidade da senha (ícone de olho)
  - Redirecionamento para o dashboard após login

- **Página de Cadastro (/signup)**
  - Campos: usuário, email, senha e confirmação de senha
  - Validações: email válido, senha mínima de 6 caracteres, confirmação de senha idêntica
  - Verificação de usuário/email já existentes
  - Feedback visual com mensagens de erro/sucesso e animações
  - Barra de força da senha
  - Redirecionamento automático para login após sucesso

- **Dashboard Protegido (/dashboard)**
  - Requer autenticação para acesso
  - Mostra o usuário logado
  - Botão para logout

- **Componentes Reutilizáveis**
  - `<Input />`
  - `<SubmitButton />`
  - `<Loader />`
  - `<Toast />` para mensagens temporárias

- **Autenticação Simulada (lib/auth.ts)**
  - Armazena usuários em um objeto local (simulando um banco)
  - Usa localStorage para persistência de login
  - Simula delays de API com setTimeout

- **Tema Claro/Escuro (Dark Mode)**
  - Detecta tema via localStorage
  - Integração com Tailwind e classes dinâmicas

## Tecnologias Utilizadas

- Next.js (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (ícones)

## Estrutura do Projeto

```plaintext
app/
├── login/              # Página de login
├── signup/             # Página de cadastro
├── dashboard/          # Página protegida
├── layout.tsx          # Layout global com tema
├── globals.css         # Estilos globais (Tailwind)
components/
├── Input.tsx           # Campo de entrada com ícone de senha
├── SubmitButton.tsx    # Botão com loading
├── Loader.tsx          # Spinner de carregamento
├── Toast.tsx           # Mensagens de sucesso/erro
lib/
├── auth.ts             # Simulação de autenticação

✅ Como Executar o Projeto

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Instale as dependências:

npm install
# ou
yarn install

Rode o servidor:

npm run dev

Acesse em: http://localhost:3000

👤 Credenciais de Teste
Usuário	Senha	Email
admin	admin123	admin@example.com
user	user123	user@example.com
teste	teste123	teste@example.com

📌 Observações Finais
Este projeto foi construído com foco em boas práticas, reutilização de componentes e uma experiência fluida ao usuário. A simulação de autenticação usa JavaScript puro com localStorage, respeitando as regras do teste técnico.


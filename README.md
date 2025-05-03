# 🧠 FanProfile Frontend

Este projeto é a API do sistema **FanProfile**, responsável por receber, armazenar e validar os dados de fãs do universo dos e-sports. Ele atua em conjunto com o frontend, oferecendo endpoints para o cadastro de usuários, verificação de identidade e vinculação de perfis sociais.

---

## 📚 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)** — Runtime JavaScript assíncrono e eficiente.
- **[Express.js](https://expressjs.com/)** — Framework minimalista para construção de APIs RESTful.
- **[CORS](https://www.npmjs.com/package/cors)** — Middleware para liberar o acesso da API ao frontend.
- **[Dotenv](https://www.npmjs.com/package/dotenv)** — Gerenciamento de variáveis de ambiente.
- **[Zod](https://zod.dev/)** — Validação de dados e schemas para segurança nas requisições.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para maior confiabilidade no desenvolvimento.
- *(opcional)* **Prisma / Mongoose / Sequelize** — ORM para integração com banco de dados.


---

## 📂 Estrutura de Pastas

/
├── src/
│ ├── routes/ # Definição dos endpoints
├── index.ts # Arquivo principal do servidor
├── .env # Variáveis de ambiente
├── tsconfig.json # Configurações do TypeScript
├── package.json # Dependências e scripts
└── README.md # Documentação

---

## ⚙️ Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/fanprofile-backend.git
cd fanprofile-backend
```

### 2. Instale as dependencias

```
npm install
# ou
yarn install
```


### 3. Configure o arquivo .env.local
```
Crie um arquivo .env.local com base no .env.example:

bash
cp .env.example .env
```
### 4. Abra o .env.local e configure a URL da API:

```
PORT=3001
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME?schema=public
```

### 5. 🚀 Executar o projeto
 ```
bash

npm run dev
# ou
yarn dev
```
### 📡 Endpoints Disponíveis
```
Método	Rota	Descrição
POST	fan/fans	Cria um novo fã com os dados do formulário
GET	fan/fans	Lista todos os fãs cadastrados

⚠️ Todas as requisições passam por validação de schema usando Zod.

```
### 💡 Segurança e Validação
```
Os dados de entrada são validados com Zod.

As requisições podem ser protegidas com autenticação (se necessário futuramente).

O CORS está habilitado para permitir chamadas do frontend.
```
### 🛠️ Scripts úteis
Comando	Descrição
npm run dev	Inicia o servidor em modo dev
npm run build	Transpila o código TypeScript
npm run start	Executa versão compilada
npm run lint	Verifica erros de lint

### 🧪 Testes (caso adicione futuramente)
```
Sugestão de ferramentas para adicionar testes:

Jest — Testes unitários e de integração.

Supertest — Teste de APIs REST.

```

👤 Autor
Desenvolvido por Lorenzo de Quadros Gonçalves

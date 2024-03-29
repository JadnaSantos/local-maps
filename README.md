## Local-maps 🌎

### Sobre ✨

Local Maps é um app que ajuda as pessoas a conhecer melhor o comércio local,
o projeto  é constituído por uma plataforma web que as pessoas possam cadastrar os estabelecimentos.

### Layout 🦚

### Web
<p aling="center">
  <img alt="Local Maps" title="Local Maps" src="./media/web-login.png" width="400px">
  <img alt="Local Maps" title="Local Maps" src="./media/cadastrar-users.png" width="400px">
  <img alt="Local Maps" title="Local Maps" src="./media/home-local.maps.png" width="400px">
  <img alt="Local Maps" title="Local Maps" src="./media/Cadastrar-um-comercio-no-map.png" width="400px">
  <img alt="Local Maps" title="Local Maps" src="./media/web-register.png" width="400px">
</p>

### Mobile 
<p aling="center">
  <img alt="Local Maps" title="Local Maps" src="./media/mobile-login.jpg" width="200px">
  <img alt="Local Maps" title="Local Maps" src="./media/mobile-cadastrar-use.jpg" width="200px">
  <img alt="Local Maps" title="Local Maps" src="./media/MAPS (1).jpg" width="200px">
  <img alt="Local Maps" title="Local Maps" src="./media/MAPS (2).jpg" width="200px">
</p


### 🚀 Tecnologias

#### Back-End

-  [Node.js](https://nodejs.org/en/)
-  [Express](https://expressjs.com/)
-  [Typescript](https://www.typescriptlang.org/)
-  [Prisma - ORM](https://www.prisma.io/)
-  [Bcrypt](https://www.npmjs.com/package/bcrypt)
-  [JWT](https://jwt.io/)
-  [Jest](https://jestjs.io)
-  [Celebrate](https://www.npmjs.com/package/celebrate)

#### Banco de dados

- [PostgresSql](https://www.postgresql.org/)
- [Docker](https://www.docker.com)

#### Front-End 

- [React.js](https://reactjs.org/docs/getting-started)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Zod](https://zod.dev/)
- [React-Hook-Form](https://react-hook-form.com/api/Useform/)

#### Mobile

-  [Typescript](https://www.typescriptlang.org/)
-  [React.js](https://reactjs.org/docs/getting-started)
-  [React-Native](https://reactnative.dev)
-  [Styled Components](https://styled-components.com/)
-  [Zod](https://zod.dev/)
-  [React-Hook-Form](https://react-hook-form.com/api/Useform/)

<details open>
  <summary><h3>Arquitetura </h3></summary>
Para execução do projeto eu procurei utilizar Single Responsibility Principle (SRP), que basicamente consiste 
em modulos e funções deve ter uma responsabilidade.
  
</details>  

### 📃 Funcionalidades

Versão Web:

- [x] Cadastrar um novo usuário;
- [x] Logar um usuário;
- [x] Verificar autenticação para rotas privadas;
- [x] Mostar detalhes do usuário;
- [x] Cadastrar um estabelecimento;
- [x] Listar um estabelecimento;

Versão Mobile:

- [x] Cadastrar um novo usuário;
- [x] Logar um usuário;
- [x] Verificar autenticação para rotas privadas;
- [x] Mostar detalhes do usuário;
- [x] Cadastrar um estabelecimento;
- [x] Listar um estabelecimento;

## ✅ Requisitos Back end

Para executar o projeto você precisa instalar as depedência citadas a cima 

```bash
# Entre na pasta back-end
$ cd back-end

# Execute o comando e o projeto sera aberto no Visual Studio Code
$ code .

# Instale as dependências
$ yarn dev

# Após isso você precisa gerar as tables no DB.

# Não se esqueça de configurar o DB em prisma/schema.prisma e
# também a variável DATABASE_URL e a JWT_SECRET_KEY no arquivo .env

# Após, basta rodar o comando abaixo.
$ npx prisma migrate dev --name init

# Inicialize o servidor em modo desenvolvimento
$ yarn run dev

# O servidor irá iniciar em http://localhost:3001
```

## ✅ Requisitos Front-end

Para executar o projeto você precisa instalar as depedência citadas a cima 

```bash
# Entre na pasta front end
$ cd front-end

# Execute o comando e o projeto sera aberto no Visual Studio Code
$ code .

# Instale as dependências
$ npm i

# Após isso você precisa gerar as tables no DB.

# Inicialize o servidor em modo desenvolvimento
$ npm run dev

# O servidor irá iniciar em http://localhost:3333
```

## ✅ Requisitos Mobile

Para executar o projeto você precisa instalar as depedência citadas a cima 

```bash
# Entre na pasta front end
$ cd app

# Execute o comando e o projeto sera aberto no Visual Studio Code
$ code .

# Instale as dependências
$ npm i

# Após isso você precisa gerar as tables no DB.

# Inicialize o servidor em modo desenvolvimento
$ expo start

```

Feito com 💖 por Jadna Silva contato: https://www.linkedin.com/in/jadna-jesus/

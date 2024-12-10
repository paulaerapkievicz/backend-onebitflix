
# 🎬 OneBitFlix

**OneBitFlix** é um projeto desenvolvido no curso da **OneBitCode**, criado para simular um clone da Netflix. O objetivo principal é consolidar conhecimentos em tecnologias modernas para o desenvolvimento de aplicações completas, utilizando uma arquitetura robusta de back-end e uma interface front-end responsiva.

## 🚀 Funcionalidades

- Autenticação de usuários com tokens JWT
- Sistema de gerenciamento de usuários com painel administrativo (AdminJS)
- Upload de imagens para perfil e conteúdo multimídia
- Listagem e categorização de filmes e séries
- Reprodução de vídeos
- Sistema de busca e playlists personalizadas
- Interface responsiva e amigável

## 🛠️ Tecnologias Utilizadas

### Back-end:
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)
- ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)
- ![Sequelize](https://img.shields.io/badge/-Sequelize-52B0E7?logo=sequelize&logoColor=white)
- ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?logo=postgresql&logoColor=white)
- ![AdminJS](https://img.shields.io/badge/-AdminJS-FF4154?logo=&logoColor=white)
- ![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens&logoColor=white)
- ![Bcrypt](https://img.shields.io/badge/-Bcrypt-00BCD4?logo=&logoColor=white)
- ![Express Formidable](https://img.shields.io/badge/-Express%20Formidable-FF69B4?logo=&logoColor=white)

### Dev Tools:
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
- ![Sequelize CLI](https://img.shields.io/badge/-Sequelize%20CLI-52B0E7?logo=sequelize&logoColor=white)
- ![TS Node Dev](https://img.shields.io/badge/-TS--Node--Dev-3178C6?logo=ts-node-dev&logoColor=white)

## 🧰 Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

## 📥 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/onebitflix.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd onebitflix
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure o arquivo `.env` com as seguintes variáveis:
   ```
   DATABASE_URL=seu_url_do_postgresql
   JWT_SECRET=sua_chave_secreta
   ```
5. Execute as migrações do banco de dados:
   ```bash
   npx sequelize-cli db:migrate
   ```
6. Inicie o servidor:
   ```bash
   npm run dev
   ```
7. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```

## 📚 Aprendizados e Recursos

Este projeto integra conceitos como:
- Desenvolvimento de APIs RESTful
- Autenticação com JWT e gerenciamento de permissões
- ORM com Sequelize para banco de dados relacional
- Criação de painéis administrativos com AdminJS
- Upload e manipulação de arquivos com Express Formidable


## 📝 Licença

Este projeto está licenciado sob a licença ISC. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

👩‍💻 Desenvolvido por [Paula Rapkievicz](https://www.linkedin.com/in/paularapkievicz/)

# Desafio Técnico Back-end (SmartNX)

Parte 1 - `E1-E12/` — exercícios de 1 a 12.
Parte 2 - `desafio_final/` — API REST em Node.js (Express + Knex + PostgreSQL) para criar e listar posts e comentários.

Cada pasta tem o seu próprio `package.json`. O README dentro de `E1-E12/` traz uma explicação rápida do que cada exercício faz.

## Exercícios E1 a E12

Para rodar:

```
cd e*-E12
npm install
node e1.js
```

Trocando `*` pelo número do exercício que quiser executar.

O E.6 faz uma requisição para a API do ViaCEP, então é preciso estar com internet na hora de rodar ele.

## API de posts e comentários

### O que precisa ter instalado

- Node.js (usei a versão 20)
- PostgreSQL rodando localmente

### Passos

1. Entrar na pasta e instalar as dependências:

```
cd desafio_final
npm install
```

2. Criar um banco de dados no PostgreSQL. Pode ser pelo psql, pgAdmin ou DBeaver, com qualquer nome:

```sql
CREATE DATABASE desafio_principal_api;
```

3. Criar um arquivo `.env` dentro de `desafio_final/` com os dados de conexão. Exemplo:

```
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=desafio_principal_api
```

4. Rodar as migrations para criar as tabelas `posts` e `-s`:

```
npx knex migrate:latest
```

5. Subir o servidor:

```
npm run dev
```

A API fica em `http://localhost:3000`.


### Endpoints

Posts:

- `GET  /posts` — lista todos os posts
- `GET  /posts/:id` — retorna um post específico
- `POST /posts` — cria um post (body: `autor`, `conteudo`)
- `DELETE /posts/:id` — apaga um post

Comentários:

- `GET  /posts/:postId/comments` — lista os comentários de um post
- `POST /posts/:postId/comments` — adiciona um comentário (body: `autor`, `texto`)
- `DELETE /comments/:id` — apaga um comentário

A relação entre as tabelas é com `ON DELETE CASCADE`, então se um post for apagado, os comentários dele também são apagados juntos.


### Bibliotecas usadas

- `express` para o servidor HTTP
- `knex` como query builder e para as migrations
- `pg` como driver do PostgreSQL
- `dotenv` para ler o arquivo .env
- `nodemon` (apenas em desenvolvimento)


## Lint

O projeto da API tem o ESLint configurado seguindo o style guide do Airbnb. Para rodar:

```
cd desafio_final
npx eslint src/
```

# Feito por: 

João Pedro Vianelo Saçço
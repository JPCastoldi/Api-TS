# API-TS

Esta é uma API construída com Node.js, TypeScript, Prisma e SQLite, seguindo o padrão MVC.

## Requisitos

- Node.js v16 ou superior
- npm ou yarn
- Docker

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/JPCastoldi/Api-TS.git
    cd Api-TS
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

    ou

    ```bash
    yarn install
    ```

3. Configure o Prisma:

    ```bash
    npx prisma migrate dev --name init
    npx prisma generate
    ```

## Uso com Docker

1. Construa a imagem Docker:

    ```bash
    docker build -t my-api .
    ```

2. Rode o contêiner:

    ```bash
    docker run -p 3000:3000 my-api
    ```

3. A API estará disponível em `http://localhost:3000`.

## Endpoints

### Usuários

- **Criar usuário**

    ```
    POST /api/users
    ```

    **Body:**
    ```json
    {
      "email": "email@example.com",
      "name": "Nome do Usuário"
    }
    ```

- **Listar todos os usuários**

    ```
    GET /api/users
    ```

- **Obter usuário por ID**

    ```
    GET /api/users/:id
    ```

- **Atualizar usuário**

    ```
    PUT /api/users/:id
    ```

    **Body:**
    ```json
    {
      "email": "new-email@example.com",
      "name": "Novo Nome do Usuário"
    }
    ```

- **Deletar usuário**

    ```
    DELETE /api/users/:id
    ```

### Posts

- **Criar post**

    ```
    POST /api/posts
    ```

    **Body:**
    ```json
    {
      "title": "Título do Post",
      "content": "Conteúdo do Post",
      "authorId": 1
    }
    ```

- **Listar todos os posts**

    ```
    GET /api/posts
    ```

- **Obter post por ID**

    ```
    GET /api/posts/:id
    ```

- **Atualizar post**

    ```
    PUT /api/posts/:id
    ```

    **Body:**
    ```json
    {
      "title": "Novo Título",
      "content": "Novo Conteúdo",
      "published": true
    }
    ```

- **Deletar post**

    ```
    DELETE /api/posts/:id
    ```

### Comentários

- **Criar comentário**

    ```
    POST /api/comments
    ```

    **Body:**
    ```json
    {
      "content": "Conteúdo do Comentário",
      "postId": 1,
      "authorId": 1
    }
    ```

- **Listar todos os comentários**

    ```
    GET /api/comments
    ```

- **Obter comentário por ID**

    ```
    GET /api/comments/:id
    ```

- **Atualizar comentário**

    ```
    PUT /api/comments/:id
    ```

    **Body:**
    ```json
    {
      "content": "Novo Conteúdo"
    }
    ```

- **Deletar comentário**

    ```
    DELETE /api/comments/:id
    ```


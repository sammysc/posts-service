# Posts Service

Este microserviço gerencia as postagens da plataforma educacional.

## Pré-requisitos

- [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/)
- Node.js 18+ (apenas para execução local)
- Banco de dados PostgreSQL (usado via Docker)

## Executando com Docker

1. Certifique-se de que a rede Docker `plataforma-network` já existe:
   ```sh
   docker network create plataforma-network || true
   ```

2. Suba o serviço:
   ```sh
   docker-compose up --build
   ```

3. O serviço estará disponível em `http://localhost:3001`.

## Executando Localmente

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Configure o banco de dados PostgreSQL (veja as credenciais em `config/config.json`).

3. Execute as migrações:
   ```sh
   npx sequelize-cli db:migrate
   ```

4. Inicie o serviço:
   ```sh
   npm start
   ```

5. O serviço estará disponível em `http://localhost:3001`.

## Endpoints

- `GET /posts` - Lista todas as postagens
- `POST /posts` - Cria uma nova postagem
- `GET /posts/:id` - Busca uma postagem pelo ID
- `PUT /posts/:id` - Atualiza uma postagem
- `DELETE /posts/:id` - Remove uma postagem
- `GET /posts/search?q=termo` - Busca postagens pelo termo

Consulte a documentação Swagger em `/api-docs` para mais detalhes.
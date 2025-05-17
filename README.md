# back-end-app-pets
API desenvolvida para um aplicativo usado como prova final do semestre da matéria de desenvolvimento de aplicativos.

No backend, a API permite realizar operações CRUD (Criar, Ler, Atualizar e Deletar) completo em cada rota.

# API - Usuários

## 🚀 Endpoints Disponíveis

### 🔹 Listar todos os usuários
- **Método:** GET  
- **URL:** `/usuarios`  
- **Descrição:** Retorna todos os usuários cadastrados.

### 🔹 Buscar usuário por ID
- **Método:** GET  
- **URL:** `/usuarios/:id`  
- **Parâmetros:** `id` (número do usuário)  
- **Descrição:** Retorna um único usuário com base no ID informado.

### 🔹 Criar um novo usuário
- **Método:** POST  
- **URL:** `/usuarios`  
- **Headers:** `Content-Type: application/json`  
- **Body Exemplo:**
  ```json
  {
    "nome": "Guilherme",
    "sobrenome": "Santos",
    "imagem": "foto.jpg",
    "telefone": "68999999999",
    "email": "guilherme@exemplo.com"
  }
  ```

# API - Posts

## 🚀 Endpoints Disponíveis

### 🔹 Listar todos os posts
- **Método:** GET  
- **URL:** `/posts`  
- **Descrição:** Retorna todos os posts cadastrados.

### 🔹 Buscar post por ID
- **Método:** GET  
- **URL:** `/posts/:id`  
- **Parâmetros:** `id` (número do post)  
- **Descrição:** Retorna um único post com base no ID informado.

### 🔹 Buscar post por filtro
- **Método:** GET  
- **URL:** `/posts?tipo_post=adocao&especie=esquilo&sexo=feminino&raca=dalmata&idade=1`  
- **Parâmetros:** `tipo_post` (tipo do post, pode ser 'adocao' ou 'perdido')  
- **Parâmetros:** `especie` (especie do animal)  
- **Parâmetros:** `sexo` (sexo do animal, pode ser 'feminino' ou 'masculino')  
- **Parâmetros:** `raca` (raca do animal)  
- **Parâmetros:** `idade` (idade do animal)  
- **Descrição:** Retorna os posts baseado nos parâmetros opcionais informados na url.
- **OBS.:** Todos os parâmetros sãoopcionais,ou seja, se não passar nada, ele não filtra com base nos parâmetros, traz todos os dados.

### 🔹 Criar um novo post
- **Método:** POST  
- **URL:** `/posts`  
- **Headers:** `Content-Type: application/json`  
- **Body Exemplo:**
  ```json
  {
    "titulo": "Exemplo de Post",
    "descricao": "Descrição do post aqui.",
    "imagem": "imagem.jpg",
    "id_usuario": 1
  }
  ```

### 🔹 Atualizar um post
- **Método:** PUT  
- **URL:** `/posts/:id`  
- **Parâmetros:** `id` (número do post)  
- **Body Exemplo:**
  ```json
  {
    "titulo": "Novo título",
    "descricao": "Descrição atualizada",
    "imagem": "nova-imagem.jpg",
    "id_usuario": 1
  }
  ```

### 🔹 Deletar um post
- **Método:** DELETE  
- **URL:** `/posts/:id`  
- **Parâmetros:** `id` (número do post)  
- **Descrição:** Remove o post do banco de dados.

---

# API - Comentários

## 🚀 Endpoints Disponíveis

### 🔹 Listar todos os comentários
- **Método:** GET  
- **URL:** `/comentarios`  

### 🔹 Buscar comentário por ID
- **Método:** GET  
- **URL:** `/comentarios/:id`  

### 🔹 Criar um novo comentário
- **Método:** POST  
- **URL:** `/comentarios`  
- **Body Exemplo:**
  ```json
  {
    "descricao": "Comentário de exemplo",
    "id_usuario": 1,
    "id_post": 2,
    "status": "ativo"
  }
  ```

### 🔹 Atualizar um comentário
- **Método:** PUT  
- **URL:** `/comentarios/:id`  

### 🔹 Deletar um comentário
- **Método:** DELETE  
- **URL:** `/comentarios/:id`  

---

# API - Dicas

## 🚀 Endpoints Disponíveis

### 🔹 Listar todas as dicas
- **Método:** GET  
- **URL:** `/dicas`  

### 🔹 Buscar dica por ID
- **Método:** GET  
- **URL:** `/dicas/:id`  

### 🔹 Criar uma nova dica
- **Método:** POST  
- **URL:** `/dicas`  
- **Body Exemplo:**
  ```json
  {
    "titulo": "Dica útil",
    "descricao": "Descrição da dica",
    "status": "ativa",
    "imagem": "imagem-dica.jpg",
    "id_usuario": 1
  }
  ```

### 🔹 Atualizar uma dica
- **Método:** PUT  
- **URL:** `/dicas/:id`  

### 🔹 Deletar uma dica
- **Método:** DELETE  
- **URL:** `/dicas/:id`

---

# 🐳 Como rodar com Docker

Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

1. Crie um arquivo `.env` para usar:
   ```
   host: 'postgres',
   user: 'usuarioDoBanco',
   password: 'senhaDoBanco',
   database: 'postgres'
   ```

2. Na raiz do projeto, em seu terminal, execute o comando:

   ```bash
   docker-compose up --build
   ```

3. Acesse a API em:  
   [http://localhost:3000](http://localhost:3000)

Isso iniciará o banco de dados PostgreSQL e o servidor Node.js dentro de containers Docker.
/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - author
 *       properties:
 *         title:
 *           type: string
 *           description: Título do post
 *         content:
 *           type: string
 *           description: Conteúdo do post
 *         author:
 *           type: string
 *           description: Autor do post
 *     Teacher:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do professor
 *         name:
 *           type: string
 *           description: Nome do professor
 *         email:
 *           type: string
 *           description: Email do professor
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do aluno
 *         name:
 *           type: string
 *           description: Nome do aluno
 *         email:
 *           type: string
 *           description: Email do aluno
 *     TeacherRegistration:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - userType
 *       properties:
 *         name:
 *           type: string
 *           description: Nome completo do professor
 *         email:
 *           type: string
 *           format: email
 *           description: Email do professor (único)
 *         password:
 *           type: string
 *           format: password
 *           description: Senha (mínimo 6 caracteres)
 *         userType:
 *           type: string
 *           enum: [teacher]
 *           description: Tipo de usuário (deve ser "teacher")
 *     StudentRegistration:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - userType
 *       properties:
 *         name:
 *           type: string
 *           description: Nome completo do aluno
 *         email:
 *           type: string
 *           format: email
 *           description: Email do aluno (único)
 *         password:
 *           type: string
 *           format: password
 *           description: Senha (mínimo 6 caracteres)
 *         userType:
 *           type: string
 *           enum: [student]
 *           description: Tipo de usuário (deve ser "student")
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - userType
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: Email do usuário
 *         password:
 *           type: string
 *           format: password
 *           description: Senha do usuário
 *         userType:
 *           type: string
 *           enum: [teacher, student]
 *           description: Tipo de usuário (teacher ou student)
 *     AuthResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Mensagem de sucesso
 *         user:
 *           type: object
 *           description: Dados do usuário
 *         token:
 *           type: string
 *           description: Token JWT para autenticação
 *         userType:
 *           type: string
 *           enum: [teacher, student]
 *           description: Tipo de usuário
 */

/**
 * @swagger
 * tags:
 *   name: Postagens
 *   description: API para gerenciamento de postagens
 *   name: Professores
 *   description: API para gerenciamento de professores
 *   name: Alunos
 *   description: API para gerenciamento de alunos
 *   name: Autenticação
 *   description: API para autenticação de alunos e professores
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Lista de Posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de todos os posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * /posts/search:
 *   get:
 *     summary: Busca de Posts
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Termo de busca
 *     responses:
 *       200:
 *         description: Lista de posts que contêm o termo de busca
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Leitura de Posts
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do post
 *     responses:
 *       200:
 *         description: Conteúdo do post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post não encontrado
 */

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Criação de postagens
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Edição de postagens
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post não encontrado
 */

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Exclusão de Postagens
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do post
 *     responses:
 *       204:
 *         description: Post excluído com sucesso
 *       404:
 *         description: Post não encontrado
 */

/**
 * @swagger
 * /teachers:
 *   get:
 *     summary: Lista de Professores
 *     tags: [Professores]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número da página (padrão 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Quantidade de itens por página (padrão 10)
 *     responses:
 *       200:
 *         description: Lista paginada de professores
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 teachers:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Teacher'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     totalItems:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *                     currentPage:
 *                       type: integer
 *                     itemsPerPage:
 *                       type: integer
 *       500:
 *         description: Erro ao buscar professores
 */

/**
 * @swagger
 * /teachers/{id}:
 *   get:
 *     summary: Busca um professor específico
 *     tags: [Professores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do professor
 *     responses:
 *       200:
 *         description: Dados do professor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       404:
 *         description: Professor não encontrado
 *       500:
 *         description: Erro ao buscar professor
 */

/**
 * @swagger
 * /teachers:
 *   post:
 *     summary: Criação de professores
 *     tags: [Professores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Professor criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao cadastrar professor
 */

/**
 * @swagger
 * /teachers/{id}:
 *   put:
 *     summary: Edição de professores
 *     tags: [Professores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do professor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Professor atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Professor não encontrado
 *       500:
 *         description: Erro ao atualizar professor
 */

/**
 * @swagger
 * /teachers/{id}:
 *   delete:
 *     summary: Exclusão de professores
 *     tags: [Professores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do professor
 *     responses:
 *       204:
 *         description: Professor excluído com sucesso
 *       404:
 *         description: Professor não encontrado
 *       500:
 *         description: Erro ao excluir professor
 */

/**
 * @swagger
 * /teachers/search/query:
 *   get:
 *     summary: Busca de professores
 *     tags: [Professores]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Termo de busca
 *     responses:
 *       200:
 *         description: Lista de professores que contêm o termo de busca
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 *       500:
 *         description: Erro ao buscar professores
 */

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Lista de Alunos
 *     tags: [Alunos]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número da página (padrão 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Quantidade de itens por página (padrão 10)
 *     responses:
 *       200:
 *         description: Lista paginada de alunos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 students:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Student'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     totalItems:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *                     currentPage:
 *                       type: integer
 *                     itemsPerPage:
 *                       type: integer
 *       500:
 *         description: Erro ao buscar alunos
 */

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Busca um aluno específico
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do aluno
 *     responses:
 *       200:
 *         description: Dados do aluno
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Aluno não encontrado
 *       500:
 *         description: Erro ao buscar aluno
 */

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Criação de alunos
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao cadastrar aluno
 */

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Edição de alunos
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do aluno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Aluno atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Aluno não encontrado
 *       500:
 *         description: Erro ao atualizar aluno
 */

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Exclusão de alunos
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do aluno
 *     responses:
 *       204:
 *         description: Aluno excluído com sucesso
 *       404:
 *         description: Aluno não encontrado
 *       500:
 *         description: Erro ao excluir aluno
 */

/**
 * @swagger
 * /students/search/query:
 *   get:
 *     summary: Busca de alunos
 *     tags: [Alunos]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Termo de busca
 *     responses:
 *       200:
 *         description: Lista de alunos que contêm o termo de busca
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       500:
 *         description: Erro ao buscar alunos
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registro de usuário (aluno ou professor)
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             oneOf:
 *               - $ref: '#/components/schemas/TeacherRegistration'
 *               - $ref: '#/components/schemas/StudentRegistration'
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Dados inválidos ou email já em uso
 *       500:
 *         description: Erro ao registrar usuário
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login de usuário (aluno ou professor)
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro ao realizar login
 */

/**
 * @swagger
 * /auth/profile:
 *   get:
 *     summary: Obter perfil do usuário autenticado
 *     tags: [Autenticação]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   description: Dados do usuário
 *                 userType:
 *                   type: string
 *                   enum: [teacher, student]
 *                   description: Tipo de usuário
 *       401:
 *         description: Token de autenticação não fornecido
 *       403:
 *         description: Token inválido ou expirado
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao obter perfil do usuário
 */

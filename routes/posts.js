const express = require("express");
const router = express.Router();
const { Post } = require("../models/post");
const { Op } = require("sequelize");

// GET /posts - Lista de Posts
router.get("/", async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
});
// GET /posts/search - Busca de Posts
router.get("/search", async (req, res) => {
    const { q } = req.query;
    const posts = await Post.findAll({
        where: {
            [Op.or]: [
                { title: { [Op.like]: `%${q}%` } },
                { content: { [Op.like]: `%${q}%` } },
            ],
        },
    });
    res.json(posts);
});
// GET /posts/:id - Leitura de Posts
router.get("/:id", async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send("Sinto muito, postagem não encontrado");
    }
});

// POST /posts - Criação de postagens

router.post('/', async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const post = await Post.create({ title, content, author });
        res.status(201).json(post);
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ error: error.errors.map(e => e.message) });
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT /posts/:id - Edição de postagens
router.put("/:id", async (req, res) => {
    const { title, content, author } = req.body;
    const post = await Post.findByPk(req.params.id);
    if (post) {
        await post.update({ title, content, author });
        res.json(post);
    } else {
        res.status(404).send("Postagem não encontrado");
    }
});

// DELETE /posts/:id - Exclusão de Postagens
router.delete("/:id", async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    if (post) {
        await post.destroy();
        res.status(204).send("Postagem excluída com sucesso");
    } else {
        res.status(404).send("Postagem não encontrada");
    }
});

module.exports = router;

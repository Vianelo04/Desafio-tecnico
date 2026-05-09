const connection = require('../db/connection');

const listarPosts = async (req, res) => {
    try {
        const posts = await connection('posts').select('*');
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ erro: 'erro ao listar posts'});
    }
};

const obterPosts = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await connection('posts').where({id}).first();

        if (!post){
            return res.status(404).json({erro: 'erro post não encontrado'});
        }

        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ erro: 'erro ao obter post'});
    }
};

const cadastrarPosts = async (req, res) => {
    const { autor, conteudo } = req.body;

    if (!autor || !conteudo) {
        return res.status(400).json({ erro: 'autor e conteudo são obrigatórios'});
    }

    try {
        const [post] = await connection('posts')
            .insert({ autor, conteudo })
            .returning('*');

        return res.status(201).json(post);
    } catch (error) {
        return res.status(500).json({ erro: 'erro ao cadastrar post'});
    }
};

module.exports = { listarPosts, obterPosts, cadastrarPosts };
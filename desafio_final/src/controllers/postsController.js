const connection = require('../db/connection');

const listarPosts = async (req, res) => {
    try {
        const posts = await connection('posts').select('*');
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ erro: 'erro ao listar posts'});
    }
};

module.exports = { listarPosts };

const connection = require('../db/connection');

const listarComentariosPost = async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await connection('posts').where({ id: postId }).first();
        if (!post) {
            return res.status(404).json({ erro: 'post não encontrado'});
        }

        const comments = await connection('comments')
            .where({ post_id: postId})
            .select('*');

        return res.status(200).json(comments);
    }   catch (erro) {
            return res.status(500).json({erro: 'erro ao listar comentário'});
    }
};

module.exports = { listarComentariosPost };
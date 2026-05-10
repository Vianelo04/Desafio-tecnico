const connection = require('../db/connection');

const listarComentariosPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await connection('posts').where({ id: postId }).first();
    if (!post) {
      return res.status(404).json({ erro: 'post não encontrado' });
    }

    const comments = await connection('comments')
      .where({ post_id: postId })
      .select('*');

    return res.status(200).json(comments);
  } catch (erro) {
    return res.status(500).json({ erro: 'erro ao listar comentário' });
  }
};

const criarComentario = async (req, res) => {
  const { postId } = req.params;
  const { texto, autor } = req.body;

  if (!texto || !autor) {
    return res.status(400).json({ erro: 'texto e autor são obrigatórios' });
  }

  try {
    const post = await connection('posts').where({ id: postId }).first();
    if (!post) {
      return res.status(404).json({ erro: 'post não encontrado' });
    }

    const [comentario] = await connection('comments')
      .insert({ post_id: postId, texto, autor })
      .returning('*');

    return res.status(201).json(comentario);
  } catch (erro) {
    return res.status(500).json({ erro: 'erro ao cadastrar comentário' });
  }
};

const deletarComentario = async (req, res) => {
  const { id } = req.params;

  try {
    const linhasAfetadas = await connection('comments').where({ id }).del();

    if (linhasAfetadas === 0) {
      return res.status(404).json({ erro: 'comentário não encontrado' });
    }

    return res.status(204).send();
  } catch (erro) {
    return res.status(500).json({ erro: 'erro ao deletar comentário' });
  }
};

module.exports = { listarComentariosPost, criarComentario, deletarComentario };

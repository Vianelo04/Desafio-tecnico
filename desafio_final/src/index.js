require('dotenv').config();

const express = require('express')
const app = express();
const port = process.env.PORT;

const postsRoutes = require('./routes/postsRoutes');
const commentsRoutes = require('./routes/commentsRoutes')

app.use(express.json());
app.use('/posts', postsRoutes);
app.use('/posts/:postId/comments', commentsRoutes);

app.get('/', (req, res) => {
    res.send("API rodando 1234");
});
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)

});
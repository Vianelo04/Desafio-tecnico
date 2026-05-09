require('dotenv').config();

const express = require('express')
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("API rodando 1234");
});
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)

});
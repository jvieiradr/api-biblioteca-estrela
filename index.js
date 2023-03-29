import express  from 'express';
import cors  from 'cors';

import cadastrarLivro from './controller/CadastrarLivro.js';
import listarLivros from './controller/ListarLivros.js';
import deletarLivro from './controller/DeletarLivro.js';
import alterarLivro from './controller/AlterarLivro.js';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(8800, () => {
    console.log('Servidor Iniciado ...');
});

app.get('/', listarLivros);
app.post('/cadastrar', cadastrarLivro);
app.put('/alterar', alterarLivro);
app.delete('/deletar/:id', deletarLivro);
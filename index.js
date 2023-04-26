import express  from 'express';
import cors  from 'cors';

import cadastrarLivro from './controller/CadastrarLivro.js';
import listarLivros from './controller/ListarLivros.js';
import buscarLivros from './controller/BuscarLivros.js';
import deletarLivro from './controller/DeletarLivro.js';
import alterarLivro from './controller/AlterarLivro.js';

import listarIrmaos from './controller/ListarIrmaos.js';
import buscarIrmaos from './controller/BuscarIrmaos.js';
import cadastrarIrmao from './controller/CadastrarIrmao.js';
import deletarIrmao from './controller/DeletarIrmao.js';
import alterarIrmao from './controller/AlterarIrmao.js';

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8800;

app.listen(8800, () => {
    console.log('Servidor Iniciado ...');
});

app.get('/listarlivros', listarLivros);
app.get('/buscarlivros/:iniciais', buscarLivros);
app.post('/cadastrarlivro', cadastrarLivro);
app.put('/alterarlivro', alterarLivro);
app.delete('/deletarlivro/:id', deletarLivro);

app.get('/listarirmaos', listarIrmaos);
app.get('/buscarirmaos/:iniciais', buscarIrmaos);
app.post('/cadastrarirmao', cadastrarIrmao);
app.put('/alterarirmao', alterarIrmao);
app.delete('/deletarirmao/:id', deletarIrmao);
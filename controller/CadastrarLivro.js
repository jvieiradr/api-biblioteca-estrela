import banco from '../db.js';

const cadastrarLivro = (req, res) => {
    const query = "INSERT INTO livros (titulo, autor, editora, ano) VALUES (?);";
    const novoLivro = [
        req.body.titulo,
        req.body.autor,
        req.body.editora,
        req.body.ano,
    ];

    banco.query(query, [novoLivro], (erro) => {
        if (erro) return res.json (erro);
        return res.status(200).json('Livro Cadastrado com Sucesso!');
    });
};

export default cadastrarLivro;
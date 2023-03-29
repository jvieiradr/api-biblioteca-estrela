import banco from '../db.js';

const alterarLivro = (req, res) => {
    const query = 'UPDATE livros SET titulo=?, autor=?, editora=?, ano=? WHERE id=?;';

    const livroAlterado = {
        titulo: req.body.titulo,
        autor: req.body.autor,
        editora: req.body.editora,
        ano: req.body.ano,
        id: req.body.id
    };

    banco.query(query, [livroAlterado.titulo, livroAlterado.autor, livroAlterado.editora, livroAlterado.ano, livroAlterado.id], (erro) => {
        if (erro) return res.json('Erro ao Alterar o Livro.');
        return res.status(200).json('Livro Alterado com Sucesso.');
    });
};

export default alterarLivro;
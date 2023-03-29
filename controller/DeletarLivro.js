import banco from '../db.js';

const deletarLivro = (req, res) => {
    const query = 'DELETE FROM livros WHERE id=?;';

    banco.query(query, [req.params.id], (erro) => {
        if (erro) return res.json('Erro ao Deletar o Livro!!!');
        return res.status(200).json('Livro Deletado com Sucesso!!!');
    });
};

export default deletarLivro;
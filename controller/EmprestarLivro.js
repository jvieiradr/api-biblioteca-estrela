import banco from '../db.js';

const devolverLivro = (req, res) => {
    const query = 'UPDATE emprestimos SET devolvido=0 WHERE id=?;';

    banco.query(query, req.body.id, (erro) => {
        if (erro) return res.json('Erro ao Devolver o Livro.');
        return res.status(200).json('Livro Devolvido com Sucesso.');
    });
};

export default devolverLivro;
import banco from '../db.js';

const deletarEmprestimo = (req, res) => {
    const query = 'DELETE FROM emprestimos WHERE id=?;';

    banco.query(query, [req.params.id], (erro) => {
        if (erro) return res.json('Erro ao Deletar o Emprestimo!!!');
        return res.status(200).json('Emprestimo Deletado com Sucesso!!!');
    });
};

export default deletarEmprestimo;
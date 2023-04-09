import banco from '../db.js';

const alterarIrmao = (req, res) => {
    const query = 'UPDATE irmaos SET nome=?, email=?, telefone=?, loja=? WHERE id=?;';

    const irmaoAlterado = {
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        loja: req.body.loja,
        id: req.body.id
    };

    banco.query(query, [irmaoAlterado.nome, irmaoAlterado.email, irmaoAlterado.telefone, irmaoAlterado.loja, irmaoAlterado.id], (erro) => {
        if (erro) return res.json('Erro ao Alterar o Irmão.');
        return res.status(200).json('Irmão Alterado com Sucesso.');
    });
};

export default alterarIrmao;
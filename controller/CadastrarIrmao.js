import banco from '../db.js';

const cadastrarIrmao = (req, res) => {
    const query = "INSERT INTO irmaos (nome, email, telefone, loja) VALUES (?);";
    const novoIrmao = [
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.loja,
    ];

    banco.query(query, [novoIrmao], (erro) => {
        if (erro) return res.json (erro);
        return res.status(200).json('Irmão Cadastrado com Sucesso!');
    });
};

export default cadastrarIrmao;
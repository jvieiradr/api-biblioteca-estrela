import banco from '../db.js';

const cadastrarEmprestimo = (req, res) => {
    const query = "INSERT INTO emprestimos (nome_irmao, titulo_livro, data_emprestimo, data_devolucao, devolvido) VALUES (?);";
    const novoEmprestimo = [
        req.body.nomeIrmao,
        req.body.tituloLivro,
        req.body.dataEmprestimo,
        req.body.dataDevolucao,
        req.body.devolvido
    ];

    banco.query(query, [novoEmprestimo], (erro) => {
        if (erro) return res.json (erro);
        return res.status(200).json('Emprestimo Cadastrado com Sucesso!');
    });
};

export default cadastrarEmprestimo;
import banco from '../db.js';

const listarEmprestimos = (req, res) => {
    const query = 'SELECT id, nome_irmao, titulo_livro, date_format(data_emprestimo, "%d/%m/%Y") as data_emprestimo, date_format(data_devolucao, "%d/%m/%Y") as data_devolucao, devolvido FROM emprestimos ORDER BY devolvido, nome_irmao;';

    banco.query(query, (erro, data) => {
        if (erro) return res.json(erro);
        return res.status(200).json(data);
    })
};

export default listarEmprestimos;
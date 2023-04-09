import banco from '../db.js';

const deletarIrmao = (req, res) => {
    const query = 'DELETE FROM irmaos WHERE id=?;';

    banco.query(query, [req.params.id], (erro) => {
        if (erro) return res.json('Erro ao Deletar o Irmão!!!');
        return res.status(200).json('Irmão Deletado com Sucesso!!!');
    });
};

export default deletarIrmao;
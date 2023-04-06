import banco from '../db.js';

const listarIrmaos = (req, res) => {
    const query = 'SELECT * FROM irmaos ORDER BY nome;';

    banco.query(query, (erro, data) => {
        if (erro) return res.json(erro);
        return res.status(200).json(data);
    })
};

export default listarIrmaos;
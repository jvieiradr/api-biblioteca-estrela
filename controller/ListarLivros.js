import banco from '../db.js';

const listarLivros = (req, res) => {
    const query = 'SELECT * FROM livros ORDER BY titulo;';

    banco.query(query, (erro, data) => {
        if (erro) return res.json(erro);
        return res.status(200).json(data);
    })
};

export default listarLivros;
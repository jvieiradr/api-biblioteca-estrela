import banco from '../db.js';

const buscarLivros = (req, res) => {
    const iniciais = req.params.iniciais;

    if (iniciais == '*') {
        var query = "SELECT * FROM livros ORDER BY titulo;";
    } else {
        var query = "SELECT * FROM livros WHERE titulo LIKE '" + iniciais + "%' ORDER BY titulo;";
    };

    banco.query(query, (erro, data) => {
        if (erro) return res.json(erro);
        return res.status(200).json(data);
    })
};

export default buscarLivros;
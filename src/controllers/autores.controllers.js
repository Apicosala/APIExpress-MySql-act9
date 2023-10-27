const AutorModel = require('../models/autores.model')

//GET
const getAllAutores = async (req, res) => {
    try {
        const [result] = await AutorModel.selectAllAutores();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }

};
const getAutoresById = async (req, res) => {
    try {
        const { autorId } = req.params;
        const [result] = await AutorModel.selectAutoresById(autorId);
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message });
    }
};

//POST
const createAutor = async (req, res) => {
    try {
        const [result] = await AutorModel.insertAutor(req.body);
        const [autor] = await AutorModel.selectAutoresById(result.insertId);
        res.json(autor[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

//PUT
const updateAutor = async (req, res) => {
    try {
        const { autorId } = req.params;
        const [result] = await AutorModel.updateAutorById(autorId, req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

//DELETE
const deleteAutor = async (req, res) => {
    try {
        const { autorId } = req.params;
        const [result] = await AutorModel.deleteAutorById(autorId);
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message })
    }
};


module.exports = {
    getAllAutores,
    getAutoresById,
    createAutor,
    updateAutor,
    deleteAutor
}
const UsersModel = require('../models/users')
const getAllusers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllusers();

    res.json({
        message: 'GET all users success',
        data: data
    });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage : error,
        })
    }
    
}

const createNewUser = async (req, res) => {
    const {body} = req;
    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'CREATE all users success',
            data: body
        });
    } catch (error) { 
        res.status(500).json({
            message: 'Server Error',
            serverMessage : error,
        })
    }
}

const updateNewUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateNewUser(body, idUser);
        res.json({
            message: 'Update succeess',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage : error,
        })
    }
}

const deleteUser = async (req, res) => {
    const {idUser} = req.params;
    try {
        await UsersModel.deleteUser(idUser);
        res.json({
            message: 'delete succeess',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage : error,
        })
    }
}

module.exports = {
    getAllusers,
    createNewUser,
    updateNewUser,
    deleteUser,
}
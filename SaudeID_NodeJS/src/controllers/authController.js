const express = require('express');
const bcrypt = require('bcryptjs');

const Autor = require('../models/autor');

const router = express.Router();

router.post('/register', async(req, res) => {

    const {email} = req.body;

    try{

        if(await Autor.findOne({email}))
            return res.status(400).send({error: 'Autor ja existe'})

        const autor = await Autor.create(req.body);

        autor.password = undefined;

        return res.send({autor});
    }
    catch(ex){
        return res.status(400).send({error: 'Falha no registro'});
    }
});

router.post('/authenticate', async(req, res) => {
    const {email, password} = req.body;

    const autor = await Autor.findOne({email}).select('+password');

    if(!autor)
        return res.status(400).send({error: 'Autor não encontrado'});

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Password invalido'});

    autor.password = undefined;

    res.send({autor});
})

module.exports = app => app.use('/auth', router);
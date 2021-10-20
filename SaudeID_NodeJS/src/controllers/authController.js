const express = require('express');
const bcrypt = require('bcryptjs');

const repository = require('../repositories/autorRepository');


exports.post = async(req, res) => {

    const {email} = req.body;

    try{
        var data = await repository.authenticate(req.body);
        if(data)
            return res.status(400).send({error: 'Autor ja existe'})

        const autor = await repository.create(req.body);

        autor.password = undefined;

        return res.send({autor});
    }
    catch(ex){
        return res.status(400).send({error: 'Falha no registro'});
    }
};

exports.authenticate = async(req, res) => {
    const {email, password} = req.body;

    const autor = await repository.authenticate(req.body);

    if(!autor)
        return res.status(400).send({error: 'Autor não encontrado'});

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Password invalido'});

    autor.password = undefined;

    res.send({autor});
};


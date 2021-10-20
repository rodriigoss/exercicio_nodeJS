const mongoose = require('mongoose');
const Autor = mongoose.model('Autor');

exports.create = async(data) => {
    var autor = new Autor(data);
    await autor.save();
}

exports.authenticate = async(data) => {
    const res = await Autor.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}

exports.getById = async(id) => {
    const res = await Autor.findById(id);
    return res;
}


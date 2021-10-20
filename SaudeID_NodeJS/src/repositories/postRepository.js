const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.get = async() => {
    const res = await Post.find();
    return res;
}

exports.getById = async(id) => {
    const res = await Post.findById(id);
    return res;
}

exports.create = async(data) => {
    var post = new Post(data);
    await post.save();
}

exports.update = async(id, data) => {
    await Post
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
            }
        });
}

exports.delete = async(id) => {
    await Post.findOneAndRemove(id);
}


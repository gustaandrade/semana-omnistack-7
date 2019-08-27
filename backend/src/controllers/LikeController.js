const Post = require('../models/Post');

module.exports = {
    async store(req, res) {
        const post = await Post.findById(req.params.id);
        
        post.likes += 1;
        await post.save();

        req.io.emit('like', post);     // com isso, todos os usuários conectados receberão uma mensagem através do socket.io com a informação em tempo real

        return res.json(post);
    }
};
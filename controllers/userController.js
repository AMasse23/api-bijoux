const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, 'your-secret-key', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};
exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username, password } });
    if (user) {
        const accessToken = jwt.sign(JSON.stringify(user), 'your-secret-key');
        res.json({ accessToken });
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }
};

exports.getUsers = () => {
    return User.findAll();
}

exports.updateUser = (req, res) => {
    const { username, password } = req.body;
    const id = req.user.id;
    User.update({ username, password }, { where: { id } })
        .then(() => res.json({ id, username, password }))
        .catch(err => res.status(400).json({ error: err }));
}
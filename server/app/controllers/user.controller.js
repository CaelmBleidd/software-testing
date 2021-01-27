const db = require("../models")
const User = db.users;

exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can't be empty"
        });
        return;
    }

    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    User.create(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while creating the user"
            });
        });
};

exports.findUser = (req, res) => {
    User.findAll({where: {username: req.query.username, password: req.query.password}})
        .then(data => {
            res.send(data)
        })
        .catch(() => {
            res.status(401).send({
                message: "No such user found"
            });
        });
};
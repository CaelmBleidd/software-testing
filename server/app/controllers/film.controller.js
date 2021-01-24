const db = require("../models");
const Film = db.films;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can't be empty"
        });
        return;
    }

    const film = {
        title: req.body.title,
        description: req.body.description,
        directors: req.body.directors,
        published: req.body.published ? req.body.published : false
    };

    Film.create(film)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while creating the Film"
            });
        });
};

exports.findAll = (req, res) => {
    const title = req.query.title
    const condition = title ? {title: {[Op.iLike]: `%${title}%`}} : null;

    Film.findAll({where: condition})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while retrieving films"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Film.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(() => {
            res.status(500).send({
                message: "Error retrieving Film with id = " + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Film.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Film was updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update film with id = ${id}`
                });
            }
        })
        .catch(() => {
            res.status(500).send({
                message: "Error updating Film with id = " + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Film.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Film was deleted successfully"
                });
            }
        })
        .catch(() => {
            res.status(500).send({
                message: "Couldn't delete film with id = " + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Film.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({message: `${nums} films were deleted successfully`});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials"
            });
        });
};

exports.findAllPublished = (req, res) => {
    Film.findAll({where: {published: true}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while retrieving films"
            });
        });
};
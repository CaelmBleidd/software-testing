module.exports = app => {
    const films = require("../controllers/film.controller");

    const filmRouter = require("express").Router();

    filmRouter.post("/", films.create);

    filmRouter.get("/", films.findAll);

    filmRouter.get("/published", films.findAllPublished)

    filmRouter.get("/:id", films.findOne)

    filmRouter.put("/:id", films.update)

    filmRouter.delete("/:id", films.delete)

    filmRouter.delete("/", films.deleteAll)

    app.use('/api/films', filmRouter)
};
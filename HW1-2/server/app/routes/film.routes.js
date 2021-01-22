module.exports = app => {
    const films = require("../controllers/film.controller");

    const router = require("express").Router();

    router.post("/", films.create);

    router.get("/", films.findAll);

    router.get("/published", films.findAllPublished)

    router.get("/:id", films.findOne)

    router.put("/:id", films.update)

    router.delete("/:id", films.delete)

    router.delete("/", films.deleteAll)

    app.use('/api/films', router)
};
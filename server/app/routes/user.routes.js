module.exports = app => {
    const users = require("../controllers/user.controller");

    const userRouter = require("express").Router();

    userRouter.get("/login", users.findUser)

    userRouter.post("/signup", users.create)

    app.use('/api/users', userRouter)
};
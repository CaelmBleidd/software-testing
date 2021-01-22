module.exports = {
    HOST: "localhost",
    USER: "CaelmBleidd",
    DB: "kino",
    dialect: "postgres",
    password: '',
    port: 5432,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
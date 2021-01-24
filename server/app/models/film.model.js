module.exports = (sequelize, Sequelize) => {
    const Film = sequelize.define("film", {
        title: {type: Sequelize.STRING}, description: {type: Sequelize.TEXT},
        directors: {type: Sequelize.STRING},
        published: {type: Sequelize.BOOLEAN},
        createdAt: {type: Sequelize.DATE, field: 'created_at'},
        updatedAt: {type: Sequelize.DATE, field: 'updated_at'},
    });

    return Film;
};
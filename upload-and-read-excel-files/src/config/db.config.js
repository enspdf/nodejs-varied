module.exports = {
    HOST: "localhost",
    USER: 'root',
    PASSWORD: "Sebas123#",
    DB: "node_import_data",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
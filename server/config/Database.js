import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.REACT_APP_DB_NAME, process.env.REACT_APP_DB_USER, process.env.REACT_APP_DB_PASS, {
    host: process.env.REACT_APP_DB_HOST,
    dialect: "mysql"
})

export default db;
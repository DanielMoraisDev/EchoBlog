import { Sequelize } from "sequelize"
import "dotenv/config"

import db from "./databases.js"

const conn = new Sequelize(db.db, db.user, db.password, {
    dialect: "mysql",
    host: db.host
})

try {
    await conn.authenticate()
    console.log("[DB] Conexão realizada com sucesso")
} catch (error) {
    console.error("[DB] Error: " + error)
}

export default conn
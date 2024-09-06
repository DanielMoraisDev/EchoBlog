import { Sequelize } from "sequelize"
import "dotenv/config"

const DBName = process.env.DB_NAME
const DBUser = process.env.DB_USER
const DBPassword = process.env.DB_PASSWORD
const DBHost = process.env.DB_HOST

const conn = new Sequelize(DBName, DBUser, DBPassword, {
    dialect: "mysql",
    host: DBHost 
})

try {
    await conn.authenticate()
    console.log("[DB] Conexão realizada com sucesso")
} catch (error) {
    console.error("[DB] Error: " + error)
}

export default conn
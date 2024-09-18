import dotenv from "dotenv/config"

dotenv.config()

let db = {
    port: process.env.PORT,
    bd: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST
}

if (process.env.NODE_ENV === "test") {
    db = {
        port: process.env.PORT_TEST,
        bd: process.env.DB_TEST_NAME,
        user: process.env.DB_TEST_USER,
        password: process.env.DB_TEST_PASSWORD,
        host: process.env.DB_TEST_HOST
    } 
}

export default db
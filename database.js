import mysql from 'mysql2'
import dotenv from "dotenv"
dotenv.config();
const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
}).promise()


async function getbooks(){
    const [rows] = await pool.query("SELECT * FROM books")
    return rows
}
async function getbook(id){
    const [rows] = await pool.query("SELECT * FROM books WHERE id = ?",[id])
    return rows 
}



const books =  await getbook(1)

console.log(books);
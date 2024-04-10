import mysql from 'mysql2'
import dotenv from "dotenv"
dotenv.config();
const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
}).promise()


export async function getbooks(){
    const [rows] = await pool.query("SELECT * FROM books")
    return rows
}
export async function getbook(id){
    const [rows] = await pool.query("SELECT * FROM books WHERE id = ?",[id])
    return rows 
}
export async function createbook(title,genre,summary){
    const [result] = await pool.query('INSERT INTO books (title,genre,summary) VALUES (?,?,?)',[title,genre,summary])
    const id =  result.insertId
    return getbook(id)
}  

export async function getcomments(){
    const[rows] = await pool.query("SELECT * from comments")
    return rows
}



const book = await getbooks()

console.log(book)


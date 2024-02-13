import express from "express";

import{getbooks,getbook,createbook} from './database.js'
const app = express();
app.use(express.json());

app.get("/books",async (req,res)=>{
    const books = await getbooks()
    res.send(books)
})

app.get("/books/:id",async (req,res)=>{
    const id = req.params.id
    const book = await getbook(id)
    res.send(book)
})

app.post('/books', async(req,res)=>{
    const {title,genre,summary} = req.body
    const book = await createbook(title,genre,summary)
    res.status(201).send(book)
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

  app.listen (8080, ()=>{
    console.log("Server is running on port 8080")
  })
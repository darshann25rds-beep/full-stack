import http from 'node:http'
import { servestatic } from './utils/servestatic.js'

const PORT = 7000
const __dirname = import.meta.dirname

const server = http.createServer((req,res) =>{
    servestatic(__dirname)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, from server!</h1>')
})

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})
import express from "express"
import cors from "cors"
const app = express()

const PORT = 9000

app.use(cors())

app.use(express.json())

app.get('/api/login', (req, res) => {
    res.json({message: "login api endpoint"})
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
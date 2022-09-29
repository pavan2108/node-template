import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Connected to MongoDB')
        }
    }
)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

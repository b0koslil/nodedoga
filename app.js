import express from 'express'


const app = express()
const PORT = 3000

app.use(userRoutes)

app.listen(3000, () => console.log("fut"))
    

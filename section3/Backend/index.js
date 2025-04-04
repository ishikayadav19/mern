// importing express
const express = require('express'); //package ka naam variable bna kr import kr dega
require('dotenv').config(); //cannot be import direclty, import krne ke liye configure krna pdhta h en packages ko
const UserRouter = require('./routers/UserRouter')
// initialize express
const app = express();

const port = process.env.PORT || 5000 ;//env variable ko import krne ke liye process.env krte h
// middlewares
app.use(express.json()); // to parse the json data from the body of the request
app.use('/user',UserRouter);
// endpoint or routes
app.get('/', (req, res) => {
res.send("response from express")
})

app.get('/add', (req, res) => {
    res.send("response from add")
    })

app.get('/getall', (req, res) => {
        res.send("response from getall")
        })


app.get('/delete', (req, res) => {
            res.send("response from delete")
            })

app.get('/update', (req, res) => {
                res.send("response from update")
                })


// starting a server
app.listen(port,()=> {
    console.log('server started');
} /*callback*/);


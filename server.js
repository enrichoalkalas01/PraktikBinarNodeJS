const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const cors = require('cors')

app.use( cors() )

const dataUser = {
    username: 'enrichoalkalas',
    fullname: 'enricho alkalas',
    password: 1234567,
    address: 'depok',
    state: 'indonesia',
    province: 'west java'
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('dari node js ke website')
})

app.post('/link', (req, res) => {
    let dataClient = req.body
    // Checking Username
    if ( dataClient.username != dataUser.username ) {
        res.status(400).send({
            message: 'username or password is doesnt match'
        })
    } else {
        // Checking Password
        if ( dataClient.password != dataUser.password ) {
            res.status(400).send({
                message: 'username or password is doesnt match'
            })
        } else {
            res.header('Access-Control-Allow-Origin', '*')
            res.header('Access-Control-Allow-Credentials', true)
            res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
            res.header('Access-Control-Allow-Headers', 'Content-Type')

            res.status(200).send({
                message: 'success to log in',
                data: dataUser
            })
        }
    }
})

app.listen(port, () => {
    console.log(`Server is running in port : ${ port }`)
})
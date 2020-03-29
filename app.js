const express = require('express');
const mongoose = require('mongoose')
const index = require('./routes/index');
const admin =  require('./routes/admin')


const app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(express.static('public'));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dsm1234:dsm1234@cluster0-d9njd.mongodb.net/test?retryWrites=true&w=majority";
const connection = () => {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('connexion établite...')
        client.connect(err => {
            const collection = client.db("test").collection("devices");
            // perform actions on the collection object
            client.close();
    });
}
connection()

const db = mongoose.connection


app.use('/', index);
app.use('/admin', admin)


app.listen(process.env.PORT || 1234)
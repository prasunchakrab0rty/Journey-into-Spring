const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

let db;
MongoClient.connect('mongodb://localhost:27017/pyblog', { useUnifiedTopology: true }, (err, database) => {
    if (err) return console.log(err)
    db = database.db('pyblog')
    app.listen(process.env.PORT || 8000, () => {
        console.log('Mongo, Node Server Up & Running')
    })
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/api/article', async (req, res) => {
    let article = {
        title: req.body.title.toLowerCase(),
        content: req.body.content,
        comment: [],
        upvote: 0
    }
    db.collection("articles").insertOne(article, (err, result) => {
        if (err) {
            res.status(200).send(`Error in article creation: ${err}`)
        }
        res.status(200).send(`${result.result.n}    Article Created Successfully `)
    })

});

app.get('/api/article/:name', async (req, res) => {
    let query = { "title": req.params.name }
    db.collection("articles").findOne(query, (err, result) => {
        if (err) {
            res.status(200).send({ "Error": err })
        }
        res.status(200).send(result)
    })
});

app.put('/api/article/:name', async (req, res) => {

    let query = { "title": req.params.name }
    let { content, comment, upvote } = req.body;
    let updates = {}
    if (content) {
        updates = { $set: { "content": content } }
    } else if (comment) {
        updates = { $push: { "comment": comment } }
    } else if (upvote) {
        updates = { $inc: { "upvote": 1 } }
    } else {
        res.status(200).send('Invalid Parameters Provided')
        return
    }
    db.collection("articles").updateOne(query, updates, (err, result) => {
        if (err) {
            res.status(200).send({ "Error": err })
        }
        res.status(200).send(`${result.result.n} Value Updated`)
    })
});

app.delete('/api/article/:name', async (req, res) => {
    let query = { "title": req.params.name }
    db.collection("articles").deleteOne(query, (err, result) => {
        if (err) {
            res.status(200).send({ "Error": err })
        }
        res.status(200).send(`${result.result.n} Value Deleted`)
    })
});
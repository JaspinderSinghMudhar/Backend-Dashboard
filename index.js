const express = require('express');
const app = express()
const port = 3000
const { MongoClient } = require('mongodb');
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db_url = 'mongodb://localhost:27017';
const client = new MongoClient(db_url);

app.post('/', (req, res) => {
    console.log(req.body);
})

app.get('/api/products', async (req, res) => {
    await client.connect();
    const data = await client.db('woo-dashboard').collection('products').find({}).toArray();
    res.json(data);
})

app.get('/api/product', async (req, res) => {
    let product_perma = req.query.id;
    await client.connect();
    const data = await client
        .db('woo-dashboard')
        .collection('products')
        .findOne({ id: Number(product_perma) })
    res.json(data);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
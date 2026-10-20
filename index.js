const express = require('express');
const app = express()
const port = 3000

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.post('/', (req, res) => {
    console.log(req.body);
})


app.post('/api', (req, res) => {
    res.send('response from backend api')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
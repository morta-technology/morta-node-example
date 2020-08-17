const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/notifications', (req) => {
    console.log(req.body)
})

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});
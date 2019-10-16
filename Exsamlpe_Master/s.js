const express = require('express')
const app = express()
const port = 3000

const a = require('./a')

app.get('/', async (req, res) => {
    console.log("on");
    await a.auto2();
    console.log("on1");
    res.json({ a: 1, b: 2 })
    console.log("on2");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
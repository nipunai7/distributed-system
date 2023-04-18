const express = require('express');
const app = express();
const port = 3000;
const getId = require('docker-container-id');

app.get('/', async (req, res) => {
    res.send(`Hi! My Docker container ID is ${await getId()}.`);
});

app.listen(port, () => {
    console.log(`Node.js app listening at http://192.168.90.26:${port}`);
});
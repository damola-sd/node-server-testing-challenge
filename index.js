const express = require('express');
const Heroes = require('./data/models/heroes-model');

require('dotenv').config();
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

server.get('/heroes', (req, res) => {
    Heroes.getAll()
        .then(heroes => {
            res.status(200).json(heroes);
        })
        .catch(error => {
            const err = {
              message: error.message,
              stack: error.stack,
            };
            res.status(500).json(err);
          });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));

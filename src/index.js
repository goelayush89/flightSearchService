const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const setupAndStartServer = async () => {
    const app = express();

    app.listen(PORT, () => {
        console.log(`server is working on ${PORT} `);
    })
}

setupAndStartServer();
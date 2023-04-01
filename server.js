const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 3000;
// static file server
const App = express();
// opens the directory's for the server
App.use(express.static('WebPages'));
App.use(express.static('Files'));

// get request
App.get('/AllWebsites', (request, response) => {
    console.log("Got Websites request");
    response.status = 200;
    const AllDirectories = fs.readdirSync(path.join(__dirname, '/WebPages/'), { withFileTypes: true }).filter((Entry) => {return Entry.isDirectory()});
    response.send(AllDirectories);
});

// get request
App.get('/AllFiles', (request, response) => {
    console.log("Got Files request");
    response.status = 200;
    const AllFiles = fs.readdirSync(path.join(__dirname, '/Files/'), { withFileTypes: true }).filter((Entry) => {return !(Entry.isDirectory())});
    response.send(AllFiles);
});

// CORS implementation
App.options("/", (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    response.sendStatus(200);
  });

// starts the server
App.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
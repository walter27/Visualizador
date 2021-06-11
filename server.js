const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/grupofaro'));

app.get('/column', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/column/index.html'));
});

app.get('/line', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/line/index.html'));
});

app.get('/sankey', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/sankey/index.html'));
});

app.get('/streamgraph', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/streamgraph/index.html'));
});

app.get('/map', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/map/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server run in port", process.env.PORT || 3000);
});
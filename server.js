const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/grupofaro'));

//COLUMN SERVICES
app.get('/column/primera/twitter', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/column/primera_vuelta/twitter/index.html'));
});
app.get('/column/primera/instagram', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/column/primera_vuelta/instagram/index.html'));
});
app.get('/column/segunda/twitter', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/column/segunda_vuelta/twitter/index.html'));
});
app.get('/column/segunda/instagram', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/column/segunda_vuelta/instagram/index.html'));
});

//HEATMAP SERVICES
app.get('/heatmap/primera/twitter', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/heatmap/primera_vuelta/twitter/index.html'));
});
app.get('/heatmap/primera/instagram', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/heatmap/primera_vuelta/instagram/index.html'));
});
app.get('/heatmap/segunda/twitter', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/heatmap/segunda_vuelta/twitter/index.html'));
});
app.get('/heatmap/segunda/instagram', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/heatmap/segunda_vuelta/instagram/index.html'));
});

//SCATTER SERVICES
app.get('/scatter/primera/twitter', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/scatter/primera_vuelta/twitter/index.html'));
});
app.get('/scatter/primera/instagram', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/scatter/primera_vuelta/instagram/index.html'));
});
app.get('/scater/primera/instagram-twitter', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/scater/primera_vuelta/index.html'));
});
app.get('/scater/segunda/instagram-twitter', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/scater/segunda_vuelta/index.html'));
});

//STACKED SERVICES
app.get('/stacked/primera/twitter', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/stacked/primera_vuelta/twitter/index.html'));
});
app.get('/stacked/primera/instagram', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/stacked/primera_vuelta/instagram/index.html'));
});
app.get('/stacked/segunda/twitter', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/stacked/segunda_vuelta/twitter/index.html'));
});
app.get('/stacked/segunda/instagram', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/stacked/segunda_vuelta/instagram/index.html'));
});

//SERVICES BAR
app.get('/bar/primera/twitter-instagram', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/bar/primera_vuelta/index.html'));
});

app.get('/bar/primera/twitter-instagram', function(req, res) {
    res.sendFile(path.join(__dirname + '/grupofaro/public/bar/segunda_vuelta/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server run in port ", process.env.PORT || 3000);
});
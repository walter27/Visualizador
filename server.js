const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/grupofaro'));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/grupofaro/column-basic/index.html'));
});

app.listen(process.env.PORT || 3000);
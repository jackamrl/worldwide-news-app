const express = require('express');
const path = require('path');
const app = express();
// Middleware pour forcer la redirection vers HTTPS
app.use(forceHttps);

app.use(express.static(__dirname + '/dist/worldwide-news-app'));
app.get('/*', function(req,res) {res.sendFile(path.join(__dirname+'/dist/worldwide-news-app/index.html'));});

app.listen(process.env.PORT || 8080);

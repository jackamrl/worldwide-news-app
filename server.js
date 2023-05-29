const express = require('express');
const path = require('path');
const app = express();

// Middleware pour forcer la redirection vers HTTPS
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect('https://' + req.hostname + req.url);
  }
  next();
});

app.use(express.static(__dirname + '/dist/worldwide-news-app'));
app.get('/*', function(req,res) {res.sendFile(path.join(__dirname+'/dist/worldwide-news-app/index.html'));});

app.listen(process.env.PORT || 8080);

const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', (req, res) => {
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
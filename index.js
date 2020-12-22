let express = require("express");
let app = express();
//app.use(express.logger());

app.get('/', function(request, response) {
    response.send('Hello World!');
});

let port = 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
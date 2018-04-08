var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
app.use(express.static(__dirname + '/public'));
app.listen(port);

var fs = require('fs');
var file = "README.md";
var rootReadme = "./" + file;
var publicReadme = "./public/" + file;


fs.watchFile(rootReadme, function (curr, prev) {
    try {
        if (curr.mtime != prev.mtime) {
            fs.readFile(rootReadme, function (readError, data) {
                if (readError) throw readError;
                console.log("Success Reading");
                fs.writeFile(publicReadme, data, (err) => {
                    if (err) throw err;
                    console.log(rootReadme + ' modified and now copied to ' + publicReadme);
                });
            });
        }
    } catch (error) {
        console.log(error);
    }
});
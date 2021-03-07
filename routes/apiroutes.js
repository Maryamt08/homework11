const fs = require("fs");
const path = require("path");


module.exports = function(app) {

    app.get('/api/notes', function (req, res) {
      fs.readFile("db/db.json", "utf8", function(error,data) {
        res.json(JSON.parse(data));
      });
      
    });
}

app.post("/api/notes", function (req, res) {
    notesData.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(notesData), 'utf8');
    res.json(true);
});
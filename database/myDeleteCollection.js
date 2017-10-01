var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/portfolioDb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.personalityTable.drop();
  db.skillTable.drop();
  db.sectorlTable.drop();
  db.experienceTable.drop();
  db.favouriteTable.drop();
});
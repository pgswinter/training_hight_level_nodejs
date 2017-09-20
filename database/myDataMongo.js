var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/portfolioDb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var personalityTable = [
    { id: 1,
      idSkill: [1,2,3,4,5,6,7,8,9,10],
      idFavourite: [1,2,3],
      career: 'Front end Developer',
      name: 'Anh(Robert) T. NGUYEN',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, placeat, nostrum? Libero quod animi incidunt laborum exercitationem! Consectetur aperiam voluptate quo eius, sed accusamus soluta reiciendis animi veniam rem ipsum!`,
      relationship: 'single',
      national: 'vietnam',
      language: 'vietnamese/english',
      address: '135/1/96 Nguyen Huu Canh, Binh Thanh, Ho Chi Minh',
      phone: '10693547727',
      mail: 'tuananh.nguyen.freelance@gmail.com',
      education: 'Duy Tan University'
    },
    { id: 2,
      idSkill: [5],
      idFavourite: [2],
      career: 'Artist',
      name: 'Kien Quoc VO',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, placeat, nostrum? Libero quod animi incidunt laborum exercitationem! Consectetur aperiam voluptate quo eius, sed accusamus soluta reiciendis animi veniam rem ipsum!`,
      relationship: 'single',
      national: 'vietnam',
      language: 'vietnamese/english',
      address: 'Hai Chau, Da Nang',
      phone: '123456789',
      mail: 'quocvo.designer@gmail.com',
      education: 'Duy Tan University'
    }
  ];
  var skillTable = [
      { 
        id: 1,
        idSector: [1],
        skill: 'React/Readux',
      },
      { 
        id: 2,
        idSector: [1],
        skill: 'Webpack'
      },
      { 
        id: 3,
        idSector: [1],
        skill: 'Javascript/Jquery/ES6'
      },
      { 
        id: 4,
        idSector: [1],
        skill: 'SASS/Bootstrap'
      },
      { 
        id: 5,
        idSector: [1],
        skill: 'Photoshop/Illustrator'
      },
      { 
        id: 6,
        idSector: [1],
        skill: 'ExpressJS'
      },
      { 
        id: 7, 
        skill: 'GIT'
      },
      { 
        id: 8,
        idSector: [1],
        skill: 'MongoDB/Moongose'
      },
      { 
        id: 9,
        idSector: [1],
        skill: 'GULP'
      },
      { 
        id: 10,
        idSector: [1], 
        skill: 'HTML/pug/ejs'
      }
  ];
  var sectorlTable = [
    { 
      id: 1, 
      sector: 'IT/Software'
    }
  ];
  var experienceTable = [
    { 
      id: 1,
      idSector: [1],
      nameConpany: 'Amaris',
      position: 'Senior Front end Developer',
      time: 'from 02/2016 to actually',
      achivement: 'amaris.com'
    }
  ];
  var favouriteTable = [
    {
      id: 1,
      name: 'Travelling'
    },
    {
      id: 2,
      name: 'Music'
    },
    {
      id: 3,
      name: 'Blog'
    },
  ]
  db.collection("personalityTable").insertMany(personalityTable, function(err, res) {
    if (err) throw err;
    console.log("personalityTable inserted");
    db.close();
  });
  db.collection("skillTable").insertMany(skillTable, function(err, res) {
    if (err) throw err;
    console.log("skillTable inserted");
    db.close();
  });
  db.collection("sectorlTable").insertMany(sectorlTable, function(err, res) {
    if (err) throw err;
    console.log("sectorlTable inserted");
    db.close();
  });
  db.collection("experienceTable").insertMany(experienceTable, function(err, res) {
    if (err) throw err;
    console.log("experienceTable inserted");
    db.close();
  });
  db.collection("favouriteTable").insertMany(favouriteTable, function(err, res) {
    if (err) throw err;
    console.log("favouriteTable inserted");
    db.close();
  });
});
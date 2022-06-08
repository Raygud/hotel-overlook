const { request } = require("express");
const mysql = require('mysql');
const Datastore = require("nedb")
const { response } = require("express");
const express = require("express");
const { data } = require("./node_modules/cheerio/lib/api/attributes");
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()

var con = mysql.createConnection({
  host: "mysql67.unoeuro.com",
  port: "3306",
  user: "runigud_com",
  password: process.env.DatabasePass,
  database: "runigud_com_db"
});

DataBaseResult = []



//Login credentials for database
let Connection = mysql.createConnection({
  host: "mysql67.unoeuro.com",
  port: "3306",
  user: "runigud_com",
  password: process.env.DatabasePass,
  database: "runigud_com_db"
});

//Connect too external database
Connection.connect(function (err) {
  if (err) throw err;
  console.log("Connection to Database successful!" + Connection.database);
});


app.listen(port, () => console.log(`Server started and listening on Port ${port}`));

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database.db");
database.loadDatabase();

app.get("/api", (request, response) => {
  Connection.query("SELECT * FROM Dataset", function (err, result, fields) {
    if (err) throw err;
    ProccessedData = result
    // // console.log(result);
    // console.log("Penis")
    //Select all customers and return the result object:
    con.query("SELECT * FROM Dataset", function (err, result, fields) {
      if (err) throw err;
      // console.log(DataBaseResult.length + " Db - result " + result.length)
      if (DataBaseResult.length < result.length) {
        if (DataBaseResult.length == 0) {
          for (let i = 0; i < result.length; i++) {
            DataBaseResult.push({
              Lon: result[i].lon,
              Lat: result[i].lat,
              Mood: result[i].mood,
              Image64: result[i].image64,
              TimeStamp: result[i].timestamp
            })
          }
        }
        else {
          for (let i = DataBaseResult.length; i < result.length; i++) {
            DataBaseResult.push({
              Lon: result[i].lon,
              Lat: result[i].lat,
              Mood: result[i].mood,
              Image64: result[i].image64,
              TimeStamp: result[i].timestamp
            })
          }
        }
        console.log(DataBaseResult);
      }
      else {
      }
    });
  });
  response.json(DataBaseResult)

})

app.post("/api", (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
  // console.log(data.lat)

  console.log("Connected!");
  var sql = `INSERT INTO Dataset (lon, lat, mood, image64, timestamp) VALUES ('${data.lon}','${data.lat}','${data.mood}','${data.image64}','${data.timestamp}');`;
  Connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");

  });


})

app.post("/Login", (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
  console.log(data.UserName, data.PassWord)
  con.query("SELECT * FROM Users", function (err, result, fields) {
    for (let i = 0; i < result.length; i++) {
      if (data.UserName == result[i].UserName && data.PassWord == result[i].PassWord) {
        console.log("Access granted!")

      }
      else { console.log("Access denied!"), console.log("No such user") }
    }
  })

})

app.post("/MemberSite", (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
  console.log(data.UserName, data.PassWord)
  con.query("SELECT * FROM Users", function (err, result, fields) {
    for (let i = 0; i < result.length; i++) {
      console.log(result[i])
      if (data.UserName == result[i].UserName && data.PassWord == result[i].PassWord) {
        console.log("Access granted!")

      }
      else { console.log("Access denied!"), console.log("No such user") }
    }
  })

})


app.post("/Message", (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
  console.log(data.UserName, data.PassWord)
  con.query("SELECT * FROM Users", function (err, result, fields) {
    for (let i = 0; i < result.length; i++) {
      console.log(result[i])
      if (data.UserName == result[i].UserName && data.PassWord == result[i].PassWord) {
        console.log("Access granted!")

      }
      else { console.log("Access denied!"), console.log("No such user") }
    }
  })

})











// con.connect(function (err) {
//   if (err) throw err;
//   //Select all customers and return the result object:
//   con.query("SELECT * FROM Dataset", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result.length);
//     for (let i = 0; i < result.length; i++) {
//       DataBaseResult.push({
//         Lon: result[i].lon,
//         Lat: result[i].lat,
//         Mood: result[i].mood,
//         Image64: result[i].image64,
//         TimeStamp: result[i].timestamp
//       })
//     }
//     console.log(DataBaseResult);
//   });
// });
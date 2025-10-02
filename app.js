console.log("Web Serverni boshlash");
const express = require('express'); // expres bu external package bolib BACKEND qurib beradi,
const res = require("express/lib/response");
const app = express(); // app objectini express ga tenglab olyabdi!

// MongoDB connect
const db = require("./server"). db(); // db - bu object bolib
const mongodb = require("mongodb"); // mongo db ni chaqirib olyabdi
// 1: Kirish code
app.use(express.static("public")); //middlewae DESIGN pattern, publicdagi sourcelarni filelarni ommaga ochiqlab beryabdi
app.use(express.json()); // Rest  API tashkil
app.use(express.urlencoded({ extended: true })); //tRADITIONAL API tashkil qilib beryabdi

// 2: Session code
// 3: Views code
app.set("views", "views"); // backendni frontenda quryabmiz!!! ejs texnologiyalar orqali srcni viewsdan topasizdeyabmiz
app.set("view engine", "ejs"); // chunki yengil va both backend and frontenda ishlay oladi

// 4: Routing code
app.post("/create-item", (req, res) => {    // callback functioni orqali create-itemni qurib olyabmiz
  console.log("user entered /create-item")
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => { // db plans nomli collectiondagi malumotlarni chaiqirib olyabdi
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id; 
  db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
    res.json({ state: "success" });
  })
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) }, 
    { $set: { reja: data.new_input } }, 
    function (err, data) {
    res.json({ state: "success"});
  }
);
});

app.post("/delete-all", (req, res) => {
  if(req.body.delete_all) {
    db.collection("plans").deleteMany(function() {
      res.json({state: "hamma rejalar ochirildi"});
    });
  }
});

app.get("/", function (req, res) {
  console.log('user entered /')
  db.collection("plans")
  .find()
  .toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      console.log(data);
      res.render("reja", { items: data });
    }
  });
});

 module.exports = app;


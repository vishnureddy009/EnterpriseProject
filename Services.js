

const express=require('express');
const app = express();
app.use(express.json());

app.get('/project/get_coll',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Project");
  dbo.listCollections().toArray(function(err, collections) {
    if (err) throw err;
    console.log(collections);
res.send(collections);
    db.close();
  });
});
});


app.get('/project/get_fee', (req,res,res1) => {
var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
   MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("Project");
  dbo.collection("fee").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
res.send(result)
    db.close();
});
});
});


app.post('/project/post_fee', (req,res) =>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("Project");
var myobj = [{amount : "1555", 
payment_date : "11-11-2019",
payee_name : Sheena,
balPending:2250}]
dbo.collection("fee").insert(myobj, function(err, res) {
if (err) throw err;
console.log("one document inserted in division collection" + res.insertedCount);
db.close();
});
dbo.collection("fee").find({}).toArray(function(err, result) {
if (err) throw err;
console.log(result);
res.send(result)
db.close();

});
});
});

app.put('/project/put_fee', (req,res) =>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("Project");
var myquery = { payee_name: "Sheena" };//update acc to
var newvalues = { $set: {amount :2222, payment_date : "12-12-2019", balPending: 1111} };
dbo.collection("fee").updateOne(myquery, newvalues, function(err, result) {
if (err) throw err;
console.log("1 document updated");
db.close();
});
dbo.collection("fee").find({}).toArray(function(err, result) {
if (err) throw err;
console.log(result);
res.send(result)
db.close();
});
});
});

 
app.delete('/project/delete_student', (req,res) =>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("Project");
var myquery = { payee_name : "Sheena" };
dbo.collection("fee").deleteOne(myquery, function(err, obj) {
if (err) throw err;
console.log("1 document deleted");
db.close();
});
dbo.collection("fee").find({}).toArray(function(err, result) {
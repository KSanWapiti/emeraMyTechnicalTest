const functions = require("firebase-functions");
const admin = require(`firebase-admin`);

const express = require("express");
const app = express();
// import admin from "firebase-admin";
// import firebase from "firebase";

const cors = require("cors");
app.use(cors());

app.get("/getTodoList", (req, res) => {
  admin
    .firestore()
    .collection("TodoList")
    .doc("important")
    .get()
    .then((data) => {
      return res.json(data.data());
    })
    .catch((err) => console.error(err));
});
const firebaseConfig = {
  apiKey: "AIzaSyBGOSwI7c4PGFZBCHHYOz1dzCg2lSc7rc8",
  authDomain: "emeratest-4dd32.firebaseapp.com",
  projectId: "emeratest-4dd32",
  storageBucket: "emeratest-4dd32.appspot.com",
  messagingSenderId: "721434910744",
  appId: "1:721434910744:web:518ac734e53302de3b636d",
};

admin.initializeApp(firebaseConfig);
// const firebaseApp = admin.initializeApp(firebaseConfig);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
  //   functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.todoList = functions.https.onRequest((request, response) => {
  //   functions.logger.info("Hello logs!", { structuredData: true });
  admin
    .firestore()
    .collection("TodoList")
    .doc("important")
    .get()
    .then((data) => {
      return response.json(data.data());
    })
    .catch((err) => console.error(err));
});

exports.createList = functions.https.onRequest((request, response) => {
  //   functions.logger.info("Hello logs!", { structuredData: true });
  admin
    .firestore()
    .collection("TodoList")
    .add(request)
    .catch((err) => console.error(err));
});

// https://baseurl.com/api/whatever
exports.api = functions.https.onRequest(app);

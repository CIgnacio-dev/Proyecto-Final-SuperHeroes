const functions = require('firebase-functions');
<<<<<<< HEAD

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
=======
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
const express = require('express');
const cors = require('cors');
const router = express();
router.use(cors({ origin: true }))
router.get("/usuarios/:usuario", async (req, res) => {
  const usuario = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.params.usuario)
    .get().then((doc) => {
    if (doc.exists) {
        return doc.data()
        console.log("Document data:", doc.data());
        return doc.data()
    } else {
        console.log("No such document!");
        return {}
    }
  });
  res.send(usuario);
});
router.post("/usuario", async (req, res) => {
  const usuario = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.body.email) // Firebase.auth().currentuser.email
    set(req.body.favs)
    .then( () => {
      return 'todo bien'
    });
  res.send(usuario);
});
exports.usuarios = functions.https.onRequest(router);
>>>>>>> master

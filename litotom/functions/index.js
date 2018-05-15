const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.autoLikes = functions.database.ref('/users/{uid}/photos/{pushId}')
        .onWrite(event => {
            console.log('Photo pushed' , event.params.uid , event.params.pushId);
            return event.data.ref.child('likes')
                                    .child(event.params.pushId)
                                    .child('likers')
                                    .set('testing');
        });

$(document).ready(function(){
   var config = {
        apiKey: "AIzaSyBPCAxjycmuYaeY8RISjpPzUOSfmZIbQrQ",
        authDomain: "train-scheduler-68643.firebaseapp.com",
        databaseURL: "https://train-scheduler-68643.firebaseio.com",
        projectId: "train-scheduler-68643",
        storageBucket: "train-scheduler-68643.appspot.com",
        messagingSenderId: "934455543386",
        appId: "1:685154393980:web:3005c4b45483267fdd4ef9"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
   
    var name;
    var destination;
    var firstTrain;
    var frequency = 0;
}

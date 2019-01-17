(function() {
    // Set the configuration for your app
    var config = {
        apiKey: "AIzaSyAnXLZmtPxHv3NU8riaIWbiaF3MvdctN6g",
        authDomain: "medium-iot-project.firebaseapp.com",
        databaseURL: "https://medium-iot-project.firebaseio.com",
        projectId: "medium-iot-project",
        storageBucket: "medium-iot-project.appspot.com",
        messagingSenderId: "105248561470"
    };

    firebase.initializeApp(config);

    // Get a reference to the database service
    var database = firebase.database();

    // Get element from the DOM
    const tempElement = document.getElementById('temperature');
    const humElement = document.getElementById('humidity');

    // Create temperature database reference
    const tempRef = database.ref('dht11').child('temperature');

    // Create humidity database reference
    const humRef = database.ref('dht11').child('humidity');

    // Sync objects changes
    tempRef.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("temperature: " + childData);
            tempElement.innerText = childData;
        });
    });
    humRef.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("humidity: " + childData);
            humElement.innerText = childData;
        });
    });

}());

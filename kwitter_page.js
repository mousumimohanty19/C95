const firebaseConfig = {
      apiKey: "AIzaSyAsoLnheuGEb7ideBCwanpy92D8CfKo-LY",
      authDomain: "i-like-trains-add69.firebaseapp.com",
      databaseURL: "https://i-like-trains-add69-default-rtdb.firebaseio.com",
      projectId: "i-like-trains-add69",
      storageBucket: "i-like-trains-add69.appspot.com",
      messagingSenderId: "246280310170",
      appId: "1:246280310170:web:6b53e78c3f36decec3fe23"
    };    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref("room_name").push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = " ";
}

function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

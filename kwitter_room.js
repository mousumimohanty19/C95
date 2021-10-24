// Your web app's Firebase configuration
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
//ADD YOUR FIREBASE LINKS HERE

 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML= "Welcome, " + user_name + "!";

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'># " + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

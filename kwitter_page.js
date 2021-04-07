//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCIgEYBGd80qh2ImmX3mVH9pPtYc5bFAVI",
      authDomain: "kwitter-project-98d57.firebaseapp.com",
      databaseURL: "https://kwitter-project-98d57-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-98d57",
      storageBucket: "kwitter-project-98d57.appspot.com",
      messagingSenderId: "259245664505",
      appId: "1:259245664505:web:97d5fcc8e88b7068bc5a28"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
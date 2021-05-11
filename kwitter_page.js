//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC9hJqDeAXp2F-8a2QexfTneWlLyH12l6M",
      authDomain: "kwitter-619fb.firebaseapp.com",
      databaseURL: "https://kwitter-619fb-default-rtdb.firebaseio.com",
      projectId: "kwitter-619fb",
      storageBucket: "kwitter-619fb.appspot.com",
      messagingSenderId: "546675516935",
      appId: "1:546675516935:web:02e5333dd4e3100982aca2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
    function send()
    {
          msg = document.getElementById("msg").value
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
    
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


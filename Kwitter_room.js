roomName = "";

const firebaseConfig = {
    apiKey: "AIzaSyC32QE2Cht-m-WGPOSc5MBTNTYBkNXJfVk",
    authDomain: "kwitter-cd183.firebaseapp.com",
    projectId: "kwitter-cd183",
    storageBucket: "kwitter-cd183.appspot.com",
    messagingSenderId: "945458980399",
    appId: "1:945458980399:web:bf4ebb6452d45f2f1908da",
    measurementId: "G-6634PSKNL9"
  };

  localStorage.getItem("UserName");


function addRoom() {
  roomName = document.getElementById("room_name");
  localStorage.setItem(roomName);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = " <div class="room_names" id = "+Room_names+" onclick="redirectToRoomName(this.id)> +Room_names+ "</div> ";

//End code
});});}
getData();

function redirectToRoomName() {
  localStorage.setItem(roomName);
  window.location(kwitter_page.html);
}
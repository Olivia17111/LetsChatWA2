function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("UserName", user_name);
    window.location = "Kwitter_room.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyAmgkKBmhKofCCuPdhXBZeP0tx6OS7BlWc",
    authDomain: "kwitter-49c9c.firebaseapp.com",
    projectId: "kwitter-49c9c",
    storageBucket: "kwitter-49c9c.appspot.com",
    messagingSenderId: "14826028923",
    appId: "1:14826028923:web:2a96dab74e94273da847de",
    measurementId: "G-8LMPZLHE1D"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const firebaseConfig = {
      apiKey: "AIzaSyD06hXmuYEQ8m_PKN_X65StgjDGXPhsNR4",
      authDomain: "kwitter-99f33.firebaseapp.com",
      databaseURL: "https://kwitter-99f33-default-rtdb.firebaseio.com",
      projectId: "kwitter-99f33",
      storageBucket: "kwitter-99f33.appspot.com",
      messagingSenderId: "211817783586",
      appId: "1:211817783586:web:c9c9bbc91e6dc21376457b"
    };
   
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 
      //End code
      });});}
getData();
 

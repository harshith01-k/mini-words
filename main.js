// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCHsc3_raqLoZ0RPQLD6pApa2Yx7EI1xKo",
    authDomain: "miniwords-f7c6a.firebaseapp.com",
    databaseURL: "https://miniwords-f7c6a.firebaseio.com",
    projectId: "miniwords-f7c6a",
    storageBucket: "miniwords-f7c6a.appspot.com",
    messagingSenderId: "665072843958",
    appId: "1:665072843958:web:f18f60a380e4ef7b467a17",
    measurementId: "G-1PQEGCWFGM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  
 // Reference messages collection
 var messagesRef = firebase.database().ref('messages');

 // Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();
  
    // Get values
    var userName = getInputVal('userName');
    
    var userEmail = getInputVal('userEmail');
    var userNumber = getInputVal('userNumber');
    var userAddress = getInputVal('userAddress');
    var userMessage = getInputVal('userMessage');
    
  
    // Save message
    saveMessage(userName, userEmail, userNumber,userAddress,userMessage);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  // Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save message to firebase
function saveMessage(userName, userEmail, userNumber,userAddress,userMessage){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      Full_name: userName,
      Mail_Id:userEmail,
      Mobile_number:userNumber,
      Address:userAddress,
      Message:userMessage
    });
  }

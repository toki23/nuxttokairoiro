  <template>
    <div>
      <h1>logoutします</h1>
    </div>
  </template>
    
    <script>
  import firebase from "firebase/app";

  export default {
    mounted() {
      var firebaseConfig = {
        apiKey: "AIzaSyDSe1nmrJOMXRrYsO-XYCCrwhAxDd0OaBU",
        authDomain: "test-860cc.firebaseapp.com",
        databaseURL: "https://test-860cc.firebaseio.com",
        projectId: "test-860cc",
        storageBucket: "test-860cc.appspot.com",
        messagingSenderId: "661510028310",
        appId: "1:661510028310:web:672e3c2abcf40580e34937",
        measurementId: "G-ESBQ7HH8GT",
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.auth().signOut().then(()=>{
          console.log("logoutしました");
      })
    },
  };
  </script>
    
<template>
  <div>
    <h1>ログインページ</h1>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
  </div>
</template>
  
  <script>
import * as firebaseui from "firebaseui";
import firebase from "firebase";
import 'firebaseui/dist/firebaseui.css'
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
    // firebase.initializeApp(firebaseConfig);
    !firebase.apps.length
      ? firebase.initializeApp(firebaseConfig)
      : firebase.app();
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically

          return true;
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById("loader").style.display = "none";
        },
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: "popup",
      signInSuccessUrl: "/",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    };

    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>
  
<template>
  <div>
    <Header />
    <p>ユーザー名</p>
    <input type="text" v-model="name" />
    <p>メール{{ mail }}</p>
    <p>年齢</p>
    <input type="text" v-model="age" />
    <input type="button" v-on:click="register" value="送信する" />
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  middleware: "authenticated",

  data() {
    return {
      name: "",
      mail: this.$store.state.user.mail,
      age: 0,
    };
  },
  methods: {
    async register() {
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
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      console.log(this.$store.state.user.userid);
      var userDoc = await firebase
        .firestore()
        .collection("users")
        .doc(this.$store.state.user.userid)
        .get();

      await userDoc.ref.set({
        name: this.name,
        age: this.age,
      });
    },
  },
};
</script>

<template>
  <div>
    <Header />
    <p>あなたの名前は　{{ this.$store.state.user.name }}</p>
    <p>あなたの年齢は　{{ this.$store.state.user.age }}</p>
    <h1>このページではfireStoreにデータを投げる予定だよ</h1>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  middleware: "authenticated",
  data() {
    return {
      name: "",
      age: "",
    };
  },
  async mounted() {
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
  },
};
</script>

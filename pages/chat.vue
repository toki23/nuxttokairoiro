<template>
  <div>
    <Header />
    <h1>Realtime DB でチャットするページだよ</h1>
    <input type="button" v-on:click="this.submit" value="送信" />
    テキスト: <input type="text" v-model="text" /> 名前：
    <input type="text" v-model="name" />

    <li v-for="user in users" :key="user.text">
      {{ user.name + " : " + user.text }}
    </li>
  </div>
</template>
<script>
import firebase from "firebase/app";
var firebaseConfig = {
  apiKey: "AIzaSyDSe1nmrJOMXRrYsO-XYCCrwhAxDd0OaBU",
  authDomain: "test-860cc.firebaseapp.com",
  databaseURL: "https://test-860cc.firebaseio.com",
  projectId: "test-860cc",
  storageBucket: "test-860cc.appspot.com",
  messagingSenderId: "661510028310",
  appId: "1:661510028310:web:2e4e7e399ef3edeae34937",
  measurementId: "G-0BT1K8EPLW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default {
  middleware: "authenticated",
  data() {
    return {
      text: "",
      name: "",
      database: firebase.database,
      users: {},
    };
  },
  async mounted() {
    let firebaseUsers = firebase.database().ref("users/");
    firebaseUsers.on("value", (snapshot) => {
      const data = snapshot.val();
      this.users = data;
      console.log(data);
    });
  },
  methods: {
    submit() {
      console.log("called");
      var today = new Date();
      let firebaseHello = firebase.database().ref("users/" + today);
      firebaseHello.set({
        name: this.name,
        text: this.text,
      });
    },
  },
};
</script>
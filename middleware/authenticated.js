import firebase from "firebase"
export default async function ({
  store,
  redirect
}) {
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
    await firebase.initializeApp(firebaseConfig);

  }

  await firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      if (store.state.user.uid) {
        return
      } else {
        const userid = user.uid;
        const mail = user.email;
        await store.dispatch("user/setuser", { userid: userid, mail: mail });
        var userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
        if (!userDoc.exists) {
          // Firestore にユーザー用のドキュメントが作られていなければ作る
          return redirect("/register");
          // await userDoc.ref.set({
          //   screen_name: user.uid,
          //   display_name: '名無しさん',
          //   created_at: firebase.firestore.FieldValue.serverTimestamp(),
          // });
        }else {
          store.commit("user/setname",userDoc.get("name"));
          store.commit("user/setage",userDoc.get("age"));
        }
      }
    } else {
      console.log("not logined ");
      return redirect("/login");

    }
  });

}

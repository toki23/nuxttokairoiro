export const state = () => ({
    userid: '',
    mail: '',
    name: '',
    age:0,
})

export const mutations = {
    setmail(state, mail) {
        state.mail = mail;
    },
    setname(state, name) {
        state.name = name;
    },
    setuserid(state, userid) {
        state.userid = userid;
    },
    
    setage(state,age) {
        state.age = age;
    },
}

export const getters = {
    mail: state => {
        return state.mail;
    }
};

import firebase from "firebase"
export const actions = {
    async setuser({ commit }, payload) {
        await commit("setmail", payload.mail);
        await commit("setuserid", payload.userid);
        
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        const db = firebase.firestore();

        const userRef = db.collection("users").doc(payload.userid);
        const userDoc = await userRef.get();
        if (userDoc.exists) {
            console.log("データ入れる")
            let name = userDoc.get("name");
            let age = userDoc.get("age");
            console.log(userDoc.data())
            commit("setname",name);
            commit("setage",age);
        } else {
            console.log("No such document!");
        }

    }
}
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{236:function(e,t,n){"use strict";n.r(t);var c=n(222),r=n(32),o=(n(230),{mounted:function(){r.a.apps.length?r.a.app():r.a.initializeApp({apiKey:"AIzaSyDSe1nmrJOMXRrYsO-XYCCrwhAxDd0OaBU",authDomain:"test-860cc.firebaseapp.com",databaseURL:"https://test-860cc.firebaseio.com",projectId:"test-860cc",storageBucket:"test-860cc.appspot.com",messagingSenderId:"661510028310",appId:"1:661510028310:web:672e3c2abcf40580e34937",measurementId:"G-ESBQ7HH8GT"});var e=new c.a.AuthUI(r.a.auth()),t={callbacks:{signInSuccessWithAuthResult:function(e,t){return!0},uiShown:function(){document.getElementById("loader").style.display="none"}},signInFlow:"popup",signInSuccessUrl:"/",signInOptions:[r.a.auth.EmailAuthProvider.PROVIDER_ID,r.a.auth.GoogleAuthProvider.PROVIDER_ID]};e.start("#firebaseui-auth-container",t)}}),l=n(45),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("ログインページ")]),e._v(" "),n("div",{attrs:{id:"firebaseui-auth-container"}}),e._v(" "),n("div",{attrs:{id:"loader"}},[e._v("Loading...")])])}],!1,null,null,null);t.default=component.exports}}]);
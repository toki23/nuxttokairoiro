(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{218:function(t,e,n){"use strict";n.r(e);var o=n(45),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{attrs:{to:"/"}},[t._v("websocket")]),t._v(" "),n("NuxtLink",{attrs:{to:"/viewconfig"}},[t._v("viewconfig")]),t._v(" "),n("NuxtLink",{attrs:{to:"/register"}},[t._v("register")])],1)}),[],!1,null,null,null);e.default=component.exports},240:function(t,e,n){"use strict";n.r(e);n(19);var o=n(232),r=n.n(o),c={middleware:"authenticated",data:function(){return{text:"hello",ws:new WebSocket(this.$url.ws),recieved:"",isConnected:!1}},created:function(){var t=this;this.ws.addEventListener("open",(function(e){console.log("接続が開かれたときに呼び出されるイベント"),t.isConnected=!0})),this.ws.addEventListener("message",(function(e){console.log(e.data),t.recieved=e.data})),this.$store.subscribe((function(t,e){"user/setuserid"===t.type&&console.log(t.payload)}))},methods:{submit:function(){var t=this.$url.http,data={userid:this.$store.state.user.userid,text:this.text};fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},referrerPolicy:"no-referrer",body:JSON.stringify(data)}).then((function(t){return t.json()})).then((function(data){return console.log(data)}))},socket:function(){this.isConnected?this.ws.send(this.text):r.a.warning("まだWebSocketに接続できてないよ")}}},l=n(45),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("Header"),t._v(" "),n("h1",[t._v("WebSocketで通信をしよう")]),t._v(" "),n("p",[t._v("あなたのメールアドレスは　"+t._s(this.$store.state.user.mail))]),t._v(" "),n("p",[t._v("あなたのユーザーidは　"+t._s(this.$store.state.user.userid))]),t._v(" "),n("p",[t._v("以下のデータが送られてきました　："+t._s(this.recieved))]),t._v(" "),n("input",{attrs:{type:"button",value:"websocketに通信"},on:{click:this.socket}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("p",[t._v("送信しよう")]),t._v(" "),n("p",[n("input",{attrs:{type:"button",value:"POST通信するよ"},on:{click:this.submit}})])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(218).default})}}]);
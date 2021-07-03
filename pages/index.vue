<template>
  <div class="container">
    <div>
      <Header />
      <h1>WebSocketで通信をしよう</h1>
      <p>あなたのメールアドレスは　{{ this.$store.state.user.mail }}</p>
      <p>あなたのユーザーidは　{{ this.$store.state.user.userid }}</p>
      <p>以下のデータが送られてきました　：{{ this.recieved }}</p>
      <input type="button" v-on:click="this.socket" value="websocketに通信" />

      <input type="text" v-model="text" />
    </div>
  </div>
</template>

<script>
import toastr from "toastr";
export default {
  middleware: "authenticated",
  data() {
    return {
      text: "hello",
      ws: new WebSocket(this.$url.ws),
      recieved: "",
      isConnected: false,
    };
  },
  created() {
    this.ws.addEventListener("open", (e) => {
      console.log("接続が開かれたときに呼び出されるイベント");
      this.isConnected = true;
    });

    this.ws.addEventListener("message", (e) => {
      console.log(e.data);
      this.recieved = e.data;
    });
    this.$store.subscribe((mutation, state) => {

      if (mutation.type === "user/setuserid") {
        console.log(mutation.payload);
      }
    });
  },
  methods: {
    submit() {
      const url = this.$url.http;
      const data = { userid: this.$store.state.user.userid, text: this.text };
      fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
      });
    },
    socket() {
      if (this.isConnected) {
        this.ws.send(this.text);
      } else {
        toastr.warning("まだWebSocketに接続できてないよ");
      }
    },
  },
};
</script>

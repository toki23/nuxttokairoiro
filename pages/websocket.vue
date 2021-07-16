<template>
  <div>
    <Header />
    <h1>WebSocketでチャットするページ</h1>
    <input type="button" value="送信" v-on:click="submit" />
    <input type="text" v-model="text" />
    <li v-for="message in messages" :key="message">
      {{ message }}
    </li>
  </div>
</template>
<script>
import { io } from "socket.io-client";

export default {
  middleware: "authenticated",
  data() {
    return {
      socket: io("http://localhost:8080"),
      text: "",
      messages: [],
    };
  },
  async mounted() {
    this.socket.on("chat message", (msg) => {
      this.messages.push(msg);
    });
  },
  methods: {
    submit() {
      this.socket.emit("chat message", this.text);
    },
  },
};
</script>
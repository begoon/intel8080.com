const app = Vue.createApp({
  data() {
    return {
      msg: "Hello!",
      query: "",
    };
  },
  watch: {
    query(value, previousValue) {
      this.msg = value;
      console.log(value);
    },
  },
});

app.mount("#app");

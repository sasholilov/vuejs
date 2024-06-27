const app = Vue.createApp({
  data() {
    return {
      inputUser: "",
      isHidden: true,
      bgcolor: "",
    };
  },

  computed: {
    userClass() {
      if (this.inputUser === "user1") {
        return "user1";
      } else if (this.inputUser === "user2") {
        return "user2";
      }
    },
  },

  methods: {
    toggleHidden() {
      this.isHidden = !this.isHidden;
    },
  },
});
app.mount("#assignment");

const app = Vue.createApp({
  data() {
    return {
      inputText: "",
      secondText: "",
      confirmedText: "",
    };
  },
  methods: {
    showAlert() {
      alert("hei Yo");
    },

    firstInput(e) {
      this.inputText = e.target.value;
    },

    secondInput(event) {
      this.secondText = event.target.value;
    },
    setConfirmedText() {
      this.confirmedText = this.secondText;
    },
  },
});
app.mount("#assignment");

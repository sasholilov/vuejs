const app = Vue.createApp({
  data() {
    return {
      num5: 0,
      num1: 0,
    };
  },

  methods: {
    addFive() {
      this.num5 = this.num5 + 5;
    },

    addOne() {
      this.num1 = this.num1 + 1;
    },
  },

  computed: {
    calculateResult() {
      if (this.num1 + this.num5 > 37) return "Too Much!";
      else if (this.num1 + this.num5 === 37) return this.num1 + this.num5;
      else return "To Lower";
    },
  },
  watch: {
    calculateResult() {
      const that = this;
      setTimeout(function () {
        that.num1 = 0;
        that.num5 = 0;
      }, 5000);
    },
  },
});
app.mount("#assignment");

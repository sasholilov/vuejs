const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      task: "",
      toggle: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
    },
    hideShow() {
      this.toggle = !this.toggle;
    },
  },
});
app.mount("#assignment");

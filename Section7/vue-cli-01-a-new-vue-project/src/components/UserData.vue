<template>
  <h2>{{ text }}</h2>
  <form @submit.prevent="submitForm">
    <label>Name</label>
    <input type="text" v-model="enteredName" />
    <label>Age</label>
    <input type="text" v-model="enteredAge" />
    <button>Add</button>
  </form>
</template>

<script>
export default {
  emits: ["set-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },

  methods: {
    submitForm() {
      this.$emit("set-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>

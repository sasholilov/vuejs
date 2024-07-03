<template>
  <h1>{{ text }}</h1>
  <div>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Aleksandar Lilov",
        age: 34,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: age,
      };
    },
  },
};
</script>

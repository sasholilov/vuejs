<template>
  <h2>{{ username }}</h2>
  <h3>{{ userage }}</h3>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    userage: {
      type: Number,
      required: true,
    },
  },
};
</script>

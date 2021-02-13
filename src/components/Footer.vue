<template>
  <footer>
    <small>{{ msg }} - {{ currentYear }}</small>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      msg: "Anand",
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  bottom: 0;
  width: 100%;
  padding: 10px;
  background-color: #f5f5f5;
}
</style>

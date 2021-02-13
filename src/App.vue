<template>
  <div id="app">
    <Spinner v-if="isLoading"></Spinner>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Spinner from "./components/Spinner.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Spinner,
  },
  computed: {
    isLoading() {
      return this.$store.state.spinner;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

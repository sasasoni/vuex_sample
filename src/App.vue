<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>{{ message }}</p>
    <EditForm />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import EditForm from "@/components/EditForm.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    EditForm
  },
  computed: {
    message() {
      return this.$store.getters.message;
    }
  },
  created() {
    console.log(this.$store.state.count);
    this.$store.commit("increment");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

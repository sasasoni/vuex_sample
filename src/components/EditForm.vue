<template>
  <div class="edit-form">
    <!-- <input ref="input" :value="message" @input="doUpdate" /> -->
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  name: "EditForm",
  computed: {
    // message() {
    //   return this.$store.getters.message;
    // }
    // ひとつの算出プロパティに入出力をまとめるとスッキリ
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("doUpdate", value);
      }
    }
  },
  methods: {
    // doUpdate() {
    //   this.$store.dispatch("doUpdate", this.$refs.input.value);
    // }
  }
};
</script>


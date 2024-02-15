<script>
import AppMain from './AppMain.vue';
import AppHeader from './AppHeader.vue';
import axios from "axios";
export default {
  data() {
    return {
      projects: [],
      URL: "http://localhost:8000",
      uri: "/api/projects"

    }
  },
  components: {
    AppMain,
    AppHeader,

  },
  methods: {
    project() {
      axios.get(this.URL + this.uri).then(response => {
        this.projects = response.data.results;
        console.log(response)
      })
    }
  },
  mounted() {
    this.project();
  }
}

</script>

<template>
  <AppHeader></AppHeader>
  <AppMain :projects="projects"></AppMain>
</template>

<style scoped>

</style>

<script>
import axios from "axios";
export default{
    name:"PostList",
    data() {
    return {
      projects: [],
      URL: "http://localhost:8000",
      uri: "/api/projects"

    }
  },
  components: {

  },
  methods: {
    project() {
      axios.get(this.URL + this.uri).then(response => {
        this.projects = response.data.results;
      })
    }
  },
  mounted() {
    this.project();
  }
}
</script>
<template>
    <div>
        <div class="container-card container d-flex">
            <div class="card mb-3" v-for="project in projects" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">
                        <h2>titolo:</h2>
                        {{ project.title }}</h5>
                    <p class="card-text">
                    </p>
                    <button class="btn btn-primary">
                        <router-link class="nav-link" :to="{ name:'post', params: { slug: project.id }}">visualizza progetto</router-link>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-card{
    justify-content: space-between;
    flex-wrap: wrap;

}
</style>

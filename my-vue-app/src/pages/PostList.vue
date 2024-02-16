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
    <div>
        <div class="container-card container d-flex">
            <div class="card mb-3" v-for="project in projects" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">
                        <h2>titolo:</h2>
                        {{ project.title }}</h5>
                    <p class="card-text">
                        <h2>descrizione:</h2>
                        <div>
                            {{ project.description }}
                        </div>
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
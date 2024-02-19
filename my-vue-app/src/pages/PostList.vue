<script>
import axios from "axios";
export default {
    name: "PostList",
    data() {
        return {
            project: null,
            URL: "http://localhost:8000",
            uri: "/api/project"

        }
    },
    components: {

    },
    methods: {
        getProject() {
            // Async operation
            axios.get(this.URL + this.uri+"/" + this.$route.params.slug)
            .then(response => {
                console.log(response);
                this.project = response.data.data;
            })
        }
    },
    mounted() {
        this.getProject();
    }
}
</script>
<template>
    <div>
        <div v-if="!project">Loading...</div>
        <div v-else class="container-card container d-flex">
            <!-- <div class="card mb-3" v-for="project in projects" style="width: 18rem;"> -->
            <div class="card mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">
                        <h2>titolo:</h2>
                        {{ project.title }}
                    </h5>
                    <p class="card-text">

                    <div>
                        <h4>linguaggio utilizzato:</h4>
                        {{ project.language }}
                    </div>
                    <div>
                        <h4>frameworks utilizzati:</h4>
                        {{ project.frameworks }}
                    </div>
                    <div>
                        <h4>descrizione:</h4>
                        {{ project.description }}
                    </div>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-card {
    justify-content: space-between;
    flex-wrap: wrap;

}
</style>
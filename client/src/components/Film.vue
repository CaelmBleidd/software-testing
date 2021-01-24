<template>
  <div v-if="currentFilm" class="edit-form">
    <h4>Film</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
               v-model="currentFilm.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
               v-model="currentFilm.description"
        />
      </div>
      <div class="form-group">
        <label for="directors">Directors</label>
        <input type="text" class="form-control" id="directors"
               v-model="currentFilm.directors"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentFilm.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
            v-if="currentFilm.published"
            @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
            @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2" id="deleteButton"
            @click="deleteFilm"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success" id="updateFilm"
            @click="updateFilm"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br/>
    <p>Please click on a Film...</p>
  </div>
</template>

<script>
import FilmDataService from "../services/FilmDataService";

export default {
  name: "film",
  data() {
    return {
      currentFilm: null,
      message: ''
    };
  },
  methods: {
    getFilm(id) {
      FilmDataService.get(id)
          .then(response => {
            this.currentFilm = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    updatePublished(status) {
      const data = {
        id: this.currentFilm.id,
        title: this.currentFilm.title,
        description: this.currentFilm.description,
        directors: this.currentFilm.directors,
        published: status
      };

      FilmDataService.update(this.currentFilm.id, data)
          .then(response => {
            this.currentFilm.published = status;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    updateFilm() {
      FilmDataService.update(this.currentFilm.id, this.currentFilm)
          .then(response => {
            console.log(response.data);
            this.message = 'The film was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
    },

    deleteFilm() {
      FilmDataService.delete(this.currentFilm.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({name: "films"});
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.message = '';
    this.getFilm(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
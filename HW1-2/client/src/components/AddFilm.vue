<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="film.title"
            name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
            class="form-control"
            id="description"
            required
            v-model="film.description"
            name="description"
        />
      </div>

      <div class="form-group">
        <label for="directors">Directors</label>
        <input
            class="form-control"
            id="directors"
            required
            v-model="film.directors"
            name="directors"
        />
      </div>

      <button @click="saveFilm" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newFilm">Add</button>
    </div>
  </div>
</template>

<script>
import FilmDataService from "../services/FilmDataService";

export default {
  name: "add-film",
  data() {
    return {
      film: {
        id: null,
        title: "",
        description: "",
        directors: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveFilm() {
      var data = {
        title: this.film.title,
        description: this.film.description,
        directors: this.film.directors
      };

      FilmDataService.create(data)
          .then(response => {
            this.film.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
    },

    newFilm() {
      this.submitted = false;
      this.film = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
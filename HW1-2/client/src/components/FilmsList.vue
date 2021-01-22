<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title" @keyup.enter="searchTitle"
               v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
                  @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Films List</h4>
      <ul class="list-group">
        <li class="list-group-item"
            :class="{ active: index === currentIndex }"
            v-for="(film, index) in films"
            :key="index"
            @click="setActiveFilm(film, index)"
        >
          {{ film.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllFilms">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentFilm">
        <h4>Film</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentFilm.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentFilm.description }}
        </div>
        <div>
          <label><strong>Directors:</strong></label> {{ currentFilm.directors }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentFilm.published ? "Published" : "Pending" }}
        </div>

        <a class="badge badge-warning"
           :href="'/films/' + currentFilm.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br/>
        <p>Please click on a Film...</p>
      </div>
    </div>
  </div>
</template>

<script>
import FilmDataService from "../services/FilmDataService";

export default {
  name: "films-list",
  data() {
    return {
      films: [],
      currentFilm: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveFilms() {
      FilmDataService.getAll()
          .then(response => {
            this.films = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveFilms();
      this.currentFilm = null;
      this.currentIndex = -1;
    },

    setActiveFilm(film, index) {
      this.currentFilm = film;
      this.currentIndex = index;
    },

    removeAllFilms() {
      FilmDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
    },

    searchTitle() {
      FilmDataService.findByTitle(this.title)
          .then(response => {
            this.films = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.retrieveFilms();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
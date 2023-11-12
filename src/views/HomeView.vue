<template>
  <v-container>
    <h2 class="text-h3 text-center pa-12">MovieSearch</h2>
    <v-row class="pa-6">
      <v-text-field v-model="title" @input="debouncedInputHandler" label="Search" :rules="rules"
        hide-details="auto"></v-text-field>
    </v-row>

    <v-row v-if="movie && !movie.Error" class="justify-center">
      <movie-card :title="movie.Title" :subtitle="movie.Director" :image="movie.Poster">
        <router-link :to="{ name: 'details', params: { url: slugify(movie.Title), movie } }">
          <v-btn class="ms-2" variant="outlined" size="small">
            See details
          </v-btn>
        </router-link>
      </movie-card>
    </v-row>

    <div v-if="movie && movie.Error" class="text-center">
      {{ movie.Error }}
    </div>
  </v-container>
</template>

<script>
import { debounce, slugify } from '@/utilities/'
import axios from 'axios'
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'HomeView',
  components: {
    MovieCard
  },
  data: () => ({
    title: '',
    apiKey: process.env.VUE_APP_API_KEY,
    apiUrl: process.env.VUE_APP_API_URL,
    slugify,
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
    movie: ''
  }),
  created() {
    this.debouncedInputHandler = debounce(this.searchMovie, 1000);
  },
  methods: {
    searchMovie() {
      axios.get(`${this.apiUrl}/?t=${this.title}&apikey=${this.apiKey}`)
        .then(({ data }) => this.movie = data)
    }
  },
  beforeDestroy() {
    clearTimeout(this.debouncedInputHandler.timeout);
  }
}
</script>

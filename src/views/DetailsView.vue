<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img :src="movie.Poster" class="my-3" contain height="200" />

                <v-btn 
                    size="large" 
                    color="secondary"
                    @click="favoriteMovie(movie)"
                >
                    <v-icon class="px-3">mdi-heart</v-icon>
                    Save into favorites
                </v-btn>
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
                    {{ movie.Title }}
                </h1>

                <p class="mb-3">Runtime: {{ movie.Runtime }}</p>

                <p class="mb-3">Directed by: {{ movie.Director }}</p>

                <p class="mb-3">Writen by: {{ movie.Writer }}</p>

                <p class="mb-3">
                    Actors:
                    <span v-for="(actor, index) in movie.Actors.split(',')" :key="index">
                        {{ actor }}{{ index < movie.Actors.split(',').length - 1 ? ',' : '' }} </span>
                </p>


                <p class="subheading font-weight-regular">
                    {{ movie.Plot }}
                </p>
            </v-col>

            <v-col class="mb-5" cols="12">
                <h2 class="headline font-weight-bold mb-3">
                    {{ movie.Country }}
                </h2>
            </v-col>

            <v-col class="mb-5" cols="12">
                <h2 class="headline font-weight-bold mb-3">
                    Ratings
                </h2>

                <ul justify="center">
                    <v-list v-for="(rating, index ) in movie.Ratings" :key="index" class="subheading mx-3" target="_blank">
                        {{ rating.Value }} - {{ rating.Source }}
                    </v-list>
                </ul>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'DetailsView',

    data() {
        return {
            movie: ''
        }
    },

    created() {
        this.movie = this.$route.params.movie
    },

    methods: {
        ...mapActions(['favoriteMovie'])
    }
}
</script>
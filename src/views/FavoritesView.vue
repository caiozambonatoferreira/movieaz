<template>
    <v-container>
        <v-row v-if="favorites">
            <v-col
                v-for="(favorite, index) in favorites"
                :key="index"
                cols="12"
                sm="6"
            >
                <movie-card 
                    :title="favorite.Title" 
                    :subtitle="favorite.Director" 
                    :image="favorite.Poster"
                >
                    <v-rating
                        v-model="favorite.rate"
                        color="orange-lighten-1"
                        active-color="blue"
                    />
                </movie-card>
            </v-col>
        </v-row>

        <v-row v-if="favorites.length === 0" class="my-12 justify-center">
            <h2>{{ message }}</h2>
        </v-row>
    </v-container>
</template>

<script>
    import { mapState } from 'vuex'
    import MovieCard from '@/components/MovieCard.vue'

    export default {
        name: 'FavoritesView',

        components: {
            MovieCard
        },

        data: () => ({
            message: `You haven't saved any movies in your favorites yet`,
            rating: ''
        }),

        computed: {
            ...mapState(['favorites'])
        }
    }
</script>
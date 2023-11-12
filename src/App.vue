<template>
  <v-app>
    <v-app-bar app color="light-green-lighten-1" dark>
      <div class="d-flex align-center">
        Movieaz
      </div>

      <v-spacer></v-spacer>

      <router-link :to="{ name: 'home' }">
        <v-btn>
          <span class="mr-2">Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>

      <router-link :to="{ name: 'favorites' }">
        <v-btn>
          <span class="mr-2">Favorites</span>
          <v-icon>mdi-star-box</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App'
};
</script>

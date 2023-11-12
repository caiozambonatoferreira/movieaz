<template>
  <v-app>
    <v-app-bar
      app
      color="light-green-lighten-1"
      dark
    >
      <div class="d-flex align-center">
        Movieaz
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Favorites</span>
        <v-icon>mdi-star-box</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

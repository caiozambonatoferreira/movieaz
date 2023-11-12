<template>
  <v-container>
    <h2 class="text-h3 text-center pa-12">MovieSearch {{ apiKey }}</h2>
    <v-row>
      <v-text-field
        v-model="title"
        label="Search"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
    </v-row>
  </v-container>
</template>

<script>
  const apiKey = process.env.VUE_APP_API_KEY

  export default {
    name: 'HomeView',
    data: () => ({
      title: '',
      apiKey,
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
  }
</script>

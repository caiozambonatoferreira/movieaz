<template>
    <v-card
        :image="image"
        theme="dark"
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
                <v-card-title class="text-h5">
                  {{ title }}
                </v-card-title>

                <v-card-subtitle v-if="subtitle">
                    {{ subtitle }}
                </v-card-subtitle>

                <v-card-actions>
                    <slot />
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
                <v-img :src="image"></v-img>
              </v-avatar>
        </div>
      </v-card>
</template>

<script>
    export default {
        name: 'HomeView',

        props: {
            title: {
                type: String,
                required: true
            },
            subtitle: {
                type: String,
                required: false
            },
            image: {
                type: String,
                default:  require("@/assets/placeholder.jpg"),
                validator: propValue => {
                    const listOfAvailableExt = [".jpeg", ".jpg", ".png"];
                    const isValidExt = listOfAvailableExt.some(ext =>
                        propValue.endsWith(ext)
                    );
                    return isValidExt;
                }
            }
        }
    }
</script>
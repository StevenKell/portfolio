<template>
  <v-app>
    <v-main>
      <HelloWorld/>
      <imageGallery/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import imageGallery from './components/imageGallery.vue';
export default {
  name: 'App',

  components: {
    HelloWorld,
    imageGallery
  },

  data: () => ({
    //
  }),
}
</script>

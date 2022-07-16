<script lang="ts">
import Header from '/src/components/Header.vue'
import Footer from '/src/components/Footer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {Header, Footer},
    data() {
    return {
    }
  }
})
</script>

<template>
  <Header/>
  <router-view />
  <Footer/>
</template>

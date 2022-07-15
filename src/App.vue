<script lang="ts">
import Header from '/src/components/Header.vue'
import Footer from '/src/components/Footer.vue'

export default {
  components: {Header, Footer},
    data() {
    return {
    }
  }
}
</script>

<template>
  <Header/>
  <router-view />
  <Footer/>
</template>

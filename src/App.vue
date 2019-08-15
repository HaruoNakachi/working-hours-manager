<template>
  <v-app id="app">
    <Header />
    <v-fade-transition mode="out-in">
      <router-view/>
    </v-fade-transition>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
</style>

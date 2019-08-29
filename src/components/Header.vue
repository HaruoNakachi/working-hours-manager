<template>
  <div class="l-header">
    <v-app-bar>
      <div class="l-header__content" v-bind:getToken="parseToken">
        <h1>Working Hours Manager</h1>
        <div class="_btn" v-if="isSignIn">
          <v-btn small fab @click="logOut">
            <v-icon>mdi-power</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['isIn'],
  data: () => ({
    isSignIn: false
  }),
  mounted () {
    if (this.$root.token !== null) {
      this.isSignIn = true
    }
    this.$root.$on('isLogged', (e) => {
      this.isSignIn = e
    })
  },
  methods: {
    logOut: function () {
      this.$gAuth.signOut()
        .then(() => {
          this.isSignIn = !this.isSignIn
          localStorage.removeItem('user')
          this.$router.push({ name: 'Login' })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    parseToken: function (event) {
      console.log(event)
    }
  }
}
</script>

<style lang="scss">
.l-header {
  h1 {
    font-size: 1rem;
  }
  &__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

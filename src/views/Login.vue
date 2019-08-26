<template>
  <div class="p-login">
    <v-content>
      <div class="p-login__auth">
        <v-container fluid class="table-wrap">
          <v-btn color="error" large @click="redirectAuth()"><v-icon class="ico">mdi-google-glass</v-icon> Login with Google</v-btn>
        </v-container>
      </div>
    </v-content>
  </div>

</template>

<script>
export default {
  components: {},
  data: () => ({}),
  name: 'Login',
  methods: {
    redirectAuth: function () {
      this.$gAuth.signIn().then(GoogleUser => {
        const u = GoogleUser.getAuthResponse()
        console.log(u.id_token)
        const base64Url = u.id_token.split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))
        console.log(JSON.parse(jsonPayload))
        this.isSignIn = this.$gAuth.isAuthorized
      })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss">
.p-login {
  height: 100%;
  display: flex;
  a {
    text-decoration: none;
  }
  .ico {
    margin-right: 10px;
  }
  &__auth {
    height: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 100%;
    }
  }
}
</style>

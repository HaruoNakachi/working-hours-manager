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
import { SIGNIN, CREATE_USER } from '@/constants/graphql'
export default {
  components: {},
  data: () => ({}),
  name: 'Login',
  methods: {
    redirectAuth: function () {
      this.$gAuth.signIn().then(GoogleUser => {
        const u = GoogleUser.getAuthResponse()
        const base64 = u.id_token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
        const token = decodeURIComponent(atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))
        const ur = JSON.parse(token)
        // this.isSignIn = this.$gAuth.isAuthorized
        this.$apollo.query({
          query: SIGNIN,
          variables: {
            email: ur.email,
            authId: ur.sub
          }
        }).then(result => {
          const uEx = result.data.staffs
          if (Object.entries(uEx).length === 0) {
            this.$apollo.mutate({
              // Mutation
              mutation: CREATE_USER,
              // Parameters
              variables: {
                name: ur.name,
                email: ur.email,
                authId: ur.sub
              }
            }).then(data => {
              this.$router.push({ name: 'ListDate' })
            })
          } else {
            this.$router.push({ name: 'ListDate' })
          }
        })
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

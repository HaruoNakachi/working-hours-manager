<template>
  <div class="p-login">
    <v-content>
      <div class="p-login__auth">
        <router-link :to="{name: 'ListDate'}">
          <v-btn color="error" large @click="redirectAuth()"><v-icon class="ico">mdi-google-glass</v-icon> Login with Google account</v-btn>
        </router-link>
      </div>
    </v-content>
  </div>

</template>

<script>
export default {
  name: 'Login',
  methods: {
    redirectAuth: function (event) {
      console.log('test')
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
  }
}
</style>

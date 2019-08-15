<template>
  <div class="p-detailDate">
    <v-content>
      <v-toolbar background-color="deep-purple accent-4" class="elevation-2 tab-wrap" dark>
        <router-link :to="{name: 'ListDate'}">
          <v-btn icon>
            <v-icon center>mdi-chevron-left</v-icon>
          </v-btn>
        </router-link>
      </v-toolbar>
      <v-container fluid class="table-wrap">
        <div class="table-body">
          <v-row no-gutters>
            <v-col cols="md-3">
              Day
            </v-col>

            <!-- <v-col cols="md-1">
              <div class="input-area">
                <v-text-field
                  class="header-text-field-input"
                ></v-text-field>
                <span class="spect">:</span>
                <v-text-field
                  class="header-text-field-input"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="md-1">
              <div class="input-area">
                <v-text-field
                  class="header-text-field-input"
                ></v-text-field>
                <span class="spect">h</span>
              </div>
            </v-col>
            <v-col cols="md-1">
              <div class="center-line">8h</div>
            </v-col>
            <v-col class="d-none d-md-flex d-lg-flex">
              <div class="input-area">
                <v-text-field
                  class="header-text-field-input"
                ></v-text-field>
              </div>
            </v-col> -->
          </v-row>
          <v-row  no-gutters class="mb-5">
            <v-col cols="md-3">
              <div class="center-line">8/1 (月)</div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="md-3">
              Start at
            </v-col>
          </v-row>
          <v-row no-gutters class="mb-5">
            <v-col cols="md-3">
              <div class="input-area">
                <v-text-field
                  class="header-text-field-input"
                ></v-text-field>
                <span class="spect">:</span>
                <v-text-field
                  class="header-text-field-input"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row  no-gutters>
            <v-col cols="md-3">
              End at
            </v-col>
          </v-row>
          <v-row  no-gutters class="mb-5">
            <v-col cols="md-3">
              <div class="input-area">
                <v-text-field
                  class="header-text-field-input"
                ></v-text-field>
                <span class="spect">:</span>
                <v-text-field
                  class="header-text-field-input"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row  no-gutters>
            <v-col cols="md-3">
              Break
            </v-col>
          </v-row>
          <v-row  no-gutters class="mb-5">
            <v-col cols="sm-1 md-1">
              <div class="input-area">
                <v-text-field
                  class="header-text-field-input"
                ></v-text-field>
                <span class="spect">h</span>
              </div>
            </v-col>
          </v-row>
          <v-row  no-gutters>
            <v-col cols="md-3">
              Memo
            </v-col>
          </v-row>
          <v-row  no-gutters class="mb-5">
            <v-textarea></v-textarea>
          </v-row>
          <v-row  no-gutters>
            <v-col cols="md-3">
              Subtotal
            </v-col>
          </v-row>
          <v-row  no-gutters class="mb-5">
            <div class="center-line">8h</div>
          </v-row>
        </div>
      </v-container>
    </v-content>
    <v-footer>
      <div class="footer-btn">
        <v-btn class="ma-2" tile outlined color="success">
          <v-icon left>mdi-check-bold</v-icon> Save
        </v-btn>
      </div>
    </v-footer>
  </div>

</template>

<script>
export default {
  name: 'DetailDate',
  methods: {

  }
}
</script>

<style lang="scss">
  .p-detailDate {
    background-color: #fff;
    a {
      text-decoration: none;
    }
    .header-text-field-input {
      padding: 0;
      margin: 0;
      .v-text-field__details {
        display: none;
      }
      .v-input__slot {
        margin-bottom: 0;
      }
    }
    .input-area {
      display: flex;
      align-items: center;
      width: 100%;
      .spect {
        margin: 0 5px;
      }
    }
    .center-line {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .footer-btn {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
</style>

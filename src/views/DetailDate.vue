<template>
  <div v-if="is_data_fetched" class="p-detailDate">
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
          </v-row>
          <v-row no-gutters class="mb-5">
            <v-col cols="md-3">
              <div class="center-line">{{ working.day | moment("M/D") }} (月)</div>
            </v-col>
          </v-row>
          <v-row no-gutters class="mb-5">
            <v-col>
              <div class="input-area">
                <v-dialog ref="start_dialog" v-model="start_modal" :return-value.sync="start" persistent full-width width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field label="Start" prepend-icon="access_time" v-model="start" readonly v-on="on"></v-text-field>
                  </template>
                  <v-time-picker v-if="start_modal" v-model="start" full-width>
                    <div class="flex-grow-1"></div>
                    <v-btn text color="primary" @click="start_modal = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.start_dialog.save(start)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
              </div>
            </v-col>
            <v-col>
              <v-dialog ref="dialog" v-model="end_modal" :return-value.sync="end" persistent full-width width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field label="End" prepend-icon="access_time" v-model="end" readonly v-on="on"></v-text-field>
                </template>
                <v-time-picker v-if="end_modal" v-model="end" full-width>
                  <div class="flex-grow-1"></div>
                  <v-btn text color="primary" @click="end_modal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(end)">OK</v-btn>
                </v-time-picker>
              </v-dialog>
            </v-col>
          </v-row>
          <v-row no-gutters class="mb-5">
            <v-col cols="sm-2">
              <div class="input-area">
                <v-text-field label="Break" prepend-icon="access_time" v-model="working.break"></v-text-field>
                <span class="spect">h</span>
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters class="mb-5"><v-col><v-text-field class="header-text-field-input" label="Memo" v-model="working.memo"></v-text-field></v-col></v-row>
          <v-row  no-gutters>
            <v-col cols="md-3">
              Subtotal
            </v-col>
          </v-row>
          <v-row  no-gutters class="mb-5">
            <div class="center-line">{{ subtotal(working.end, working.start, working.break) | duration('hours') }}h</div>
          </v-row>
        </div>
      </v-container>
    </v-content>
    <v-footer>
      <div class="footer-btn">
        <v-btn @click="update()" class="ma-2" tile outlined color="success">
          <v-icon left>mdi-check-bold</v-icon> Save
        </v-btn>
      </div>
    </v-footer>
  </div>

</template>

<script>
import { DETAIL_WORKING, UPDATE_WORKING_HOURS } from '../constants/graphql'
import moment from 'moment'
export default {
  name: 'DetailDate',
  data: () => ({
    id: null,
    is_data_fetched: false,
    working: null,
    start_modal: false,
    end_modal: false,
    start: null,
    end: null
  }),
  async mounted () {
    this.id = this.$route.params.id
    await this.$apollo.query({
      query: DETAIL_WORKING,
      variables: {
        id: this.id
      }
    }).then(res => {
      this.working = res.data.workings[0]
      this.start = moment(this.working.start).format('HH:mm')
      this.end = moment(this.working.end).format('HH:mm')
      this.is_data_fetched = true
    })
  },
  methods: {
    subtotal (eD, sD, br) {
      if (br === '') {
        br = 0
      }
      const j = parseInt(moment(eD).format('x')) - parseInt(moment(sD).format('x'))
      return parseInt(j) - (parseInt(br) * 3600000)
    },
    update () {
      let curDay = moment(this.day).format('YYYY-MM-DD')
      let curStart = curDay + 'T' + this.start + ':00+07:00'
      let curEnd = curDay + 'T' + this.end + ':00+07:00'
      this.$apollo.mutate({
        // Mutation
        mutation: UPDATE_WORKING_HOURS,
        // Parameters
        variables: {
          memo: this.working.memo,
          id: this.working.id,
          start: curStart,
          end: curEnd,
          break: this.working.break
        }
      }).then(data => {
        this.$router.push({ name: 'ListDate' })
      })
    }
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

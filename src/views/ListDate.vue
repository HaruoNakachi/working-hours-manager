<template>

  <div class="p-listDate">
    <v-alert v-if="success" type="success">
      Success
    </v-alert>
    <v-content>
      <v-tabs v-model="active" color="cyan" dark>
        <v-tabs-slider></v-tabs-slider>
        <v-tab v-for="tab in months" :key="tab" ripple @click="load(tab)">
          2019/{{ tab }}
        </v-tab>
        <v-tab-item v-for="tab in months" :key="tab">
          <template>
            <v-container fluid class="table-wrap">
              <div class="table-header">
                <v-row>
                  <v-col cols="md-1">
                    Day
                  </v-col>
                  <v-col cols="md-2">
                    Start at
                  </v-col>
                  <v-col cols="md-2">
                    End at
                  </v-col>
                  <v-col cols="md-1 d-none d-sm-flex">
                    Break
                  </v-col>
                  <v-col cols="md-1 d-none d-sm-flex">
                    Subtotal
                  </v-col>
                  <v-col class="d-none d-sm-flex">
                    Memo
                  </v-col>
                  <v-col cols="md-1"></v-col>
                </v-row>
              </div>
              <div class="table-body">
                <template v-if="empty">
                  <div class="no-data">No Data</div>
                </template>
                <template v-else>
                  <working-hour
                    v-for="working in workings"
                    :key="working.id"
                    :working="working"
                    :edit="false"
                    @clicked="onClickChild">
                  </working-hour>
                </template>
              </div>
            </v-container>
          </template>
        </v-tab-item>
      </v-tabs>
      <template v-if="show">
        <v-container>
          <v-row>
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
              <div class="input-area">
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
              </div>
            </v-col>
            <v-col>
              <div class="input-area">
                <v-text-field label="Break" prepend-icon="access_time" v-model="breaks"></v-text-field>
                <span class="spect">h</span>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="input-area">
                <v-text-field label="Memo" v-model="memo"></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-btn small fab @click="addWork" class="ml-3 mr-3">
              <v-icon>mdi-check-bold</v-icon>
            </v-btn>
            <v-btn small fab @click="closeAdd" class="ml-3 mr-3">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </template>
      <div class="addBtn" v-show="showBtn">
        <v-btn small fab @click="showAdd" >
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </div>
    </v-content>
  </div>
</template>

<script>
import { WORKING_HOURS, CREATE_WORKING, CHECK_WORKING } from '../constants/graphql'
import WorkingHour from './WorkingHour'
import moment from 'moment'
import DatePicker from 'vue2-datepicker'
export default {
  name: 'ListDate',
  data: () => ({
    day: null,
    start: null,
    end: null,
    breaks: null,
    memo: null,
    active: null,
    activeM: null,
    loading: 0,
    workings: null,
    centered: false,
    endDay: '',
    success: false,
    months: 12,
    empty: false,
    show: false,
    showBtn: false,
    time: null,
    start_modal: false,
    end_modal: false
  }),
  components: {
    WorkingHour,
    DatePicker
  },
  apollo: {
    workings: {
      query: WORKING_HOURS,
      variables: {
        month: 9,
        userId: localStorage.getItem('user')
      }
    }
  },
  async mounted () {
    const currentM = new Date()
    this.active = parseInt(moment(currentM).format('M')) - 1
    this.activeM = this.active + 1
    const d = await this.$apollo.query({
      query: WORKING_HOURS,
      variables: {
        month: this.activeM,
        userId: localStorage.getItem('user')
      }
    })
    this.workings = d.data.workings
    // checking
    const c = await this.$apollo.query({
      query: CHECK_WORKING,
      variables: {
        day: moment(currentM).format('YYYY-MM-DD'),
        userId: localStorage.getItem('user')
      }
    })
    if (Object.entries(c.data.workings).length === 0) {
      this.showBtn = true
    }
  },
  methods: {
    refetch () {
      this.$apollo.queries.workings.refetch()
    },
    digSave (e) {
      this.$refs.dialog.save(e)
    },
    closeAdd () {
      this.show = false
    },
    addWork () {
      const currentM = new Date()
      if (this.breaks === null) {
        this.breaks = '0'
      }
      if (this.memo === null) {
        this.memo = ''
      }
      let curDay = moment(currentM).format('YYYY-MM-DD')
      let curStart = curDay + 'T' + this.start + ':00+07:00'
      let curEnd = curDay + 'T' + this.end + ':00+07:00'
      this.$apollo.mutate({
        mutation: CREATE_WORKING,
        variables: {
          month: parseInt(moment(currentM).format('M')),
          day: curDay,
          start: curStart,
          end: curEnd,
          break: this.breaks,
          memo: this.memo,
          userId: localStorage.getItem('user')
        },
        refetchQueries: [
          {
            query: WORKING_HOURS,
            variables: {
              month: parseInt(moment(currentM).format('M')),
              userId: localStorage.getItem('user')
            }
          }
        ]
      }).then(data => {
        this.show = false
        this.showBtn = false
      })
    },
    showAdd () {
      this.show = true
      this.showBtn = false
    },
    onClickChild (value) {
      this.success = value
      setTimeout(() => {
        this.success = false
      }, 1000)
    },
    async load (v) {
      const dl = await this.$apollo.query({
        query: WORKING_HOURS,
        variables: {
          month: v,
          userId: localStorage.getItem('user')
        }
      })
      if (dl.data.workings.length === 0) {
        this.empty = true
      } else {
        this.empty = false
      }
    }
  }
}
</script>

<style lang="scss">
  .p-listDate {
    .addBtn {
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }
    .no-data {
      font-size: 1rem;
      text-align: center;
      padding: 20px;
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
      width: 100%;
      height: 100%;
      align-items: center;
      .spect {
        margin: 0 5px;
        display: flex;
        align-items: center;
      }
    }
    .center-line {
      display: flex;
      height: 100%;
      align-items: center;
    }
    .table {
      &-wrap {
        display: flex;
        flex-direction: column;
      }
      &-header {
        border-bottom: 1px solid rgba(0,0,0,.42);
        font-size: 0.9rem;
      }
      &-body {
        font-size: 0.9rem;
        input, textarea {
          font-size: 0.9rem;
        }
      }
    }
    .tab-wrap {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: #fff;
    }
    .footer-btn {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
</style>

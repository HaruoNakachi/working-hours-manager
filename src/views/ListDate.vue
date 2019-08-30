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
                  <v-col cols="md-1">
                    Break
                  </v-col>
                  <v-col cols="md-1">
                    Subtotal
                  </v-col>
                  <v-col class="d-none d-md-flex d-lg-flex">
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
                  <template v-if="show">
                    <v-row>
                      <v-col cols="md-1">
                        <div class="input-area">
                          Day <date-picker lang="en" type="date" format="YYYY-MM-DD" v-model="day"></date-picker>
                        </div>
                      </v-col>
                      <v-col cols="md-1">
                        <div class="input-area">
                          Start <date-picker lang="en" type="time" format="HH:mm" v-model="start"></date-picker>
                        </div>
                      </v-col>
                      <v-col cols="md-1">
                        <div class="input-area">
                          End <date-picker lang="en" type="time" format="HH:mm" v-model="end"></date-picker>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <div class="input-area">
                          Break <v-text-field lass="header-text-field-input" v-model="breaks"></v-text-field>
                          <span class="spect">h</span>
                        </div>
                      </v-col>
                      <v-col>
                        <div class="input-area">
                          Memo <v-text-field class="header-text-field-input" name="memo" v-model="memo"></v-text-field>
                        </div>
                      </v-col>
                      <v-col cols="md-1">
                        <v-btn small fab @click="addWork">
                          <v-icon>mdi-check-bold</v-icon>
                        </v-btn>
                        <v-btn small fab @click="closeAdd">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>

                      </v-col>
                    </v-row>
                  </template>
                </template>
              </div>
            </v-container>
          </template>
        </v-tab-item>
      </v-tabs>
      <div class="addBtn" >
        <v-btn small fab @click="showAdd" v-if="!show">
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </div>
    </v-content>
  </div>
</template>

<script>
import { WORKING_HOURS, CREATE_WORKING } from '../constants/graphql'
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
    show: false
  }),
  components: {
    WorkingHour,
    DatePicker
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
  },
  methods: {
    closeAdd () {
      this.show = false
    },
    addWork () {
      const currentM = new Date()
      if (this.breaks === null) {
        this.breaks = ''
      }
      if (this.memo === null) {
        this.memo = ''
      }
      this.$apollo.mutate({
        mutation: CREATE_WORKING,
        variables: {
          month: parseInt(moment(currentM).format('M')),
          day: moment(this.day).format('YYYY-MM-DD'),
          start: moment(this.start).format('YYYY-MM-DDTHH:mm:ssZ'),
          end: moment(this.end).format('YYYY-MM-DDTHH:mm:ssZ'),
          break: this.breaks,
          memo: this.memo,
          userId: localStorage.getItem('user')
        }
      })
      // We log the created user ID
      // console.log(createWorking)
      this.show = false
    },
    showAdd () {
      this.show = true
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
          month: v
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

<template>
  <v-row>
    <v-col cols="md-1">
      <div class="center-line">{{ working.day | moment("M/D") }} (月)</div>
    </v-col>
    <v-col cols="md-2">
      <div class="input-area">
        <template v-if="openE">
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
        </template>
        <template v-else>
          {{ working.start | moment("HH:ss") }}
        </template>
      </div>
    </v-col>
    <v-col cols="md-2">
      <div class="input-area">
        <template v-if="openE">
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
        </template>
        <template v-else>
          {{ working.end | moment("HH:ss") }}
        </template>
      </div>
    </v-col>
    <v-col cols="md-1">
      <div class="input-area">
        <template v-if="openE">
          <v-text-field
            class="header-text-field-input" v-model="working.break"
          ></v-text-field>
        </template>
        <template v-else>
          {{ working.break }}
        </template>
        <span class="spect">h</span>
      </div>
    </v-col>
    <v-col cols="md-1">
      <div class="center-line"> {{ subtotal(working.end, working.start, working.break) | duration('hours') }} h</div>
    </v-col>
    <v-col class="d-none d-md-flex d-lg-flex">
      <div class="input-area">
        <template v-if="openE">
          <v-text-field class="header-text-field-input" name="memo" v-model="working.memo"></v-text-field>
        </template>
        <template v-else>
          {{ working.memo }}
        </template>
      </div>
    </v-col>
    <v-col cols="md-1">
      <template v-if="openE">
        <v-btn small fab @click="close(working)">
          <v-icon>mdi-check-bold</v-icon>
        </v-btn>
      </template>
      <template v-else>
        <v-btn small fab @click="open(working)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
    </v-col>
  </v-row>
</template>

<script>
import moment from 'moment'
import DatePicker from 'vue2-datepicker'
import { UPDATE_WORKING_HOURS } from '../constants/graphql'
export default {
  name: 'WorkingHour',
  props: ['working', 'edit'],
  data: () => ({
    openE: Boolean,
    memo: '',
    start_modal: false,
    end_modal: false,
    start: null,
    end: null
  }),
  created () {
    this.openE = this.edit
  },
  methods: {
    subtotal: function (eD, sD, br) {

    },
    open (obj) {
      this.openE = !this.openE
      this.start = moment(obj.start).format('HH:mm')
      this.end = moment(obj.end).format('HH:mm')
    },
    close (obj) {
      let curDay = moment(obj.day).format('YYYY-MM-DD')
      let curStart = curDay + 'T' + this.start + ':00Z'
      let curEnd = curDay + 'T' + this.end + ':00Z'
      console.log(curEnd)
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
        // this.$emit('clicked', 'true')
        this.openE = !this.openE
      })
    }
  },
  components: { DatePicker }
}
</script>

<style lang="scss">

</style>

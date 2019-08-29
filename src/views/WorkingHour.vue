<template>
  <v-row>
    <v-col cols="md-1">
      <div class="center-line">{{ working.day | moment("M/D") }} (月)</div>
    </v-col>
    <v-col cols="md-2">
      <div class="input-area">
        <template v-if="openE">
          <date-picker lang="en" v-model="working.start" type="time" format="HH:mm"></date-picker>
        </template>
        <template v-else>
          {{ working.start | moment("HH:ss") }}
        </template>
      </div>
    </v-col>
    <v-col cols="md-2">
      <div class="input-area">
        <template v-if="openE">
          <date-picker lang="en" v-model="working.end" type="time" format="HH:mm"></date-picker>
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
        <v-btn small fab @click="close">
          <v-icon>mdi-check-bold</v-icon>
        </v-btn>
      </template>
      <template v-else>
        <v-btn small fab @click="open">
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
    memo: ''
  }),
  created () {
    this.openE = this.edit
  },
  methods: {
    subtotal: function (eD, sD, br) {
      if (br === '') {
        br = 0
      }
      const j = parseInt(moment(eD).format('x')) - parseInt(moment(sD).format('x'))
      return parseInt(j) - (parseInt(br) * 3600000)
    },
    open (event) {
      this.openE = !this.openE
    },
    close (event) {
      this.openE = !this.openE
      this.$apollo.mutate({
        // Mutation
        mutation: UPDATE_WORKING_HOURS,
        // Parameters
        variables: {
          memo: this.working.memo,
          id: this.working.id,
          start: moment(this.working.start).format('YYYY-MM-DDTHH:mm:ssZ'),
          end: moment(this.working.end).format('YYYY-MM-DDTHH:mm:ssZ'),
          break: this.working.break
        }
      }).then(data => {
        // this.$emit('clicked', 'true')
      })
    }
  },
  components: { DatePicker }
}
</script>

<style lang="scss">

</style>

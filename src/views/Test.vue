<template>
  <v-row>
    <v-col cols="11" sm="5">
      <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="time"
        persistent
        full-width
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="time"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="modal2"
          v-model="time"
          full-width
        >
          <div class="flex-grow-1"></div>
          <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
        </v-time-picker>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Test',
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    time: null,
    modal2: false
  })
}
</script>

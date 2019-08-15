<template>

  <div class="p-listDate">
    <v-content>
      <v-tabs v-model="tab" background-color="deep-purple accent-4" class="elevation-2 tab-wrap" dark
        :centered="centered"
        :grow="grow"
        :vertical="vertical"
        :right="right"
        :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
        :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
        :icons-and-text="icons"
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab :href="`#tab-1`">
          2019/07
        </v-tab>
        <v-tab :href="`#tab-2`">
          2019/08
        </v-tab>
        <v-tab-item value="tab-1" class="tab-content">
          <template>
            <v-container fluid class="table-wrap">
              <div class="table-header">
                <v-row>
                  <v-col cols="md-1">
                    Day
                  </v-col>
                  <v-col cols="md-1">
                    Start at
                  </v-col>
                  <v-col cols="md-1">
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
                </v-row>
              </div>
              <div class="table-body">
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">7/1 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">7/2 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">7/3 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">7/1 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">7/2 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">7/3 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">7/1 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">7/2 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">7/2 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">7/2 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">7/2 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>

              </div>
            </v-container>
          </template>
        </v-tab-item>
        <v-tab-item value="tab-2" class="tab-content">
          <template>
            <v-container fluid class="table-wrap">
              <div class="table-header">
                <v-row>
                  <v-col cols="md-1">
                    Day
                  </v-col>
                  <v-col cols="md-1">
                    Start at
                  </v-col>
                  <v-col cols="md-1">
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
                </v-row>
              </div>
              <div class="table-body">
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">8/1 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">8/2 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="md-1">
                    <div class="center-line">8/3 (月)</div>
                  </v-col>
                  <v-col cols="md-1">
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
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </template>
        </v-tab-item>
      </v-tabs>
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
  name: 'ListDate',
  data: function () {
    return {
      time: [
        {
          id: 1,
          v: '2019/07'
        },
        {
          id: 2,
          v: '2019/08'
        }
      ],
      tab: null,
      icons: false,
      centered: false,
      grow: false,
      vertical: false,
      prevIcon: false,
      nextIcon: false,
      right: false
    }
  }
}
</script>

<style lang="scss">
  .p-listDate {
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

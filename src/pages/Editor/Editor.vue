<template>
  <v-container fluid pt-1>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap class="crossword-wizard-container">
        <v-stepper class="crossword-wizard" v-model="currentStep">
          <v-stepper-header class="crossword-wizard-header">
            <v-stepper-step :complete="currentStep > 1" step="1">Name of step 1</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="currentStep > 2" step="2">Name of step 2</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Name of step 3</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1" align-top>
              <v-card
              class="mb-1"
              color="lighten-1"
              >
                <v-text-field
                label="Crossword Name"
                solo
                ></v-text-field>
                <v-select
                :items="categories"
                label="Crossword Category"
                solo
                ></v-select>
                <v-btn
                color="primary"
                @click="currentStep = 2"
                >
                Continue
                </v-btn>
                <v-btn flat>Cancel</v-btn>
              </v-card>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card
              class="mb-1"
              color="lighten-1"
              height="200px"
              >
                <v-layout>
                  <v-text-field
                  class="crossword-size"
                  min="12"
                  max="128"
                  type="number"
                  value="12"
                  ></v-text-field>
                  </v-layout>
                  <v-divider vertical="true"></v-divider>
              </v-card>
              <v-btn
              color="primary"
              @click="currentStep = 3"
              >
              Continue
              </v-btn>
              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card
              class="mb-5"
              color="grey lighten-1"
              height="200px"
              ></v-card>
              <v-btn
              color="primary"
              @click="currentStep = 1"
              >
              Continue
              </v-btn>
              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>     
<script>
  export default {
    components: {},
    data () {
      return {
        currentStep: 0,
        categories: []
      }
    },
    methods: {
      clickCircle (vueComponent, event) {}
    }
  }
</script>
<style scoped>
  .crossword-wizard-container {
    vertical-align: top;
  }
  .crossword-wizard {
    width: 100%;
  }
  .crossword-wizard-header {
    height: 40px;
  }
  .letter-box {
  	transform: scale(.9);
  	position: absolute;
  	top: 0;
  	left: 0;
  }
  .crossword-row {
  	display: flex;
  	flex-direction: row;
  }
  .crossword-cell {
  	display: inline-block;
  	width: 3.7%;
  	max-width: 3.7%;
  	border: 1px black solid;
  	text-align: center;
  	margin: 1px;
  }
  .crossword-size {
    width: 12%;
  }
</style>
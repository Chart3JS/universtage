<template>
  <v-container fluid pt-1>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
      	<v-btn class="success" @click="createNewCrossword">New Crossword</v-btn>
      </v-layout>	
    </v-slide-y-transition>
  </v-container>
</template>      
<script>
  export default {
    components: {},
    data () {
      return {
      }
    },
    methods: {
      createNewCrossword () {
        this.$router.push('/editor')
      }
    }
  }
</script>
<style scoped>
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
</style>
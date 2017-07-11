<template>
  <div class="app">
    <scoreboard></scoreboard>
    <controls></controls>

  </div>
</template>

<script>

import scoreboard from './components/Scoreboard.vue';
import controls from './components/Controls.vue';



export default {
  components: {
    scoreboard,
    controls
  },
}
</script>

<style lang="scss" src="./assets/style.scss">



</style>

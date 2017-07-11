<template>
  <div class="score">
    <div class="score-points">{{ score }}</div>

  </div>
</template>

<script>
export default {

  name: 'Fighter',

  data () {
    return {
      score: 0
    };
  }
};
</script>

<style lang="css" scoped>
</style>

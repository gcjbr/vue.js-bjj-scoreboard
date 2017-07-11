<template>
<div class="controls">
      <control-points class="control-1" target="fighter1"></control-points>
      <div class="control-chronometer">
        <div class="min">
          <div class="btn">+ min</div>
          <div class="btn">- min</div>
        </div>
        <div class="reset">
          <div class="btn">Reset time</div>
          <div class="btn">Reset Match</div>
        </div>
        <div class="play-pause">
          <div class="btn">Play</div>
          <div class="btn">Pause</div>
        </div>
      </div>
      <control-points class="control-2" target="fighter2"></control-points>
    </div>

</template>

<script>



import controlPoints from './ControlPoints.vue';


export default {

  name: 'controls',
  components: {
    controlPoints,
  },
  data () {
    return {

    };
  },
  methods: {
    command(action, target, num){
      this.$emit('command', action, target, num);
    },
  }
};
</script>

<style lang="css" scoped>
</style>

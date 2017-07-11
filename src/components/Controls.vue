<template>
<div class="controls">
      <control-points class="control-1" target="fighter1"></control-points>
      <control-chronometer></control-chronometer>
      <control-points class="control-2" target="fighter2"></control-points>
    </div>

</template>

<script>

import controlPoints from './ControlPoints.vue';
import controlChronometer from './ControlChronometer.vue';

export default {
  name: 'controls',
  components: {
    controlPoints,
    controlChronometer,
  },
  methods: {
    command(action, target, num){
      this.$emit('command', action, target, num);
    },
  }
};
</script>

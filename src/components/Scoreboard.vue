<template>
 <div class="scoreboard">
      <div class="fighter fighter1">
        <div class="fighter-points">{{ fighter1.score }}</div>

      </div>
    <div class="fighter fighter2">
      <div class="fighter-points">{{ fighter2.score }}</div>

    </div>
    <div class="score-sub">
      <div class="sub-fighter sub-fighter1">
        <div class="adv">{{ fighter1.advantage }}</div>
        <div class="fau">{{ fighter1.fault }}</div>
      </div>
      <div class="chronometer">
        <span>{{ time }} </span>
      </div>
      <div class="sub-fighter  sub-fighter2">
        <div class="adv">{{ fighter2.advantage }}</div>
        <div class="fau">{{ fighter2.fault }}</div>
      </div>
    </div>

</div>

</template>

<script>

import { mapGetters } from 'vuex';

export default {

  name: 'scoreboard',
  computed: {
    ...mapGetters(['fighter1', 'fighter2','chronometer', 'time']),
  },
};
</script>

<template>
      <div class="control-chronometer">
        <div class="min">
          <div class="btn" @click="changeTo('chronometer', 'time', 60)">+ min</div>
          <div class="btn" @click="changeTo('chronometer', 'time', -60)">- min</div>
        </div>
        <div class="reset">
          <div class="btn" @click="resetTime">Reset time</div>
          <div class="btn" @click="resetMatch">Reset Match</div>
        </div>
        <div class="play-pause">
          <div class="btn" @click="startTime">Play</div>
          <div class="btn" @click="startTime">Pause</div>
        </div>
      </div>
</template>

<script>

import { mapMutations } from 'vuex'


export default {

  name: 'ControlChronometer',
  methods: {
    ...mapMutations(['resetMatch','change','resetTime', 'startTime']),
    changeTo(t, a, v){
      this.change({
        target: t,
        atribute: a,
        value: v,

      });
    }

  },

};
</script>

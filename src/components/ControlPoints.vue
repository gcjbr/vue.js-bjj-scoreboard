<template>
<div>
        <div class="plus">
          <div class="btn" @click="changeTo(target,'score', 4)">+ 4</div>
          <div class="btn" @click="changeTo(target,'score', 3)">+ 3</div>
          <div class="btn" @click="changeTo(target,'score', 2)">+ 2</div>
          <div class="btn" @click="changeTo(target,'advantage', 1)">+ adv</div>
          <div class="btn" @click="changeTo(target,'fault', 1)">+ penal</div>
        </div>
        <div class="minus">
          <div class="btn" @click="changeTo(target,'score', -4)">- 4</div>
          <div class="btn" @click="changeTo(target,'score', -3)">- 3</div>
          <div class="btn" @click="changeTo(target,'score', -2)">- 2</div>
          <div class="btn" @click="changeTo(target,'advantage', -1)">- adv</div>
          <div class="btn" @click="changeTo(target,'fault', -1)">- penal</div>
        </div>
      </div>

</template>

<script>

import { mapMutations } from 'vuex'


export default {

  name: 'ControlPoints',
  props:['target'],
  methods: {
    ...mapMutations(['change']),
    changeTo(t, a, v){
      this.change({
        target: t,
        atribute: a,
        value: v,

      });
    },
  },

};
</script>


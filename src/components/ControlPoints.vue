<template>
<div>
        <div class="plus">
          <div class="btn" @click="change(target,'score', 4)">+ 4</div>
          <div class="btn" @click="change(target,'score', 3)">+ 3</div>
          <div class="btn" @click="change(target,'score', 2)">+ 2</div>
          <div class="btn" @click="change(target,'advantage', 1)">+ adv</div>
          <div class="btn" @click="change(target,'fault', 1)">+ fault</div>
        </div>
        <div class="minus">
          <div class="btn" @click="change(target,'score', -4)">- 4</div>
          <div class="btn" @click="change(target,'score', -3)">- 3</div>
          <div class="btn" @click="change(target,'score', -2)">- 2</div>
          <div class="btn" @click="change(target,'advantage', -1)">- adv</div>
          <div class="btn" @click="change(target,'fault', -1)">- fault</div>
        </div>
      </div>

</template>

<script>



export default {

  name: 'ControlPoints',
  props:['target'],
  methods: {
    change(t, a, v){
      this.$store.commit('change', {
        target: t,
        atribute: a,
        value: v,

      });
    },
  },

};
</script>


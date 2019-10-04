<template>
<p>
    <span @click="editing=true" v-show="!editing && value === ''" class="fighter__info">
      Click to add fighter's name
    </span>
    <span @click="editing=true" v-show="!editing && value !== ''">
      {{value}}
    </span>
    <span v-show="editing" >
      <input :value="value"
            @input="$emit('input', $event.target.value)"
            @keydown.enter="editing=false"
            @blur="editing=false"
            type="text" 
            class="form-control" >
    </span>
</p>
</template>

<script>

export default {
  name: 'EditableName',
  props:['value'],
  data(){
    return {
      editing: false,
    }
  }

};
</script>

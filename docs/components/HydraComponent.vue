<template>
  <div  id="lala" class="blabla">
    test1
  </div>
</template>

<script setup>
  import {onMounted} from 'vue'
  onMounted(() => {
      const hydra = new Hydra({ detectAudio: false })
      osc(4, 0.1, 1.2).out()
  })
//import {Hydra} from 'hydra-synth'
</script>

<style scoped>
</style>

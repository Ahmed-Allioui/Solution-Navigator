<template>
  <AJA1Vue titel="async / await" usedTechnic="async / await" :importTexts="importTexts" />
</template>

<script setup>
import AJA1Vue from "./AJ-A1.vue";
// eslint-disable-next-line
async function importTexts(merge) {
  let arrays = []
  let promiseA = fetch("/ressource/aj/A.txt");
  let promiseB = fetch("/ressource/aj/B.txt");

  arrays.push(await generateTextArray(await promiseA));
  arrays.push(await generateTextArray(await promiseB));
  merge(arrays);
}

async function generateTextArray(response) {
  let text = (await response.text());
  return text.split(/\r?\n/);
}
</script>
  
<style lang="scss" scoped>
</style>
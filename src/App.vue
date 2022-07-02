<script setup lang="ts">
import { computed, ref } from 'vue';

import { Driver } from './types';

const drivers = ref<Driver[]>(
  Array(20)
    .fill(1)
    .map((_, i) => {
      return {
        id: crypto.randomUUID(),
        name: 'Hey',
        position: i
      };
    })
);

const orderedDrivers = computed(() => drivers.value.sort((a, b) => a.position - b.position));
</script>

<template>
  <div style="position: relative">
    <!-- transition Not working -->
    <div
      v-for="(driver, i) in orderedDrivers"
      @click="() => driver.position++"
      :style="{
        height: '2em',
        position: 'absolute',
        top: 2 * i + 'em',
        transition: 'all 0.5s ease-in-out'
      }"
    >
      {{ driver }}
    </div>
  </div>
</template>

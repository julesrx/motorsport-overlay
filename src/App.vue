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
  <div v-for="driver in orderedDrivers" @click="() => driver.position++">
    {{ driver }}
  </div>
</template>

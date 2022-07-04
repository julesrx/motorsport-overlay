<script setup lang="ts">
import { ref } from 'vue';

import DriverCard from './components/DriverCard.vue';
import { Driver } from './types';

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const drivers = ref<Driver[]>(
  Array(20)
    .fill(1)
    .map((_, i) => {
      return {
        id: crypto.randomUUID(),
        name: 'Hey',
        position: i + 1
      };
    })
);

const getDriverIndex = (driver: Driver) => {
  return drivers.value.sort((a, b) => a.position - b.position).indexOf(driver);
};

const updateDriverPosition = (driver: Driver) => {
  const newPosition = randomIntFromInterval(0, 19);
  if (driver.position === newPosition) return;

  driver.position = newPosition;

  // TODO: update others drivers positions
};
</script>

<template>
  <div style="position: relative">
    <DriverCard
      v-for="driver in drivers"
      :key="driver.id"
      :driver="driver"
      :index="getDriverIndex(driver)"
      @update-position="() => updateDriverPosition(driver)"
    />
  </div>
</template>

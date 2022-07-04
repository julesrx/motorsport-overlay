<script setup lang="ts">
import { ref } from 'vue';

import DriverCard from './components/DriverCard.vue';
import { Driver } from './types';

const driverCount = 20;

const drivers = ref<Driver[]>(
  Array(driverCount)
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

const updateDriverPosition = (driver: Driver, positionGained: boolean) => {
  const newPosition = positionGained ? driver.position - 1 : driver.position + 1;
  if (newPosition < 1 || newPosition > driverCount || driver.position === newPosition) return;

  const hasGoneUp = newPosition > driver.position;

  if (hasGoneUp) {
    const toMove = drivers.value.filter(
      d => d.id !== driver.id && d.position > driver.position && d.position <= newPosition
    );

    for (const d of toMove) {
      d.position--;
    }
  } else {
    const toMove = drivers.value.filter(
      d => d.id !== driver.id && d.position < driver.position && d.position >= newPosition
    );

    for (const d of toMove) {
      d.position++;
    }
  }

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
      @update-position="e => updateDriverPosition(driver, e)"
    />
  </div>
</template>

<style>
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>

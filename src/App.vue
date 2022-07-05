<script setup lang="ts">
import { ref } from 'vue';

import DriverCard from './components/DriverCard.vue';
import { Driver } from './types';
import { f1 } from './drivers';

const drivers = ref<Driver[]>([...f1]);

const getDriverIndex = (driver: Driver) => {
  return drivers.value.sort((a, b) => a.position - b.position).indexOf(driver);
};

const updateDriverPosition = (driver: Driver, positionGained: boolean) => {
  const newPosition = positionGained ? driver.position - 1 : driver.position + 1;
  if (newPosition < 1 || newPosition > drivers.value.length || driver.position === newPosition)
    return;

  const hasGoneUp = newPosition > driver.position;

  if (hasGoneUp) {
    const toMove = drivers.value.filter(
      d => d.number !== driver.number && d.position > driver.position && d.position <= newPosition
    );

    for (const d of toMove) {
      d.position--;
    }
  } else {
    const toMove = drivers.value.filter(
      d => d.number !== driver.number && d.position < driver.position && d.position >= newPosition
    );

    for (const d of toMove) {
      d.position++;
    }
  }

  driver.position = newPosition;
};
</script>

<template>
  <div class="py-10 px-20 h-screen w-screen">
    <div class="bg-transparent bg-dark-500 text-light-50 bg-opacity-90 py-1">
      <h1>F1</h1>
      <p>5:51</p>

      <div class="relative" :style="{ height: `${drivers.length * 2.5}rem` }">
        <DriverCard
          v-for="driver in drivers"
          :key="driver.number"
          :driver="driver"
          @update-position="e => updateDriverPosition(driver, e)"
        />
      </div>
    </div>
  </div>
</template>

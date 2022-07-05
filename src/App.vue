<script setup lang="ts">
import { ref } from 'vue';

import { Driver } from './types';
import DriverCard from './components/DriverCard.vue';
import { f1 } from './drivers';

const drivers = ref<Driver[]>([...f1]);

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
    <div class="bg-transparent bg-dark-500 text-light-50 bg-opacity-90 rounded-l-3xl w-52 pb-2">
      <div class="flex justify-center py-4">
        <img src="./assets/img/f1-logo.png" class="h-8" />
      </div>

      <div class="bg-black flex justify-center text-xl italic font-bold">
        <span>5:51</span>
      </div>

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

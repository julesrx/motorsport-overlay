import { ref, onMounted, onUnmounted, watch, UnwrapRef } from 'vue';

import { Driver } from './types';

const useRaceInterval = () => {
  const interval = ref(Math.random());

  let i: number;
  onMounted(() => {
    i = setInterval(() => {
      interval.value = Math.random();
    }, 1000);
  });
  onUnmounted(() => clearInterval(i));

  return interval;
};

const usePositions = (driver: Driver) => {
  const positionUpdated = ref(false);
  const positionGained = ref(false);

  watch(
    () => driver.position,
    (newPosition, oldPosition) => {
      if (newPosition === oldPosition) return;

      positionGained.value = newPosition < oldPosition;

      positionUpdated.value = true;
      setTimeout(() => {
        positionUpdated.value = false;
      }, 500);
    }
  );

  return {
    positionUpdated,
    positionGained
  };
};

export { useRaceInterval, usePositions };

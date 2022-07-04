<script lang="ts" setup>
import { ref, watch } from 'vue';

import { Driver } from '../types';

const emit = defineEmits<{
  (e: 'update-position', positionGained: boolean): void;
}>();

const props = defineProps<{ driver: Driver; index: number }>();

const showArrow = ref(false);
const positionGained = ref(false);
watch(
  () => props.index,
  (newIndex, oldIndex) => {
    if (newIndex === oldIndex) return;

    positionGained.value = newIndex < oldIndex;

    showArrow.value = true;
    setTimeout(() => {
      showArrow.value = false;
    }, 1000);
  }
);

const cardHeight = 2;
</script>

<template>
  <div
    :class="{ 'driver-card': true, updated: showArrow }"
    :style="{ height: cardHeight + 'em', top: index * cardHeight + 'em' }"
    @click.prevent="() => emit('update-position', true)"
    @click.right.prevent="() => emit('update-position', false)"
  >
    {{ driver.position }}

    <div class="arrow" :style="{ visibility: showArrow ? 'visible' : 'hidden' }">
      {{ positionGained ? '^' : 'V' }}
    </div>
  </div>
</template>

<style scoped>
.driver-card {
  width: 4em;
  position: absolute;
  transition: all 0.5s;
  user-select: none;
  display: flex;
  padding-left: 0.5em;
  align-items: center;
  background-color: #d4ff00;
  border: 1px solid #000;
  cursor: pointer;
  color: #000;
}

.driver-card.updated {
  background-color: red;
}

.driver-card .arrow {
  position: absolute;
  right: 0.5em;
  transition: visibility 0s, opacity 0.5s linear;
}
</style>

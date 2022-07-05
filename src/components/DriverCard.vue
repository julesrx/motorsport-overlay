<script lang="ts" setup>
import { computed, ref, watch } from 'vue';

import { Driver } from '../types';

const emit = defineEmits<{
  (e: 'update-position', positionGained: boolean): void;
}>();

const props = defineProps<{ driver: Driver; index: number }>();

const positionUpdated = ref(false);
const positionGained = ref(false);
watch(
  () => props.index,
  (newIndex, oldIndex) => {
    if (newIndex === oldIndex) return;

    positionGained.value = newIndex < oldIndex;

    positionUpdated.value = true;
    setTimeout(() => {
      positionUpdated.value = false;
    }, 500);

    // console.log(newIndex, oldIndex);
  }
);
</script>

<template>
  <div
    class="flex items-center pr-4 w-48 space-x-2 cursor-pointer select-none"
    @click.prevent="() => emit('update-position', true)"
    @click.right.prevent="() => emit('update-position', false)"
  >
    <div class="w-10 text-center italic">{{ driver.position }}</div>
    <div class="w-14 font-bold">{{ driver.designation }}</div>

    <div class="flex-1"></div>

    <div class="italic">+2.894</div>
  </div>
</template>

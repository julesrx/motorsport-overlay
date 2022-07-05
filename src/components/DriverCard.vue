<script lang="ts" setup>
import { ref, watch } from 'vue';

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
  }
);

const cardHeight = 2;
</script>

<template>
  <div
    class="w-[4em] absolute transition transition-all duration-500 select-none flex pl-2 items-center bg-[#d4ff00] border border-black cursor-pointer"
    :class="{ 'bg-red-500': positionUpdated }"
    :style="{ height: cardHeight + 'em', top: index * cardHeight + 'em' }"
    @click.prevent="() => emit('update-position', true)"
    @click.right.prevent="() => emit('update-position', false)"
  >
    {{ driver.position }}

    <div class="absolute right-2" v-if="positionUpdated">
      {{ positionGained ? '-' : '+' }}
    </div>
  </div>
</template>

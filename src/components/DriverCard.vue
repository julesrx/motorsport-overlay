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
  }
);

const cardHeight = 2;

const style = computed(() => {
  return { height: cardHeight + 'em', top: props.index * cardHeight + 'em' };
});
</script>

<template>
  <div
    class="flex items-center"
    :style="style"
    @click.prevent="() => emit('update-position', true)"
    @click.right.prevent="() => emit('update-position', false)"
  >
    <div class="w-8 text-center">{{ driver.position }}</div>
    <div>{{ driver.designation }}</div>
  </div>

  <!-- <div
    class="w-[4em] absolute transition transition-all duration-500 select-none flex pl-2 items-center cursor-pointer"
    :style="{ height: cardHeight + 'em', top: index * cardHeight + 'em' }"
    @click.prevent="() => emit('update-position', true)"
    @click.right.prevent="() => emit('update-position', false)"
  >
    {{ driver.position }}
    {{ driver.designation }}

    <div class="absolute right-2" v-if="positionUpdated">
      {{ positionGained ? '-' : '+' }}
    </div>
  </div> -->
</template>

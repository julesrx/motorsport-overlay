<script lang="ts" setup>
import { ref, watch } from 'vue';
import ChevronUp from '@heroicons/vue/solid/ChevronUpIcon';
import ChevronDown from '@heroicons/vue/solid/ChevronDownIcon';

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

const chevronClassList = 'absolute w-5 w-5 left-[.7rem]';
</script>

<template>
  <div
    class="flex items-center pr-4 w-48 space-x-2 cursor-pointer select-none h-10"
    @click.prevent="() => emit('update-position', true)"
    @click.right.prevent="() => emit('update-position', false)"
  >
    <div class="w-10 text-center italic relative">
      <div>{{ driver.position }}</div>

      <template v-if="positionUpdated">
        <ChevronUp v-if="positionGained" :class="[chevronClassList, 'text-green-500 -top-2']" />
        <ChevronDown v-else :class="[chevronClassList, 'text-green-500 text-red-500 -bottom-3']" />
      </template>
    </div>

    <div class="w-14 font-bold">{{ driver.designation }}</div>

    <div class="flex-1"></div>

    <div class="italic">+2.894</div>
  </div>
</template>

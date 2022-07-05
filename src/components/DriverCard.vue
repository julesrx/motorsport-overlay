<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import ChevronUp from '@heroicons/vue/solid/ChevronUpIcon';
import ChevronDown from '@heroicons/vue/solid/ChevronDownIcon';

import { Driver } from '../types';

const emit = defineEmits<{
  (e: 'update-position', positionGained: boolean): void;
}>();

const props = defineProps<{ driver: Driver }>();

const positionUpdated = ref(false);
const positionGained = ref(false);
watch(
  () => props.driver.position,
  (newPosition, oldPosition) => {
    if (newPosition === oldPosition) return;

    positionGained.value = newPosition < oldPosition;

    positionUpdated.value = true;
    setTimeout(() => {
      positionUpdated.value = false;
    }, 500);
  }
);

const chevronClassList = 'absolute w-5 w-5 left-[.7rem] transition transition-opacity';
</script>

<template>
  <div
    class="flex items-center pr-4 w-48 space-x-2 cursor-pointer select-none h-10 transition transition-transform duration-500 absolute transform"
    :style="{ '--tw-translate-y': `${(driver.position - 1) * 2.5}rem` }"
    @click.prevent="() => emit('update-position', true)"
    @click.right.prevent="() => emit('update-position', false)"
  >
    <div class="w-10 text-center italic relative">
      <div>{{ driver.position }}</div>

      <ChevronUp
        :class="[
          chevronClassList,
          'text-green-500 -top-2',
          positionUpdated && positionGained ? 'opacity-100' : 'opacity-0'
        ]"
      />
      <ChevronDown
        :class="[
          chevronClassList,
          'text-red-500 -bottom-3',
          positionUpdated && !positionGained ? 'opacity-100' : 'opacity-0'
        ]"
      />
    </div>

    <div class="w-14 font-bold">{{ driver.designation }}</div>

    <div class="flex-1"></div>

    <div class="italic">+2.894</div>
  </div>
</template>

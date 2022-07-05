<script lang="ts" setup>
import ChevronUp from '@heroicons/vue/solid/ChevronUpIcon';
import ChevronDown from '@heroicons/vue/solid/ChevronDownIcon';

import { Driver } from '../types';
import { useRaceInterval, usePositions } from '../composables';

const emit = defineEmits<{
  (e: 'update-position', positionGained: boolean): void;
}>();

const props = defineProps<{ driver: Driver }>();

const interval = useRaceInterval();
const { positionUpdated, positionGained } = usePositions(props.driver);

const chevronClassList = 'absolute w-5 w-5 left-[.7rem] transition transition-opacity';
</script>

<template>
  <div
    class="flex items-center cursor-pointer select-none h-10 transition transition-transform duration-500 absolute transform w-full"
    :style="{ '--tw-translate-y': `${(driver.position - 1) * 2.5}rem` }"
    @click.prevent="() => emit('update-position', true)"
    @click.right.prevent="() => emit('update-position', false)"
  >
    <div class="w-10 text-center italic relative">
      <div>{{ driver.position }}</div>

      <ChevronUp
        :class="[
          chevronClassList,
          'text-[#48f833] -top-2',
          positionUpdated && positionGained ? 'opacity-100' : 'opacity-0'
        ]"
      />
      <ChevronDown
        :class="[
          chevronClassList,
          'text-[#c82812] -bottom-3',
          positionUpdated && !positionGained ? 'opacity-100' : 'opacity-0'
        ]"
      />
    </div>

    <img
      :src="`https://www.formula1.com/content/dam/fom-website/teams/2022/${driver.team.uid}-logo.png.transform/2col/image.png`"
      :alt="driver.team.name"
      class="w-6 h-6"
    />

    <div class="w-14 font-bold ml-2">{{ driver.designation }}</div>

    <div class="flex-1"></div>

    <div class="italic" :class="driver.position === 1 && 'hidden'">+{{ interval.toFixed(3) }}</div>
    <div class="w-4 flex justify-center items-center">
      <div class="w-px h-2 bg-green-500"></div>
    </div>
  </div>
</template>

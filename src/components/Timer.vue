<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const date = ref(Date.now());

let interval: number;
onMounted(() => {
  interval = setInterval(() => {
    date.value -= 1000;
  }, 1000);
});

onUnmounted(() => clearInterval(interval));

const formatter = new Intl.DateTimeFormat(undefined, { timeStyle: 'medium' });
const formatted = computed(() => {
  const parts = formatter.formatToParts(new Date(date.value)).filter(p => p.type !== 'hour');
  parts.shift();

  return parts.reduce((a, b) => a + b.value, '');
});
</script>

<template>
  <span>{{ formatted }}</span>
</template>

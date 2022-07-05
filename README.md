Other solution :
display flex always, simulate order with position/margin before, then reorder

broken transitions :

```js
const cardHeight = 2;

const style = computed(() => {
  return { height: cardHeight + 'em', top: props.index * cardHeight + 'em' };
});

transition transition-all duration-500
```

```html
<div
  class="w-[4em] absolute transition transition-all duration-500 select-none flex pl-2 items-center cursor-pointer"
  :style="{ height: cardHeight + 'em', top: index * cardHeight + 'em' }"
  @click.prevent="() => emit('update-position', true)"
  @click.right.prevent="() => emit('update-position', false)"
>
  {{ driver.position }} {{ driver.designation }}

  <div class="absolute right-2" v-if="positionUpdated">{{ positionGained ? '-' : '+' }}</div>
</div>
```

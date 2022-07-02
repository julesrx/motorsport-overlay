<script lang="ts">
  type Driver = {
    id: string;
    name: string;
    position: number;
  };

  let drivers: Driver[] = Array(20)
    .fill(1)
    .map((_, i) => {
      return {
        id: crypto.randomUUID(),
        name: 'Hey',
        position: i
      };
    });

  // setInterval(() => {
  //   drivers = [
  //     ...drivers,
  //     {
  //       id: crypto.randomUUID(),
  //       name: 'Radnom',
  //       position: new Date().getSeconds()
  //     }
  //   ];
  // }, 1000);

  $: orderedDrivers = [...drivers.sort((a, b) => a.position - b.position)];
  $: {
    console.log(orderedDrivers);
  }
</script>

<main>
  <div>
    {#each orderedDrivers as driver}
      <div on:click={() => driver.position++}>
        {JSON.stringify(driver)}
      </div>
    {/each}
  </div>
</main>

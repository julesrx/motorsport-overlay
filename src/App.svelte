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
</script>

<main>
  <div>
    {#each drivers.sort((a, b) => a.position - b.position) as driver}
      <div on:click={() => driver.position++}>
        {JSON.stringify(driver)}
      </div>
    {/each}
  </div>
</main>

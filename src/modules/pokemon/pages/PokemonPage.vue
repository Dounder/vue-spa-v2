<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-bold">
      Pokemon <small class="text-blue-500">#{{ id }}</small>
    </h1>

    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="Bulbasaur"
      class="w-[12rem] h-[12rem] mt-5"
      width="200"
      height="200"
    />

    <RouterLink
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      class="bg-blue-500 text-white p-2 rounded mt-5 text-center hover:bg-blue-700 transition-all duration-200 ease-in-out"
    >
      Next
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
interface Props {
  id: number
}

defineProps<Props>()
</script>

<style scoped></style>

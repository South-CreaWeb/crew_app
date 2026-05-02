<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { CrewData } from './types/crew.type'

const API_URL: string = "http://localhost:3000/crew"

const crews = ref<CrewData[]>([])

onMounted( async () =>  {
  const data = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  crews.value = await data.json()
})

</script>

<template>
  <h1>List Profil crews</h1>
  <ul>
    <li v-for="crew in crews" :key="crew.customId">
      {{ crew.name }}--{{ crew.role }}
    </li>
  </ul>
</template>


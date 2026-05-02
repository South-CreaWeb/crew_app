<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { CrewData } from './types/crew.type'

import { createCrew, getCrews } from './api/crew.api'



const crews = ref<CrewData[]>([])
const name = ref<string>("")
const role = ref<"captain" | "crew">("captain")

onMounted( async () =>  {
  crews.value = await getCrews()
})

async function handleCreate(data: { name: string, role: string }) {

  const newCrew: CrewData = await createCrew(data)

  crews.value.push(newCrew)

  name.value = ""
}

</script>

<template>
  <h1>List Profil crews</h1>

  <section class="add_crew">
    <h2>Add your profil</h2>
    <input type="text" v-model="name">
    <select v-model="role">
      <option value="captain">Captain</option>
      <option value="crew">Crew</option>
    </select>
    <button @click="handleCreate({name, role})">Add profil</button>
  </section>
  <ul>
    <li v-for="crew in crews" :key="crew.customId">
      {{ crew.name }}--{{ crew.role }}
    </li>
  </ul>
</template>


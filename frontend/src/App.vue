<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { CrewData } from './types/crew.type'

import { createCrew, getCrews, deleteCrew, updateCrew } from './api/crew.api'



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

async function handleDelete(id: string) {

  await deleteCrew(id)

  crews.value = crews.value.filter((crew) => crew._id !== id)


}

async function handleUpdate(id: string, data: {name: string, role: string}) {

  await updateCrew(id, data)

  const modifiedCrew = crews.value.find((crew) => crew._id === id)

  if(modifiedCrew) {
    Object.assign(modifiedCrew, data)
    console.log("Salut")
  }
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
      <button @click="handleDelete(crew._id)">Delete Crew</button>
      <button @click="handleUpdate(crew._id, {name: 'Richard', role: 'Crew'})">Edit Crew</button>
    </li>
  </ul>
</template>


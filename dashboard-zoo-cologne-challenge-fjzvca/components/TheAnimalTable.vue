<script lang="ts" setup >
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { Animal } from '../types'
import { calculateAgeInYears } from '../composables/helpers'
import {calculateAmountOfFood} from '../composables/helpers'

const props = defineProps({
  animals: {
    type: Array as PropType<Array<Animal>>,
    required: true,
  },
})

const animalsSortedByName = computed(() => props.animals.slice().sort((animalA, animalB) => animalA.name.localeCompare(animalB.name)))
</script >


<template>
  <div class="bg-amber-50">
  <table class="table-auto">
    <thead>
      <tr class="bg-amber-400">
        <th class="pl-2">Index</th>
        <th>Species</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age (yrs)</th>
        <th>Weight (kg)</th>
        <th>Height (m)</th>
        <th>Favourite fruit</th>
       <th>Amount of food (kg)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="({ id,name , species, gender, birthdate, weight, height, favouriteFruit }, animalIndex) in animalsSortedByName" :key="id" class="hover:bg-amber-200 hover:font-semibold">
        <td class="pl-2">{{ animalIndex + 1 }}</td>
        <td>{{ species }}</td>
        <td>{{ name }}</td>
        <td>{{ gender }}</td>
        <td>{{ calculateAgeInYears(new Date(birthdate)) }}</td>
        <td>{{ weight }}</td>
        <td>{{ height}}</td>
        <td>{{ favouriteFruit }}</td>
        <td>{{ calculateAmountOfFood(height,weight,calculateAgeInYears(new Date(birthdate)),favouriteFruit,gender,species)}}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<style scoped>
table {
  @apply text-left
}

td {
  @apply w-40
}

tr{
  @apply border-b-2
}

</style>

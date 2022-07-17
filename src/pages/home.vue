<template>
  <div v-if="loading">
    <p>loading</p>
  </div>
  <div v-else class="container xl row-auto">
    <div class="max-w-sm rounded overflow-hidden shadow-lg" v-for="(people, index) in peoples.results" :key="index">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{people.name}}</div>
        <p class="text-gray-700 text-base">
          {{people.gender}}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{people.mass}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import DataService from "../services/DataService"
import { ResponseData, Peoples } from '../types/interfaces/Interface';

export default defineComponent({
  setup() {
    const loading = ref(true as boolean)
    const peoples = ref({} as Peoples)

    onMounted(() => {
      getPeople()
    })

    const getPeople = () => {
      DataService.getAll().then((res: ResponseData) => {
        loading.value = false
        peoples.value = res.data
      })
      .catch((e:Error) => console.log(e))
    }
    console.log(peoples, loading)
    return {
      loading,
      peoples
    }
  }
})
</script>
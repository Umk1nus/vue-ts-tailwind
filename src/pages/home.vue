<template>
home
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
        peoples.value = res
      })
      .catch((e:Error) => console.log(e))
    }
    console.log(peoples)
  }
})
</script>
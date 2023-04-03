<template>
  <form class="mt-5 p-2" @submit="submitForm()">
    <input v-model="form.tag" class="form-control mb-3" type="text" placeholder="gift tag">
    <input v-model="form.url" class="form-control mb-3" type="text" placeholder="gif url">
    <button type="submit btn btn-light">submit</button>
  </form>

  <form @submit="searchGiphy()">
    <input v-model="search.query" class="form-control mt-5" type="text" id="search" placeholder="search">
  </form>

  <div class="row">
    <div v-for="giphy in giphys.data" class="col-4">
      <!-- <p>{{ giphy["images"] }}</p> -->
      <img :src="giphy.images.original.url" class="img-fluid" alt="">
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { sandboxGiftsService } from "../services/SanboxGiftsService.js"
import { giphyService } from "../services/GiphyService.js"

export default {
  setup() {
    // private variables and methods here
    const form = ref({})
    const search = ref({})
    return {
      // public variables and methods here
      form,
      search,
      giphys: computed(() => AppState.giphys),

      async submitForm() {
        try {
          const formData = form.value
          logger.log(formData)
          await sandboxGiftsService.submitForm(formData)
          form.value.tag = ''
          form.value.url = ''
          search.value = ''
        } catch (error) {
          logger.error(error.message)
        }
      },

      async searchGiphy() {
        try {
          const query = search.value
          await giphyService.searchGiphy(query)
          console.log(this.giphys.data[0])
        } catch (error) {
          logger.error(error)
        }

      }
    }
  },
}
</script>

<style></style>
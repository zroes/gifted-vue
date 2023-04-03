<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <GiftForm />
      </div>
      <div class="col-9">
        <div class="row">
          <GiftCard v-for="g in gifts" :key="g?.id" :gift="g" />

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue"
import { AppState } from "../AppState.js"
import { sandboxGiftsService } from "../services/SanboxGiftsService.js"
import { logger } from "../utils/Logger.js"

export default {
  setup() {

    async function getAllGifts() {
      try {
        await sandboxGiftsService.getAllGifts()
        logger.log("got all gifts", AppState.gifts)
      } catch (error) {
        logger.error(error)
      }
    }


    onMounted(() => {
      getAllGifts()
    })

    return {
      gifts: computed(() => AppState.gifts),
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>

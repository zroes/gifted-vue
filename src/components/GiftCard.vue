

<template>
  <div @click="openGift(gift.id)" class="col-3 selectable bg-secondary m-4 p-2">
    <p>{{ gift?.tag }}</p>
    <img v-if="gift?.opened" class="img-fluid" :src="gift?.url" alt="">
  </div>
</template>

<script>
import { Gift } from "../models/Gift.js"
import { sandboxGiftsService } from "../services/SanboxGiftsService.js"
import { logger } from "../utils/Logger.js"

export default {
  props: {
    gift: { type: Gift, required: true }
  },
  setup() {
    // private variables and methods here
    return {
      // public variables and methods here
      async openGift(id) {
        try {
          logger.log("opening", id)
          await sandboxGiftsService.openGift(id)
        } catch (error) {
          logger.log(error.message)
        }
      }
    }
  },
}
</script>

<style></style>
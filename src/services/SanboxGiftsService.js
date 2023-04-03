import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class SandboxGiftsService {

  async getAllGifts() {
    const res = await api.get('gifts')
    logger.log(res.data)
    AppState.gifts = res.data.map(gif => new Gift(gif))
  }

  async openGift(id) {
    const foundGift = AppState.gifts.find(g => g.id == id)
    const res = await api.put(`gifts/${id}`, { opened: true })
    logger.log(res.data)
    foundGift.opened = true
  }

  async submitForm(formData) {
    const res = await api.post('gifts', formData)
    logger.log(res.data)
  }
}

export const sandboxGiftsService = new SandboxGiftsService()
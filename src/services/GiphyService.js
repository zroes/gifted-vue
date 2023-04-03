import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { giphyApi } from "./AxiosService.js"

class GiphyService {

  async searchGiphy(query) {
    console.log(query.query)
    const res = await giphyApi.get(`gifs/search?q=${query.query}`)
    logger.log(res.data.data)
    AppState.giphys = res.data
  }

}

export const giphyService = new GiphyService()
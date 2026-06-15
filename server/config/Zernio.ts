import {Zernio} from '@sernio/node'

const zernio = new Zernio({
  apiKey : process.env.ZERNIO_API_KEY || "",
  baseUrl: "https://zernio.com/api"
})

export default zernio
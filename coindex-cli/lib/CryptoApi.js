const axios = require('axios')
const colors = require('colors')

class CryptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey
    this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker'
  }

  async getPriceData(coinOption, currOption) {
    try {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currOption
      })
      const response = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${currOption}`)

      let output = ''

      response.data.forEach(coin => {
        output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue}\n`
      })

      return output
    } catch (error) {
      handleAPIError(error)
    }
  }
}

function handleAPIError(error) {
  if (error.response.status === 401) {
    throw new Error("Your API Key is invalid - Go to https://nomics.com")
  } else if (error.response.status === 404) {
    throw new Error("Your API is not responding")
  } else {
    throw new Error("Something is not working")
  }
}

module.exports = CryptoApi
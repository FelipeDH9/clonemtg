import axios from 'axios'

const doRequest = async ({ method = 'GET', body, headers, params, path }) => {
  try {
    const response = await axios.request({
      method,
      params,
      url: `https://api.magicthegathering.io/v1${path}`,
      data: body,
      headers
    })
    return { data: response.data, headers: response.headers, error: null }
  } catch (error) {
    console.log({ error })
    return { data: null, headers, error }
  }
}

export const getCards = async params => {
  const hasParams = params ? { ...params } : {}
  const cards = await doRequest({
    method: 'GET',
    path: '/cards',
    params: hasParams
  })
  return cards
}

export const getCard = async id => {
  const card = await doRequest({
    method: 'GET',
    path: `/cards/${id}`
  })
  return card
}

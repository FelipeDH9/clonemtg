import axios from 'axios'

const doRequest = async ({ method = 'GET', body, headers, params, path }) => {
  try {
    const { data } = await axios.request({
      method,
      params,
      url: `https://api.magicthegathering.io/v1${path}`,
      data: body,
      headers
    })
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

export const getCards = async params => {
  const hasParams = params ? { params } : {}
  const cards = await doRequest({
    method: 'GET',
    path: '/cards',
    ...hasParams
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

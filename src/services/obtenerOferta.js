export const obtenerOferta = async (offerId) => {
  const res = await fetch(`https://api.infojobs.net/api/7/offer/${offerId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${process.env}`
    }
  })

  return await res.json()
}

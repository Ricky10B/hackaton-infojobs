export const obtenerOferta = async (offerId) => {
  const res = await fetch(`api/${offerId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${import.meta.env.VITE_API_INFOJOBS}`
    }
  })

  return await res.json()
}

export const obtenerOfertas = async (queryParams) => {
  const params = new URLSearchParams(queryParams)
  const res = await fetch(`api/9/offer?${params}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${import.meta.env.VITE_API_INFOJOBS}`
    }
  })

  return await res.json()
}

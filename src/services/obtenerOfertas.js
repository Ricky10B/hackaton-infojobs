export const obtenerOfertas = async () => {
  const res = await fetch('api/api/9/offer', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${import.meta.env.VITE_API_INFOJOBS}`
    }
  })

  return await res.json()
}

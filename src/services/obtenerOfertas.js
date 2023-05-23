export const obtenerOfertas = async () => {
  const res = await fetch('/offers.json')
  // const res = await fetch('api/api/9/offer', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: 'Basic ZjMyODFkM2Y1YzE0NDkwNjhjYjg0OWJmNGRiZGE1Yjc6REFZbTcwRzRBMWpUWjBSYUxaTDBSTWNjWjhzM2NTekFZSGt4SnlyWFBLUEFVUkZrRXQ='
  //   }
  // })

  return await res.json()
  // .then(res => {
  //   console.log(res)
  //   return res.json()
  // })
  // .catch(err => {
  //   console.log(err)
  //   throw new Error('No se pudo obtener las ofertas')
  // })
}

export const obtenerLenguajeMasUsado = (languagesRepo) => {
  const listOfLanguages = languagesRepo
    // obtiene todos los lenaguages que usa el usuario
    // en sus repositorios de github
    ?.map(repo => repo.language)
    // filtra los lenguages por los que no sean vacíos
    ?.filter(repo => repo)
    // Cuenta la cantidad de de veces que aparece
    // cada lenguaje
    ?.reduce((cont, repo) => {
      if (cont[repo]) cont[repo]++
      else cont[repo] = 1
      return cont
    }, {})

  if (typeof listOfLanguages !== 'object') return []

  const lenguajes = Object.entries(listOfLanguages)

  const lenguajesMasUsados = lenguajes
    // Ordenamos los lenguajes de manera decendente
    // (del más usado al menos usado)
    .sort((a, b) => b[1] - a[1])
    // Tomamos los 2 lenguajes más usados
    .slice(0, 2)
    // Sacamos los nombres de los lenguages
    .map(language => language[0])

  return lenguajesMasUsados
}

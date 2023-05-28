/**
 * @param {number} currentPage Página actual en la que se encuentra el usuario
 * @param {number} totalPages Total de páginas
 * @param {number} limitePaginasMostradas Cantidad de cuadros de páginas que se le van a mostrar al usuario
 * @param {number} paginaMinima Donde inicia a pasar la páginación
 * @returns {Array} Un arreglo de las páginas que se le van a mostrar al usuario
 */
export function pagination (currentPage, totalPages, limitePaginasMostradas, paginaMinima) {
  const pagesPagination = Array.from({ length: totalPages }, (_, i) => i + 1)

  // Devolver las primeras páginas del total de páginas pasadas por parametro
  if (currentPage <= paginaMinima) {
    return pagesPagination.slice(0, limitePaginasMostradas)
  }

  // Devolver las últimas páginas del total de páginas pasadas por parametro
  if (totalPages - currentPage < limitePaginasMostradas - (paginaMinima - 1)) {
    return pagesPagination.slice(totalPages - limitePaginasMostradas)
  }

  // Devolver las páginas intermedias del total de páginas
  return pagesPagination.slice(
    currentPage - paginaMinima,
    currentPage + (limitePaginasMostradas - paginaMinima)
  )
}

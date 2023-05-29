export const getQueryParams = (filtersOffers) => {
  const stringQueryParams = Object.keys(filtersOffers)
    .reduce((totalString, offer) =>
      totalString + filtersOffers[offer].value + '&', ''
    )

  return stringQueryParams
}

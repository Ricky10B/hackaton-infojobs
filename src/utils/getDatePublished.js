export function getDatePublished (stringLastDate) {
  const now = new Date().getTime()
  const timeAgo = (now - new Date(stringLastDate)) / 1000

  const minutesAgo = Math.floor(timeAgo / 60 % 60)
  const hoursAgo = Math.floor(timeAgo / 3600 % 24)
  const daysAgo = Math.floor(timeAgo / (3600 * 24))

  let timePublished = '1m'
  if (minutesAgo > 0) timePublished = minutesAgo + 'm'
  if (hoursAgo > 0) timePublished = hoursAgo + 'h'
  if (daysAgo > 0) timePublished = daysAgo + 'd'

  return {
    timePublished
  }
}

export const obtenerRepoUsuarioGithub = async ({ usernameGithub }) => {
  const response = await fetch(`https://api.github.com/users/${usernameGithub}/repos?type=all&per_page=100&sort=created&direction=desc`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_GITHUB}`,
      'X-GitHub-Api-Version': '2022-11-28',
      Accept: 'application/vnd.github+json'
    }
  })

  const res = await response.json()

  // No se encontró el usuario de Github
  if (res.message || res.error) return false
  return res
}

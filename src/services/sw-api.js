const baseUrl = 'https://swapi.dev/api/'

export function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  return await res.json()
}
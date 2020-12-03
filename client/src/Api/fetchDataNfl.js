export default async function getNflInjuryData() {
  const result = await fetch('http://localhost:4000/api/nfl')
  const data = result.json()
  return data
}

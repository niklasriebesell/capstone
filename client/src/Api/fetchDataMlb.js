export default async function getMlbInjuryData() {
  const result = await fetch('http://localhost:4000/api/mlb')
  const data = result.json()
  return data
}

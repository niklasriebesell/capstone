export default async function getNflInjuryData() {
  const result = await fetch(
    'https://www.fantasyfootballnerd.com/service/injuries/json/tp3c7p5yrane'
  )
  const data = result.json()
  console.log(data.Injuries.ARI)
  return data.Injuries.ARI
}

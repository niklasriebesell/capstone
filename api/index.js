const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/api', (request, response) => response.json('alive and awake'))

app.get('/api/nfl', async (request, response) => {
  const injurydata = await getNflInjuryData()
  console.log(injurydata)
  response.json(injurydata)
})
app.get('/api/mlb', (request, response) => response.json('mlb'))
app.get('/api/nba', (request, response) => response.json('nba'))

async function getNflInjuryData() {
  try {
    const result = await axios.get(
      'https://www.fantasyfootballnerd.com/service/injuries/json/tp3c7p5yrane'
    )

    return result.data.Injuries.ARI
  } catch (error) {
    console.error(error.message)
  }
}

app.listen(4000, () => console.log('server listen on port 4000'))

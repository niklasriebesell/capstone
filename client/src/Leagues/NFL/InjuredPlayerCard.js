import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import getNflInjuryData from '../../Api/fetchDataNfl'

export default function InjuredPlayerCard() {
  const [players, setPlayers] = useState([])

  useEffect(
    () =>
      getNflInjuryData()
        .then((playersFromApi) => setPlayers(playersFromApi))
        .catch((error) => console.error(error)),
    []
  )

  /*Object.keys(players).map((key) => {
    const player = players[key];
  })*/

  return (
    <>
      {players &&
        players?.map((player, index) => (
          <Div key={index} style={{ color: 'white' }}>
            <p>Name:{player.playerName}</p>
            <p>Team:{player.team}</p>
            <p>Position:{player.position}</p>
            <p>Injury:{player.injury}</p>
            <p>Status:{player.gameStatus}</p>
            <p>lastupdated:{player.lastUpdate}</p>
          </Div>
        ))}
    </>
  )
}

const Div = styled.div`
  border: 1px;
  border-color: #ffffff;
  border-radius: 20px;
  border-style: solid;
  color: #ffffff;
  margin-top: 1em;
  margin-left: 0.2em;
  margin-right: 0.2em;
  text-align: center;
`

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

  return (
    <>
      {players &&
        players?.map((player, index) => (
          <div key={index} style={{ color: 'white' }}>
            <p>{player.playerName}</p>
            <p>{player.team}</p>
            <p>{player.position}</p>
            <p>{player.injury}</p>
            <p>{player.practiceStatus}</p>
            <p>{player.gameStatus}</p>
          </div>
        ))}
    </>
  )
}

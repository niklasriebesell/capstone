import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import getNflInjuryData from '../../Api/fetchDataNfl'

export default function InjuredPlayerCard() {
  const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState('')
  const [players, setPlayers] = useState([])

  useEffect(
    () =>
      getNflInjuryData()
        .then((teams) => {
          const teamKeys = Object.keys(teams)
          const players = []
          teamKeys.forEach((teamKey) =>
            teams[teamKey].forEach((player) => players.push(player))
          )
          setTeams(teamKeys)
          setPlayers(players)
        })
        .catch((error) => console.error(error)),
    []
  )

  return (
    <>
      {teams &&
        teams.map((team) => (
          <button
            type="button"
            key={team}
            onClick={() => setSelectedTeam(team)}
          >
            {team}
          </button>
        ))}
      {players &&
        players?.map(
          (player, index) =>
            selectedTeam &&
            selectedTeam.length > 0 &&
            player.team === selectedTeam && (
              <Div key={index} style={{ color: 'white' }}>
                <p>Name:{player.playerName}</p>
                <p>Team:{player.team}</p>
                <p>Position:{player.position}</p>
                <p>Injury:{player.injury}</p>
                <p>Status:{player.gameStatus}</p>
                <p>lastupdated:{player.lastUpdate}</p>
              </Div>
            )
        )}
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

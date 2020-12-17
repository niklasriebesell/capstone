import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import getNflInjuryData from '../Api/fetchDataNfl'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

export default function InjuredPlayerTeamPage() {
  const { preSelectedTeam } = useParams()
  const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState(
    preSelectedTeam ? preSelectedTeam : ''
  )
  const [players, setPlayers] = useState([])
  console.log(preSelectedTeam)

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
      <Header />
      {teams &&
        teams.map((team) => (
          <TeamsButton
            type="button"
            key={team}
            onClick={() => setSelectedTeam(team)}
          >
            {team}
          </TeamsButton>
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
      <Footer />
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

const TeamsButton = styled.button`
  padding: 0.55em;
  margin-left: 0.2em;
  margin-top: 0.5em;
  border-radius: 10px;
  background-color: #003a73;
  border-color: #ffffff;
  color: #ffffff;
`

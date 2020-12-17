import GlobalStyle from '../styles/globalstyle'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components/macro'
import Headertop from '../Components/Header'
import Footer from '../Components/Footer'
import seventysixers from '../Assets/Nba/seventysixers.svg'
import atlantahawks from '../Assets/Nba/atlantahawks.svg'
import bostonceltics from '../Assets/Nba/bostonceltics.svg'
import brooklynnets from '../Assets/Nba/brooklynnets.svg'
import charlottehornets from '../Assets/Nba/charlottehornets.svg'
import chicagobulls from '../Assets/Nba/chicagobulls.svg'
import clevelandcavaliers from '../Assets/Nba/clevelandcavaliers.svg'
import dallasmavericks from '../Assets/Nba/dallasmavericks.svg'
import denvernuggets from '../Assets/Nba/denvernuggets.svg'
import detroitpistons from '../Assets/Nba/detroitpistons.svg'
import houstonrockets from '../Assets/Nba/houstonrockets.svg'
import indianapacers from '../Assets/Nba/indianapacers.svg'
import laclippers from '../Assets/Nba/laclippers.svg'
import losangeleslakers from '../Assets/Nba/losangeleslakers.svg'
import memphisgrizzlies from '../Assets/Nba/memphisgrizzlies.svg'
import miamiheat from '../Assets/Nba/miamiheat.svg'
import milwaukeebucks from '../Assets/Nba/milwaukeebucks.svg'
import newyorkknicks from '../Assets/Nba/newyorkknicks.svg'
import okcthunder from '../Assets/Nba/okcthunder.svg'
import pelicans from '../Assets/Nba/pelicans.svg'
import phoenixsuns from '../Assets/Nba/phoenixsuns.svg'
import portlandtrailblazers from '../Assets/Nba/portlandtrailblazers.svg'
import sacramentokings from '../Assets/Nba/sacramentokings.svg'
import spurs from '../Assets/Nba/spurs.svg'
import timberwolves from '../Assets/Nba/timberwolves.svg'
import torontoraptors from '../Assets/Nba/torontoraptors.svg'
import utahjazz from '../Assets/Nba/utahjazz.svg'
import warriors from '../Assets/Nba/warriors.svg'
import washingtonwizards from '../Assets/Nba/washingtonwizards.svg'
import orlando from '../Assets/Nba/orlandomagic.svg'

export default function ChooseMlbTeam() {
  return (
    <>
      <GlobalStyle />
      <Headertop />

      <TeamLogos>
        <h3>Atlantic</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={bostonceltics}
              width="100"
              alt="buffalobills-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={brooklynnets}
              width="100"
              alt="miamidolphins-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={newyorkknicks}
              width="100"
              alt="newenglandpatriots-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={seventysixers}
              width="100"
              alt="newyorkjets-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={torontoraptors}
              width="100"
              alt="newyorkjets-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>Central</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={chicagobulls}
              width="100"
              alt="baltimoreravens-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={clevelandcavaliers}
              width="100"
              alt="cincinnatibengals-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={detroitpistons}
              width="100"
              alt="clevelandbrowns-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={indianapacers}
              width="100"
              alt="pittsburghsteelers-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={milwaukeebucks}
              width="100"
              alt="newyorkjets-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>Southeast</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={atlantahawks}
              width="100"
              alt="houstentexans-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={charlottehornets}
              width="100"
              alt="indianapoliscolts-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={miamiheat}
              width="100"
              alt="jacksonvillejaguars-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={orlando}
              width="100"
              alt="tennesseetitans-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={washingtonwizards}
              width="100"
              alt="newyorkjets-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <h2>Western Conference</h2>

      <TeamLogos>
        <h3>Northwest</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={denvernuggets}
              width="100"
              alt="denverbroncos-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={timberwolves}
              width="100"
              alt="kansascitychiefs-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={okcthunder}
              width="100"
              alt="oaklandraiders-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={portlandtrailblazers}
              width="100"
              alt="sandiegochargers-Icon"
            />
          </li>
          <li>
            <LazyLoadImage src={utahjazz} width="100" alt="newyorkjets-Icon" />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>Pacific</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={warriors}
              width="100"
              alt="fallascowboys-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={laclippers}
              width="100"
              alt="philadelphiaeagles-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={losangeleslakers}
              width="100"
              alt="washingtonredskins-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={phoenixsuns}
              width="100"
              alt="newyorkgiants-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={sacramentokings}
              width="100"
              alt="newyorkjets-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>Southwest</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={dallasmavericks}
              width="100"
              alt="chicagobears-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={houstonrockets}
              width="100"
              alt="detroitlions-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={memphisgrizzlies}
              width="100"
              alt="greenbaypackers-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={pelicans}
              width="100"
              alt="minnesotavikings-Icon"
            />
          </li>
          <li>
            <LazyLoadImage src={spurs} width="100" alt="newyorkjets-Icon" />
          </li>
        </ul>
      </TeamLogos>
      <Footer />
    </>
  )
}

const TeamLogos = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: white;
    margin-left: 1em;
    position: center;
  }

  h3 {
    color: white;
    margin-left: 35%;
  }

  ul {
    list-style-type: none;
    li {
      display: inline;
      padding: 1em 1em;
      width: 50%;
      background-color: none;
    }
  }
`

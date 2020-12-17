import GlobalStyle from '../styles/globalstyle'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components/macro'
import Headertop from '../Components/Header'
import Footer from '../Components/Footer'
import Sanfran from '../Assets/Nfl/sanfran.webp'
import Arizonacardinals from '../Assets/Nfl/arizonacardinals.webp'
import Atlantafalcons from '../Assets/Nfl/atlantafalcons.webp'
import Baltimoreravens from '../Assets/Nfl/baltimoreravens.webp'
import Buffalobills from '../Assets/Nfl/buffalobills.webp'
import Carolinapanthers from '../Assets/Nfl/carolinapanthers.webp'
import Chicagobears from '../Assets/Nfl/chicagobears.webp'
import Cincinnatibengals from '../Assets/Nfl/cincinnatibengals.webp'
import Clevelandbrowns from '../Assets/Nfl/clevelandbrowns.webp'
import Dallascowboys from '../Assets/Nfl/dallascowboys.webp'
import Denverbroncos from '../Assets/Nfl/denverbroncos.webp'
import Detroitlions from '../Assets/Nfl/detroitlions.webp'
import Greenbaypackers from '../Assets/Nfl/greenbaypackers.webp'
import Houstontexans from '../Assets/Nfl/houstontexans.webp'
import Indianapoliscolts from '../Assets/Nfl/indianapoliscolts.webp'
import Jacksonvillejaguars from '../Assets/Nfl/jacksonvillejaguars.webp'
import Kansascitychiefs from '../Assets/Nfl/kansascitychiefs.webp'
import Miamidolphins from '../Assets/Nfl/miamidolphins.webp'
import Minnesotavikings from '../Assets/Nfl/minnesotavikings.webp'
import Newenglandpatriots from '../Assets/Nfl/newenglandpatriots.webp'
import Neworleanssaints from '../Assets/Nfl/neworleanssaints.webp'
import Newyorkgiants from '../Assets/Nfl/newyorkgiants.webp'
import Newyorkjets from '../Assets/Nfl/newyorkjets.webp'
import Oaklandraiders from '../Assets/Nfl/oaklandraiders.webp'
import Philadelphiaeagles from '../Assets/Nfl/philadelphiaeagles.webp'
import Pittsburghsteelers from '../Assets/Nfl/pittsburghsteelers.webp'
import Sandieagochargers from '../Assets/Nfl/sandiegochargers.webp'
import Stlouisrams from '../Assets/Nfl/stlouisrams.webp'
import Tampabaybuccaneers from '../Assets/Nfl/tampabaybuccaneers.webp'
import Tennesseetitans from '../Assets/Nfl/tennesseetitans.webp'
import Washingtonredskins from '../Assets/Nfl/washingtonredskins.webp'
import Seattleseahawks from '../Assets/Nfl/seattleseahawks.webp'

export default function ChooseNflTeam() {
  return (
    <>
      <GlobalStyle />
      <Headertop />

      <h2>Choose your Team</h2>

      <TeamLogos>
        <h3>AFC East</h3>
        <ul>
          <li>
            <Link to="/team/BAL">
              <LazyLoadImage
                src={Buffalobills}
                width="100"
                alt="buffalobills-Icon"
              />
            </Link>
          </li>
          <li>
            <LazyLoadImage
              src={Miamidolphins}
              width="100"
              alt="miamidolphins-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Newenglandpatriots}
              width="100"
              alt="newenglandpatriots-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Newyorkjets}
              width="100"
              alt="newyorkjets-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>AFC North</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={Baltimoreravens}
              width="100"
              alt="baltimoreravens-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Cincinnatibengals}
              width="100"
              alt="cincinnatibengals-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Clevelandbrowns}
              width="100"
              alt="clevelandbrowns-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Pittsburghsteelers}
              width="100"
              alt="pittsburghsteelers-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>AFC South</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={Houstontexans}
              width="100"
              alt="houstentexans-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Indianapoliscolts}
              width="100"
              alt="indianapoliscolts-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Jacksonvillejaguars}
              width="100"
              alt="jacksonvillejaguars-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Tennesseetitans}
              width="100"
              alt="tennesseetitans-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>AFC West</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={Denverbroncos}
              width="100"
              alt="denverbroncos-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Kansascitychiefs}
              width="100"
              alt="kansascitychiefs-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Oaklandraiders}
              width="100"
              alt="oaklandraiders-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Sandieagochargers}
              width="100"
              alt="sandiegochargers-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>NFC East</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={Dallascowboys}
              width="100"
              alt="fallascowboys-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Philadelphiaeagles}
              width="100"
              alt="philadelphiaeagles-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Washingtonredskins}
              width="100"
              alt="washingtonredskins-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Newyorkgiants}
              width="100"
              alt="newyorkgiants-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>NFC North</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={Chicagobears}
              width="100"
              alt="chicagobears-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Detroitlions}
              width="100"
              alt="detroitlions-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Greenbaypackers}
              width="100"
              alt="greenbaypackers-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Minnesotavikings}
              width="100"
              alt="minnesotavikings-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>NFC South</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={Atlantafalcons}
              width="100"
              alt="atlantafalcons-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Carolinapanthers}
              width="100"
              alt="carolinapanthers-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Neworleanssaints}
              width="100"
              alt="neworleanssaints-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={Tampabaybuccaneers}
              width="100"
              alt="tampabaybuccaneers-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>NFC West</h3>
        <ul>
          <nav>
            <Link to="injuredPlayerCard">
              <LazyLoadImage
                src={Arizonacardinals}
                width="100"
                alt="arizonacardinals-Icon"
              />
            </Link>
          </nav>
          <li>
            <LazyLoadImage
              src={Stlouisrams}
              width="100"
              alt="stlouisrams-Icon"
            />
          </li>
          <li>
            <LazyLoadImage src={Sanfran} width="100" alt="sanfran-Icon" />
          </li>
          <li>
            <LazyLoadImage
              src={Seattleseahawks}
              width="100"
              alt="seattleseahawks-Icon"
            />
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
  margin-bottom: 3em;

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
    }
  }
`

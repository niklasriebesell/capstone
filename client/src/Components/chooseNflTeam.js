import GlobalStyle from '../styles/globalstyle'
import styled from 'styled-components/macro'
import Headertop from './header'
import Footerdown from './footer'
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

      <DivisonAFCEast>
        <h3>AFC East</h3>
        <ul>
          <li>
            <img src={Buffalobills} width="50" alt="buffalobills-Icon" />
          </li>
          <li>
            <img src={Miamidolphins} width="50" alt="miamidolphins-Icon" />
          </li>
          <li>
            <img
              src={Newenglandpatriots}
              width="50"
              alt="newenglandpatriots-Icon"
            />
          </li>
          <li>
            <img src={Newyorkjets} width="50" alt="newyorkjets-Icon" />
          </li>
        </ul>
      </DivisonAFCEast>

      <div>
        <h3>AFC North</h3>
        <ul>
          <li>
            <img src={Baltimoreravens} width="50" alt="baltimoreravens-Icon" />
          </li>
          <li>
            <img
              src={Cincinnatibengals}
              width="50"
              alt="cincinnatibengals-Icon"
            />
          </li>
          <li>
            <img src={Clevelandbrowns} width="50" alt="clevelandbrowns-Icon" />
          </li>
          <li>
            <img
              src={Pittsburghsteelers}
              width="50"
              alt="pittsburghsteelers-Icon"
            />
          </li>
        </ul>
      </div>

      <div>
        <h3>AFC South</h3>
        <ul>
          <li>
            <img src={Houstontexans} width="50" alt="houstentexans-Icon" />
          </li>
          <li>
            <img
              src={Indianapoliscolts}
              width="50"
              alt="indianapoliscolts-Icon"
            />
          </li>
          <li>
            <img
              src={Jacksonvillejaguars}
              width="50"
              alt="jacksonvillejaguars-Icon"
            />
          </li>
          <li>
            <img src={Tennesseetitans} width="50" alt="tennesseetitans-Icon" />
          </li>
        </ul>
      </div>

      <div>
        <h3>AFC West</h3>
        <ul>
          <li>
            <img src={Denverbroncos} width="50" alt="denverbroncos-Icon" />
          </li>
          <li>
            <img
              src={Kansascitychiefs}
              width="50"
              alt="kansascitychiefs-Icon"
            />
          </li>
          <li>
            <img src={Oaklandraiders} width="50" alt="oaklandraiders-Icon" />
          </li>
          <li>
            <img
              src={Sandieagochargers}
              width="50"
              alt="sandiegochargers-Icon"
            />
          </li>
        </ul>
      </div>

      <div>
        <h3>NFC East</h3>
        <ul>
          <li>
            <img src={Dallascowboys} width="50" alt="fallascowboys-Icon" />
          </li>
          <li>
            <img
              src={Philadelphiaeagles}
              width="50"
              alt="philadelphiaeagles-Icon"
            />
          </li>
          <li>
            <img
              src={Washingtonredskins}
              width="50"
              alt="washingtonredskins-Icon"
            />
          </li>
          <li>
            <img src={Newyorkgiants} width="50" alt="newyorkgiants-Icon" />
          </li>
        </ul>
      </div>

      <div>
        <h3>NFC North</h3>
        <ul>
          <li>
            <img src={Chicagobears} width="50" alt="chicagobears-Icon" />
          </li>
          <li>
            <img src={Detroitlions} width="50" alt="detroitlions-Icon" />
          </li>
          <li>
            <img src={Greenbaypackers} width="50" alt="greenbaypackers-Icon" />
          </li>
          <li>
            <img
              src={Minnesotavikings}
              width="50"
              alt="minnesotavikings-Icon"
            />
          </li>
        </ul>
      </div>

      <div>
        <h3>NFC South</h3>
        <ul>
          <li>
            <img src={Atlantafalcons} width="50" alt="atlantafalcons-Icon" />
          </li>
          <li>
            <img
              src={Carolinapanthers}
              width="50"
              alt="carolinapanthers-Icon"
            />
          </li>
          <li>
            <img
              src={Neworleanssaints}
              width="50"
              alt="neworleanssaints-Icon"
            />
          </li>
          <li>
            <img
              src={Tampabaybuccaneers}
              width="50"
              alt="tampabaybuccaneers-Icon"
            />
          </li>
        </ul>
      </div>

      <div>
        <h3>NFC West</h3>
        <ul>
          <li>
            <img
              src={Arizonacardinals}
              width="50"
              alt="arizonacardinals-Icon"
            />
          </li>
          <li>
            <img src={Stlouisrams} width="50" alt="stlouisrams-Icon" />
          </li>
          <li>
            <img src={Sanfran} width="50" alt="sanfran-Icon" />
          </li>
          <li>
            <img src={Seattleseahawks} width="50" alt="seattleseahawks-Icon" />
          </li>
        </ul>
      </div>

      <Footerdown />
    </>
  )
}

const DivisonAFCEast = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    list-style-type: none;
  }
`

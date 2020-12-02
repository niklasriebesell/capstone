//import GlobalStyle from './styles/globalstylemacro'
import Headertop from './Components/header'
import Footerdown from './Components/footer'
import sanfran from '../Components/sanfran.webp'
import arizonacardinels from '../Components/arizonacardinals.webp'
import atlantafalcons from '../Components/atlantafalcons.webp'
import baltimoreravens from '../Components/baltimoreravens.webp'
import buffalobills from '../Components/buffalobills.webp'
import carolinapanthers from '../Components/carolinapanthers.webp'
import chicagobears from '../Components/chicagobears.webp'
import cincinnatibengals from '../Components/cincinnatibengals.webp'
import clevelandbrowns from '../Components/clevelandbrowns.webp'
import dallascowboys from '../Components/dallascowboys.webp'
import denverbroncos from '../Components/denverbroncos.webp'
import detroitlions from '../Components/detroitlions.webp'
import greenbaypackers from '../Components/greenbaypackers.webp'
import houstontexans from '../Components/houstontexans.webp'
import indianapoliscolts from '../Components/indianapoliscolts.webp'
import jacksonvillejaguars from '../Components/jacksonvillejaguars.webp'
import kansascitychiefs from '../Components/kansascitychiefs.webp'
import miamidolphins from '../Components/miamidolphins.webp'
import minnesotavikings from '../Components/minnesotavikings.webp'
import newenglandpatriots from '../Components/newenglandpatriots.webp'
import neworleanssaints from '../Components/neworleanssaints.webp'
import newyorkgiants from '../Components/newyorkgiants.webp'
import newyorkjets from '../Components/newyorkjets.webp'
import oaklandraiders from '../Components/oaklandraiders.webp'
import philadelphiaeagles from '../Components/philadelphiaeagles.webp'
import pittsburghsteelers from '../Components/pittsburghsteelers.webp'
import sandieagochargers from '../Components/sandieagochargers.webp'
import seattleseahawks from '../Components/seattleseahawks.webp'
import stlouisrams from '../Components/stlouisrams.webp'
import tampabaybuccaneers from '../Components/tampabaybuccaneers.webp'
import tennesseetitans from '../Components/tennesseetitans.webp'
import washingtonredskins from '../Components/washingtonredskins'

export default function chooseNflTeam() {
  return (
    <>
      <Headertop />

      <h2>Choose your Team</h2>

      <div>
        <h3>AFC East</h3>
        <ul>
          <li>
            <img src={buffalobills} width="50" alt="buffalobiils-Icon" />
          </li>
          <li>
            <img src={miamidolphins} width="50" alt="miamidolphins-Icon" />
          </li>
          <li>
            <img
              src={newenglandpatriots}
              width="50"
              alt="newenglandpatriots-Icon"
            />
          </li>
          <li>
            <img src={newyorkjets} width="50" alt="newyorkjets-Icon" />
          </li>
        </ul>
      </div>

      <div>
        <h3>AFC North</h3>
        <ul>
          <li>
            <img src={baltimoreravens} width="50" alt="baltimoreravens-Icon" />
          </li>
          <li>
            <img
              src={cincinnatibengals}
              width="50"
              alt="cincinnatibengals-Icon"
            />
          </li>
          <li>
            <img src={clevelandbrowns} width="50" alt="clevelandbrowns-Icon" />
          </li>
          <li>
            <img
              src={pittsburghsteelers}
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
            <img src={houstontexans} width="50" alt="houstentexans-Icon" />
          </li>
          <li>
            <img
              src={indianapoliscolts}
              width="50"
              alt="indianapoliscolts-Icon"
            />
          </li>
          <li>
            <img
              src={jacksonvillejaguars}
              width="50"
              alt="jacksonvillejaguars-Icon"
            />
          </li>
          <li>
            <img src={tennesseetitans} width="50" alt="tennesseetitans-Icon" />
          </li>
        </ul>
      </div>

      <div>
        <h3>AFC West</h3>
        <ul>
          <li>
            <img src={denverbroncos} width="50" alt="denverbroncos-Icon" />
          </li>
          <li>
            <img
              src={kansascitychiefs}
              width="50"
              alt="kansascitychiefs-Icon"
            />
          </li>
          <li>
            <img src={oaklandraiders} width="50" alt="oaklandraiders-Icon" />
          </li>
          <li>
            <img
              src={sandieagochargers}
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
            <img src={dallascowboys} width="50" alt="fallascowboys-Icon" />
          </li>
          <li>
            <img
              src={philadelphiaeagles}
              width="50"
              alt="philadelphiaeagles-Icon"
            />
          </li>
          <li>
            <img
              src={washingtonredskins}
              width="50"
              alt="washingtonredskins-Icon"
            />
          </li>
          <li>
            <img src={newyorkgiants} width="50" alt="newyorkgiants-Icon" />
          </li>
        </ul>
      </div>

      <div>
        <h3>NFC North</h3>
        <ul>
          <li>
            <img src={chicagobears} width="50" alt="chicagobears-Icon" />
          </li>
          <li>
            <img src={detroitlions} width="50" alt="detroitlions-Icon" />
          </li>
          <li>
            <img src={greenbaypackers} width="50" alt="greenbaypackers-Icon" />
          </li>
          <li>
            <img
              src={minnesotavikings}
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
            <img src={atlantafalcons} width="50" alt="atlantafalcons-Icon" />
          </li>
          <li>
            <img
              src={carolinapanthers}
              width="50"
              alt="carolinapanthers-Icon"
            />
          </li>
          <li>
            <img
              src={neworleanssaints}
              width="50"
              alt="neworleanssaints-Icon"
            />
          </li>
          <li>
            <img
              src={tampabaybuccaneers}
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
              src={arizonacardinels}
              width="50"
              alt="arizonacardinals-Icon"
            />
          </li>
          <li>
            <img src={stlouisrams} width="50" alt="stlouisrams-Icon" />
          </li>
          <li>
            <img src={sanfran} width="50" alt="sanfran-Icon" />
          </li>
          <li>
            <img src={seattleseahawks} width="50" alt="seattleseahawks-Icon" />
          </li>
        </ul>
      </div>
      <Footerdown />
    </>
  )
}

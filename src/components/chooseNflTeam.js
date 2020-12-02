import GlobalStyle from './styles/globalstyle'
import Headertop from './Components/header'
import Footerdown from './Components/footer'
import SanFran from '../Components/49ers.webp'
import ArizonaCardinels from '../Components/Arizona-Cardinals.webp'
import atlantafalcons from '../Components/atlanta-falcons.webp'
import baltimoreravens from '../Components/baltimore-ravens.webp'
import buffalobills from '../Components/buffalo-bills.webp'
import carolinapanthers from '../Components/carolina-panthers.webp'
import chicagobears from '../Components/chicago-bears.webp'
import cincinnatibengals from '../Components/cincinnati-bengals.webp'
import clevelandbrowns from '../Components/cleveland-browns.webp'
import dallascowboys from '../Components/dallas-cowboys.webp'
import denverbroncos from '../Components/denver-broncos.webp'
import detroitlions from '../Components/detroit-lions.webp'
import greenbaypackers from '../Components/green-bay-packers.webp'
import houstontexans from '../Components/houston-texans.webp'
import indianapoliscolts from '../Components/indianapolis-colts.webp'
import jacksonvillejaguars from '../Components/jacksonville-jaguars.webp'
import kansascitychiefs from '../Components/kansas-city-chiefs.webp'
import miamidolphins from '../Components/miami-dolphins.webp'
import minnesotavikings from '../Components/minnesota-vikings.webp'
import newenglandpatriots from '../Components/new-england-patriots.webp'
import neworleanssaints from '../Components/new-orleans-saints.webp'
import newyorkgiants from '../Components/new-york-giants.webp'
import newyorkjets from '../Components/new-york-jets.webp'
import oaklandraiders from '../Components/oakland-raiders.webp'
import philadelphiaeagles from '../Components/philadelphia-eagles.webp'
import pittsburghsteelers from '../Components/pittsburgh-steelers.webp'
import sandieagochargers from '../Components/san-dieago-chargers.webp'
import seattleseahawks from '../Components/seattle-seahawks.webp'
import stlouisrams from '../Components/st-louis-rams.webp'
import tampabaybuccaneers from '../Components/tampa-bay-buccaneers.webp'
import tennesseetitans from '../Components/tennessee-titans.webp'
import washingtonredskins from '../Components/washington-redskins.webp'

export default function chooseNflTeam() {
  return (
    <>
      <h2>Choose your Team</h2>

      <div>
        <h3>AFC East</h3>
        <ul>
          <li>
            <img src={buffalobills} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={miamidolphins} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={newenglandpatriots} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={newyorkjets} width="50" alt="NFL-Icon" />
          </li>
        </ul>
      </div>

      <div>
        <h3>AFC North</h3>
        <ul>
          <li>
            <img src={baltimoreravens} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={cincinnatibengals} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={clevelandbrowns} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={pittsburghsteelers} width="50" alt="NFL-Icon" />
          </li>
        </ul>
      </div>

      <div>
        <h3>AFC South</h3>
        <ul>
          <li>
            <img src={houstontexans} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={indianapoliscolts} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={jacksonvillejaguars} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={tennesseetitans} width="50" alt="NFL-Icon" />
          </li>
        </ul>
      </div>

      <div>
        <h3>AFC West</h3>
        <ul>
          <li>
            <img src={denverbroncos} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={kansascitychiefs} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={oaklandraiders} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={sandieagochargers} width="50" alt="NFL-Icon" />
          </li>
        </ul>
      </div>

      <div>
        <h3>NFC East</h3>
        <ul>
          <li>
            <img src={dallascowboys} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={philadelphiaeagles} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={washingtonredskins} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={newyorkgiants} width="50" alt="NFL-Icon" />
          </li>
        </ul>
      </div>

      <div>
        <h3>NFC North</h3>
        <ul>
          <li>
            <img src={chicagobears} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={detroitlions} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={greenbaypackers} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={minnesotavikings} width="50" alt="NFL-Icon" />
          </li>
        </ul>
      </div>

      <div>
        <h3>NFC South</h3>
        <ul>
          <li>
            <img src={atlantafalcons} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={carolinapanthers} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={neworleanssaints} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={tampabaybuccaneers} width="50" alt="NFL-Icon" />
          </li>
        </ul>
      </div>

      <div>
        <h3>NFC West</h3>
        <ul>
          <li>
            <img src={ArizonaCardinels} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={stlouisrams} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={SanFran} width="50" alt="NFL-Icon" />
          </li>
          <li>
            <img src={seattleseahawks} width="50" alt="NFL-Icon" />
          </li>
        </ul>
      </div>
    </>
  )
}

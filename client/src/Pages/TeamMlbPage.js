import GlobalStyle from '../styles/globalstyle'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components/macro'
import Headertop from '../Components/Header'
import Footer from '../Components/Footer'
import arizonadiamondbacks from '../Assets/Mlb/arizonadiamondbacks.svg'
import atlantabraves from '../Assets/Mlb/atlantabraves.svg'
import baltimoreorioles from '../Assets/Mlb/baltimoreorioles.svg'
import bostenredsox from '../Assets/Mlb/bostonredsox.svg'
import chicagocubs from '../Assets/Mlb/chicagocubs.svg'
import chicagowhitesox from '../Assets/Mlb/chicagowhitesox.svg'
import cincinnatireds from '../Assets/Mlb/cincinnatireds.svg'
import clevelandindians from '../Assets/Mlb/clevelandindians.svg'
import coloradorockies from '../Assets/Mlb/coloradorockies.svg'
import detroittigers from '../Assets/Mlb/detroittigers.svg'
import houstonastros from '../Assets/Mlb/houstonastros.svg'
import kansascityroyals from '../Assets/Mlb/kansascityroyals.svg'
import laangels from '../Assets/Mlb/laangels.svg'
import losangelsdodgers from '../Assets/Mlb/losangelesdodgers.svg'
import miamimarlins from '../Assets/Mlb/miamimarlins.svg'
import milwaukeebrewers from '../Assets/Mlb/milwaukeebrewers.svg'
import minnesitatwins from '../Assets/Mlb/minnesotatwins.svg'
import newyorkmets from '../Assets/Mlb/newyorkmets.svg'
import newyorkyankees from '../Assets/Mlb/newyorkyankees.svg'
import oaklandathletics from '../Assets/Mlb/oaklandathletics.svg'
import philadelphiaphillies from '../Assets/Mlb/philadelphiaphillies.svg'
import pittsburghpirates from '../Assets/Mlb/pittsburghpirates.svg'
import sandiegopadres from '../Assets/Mlb/sandiegopadres.svg'
import seattlemariners from '../Assets/Mlb/seattlemariners.svg'
import stlouiscardinals from '../Assets/Mlb/stlouiscardinals.svg'
import tampabayrays from '../Assets/Mlb/tampabayrays.svg'
import texasrangers from '../Assets/Mlb/texasrangers.svg'
import torontobluejays from '../Assets/Mlb/torontobluejays.svg'
import washingtonnationals from '../Assets/Mlb/washingtonnationals.svg'
import sanfrangiants from '../Assets/Mlb/sanfranciscogiants.svg'

export default function ChooseMlbTeam() {
  return (
    <>
      <GlobalStyle />
      <Headertop />

      <h2>Choose your Team</h2>

      <TeamLogos>
        <h3>East</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={baltimoreorioles}
              width="100"
              alt="buffalobills-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={bostenredsox}
              width="100"
              alt="miamidolphins-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={newyorkyankees}
              width="100"
              alt="newenglandpatriots-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={tampabayrays}
              width="100"
              alt="newyorkjets-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={torontobluejays}
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
              src={chicagowhitesox}
              width="100"
              alt="baltimoreravens-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={clevelandindians}
              width="100"
              alt="cincinnatibengals-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={detroittigers}
              width="100"
              alt="clevelandbrowns-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={kansascityroyals}
              width="100"
              alt="pittsburghsteelers-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={minnesitatwins}
              width="100"
              alt="newyorkjets-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>West</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={houstonastros}
              width="100"
              alt="houstentexans-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={laangels}
              width="100"
              alt="indianapoliscolts-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={oaklandathletics}
              width="100"
              alt="jacksonvillejaguars-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={seattlemariners}
              width="100"
              alt="tennesseetitans-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={texasrangers}
              width="100"
              alt="newyorkjets-Icon"
            />
          </li>
        </ul>
      </TeamLogos>
      <h2>National League</h2>
      <TeamLogos>
        <h3>East</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={atlantabraves}
              width="100"
              alt="denverbroncos-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={miamimarlins}
              width="100"
              alt="kansascitychiefs-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={newyorkmets}
              width="100"
              alt="oaklandraiders-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={philadelphiaphillies}
              width="100"
              alt="sandiegochargers-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={washingtonnationals}
              width="100"
              alt="sandiegochargers-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>Central</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={chicagocubs}
              width="100"
              alt="fallascowboys-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={cincinnatireds}
              width="100"
              alt="philadelphiaeagles-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={milwaukeebrewers}
              width="100"
              alt="washingtonredskins-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={pittsburghpirates}
              width="100"
              alt="newyorkgiants-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={stlouiscardinals}
              width="100"
              alt="sandiegochargers-Icon"
            />
          </li>
        </ul>
      </TeamLogos>

      <TeamLogos>
        <h3>West</h3>
        <ul>
          <li>
            <LazyLoadImage
              src={arizonadiamondbacks}
              width="100"
              alt="chicagobears-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={coloradorockies}
              width="100"
              alt="detroitlions-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={losangelsdodgers}
              width="100"
              alt="greenbaypackers-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={sandiegopadres}
              width="100"
              alt="minnesotavikings-Icon"
            />
          </li>
          <li>
            <LazyLoadImage
              src={sanfrangiants}
              width="100"
              alt="sandiegochargers-Icon"
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

  h3 {
    color: white;
    margin-left: 1em;
  }

  h2 {
    color: white;
    margin-left: 1em;
    position: center;
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

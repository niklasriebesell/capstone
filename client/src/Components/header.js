import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import NFL from '../Assets/NFL.webp'
import MLB from '../Assets/MLB.webp'
import NBA from '../Assets/NBA.webp'
//import ChooseNflTeam from './chooseNflTeam'
//import Brightness4Icon from '@material-ui/icons/Brightness4'
//import Brightness7Icon from '@material-ui/icons/Brightness7'

function Headertop() {
  return (
    <Header>
      <h1>Injury-Report</h1>
      {/*<button>
        <img src={Brightness4Icon} width="50" alt="Darkmode-Icon" />
      </button>*/}

      <ul>
        <Link to="/chooseNflTeam">
          <button>
            <img src={NFL} width="20" alt="NFL-Icon" />
          </button>
        </Link>
        <Link to="chooseMlbTeam">
          <button>
            <img src={MLB} width="40" alt="MLB-Icon" />
          </button>
        </Link>
        <Link to="chooseNbaTeam">
          <button>
            <img src={NBA} width="20" alt="NBA-Icon" />
          </button>
        </Link>
      </ul>
    </Header>
  )
}

const Header = styled.header`
  background-color: #da2127;
  border-radius: 0px 0px 25px 25px;
  display: flex;
  flex-direction: column;
  height: 7em;
  max-width: auto;
  padding: 1em;
  position: relative;
  position: top;

  h1 {
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 2px;
    text-align: center;
  }
  ul {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  button {
    background-color: #da2127;
    border-radius: 20px;
    border-style: none;
    color: #da2127;
    -webkit-box-shadow: 10px 15px 30px 0px rgba(0, 58, 115, 0.9);
    -moz-box-shadow: 10px 15px 30px 0px rgba(0, 58, 115, 0.9);
    box-shadow: 10px 15px 30px 0px rgba(0, 58, 115, 0.9);
  }
`

/*const Ul = styled.ul`
  display: flex;
  position: fixed;
  justify-content: space-between;
  list-style-type: none;*/

export default Headertop

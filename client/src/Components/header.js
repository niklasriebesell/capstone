import styled from 'styled-components/macro'
import NFL from '../Assets/NFL.webp'
import MLB from '../Assets/MLB.webp'
import NBA from '../Assets/NBA.webp'
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
        <li>
          <button>
            <img src={NFL} width="30" alt="NFL-Icon" />
          </button>
        </li>
        <li>
          <button>
            <img src={MLB} width="60" alt="MLB-Icon" />
          </button>
        </li>
        <li>
          <button>
            <img src={NBA} width="30" alt="NBA-Icon" />
          </button>
        </li>
      </ul>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #da2127;
  position: relative;
  max-width: auto;
  margin-left: 0.2em;
  margin-right: 0.2em;

  position: top;
  padding: 1em;
  border-radius: 25px;
  height: 8em;
  h1 {
    color: #ffffff;
    text-align: center;
    margin-top: 0;
    margin-bottom: 2px;
  }
  ul {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  button {
    color: #da2127;
    background-color: #da2127;
    border-radius: 20px;
    border-style: none;
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

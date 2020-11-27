import styled from 'styled-components/macro'
import NFL from '../Assets/NFL.png'
import MLB from '../Assets/MLB.png'
import NBA from '../Assets/NBA.png'
import Brightness4Icon from '@material-ui/icons/Brightness4'
//import Brightness7Icon from '@material-ui/icons/Brightness7'

function Headertop() {
  return (
    <Header>
      <h1>Injury-Report</h1>
      <button src={Brightness4Icon} width="50" alt="Darkmode-Icon"></button>
      <button src={NFL} width="50" alt="NFL-Icon"></button>
      <button src={MLB} width="50" alt="MLB-Icon"></button>
      <button src={NBA} width="50" alt="NBA-Icon"></button>

      <Ul>
        <li>
          <img src={NFL} width="50" alt="NFL-Icon" />
          NFL
        </li>
        <li>
          <img src={MLB} width="60" alt="MLB-Icon" />
          MLB
        </li>
        <li>
          <img src={NBA} width="30" alt="NBA-Icon" />
          NBA
        </li>
      </Ul>
    </Header>
  )
}

const Header = styled.header`
  background-color: #da2127;
  position: relative;
  max-width: auto;
  margin: 0px;

  position: top;
  padding: 1em;
  border-radius: 25px;
  height: 5em;
  h1 {
    color: #ffffff;
    position: center;
    margin-top: 0;
    margin-bottom: 2px;
  }
`

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`

export default Headertop

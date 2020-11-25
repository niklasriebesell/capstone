import styled from 'styled-components'
import NFL from '../Assets/NFL.png'
import MLB from '../Assets/MLB.png'
import NBA from '../Assets/NBA.png'

function Headertop() {
  return (
    <Header>
      <H1>Injury-Report</H1>
      <button>Darkmode</button>
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
  border-radius: 50;
  margin: 0px;
  position: top;
`

const H1 = styled.h1`
  color: #ffffff;
  position: center;
`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`

export default Headertop

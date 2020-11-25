import styled from 'styled-components'
import NFL from '../Assets/NFL.png'
import NBA from '../Assets/NBA.png'
import MLB from '../Assets/MLB.png'

function Header() {
  return (
    <header>
      <h1>Injury-Report</h1>
      <ul>
        <li>
          <img src={NFL} width="50" alt="NFL-Icon" />
          NFL
        </li>
        <li>
          <img src={MLB} width="50" alt="MLB-Icon" />
          MLB
        </li>
        <li>
          <img src={NBA} width="50" alt="NBA-Icon" />
          NBA
        </li>
      </ul>
    </header>
  )
}

export default Header

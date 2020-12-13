import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './styles/globalstyle'
import Landingpage from './Pages/HomePage'
import ChooseNflTeam from './Pages/TeamNflPage'
import ChooseMlbTeam from './Pages/TeamMlbPage'
import ChooseNbaTeam from './Pages/TeamNbaPage'
import InjuredPlayerTeamPage from './Pages/InjuredPlayerTeamPage'

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Landingpage />
        <Switch>
          <Route path="/team" component={InjuredPlayerTeamPage} />
          <Route path="/chooseNflTeam" component={ChooseNflTeam} />
          <Route path="/chooseMlbTeam" component={ChooseMlbTeam} />
          <Route path="/chooseNbaTeam" component={ChooseNbaTeam} />
          <Route path="/home" component={Landingpage} />
          <Landingpage />
          <ChooseNflTeam />
          <ChooseMlbTeam />
          <ChooseNbaTeam />
          <InjuredPlayerTeamPage />
        </Switch>
      </div>
    </Router>
  )
}

export default App

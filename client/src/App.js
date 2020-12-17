import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './styles/globalstyle'
import Homepage from './Pages/HomePage'
import ChooseNflTeam from './Pages/TeamNflPage'
import ChooseMlbTeam from './Pages/TeamMlbPage'
import ChooseNbaTeam from './Pages/TeamNbaPage'
import InjuredPlayerTeamPage from './Pages/InjuredPlayerTeamPage'
import InjuryList from './Pages/InjuryList'
function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/team" component={InjuredPlayerTeamPage} />
          <Route
            path="/team/:preSelectedTeam"
            component={InjuredPlayerTeamPage}
          />
          <Route path="/chooseNflTeam" component={ChooseNflTeam} />
          <Route path="/chooseMlbTeam" component={ChooseMlbTeam} />
          <Route path="/chooseNbaTeam" component={ChooseNbaTeam} />
          <Route path="/injuryList" component={InjuryList} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

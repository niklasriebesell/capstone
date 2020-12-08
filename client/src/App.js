/** @format */
import GlobalStyle from './styles/globalstyle'
//import Headertop from './Components/header'
import Landingpage from './Components/landingpage'
//import Footerdown from './Components/footer'
//import ArticleCard from './Components/articleCard'
import ChooseNflTeam from './Components/chooseNflTeam'
import ChooseMlbTeam from './Components/chooseMlbTeam'
import ChooseNbaTeam from './Components/chooseNbaTeam'

import InjuredPlayerCard from './Leagues/NFL/InjuredPlayerCard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/chooseNflTeam" component={ChooseNflTeam} />
          <Route path="/chooseMlbTeam" component={ChooseMlbTeam} />
          <Route path="/chooseMlbTeam" component={ChooseNbaTeam} />
          <Route path="home" component={Landingpage} />
          <Landingpage />
          <ChooseNflTeam />
          <ChooseMlbTeam />
          <ChooseNbaTeam />
          <InjuredPlayerCard />
          {/*<ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />*/}
        </Switch>
      </Router>
    </div>
  )
}

export default App

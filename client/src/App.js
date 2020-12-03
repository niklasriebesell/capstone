/** @format */
import GlobalStyle from './styles/globalstyle'
import Headertop from './Components/header'
import Footerdown from './Components/footer'
import ArticleCard from './Components/articleCard'
import NimmNflTeam from './Components/chooseNflTeam'
import InjuredPlayerCard from './Leagues/NFL/InjuredPlayerCard'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Headertop />
      <InjuredPlayerCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <NimmNflTeam />
      <Footerdown />
    </div>
  )
}

export default App

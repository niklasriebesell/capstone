/** @format */
import GlobalStyle from './styles/globalstyle'
import Headertop from './Components/header'
import Footerdown from './Components/footer'
import ArticleCard from './Components/articleCard'
import InjuredNFL from '../src/Leagues/NFL/injuredPlayerCard'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Headertop />
      <ArticleCard />
      <InjuredNFL />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <Footerdown />
    </div>
  )
}

export default App

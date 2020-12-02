/** @format */
import GlobalStyle from './styles/globalstyle'
import Headertop from './Components/header'
import Footerdown from './Components/footer'
import ArticleCard from './Components/articleCard'
import chooseNflTeam from './Components/chooseNflTeam'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Headertop />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <Footerdown />
    </div>
  )
}

export default App

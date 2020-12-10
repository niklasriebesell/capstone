import GlobalStyle from '../styles/globalstyle'
import Headertop from '../Components/Header'
import ArticleCard from '../Components/articleCard'
import Footer from '../Components/Footer'

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Headertop />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <Footer />
    </>
  )
}

import GlobalStyle from '../styles/globalstyle'
import Header from '../Components/Header'
import ArticleCard from '../Components/articleCard'
import Footer from '../Components/Footer'

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <Footer />
    </>
  )
}

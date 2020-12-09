import GlobalStyle from '../styles/globalstyle'
//import styled from 'styled-components/macro'
import Headertop from './header'
import ArticleCard from './articleCard'
import Footerdown from './footer'

export default function landingpage() {
  return (
    <>
      <GlobalStyle />
      <Headertop />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <Footerdown />
    </>
  )
}

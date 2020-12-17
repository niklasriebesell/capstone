import styled from 'styled-components/macro'

function ArticleCard() {
  return (
    <Article>
      <h2>News des Tages</h2>

      <p>Name: Corbin Martin</p>
      <p>Team: ARI</p>
      <p>Position: SP</p>
      <p>Injury: Elbow</p>
      <p>Status: Out for the season</p>
    </Article>
  )
}

const Article = styled.article`
  border: 1px;
  border-color: #ffffff;
  border-radius: 20px;
  border-style: solid;
  color: #ffffff;
  margin-top: 1em;
  margin-left: 0.2em;
  margin-right: 0.2em;

  text-align: center;

  h2 {
    text-align: center;
  }
`

export default ArticleCard

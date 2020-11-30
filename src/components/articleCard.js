import styled from 'styled-components/macro'

function ArticleCard() {
  return (
    <Article>
      <h2>News des Tages</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        cupiditate minus illo totam reprehenderit velit hic in qui voluptates
        vel at mollitia voluptatum, dolor amet ipsam. Praesentium id distinctio
        ipsam!
      </p>
    </Article>
  )
}

const Article = styled.article`
  border-color: #ffffff;
  margin-top: 1em;
  margin-left: 0.2em;
  margin-right: 0.2em;
  border: 1px;
  border-radius: 20px;
  color: #ffffff;
  border-style: solid;
  text-align: center;

  h2 {
    text-align: center;
  }
`

export default ArticleCard

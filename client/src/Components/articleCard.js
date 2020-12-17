import styled from 'styled-components/macro'

export default function ArticleCard() {
  return (
    <>
      <Article>
        <h2>News</h2>
        <p>
          Carolina Panthers running back Christian McCaffrey (quadriceps,
          shoulder) is officially listed as doubtful for the Week 15 game
          against the Packers on Saturday. McCaffrey has played in just three
          games this year due to injury. You could say he's been a monumental
          bust for fantasy managers after he was taken with the first overall
          pick in most drafts. At this point, with just two games remaining in
          the regular season after this week, it's fair to wonder if the
          Panthers will just shut CMC down. With the 24-year-old All-Pro out
          again this weekend, Mike Davis will remain the featured back and will
          have low-end RB1 value against Green Bay. Davis ran in two touchdowns
          in the Week 14 loss to the Broncos and should remain heavily involved
          in the offense.
        </p>
      </Article>

      <Article>
        <h2>News</h2>
        <p>
          Cincinnati Bengals head coach Zac Taylor said that quarterback Brandon
          Allen (knee) will not practice on Thursday, giving Ryan Finley the
          first-team repetitions. Allen was injured in Week 14 against the
          Cowboys and missed the end of the game. The team is still hopeful that
          he can play on Monday night against the Steelers, but missing practice
          early in the week isn't a great sign. If he doesn't get cleared, Ryan
          Finley would make the start against Pittsburgh. Even though
          Pittsburgh's defense is a shell of its early season self due to a
          handful of key injuries at the linebacker position, neither Allen nor
          Finley would be very useful as low-end QB2 options. The Steelers
          Defense, on the other hand, will be a top-three fantasy unit.
        </p>
      </Article>

      <Article>
        <h2>News</h2>
        <p>
          Washington Football Team quarterback Alex Smith (calf) will sit out of
          practice for the second straight day on Thursday as he deals with a
          calf strain that he suffered in the Week 14 win over the 49ers.
          Washington's plan all along was to take things slowly with Smith, as
          the priority is rest over practice repetitions. The good news is the
          injury isn't related to the gruesome broken leg he suffered in 2018.
          Dwayne Haskins would be in line to start against the Seahawks if Smith
          cannot play, but he'll be a downgrade to the team's offense as a
          whole. Despite not being more than a low-end QB2 for fantasy purposes
          in the last five games, Smith has turned Washington into a top-10 NFL
          offense. Seattle's defense has allowed the fourth-most fantasy points
          per game to QBs this year, but they've stiffened in that regard in
          recent weeks.
        </p>
      </Article>
    </>
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
  margin-bottom: 4em;

  text-align: center;

  h2 {
    text-align: center;
  }
`

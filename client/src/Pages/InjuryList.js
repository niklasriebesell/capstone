import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styled from 'styled-components/macro'

export default function InjuryList() {
  return (
    <>
      <Header />

      <Article>
        <h2>Ankle Sprain</h2>
        <p>
          An ankle sprain is a tear in the ligaments of the ankle. These
          ligaments hold part of the ankle in place or connect it to other bones
          in the leg and foot. It's a very common, yet painful injury. When you
          sprain your ankle: Swelling and pain can occur almost right away.
          Moving the ankle can be hard. Putting weight on the leg can hurt.
        </p>
      </Article>

      <Article>
        <h2>Hip Pointer</h2>
        <p>
          A hip pointer is a deep bruise to the ridge of bone on the upper
          outside of your hip, called the iliac crest. It's often a result of a
          direct blow to the hip or a hard fall. Hip pointer symptoms include
          pain and tenderness. Recovery from the injury usually involves taking
          a break from activity until it heals.
        </p>
      </Article>

      <Article>
        <h2>Concussion</h2>
        <p>
          A concussion is a mild traumatic brain injury caused by a direct or
          indirect hit to your head or body. Your brain sits inside your skull
          surrounded by fluid. When your head takes a hit — as often happens in
          contact sports — your brain shifts or shakes around inside the skull.
          The impact damages your brain cells, causing chemical and cellular
          changes in the brain.
        </p>
      </Article>

      <Article>
        <h2>Dislocated Shoulder</h2>
        <p>
          A dislocated shoulder occurs when the top of the bone of your upper
          arm (humerus) comes out of the socket in your shoulder (scapula). This
          can be a partial or complete dislocation. A partial shoulder
          dislocation means that the bone has gone back into the scapula on its
          own. A complete shoulder dislocation means the bone has not gone back
          into the proper place, and requires medical attention. You should not
          try to force the bone back into the scapula yourself.
        </p>
      </Article>

      <Article>
        <h2>Muscle Strains</h2>
        <p>
          You can strain any muscle in your body. Strains occur when your muscle
          stretches beyond its normal range of motion or when you put more load
          on the muscle than it's strong enough to handle. When this happens,
          the muscle fibers tear resulting in a pulled muscle. Doctors grade
          strains — from first degree to third degree — based on how much muscle
          fiber you've torn.
        </p>
      </Article>

      <Article>
        <h2>Acromioclavicular (AC) Joint Injury</h2>
        <p>
          The acromioclavicular (AC) joint — along with ligaments — connects
          your collarbone and shoulder blade. An injury to to the AC joint is a
          shoulder separation.
        </p>
      </Article>

      <Article>
        <h2>Meniscus Injuries</h2>
        <p>
          The medial and lateral menisci are the cartilage shock absorbers
          located inside the knee joint. These can be damaged by excessive
          twisting, turning, or compression at the knee joint, which produces
          tears. Due to the poor blood supply, meniscal injuries generally
          require surgery for repair. Athletes can generally return to action
          4-8 weeks following surgery.
        </p>
      </Article>

      <Article>
        <h2>Stinger</h2>
        <p>
          A stinger or burner as it can also be called, is a very common injury
          in football. This injury involves a stretch or compression of the
          brachial plexus (a complex system of nerves that involve the back,
          neck, shoulders, and arms). Stingers generally cause shooting pain
          down the arm(s). This type of injury requires various amounts of
          recovery time.
        </p>
      </Article>

      <Article>
        <h2>Subluxation</h2>
        <p>
          A subluxation is similar to a dislocation in that a force causes a
          ball and socket joint to become disjointed. However, in the case of a
          subluxation, the injured joint will pop out and then back in, not
          requiring it to be put back into place.
        </p>
      </Article>

      <Article>
        <h2>Turf Toe</h2>
        <p>
          A metatarsal-phalangeal sprain, or turf toe, is an injury caused by a
          toe being hyper-extended. This injury is generally suffered while
          playing on rigid sport surfaces, such as artificial turf and usually
          occurs in the big toe. Turf toe is a common, nagging injury that many
          running backs deal with. Recovery time varies.
        </p>
      </Article>

      <Article>
        <h2>Fracture</h2>
        <p>
          A fracture is a break, crack, or shattering of a bone. In closed
          fractures, the broken bone does not pierce the skin, while in open
          fractures, the broken bone breaks the skin's surface. The recovery
          time for fractures varies.
        </p>
      </Article>

      <Article>
        <h2>Iliotibial Band Syndrome</h2>
        <p>
          The IT band is a tendon that attaches the hip to the knee joint,
          providing stability. IT band syndrome occurs when this tendon rubs
          against the outer knee joint and produces inflammation. IT band
          injuries are caused by overuse or improper conditioning and can take 5
          days to 6 months to resolve.
        </p>
      </Article>

      <Article>
        <h2>Achilles Tendinitis</h2>
        <p>
          The Achilles tendon attaches the muscles of the lower leg
          (gastrocnemius and soleus) to the heel. Achilles tendinitis is
          inflammation of this tendon generally caused by overuse or a direct
          blow. This injury is usually curable in about 4-6 weeks with proper
          treatment.
        </p>
      </Article>

      <Article>
        <h2>Collateral Ligament Injury</h2>
        <p>
          The collateral ligaments, medial collateral (MCL) and lateral
          collateral (LCL) act to prevent excessive sideways bending of the knee
          joint. These ligaments are injured when the knee joint is forced
          inward (MCL injury) or forced outward (LCL injury). These injuries are
          also categorized as first, second, and third-degree, with recovery
          time ranging between 6-12 weeks.
        </p>
      </Article>

      <Article>
        <h2>Cruciate Ligament Injury</h2>
        <p>
          The anterior cruciate ligament (ACL) and the posterior cruciate
          ligament (PCL) attach the thighbone (femur) to the shinbones (fibula
          and tibia) acting to stabilize the knee joint. The ACL and PCL can be
          injured primarily by rotational forces on the knee. ACL and PCL
          sprains are categorized as first, second, and third-degree. Injuries
          to the cruciate ligaments can take 3-12 months to heal depending upon
          severity.
        </p>
      </Article>

      <Footer />
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
  margin-bottom: 0.2em;

  text-align: center;

  h2 {
    text-align: center;
  }
`

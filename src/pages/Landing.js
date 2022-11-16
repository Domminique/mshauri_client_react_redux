import main from '../assets/images/main_A.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
import InfoSection from '../components/InfoSection'
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../components/InfoSection/Data'
import QandA from '../components/QandA'
import ReviewsComponent from '../components/ReviewsComponent'

const Landing = () => {
  return (
    <>
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              Mentors <span>Management</span> System
            </h1>
            <p>
              Simpler, more efficient and more effective way for project
              managers to find verified mentors they love and a smarter way for
              meentes to find fantastic mentors.
            </p>

            <h5>Ready to start your own program?</h5>
            <Link to='/register' className='btn btn-hero'>
              Get started
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
      <InfoSection {...homeObjOne} />
      <br />
      <br />
      <QandA />
      <br />
      <InfoSection {...homeObjTwo} />
      {/* Reviwws */}

      <ReviewsComponent />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Landing

import {Link} from 'react-router-dom'

import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'

const Home = props => {
  const registerNow = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <MeetupContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        console.log(isRegistered)
        return (
          <div>
            <Header />
            {isRegistered ? (
              <>
                <h1>{name}</h1>
                <p>{topic}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </>
            ) : (
              <>
                <h1>Welcome to Meetup</h1>
                <p>please register for the topic</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
                <Link to="/register">
                  <button type="button" onClick={registerNow}>
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        )
      }}
    </MeetupContext.Consumer>
  )
}

export default Home

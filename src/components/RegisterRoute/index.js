import './styledComponents'
import './index.css'

import {Component} from 'react'
import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class RegisterRoute extends Component {
  state = {name: '', topic: '', registerError: false}

  changeUserName = event => {
    this.setState({name: event.target.value})
  }

  changeTopic = event => {
    this.setState({topic: event.target.value})
  }

  submitSuccess = () => {
    const {name, topic} = this.state
    // console.log(this.props, 'hello')
    const {history, changeStatus} = this.props
    this.setState({registerError: false}, () => changeStatus(name, topic))
    history.replace('/')
  }

  submitFailure = () => {
    this.setState({registerError: true})
  }

  registerForm = event => {
    event.preventDefault()
    const {name} = this.state
    if (name !== '') {
      this.submitSuccess()
    } else {
      this.submitFailure()
    }
  }

  render() {
    const {name, topic, registerError} = this.state
    return (
      <MeetupContext.Consumer>
        {value => {
          const {isRegistered} = value
          console.log(isRegistered)

          return (
            <div className="login-main-container">
              <Header />
              <div className="login-route-container">
                <div className="login-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                </div>
                <div className="login-form-container">
                  <h1>Let us join</h1>
                  <form onSubmit={this.registerForm} className="login-form">
                    <label htmlFor="name">NAME</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      onChange={this.changeUserName}
                      value={name}
                      className="input-field"
                    />
                    <label htmlFor="topics">Topics</label>
                    <select
                      value={topic}
                      onChange={this.changeTopic}
                      className="input-field"
                    >
                      {topicsList.map(t => (
                        <option value={t.id} key={t.id}>
                          {t.displayText}
                        </option>
                      ))}
                    </select>
                    <button type="submit" className="login-button">
                      Register Now
                    </button>
                    {registerError && (
                      <p className="error-message">please enter username</p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default RegisterRoute

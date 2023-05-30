import './App.css'
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import MeetupContext from './context/MeetupContext'

import Home from './components/Home'
import RegisterRoute from './components/RegisterRoute'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    isRegistered: false,
    name: 'Welcome to Meetup',
    topic: 'Register for the topic',
  }

  changeStatus = (name, topic) => {
    console.log(name, topic)
    this.setState({
      isRegistered: true,
      name,
      topic,
    })
  }

  changeRegistrationStatus = () => {
    this.setState(prev => ({
      isRegistered: !prev.isRegistered,
    }))
  }

  render() {
    const {isRegistered, name, topic} = this.state
    return (
      <MeetupContext.Provider
        value={{isRegistered, changeStatus: this.changeStatus, name, topic}}
      >
        <Switch>
          <Route
            exact
            path="/"
            // render={props => <Home name={name} topic={topic} {...props} />}
            component={Home}
          />
          <Route
            exact
            path="/register"
            render={props => (
              <RegisterRoute changeStatus={this.changeStatus} {...props} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App

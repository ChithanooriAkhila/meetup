import React from 'react'

const MeetupContext = React.createContext({
  isRegistered: false,
  name: 'Welcome to Meetup',
  topic: 'please register for the topic',
  changeStatus: () => {},
})

export default MeetupContext

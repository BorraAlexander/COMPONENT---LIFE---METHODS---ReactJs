import {Component} from 'react'
import './index.css'

// COMPONENT LIFE CYCLE METHODS

// MOUNTING PHASE - (constructor(state), updating(render), componentWillMound)

// UPDATING PHASE - render()

// COMPONENT WILL UN MOUNT

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor method called')
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
    console.log('component did mount method called')
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
    console.log('component will unmount method called')
  }

  tick = () => {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    const {date} = this.state
    console.log('render method called')

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock

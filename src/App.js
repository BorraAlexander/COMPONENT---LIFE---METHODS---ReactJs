import {Component} from 'react'
import Clock from './components/Clock'
// clock component

import './App.css'

class App extends Component {
  state = {
    showClock: false,
  }

  onToggleShowClock = () => {
    this.setState(prevState => {
      const {showClock} = prevState

      return {
        showClock: !showClock,
      }
    })
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleShowClock}
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App

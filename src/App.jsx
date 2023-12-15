import React, { Component, PureComponent } from 'react'
import SimpleCounterComponent from './Components/SimpleCounterComponent'
import PureCounterComponent from './Components/PureCounterComponent'


export class App extends Component {
  render() {
    return (
      <div>
        <SimpleCounterComponent/>
        <PureCounterComponent />
      </div>
    )
  }
}

export default App

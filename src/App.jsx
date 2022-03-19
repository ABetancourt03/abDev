import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App () {
  return (
    <div className='App'>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App

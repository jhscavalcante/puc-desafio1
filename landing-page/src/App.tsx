import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Contacts = React.lazy(() => import('./pages/Contacts'))
const Services = React.lazy(() => import('./pages/Services'))

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <React.Suspense fallback='Loading...'>
          <Route path='/' exact component={Home} />
          <Route path='/contatos' component={Contacts} />
          <Route path='/servicos' component={Services} />
          <Route path='/sobre' component={About} />
        </React.Suspense>
      </Switch>
    </BrowserRouter>
  )
}

export default App

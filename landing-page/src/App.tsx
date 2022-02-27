import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Contacts = React.lazy(() => import('./pages/Contacts'))
const Services = React.lazy(() => import('./pages/Services'))
const Users = React.lazy(() => import('./pages/Users'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <React.Suspense fallback='Loading...'>
            <Route path='/' exact component={Home} />
            <Route path='/contatos' component={Contacts} />
            <Route path='/servicos' component={Services} />
            <Route path='/sobre' component={About} />
            <Route path='/usuarios' component={Users} />
          </React.Suspense>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App

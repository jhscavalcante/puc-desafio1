import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { About } from './pages/About'
import { Contacts } from './pages/Contacts'
import { Home } from './pages/Home'
import { Services } from './pages/Services'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contatos' component={Contacts} />
        <Route path='/servicos' component={Services} />
        <Route path='/sobre' component={About} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

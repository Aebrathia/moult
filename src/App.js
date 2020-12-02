import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/profile/:id">
          <ProfilePage />
        </Route>
      </Switch>
    </div>
  )
}

export default App

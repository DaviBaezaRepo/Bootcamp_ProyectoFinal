import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Events from './components/Events'
import Login from './components/Login'
import './index.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/AboutUs" element={ <AboutUs /> } />
          <Route path="/Events" element={ <Events /> } />
          <Route path="/Login" element={ <Login /> } />
        </Routes>
      </main>
    </div>
  )
}

export default App;

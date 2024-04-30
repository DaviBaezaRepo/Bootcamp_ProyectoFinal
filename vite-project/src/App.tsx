import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Events from './components/Events'
import './index.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/AboutUs" element={ <AboutUs /> } />
        <Route path="/Events" element={ <Events /> } />
      </Routes>
    </div>
  )
}

export default App;

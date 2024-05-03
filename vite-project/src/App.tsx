import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Events from './components/Events'
import Login from './components/Login'
import AboutProject from './components/AboutProject'
import PrivacyPolicy from "./components/PrivacyPolicy"
import './index.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Home" element={ <Home /> } />
          <Route path="/AboutUs" element={ <AboutUs /> } />
          <Route path="/AboutProject" element={ <AboutProject/> } />
          <Route path="/Events" element={ <Events /> } />
          <Route path="/Login" element={ <Login /> } />
          <Route path="/PrivacyPolicy" element={ <PrivacyPolicy /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;

import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import EventsCards from "./components/EventsCards";
import Login from './components/Login'
import SignUp from "./components/SignUp"
import AboutProject from './components/AboutProject'
import PrivacyPolicy from "./components/PrivacyPolicy"
import EventDetails from "./components/EventDetails"
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
          <Route path="/Events" element={<EventsCards numberOfEvents={0} />} />
          <Route path="/Login" element={ <Login /> } />
          <Route path="/Signup" element={ <SignUp/> } />
          <Route path="/PrivacyPolicy" element={ <PrivacyPolicy /> } />
          <Route path="/Event" element={ <EventDetails event={{title: "", desc: ""}} /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;

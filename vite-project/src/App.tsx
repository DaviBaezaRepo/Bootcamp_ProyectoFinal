import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import EventsPage from "./components/EventsPage";
import Login from './components/Login'
import SignUp from "./components/SignUp"
import AboutProject from './components/AboutProject'
import PrivacyPolicy from "./components/PrivacyPolicy"
import EventDetails from "./components/EventDetails"
import ResetPassword from "./components/ResetPassword"
import ResetCode from "./components/ResetCode"
import ProfilePage from "./components/Profile-v2"
import Profile from "./components/Profile"
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
          <Route path="/AboutProject" element={ <AboutProject /> } />
          <Route path="/Events" element={ <EventsPage />} />
          <Route path="/Login" element={ <Login /> } />
          <Route path="/Signup" element={ <SignUp /> } />
          <Route path="/PrivacyPolicy" element={ < PrivacyPolicy /> } />
          <Route path="/ResetPassword" element={ < ResetPassword /> } />
          <Route path="/ResetCode" element={ < ResetCode /> } />
          <Route path="/Events/:id" element={ < EventDetails /> } />
          <Route path="/Profile" element={ <Profile /> } />
          <Route path="/Profile-v2" element={ <ProfilePage /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;

import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import LocationDetails from './pages/LocationPage/LocationPage'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import './App.css'
import AddLocation from './pages/AddLocation/AddLocation'
import LocationList from "./pages/LocationList/LocationList"
import * as locationService from './services/locations'



  const App = () => {
    const [user, setUser] = useState(authService.getUser())
    const navigate = useNavigate()
    const [locations, setLocations] = useState(null)


  const handleAddLocation = async newLocationData => {
    console.log('NEW LOCATION', newLocationData)
    const newLocation = await locationService.create(newLocationData)
    console.log('HIIIIIIIIIII', newLocation)
    setLocations([...locations, newLocation])
    navigate('/locations')
  }

  useEffect(() => {
    console.log(locations)
  }, [locations])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    locationService.getAll()
    .then(allLocations => setLocations(allLocations))
  }, [])



  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route 
          path='/add-location' 
          element={<AddLocation handleAddLocation={handleAddLocation} />} />
        <Route 
          path='/locations'
          element= {<LocationList locations={locations} />}/>
          <Route
          path="/location-page"
          element={<LocationDetails locations={locations} />}/>
        
      </Routes>
    </>
  )
}

export default App

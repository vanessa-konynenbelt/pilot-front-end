import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
//import NavBar from './components/NavBar/NavBar'
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
import 'bootstrap/dist/css/bootstrap.min.css'
import EditLocation from './pages/EditLocation/EditLocation'



  const App = () => {
    const [user, setUser] = useState(authService.getUser())
    const navigate = useNavigate()
    const [locations, setLocations] = useState(null)
    const [comments, setComments] = useState(null)

  const handleAddLocation = async newLocationData => {
    console.log('NEW LOCATION', newLocationData)
    const newLocation = await locationService.create(newLocationData)
    console.log('HIIIIIIIIIII', newLocation)
    setLocations([...locations, newLocation])
    navigate('/locations')
  }

  const handleAddComment = async (locationId, newCommentData) => {
    console.log('NEW COMMENT', newCommentData)
    const updatedLocation = await locationService.createComment(locationId, newCommentData)
    const newLocationsArray = locations.map(location => 
      location._id === updatedLocation._id ? updatedLocation : location
    )
    setLocations(newLocationsArray)
    const location = await locationService.show(updatedLocation._id)
    console.log(location)
    return location
  }

  const handleDeleteComment = id => {
    console.log("CHECK THIS OUT", id)
    locationService.deleteOne(id)
    // .then(deletedComment => setLocations
    //   (locations.filter(location => 
    //     location.id !== deletedComment.id)))
  }
  

  const handleUpdateLocation= updatedLocationData => {
    locationService.update(updatedLocationData)
    .then(updatedLocation => {
      const newLocationsArray = locations.map(location => 
        location._id === updatedLocation._id ? updatedLocation : location
      )
      setLocations(newLocationsArray)
		  navigate('/')
    })
  }
  
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


  useEffect(() => {
    locationService.getAll()
    .then(allComments => setComments(allComments)
    )
  }, [])


  return (
    <>
      {/* <NavBar user={user} handleLogout={handleLogout} /> */}
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
          element={<LocationDetails user={user} locations={locations} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment} />}/>
        <Route 
          path='/edit' 
          element= {<EditLocation handleUpdateLocation={handleUpdateLocation} />}/>
          
        
      </Routes>
    </>
  )
}

export default App

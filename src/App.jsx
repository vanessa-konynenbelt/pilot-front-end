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
import { create, getAll, getLocation, update, createComment, show, deleteOne} from './services/locations'
import 'bootstrap/dist/css/bootstrap.min.css'
import EditLocation from './pages/EditLocation/EditLocation'
import Map from 'react-map-gl'


  const App = () => {
    const [user, setUser] = useState(authService.getUser())
    const navigate = useNavigate()
    const [locations, setLocations] = useState([])
    const [comments, setComments] = useState(null)

  const handleAddLocation = async newLocationData => {

    console.log('NEW LOCATION', newLocationData)
    const newLocation = await create(newLocationData)
    console.log('HIIIIIIIIIII', newLocation)
    setLocations([...locations, newLocation])
    navigate('/locations')
  }

  const handleAddComment = async (locationId, newCommentData) => {
    console.log('NEW COMMENT', newCommentData)
    const updatedLocation = await createComment(locationId, newCommentData)

    const newLocationsArray = locations.map(location => 
      location._id === updatedLocation._id ? updatedLocation : location
    )
    setLocations(newLocationsArray)
    const location = await show(updatedLocation._id)
    console.log(location)
    return location
  }
  
  const handleDeleteComment = (location, comId)  => {
    // delete comment by Id
    deleteOne(location._id, comId)
    .then(deletedComment => {
      setLocations(locations.filter(comment => comment._id !== comId))
    })
    window.location.reload()
    }


  const handleUpdateLocation= updatedLocationData => {
    update(updatedLocationData)
    .then(updatedLocation => {
      const newLocationsArray = locations.map(location => 
        location._id === updatedLocation._id ? updatedLocation : location)
      setLocations(newLocationsArray)
		  navigate('/locations')
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
    getAll()
    .then(allLocations => setLocations(allLocations))
  }, [])


  useEffect(() => {
    getAll()
    .then(allComments => setComments(allComments)
    )
  }, [])


  useEffect(() => {
    console.log('GET LOCATION IS THIS', getLocation())
  }, [])


  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={<Landing user={user} handleLogout={handleLogout} />} 
        />
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
          element= {<EditLocation user={user} locations={locations} handleUpdateLocation={handleUpdateLocation} />}/>
        
      </Routes>
    </>
  )
}

export default App

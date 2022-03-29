import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
        <>
        <div>
        <img 
            src={profiles.photo}
            alt='me'
            className='profile-pic'
            />
        </div>
          {profiles.map(profile=>
            <h2 key={profile._id}>{profile.name}</h2>
            
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}
 
export default Profiles
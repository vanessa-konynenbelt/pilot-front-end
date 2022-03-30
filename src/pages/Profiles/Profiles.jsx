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
    <body>
      <h1>Find a swim buddy!</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile=>
          <div key={profile._id}>
            <h2>{profile.name}, {profile.location}</h2>
            <h4>{profile.skillLevel} swimmer</h4>
            <p>{profile.pilot}</p>
            <img 
            src={profiles.photo}
            alt='me'
            className='profile-pic'
            />
            </div>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </body>
    </>
  )
}
 
export default Profiles
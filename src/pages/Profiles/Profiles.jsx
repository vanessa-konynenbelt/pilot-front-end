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
        {profiles.length ? 
          <>
          <h2>Find a swim buddy!</h2>
            <div className="card-group">
              {profiles.map(profile=>
                  <div key={profile._id} className="card" style={{ width: '18rem', height: '18rem' }}>
                    {profile.photo?
                      <>
                        <img 
                          style={{'width': '200px'}}
                          src={profile.photo}
                          alt='me'
                          className='card-img-top profile-pic'></img>
                      </>
                      :
                      <>
                        <div className="card-body">
                          <h5 className="card-title">{profile.name}, {profile.location}</h5>
                          <p className="card-text">Swim level: {profile.skillLevel}</p>
                        </div>
                      </>
                      }  
                    </div>
              )}
            </div>
          </>
          :
            <p>No profiles yet</p>
          }
      </body>
    </>
  )
}
 
export default Profiles
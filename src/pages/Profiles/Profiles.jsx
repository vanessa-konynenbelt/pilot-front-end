import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import HoverRating from '../../components/SignupForm/HoverRating'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  let levels = [
     'Beginner',
     'Novice',
     'Intermediate',
     'Advanced',
     'Pro',
  ]

  return (
    <>
      <body>
        {profiles.length ? 
          <>
          <h2>Find a swim buddy!</h2>
            <div className="card-group">
              {profiles.map(profile=>
                  <div key={profile._id} className="card" style={{ width: '18rem', height: '18rem' }}>
                    {profiles.photo?
                      <>
                        <img 
                          src={profiles.photo}
                          alt='me'
                          className='card-img-top profile-pic'></img>
                      </>
                      :
                      <>
                        <div className="card-body">
                          <h5 className="card-title">{profile.name}, {profile.location}</h5>
                          {profile.skillLevel?
                          <>
                            <p className="card-text">{levels[profile.skillLevel]} swimmer</p>
                            <HoverRating skillLevel = {profile.skillLevel}></HoverRating>
                           </>
                            : <p></p>
                          }
                          {profile.pilot?
                            <p className="card-text">pilot</p>
                            : <p></p>
                          }
                          {profile.kayakSUP?
                            <p className="card-text">🛶</p>
                            : <p></p>
                          }
                          <p className="card-text">Contact info: {profile.contact}</p>
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
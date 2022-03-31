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
                    {profile.photo?
                      <>
                        <img 
                          //style={{ width: '18rem', height: '8rem'}}
                          src={profile.photo}
                          alt='me'
                          className='card-img-top profile-pic'></img>
                          <div className="card-body">
                          <h5 className="card-title">{profile.name}, {profile.location}</h5>
                          {profile.skillLevel?
                          <>
                            <p className="card-text">{levels[profile.skillLevel]} swimmer</p>
                            {/* <HoverRating></HoverRating> */}
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
                          {profile.contact?
                             <p className="card-text">{profile.contact}</p>
                            : <p></p>
                          }
                        </div>
                          
                      </>
                      :
                      <>
                        <div className="card-body">
                          <h5 className="card-title">{profile.name}, {profile.location}</h5>
                          {profile.skillLevel?
                          <>
                            <p className="card-text">{levels[profile.skillLevel]} swimmer</p>
                            {/* <HoverRating></HoverRating> */}
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
                          {profile.contact?
                             <p className="card-text">{profile.contact}</p>
                            : <p></p>
                          }
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
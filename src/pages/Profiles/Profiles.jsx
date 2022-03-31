import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import HoverRating from '../../components/SignupForm/HoverRating'
import styles from './Profiles.module.css'


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
    <h2>Find a swim buddy!</h2><br></br>
      <body className={styles.container}>
        {profiles.length ? 
          <>
              {profiles.map(profile=>
              <div className="card-group">
                  <div key={profile._id} className="card" style={{ width: '18rem', height: '18rem' }}>
                    {profile.photo?
                      <>
                        <img 
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
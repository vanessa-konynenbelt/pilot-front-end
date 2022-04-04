import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import style from './LocationPage.module.css'
import DetailCard from "../../components/DetailCard/DetailCard";

const LocationDetails = (props) => {
  let location = useLocation()
  const [locationDetails, setLocationDetails] = useState({})
  const [commentData, setCommentData] = useState({
    content: '',
  })
  
  useEffect(() => {
    setLocationDetails(location.state.location)
  }, [])

  const handleChange = evt => {
    setCommentData({ ...commentData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    const updatedLocation= await props.handleAddComment(locationDetails._id, commentData)
    setLocationDetails(updatedLocation)
  }

  return ( 
    <>
        <div className = "parent-card-group">
          <div className={style.details}>
            <img 
              src={locationDetails.pictures}
              alt='the view'
              className='location-pic'
              style={{'maxWidth': "60%"}}
            />
            <div>
              <h2>{locationDetails.name}</h2>
              <p>Description: {locationDetails.description ? locationDetails.description : 'no description available yet'}</p>
              <p>Entry Points: {locationDetails.entryPoints ? locationDetails.entryPoints : 'none available yet'}</p>
              <p>Rating: {locationDetails.rating ? locationDetails.rating : 'no ratings available yet'}</p> 
              <Link
                to='/edit'
                state={{ location }}
              >
                <button className={style.btn}>Edit</button> 
              </Link>
              <Link to='/locations'>
                <button className={style.btn}>
                  Back to All Locations
                </button>
              </Link>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <div className={style.comment}>
              <label htmlFor="comment-input" className={style.label}>
                Comments
              </label>
              <input 
                type="text"
                className={style.input}
                id="comment-input"
                name="content"
                value={commentData.content}
                onChange={handleChange}
              />
              <button className = {style.btn}
                type="submit"
              >
                Add Comment
              </button>
            </div>
          </div>
          <br></br>
        </form>
        {locationDetails.comments?.length > 0 &&
          <table>
            <thead>
              <tr>
                <th>Comment</th>
                <th>Posted By</th>
              </tr>
            </thead>
            <tbody>
                  {locationDetails.comments.map((comment) => (
                    <DetailCard
                      key={comment._id}
                      comment={comment}
                      handleDeleteComment={props.handleDeleteComment}
                      locationDetails={locationDetails}
                      user={props.user}
                    />
                  ))}
            </tbody>
          </table>
          }
    </>
   )
}

export default LocationDetails;
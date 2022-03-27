import { getAll } from "../../services/locations";
import { useEffect, useState, } from "react";
import { useLocation, Link } from "react-router-dom";

const LocationDetails = (props) => {
  const [locationDetails, setLocationDetails] = useState({})
  let location = useLocation()
  
  useEffect(() => {
    getAll(location.state.location.name)
    setLocationDetails(location.state.location)
  }, [])



  const [commentData, setCommentData] = useState({
		comments: '',
	})

  const handleChange = evt => {
  setCommentData({ ...commentData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    const commentFormData = new FormData()
    commentFormData.append('comment', commentData.comments)
    props.handleAddComment(commentData)
  }

  return ( 
    <>
      <h1>Location Details</h1>
          <div>
            <p>{locationDetails.name}</p>
            <p>Description: {locationDetails.description ? locationDetails.description : 'no description availble yet'}</p>
            <p>Entry Points: {locationDetails.entryPoints ? locationDetails.entryPoints : 'none available yet'}</p>
            <p>Rating: {locationDetails.rating ? locationDetails.rating : 'no ratings availble yet'}</p>

          <div className="edit-btn">
        <Link
          className='btn btn-sm btn-warning'
          to='/edit'
          state={{location}}
        >
          Edit Deets
        </Link><br />
            <Link to='/locations'>Back to All Locations</Link>
          </div>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
					<label htmlFor="comment-input" className="form-label">
						Comments
					</label>
					<input 
						type="text"
						className="form-control"
						id="comment-input"
						name="comments"
            onChange={handleChange}
					/>
				</div>
          <button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Comment
					</button><br></br>
          </form>
          <Link to='/locations'>Back to All Locations</Link>
      {commentData.comments > 0 ?
          <table>
      <thead>
        <tr>
          <th>Comment</th>
          <th>Posted By</th>
        </tr>
    </thead>
    <tbody>
      { commentData.comments.forEach(function(comment) {
        <tr>
          <td>{comment}</td>
          <td>{comment}</td>
        </tr> 
      })}
    </tbody>
    </table>
    :
    <>
    <h3>No Comments Yet</h3>
    </>
    }
    </>
   );
}

export default LocationDetails;
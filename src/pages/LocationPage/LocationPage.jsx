import { getAll } from "../../services/locations";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const LocationDetails = (props) => {
  const [locationDetails, setLocationDetails] = useState({})
  let location = useLocation()
  
  useEffect(() => {
    getAll(location.state.location.name)
    setLocationDetails(location.state.location)
  }, [])
  
  return ( 
    <>
      <h1>Location Details</h1>
          <div>
            <p>{locationDetails.name}</p>
            <p>Description: {locationDetails.description ? locationDetails.description : 'no description availble yet'}</p>
            <p>Entry Points: {locationDetails.entryPoints ? locationDetails.entryPoints : 'none available yet'}</p>
            <p>Rating: {locationDetails.rating ? locationDetails.rating : 'no ratings availble yet'}</p>
            				<div className="form-group mb-3">

					<label htmlFor="comment-input" className="form-label">
						Comments
					</label>
					<input 
						type="text"
						className="form-control"
						id="comment-input"
						name="comments"
					/>
				</div>
          </div>
          <button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Comment
					</button><br></br>
          <Link to='/locations'>Back to All Locations</Link>
    </>
   );
}
 
export default LocationDetails;
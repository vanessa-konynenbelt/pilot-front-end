import { getAll } from "../../services/locations";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
            <p>{locationDetails.description}</p>

          </div>
    </>
   );
}
 
export default LocationDetails;
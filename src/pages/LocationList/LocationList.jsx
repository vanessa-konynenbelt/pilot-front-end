import { getLocation } from "../../services/locations"
import { Link } from "react-router-dom"


function LocationList(props) {
  
  return (
    <>
      <h1>Locations</h1>
        <div>
          {props.locations?.map(location => (
        
            <div key={location._id}>
              <Link
                to="/location-page"
                state={{location}}
                style={{textDecoration: "none"}}
              >
                <h4>{location.name}</h4>
              </Link>
              <p>{location.description}</p>
            </div>
           
          ))}
        </div>
    </>
  )
}

export default LocationList
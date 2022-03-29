import { getLocation } from "../../services/locations"
import { Link } from "react-router-dom"


function LocationList(props) {
  
  return (
    <>
      <h1>Locations</h1>
        <div>
          {props.locations?.map(location => (
            <>
              <Link
                key={location._id}
                to="/location-page"
                state={{location}}
                style={{textDecoration: "none"}}
              >
                <h3>{location.name}</h3>
              </Link>
              <p>{location.description}</p>
            </>
          ))}
        </div>
    </>
  )
}

export default LocationList
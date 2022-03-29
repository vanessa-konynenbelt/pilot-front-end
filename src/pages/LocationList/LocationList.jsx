import { getLocation } from "../../services/locations"
import { Link } from "react-router-dom"


function LocationList(props) {
  
  return (
    <>
    {locations.length?}
      <h1>Locations</h1>
        <div>
          {props.locations?.map(location => (
            <div key={location._id}>
              <Link
                to="/location-page"
                state={{location}}
                style={{textDecoration: "none"}}
              >
                <h5 className="card-title">Card title: {location.name}</h5> 
              </Link>
            </div>
          ))}
        </div>
    </>
  )
}

export default LocationList
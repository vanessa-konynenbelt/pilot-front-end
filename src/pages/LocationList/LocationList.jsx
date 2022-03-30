import { Link } from "react-router-dom"


function LocationList(props) {
  return (
    <>
    <body>
      {props.locations.length?
      <>
      <h2>Find a new swim spot!</h2>
        <div className="card-group">
          {props.locations.map((location) => (
              <Link 
                key={location._id}
                to="/location-page"
                state={{ location }}
              >
              <div className="card" style={{ width: '18rem', height: '18rem' }}>
                {location.pictures?
                <>
                  <img className="card-img-top" src={location.pictures} alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <p className="card-text">{location.description}</p>
                  </div>
                </>
                :
                <>
                  <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <p className="card-text">{location.description}</p>
                    <img src='' />
                  
                  </div>
                </>
                }     
              </div>
            </Link>
          ))}
           <a className="btn btn-primary m-3" href="/add-location">Add a swim spot</a>
        </div>
      </>
      :
      <>
        <h5>Loading swim spots... </h5> 
      </>
      }
    </body>
    </>
  )
}

export default LocationList
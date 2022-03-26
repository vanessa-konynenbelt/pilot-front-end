

function LocationList(props) {
  console.log(props.locations)
  return (
    <>
      <h1>Locations!!</h1>
      <div>
        {props.locations?.map(location => (

          <div key={location._id}>
            <p>Location Name: {location.name}</p>
            <p>Description: {location.description}</p>
            <p>Entry Points: {location.entryPoints}</p>
            <p>Rating: {location.rating}</p>
            {/* <p>Comments: {location.comments}</p> */}
            <p>Pictures: {location.pictures}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default LocationList

import { useState, useRef, useEffect } from "react"

function AddLocation(props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
		name: '',
		description: '',
	})

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
  setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    const locationFormData = new FormData()
    locationFormData.append('name', formData.name)
    locationFormData.append('description', formData.description)
    props.handleAddLocation(locationFormData)
  }

	return (
		<>
			<h1>Add Location</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Location Name
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="breed-input" className="form-label">
						Location Description
					</label>
					<input 
						type="text"
						className="form-control"
						id="description-input"
						name="description"
            value={formData.description}
            onChange={handleChange}
					/>
				</div>
        <button
						type="submit"
						className="btn btn-primary btn-fluid"
						disabled={!validForm}
					>
						Add Swim Location
					</button>
			</form>
		</>
	)


}

export default AddLocation
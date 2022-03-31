import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import './EditLocation.module.css' 

function EditLocation(props) {
  const location = useLocation()
	const [formData, setFormData] = useState(location.state.location.state.location) 
  const [validForm, setValidForm] = useState(true)
  const formElement = useRef()
  
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit = evt => {
		evt.preventDefault()
		console.log('formdata in handlesubmit (edit location)', formData)
		props.handleUpdateLocation(formData)
	}

  return (
		<>
			<h1>Edit Location</h1>
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
							required
							value={formData.name}
							onChange={handleChange}
						/>
					</div><br />
					<div className="form-group mb-3">
						<label htmlFor="description-input" className="form-label">
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
					</div><br />
					<div className="form-group mb-3">
						<label htmlFor="name-input" className="form-label">
							Entry Points
						</label>
						<input 
							type="text"
							className="form-control"
							id="entry-input"
							name="entryPoints"
							value={formData.entryPoints}
							onChange={handleChange}
						/>
					</div><br />
					<div className="form-group mb-3">
						<label htmlFor="rating-input" className="form-label">
							Rating
						</label>
						<input 
							type="Number"
							className="form-control"
							id="rating-input"
							name="rating"
							value={formData.rating}
							onChange={handleChange}
						/>
					</div>
					<br />
					<div className="update-btn">
					<button 
							type="submit"
							className="btn btn-primary btn-fluid"
							disabled={!validForm}
						>
							Save
						</button>
						</div>
				</form>
		</>
	)
}

export default EditLocation
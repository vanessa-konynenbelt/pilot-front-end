
import { useState, useRef, useEffect } from "react"
import { getLocation, handleApiSubmit } from '../../services/locations'
import style from './AddLocation.module.css'

function AddLocation(props) {
  const formElement = useRef()
	const [locationData, setLocationData] = useState([])
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
		name: '',
		description: '',
		entryPoints: '',
		rating: '',
		pictures: '',
	})

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])


  const handleChange = evt => {
  setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

	const handleChangePhoto = (evt) => {
		setFormData({...formData, pictures: evt.target.files[0]})
	}

  const handleSubmit = evt => {
    evt.preventDefault()
		const locationFormData = new FormData()
		locationFormData.append('pictures', formData.pictures)
		locationFormData.append('name', formData.name)
		locationFormData.append('description', formData.description)
		locationFormData.append('entryPoints', formData.entryPoints)
		locationFormData.append('rating', formData.rating)
		props.handleAddLocation(locationFormData)
	

		getLocation(formData.name)
		.then(locationData => {
			console.log(locationData)
		})
    // props.handleAddLocation(formData)
  }

	const handleApiSubmit = async evt => {
    evt.preventDefault()
    try {
      setFormData(formData.name)
    } catch (err) {
      console.log(err)
    }
  }

	return (
		<>
		<div className = "parent-card-group">
			<h2>Add Location</h2>
			<div className={style.main}>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className={style.label}>
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
						onSubmit={handleApiSubmit}
					/>
				</div><br />
				<div className="form-group mb-3">
					<label htmlFor="description-input" className={style.label}>
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
					<label htmlFor="name-input" className={style.label}>
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
					<label htmlFor="rating-input" className={style.label}>
						Rating
					</label>
					<input 
						type="Number"
						className="form-control"
						id="rating-input"
						name="rating"
						min="0"
						max="5"
						required
            value={formData.rating}
            onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="photo-upload" className={style.label}>
						Pictures
					</label>
					<input 
						type="file"
						className="form-control"
						id="photo-upload"
						name="pictures"
            onChange={handleChangePhoto}
					/>
				</div><br />
        <button
						type="submit"
						className={style.btn}
						disabled={!validForm}
					>
						Add Swim Location
					</button>
			</form>
			</div>
		</div>
		</>
	)
}

export default AddLocation
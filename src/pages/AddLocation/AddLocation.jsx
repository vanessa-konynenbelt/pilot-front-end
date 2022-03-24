import { useState } from "react"

function AddLocation(props) {
  const [formData, setFormData] = useState({
		name: '',
		description: '',
	})

	return (
		<>
			<h1>Add Location</h1>
			<form autoComplete="off">
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
					/>
				</div>
			</form>
		</>
	)


}

export default AddLocation
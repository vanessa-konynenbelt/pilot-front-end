import { useState } from "react"

function AddLocation(props) {
	return (
		<>
			<h1>Add Location</h1>
			<form autoComplete="off">
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Location Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
						required
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
					/>
				</div>
			</form>
		</>
	)
}

export default AddLocation
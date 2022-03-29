import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ user, handleLogout }) => {
     return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" id="mainNav">
          <div className="container px-4 px-lg-5">
          {user ?
             <ul className="navbar-nav ms-auto">
              <a className="navbar-brand" href="#page-top">Welcome, {user.name}!</a>
              <li><Link to="/profiles">Profiles</Link></li>
              <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
              <li><Link to="/changePassword">Change Password</Link></li>
              <li><Link to="/add-location">Add Location</Link></li>
              <li><Link to="/locations">All Locations</Link></li>
            </ul>
          :
          <ul className="navbar-nav ms-auto">
                <a className="navbar-brand" href="#page-top">Welcome</a>
                <li className="nav-item nav-link"><Link to="/login">Log In</Link></li>
                <li className="nav-item nav-link"><Link to="/signup">Sign Up</Link></li>
            </ul>
        }
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#signup">Contact</a></li>
                </ul>
            </div>
        </div>
        </nav>
      </>
     )
   }

export default Header
import React from 'react'

const Header = ({ user, handleLogout }) => {
     return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" id="mainNav">
          <div className="container px-4 px-lg-5">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fas fa-bars"></i>
            </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                {user ?
                  <ul className="navbar-nav ms-auto">
                      <li className="navbar-item welcome">Welcome, {user.name}!</li>
                      <li className="nav-item"><a className="nav-link" href="/" onClick={handleLogout}>log out</a></li>
                      <li className="nav-item"><a className="nav-link" href="/changePassword">Change Password</a></li>
                  </ul>
                :
                <ul className="navbar-nav ms-auto">
                      <li className="nav-item welcome">Welcome</li>
                      <li className="nav-item"><a className="nav-link" href="/login">Log In</a></li>
                      <li className="nav-item"><a className="nav-link"href="/signup">Sign Up</a></li>
                  </ul>
                } 
              <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="/profiles">Swimmers</a></li>
                  <li className="nav-item"><a className="nav-link" href="/locations">Locations</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </>
     )
   }

export default Header
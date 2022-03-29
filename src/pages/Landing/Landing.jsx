//import Button from 'react-bootstrap/Button'
// import styles from './Landing.module.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Landing = ({ user }) => {
  return (
    <>
    <Header />
      <header className="masthead">
              <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                  <div className="d-flex justify-content-center">
                      <div className="text-center">
                          <br /><br /><br />
                          <h1 className="mx-auto my-0 text-uppercase text-black">pilot</h1>
                          <h2 className="text-black-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
                          <a className="btn btn-primary" href="#about">Get Started</a>
                      </div>
                  </div>
              </div>
          </header>
          <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-black mb-4">Built with Bootstrap 5</h2>
                        <p className="text-black-50">
                            Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
                            The theme is open source, and you can use it for any purpose, personal or commercial.
                        </p>
                    </div>
                </div>
                <img className="img-fluid" src={require("./bg-masthead.jpg")} alt="..." />
            </div>
        </section>
    <Footer />
    </>
  )
}

export default Landing

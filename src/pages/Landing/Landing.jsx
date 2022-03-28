//import Button from 'react-bootstrap/Button'
// import styles from './Landing.module.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Landing = ({ user }) => {
  return (
    <>
    <Header />
      <header class="masthead">
              <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                  <div class="d-flex justify-content-center">
                      <div class="text-center">
                          <br /><br /><br />
                          <h1 class="mx-auto my-0 text-uppercase text-black">pilot</h1>
                          <h2 class="text-black-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
                          <a class="btn btn-primary" href="#about">Get Started</a>
                      </div>
                  </div>
              </div>
          </header>
          <section class="about-section text-center" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="text-black mb-4">Built with Bootstrap 5</h2>
                        <p class="text-black-50">
                            Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
                            The theme is open source, and you can use it for any purpose, personal or commercial.
                        </p>
                    </div>
                </div>
                <img class="img-fluid" src={require("./bg-masthead.jpg")} alt="..." />
            </div>
        </section>
    <Footer />
    </>
  )
}

export default Landing

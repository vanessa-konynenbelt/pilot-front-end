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
                          <h1 className="mx-auto my-0 text-black">pilot</h1>
                          <h2 className="text-black-50 mx-auto mt-2 mb-5">Connect with open water swimmers, find pilots, and discover new open water</h2>
                          <a className="btn btn-primary m-3" href="/locations">Find a Swim Spot</a>
                          <a className="btn btn-primary m-3" href="/profiles">Find a Swim Buddy</a>
                      </div>
                  </div>
              </div>
          </header>
    <Footer />
    </>
  )
}

export default Landing

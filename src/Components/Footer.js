import React from 'react'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='ty'>
        <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <h6>Welcome to iNoteBook</h6>
            <p className="text-justify">iNoteBook is your go-to platform for managing your personal notes with ease. Whether you're a student, professional, or simply someone who likes to stay organized, our website offers a streamlined and intuitive interface to help you handle your notes effectively.


Thank you for choosing iNoteBook!

</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
            <li className="navbar-brand text-white" to="/login">iNoteBook</li>
            <li className="navbar-brand text-white" to="/login">Home</li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by Gul@m W@RSI</p>
          </div>

          
        </div>
      </div>
</footer>
    </div>
  )
}

export default Footer

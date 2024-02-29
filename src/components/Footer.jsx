import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="bold">About</h4>
          <Link className='about' to="/about">About Us</Link>
          <p>Career</p>
          <p>Corporate Contract</p>
          <p>Sustainability</p>
        </div>
        <div className="footer-section">
          <h4 className="bold">Support</h4>
          <p>Help</p>
          <p>Customer Service</p>
          <p>Feedback</p>
          <p>Privacy</p>
        </div>
        <div className="footer-section">
          <h4 className="bold">Contact Us</h4>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Planewreck. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

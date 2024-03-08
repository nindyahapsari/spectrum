import React from 'react'
import './ConfirmationPage.css'
import { Link } from 'react-router-dom'

const ConfirmationPage = () => {
  return (
    <div className="checkout-page">
      <h2>Checkout confirmation</h2>
      <div>
        <p>
          This is a list of ticket confirmation that need to be render later
        </p>
      </div>

      <div>
        <div>
          <p>Pay with : </p>
        </div>
        <div>
          <button>Card</button>
          <Link target="_blank" to="https://www.paypal.com/de/home">
            <button>Paypal</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPage

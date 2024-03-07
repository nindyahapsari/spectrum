import React from 'react'
import './ConfirmationPage.css'

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
          <button>Paypal</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPage

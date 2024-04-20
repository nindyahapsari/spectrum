/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './LandingPage.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const [showNavbar] = useState(false)

  return (
    <div className="landing-page">
      <div className="top">
        {showNavbar && <Navbar />}
        <div className="header">
          <Link className="logo" to="/">
            Spectrum
          </Link>
          <div className="links-landing">
            <a href="#about-us" className="links">
              About us
            </a>
            <a href="#reviews" className="links">
              Reviews
            </a>
            <Link className="links">FAQ</Link>
          </div>
        </div>
        <section className="search-section">
          <h1 className="title">Spectrum</h1>
          <h2 className="desc">
            Use a chance to compare airline business <br /> services and make
            every flight unforgettable!
          </h2>
          <Link to="/signup">
            <button className="button-landing">ELEVATE YOUR JOURNEY</button>
          </Link>
        </section>
      </div>

      <div className="boxes-landing">
        <div className="box-landing find-box-landing">
          <h1>01</h1>
          <h2>FIND</h2>
          <p>
            Effortlessly discover tailored flights that match your preferences
            and travel needs with our intuitive search feature.
          </p>
          <p>
            Your journey begins with a seamless and personalized search
            experience, ensuring you find the ideal options for your travel
            adventure.
          </p>
        </div>

        <div className="box-landing compare-box-landing">
          <h1>02</h1>
          <h2>COMPARE</h2>
          <p>
            Compare ratings, read passenger reviews, and weigh amenities to make
            informed choices.
          </p>
          <p>
            Our comprehensive feature empowers you to select the airline that
            best aligns with your preferences, promising an unparalleled travel
            experience.
          </p>
        </div>

        <div className="box-landing choose-box">
          <h1>03</h1>
          <h2>CHOOSE</h2>
          <p>
            Choose the perfect flight from a curated list that meets your
            criteria, prioritizing comfort, in-flight services, or budget
            considerations.
          </p>
          <p>
            Elevate your travel experience by making a decision that resonates
            with your unique preferences.
          </p>
        </div>
      </div>

      <div className="boxes1-landing">
        <div id="about-us" className="box1-landing about-box">
          <h1>About Us</h1>
          <p>
            Established in February 2024, we started because we believe your
            journey should be as unique as you are.
          </p>
          <p>
            We believe your journey should be as unique as you are. Our simple
            search helps you discover flights that match what you love about
            travel. No stress, just the right options for your adventure.
          </p>
          <p>
            Spectrum lets you compare things like ratings and reviews so you can
            make smart choices. Amazing journey with the choices you make.
          </p>
          <p>
            Choosing is the best part, right? Our friendly platform makes it
            simple. Pick the flight that fits your style, whether it`s comfort,
            budget, or something else.
          </p>
        </div>
      </div>
      <div id="reviews">
        <h1 className="review-h1">Reviews</h1>
        <div className="reviews-box">
          <div className="review-box">
            <h3>Hannah</h3>
            <p>
              Spectrum nailed it! Their business class comparisons are spot-on,
              and the satisfaction predictions are a game-changer. My recent
              flight was exactly as expected – comfortable and satisfying.
            </p>
            <div className="star-rating">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="review-box">
            <h3>Jason</h3>
            <p>
              Choosing a business class with Spectrum is like having a personal
              satisfaction guarantee.
            </p>
            <div className="star-rating">⭐⭐⭐⭐</div>
          </div>
          <div className="review-box">
            <h3>Frederico</h3>
            <p>
              The detailed comparisons and accurate satisfaction forecasts
              ensure I always pick the right business class. Highly recommended!
            </p>
            <div className="star-rating">⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

import './HomePage.css'
import SearchBar from '../components/SearchBar'

const HomePage = () => {
  return (
    <div className="boxes">
      <div>
        <SearchBar />
      </div>
      <div className="box find-box">
        <h1>01</h1>
        <h2>FIND</h2>
        <p>
          Effortlessly discover tailored flights that match your preferences and
          travel needs with our intuitive search feature.
        </p>
        <p>
          Your journey begins with a seamless and personalized search
          experience, ensuring you find the ideal options for your travel
          adventure.
        </p>
      </div>

      <div className="box compare-box">
        <h1>02</h1>
        <h2>COMPARE</h2>
        <p>
          Compare ratings, read passenger reviews, and weigh amenities to make
          informed choices.
        </p>
        <p>
          Our comprehensive feature empowers you to select the airline that best
          aligns with your preferences, promising an unparalleled travel
          experience.
        </p>
      </div>

      <div className="box choose-box">
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
  )
}

export default HomePage

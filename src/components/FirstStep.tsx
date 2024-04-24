import '../components/FirstStep.css'

const FirstStep = () => {
  return (
    <div className="boxes">
      <div className="box find-box">
        <h1>01</h1>
        <h2 className="h2">FIND</h2>
        <p className="small-text">
          Effortlessly discover tailored flights that match your preferences and
          travel needs with our intuitive search feature.
        </p>
        <p className="small-text">
          Your journey begins with a seamless and personalized search
          experience, ensuring you find the ideal options for your travel
          adventure.
        </p>
      </div>

      <div className="box compare-box">
        <h1>02</h1>
        <h2 className="h2">COMPARE</h2>
        <p className="small-text">
          Compare ratings, read passenger reviews, and weigh amenities to make
          informed choices.
        </p>
        <p className="small-text">
          Our comprehensive feature empowers you to select the airline that best
          aligns with your preferences, promising an unparalleled travel
          experience.
        </p>
      </div>

      <div className="box choose-box">
        <h1>03</h1>
        <h2 className="h2">CHOOSE</h2>
        <p className="small-text">
          Choose the perfect flight from a curated list that meets your
          criteria, prioritizing comfort, in-flight services, or budget
          considerations.
        </p>
        <p className="small-text">
          Elevate your travel experience by making a decision that resonates
          with your unique preferences.
        </p>
      </div>
    </div>
  )
}
export default FirstStep

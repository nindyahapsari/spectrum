import React from 'react'
import find from '../assets/find.png'
import compare from '../assets/compare.png'
import choose from '../assets/choose.png'

const FirstStep = () => {
  return (
    <div className="flex flex-row justify-between px-32 my-20">
      <img className="step-img" src={find} />
      <img className="step-img" src={compare} />
      <img className="step-img" src={choose} />
    </div>
  )
}

export default FirstStep

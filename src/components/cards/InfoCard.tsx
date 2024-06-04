import React from 'react';
import './InfoCard.css';

const context = [
  {
    number: '01',
    title: 'FIND',
    description:
      'Effortlessly discover tailored flights that match your preferences and travel needs with our intuitive search feature.',
    advertisementText:
      'Your journey begins with a seamless and personalized search experience, ensuring you find the ideal options for your travel adventure.',
  },
  {
    number: '02',
    title: 'COMPARE',
    description:
      'Compare ratings, read passenger reviews, and weigh amenities to make informed choices.',
    advertisementText:
      'Our comprehensive feature empowers you to select the airline that best aligns with your preferences, promising an unparalleled travel experience.',
  },
  {
    number: '03',
    title: 'CHOOSE',
    description:
      'Choose the perfect flight from a curated list that meets your criteria, prioritizing comfort, in-flight services, or budget considerations.',
    advertisementText:
      'Elevate your travel experience by making a decision that resonates with your unique preferences.',
  },
];

function InfoCard() {
  return (
    <div className="flex flex-row justify-center px-20">
      {context.map(({ number, title, description, advertisementText }) => (
        <div key={`${number}-${title}`} className="boxes">
          <div className="box">
            <h1>{number}</h1>
            <h2 className="h2">{title}</h2>
            <p className="text-lg"> {description}</p>
            <p className="text-lg">{advertisementText} </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default InfoCard;

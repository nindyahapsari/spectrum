import './InfoCard.css';

const context = [
  {
    number: '01',
    title: 'SEARCH DEALS',
    description:
      'Quickly locate the best flight deals from your chosen city with our efficient search system.',
    advertisementText:
      'Experience the ease of finding great flight deals tailored to your travel schedule.',
  },
  {
    number: '02',
    title: 'BOOKMARK',
    description:
      'Bookmark the flights you are interested in for quick access and decision-making later.',
    advertisementText:
      'Easily bookmark flights you like, making it simpler to compare and decide later.',
  },
  {
    number: '03',
    title: 'EXPORT',
    description:
      'Export your flight options to a PDF for seamless offline access and sharing with others.',
    advertisementText:
      'Download your flight search results in a convenient PDF format for easy sharing and offline use.',
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

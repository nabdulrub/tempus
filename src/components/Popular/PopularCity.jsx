import "./Popular.css";

const PopularCity = ({
  country,
  city,
  currently,
  cityImg,
  degrees,
  ...props
}) => {
  return (
    <div className="city-container" {...props}>
      <div className="city-info">
        <p>{country}</p>
        <h2 className="city">{city}</h2>
        <h3 className="currently">{currently}</h3>
      </div>
      <div className="city-weather">
        <img src={cityImg} alt="" />
        <h2>{degrees}</h2>
      </div>
    </div>
  );
};

export default PopularCity;

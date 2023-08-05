const PopularCity = ({
  country,
  city,
  currently,
  cityImg,
  degrees,
  ...props
}) => {
  return (
    <div
      className="bg-secondary-color w-full flex text-text-white gap-1 px-8 py-2 max-w-[300px] rounded-3xl justify-between max-h-[130px] hover:scale-105 transition-all duration-300"
      {...props}
    >
      <div className="flex flex-col gap-2 justify-center">
        <p className="uppercase text-xs text-text-gray ">{country}</p>
        <h2 className="capitalize text-2xl font-semibold">{city}</h2>
        <h3 className="capitalize mt-2 text-xs font-semibold">{currently}</h3>
      </div>
      <div className="flex flex-col items-center">
        <img src={cityImg} alt="" className="w-[70px]" />
        <h2 className="text-2xl">
          {degrees}
          <sup>°</sup>
        </h2>
      </div>
    </div>
  );
};

export default PopularCity;

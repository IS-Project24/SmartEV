// import "./DisplayCard.css";

const DisplayCard = ({name,description, timestamp}) => {


  return (
    <div className="display-card" style={{ marginBottom: "1vh" }}>
      <div className="block max-w-full p-6 bg-white border border-gray-200 rounded-2xl shadow ">
        <h5
          className="font-bold tracking-tight text-gray-900"
          style={{ fontSize: "2vh" }}
        >
          {name}
        </h5>

        <p
          className="font-normal text-gray-700 dark:text-gray-400 mb-2 "
          style={{ fontSize: "1.5vh" }}
        >
          {/* {timestamp} */}
          {description}
        </p>
        <p
          className="font-normal text-gray-700 dark:text-gray-400"
          style={{ fontSize: "1.5vh" }}
        >
          {timestamp}
        </p>
      </div>
    </div>
  );
};
export default DisplayCard;

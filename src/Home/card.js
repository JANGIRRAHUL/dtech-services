const Card = ({prop}) => {
    const {name} = prop
  return (
    <div
      className="card m-5 shadow"
      style={{ width: "20rem" }}
    >
      <img
        src="https://res.cloudinary.com/dg4htpr73/image/upload/v1695880590/Dtech_Services_cnqugr.jpg"
        class="card-img-top"
        alt="image"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.{name}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;

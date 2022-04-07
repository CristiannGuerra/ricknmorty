const Character = ({ item }) => {
  const { name, image } = item;

  return (
    <div className="col-md-2 mb-2">
      <div className="card">
        <img src={image} alt={`imagen ${name}`} className="card-img-top" />
        <div className="card-body">
          <h5> {name} </h5>
        </div>
      </div>
    </div>
  );
};

export default Character;

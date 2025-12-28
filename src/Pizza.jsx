const Pizza = (props) => {
  return (
    <div
      className="pizza"
      onClick={() => {
        console.log("Hi");
      }}
    >
      <h1>{props.name}</h1>
      <h1>{props.description}</h1>
      <img src={props.image} alt={props.name} />
    </div>
  );
};
export default Pizza;

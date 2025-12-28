const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <h1>{props.description}</h1>
    </div>
  );
};
export default Pizza;

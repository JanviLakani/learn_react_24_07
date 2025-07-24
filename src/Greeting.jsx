function Greeting(props) {
  return (
    <>
      <h2>Hello, Good Morning {props.name} </h2>
      <h2>count {props.count} </h2>
      <button onClick={() => props.update(55)}>click</button>
    </>
  );
}

export default Greeting;

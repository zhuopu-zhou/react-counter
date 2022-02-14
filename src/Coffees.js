import react, { useState, useEffect } from "react";

function Coffees() {
  const [coffeeList, setCoffeeList] = useState();
  const [temperature, setTemperature] = useState("hot");
  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoffeeList(data);
      })
      .catch((err) => console.error(err));
  }, [temperature]);
  return (
    <div>
      <h1>Coffee Recipes</h1>
      <button onClick={() => setTemperature("hot")}>Hot</button>
      <button onClick={() => setTemperature("iced")}>Iced</button>

      {coffeeList ? (
        <ol>
          {coffeeList.map((coffee) => {
            return <li key={coffee.id}>{coffee.title}</li>;
          })}
        </ol>
      ) : (
        <h2>Recipes goes here ...</h2>
      )}
    </div>
  );
}

export default Coffees;

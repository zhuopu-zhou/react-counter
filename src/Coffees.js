import react, { useState, useEffect } from "react";

function Coffees() {
  const [coffeeList, setCoffeeList] = useState();
  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) => setCoffeeList(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h1>Coffees</h1>
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

export default function Plant({ plant, addToCart }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </li>
  );
}
import Plant from "./Plant";

import "./plants.css";

export default function Plants({ plants, addToCart }) {
  return (
    <section className="plants">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </section>
  );
}
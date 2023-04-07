import { useState } from "react";

export default function Card({ motto, notes, id, entries }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (object) => {
    if (object.favorite) {
      object.favorite = false;
    } else {
      object.favorite = true;
    }
  };

  const handleClick = (event) => {
    const { id } = event.target;
    toggleFavorite(entries.find((entry) => entry.id === id));
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <section className="card">
      <h1 className="date">Today</h1>
      <button
        type="button"
        className="favorite-button"
        id={id}
        onClick={handleClick}
      >
        Favorite
      </button>
      <section className="motto">{motto}</section>
      <section className="notes">{notes}</section>
    </section>
  );
}

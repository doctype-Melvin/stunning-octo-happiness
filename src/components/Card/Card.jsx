import { useState } from "react";

export default function Card({ motto, notes, id, entries, setEntries }) {
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
    let updateThis = entries.slice();
    toggleFavorite(updateThis.find((entry) => entry.id === id));
    setIsFavorite((prevState) => !prevState);
    localStorage.setItem("entries", JSON.stringify(updateThis));
    setEntries(updateThis);
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

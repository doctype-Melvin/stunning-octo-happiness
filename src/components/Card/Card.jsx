// Component manages card state
import { useState } from "react";
import Form from "../Form/Form";

export default function Card({ motto, notes, id, entries, setEntries }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editEntry, setEditEntry] = useState("");

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

  const handleEdit = (event) => {
    const { id } = event.target;
    let updateThis = entries.slice();
    let editThis = updateThis.find((entry) => entry.id === id);
    setEditEntry(editThis);
    setIsEdit((prevState) => !prevState);
  };

  return (
    <section className="card">
      {!isEdit ? (
        <>
          <h1 className="date">Today</h1>
          <button
            type="button"
            className="favorite-button"
            id={id}
            onClick={handleClick}
          >
            Favorite
          </button>
          <button
            type="button"
            className="edit-button"
            id={id}
            onClick={handleEdit}
          >
            Edit
          </button>
          <section className="motto">{motto}</section>
          <section className="notes">{notes}</section>
        </>
      ) : (
        <Form
          editEntry={editEntry}
          setEditEntry={setEditEntry}
          isEdit={isEdit}
        />
      )}
    </section>
  );
}

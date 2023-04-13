// Component manages card state
import { useState } from "react";
import Form from "../Form/Form";

export default function Card({
  motto,
  notes,
  id,
  entries,
  setEntries,
  setNewEntry,
  date,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editEntry, setEditEntry] = useState("");

  const handleClick = (event) => {
    const { id } = event.target;

    // toggleFavorite(updateThis.find((entry) => entry.id === id));
    let updateThis = entries.map((entry) =>
      entry.id === id ? { ...entry, favorite: !entry.favorite } : entry
    );
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

  const handleDelete = (event) => {
    const { id } = event.target;
    let updateThis = entries.slice().filter((entry) => entry.id !== id);
    localStorage.setItem("entries", JSON.stringify(updateThis));
    setEntries(updateThis);
  };

  return (
    <section className="card">
      {!isEdit ? (
        <>
          <h3 className="date">{date}</h3>
          <div className="card__header">
            <section className="motto">
              {'"'}
              {motto}
              {'"'}
            </section>
            <section className="card__buttons">
              {/* More flexible option: render SVGs from component */}
              <img
                src={isFavorite ? "/star-filled.svg" : "/star.svg"}
                alt="favorite__button"
                onClick={handleClick}
                id={id}
                className="favorite-button"
              />
              <button
                type="button"
                className="edit-button"
                id={id}
                onClick={handleEdit}
              >
                📝
              </button>
              <button
                type="button"
                className="delete-button"
                id={id}
                onClick={handleDelete}
              >
                ❌
              </button>
            </section>
          </div>
          <section className="notes">{notes}</section>
        </>
      ) : (
        <Form
          editEntry={editEntry}
          setEditEntry={setEditEntry}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          setNewEntry={setNewEntry}
        />
      )}
    </section>
  );
}

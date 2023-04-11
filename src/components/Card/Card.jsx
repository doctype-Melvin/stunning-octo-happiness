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

  const handleDelete = (event) => {
    const { id } = event.target;
    let updateThis = entries.slice();
    let deleteThisIndex = updateThis.findIndex((entry) => entry.id === id);
    updateThis.splice(deleteThisIndex, 1);
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
                src={
                  isFavorite
                    ? "../../resources/star-filled.svg"
                    : "../../resources/star.svg"
                }
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

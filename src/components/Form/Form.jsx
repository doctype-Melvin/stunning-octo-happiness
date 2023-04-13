// Creates new content objects

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function Form(props) {
  const { setNewEntry, isEdit, editEntry, setIsEdit } = props;
  const [formInput, setFormInput] = useState({ motto: "", notes: "" });
  const [editObject, setEditObject] = useState("");

  useEffect(() => {
    if (isEdit) {
      setEditObject(editEntry);
    }
  });

  // Submit this to local storage
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setFormInput(Object.fromEntries(formData));

    setNewEntry({
      ...formInput,
      id: nanoid(),
      favorite: false,
      date: new Date()
        .toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
        .toUpperCase(),
    });
    event.target.reset();
  };
  // Sets new data for edited entry
  const handleEdit = (event) => {
    event.preventDefault();

    setNewEntry({
      ...editObject,
      motto: formInput.motto || editObject.motto,
      notes: formInput.notes || editObject.notes,
    });
    setIsEdit((prevState) => !prevState);

    event.target.reset();
  };

  return (
    <>
      {!isEdit ? (
        <form onSubmit={handleSubmit}>
          <h2>NEW ENTRY</h2>
          <label htmlFor="motto">Motto</label>
          <input
            type="text"
            name="motto"
            id="motto"
            onChange={(event) =>
              setFormInput({ ...formInput, motto: event.target.value })
            }
            autoComplete="off"
            required
          />
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="3"
            onChange={(event) =>
              setFormInput({ ...formInput, notes: event.target.value })
            }
            required
          ></textarea>
          <button type="submit" className="create__button">
            Create
          </button>
        </form>
      ) : (
        <form onSubmit={handleEdit}>
          <h2>Edit entry</h2>
          <label htmlFor="motto">MOTTO</label>
          <input
            type="text"
            name="motto"
            id="motto"
            onChange={(event) =>
              setFormInput({ ...formInput, motto: event.target.value })
            }
            autoComplete="off"
            defaultValue={editObject.motto}
          ></input>
          <label htmlFor="notes">NOTES</label>
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="4"
            onChange={(event) =>
              setFormInput({ ...formInput, notes: event.target.value })
            }
            defaultValue={editObject.notes}
          ></textarea>
          <button type="submit" className="save__edit__button">
            Save
          </button>
        </form>
      )}
    </>
  );
}

// Creates new content objects

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function Form(props) {
  const { setNewEntry, isEdit, editEntry, setIsEdit } = props;
  const [motto, setMotto] = useState("");
  const [notes, setNotes] = useState("");
  const [editObject, setEditObject] = useState("");

  useEffect(() => {
    if (isEdit) {
      setEditObject(editEntry);
    }
  });

  // Submit this to local storage
  const handleSubmit = (event) => {
    event.preventDefault();
    if (motto && notes) {
      setNewEntry({
        motto,
        notes,
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
    }
    setMotto("");
    setNotes("");
  };
  // Sets new data for edited entry
  const handleEdit = (event) => {
    event.preventDefault();
    editEntry.motto = motto ? motto : editObject.motto;
    editEntry.notes = notes ? notes : editObject.notes;
    setNewEntry({
      ...editEntry,
    });
    setIsEdit((prevState) => !prevState);
    setMotto("");
    setNotes("");
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
            onChange={(event) => setMotto(event.target.value)}
            value={motto}
          />
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="3"
            onChange={(event) => setNotes(event.target.value)}
            value={notes}
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
            onChange={(event) => setMotto(event.target.value)}
            defaultValue={editObject.motto}
          ></input>
          <label htmlFor="notes">NOTES</label>
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="4"
            onChange={(event) => setNotes(event.target.value)}
            defaultValue={editObject.notes}
          ></textarea>
          <button type="submit">Save</button>
        </form>
      )}
    </>
  );
}

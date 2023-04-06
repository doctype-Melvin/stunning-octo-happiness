import { nanoid } from "nanoid";
import { useState } from "react";

export default function Form(props) {
  const { setNewEntry } = props;
  const [motto, setMotto] = useState("");
  const [notes, setNotes] = useState("");

  // Submit this to local storage
  const handleSubmit = (event) => {
    event.preventDefault();
    setNewEntry({
      motto,
      notes,
      id: nanoid(),
      favorite: false,
    });
    setMotto("");
    setNotes("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>NEW ENTRY</h2>
      <label htmlFor="motto">MOTTO</label>
      <input
        type="text"
        name="motto"
        id="motto"
        onChange={(event) => setMotto(event.target.value)}
        value={motto}
      />
      <label htmlFor="notes">NOTES</label>
      <textarea
        name="notes"
        id="notes"
        cols="30"
        rows="3"
        onChange={(event) => setNotes(event.target.value)}
        value={notes}
      ></textarea>
      <button type="submit">Create</button>
    </form>
  );
}

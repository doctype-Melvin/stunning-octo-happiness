import { useState } from "react";

export default function Form() {
  const [entryObject, setEntryObject] = useState({
    motto: "",
    notes: "",
  });

  const handleChange = (event) => console.log(event.target.value);

  return (
    <>
      <h2>NEW ENTRY</h2>
      <label htmlFor="motto">MOTTO</label>
      <input type="text" name="motto" id="motto" onChange={handleChange} />
      <label htmlFor="notes">NOTES</label>
      <textarea
        name="notes"
        id="notes"
        cols="30"
        rows="3"
        onChange={handleChange}
      ></textarea>
      <button type="button">Create</button>
    </>
  );
}

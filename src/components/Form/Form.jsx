import { nanoid } from "nanoid";
import { useState } from "react";

export default function Form() {
  const [entryObject, setEntryObject] = useState({
    motto: "",
    notes: "",
    id: nanoid(),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEntryObject((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // Submit this to local storage
  const handleCreateClick = () => console.log(entryObject);

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
      <button type="button" onClick={handleCreateClick}>
        Create
      </button>
    </>
  );
}

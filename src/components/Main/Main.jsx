import { useEffect, useState } from "react";
import Entries from "../Entries/Entries";
import Form from "../Form/Form";

// localStorage.clear();
export default function Main() {
  const [newEntry, setNewEntry] = useState("");
  const [allEntries, setAllEntries] = useState(0);
  const [favorites, setFavorites] = useState("");

  useEffect(() => {
    setAllEntries(JSON.parse(localStorage.getItem("journal")).length);
    if (!localStorage.getItem("journal")) {
      localStorage.setItem("journal", JSON.stringify([]));
    } else if (newEntry) {
      let currentData = JSON.parse(localStorage.getItem("journal"));
      let updatedData = [...currentData, newEntry];
      localStorage.setItem("journal", JSON.stringify(updatedData));
      setAllEntries(JSON.parse(localStorage.getItem("journal")).length);
    }
  }, [newEntry]);

  // Filter and render favorites
  useEffect(() => {
    let currentData = JSON.parse(localStorage.getItem("journal"));
    /*
    filter the local storage array by favorite properties
    set the favorites state
    pass the length to Entries component
    */
    console.log(currentData);
  });

  return (
    <div>
      <Form newEntry={newEntry} setNewEntry={setNewEntry} />
      <Entries total={allEntries}></Entries>
    </div>
  );
}

import { useEffect, useState } from "react";
import Entries from "../Entries/Entries";
import Form from "../Form/Form";
import Card from "../Card/Card";

// localStorage.clear();
export default function Main() {
  const [newEntry, setNewEntry] = useState("");
  const [allEntries, setAllEntries] = useState(0);
  const [favorites, setFavorites] = useState(0);
  const [entriesArray, setEntriesArray] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("journal")) {
      let dataOnRender = JSON.parse(localStorage.getItem("journal"));
      setAllEntries(dataOnRender.length);
      setFavorites(
        dataOnRender.filter((entry) => entry.favorite === true).length
      );
      setEntriesArray(dataOnRender);
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("journal")) {
      localStorage.setItem("journal", JSON.stringify([]));
    } else if (newEntry) {
      let currentData = JSON.parse(localStorage.getItem("journal"));
      let updatedData = [...currentData, newEntry];
      localStorage.setItem("journal", JSON.stringify(updatedData));
      setAllEntries(JSON.parse(localStorage.getItem("journal")).length);
      setFavorites(
        updatedData.filter((entry) => entry.favorite === true).length
      );
      setEntriesArray(updatedData);
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
  });

  return (
    <div>
      <Form newEntry={newEntry} setNewEntry={setNewEntry} />
      <Entries total={allEntries} favorites={favorites}>
        <button
          type="button"
          onClick={() => {
            localStorage.clear();
            localStorage.setItem("journal", JSON.stringify([]));
            setAllEntries(0);
            setNewEntry("");
          }}
        >
          Delete All
        </button>
        {entriesArray.map((entry) => (
          <Card motto={entry.motto} notes={entry.notes} key={entry.id} />
        ))}
      </Entries>
    </div>
  );
}

import { useEffect, useState } from "react";
import Controls from "../Controls/Controls";
import Form from "../Form/Form";
import Card from "../Card/Card";
import Rendering from "../Rendering/Rendering";

// localStorage.clear();
export default function Main() {
  const [newEntry, setNewEntry] = useState("");
  const [entries, setEntries] = useState([]);
  let currentData = JSON.parse(localStorage.getItem("entries"));

  useEffect(() => {
    if (currentData && newEntry) {
      // If there's a dupe, replace it
      if (currentData.some((entry) => entry.id === newEntry.id)) {
        let duplicateIndex = currentData
          .slice()
          .findIndex((entry) => entry.id === newEntry.id);
        currentData.splice(duplicateIndex, 1, newEntry);
        setEntries(currentData);
        localStorage.setItem("entries", JSON.stringify(currentData));
        setNewEntry("");
      } else {
        // Happy path: Just add new entry
        let freshEntries = [...currentData, newEntry];
        setEntries(freshEntries);
        localStorage.setItem("entries", JSON.stringify(freshEntries));
        setNewEntry("");
      }
    }
  }, [newEntry]);

  useEffect(() => {
    // First render: Check if localStorage has item
    const storedEntries = JSON.parse(localStorage.getItem("entries"));
    if (storedEntries) {
      // Sets entries data from localStorage
      setEntries(storedEntries);
    } else {
      // Sets new entries array
      localStorage.setItem("entries", "[]");
    }
  }, []);

  return (
    <div>
      <Form newEntry={newEntry} setNewEntry={setNewEntry} />
      <Controls
        setEntries={setEntries}
        total={entries.length}
        favorites={entries.filter((entry) => entry.favorite === true).length}
      />
      <Rendering>
        {entries.map((entry) => (
          <Card
            motto={entry.motto}
            notes={entry.notes}
            key={entry.id}
            id={entry.id}
            entries={entries}
            setEntries={setEntries}
            setNewEntry={setNewEntry}
          />
        ))}
      </Rendering>
    </div>
  );
}

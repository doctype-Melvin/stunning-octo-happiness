import { useEffect, useState } from "react";
import Entries from "../Entries/Entries";
import Form from "../Form/Form";
import Card from "../Card/Card";
import Rendering from "../Rendering/Rendering";

// localStorage.clear();
export default function Main() {
  const [newEntry, setNewEntry] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("entries")) && newEntry) {
      let freshEntries = [
        ...JSON.parse(localStorage.getItem("entries")),
        newEntry,
      ];
      setEntries(freshEntries);
      localStorage.setItem("entries", JSON.stringify(freshEntries));
      setNewEntry("");
    }
  }, [newEntry]);

  useEffect(() => {
    console.log(entries.length);
  }, [entries]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("entries"));
    if (storedEntries) {
      setEntries(storedEntries);
    } else {
      localStorage.setItem("entries", "[]");
    }
  }, []);

  return (
    <div>
      <Form newEntry={newEntry} setNewEntry={setNewEntry} />
      <Entries
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
          />
        ))}
      </Rendering>
    </div>
  );
}

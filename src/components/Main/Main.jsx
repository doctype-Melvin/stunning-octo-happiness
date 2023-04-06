import { useEffect, useState } from "react";
import Entries from "../Entries/Entries";
import Form from "../Form/Form";
import Card from "../Card/Card";

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
      <Entries>
        <button
          type="button"
          onClick={() => {
            localStorage.clear();
            localStorage.setItem("entries", "[]");
          }}
        >
          Delete All
        </button>
        {entries.map((entry) => (
          <Card motto={entry.motto} notes={entry.notes} key={entry.id} />
        ))}
      </Entries>
    </div>
  );
}

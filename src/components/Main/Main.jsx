import { useEffect, useState } from "react";
import Entries from "../Entries/Entries";
import Form from "../Form/Form";

// localStorage.clear();
export default function Main() {
  const [newEntry, setNewEntry] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("journal")) {
      localStorage.setItem("journal", JSON.stringify([]));
    } else if (newEntry) {
      let currentData = JSON.parse(localStorage.getItem("journal"));
      let updatedData = [...currentData, newEntry];
      localStorage.setItem("journal", JSON.stringify(updatedData));
    }
  }, [newEntry]);

  // useEffect(() => {
  //   let currentData = JSON.parse(localStorage.getItem("journal"));
  //   let updatedData = [...currentData, newEntry];
  //   localStorage.setItem("journal", JSON.stringify(updatedData));
  // });

  return (
    <div>
      <Form newEntry={newEntry} setNewEntry={setNewEntry} />
      <Entries />
    </div>
  );
}

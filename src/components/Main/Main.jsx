import { useEffect, useState } from "react";
import Entries from "../Entries/Entries";
import Form from "../Form/Form";

export default function Main() {
  const [newEntry, setNewEntry] = useState([]);

  useEffect(() => {
    if (localStorage.length < 1) {
      localStorage.setItem("journal", JSON.stringify(newEntry));
    } else {
      let storageData = JSON.parse(localStorage.getItem("journal"));

      console.log(localStorage);
    }
  }, [newEntry]);

  return (
    <div>
      <Form newEntry={newEntry} setNewEntry={setNewEntry} />
      <Entries />
    </div>
  );
}

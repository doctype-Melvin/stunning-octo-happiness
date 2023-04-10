export default function Popup({ setDeleteAll, setEntries }) {
  return (
    <>
      <section className="confirm__popup">
        Do you want to delete all entries?
        <button
          type="button"
          className="cancel__button__popup"
          onClick={() => setDeleteAll((prevState) => !prevState)}
        >
          Cancel
        </button>
        <button
          type="button"
          className="confirm__button__popup"
          onClick={() => {
            // Goes into confirmation popup
            localStorage.clear();
            localStorage.setItem("entries", "[]");
            setEntries([]);
            setDeleteAll((prevState) => !prevState);
          }}
        >
          Yes
        </button>
      </section>
    </>
  );
}

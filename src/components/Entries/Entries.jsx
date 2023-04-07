// Component renders number of entries, favorites and delete all button

export default function Entries({ total, favorites, setEntries }) {
  return (
    <>
      <div className="entries-info-box">
        <span>
          All Entries <span className="counter-all-entries">{total}</span>
        </span>
        <span>
          Favorites
          <span className="counter-favorite-entries">{favorites}</span>
        </span>
        <button
          type="button"
          onClick={() => {
            localStorage.clear();
            localStorage.setItem("entries", "[]");
            setEntries([]);
          }}
        >
          Delete All
        </button>
      </div>
    </>
  );
}

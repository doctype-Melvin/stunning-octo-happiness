// Component renders number of entries, favorites and delete all button

export default function Controls({ total, favorites, setEntries, setFilter }) {
  const handleShowFavorites = () => {
    setFilter(true);
  };

  const handleShowAll = () => {
    setFilter(false);
  };

  return (
    <>
      <div className="entries-info-box">
        <span className="all__entries" onClick={handleShowAll}>
          All Entries <span className="counter__all__entries">{total}</span>
        </span>
        <span className="favorite__entries" onClick={handleShowFavorites}>
          Favorites
          <span className="counter__favorite__entries">{favorites}</span>
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

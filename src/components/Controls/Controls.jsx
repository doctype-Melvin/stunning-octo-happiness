// Component renders number of entries, favorites and delete all button

export default function Controls({
  total,
  favorites,
  setEntries,
  setFilter,
  filter,
}) {
  const handleShowFavorites = () => {
    setFilter(true);
  };

  const handleShowAll = () => {
    setFilter(false);
  };

  return (
    <>
      <div className="entries-info-box">
        {/* !filter all__entries is orange : favorite__entries is orange */}
        <span className="all__entries" onClick={handleShowAll}>
          All Entries <span className="counter__all__entries">{total}</span>
        </span>
        <span className="favorite__entries" onClick={handleShowFavorites}>
          Favorites
          <span className="counter__favorite__entries">{favorites}</span>
        </span>

        {/* Delete all should display a confirmation popup */}
        <button
          type="button"
          onClick={() => {
            // Goes into confirmation popup
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

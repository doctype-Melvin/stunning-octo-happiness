import Popup from "../Popup/Popup";

// Component renders number of entries, favorites and delete all button

export default function Controls({
  setEntries,
  setFilter,
  filter,
  deleteAll,
  setDeleteAll,
  entries,
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
        <span
          className={!filter ? "all__entries--active" : "all__entries"}
          onClick={handleShowAll}
        >
          All Entries{" "}
          <span
            className={
              !filter
                ? "counter__all__entries--active"
                : "counter__all__entries"
            }
          >
            {entries.length}
          </span>
        </span>
        <span
          className={
            !filter ? "favorite__entries" : "favorite__entries--active"
          }
          onClick={handleShowFavorites}
        >
          Favorites{" "}
          <span
            className={
              !filter
                ? "counter__favorite__entries"
                : "counter__favorite__entries--active"
            }
          >
            {entries.filter((entry) => entry.favorite === true).length}
          </span>
        </span>

        {/* Delete all should display a confirmation popup */}
        {deleteAll ? (
          <Popup setDeleteAll={setDeleteAll} setEntries={setEntries} />
        ) : undefined}
        <button
          type="button"
          className="delete__all__button"
          onClick={() => {
            setDeleteAll((prevState) => !prevState);
          }}
        >
          Delete All
        </button>
      </div>
    </>
  );
}

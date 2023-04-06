export default function Entries({ children, total, favorites }) {
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
        <div className="entries-rendering">{children}</div>
      </div>
    </>
  );
}

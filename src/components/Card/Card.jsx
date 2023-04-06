export default function Card({ motto, notes }) {
  return (
    <section className="card">
      <h1 className="date">Today</h1>
      <button type="button" className="favorite-button">
        Favorite
      </button>
      <section className="motto">{motto}</section>
      <section className="notes">{notes}</section>
    </section>
  );
}

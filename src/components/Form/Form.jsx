export default function Form() {
  return (
    <>
      <h2>NEW ENTRY</h2>
      <label htmlFor="motto">MOTTO</label>
      <input type="text" name="motto" id="motto" />
      <label htmlFor="notes">NOTES</label>
      <textarea name="notes" id="notes" cols="30" rows="3"></textarea>
      <button type="button">Create</button>
    </>
  );
}

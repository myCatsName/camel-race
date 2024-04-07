export default function MenuButton({ content, id, onClick }) {
  return (
    <button id={id} className="menu-button" type="button" onClick={onClick}>
      {content}
    </button>
  );
}

export default function MenuButton({ children, content, id, onClick }) {
  return (
    <button id={id} className="menu-button" type="button" onClick={onClick}>
      {content}
      {children}
    </button>
  );
}

import MenuIcon from "../assets/menuicon.svg";
import Cross from "../assets/cross.svg";
export default function NavbarToggleButton({ isOpen, onToggle }) {
  const handleClick = () => {
    onToggle(!isOpen);
  };

  return (
    <button className="flex items-center p-2" onClick={handleClick}>
      {isOpen ? <Cross /> : <MenuIcon />}
    </button>
  );
}

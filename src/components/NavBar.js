import { Link } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';

function NavBar() {
  return (
    <nav className="Nav-bar flex blue">
      <div className="Links flex">
        <h1>Bookstore CMS</h1>
        <ul className="flex">
          <li><Link to="/">BOOKS</Link></li>
          <li><Link to="/categories">CATEGORIES</Link></li>
        </ul>
      </div>
      <div className="profile flex blue"><BsPersonFill /></div>
    </nav>
  );
}

export default NavBar;

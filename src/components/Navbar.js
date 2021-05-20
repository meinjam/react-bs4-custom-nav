import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className='navigation py-3'>
      <div className='container'>
        <Link to='/' className='nav-brand' onClick={() => setShowMenu(false)}>
          <h2 className='mb-0'>AmarLab</h2>
        </Link>
        <ul className={showMenu ? 'menus active' : 'menus'}>
          <li>
            <Link to='/' onClick={handleMenuClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={handleMenuClick}>
              About
            </Link>
          </li>
          <li>
            <Link to='/service' onClick={handleMenuClick}>
              Services
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={handleMenuClick}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={showMenu ? 'toggle-button open' : 'toggle-button'}>
          {/* {showMenu ? (
            <BsX onClick={handleMenuClick} />
          ) : (
            <BsList onClick={handleMenuClick} />
          )} */}
          <div className='menu-btn' onClick={handleMenuClick}></div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

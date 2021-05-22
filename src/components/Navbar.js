import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';
import { useGlobalContext } from '../contexts/GlobalState';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { tests } = useGlobalContext();

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const addZero = (items) => {
    if (items < 10) {
      return `0${items}`;
    } else {
      return items;
    }
  };

  return (
    <section className='navigation'>
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
            <Link to='/items' onClick={handleMenuClick}>
              Items
            </Link>
          </li>
          <li>
            <Link to='/cart' onClick={handleMenuClick}>
              Cart
            </Link>
          </li>
          <li className='cart cart-button'>
            <CgShoppingCart style={{ fontSize: '20px' }} />(
            {addZero(tests.length)})
            <div className='cart-dropdown'>Cart dropdown content</div>
          </li>
        </ul>
        <div className={showMenu ? 'toggle-button open' : 'toggle-button'}>
          <div className='cart mr-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-shopping-cart'
              width={25}
              height={25}
              viewBox='0 0 24 24'
              strokeWidth='1.6'
              stroke='#2c3e50'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <circle cx={6} cy={19} r={2} />
              <circle cx={17} cy={19} r={2} />
              <path d='M17 17h-11v-14h-2' />
              <path d='M6 5l14 1l-1 7h-13' />
            </svg>
            ( {addZero(tests.length)})
          </div>
          <div className='menu-btn' onClick={handleMenuClick}></div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

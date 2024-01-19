import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector(state => state.cart.products)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className='link' to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3">Kids</Link>
          </div>
        </div>
        <div className="logo">
          <Link className='link' to='/'>
          <img src="/images/logo.png" alt="" width={170} height={120} />
          </Link>
        </div>
        <div className="right">
          <div className="center">
            <Link className='link' to='/'>Homepage</Link>
          </div>
          <div className="center">
            <Link className='link' to='/about'>About</Link>
          </div>
          <div className="center">
            <Link className='link' to='/contact'>Contact</Link>
          </div>
          <div className="center">
            <Link className='link' to='/stores'>Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar
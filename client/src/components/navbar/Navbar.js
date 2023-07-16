import { ExpandMoreSharp, FavoriteBorderOutlined, PersonOutlineOutlined, Search, ShoppingCart} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img src="/images/india.png" alt="flag" />
                    <ExpandMoreSharp/>
                </div>
                <div className="item">
                    <span>USD</span>
                    <ExpandMoreSharp/>
                </div>
                <div className="item">
                    <Link to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link to="/products/2">Men</Link>
                </div>
                <div className="item">
                    <Link to="/products/3">Children</Link>
                </div>
            </div>
            <div className="center">
                <Link>E-commerce app</Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link to="/">Homepage</Link>
                </div>
                <div className="item">
                    <Link to="/">About</Link>
                </div>
                <div className="item">
                    <Link to="/">Contact</Link>
                </div>
                <div className="item">
                    <Link to="/">Stores</Link>
                </div>
                <div className="icons">
                    <Search/>
                    <PersonOutlineOutlined/>
                    <FavoriteBorderOutlined/>
                </div>
                <div className="cart-icon">
                    <ShoppingCart/>
                    <span>0</span>
                </div>
            </div>
        </div>
    </div>
  )
}

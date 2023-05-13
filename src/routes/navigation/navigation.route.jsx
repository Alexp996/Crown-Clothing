import { Outlet,Link } from "react-router-dom";
import './navigation.styles.scss'
import crown from '../../assets/crown.svg'

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <img src={crown} alt="a crown logo" />
          </div>
        </Link>
        
        <div className="nav-links-container">
          <Link to="shop" className="nav-link">
            Shop
          </Link>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="sign-in" className="nav-link">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet/>
    </> 
  )
}

export default Navigation;
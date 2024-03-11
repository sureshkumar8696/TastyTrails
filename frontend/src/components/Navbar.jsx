import { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
// import { Link as RouterLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  return (
    <>
      <nav>
        <div className="logo">TastyTrails</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          {!isAuthenticated ? (
            <button className="menuBtn" onClick={loginWithRedirect}>
              Login
            </button>
          ) : (
            <ProfileMenu user={user} logout={logout} />
          )}
        </div>

        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

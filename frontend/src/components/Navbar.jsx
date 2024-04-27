import { useState, useEffect } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [timerId, setTimerId] = useState(null);

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const handleUsernameClick = () => {
    setShow(!show);
    setShowLogout(true);

    if (showLogout) {
      clearTimeout(timerId);
    }

    setTimerId(
      setTimeout(() => {
        setShowLogout(false);
      }, 3000)
    );
  };

  const handleLogoutClick = () => {
    logout({ returnTo: window.location.origin });
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerId);
    };
  }, [timerId]);

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
          {isAuthenticated ? (
            <div className="user-info">
              <div className="dropdown">
                <span className="username" onClick={handleUsernameClick}>
                  {user.name}
                </span>
                {showLogout && (
                  <div className="dropdown-content">
                    <button className="menuBtn" onClick={handleLogoutClick}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <button className="menuBtn" onClick={loginWithRedirect}>
              Login
            </button>
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

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import Logo from "../../assets/TOYCraze.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  // sing out
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <Navbar fluid={true} rounded={true} className="py-4 bg-slate-100 sm:px-0 px-0">
      <Navbar.Brand>
        <img src={Logo} alt="toycraze Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <>
            <img
              src={user.photoURL}
              title={user.displayName}
              alt=""
              className="w-10 h-10 rounded-full mr-2 "
            />
            <Link onClick={handleSignOut}>
              <Button className="md:font-semibold md:text-base">Log Out</Button>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <Button className="md:font-semibold md:text-base">Login</Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="font-semibold">
        <Link className="md:font-semibold md:text-base" to="/">
          Home
        </Link>
        <Link className="md:font-semibold md:text-base" to="/blog">
          Blog
        </Link>
        <Link className="md:font-semibold md:text-base" to="/alltoy">
          All Toys
        </Link>
        <Link className="md:font-semibold md:text-base" to="/addtoy">
          Add Toy
        </Link>
        <Link className="md:font-semibold md:text-base" to="/mytoy">
          My Toy
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

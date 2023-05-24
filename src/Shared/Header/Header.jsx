import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import Logo from "../../assets/TOYCraze.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  // console.log(user);
  // sing out
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="py-4 bg-slate-100 sm:px-0 px-0"
    >
      <Navbar.Brand>
        <img src={Logo} alt="toycraze Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <div className="flex items-center">
            <img
              src={user.photoURL}
              title={user.displayName}
              alt=""
              className="w-10 h-10 rounded-full mr-4 "
            />
            <Link onClick={handleSignOut}>
              <Button className="md:font-semibold md:text-base my-2">
                Log Out
              </Button>
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <Button className="md:font-semibold md:text-base my-2">
              Login
            </Button>
          </Link>
        )}
        <Navbar.Toggle className="ml-2" />
      </div>
      <Navbar.Collapse className="font-semibold">
        <Link className="md:font-semibold md:text-base my-2" to="/">
          Home
        </Link>
        <Link className="md:font-semibold md:text-base my-2" to="/alltoys">
          All Toys
        </Link>
        {user ? (
          <>
            <Link className="md:font-semibold md:text-base my-2" to="/mytoys">
              My Toys
            </Link>
            <Link className="md:font-semibold md:text-base my-2" to="/addtoy">
              Add A Toy
            </Link>
          </>
        ) : (
          ""
        )}
        <Link className="md:font-semibold md:text-base my-2" to="/blogs">
          Blogs
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

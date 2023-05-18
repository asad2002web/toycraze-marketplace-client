import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import Logo from "../../assets/TOYCraze.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true} className="py-4 sm:px-0 px-0">
      <Navbar.Brand>
        <img src={Logo} alt="toycraze Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="font-semibold">
        <Link className="md:font-semibold md:text-base" to="/">
          Home
        </Link>
        <Link className="md:font-semibold md:text-base" to="/blog">
          Blog
        </Link>
        <Link className="md:font-semibold md:text-base" to="/login">
          Login
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

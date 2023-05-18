import { Button, Label, TextInput } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import React from "react";

const Login = () => {
  return (
    <div className="md:flex items-center gap-6">
      <div className="md:w-1/2">
        <img src="https://i.ibb.co/cNNcd3w/Login-page-min.jpg" alt="" />
      </div>
      <div className="md:w-1/2">
        <div>
          <h2 className="text-2xl font-semibold my-5 text-center">Login</h2>
        </div>
        <div>
          <form className="w-full">
            <div className="mt-8">
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                className="w-full"
                id="email1"
                type="email"
                placeholder="Type Your Email"
                required={true}
              />
            </div>
            <div className="mt-8">
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" required={true} />
            </div>
            <Button className="mt-5 w-full" type="submit">
              Login
            </Button>
          </form>
        </div>
        <div>
          <Button className="block mx-auto mt-8" color="purple" pill={true}>
            <FaGoogle className="mr-3"></FaGoogle>
            Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { Button, Label, TextInput } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password) //Test purpus
        console.log("Test working now...") //Test purpus
    }

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
          <form onSubmit={handleLogin} className="w-full">
            <div className="mt-8">
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                className="w-full"
                id="email1"
                type="email"
                name="email"
                placeholder="Type Your Email"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" placeholder="Your Password" name="password" required={true} />
            </div>
            <Button className="mt-5 w-full" type="submit">
              Login
            </Button>
          </form>
          <p className="text-center my-6">
            <Link to='/register'>Do you want Register ?</Link>
          </p>

        </div>
        <div>
          <Button className="block mx-auto" color="purple" pill={true}>
            <FaGoogle className="mr-3"></FaGoogle>
            Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { Button, Label, TextInput } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { loginWithGoogle, logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Test working now..."); //Test purpus

    if (password.length < 6) {
      // setError("Password not vaild need 6 cheracters");
      return;
    }
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
       
        form.reset();
        navigate("/");
        // setSuccess("Login is successfully completed");
      })
      .catch((error) => {
        console.log(error.message);
        // setError(error.message);
      });
  };
  //   Login Google
  const handleGoogleSignUp = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedGoogle = result.user;
        console.log(loggedGoogle);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
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
              <TextInput
                id="password1"
                type="password"
                placeholder="Your Password"
                name="password"
                required={true}
              />
            </div>
            <Button className="mt-5 w-full" type="submit">
              Login
            </Button>
          </form>
          <p className="text-center my-6">
            <Link to="/register">Do you want Register ?</Link>
          </p>
        </div>
        <div>
          <Button
            onClick={handleGoogleSignUp}
            className="block mx-auto"
            color="purple"
            pill={true}
          >
            <FaGoogle className="mr-3"></FaGoogle>
            Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

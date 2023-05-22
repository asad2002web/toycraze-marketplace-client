import { Button, Label, TextInput } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { loginWithGoogle, createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;
    // console.log(name, email, password, photoUrl)

    if (password.length < 6) {
      return;
    }
    //  Create User Register
    createUser(email, password)
      .then(async (result) => {
        const loggedUser = result.user;
        await updateProfile(loggedUser, {
          displayName: name,
          photoURL: photoUrl,
        });
        console.log(loggedUser);
        form.reset();
        navigate("/");
        // setSuccess("Registration is successfully completed");
      })
      .catch((error) => {
        console.log(error);
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
        setError(error.message);
      });
  };
  return (
    <div className="md:flex flex-row-reverse items-center mt-6 gap-6">
      <div className="md:w-1/2 flex justify-center">
        <img src="https://i.ibb.co/QczdPFG/sign-up-05-min.jpg" alt="" />
      </div>
      <div className="md:w-1/2 md:mx-40">
        <div>
          <h2 className="text-2xl font-semibold my-5 text-center">Register</h2>
        </div>
        <div>
          <form onSubmit={handleRegister} className="w-full">
            <div className="mt-8">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Full Name" />
              </div>
              <TextInput
                className="w-full"
                id="name"
                type="text"
                name="name"
                placeholder="Type Your Full Name"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your Email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="Your Email"
                name="email"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                placeholder="Your password"
                name="password"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="photo" value="Your photo" />
              </div>
              <TextInput
                id="photo"
                type="text"
                placeholder="Your photo URL"
                name="photo"
                required={true}
              />
            </div>
            <Button className="mt-5 w-full" type="submit">
              Register
            </Button>
          </form>
          <p className="text-center my-6">
            <Link to="/login">Have your account ?</Link>
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

export default Register;

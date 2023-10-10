import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
   const { createUser, googleLogin, handleProfile } = useContext(AuthContext);
  const navigate = useNavigate()
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.img.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // createUser(email, password)

    createUser(email, password)
      .then(res => {
        handleProfile(name, image)
        .then(()=>{
         toast.success('Register Successfully')
         navigate('/')
        })
      })
      .catch(( ) =>  {
     toast.error('Password must be at least 6 characters')
      });
  };

  //  google login
  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("User Login successfully");
      })

         .catch((err) => {
           toast.error(err.message);
         });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <h1 className="text-4xl mt-4 text-center font-bold">Register Now</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <input
              type="text"
              placeholder="image url"
              className="input input-bordered"
              name="img"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your Password"
              name="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6 p-0">
            <button type="submit" className="btn  bg-pink-500">
              Register
            </button>
          </div>
          <label className="label">
            Already have an account?
            <Link to="/login" className=" link link-hover">
              log in
            </Link>
          </label>
        </form>
        <div className="flex items-center justify-center mb-4">
          <button className="btn " onClick={handleGoogle}>
            <FcGoogle className="text-2xl" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

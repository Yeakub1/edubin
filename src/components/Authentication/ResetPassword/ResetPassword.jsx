import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleResetPassword = (event) => {
    setError(null);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    resetPassword(email)
      .then((result) => {
        toast.success("Check your email to reset password");
        form.reset();
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  return (
    <section className="my-container mt-24">
      <form
        onSubmit={handleResetPassword}
        className="mx-5 my-10 rounded-xl shadow-xl  md:w-1/2 md:mx-auto px-5 py-10 border-2 border-purple-700"
      >
        <h4 className="text-purple-700 text-2xl font-bold mb-5 text-center">
          Forgot Password?
        </h4>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className='input input-bordered w-full max-w-xs"'
              required
            />
          </label>
        </div>
        <button className="my-btn w-full mt-5 p-2 rounded-md text-white bg-purple-600">Send Email</button>
        <p className="text-error text-center mt-2">{error}</p>
      </form>
    </section>
  );
};

export default ResetPassword;

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const imgae_hosting = import.meta.env.VITE_DB_IMAGE;
const Review = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const image_hostin_url = `https://api.imgbb.com/1/upload?key=${imgae_hosting}`;

  // const onSubmit= data=> console.log(data);

  const onSubmit = (data) => {
    const imgdata = new FormData();
    imgdata.append("image", data.image[0]);
    fetch(image_hostin_url, {
      method: "POST",
      body: imgdata,
    })
      .then((res) => res.json())
      .then((uploadImage) => {
        if (uploadImage.success) {
          const imgUrl = uploadImage.data.display_url;
          const { name, message } = data;
          const admissionform = { name, message, image: imgUrl };
          console.log(admissionform);
          fetch("https://edubin-server.vercel.app/review", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(admissionform),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Review add successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };

  return (
    <div className="max-w-7xl px-5 mx-auto md:w-1/2 md:mx-auto">
      <h1 className="text-center font-bold text-3xl mb-5 pt-10">Review Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body bg-slate-200  rounded-lg mb-20"
      >
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="input input-bordered w-full"
              defaultValue={user?.displayName}
            />
            {errors.name && (
              <span className="text-red-800">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Photo</span>
            </label>

            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full "
            />
            {errors.image && (
              <span className="text-red-800">Your Photo is required</span>
            )}
          </div>
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            {...register("message", { required: true })}
            rows="3"
            placeholder="Message"
            className="rounded-md px-3 w-full "
          ></textarea>
          {errors.message && (
            <span className="text-red-800">Message is required</span>
          )}
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Review;

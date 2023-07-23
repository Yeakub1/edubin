import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const imgae_hosting = import.meta.env.VITE_DB_IMAGE;
const Form = () => {
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
            const { name, email, subject, address, phone, birthday } = data;
            const admissionform = {
              name,
              subject,
              email,
              address,
              phone,
              birthday,
              image: imgUrl,
            };
            console.log(admissionform);
            fetch("http://localhost:5000/admission", {
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
                    title: "Admission add successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
          }
        });
  };


  return (
    <div className="max-w-7xl px-5 mx-auto">
      <h1 className="text-center font-bold text-3xl mb-5 pt-24 mt10">
        Admission Form
      </h1>
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
              className="input input-bordered"
              defaultValue={user?.displayName}
            />
            {errors.name && (
              <span className="text-red-800">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              {...register("subject", { required: true })}
              placeholder="Your Subject"
              className="input input-bordered"
            />
            {errors.subject && (
              <span className="text-red-800">Subject is required</span>
            )}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Your email"
              className="input input-bordered"
              defaultValue={user?.email}
            />
            {errors.email && (
              <span className="text-red-800">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>

            <input
              type="number"
              {...register("phone", { required: true })}
              placeholder="Your Phone Number"
              className="input input-bordered"
            />
            {errors.phone && (
              <span className="text-red-800">phone is required</span>
            )}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="Your Address"
              className="input input-bordered"
            />
            {errors.address && (
              <span className="text-red-800">Address is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Birthday</span>
            </label>

            <input
              type="date"
              {...register("birthday", { required: true })}
              placeholder="Birthday"
              className="input input-bordered"
            />
            {errors.birthday && (
              <span className="text-red-800">Birthday is required</span>
            )}
          </div>
          <div className="form-control -mt-10">
            <label className="label">
              <span className="label-text">Your Photo</span>
            </label>

            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
            {errors.image && (
              <span className="text-red-800">Your Photo is required</span>
            )}
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;

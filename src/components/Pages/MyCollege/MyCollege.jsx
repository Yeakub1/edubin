import React, { useContext, useEffect, useState } from "react";
import AdmissionData from "./AdmissionData";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyCollege = () => {
  const [myAdmission, setMyAdmission] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://edubin-server.vercel.app/admission/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAdmission(data);
      });
  }, [user]);

  // delete---
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`https://edubin-server.vercel.app/admission/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const filtering = toys.filter((datas) => datas._id !== _id);
              setToys(filtering);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl px-5 mx-auto pt-20">
      {myAdmission.map((datas) => (
        <AdmissionData
          key={datas._id}
          datas={datas}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default MyCollege;

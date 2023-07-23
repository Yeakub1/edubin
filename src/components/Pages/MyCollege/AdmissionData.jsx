import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const AdmissionData = ({ datas, handleDelete }) => {
  const {_id, name, email, phone, image, subject } = datas;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={image} alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{name}</td>
              <td>{subject}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td onClick={() => handleDelete(_id)}>
                <FaTrashAlt />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionData;
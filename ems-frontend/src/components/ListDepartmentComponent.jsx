import React, { useEffect, useState } from "react";
import {
  deleteDepartment,
  listOfDepartments,
} from "../services/DepartmentService";
import { Link, useNavigate } from "react-router-dom";

const ListDepartmentComponent = () => {
  const [departments, setDepartments] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllDepartments();
  }, []);

  function getAllDepartments() {
    listOfDepartments()
      .then((response) => {
        setDepartments(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateDepartment(id) {
    navigator(`/edit-department/${id}`);
  }

  function removeDepartment(id) {
    deleteDepartment(id)
      .then((response) => {
        console.log(response.data);
        getAllDepartments();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center">List Of Departments</h2>
      <Link to="/add-department" className="btn btn-primary mb-3">
        Add Department
      </Link>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Department Id</th>
            <th>Department Name</th>
            <th>Department Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.departmentName}</td>
              <td>{department.departmentDescription}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateDepartment(department.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeDepartment(department.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDepartmentComponent;

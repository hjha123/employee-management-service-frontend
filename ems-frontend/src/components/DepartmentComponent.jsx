import { useEffect, useState } from "react";
import {
  addDepartment,
  getDepartment,
  updateDepartment,
} from "../services/DepartmentService";
import { useNavigate, useParams } from "react-router-dom";

const DepartmentComponent = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentDescription, setDepartmentDescription] = useState("");

  const navigator = useNavigate();
  const { id } = useParams();

  const [errors, setErrors] = useState({
    departmentName: "",
    departmentDescription: "",
  });

  useEffect(() => {
    if (id) {
      getDepartment(id).then((response) => {
        setDepartmentName(response.data.departmentName);
        setDepartmentDescription(response.data.departmentDescription);
      });
    }
  }, [id]);

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (departmentName.trim()) {
      errorsCopy.departmentName = "";
    } else {
      errorsCopy.departmentName = "Department name is required";
      valid = false;
    }
    if (departmentDescription.trim()) {
      errorsCopy.departmentDescription = "";
    } else {
      errorsCopy.departmentDescription = "Department description is required";
      valid = false;
    }
    setErrors(errorsCopy);

    return valid;
  }

  function saveOrUpdateDepartment(e) {
    e.preventDefault();

    if (validateForm()) {
      const department = { departmentName, departmentDescription };
      console.log(department);

      if (id) {
        updateDepartment(id, department)
          .then((response) => {
            console.log(response.data);
            navigator("/departments");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        addDepartment(department)
          .then((response) => {
            console.log(response.data);
            navigator("/departments");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  function pageTitle() {
    if (id) {
      return (
        <div>
          <h2 className="text-center">Update Department</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h2 className="text-center">Add Department</h2>
        </div>
      );
    }
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Department Name:</label>
                <input
                  type="text"
                  placeholder="Enter department name"
                  name="departmentName"
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                  className={`form-control ${
                    errors.departmentName ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.departmentName && (
                  <div className="inavlid-feedback">
                    {errors.departmentName}
                  </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Department Description:</label>
                <input
                  type="text"
                  placeholder="Enter department description"
                  name="departmentDescription"
                  value={departmentDescription}
                  onChange={(e) => setDepartmentDescription(e.target.value)}
                  className={`form-control ${
                    errors.departmentDescription ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.departmentDescription && (
                  <div className="inavlid-feedback">
                    {errors.departmentDescription}
                  </div>
                )}
              </div>

              <button
                className="btn btn-success mb-2"
                onClick={(e) => saveOrUpdateDepartment(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DepartmentComponent;

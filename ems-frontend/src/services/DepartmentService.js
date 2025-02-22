import axios from "axios";

const REST_API_BASE_URL_DEPARTMENTS = "http://localhost:8080/api/departments";

export const listOfDepartments = () => {
  return axios.get(REST_API_BASE_URL_DEPARTMENTS + "/getAllDepartments");
};

export const addDepartment = (department) => {
  return axios.post(
    REST_API_BASE_URL_DEPARTMENTS + "/createDepartment",
    department
  );
};

export const getDepartment = (departmentId) => {
  return axios.get(
    REST_API_BASE_URL_DEPARTMENTS + "/getDepartmentById/" + departmentId
  );
};

export const updateDepartment = (departmentId, department) => {
  return axios.put(
    REST_API_BASE_URL_DEPARTMENTS + "/updateDepartment/" + departmentId,
    department
  );
};

export const deleteDepartment = (departmentId) => {
  return axios.delete(
    REST_API_BASE_URL_DEPARTMENTS + "/deleteDepartment/" + departmentId
  );
};

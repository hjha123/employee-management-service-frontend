import axios from "axios";

const REST_API_BASE_URL_EMPLOYEES = "http://localhost:8080/api/employees";

export const listOfEmployees = () => {
  return axios.get(REST_API_BASE_URL_EMPLOYEES + "/getEmployees");
};

export const addEmployee = (employee) => {
  return axios.post(REST_API_BASE_URL_EMPLOYEES + "/addEmployee", employee);
};

export const getEmployee = (employeeId) => {
  return axios.get(REST_API_BASE_URL_EMPLOYEES + "/getEmployee/" + employeeId);
};

export const updateEmployee = (employeeId, employee) => {
  return axios.put(
    REST_API_BASE_URL_EMPLOYEES + "/updateEmployee/" + employeeId,
    employee
  );
};

export const deleteEmployee = (employeeId) => {
  return axios.delete(
    REST_API_BASE_URL_EMPLOYEES + "/deleteEmployee/" + employeeId
  );
};

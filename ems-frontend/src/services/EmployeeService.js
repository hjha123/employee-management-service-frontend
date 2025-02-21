import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listOfEmployees = () => {
  return axios.get(REST_API_BASE_URL + "/getEmployees");
};

export const addEmployee = (employee) => {
  return axios.post(REST_API_BASE_URL + "/addEmployee", employee);
};

export const getEmployee = (employeeId) => {
  return axios.get(REST_API_BASE_URL + "/getEmployee/" + employeeId);
};

export const updateEmployee = (employeeId, employee) => {
  return axios.put(
    REST_API_BASE_URL + "/updateEmployee/" + employeeId,
    employee
  );
};

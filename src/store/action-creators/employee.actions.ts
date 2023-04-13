import {
  ICreateEmployee,
  IDeleteAllEmployee,
  IDeleteEmployee,
  IEmployee,
  ILoadEmployee,
  IUpdateEmployee,
} from "../action-types";
import { EMPLOYEE_CONSTANTS } from "../constants";

const createEmployee = (employ: IEmployee): ICreateEmployee => ({
  type: EMPLOYEE_CONSTANTS.CREATE_EMPLOYEE,
  payload: employ,
});

const updateEmployee = (employ: IEmployee): IUpdateEmployee => ({
  type: EMPLOYEE_CONSTANTS.UPDATE_EMPLOYEE,
  payload: employ,
});

const deleteEmployee = (id: number): IDeleteEmployee => ({
  type: EMPLOYEE_CONSTANTS.DELETE_EMPLOYEE,
  payload: id,
});

const deleteAllEmployee = (): IDeleteAllEmployee => ({
  type: EMPLOYEE_CONSTANTS.DELETE_ALL_EMPLOYEE,
});

const loadEmployee = (): ILoadEmployee => ({
  type: EMPLOYEE_CONSTANTS.LOAD_EMPLOYEE,
});

export {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  deleteAllEmployee,
  loadEmployee,
};

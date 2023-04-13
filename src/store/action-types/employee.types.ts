import { EMPLOYEE_CONSTANTS } from "../constants";

interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface IEmployeesState {
  employees: IEmployee[];
}

interface ICreateEmployee {
  type: EMPLOYEE_CONSTANTS.CREATE_EMPLOYEE;
  payload: IEmployee;
}

interface IUpdateEmployee {
  type: EMPLOYEE_CONSTANTS.UPDATE_EMPLOYEE;
  payload: IEmployee;
}

interface IDeleteEmployee {
  type: EMPLOYEE_CONSTANTS.DELETE_EMPLOYEE;
  payload: number;
}

interface IDeleteAllEmployee {
  type: EMPLOYEE_CONSTANTS.DELETE_ALL_EMPLOYEE;
}

interface ILoadEmployee {
  type: EMPLOYEE_CONSTANTS.LOAD_EMPLOYEE;
}

type IEmployeeAction =
  | ICreateEmployee
  | IUpdateEmployee
  | IDeleteEmployee
  | IDeleteAllEmployee
  | ILoadEmployee;

export type {
  IEmployee,
  IEmployeesState,
  IEmployeeAction,
  ICreateEmployee,
  IUpdateEmployee,
  IDeleteEmployee,
  IDeleteAllEmployee,
  ILoadEmployee,
};

import { IEmployee, IEmployeeAction, IEmployeesState } from "../action-types";
import { EMPLOYEE_CONSTANTS } from "../constants";

const initialState: IEmployeesState = {
  employees: [],
};

const employeeReducer = (
  state: IEmployeesState = initialState,
  action: IEmployeeAction
): IEmployeesState => {
  switch (action.type) {
    case EMPLOYEE_CONSTANTS.LOAD_EMPLOYEE:
      let data = [];
      if (window.localStorage.getItem("data")) {
        data = JSON.parse(localStorage.getItem("data") as string);
      }
      return {
        employees: data,
      };
    case EMPLOYEE_CONSTANTS.CREATE_EMPLOYEE:
      setLocation([...state.employees, action.payload]);
      return {
        employees: [...state.employees, action.payload],
      };
    case EMPLOYEE_CONSTANTS.UPDATE_EMPLOYEE:
      let index = state.employees.findIndex(
        (employ) => employ.id === action.payload.id
      );
      state.employees[index] = action.payload;
      setLocation(state.employees);
      return state;
    case EMPLOYEE_CONSTANTS.DELETE_EMPLOYEE:
      setLocation(
        state.employees.filter((employee) => employee.id !== action.payload)
      );
      return {
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };

    case EMPLOYEE_CONSTANTS.DELETE_ALL_EMPLOYEE:
      setLocation([]);
      return { employees: [] };
    default:
      return state;
  }
};

const setLocation = (employees: IEmployee[]) => {
  window.localStorage.setItem("data", JSON.stringify(employees));
};

export { employeeReducer };

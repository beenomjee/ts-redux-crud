export { store } from "./store";
export type { IStoreState } from "./store";
export type {
  IEmployee,
  IEmployeesState,
  IEmployeeAction,
  ICreateEmployee,
  IUpdateEmployee,
  IDeleteEmployee,
  IDeleteAllEmployee,
} from "./action-types";
export {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  deleteAllEmployee,
  loadEmployee,
} from "./action-creators";

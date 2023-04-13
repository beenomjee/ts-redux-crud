import React, { FC, useState, useEffect } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import {
  IEmployee,
  IStoreState,
  createEmployee,
  deleteAllEmployee,
  deleteEmployee,
  loadEmployee,
  updateEmployee,
} from "../../store";
import styles from "./Employee.module.css";
import { useSelector, useDispatch } from "react-redux";

const generateRandomId = () => {
  let id: number = Math.floor(Math.random() * 100000000000000);
  return id;
};

// component: Employee
const Employee: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const employees = useSelector(
    (state: IStoreState) => state.employees.employees
  );
  const [employeeData, setEmployeeData] = useState<IEmployee>({
    id: generateRandomId(),
    firstName: "",
    lastName: "",
    email: "",
  });
  const dispatch = useDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target as HTMLInputElement;
    setEmployeeData((state: IEmployee) => {
      return { ...state, [el.id]: el.value };
    });
  };
  const saveHandler = () => {
    dispatch(createEmployee(employeeData));
    setEmployeeData({
      id: generateRandomId(),
      email: "",
      firstName: "",
      lastName: "",
    });
    setIsModalOpen(false);
  };
  const handleEdit = (employee: IEmployee) => {
    setIsUpdating(true);
    setEmployeeData(employee);
    setIsModalOpen(true);
  };
  const handleUpdate = () => {
    dispatch(updateEmployee(employeeData));
    setEmployeeData({
      id: generateRandomId(),
      email: "",
      firstName: "",
      lastName: "",
    });
    setIsModalOpen(false);
    setIsUpdating(false);
  };
  const handleDelete = (id: number) => {
    dispatch(deleteEmployee(id));
  };
  const handleDeleteAll = () => {
    dispatch(deleteAllEmployee());
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setEmployeeData({
      id: generateRandomId(),
      firstName: "",
      lastName: "",
      email: "",
    });
    setIsUpdating(false);
  };

  useEffect(() => {
    dispatch(loadEmployee());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.left}>
          <h2>Manage Employees</h2>
        </div>
        <div className={styles.right}>
          <button className={styles.delete} onClick={handleDeleteAll}>
            <AiFillMinusCircle />
            <span>Delete All</span>
          </button>
          <button className={styles.add} onClick={() => setIsModalOpen(true)}>
            <AiFillPlusCircle />
            <span>Add New Employee</span>
          </button>
        </div>
      </header>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee: IEmployee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button
                    className={styles.edit}
                    onClick={() => handleEdit(employee)}
                  >
                    <MdModeEditOutline />
                  </button>
                  <button
                    className={styles.delete}
                    onClick={() => handleDelete(employee.id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal */}
      <div
        className={`${styles.overlay} ${
          isModalOpen ? styles.open : styles.close
        }`}
      >
        <div className={`${styles.modal} `}>
          <h2>Add Employee</h2>
          <form action="#">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              required
              placeholder="Muneeb"
              value={employeeData.firstName}
              onChange={changeHandler}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              required
              placeholder="Iftikhar"
              value={employeeData.lastName}
              onChange={changeHandler}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              required
              placeholder="beenomjee@gmail.com"
              value={employeeData.email}
              onChange={changeHandler}
            />
          </form>
          <div className={styles.buttons}>
            <button onClick={handleModalClose} className={styles.close}>
              Close
            </button>
            <button
              className={styles.save}
              onClick={isUpdating ? handleUpdate : saveHandler}
            >
              Save
            </button>
          </div>
          <button className={styles.floatingIcon} onClick={handleModalClose}>
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;

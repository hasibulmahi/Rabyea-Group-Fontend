import { configureStore } from "@reduxjs/toolkit";
import { forgotPasswordReducer, userReducer } from "./reducers/userReducer";
import { projectReducer } from "./reducers/projectReducer";
import {
  adminCustomerReducer,
  deletePaymentReducer,
  getPaymentReducer,
  paymentReducer,
  projectsReducer,
  revenueReducer,
  totalPaymentReducer,
} from "./reducers/adminReducer";
import {
  clientReducer,
  employeeReducer,
  hrProjectReducer,
  projectUserReducer,
  salaryReducer,
} from "./reducers/hrReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    projects: projectsReducer,
    project: projectReducer,
    revenue: revenueReducer,
    employee: employeeReducer,
    client: clientReducer,
    payment: paymentReducer,
    allpayment: getPaymentReducer,
    customer: adminCustomerReducer,
    totalPayment: totalPaymentReducer,
    deletepayment: deletePaymentReducer,
    projectUser: projectUserReducer,
    hrProject: hrProjectReducer,
    salary: salaryReducer,
  },
});

export default store;

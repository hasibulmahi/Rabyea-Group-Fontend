import axios from "axios";
import { apiBase } from "../../config";

export const createEmployee = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateEmployeeRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      apiBase + "/api/v1/manager/create",
      userData,
      config
    );
    dispatch({ type: "CreateEmployeeSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "CreateEmployeeFail",
      payload: err.response.data.message,
    });
  }
};

export const getEmployee = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: "GetEmployeeRequest" });

    const { data } = await axios.get(
      apiBase + `/api/v1/get/manager?keyword=${keyword}`
    );
    dispatch({ type: "GetEmployeeSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetEmployeeFail",
      payload: err.response.data.message,
    });
  }
};

export const getSingleEmployee = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GetSingleEmployeeRequest" });

    const { data } = await axios.get(apiBase + `/api/v1/manager/${id}`);
    dispatch({ type: "GetSingleEmployeeSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetSingleEmployeeFail",
      payload: err.response.data.message,
    });
  }
};

export const updateEmployee = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: "GetUpdateEmployeeRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.put(
      apiBase + `/api/v1/manager/update/${id}`,
      userData,
      config
    );
    dispatch({ type: "GetUpdateEmployeeSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetUpdateEmployeeFail",
      payload: err.response.data.message,
    });
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteEmployeeRequest" });
    const { data } = await axios.delete(
      apiBase + `/api/v1/manager/delete/${id}`
    );
    dispatch({ type: "DeleteEmployeeSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "DeleteEmployeeFail",
      payload: err.response.data.message,
    });
  }
};

export const createClient = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateClientRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      apiBase + "/api/v1/client/create",
      userData,
      config
    );
    dispatch({ type: "CreateClientSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "CreateClientFail",
      payload: err.response.data.message,
    });
  }
};

export const getClient = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: "GetClientRequest" });

    const { data } = await axios.get(
      apiBase + `/api/v1/get/client?keyword=${keyword}`
    );
    dispatch({ type: "GetClientSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetClientFail",
      payload: err.response.data.message,
    });
  }
};

export const getSingleClient = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GetSingleClientRequest" });

    const { data } = await axios.get(apiBase + `/api/v1/client/${id}`);
    dispatch({ type: "GetSingleClientSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetSingleClientFail",
      payload: err.response.data.message,
    });
  }
};

export const updateClient = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: "GetUpdateClientRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.put(
      apiBase + `/api/v1/client/update/${id}`,
      userData,
      config
    );
    dispatch({ type: "GetUpdateClientSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetUpdateClientFail",
      payload: err.response.data.message,
    });
  }
};

export const deleteClient = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteClientRequest" });
    const { data } = await axios.delete(
      apiBase + `/api/v1/client/delete/${id}`
    );
    dispatch({ type: "DeleteClientSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "DeleteClientFail",
      payload: err.response.data.message,
    });
  }
};

export const getProjectManager = () => async (dispatch) => {
  try {
    dispatch({ type: "GetProjectManagerRequest" });

    const { data } = await axios.get(apiBase + `/api/v1/project/manager`);
    dispatch({ type: "GetProjectManagerSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetProjectManagerFail",
      payload: err.response.data.message,
    });
  }
};

export const getProjectClient = () => async (dispatch) => {
  try {
    dispatch({ type: "GetProjectClientRequest" });

    const { data } = await axios.get(apiBase + `/api/v1/project/client`);
    dispatch({ type: "GetProjectClientSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetProjectClientFail",
      payload: err.response.data.message,
    });
  }
};

export const createProject = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateProjectRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      apiBase + "/api/v1/project/create",
      userData,
      config
    );
    dispatch({ type: "CreateProjectSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "CreateProjectFail",
      payload: err.response.data.message,
    });
  }
};

export const getProject = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: "GetProjectRequest" });

    const { data } = await axios.get(
      apiBase + `/api/v1/get/project?keyword=${keyword}`
    );
    dispatch({ type: "GetProjectSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetProjectFail",
      payload: err.response.data.message,
    });
  }
};

export const getSingleProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GetSingleProjectRequest" });

    const { data } = await axios.get(apiBase + `/api/v1/get/project/${id}`);
    dispatch({ type: "GetSingleProjectSuccess", payload: data.project });
  } catch (err) {
    dispatch({
      type: "GetSingleProjectFail",
      payload: err.response.data.message,
    });
  }
};

export const createSalary = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateSalaryRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      apiBase + "/api/v1/payment/create",
      userData,
      config
    );
    dispatch({ type: "CreateSalarySuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "CreateSalaryFail",
      payload: err.response.data.message,
    });
  }
};

export const getAdminNotification = () => async (dispatch) => {
  try {
    dispatch({ type: "GetAdminNotificationRequest" });

    const { data } = await axios.get(apiBase + "/api/v1/admin/notification");
    dispatch({ type: "GetAdminNotificationSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetAdminNotificationFail",
      payload: err.response.data.message,
    });
  }
};
export const getManagerNotification = () => async (dispatch) => {
  try {
    dispatch({ type: "GetManagerNotificationRequest" });

    const { data } = await axios.get(apiBase + "/api/v1/maneger/notification");
    dispatch({ type: "GetManagerNotificationSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetManagerNotificationFail",
      payload: err.response.data.message,
    });
  }
};
export const getClientNotification = () => async (dispatch) => {
  try {
    dispatch({ type: "GetClientNotificationRequest" });

    const { data } = await axios.get(
      apiBase + "/api/v1/get/client/notification"
    );
    dispatch({ type: "GetClientNotificationSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetClientNotificationFail",
      payload: err.response.data.message,
    });
  }
};

//Clearing Errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: "ClearErrors" });
};

//Clearing Success
export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: "ClearSuccess" });
};

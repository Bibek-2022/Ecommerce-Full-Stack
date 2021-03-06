import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const loginRegisterEP = rootUrl + "/register-login";
const loginEP = loginRegisterEP + "/login";
const catEP = rootUrl + "/category";
const paymentMethodEP = rootUrl + "/payment-method";
const adminEP = rootUrl + "/admin";

const apiProcessor = async (method, url, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const postAdminUser = (obj) => {
  return apiProcessor("post", loginRegisterEP, obj);
};
export const emailVerificationAdminUser = (obj) => {
  return apiProcessor("patch", loginRegisterEP, obj);
};

export const loginAdminUser = (obj) => {
  return apiProcessor("post", loginEP, obj);
};

// ----------------------Category API--------------------------------//

export const fetchCategory = (_id) => {
  const url = _id ? catEP + "/" + _id : catEP;
  return apiProcessor("get", url);
};

export const postCategory = (obj) => {
  return apiProcessor("post", catEP, obj);
};

export const deleteCategories = (obj) => {
  return apiProcessor("delete", catEP, obj);
};

export const updateCategory = (obj) => {
  return apiProcessor("put", catEP, obj);
};

// ----------------------Payment Method API--------------------------------//

export const fetchPaymentMethods = () => {
  return apiProcessor("get", paymentMethodEP);
};

export const postPaymentMethod = (obj) => {
  return apiProcessor("post", paymentMethodEP, obj);
};

export const deletePaymentMethod = (_id) => {
  return apiProcessor("delete", paymentMethodEP + "/" + _id);
};

export const updatePaymentMethod = (obj) => {
  return apiProcessor("put", paymentMethodEP, obj);
};

// ----------------------Admin User --------------------------------//

export const updateAdminPassword = (obj) => {
  return apiProcessor("patch", adminEP, obj);
};

export const updateAdminProfile = (obj) => {
  return apiProcessor("put", adminEP, obj);
};

// ----------------Password reset

export const requestOTP = (obj) => {
  return apiProcessor("post", loginRegisterEP + "/otp-request", obj);
};

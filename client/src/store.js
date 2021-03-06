import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login-registration/loginRegisterSlice";
import systemReducer from "./pages/system-state/SystemSlice";
import categoryReducer from "./pages/Categories/catSlice";
import paymentMethodReducer from "./pages/paymentMethod/paymentMethodSlice";

const store = configureStore({
  reducer: {
    adminUser: loginReducer,
    system: systemReducer,
    categories: categoryReducer,
    paymentMethod: paymentMethodReducer,
  },
});

export default store;

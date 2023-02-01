import { combineReducers } from "redux";
import userSelectedProductListSlice from "../../store/reducers/userSelectedProductListSlice";
import userAllDetailsSlice from "../../store/reducers/userDetailsSlice";
import paymentDetailsSlice from "../../store/reducers/paymentDetailsSlice";

export default combineReducers({
    userSelectedProductListSlice,
    userAllDetailsSlice,
    paymentDetailsSlice,
});

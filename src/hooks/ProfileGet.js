import axios from "apiService/axios";
import { addUserActions } from "rtk/feature/addUserSlice";
import store from "rtk/store/store";

 
export const getUser= async() => {
    try {
       
        const res = await axios.get('/user/profile')
        console.log(res);
           store.dispatch(addUserActions.addUser(res.data.data))
          
       } catch (error) {
        // console.log(error);
        // removeCookie("token", { path: "/" });
       }
};

 
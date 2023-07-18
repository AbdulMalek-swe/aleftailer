import axios from "apiService/axios";
import { getUser } from "./ProfileGet";
 
export const likeUpdates= async(id,user) => {
    try {
        if (user.email) {
            axios.patch(`/product/like-update/${id}`, { userId: user.id })
                .then(res => {
                    getUser()
                   
                })
                .catch(error => {
                    console.log(error);
                })
        }
       } catch (error) {
      
       }
};

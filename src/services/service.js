
import axios from "axios";
import { baseUrl } from "./baseUrl";

export const get = async (route) => {
    try{
   let token = localStorage.getItem("token")
   let response = await axios.get(baseUrl+route,{
     headers:{
        authorization: token,
     },
   });
    return response;
    } catch (err){
      console.log(err.message)
    };
}
export const post = async (route, body) => {
    try{
   let token = localStorage.getItem("token")
   let response = await axios.post(baseUrl+route,body,{
     headers:{
        authorization: token,
     },
   });
    return response;
    } catch (err){
      // console.log(err.message)
    }
};  

export const remove = async (route,) => {
  try{
 let token = localStorage.getItem("token")
 let response = await axios.delete(baseUrl+route,{
   headers:{
      authorization: token,
   },
 });
  return response;
  } catch (err){
    // console.log(err.message)
  }
};  
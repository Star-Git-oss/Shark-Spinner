import { BASE_URI } from "../utils/api";
import axios from "axios";

export const signup = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/user/signup`, data)
    .then(res => {
      // console.log(res.data);
      resolve("success");
    })
    .catch(err => {
      // console.log(err);
      reject("exist");
    });
})

export const signin = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/user/signin`, data)
    .then(res => {
      // console.log(res.data);
      resolve("success");
    })
    .catch(err => {
      // console.log(err);
      reject("no");
    });
})

export const openWalletAmount = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/user/openWallet`, data)
    .then(res => {
      resolve(res.data.user);
    })
    .catch(err => {
      // console.log(err);
      reject("no");
    });
})
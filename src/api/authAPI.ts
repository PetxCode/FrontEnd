import axios from "axios";

const url: string = "https://set07superproject.onrender.com";

export const RegisterAPI = async (data: any) => {
  try {
    return await axios.post(`${url}/api/create-account`, data);
  } catch (error) {
    console.log(error);
  }
};

export const VerifiedAPI = async (token: any) => {
  try {
    return await axios.post(`${url}/api/${token}/verify-account`);
  } catch (error) {
    console.log(error);
  }
};

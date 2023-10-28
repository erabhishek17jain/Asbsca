import axios from 'axios';
import { baseAPI } from '../constants';

axios.defaults.baseURL = 'http://localhost:8080';

/** Make API Requests */
/** login function */
export async function signin({ username, password }: any) {
  try {
    if (username) {
      const { data } = await axios.post(`${baseAPI}/users/login`, {
        username,
        password,
      });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

/** login function */
export async function resetPassword({ username, password }: any) {
  try {
    if (username) {
      const { data } = await axios.post(`${baseAPI}/users/resetPassword`, {
        username,
        password,
      });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

/** add role */
export async function addRole(values: any) {
  try {
    if (values) {
      const { data } = await axios.post(`${baseAPI}/roles/create`, values);
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

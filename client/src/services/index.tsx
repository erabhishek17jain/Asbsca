import axios from 'axios';
import { baseAPI } from '../constants';

axios.defaults.baseURL = 'http://localhost:8080';

/** Make API Requests */
/** login function */
export async function signin({ email, password }: any) {
  try {
    if (email) {
      const { data } = await axios.post(`${baseAPI}/users/login`, {
        email,
        password,
      });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

/** login function */
export async function resetPassword({ email, password }: any) {
  try {
    if (email) {
      const { data } = await axios.post(`${baseAPI}/users/resetPassword`, {
        email,
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
      const { data } = await axios.post(`${baseAPI}/users/roles/create`, values);
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

/** delete user */
export async function deleteUserById(values: any) {
  try {
    if (values) {
      const { data } = await axios.delete(`${baseAPI}/users/delete/${values}`);
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

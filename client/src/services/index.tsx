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
      const { data } = await axios.post(
        `${baseAPI}/users/roles/create`,
        values,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

/** add client */
export async function addClient(values: any) {
  try {
    if (values) {
      const { data } = await axios.post(
        `${baseAPI}/clients/create`,
        values,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}


/** add role */
export async function addProduct(values: any) {
  try {
    if (values) {
      const { data } = await axios.post(
        `${baseAPI}/clients/product/create`,
        values,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}


/** add role */
export async function addBranch(values: any) {
  try {
    if (values) {
      const { data } = await axios.post(
        `${baseAPI}/clients/branch/create`,
        values,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

/** add user */
export async function addUser(values: any) {
  try {
    if (values) {
      const { data } = await axios.post(`${baseAPI}/users/create`, values);
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

/** update user */
export async function updateUser(values: any) {
  try {
    if (values) {
      const { data } = await axios.post(`${baseAPI}/users/update`, values);
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

/** delete user */
export async function deleteUserById(id: any) {
  try {
    if (id) {
      const { data } = await axios.delete(`${baseAPI}/users/delete/${id}`);
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

/** delete user */
export async function deleteClientById(id: any) {
  try {
    if (id) {
      const { data } = await axios.delete(`${baseAPI}/clients/delete/${id}`);
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

/** delete user */
export async function deleteBranchById(id: any) {
  try {
    if (id) {
      const { data } = await axios.delete(
        `${baseAPI}/users/clients/branch/delete/${id}`,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

/** delete user */
export async function deleteProductById(id: any) {
  try {
    if (id) {
      const { data } = await axios.delete(
        `${baseAPI}/users/clients/product/delete/${id}`,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: error });
  }
}

export async function fetchCasesByFilter(values: any) {
  try {
    const response = await axios.post(`${baseAPI}/cases/list`, {
      filters: values,
    });
    return response?.data;
  } catch (err) {
    return console.log(err);
  }
}

export async function generatePDReport(values: any) {
  try {
    const response = await axios.post(`${baseAPI}/cases/generateReport`, {
      filters: values,
    });
    return response?.data;
  } catch (err) {
    return console.log(err);
  }
}

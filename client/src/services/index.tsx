import axios from 'axios';
import { baseAPI } from '../constants';
import toast from 'react-hot-toast';

/** services */
export function setToken(token: string) {
  document.cookie = 'token=' + token + '; Path=/;';
  axios.defaults.baseURL = 'http://localhost:8080';
  axios.defaults.headers.common = {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
}

export function showError(error: any) {
  if (typeof error?.response?.data === 'object') {
    toast.error(<b>{error?.response?.data?.message}</b>);
  } else if (
    error?.response?.data?.includes('TokenExpiredError') ||
    error?.response?.data?.includes('JsonWebTokenError')
  ) {
    toast.error(<b>Login Expired!</b>);
    window.location.href = window.location.origin + '/signin';
    // window.location.reload();
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}

/** authentication */
export async function authentication(
  { email, password }: any,
  { rejectWithValue }: any,
) {
  try {
    if (email) {
      const { data } = await axios.post(`${baseAPI}/users/login`, {
        email,
        password,
      });
      return Promise.resolve({ data });
    }
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** reset password */
export async function selfRegister(values: any, { rejectWithValue }: any) {
  try {
    const { data } = await axios.post(`${baseAPI}/users/self-register`, values);
    return Promise.resolve({ data });
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** Get API Call */
/** logged user details */
export async function selfDetails(_: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(`${baseAPI}/users/self-detail`);
    return response.data;
  } catch (error: any) {
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    toast.error(<b>Login Expired!</b>);
    return rejectWithValue(error?.response?.data);
  }
}

/** all user list */

export async function allCasesList(values: any, { rejectWithValue }: any) {
  let filter = '';
  for (const key in values) {
    if (key === 'filter') {
      const filterBy = Object.keys(values[key]);
      const filterValue = Object.values(values[key]);
      filter =
        filter +
        `filterBy=${filterBy.join(',')}&filterValue=${filterValue.join(',')}&`;
    } else {
      filter = filter + `${key}=${values[key]}&`;
    }
  }
  try {
    const response = await axios.get(
      `${baseAPI}/cases/list?${filter.slice(0, -1)}`,
    );
    return response.data;
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** all user list */
export async function allUsersList(_: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(`${baseAPI}/users/list`);
    return response.data;
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** all analytics for dashboard */
export async function getAanalytics(payload: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(`${baseAPI}/cases/analytics`, payload);
    return response.data;
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** all roles list */
export async function getRoles(_: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(`${baseAPI}/users/roles/list`);
    return response.data;
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** all clients list */
export async function getClients(_: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(`${baseAPI}/clients/list`);
    return response.data;
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** all products list */
export async function getProducts(_: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(`${baseAPI}/clients/product/list`);
    return response.data;
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** all branches list */
export async function getBranchs(_: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(`${baseAPI}/clients/branch/list`);
    return response.data;
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** Add API Calls */
/** add user */
export async function addCase(values: any) {
  try {
    if (values) {
      const { data } = await axios.post(`${baseAPI}/cases/create`, values);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
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
    showError(error);
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
    showError(error);
  }
}

/** add client */
export async function addClient(values: any) {
  try {
    if (values) {
      const { data } = await axios.post(`${baseAPI}/clients/create`, values);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** add product */
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
    showError(error);
  }
}

/** add branch */
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
    showError(error);
  }
}

/** Update API Calls */

/** assined case */
export async function assignCase(values: any) {
  try {
    if (values) {
      const { data } = await axios.post(`${baseAPI}/cases/assign`, values);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update case status */
export async function statusUpdateCase(values: any) {
  try {
    if (values) {
      const { data } = await axios.post(`${baseAPI}/cases/status`, values);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update case */
export async function updateCase(id: string, values: any) {
  try {
    if (values) {
      const { data } = await axios.put(`${baseAPI}/cases/${id}`, values);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update self user */
export async function selfUpdateUser(values: any) {
  try {
    if (values) {
      const { data } = await axios.put(`${baseAPI}/users/self-update`, values);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update user */
export async function updateUser(values: any) {
  try {
    if (values) {
      const { data } = await axios.put(`${baseAPI}/users/update`, values);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update user */
export async function updateRole(values: any) {
  try {
    if (values) {
      const { data } = await axios.put(`${baseAPI}/users/roles/update`, values);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update user */
export async function updateClient(values: any) {
  try {
    if (values) {
      const { data } = await axios.put(`${baseAPI}/clients/update`, values);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update user */
export async function updateProduct(values: any) {
  try {
    if (values) {
      const { data } = await axios.put(
        `${baseAPI}/clients/product/update`,
        values,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update user */
export async function updateBranch(values: any) {
  try {
    if (values) {
      const { data } = await axios.put(
        `${baseAPI}/clients/branch/update`,
        values,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** Delete API Calls */
/**  delete case*/
export async function deleteCaseById(id: any) {
  try {
    if (id) {
      const { data } = await axios.delete(`${baseAPI}/cases/${id}`);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
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
    showError(error);
  }
}

/** delete role */
export async function deleteRoleById(id: any) {
  try {
    if (id) {
      const { data } = await axios.delete(
        `${baseAPI}/users/roles/delete/${id}`,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** delete client */
export async function deleteClientById(id: any) {
  try {
    if (id) {
      const { data } = await axios.delete(`${baseAPI}/clients/delete/${id}`);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** delete product */
export async function deleteProductById(id: any) {
  try {
    if (id) {
      const { data } = await axios.delete(
        `${baseAPI}/clients/product/delete/${id}`,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** delete branch */
export async function deleteBranchById(id: any) {
  try {
    if (id) {
      const { data } = await axios.delete(
        `${baseAPI}/clients/branch/delete/${id}`,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
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

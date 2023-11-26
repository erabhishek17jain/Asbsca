import axios from 'axios';
import { baseAPI } from '../constants';
import toast from 'react-hot-toast';

function setFilters(payload: any) {
  let filter = '';
  for (const key in payload) {
    if (key === 'filter') {
      const filterBy = Object.keys(payload[key]);
      const filterValue = Object.values(payload[key]);
      filter =
        filter +
        `filterBy=${filterBy.join(',')}&filterValue=${filterValue.join(',')}&`;
    } else {
      filter = filter + `${key}=${payload[key]}&`;
    }
  }
  return filter.slice(0, -1);
}

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

/** first time reset password */
export async function selfRegister(payload: any, { rejectWithValue }: any) {
  try {
    const { data } = await axios.post(
      `${baseAPI}/users/self-register`,
      payload,
    );
    return Promise.resolve({ data });
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** reset password */
export async function forgotPassword(payload: any, { rejectWithValue }: any) {
  try {
    const { data } = await axios.post(
      `${baseAPI}/users/reset-password`,
      payload,
    );
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
export async function getCases(payload: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(
      `${baseAPI}/cases/list?${setFilters(payload)}`,
    );
    return response.data;
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** all user list */
export async function getUsers(payload: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(
      `${baseAPI}/users/list?${setFilters(payload)}`,
    );
    return response.data;
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** get Notifications */
export async function getNotifications(payload: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(
      `${baseAPI}/users/notifications?${setFilters(payload)}`,
    );
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
export async function getRoles(payload: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(
      `${baseAPI}/users/roles/list?${setFilters(payload)}`,
    );
    return response.data;
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** all clients list */
export async function getClients(payload: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(
      `${baseAPI}/clients/list?${setFilters(payload)}`,
    );
    return response.data;
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** all products list */
export async function getProducts(payload: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(
      `${baseAPI}/clients/product/list?${setFilters(payload)}`,
    );
    return response.data;
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** all branches list */
export async function getBranchs(payload: any, { rejectWithValue }: any) {
  try {
    const response = await axios.get(
      `${baseAPI}/clients/branch/list?${setFilters(payload)}`,
    );
    return response.data;
  } catch (error: any) {
    showError(error);
    return rejectWithValue(error?.response?.data);
  }
}

/** Add API Calls */

/** add notification */
export async function addNotification(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.post(
        `${baseAPI}/users/notification/create`,
        payload,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** add user */
export async function addCase(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.post(`${baseAPI}/cases/create`, payload);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** add user */
export async function addUser(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.post(`${baseAPI}/users/create`, payload);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** add role */
export async function addRole(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.post(
        `${baseAPI}/users/roles/create`,
        payload,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** add client */
export async function addClient(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.post(`${baseAPI}/clients/create`, payload);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** add product */
export async function addProduct(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.post(
        `${baseAPI}/clients/product/create`,
        payload,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** add branch */
export async function addBranch(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.post(
        `${baseAPI}/clients/branch/create`,
        payload,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** Update API Calls */

/** assined case */
export async function assignCase(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.post(`${baseAPI}/cases/assign`, payload);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update case status */
export async function statusUpdateCase(id: string, payload: any) {
  try {
    if (payload) {
      const { data } = await axios.post(`${baseAPI}/cases/${id}`, payload);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update case */
export async function updateCase(id: string, payload: any) {
  try {
    if (payload) {
      const { data } = await axios.put(`${baseAPI}/cases/${id}`, payload);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update self user */
export async function selfUpdateUser(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.put(`${baseAPI}/users/self-update`, payload);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update user */
export async function updateUser(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.put(`${baseAPI}/users/update`, payload);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update user */
export async function updateRole(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.put(
        `${baseAPI}/users/roles/update`,
        payload,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update user */
export async function updateClient(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.put(`${baseAPI}/clients/update`, payload);
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update user */
export async function updateProduct(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.put(
        `${baseAPI}/clients/product/update`,
        payload,
      );
      return Promise.resolve({ data });
    }
  } catch (error) {
    showError(error);
  }
}

/** update user */
export async function updateBranch(payload: any) {
  try {
    if (payload) {
      const { data } = await axios.put(
        `${baseAPI}/clients/branch/update`,
        payload,
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

export async function generatePDReport(payload: any) {
  try {
    const response = await axios.post(`${baseAPI}/cases/generateReport`, {
      filters: payload,
    });
    return response?.data;
  } catch (err) {
    return console.log(err);
  }
}

import axios from 'axios';
import { useEffect, useState } from 'react';
import { getUsername } from '../helper/helper';

axios.defaults.baseURL = 'http://localhost:8080';

/** custom hook */
export default function useFetch(query: any) {
  const [getData, setData] = useState<any>({
    isLoading: false,
    userData: undefined,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData((prev: any) => ({ ...prev, isLoading: true }));

        const { username }: any = !query ? await getUsername() : '';
        const { data, status } = !query
          ? await axios.get(`/api/user/${username}`)
          : await axios.get(`/api/${query}`);

        if (status === 201) {
          setData((prev: any) => ({ ...prev, isLoading: false }));
          setData((prev: any) => ({ ...prev, userData: data, status: status }));
        }

        setData((prev: any) => ({ ...prev, isLoading: false }));
      } catch (error) {
        setData((prev: any) => ({
          ...prev,
          isLoading: false,
          serverError: error,
        }));
      }
    };
    fetchData();
  }, [query]);

  return [getData, setData];
}

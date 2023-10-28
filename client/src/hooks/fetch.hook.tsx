import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'http://localhost:8080';

/** custom hook */
export default function useFetch(query: any) {
  const [getData, setData] = useState<any>({
    isLoading: false,
    userData: undefined,
    status: null,
    serverError: null,
  });

  useEffect(() => {}, [query]);

  return [getData, setData];
}

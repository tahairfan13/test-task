import * as React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

export const useGetData = (params: string) => {
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    axios
      .get(`${params}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err));
  }, [params]);

  return { data, error };
};

export default useGetData;

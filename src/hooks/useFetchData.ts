import { useEffect, useState } from "react";
import axios from "axios";

type Loading = boolean;
type Error = string | undefined;

type Data<T> = {
  data: T | null;
  loading: Loading;
  error: Error;
};

type UseFetchData = <T extends {}>(url: string) => Data<T>;

export const useFetchData: UseFetchData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<Loading>(false);
  const [error, setError] = useState<Error>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data }: Data<T> = await axios.get(url);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

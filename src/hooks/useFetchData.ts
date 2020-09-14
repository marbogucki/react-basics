import { useEffect, useState } from "react";
import axios from "axios";

type Data<T> = {
  data: T | null;
  loading: boolean;
  error: string | undefined;
};

type UseFetchData = <T extends {}>(url: string) => Data<T>;

export const useFetchData: UseFetchData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

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

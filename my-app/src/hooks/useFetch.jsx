import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoadind, setIsLoading] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const res = await fetch(url,  signal );
        const data = await res.json();
        if (!res.ok) {
          throw new Error("Помилка отримання данних з сервера");
        }
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    return () => {
      controller.abort();
    };
  }, []);
  return { data, isError, isLoadind };
};

export { useFetch };

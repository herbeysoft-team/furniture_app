import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://herbeysoft.com/api/products/");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(false);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;

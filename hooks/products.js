import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/baseurl";

export const useProducts = () => {
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  const getBySearch = async (params) => {
    const search = params;

    await axios
      .post(`${BASE_URL}/products`, { search })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return { getBySearch, setResponse, response, error };
};

import { useQuery } from "react-query";
import api from "../services/api";

export const useTemperature = () => {
  const QUERY_KEY = "temperature";

  const response = useQuery(QUERY_KEY, async () => {
    const response = await api.get("/temperature");
    return response.data;
  },{
    refetchInterval: 2000,
  });

  return response;
};

export default useTemperature;

import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "../util";
import { useGlobalContext } from "../context/Context";

export const getSearch = () => {
  const { searchTerm } = useGlobalContext();
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["unsplash", searchTerm],
    queryFn: async () => {
      const result = await fetchApi.get(
        `search/photos?client_id=${
          import.meta.env.VITE_API_KEY
        }&query=${searchTerm}`
      );
      return result.data;
    },
  });
  return { data, isError, error, isLoading };
};

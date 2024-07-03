import { useQuery } from "@tanstack/react-query";
import services from "../services";

export const useGetMovies = (options?: any) => {

  return useQuery({
    queryKey: ['movies'],
    queryFn: services.movies.getMovies,
    ...(options || {}),
  });
};
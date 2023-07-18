import { useQuery } from "@tanstack/react-query";
import { getData } from "../util";

export const useSuperHeroesData = () => {
  return useQuery({
    queryKey: ["data"],
    queryFn: getData,
    enabled: false,
  });
};

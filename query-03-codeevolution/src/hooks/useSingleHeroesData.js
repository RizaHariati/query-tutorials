import { useQuery } from "@tanstack/react-query";
import { getData2 } from "../utils/util";

export const useSingleHeroesData = (id) => {
  const data = useQuery({
    queryKey: ["data", id],
    queryFn: () => getData2(id),
  });
  return data;
};

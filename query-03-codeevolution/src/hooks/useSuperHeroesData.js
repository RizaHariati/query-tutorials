import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { addSuperHero, getData } from "../utils/util";

export const useSuperHeroesData = () => {
  return useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addSuperHero,
    // onMutate: () => {},
    // onError: () => {},
    // onSettled: () => {},
    onSuccess: (data) => {
      queryClient.invalidateQueries(["data"]);
      // queryClient.setQueryData(["data"], (prevQuery) => {
      //   return {
      //     ...prevQuery,
      //     data: [...prevQuery.data, data.data],
      //   };
      // });
    },
  });
};

// {
//   "id": 5,
//   "name": "Superman",
//   "alterEgo": "Clark Kent"
// },
// {
//   "name": "Shazam",
//   "alterEgo": "Billy Batson",
//   "id": 7
// },

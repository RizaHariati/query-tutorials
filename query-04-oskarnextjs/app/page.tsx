"use client";

import { getTodos } from "@/utils/util";
import { useQuery, QueryClient } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> HALO REACT QUERY!</h1>
    </main>
  );
}

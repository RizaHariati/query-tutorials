import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { getPosts, getUsers } from "./utils";

function App() {
  const {
    isLoading,
    isError,
    data: data,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const userQuery = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  if (isError)
    return (
      <div>
        <h1>Something's wrong...</h1>
      </div>
    );

  console.log(userQuery.data.data);
  return (
    <div className="App">
      <h1>Data</h1>
    </div>
  );
}

export default App;

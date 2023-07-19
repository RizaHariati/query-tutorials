import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getDatabyChannel, getDatabyEmail } from "../utils/util";

const DependentQueries = ({ email }) => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user", email],
    queryFn: () => getDatabyEmail(email),
  });

  const { data: channel, isLoading: isLoading2 } = useQuery({
    queryKey: ["channel", user?.channelId],
    queryFn: () => getDatabyChannel(user?.channelId),
    enabled: user?.channelId ? true : false,
  });

  if (isLoading) return <h1>Loading..</h1>;
  if (isLoading2) return <h1>Loading lagi..</h1>;
  return (
    <div>
      <h2>User</h2>
      <h4>{user.id}</h4>
      <h4>{user.channelId}</h4>Youyou
      <h2>Channel</h2>
      <h4>{isLoading2 ? "loading" : channel?.id}</h4>
      <div>
        {isLoading2 ? (
          "loading"
        ) : (
          <div>
            {channel.course.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DependentQueries;

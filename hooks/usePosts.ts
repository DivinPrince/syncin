import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const usePosts = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/posts", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usePosts;

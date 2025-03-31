import { RSSFeed } from "@/typings/rss";
import { useQuery } from "@tanstack/react-query";

const fetchRssFeed = async (source: string) => {
  const response = await fetch(`/api/rss/${source}`);
  if (!response.ok) throw new Error("Failed to fetch RSS feed");
  return response.json();
};

// This hook is used to retrieve feed data with useQuery
export const useRSSFeed = (source: string) => {
  return useQuery<RSSFeed>({
    queryKey: ["rssFeed", source],
    queryFn: () => fetchRssFeed(source),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

import { FeedSource } from "@/typings/feedSource";

const feedList = [
  { title: "Algemeen", feedSource: FeedSource.Algemeen },
  { title: "Binnenland", feedSource: FeedSource.Binnenland },
  { title: "Buitenland", feedSource: FeedSource.Buitenland },
  { title: "Sport", feedSource: FeedSource.Sport },
  { title: "Voetbal", feedSource: FeedSource.Voetbal },
  { title: "Tech", feedSource: FeedSource.Tech },
];

interface Props {
  feedSource: FeedSource;
  setFeedSource: (feedSource: FeedSource) => void;
}

const Navigation = ({ feedSource, setFeedSource }: Props) => {
  return (
    <nav className="flex flex-col space-y-4 md:flex-row md:space-y-0 justify-between">
      <h1 className="text-5xl font-bold text-red-600">RSS Feed</h1>
      <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
        {feedList.map((feedItem, id) => (
          <button
            key={id}
            onClick={() => setFeedSource(feedItem.feedSource)}
            className={`px-4 py-2 rounded cursor-pointer ${
              feedSource === feedItem.feedSource
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {feedItem.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;

import ArticleThumbnailBig from "@/components/ArticleThumbnailBig";
import { useRSSFeed } from "@/hooks/useRSSFeed";
import { useArticleStore } from "@/store/useArticleStore";
import { useRouter } from "next/router";
import { Article } from "@/typings/rss";
import Navigation from "@/components/Navigation";
import PageLayout from "@/components/PageLayout";

export default function Home() {
  const { setSelectedArticle, feedSource, setFeedSource } = useArticleStore();
  const router = useRouter();
  const { data: articles, isLoading, error } = useRSSFeed(feedSource);

  if (error) return <p>De feed kon niet geladen worden</p>;

  const onClickArticle = (article: Article) => {
    setSelectedArticle(article);
    router.push("/article");
  };

  return (
    <PageLayout>
      <Navigation feedSource={feedSource} setFeedSource={setFeedSource} />
      {isLoading ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {Array(2)
            .fill(null)
            .map((_, index) => (
              <ArticleThumbnailBig key={index} isLoading />
            ))}
        </div>
      ) : (
        articles?.rss.channel &&
        articles?.rss.channel?.item.length > 0 && (
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {articles?.rss.channel.item.slice(0, 2).map((article, id) => (
                <ArticleThumbnailBig
                  key={id}
                  imageUrl={article.enclosure ? article.enclosure._url : "/"}
                  title={article.title}
                  onClick={() => onClickArticle(article)}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {articles?.rss.channel.item.slice(2).map((article, id) => (
                <ArticleThumbnailBig
                  key={id + 2}
                  imageUrl={article.enclosure ? article.enclosure._url : "/"}
                  title={article.title}
                  onClick={() => onClickArticle(article)}
                />
              ))}
            </div>
          </div>
        )
      )}
    </PageLayout>
  );
}

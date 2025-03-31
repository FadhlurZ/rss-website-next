import { useArticleStore } from "@/store/useArticleStore";
import HeroImage from "@/components/HeroImage";
import { formatDate } from "@/helpers/helpers";
import parse from "html-react-parser";
import PageLayout from "@/components/PageLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BackButton from "@/components/BackButton";

export default function ArticlePage() {
  const router = useRouter();
  const { selectedArticle } = useArticleStore();

  useEffect(() => {
    if (!selectedArticle) {
      router.push("/");
    }
  });

  return (
    <PageLayout>
      {selectedArticle ? (
        <div className="flex flex-col space-y-14 md:mr-20 md:ml-20 lg:mr-30 lg:ml-30">
          <HeroImage
            src={
              selectedArticle.enclosure ? selectedArticle.enclosure._url : "/"
            }
          />
          <div className="flex flex-col space-y-14 md:mr-10 md:ml-10 lg:mr-46 lg:ml-46">
            <h1 className="text-5xl font-bold text-black">
              {selectedArticle.title}
            </h1>
            <div className="flex flex-row gap-4">
              <BackButton />
              <p className="self-start text-black bg-gray-200 rounded-4xl p-4 font-bold">
                {formatDate(selectedArticle.pubDate)}
              </p>
            </div>
            <div className="text-black">
              {parse(selectedArticle.description)}
            </div>
            <a
              className="self-center bg-red-600 rounded-4xl p-4 font-bold hover:scale-110 transform transition"
              href={selectedArticle.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Volledig artikel lezen
            </a>
          </div>
        </div>
      ) : null}
    </PageLayout>
  );
}

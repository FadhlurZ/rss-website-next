import Image from "next/image";
import { MouseEventHandler } from "react";

interface Props {
  imageUrl?: string;
  title?: string;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ArticleThumbnailBig = ({
  imageUrl,
  title,
  isLoading,
  onClick,
}: Props) => {
  console.log(imageUrl);

  return (
    <button
      className={`relative w-full h-[200px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl ${
        !isLoading ? "cursor-pointer hover:scale-101 transform transition" : ""
      }`}
      onClick={!isLoading ? onClick : undefined}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="absolute inset-0 bg-black/40"></div>
      ) : (
        <>
          <Image
            src={imageUrl ?? "/"}
            alt="Nieuwsbericht"
            style={{ objectFit: "cover" }}
            priority
            sizes="100%"
            fill
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-10 text-white">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              {title}
            </h2>
          </div>
        </>
      )}
    </button>
  );
};

export default ArticleThumbnailBig;

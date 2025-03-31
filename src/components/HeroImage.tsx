import Image from "next/image";

interface Props {
  src: string;
}

const HeroImage = ({ src }: Props) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt="Artikel afbeelding"
        style={{ objectFit: "cover" }}
        priority
        sizes="100%"
        fill
      />
    </div>
  );
};

export default HeroImage;

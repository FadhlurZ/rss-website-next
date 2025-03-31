import { useRouter } from "next/router";
import Arrow from "@/components/icons/Arrow";

const BackButton = () => {
  const router = useRouter();

  const backToHome = () => {
    router.push("/");
  };

  return (
    <button
      className="self-start text-white bg-black rounded-4xl p-2 font-bold cursor-pointer hover:scale-110 transform transition"
      onClick={backToHome}
    >
      <Arrow />
    </button>
  );
};

export default BackButton;

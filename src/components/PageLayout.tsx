import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen p-4 pb-20 md:p-8">
      <main className="flex flex-col gap-[32px] w-full">{children}</main>
    </div>
  );
};

export default PageLayout;

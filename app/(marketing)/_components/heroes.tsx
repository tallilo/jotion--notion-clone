import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/documents.png"
            fill
            className=" dark:hidden object-contain"
            alt="Documents"
          />
          <Image
            src="/documents-dark.png"
            fill
            className="hidden dark:block object-contain"
            alt="Documents"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            alt="Reading"
            src="/reading.png"
            fill
            className="dark:hidden object-contain"
          />
          <Image
            alt="Reading"
            src="/reading-dark.png"
            fill
            className="hidden dark:block object-contain"
          />
        </div>
      </div>
    </div>
  );
};

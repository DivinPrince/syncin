import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full px-4 py-10 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="text-center items-center flex flex-col">
      <div className="relative h-72 w-72">
        <Image src="/images/error.svg" fill alt="Empty" />
      </div>
         <h3 className="
            mt-2
            text-2xl
            font-semibold
            text-gray-400
         ">
            {label}
         </h3>
      </div>
    </div>
  );
};
 
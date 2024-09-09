import EmprtyImg from "../assets/empty.svg";

export default function Empty() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <div className="text-center mb-4">
        <EmprtyImg className="w-[200px] md:w-[400px] lg:w-[500px] h-auto" />
      </div>
      <div className="text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#ED5656] font-semibold">
        No Favorite Event has been added yet.
      </div>
    </div>
  );
}

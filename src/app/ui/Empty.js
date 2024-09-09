import EmprtyImg from "../assets/empty.svg";
export default function Empty() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-center">
        <EmprtyImg className="w-[500px] mt-[-100px] h-[400px]" />
      </div>
      <div className=" text-center text-[16px] text-[#ED5656] font-semibold">
        No Favorite Event has been added yet.
      </div>
    </div>
  );
}

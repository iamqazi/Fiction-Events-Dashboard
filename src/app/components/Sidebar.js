import { Squares2X2Icon, HeartIcon } from "@heroicons/react/24/outline";

export default function Sidebar({ activeView, onSelectView }) {
  return (
    <div className="hidden lg:flex h-auto bg-white rounded-full m-[24px] w-[80px] flex-col items-center px-2 py-4">
      <div
        className={`cursor-pointer group h-12 w-12 rounded-full flex items-center justify-center transition duration-300 mb-6 ${
          activeView === "events" ? "bg-[#ECEAFF]" : "bg-ghost-white"
        }`}
        onClick={() => onSelectView("events")}
      >
        <Squares2X2Icon
          className={`h-[25px] w-[28px] transition duration-300 ${
            activeView === "events" ? "text-vibrant-blue" : "text-icon-color"
          }`}
        />
      </div>
      <div
        className={`cursor-pointer group h-12 w-12 rounded-full flex items-center justify-center transition duration-300 ${
          activeView === "favorites" ? "bg-[#ECEAFF]" : "bg-ghost-white"
        }`}
        onClick={() => onSelectView("favorites")}
      >
        <HeartIcon
          strokeWidth={2}
          className={`h-[25px] w-[28px] transition duration-300 ${
            activeView === "favorites" ? "text-vibrant-blue" : "text-icon-color"
          }`}
        />
      </div>
    </div>
  );
}
